# Postgres Database Info and Backup

The information below is to help with current or future migration of the Postgres databases on your system running TrueCharts apps.

## Prerequisites

The user running the scripts must have permissions to access the Truenas Scale host shell and execute `kubectl` commands.

## How to list database login info for TrueCharts apps

You can use these details to login to e.g. `pgadmin`, one of the TC apps that lets you manage databases.

```bash title="tcdbinfo.sh"
#!/bin/bash

# get namespaces
namespaces=$(k3s kubectl get pods -A | grep postgres | awk '{print $1}')

# iterate over namespaces
( printf "Application | Username | Password | Address | Port\n"
for ns in $namespaces; do
    # extract application name
    app_name=$(echo "$ns" | sed 's/^ix-//')

    # get username, password, addresspart, and port
    creds=$(k3s kubectl get secret/dbcreds --namespace "$ns" -o jsonpath='{.data.url}' | base64 --decode)
    username=$(echo "$creds" | awk -F '//' '{print $2}' | awk -F ':' '{print $1}')
    password=$(echo "$creds" | awk -F ':' '{print $3}' | awk -F '@' '{print $1}')
    addresspart=$(echo "$creds" | awk -F '@' '{print $2}' | awk -F ':' '{print $1}')
    port=$(echo "$creds" | awk -F ':' '{print $4}' | awk -F '/' '{print $1}')

    # construct full address
    full_address="${addresspart}.${ns}.svc.cluster.local"

    # print results with aligned columns
    printf "%s | %s | %s | %s | %s\n" "$app_name" "$username" "$password" "$full_address" "$port"
done ) | column -t -s "|"
```
## Backing up databases from TrueCharts apps

```bash title="tcdbbackup.sh"
#!/bin/bash
# create backup folder
folder="./dumps/"
mkdir -p "$folder"

# get namespaces with postgres database pod
namespaces=$(k3s kubectl get pods -A | grep postgres | awk '{print $1}')

for ns in $namespaces; do
  # extract application name
  app=$(echo "$ns" | sed 's/^ix-//')

  echo "Creating database backup for $app."

  file="$app.sql"
  
  # Scale down deployment to avoid inconsistencies in DB
  k3s kubectl scale deploy "$app" -n "$ns" --replicas=0
  while true; do k3s kubectl get pods -n "$ns" | grep -i -q terminating || break; done;

  k3s kubectl exec -n "$ns" -c "$app"-postgresql "$app"-postgresql-0 -- bash -c 'PGPASSWORD=$POSTGRES_PASSWORD pg_dump -Fc -U $POSTGRES_USER -d $POSTGRES_DB -f /tmp/'$file
  k3s kubectl cp -n "$ns" -c "$app"-postgresql "$app-postgresql-0:tmp/$file" $folder$file

  # Scale deployment back up
  k3s kubectl scale deploy "$app" -n "$ns" --replicas=1
  
  if [ ! -f "$folder$file" ]; then
    >&2 echo "$folder$file does not exist."
    exit 1
  fi

  echo "File $file created."

done

exit 0
```

## Setting up the files

In Truenas Scale, create a dataset that can house the script files. Put the `.sh` files in that dataset. Navigate to the dataset from the host shell. Make the files executable.

```bash
cd /mnt/tank/scripts/databases
chmod +x tcdbinfo.sh tcdbbackup.sh tcdbrestore.sh
```

## Creating a database backup

To create a backup of a database, run the `tcdbbackup.sh` script. This script will create a backup of all databases running in Truenas Scale.

```bash
./tcdbbackup.sh
```

This script will create a `.sql` file for each database, and store them in the `./dumps` directory.


