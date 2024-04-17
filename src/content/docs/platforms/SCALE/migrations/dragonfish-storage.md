---
title: Cobia to DragonFish Storage Migration
---

:::caution[DragonFish is not yet supported]

This is a pre-release guide, TrueNAS SCALE 24.04 DragonFish is explicitly **NOT** yet supported by TrueCharts

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

We highly advise moving to the new storage backend for existing Apps as well. _At a later date we will update this with migration instructions as well._
Until we have migration steps ready, existing apps will continue to work like normal.
