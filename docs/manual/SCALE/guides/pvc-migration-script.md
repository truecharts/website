# PVC Migration Script

**Credit**

This guide uses the [HeavyBullets Migration Guide for PVCs](https://github.com/Heavybullets8/TT-MigrationAll) so credit for this one goes there, also to [Zasx](https://github.com/ZasX) from the [TrueCharts](https://www.truecharts.org) team for the steps used to create these guides/scripts

## Warnings

**Note:** This will *not* be sufficient for apps that have a PostgreSQL database that were updated to the new CNPG common, Please see the more extensive guide for those apps. As well the script will exclude apps with database pods so those will have to be done manually or using our more extensive [PVC Migration Guide with Postgres support](https://truecharts.org/manual/SCALE/guides/migration-pvc/) guide.

**Note:** Make sure you have a Heavyscript backup *and* a replication of this backup.

:::warning

Really make sure you have a backup/replication ready in case something goes wrong or you delete a PVC too quickly

:::

Here's an incomplete list of tested apps

filebrowser
custom-app created apps
Komga
emulatorjs
homarr
freshrss
mysql-workbench
bazarr
flaresolverr
phpldapadmin
podgrab
sabnzb
uptime-kuma
unpackerr
autoscan
tautulli
overseerr
code-server
Jellyseerr
adguard-home

## Migration Steps

1. First things first create a directory inside a dataset that's NOT `ix-applications`, for this guide I used `migration`

2. Clone the `Heavybullets Migration Git Repo`

```bash
git clone https://github.com/Heavybullets8/TT-Migration.git
```

3. Go to the `TT-Migration` sub-directory and excute

```bash
bash migrate.sh
```

4. Follow prompts 

    a. Choose Application (for example `filebrowser`)
![Copy Config](img/Copy-App-Config.png)

    b. Once that's done press `x` and continue to the next screen and install the new Application
![New App Install](img/New-App-Config.png)

    c. Watch the app finish
    ![New App Finish](img/New-App-Finish.png)

5. Enjoy new app

### Note

If an application fails to stop the NEW application, and throws any errors. You can attempt to run the script again, with:

```bash
bash migrate.sh -s
```

which will skip to the step immediately after deleting the old application.
