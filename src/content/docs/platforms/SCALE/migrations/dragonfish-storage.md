---
title: Cobia to DragonFish Storage Migration
---

:::caution[Execute all steps at once]

Its imperative to execute **ALL** steps in this guide in one sitting.
If you reboot or take any kind of time-off, we cannot guarantee your data and apps stay working

:::

## Important Changes

iX-Systems no longer maintains or supports any form of PVC-based storage for apps. This includes their own "legacy" storage backend. This means that when using the following SCALE features, you will lose some functionality:

**SCALE Backup and Restore (unreleased feature available through HeavyScript)**

_Will no longer back up storage at all._

**SCALE Rollback**

_You will no longer be able to roll back any storage._

**SCALE App pool migration**

_You will no longer be able to migrate storage using the pool migration feature in SCALE._

The above issues exist both for our new in-house TrueCharts OpenEBS storage solution **and** for users using already installed apps that use the legacy storage backend from iX-Systems.

## For existing Users and Apps

### Post Cobia-to-DragonFish Upgrade Steps

Once you have completed updating your TrueNAS SCALE system to DragonFish, enter the following command in the TrueNAS SCALE shell ensuring it's ran as root and as shown below:

`rm /mnt/tank/ix-applications/k3s/server/manifests/zfs-operator.yaml`

_Replace `tank` in the command above with the name of your Apps-pool_

and

`k3s kubectl delete -f https://truecharts.org/openebsrem.yaml`

and

`k3s kubectl delete storageClass openebs-zfspv-default`

Continue with the OpenEBS section of our TrueNAS SCALE Getting Started [guide](/platforms/scale/guides/getting-started#openebs-setup) and once complete, continue as below.

After installing the `OpenEBS` app from the above guide, run the following and you're done:

`sudo curl -s https://truecharts.org/openebsmv.sh | bash`

### Migrating to new storage

Sadly enough, we require re-installation of all Apps to be migrated to the new storage solution.

However, thanks to the great collaboration with HeavyBullets, you can use his TT-Migration tool, to automate most of the installation process:
https://github.com/Heavybullets8/TT-Migration
