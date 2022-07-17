# 04 - Upgrading, Rollback and Delete

With TrueCharts we always push new versions of an App for any change. Even for the containers. This ensures upgrading the App always gives you the Latest-and-Greatest from TrueCharts

## Requirements

- Make sure your storage-pool is created and working
- Make Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to quick-start guide `01 - First time Apps setup`
- Make sure you have a working internet connection and can reach github and truecharts.org from the host system.
- Make sure you already added the TrueCharts catalog from guide 02
- Make sure your App is installed and, preferably, working

## Upgrading

### Upgrading the App  using the GUI

- Go to `Installed Applications`
- Make sure your App reports that an Upgrade is available on the App Card.
- Make note of the current version, you might want to revert to this version in the future.
- click the menu button on the right side of the App card
- Select `Upgrade`
- Confirm your wish to upgrade

The App will then go through a process of backing up(!) and upgrading. If the process fails, your changes will not be submitted and the edit will be reverted. After the process popup disappears, it might take a few minutes to actually deploy your newly upgraded App, due to some things that happen in the background.

## Rollback

### Reverting using the GUI

1. Select the top 3 dots on your application card
2. Select "Roll Back"
3. Under "Version" - Click the dropdown and select which version you would like to rollback to
4. Check the "Roll Back Snapshot" box
5. Select "Roll Back"

### Reverting using the CLI

1. enter cli to enter the SCALE command line interface
2. enter app chart_release rollback It should give you this screen: ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. Enter the release name and item_version like this: ![cli-rollback2](/img/rollback/cli-rollback2.png) (be sure to remove the # before the release name)
4. Click save then click quit It should show something like this, confirming the rollback: ![cli-rollback3](/img/rollback/cli-rollback3.png)

### Finding the last installed version

Sadly enough, SCALE does not lists which versions are available to roll-back to, but does required a version to be entered. There is a short walk-through to get the versioning history for the App in question:

1. run `export KUBECONFIG=/etc/rancher/k3s/k3s.yaml`
2. run  `helm history jackett -n ix-jackett where "jackett"` should be replaced with the name of the App that broke your UI You'll see this: ![history](/img/rollback/history.png) Take note of the "Chart" column, it lists the version numbers you can enter in the rollback interface, prefixed by the App Name. Of coarse only enter the version number in the GUI or CLI, not the name

## Delete

### Delete using the GUI

1. Select the top 3 dots on your application card
2. Select "Delete"
3. Check the "Confirm" box
4. Select "Continue"

### Delete using the CLI

1. Enter Truenas SCALE terminal via the GUI or SSH
2. Type the following command
    - `cli -c 'app chart_release delete release_name=NAME_OF_APPLICATION'`
    - ex: `cli -c 'app chart_release delete release_name=traefik'`

#### Video Guide

![type:video](https://www.youtube.com/embed/ONbMhQJPQwc)
