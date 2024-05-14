---
title: Backup, Migrations and Restoring
sidebar:
  order: 15
---

:::caution[Best Effort Policy]

This guide has been written with the best efforts of the staff and tested as best possible. We are not responsible if it doesn't work for every scenario or user situation.
This guide has been thoroughly tested with TrueNAS SCALE 22.12.0

:::

:::caution[WIP]

We're completely reworking the way we handle backups, moving away from platform-specific solutions to a "one size fits everyone" system using VolSync and CNPG backups.
We're also making it known that the old guide will not work on TrueNAS SCALE 24.04.X "DragonFish"

:::


## Requirements

### System Apps

We expect users to have fully followed the SCALE quick-start [guide](/scale) and hence have installed *all* [operators](/scale/#minimal-getting-started-setup-with-scale) from the `system` train as listed there. This includes `VolumeSnapshots` and `VolSync`, the latter of which depends on `Prometheus-Operator` and `VolumeSnapshots`, so ensure you have installed those first prior to installing VolSync.

### HeavyScript

This guide makes use of the command-line tool called `HeavyScript` and assumes you're already familiar with creating backups using the BASH HeavyScript functions from the Scale command-line.

Please refer to the GitHub page for [HeavyScript](https://github.com/Heavybullets8/heavy_script) to follow the commands and instructions below.

### S3 Backup Provider

Our only officially supported system for "offsite" backups is S3(-compatible) storage. Offsite can be either another machine with minio or a S3 Storage provider like [BackBlaze](https://www.backblaze.com/) or [AWS](https://aws.amazon.com/s3/pricing/). Currently our only officially supported backup provider is BackBlaze, but we're looking forward to expanding this list in the future.


## Backup

### General Configuration Steps

- Enter your S3 credentials under `credentials`
- TBA

### Exporting App Configuration

To be done. This section will contain information to export your App configuration so it can be imported later.

### PVC Backups

PVC data can be easily backed-up to S3 storage by using our integrated `VolSync` support.

For each App, Destination (automatic restore) *must* set on creation of the App by doing the following:

- Add `VolSync` to each persistence object you want synced
- Add the name you gave to the S3 credentials under the `credentials` section of VolumeSnapshots
- Enable `source` (backup) and/or `destination` (automatic restore)
- Confirm the data is being sent to your S3 host after ~5 minutes

**Note: You do not have to manually create the bucket beforehand, although this is recommended to ensure the bucket-name is available beforehand**

### CNPG Database Backups

CNPG-backed PostgreSQL databases have their own S3 Backup system. We have integrated it in such a way that they can safely share a bucket with the above PVC backups.

For each App:

- Add CNPG backups to each database you want backed up
- Add the name you gave to the S3 credentials under the `credentials` section
- Confirm the data is being sent to your S3 host after ~5 minutes
- We advise you to set the "mode" to `restore`, this at should prevent the app starting with an empty database on restore.

## Restore

### Importing App Configuration

To be done. This section will contain information to import your App configuration so you do not have to manually recreate it.

### Recreating an App

When you've no exported app configuration, you can remake the app while also restoring your PVC and CNPG backups using the steps as follows:

- Ensure the app name matches the name of the app previously backed-up
- Enter the same S3 credentials under the `credentials` section
- Preferably ensure all other configuration options are setup precisely the same as the last time you used the app

### PVC data Restoration

PVC data restoration will happen automatically before the app will start. Please be aware this can take a while depending on the size of the backup, your connection speed, etc.

### CNPG Database Restore

Before CNPG will correctly restore the database, the following modifications need to be done after recreating or importing the app configuration:

- Ensure you setup CNPG backups as well as restore as it was previously
- Ensure "mode" is set to `recovery`
- Set "revision" on your restore to match the previous **revision** setting on your backup setting
- Increase the **revision** on your backup setting by 1 (or set to 1 if previously empty)

### Total System Restore and Migration to New System

When on a completely new system, you can easily restore using the above steps with the following caveats:

- On a non-SCALE system, the PVC backend needs to support snapshots
- The Apps need to be called **PRECISELY** the same, preferably using a previously-exported config
- If you've any non-PVC storage attached, be sure that this is still available or Apps won't start until this is resolved

## Video Guide

TBD

## Developer Notes

### PVC mountpoints on Replication

In some/all cases, PVC mountpoints are not correctly set to `legacy` after replication. To fix this issue manually, run:

```bash
zfs set mountpoint=legacy "$(zfs list -t filesystem -r "$(cli -c 'app kubernetes config' | grep -E "pool\s\|" | awk -F '|' '{print $3}' | tr -d " \t\n\r")" -o name -H | grep "volumes/pvc")"
```
