# Storage Configuration on SCALE 24.04 DragonFish

Basic setup of the TrueCharts [Gluetun](https://github.com/qdm12/gluetun/) VPN addon

:::caution DragonFish NOT supported

This is a pre-release guide, TrueNAS SCALE 24.04 DragonFish is explicitly **NOT** supported by TrueCharts.

:::

## Important Changes

iX-Systems does **not** maintain or support any form of PVC-based storage anymore.
That includes their own "legacy" storageBackend.

This means that the following SCALE features loose some functionality:

**SCALE Backup and Restore (unreleased feature through heavyscript)**

*Will not backup storage anymore in any way, shape or form*


**SCALE Rollback**

*Will not be able to rollback any storage anymore*


**SCALE App pool migration**

*Will not be able to move storage with the pool migration*


The above issues exist for both our new TrueCharts-made OpenEBS storage-solution **and** users using already-installed apps with legacy storage backend from iX-Systems.


## Existing Users

### Pre-Upgrade

Before upgrading to TrueNAS SCALE 24.04 "DragonFish" it's absolutely crucial to execute the following steps on each TrueCharts App installed:

- Edit the App
- Locate any storage
- If the "Type" is set to "PVC"
- Ensure the "storageClass", likely currently empty, is set to "SCALE-ZFS"
- Save the edited App

### pre- or Post- upgrade

Enter the following command in the TrueNAS SCALE shell, ran as root:

`k3s kubectl delete storageClass openebs-zfspv-default`

### Post-Upgrade

Install the App `OpenEBS` from the Operator train.
This contains our own version of PVC storage.

It's important to set the `basePath` to where you want to store the folders with App data.

When the upgrade is done, you will have two types of storage:

#### "Legacy" storage

This is hidden in hidden datasets under `ix-applications`.
This is **only** available for Apps that where installed prior to upgrading to DragonFish
It can be mounted using Heavyscript.

#### New Storage Managed by TrueCharts

This storage is based on "folders" not "datasets", this means the data is freely accessable via the host shell, shares and ssh.
The folders are stored in the path you entered above.

Folders are, however, still using randomised names are are **not** intended to be user servicable, but when needed HeavyScript is not required anymore.


## New Users

Install the App `OpenEBS` from the Operator train.
This contains our own version of PVC storage.

It's important to set the `basePath` to where you want to store the folders with App data.

All your application data set to "pvc" will now be stored under the path you set.


## Future Changes

Future versions of TrueNAS SCALE **and** TrueCharts, will remove support for Legacy Storage **completely**

### Migrating to new storage

We highlight advice moving to the new storage backend for existing Apps as well.
*At a later date we will update this with migration instructions as well*
