# Dataset and Share Setup Guide

This guide provides the recommended setup for dataset permissions, shares and application data storage.

## Dataset Permissions

TrueCharts applications are designed to use the `apps` (568) user for data permissions. Configure your dataset permissions as shown below to allows applications access.

:::info ACL

If your existing dataset shows `Edit ACL` then you need to `Strip ACL` before continuing.

:::

![data-perms](./img/data-perms.png)

## SMB Access

For SMB access you will need to create a user(s) that are members of the `apps` group and modify the default SMB settings. 

### SMB User

Create a user and assign it to the `apps` group under `Auxiliary Groups` as shown below.

![user-groups](./img/user-groups.png)

### SMB Share

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="bluefin" label="Bluefin" default>
Create an SMB Share as shown below. All settings should remain default except for `Auxiliary Parameters`.

:::warning ACL

After saving SMB settings TrueNAS Scale will launch an `Edit ACL` screen. Do **NOT** `Save Access Control List` as this will overwrite the previously configured permissions. You can make any selection from the TrueNAS GUI to exit this screen, SMB Share will still be configured.

:::

![share-smb](./img/share-smb.png)

```bash
force user=apps
force group=apps
```
  </TabItem>
  <TabItem value="cobia" label="Cobia">
Create an SMB Share as shown below. All settings should remain default.

:::warning ACL

After saving SMB settings TrueNAS Scale will ask if you want to `Configure ACL`. Do **NOT** as this will overwrite the previously configured permissions. You can select `Cancel`, SMB Share will still be configured.

:::

![share-smb](./img/share-smb-cobia.png)

#### Setup SMB Share Auxiliary Parameters

With the release of Cobia the `Auxiliary Parameters` has been removed from the WebUI. The below will guide you through the use of API calls and the system shell to add the correct parameters.

Access the API Documentation using Scale http://IP:PORT/api/docs/ (ie. http://192.168.1.4:81/api/docs/)

Select `RESTful 2.0`

![smb-1](./img/smb-1.png)

Select `Authorize` and enter login as `root` click close when complete.

![smb-2](./img/smb-2.png)

Scroll down to `sharing.smb`

Select the down arrow on `GET /sharing/smb`

![smb-3](./img/smb-3.png)

Select `Try it out`

![smb-4](./img/smb-4.png)

Select `Execute`

![smb-5](./img/smb-5.png)

Take note of the response. You are looking for the `id` of the SMB Share you previously created.

![smb-6](./img/smb-6.png)

Now select the down arrow on `PUT /sharing/smb/id/{id}`

![img](./img/smb-7.png)

Select `Try it out`

![img](./img/smb-8.png)

Enter the ID previously identified in the `id` block and select `Execute`.

![img](./img/smb-9.png)

Copy the output of the `Curl` block.

![img](./img/smb-10.png)

Access the system shell as `root`.

Paste the output from the `Curl` block.

![img](./img/smb-11.png)

Change the last line with the following input:

```bash
-d '{"auxsmbconf": "force user=apps\nforce group=apps"}'
```

![img](./img/smb-12.png)

Hit enter and you should see the following output.

![img](./img/smb-13.png)

  </TabItem>
  <TabItem value="cobia-script" label="Cobia (Script Method)">
Create an SMB Share as shown below. All settings should remain default.

:::warning ACL

After saving SMB settings TrueNAS Scale will ask if you want to `Configure ACL`. Do **NOT** as this will overwrite the previously configured permissions. You can select `Cancel`, SMB Share will still be configured.

:::

![share-smb](./img/share-smb-cobia.png)

#### Setup SMB Share Auxiliary Parameters

With the release of Cobia the `Auxiliary Parameters` has been removed from the WebUI. The below will guide you through the use of script to add the correct parameters.

Generate an API key, access http://IP:PORT/ui/apikeys/ (ie. http://192.168.1.4:81/ui/apikeys/)

Select `Add`

![api-keys-add](./img/api-keys-add.png)

Enter a name and click `Save`

![api-keys-smb](./img/api-keys-smb.png)

Save a copy of the API key for use later

![api-keys-copy](./img/api-keys-copy.png)

Download the script file to your TrueNAS server using the system shell.

```bash
wget https://raw.githubusercontent.com/xstar97/scale-scripts/main/scripts/smbAuxUpdater.sh
```

Edit the script using a text editor like nano.

```bash
nano smbAuxUpdater.sh
```

Modify the following variables:
- `BASE_URL` make sure the port is set to whatever your TrueNAS uses
- `AUTH_VALUE` set this to the API key you previously created
- `SMB_USERS` set this to the user(s) you want to have SMB access

![script-parms](./img/script-parms.png)

Make the script executable

```bash
chmod +x smbAuxUpdater.sh
```

Run the script

```bash
./smbAuxUpdater.sh
```

The script will ask if you want to update the SMB auxiliary parameters for each share. Answer yes or no as needed.

![script-question](./img/script-question.png)
  </TabItem>
</Tabs>

## NFS Share

Create an NFS Share which will be used for applications to access the dataset. Configure an NFS Share as shown below. All settings should remain default.

![share-nfs](./img/share-nfs.png)

## App Storage

For most applications data access will be configured under `Additional App Storage`.

:::caution APP CONFIG STORAGE

NFS should **NOT** be used for `App Config Storage`. This should be left on the default of PVC.

:::

Configure `Additional App Storage` as shown below. In some applications data storage is part of the application configuration, in those cases you would still configure NFS but not need to setup a `Mount Path`.

![app-storage](./img/app-storage.png)
