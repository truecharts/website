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

We're completely reworking the way we handle backups, moving away from platform-specific solution to a "one size fits everyone" system using VolSync and CNPG backups.
We're also made aware that the old guide will not work on TrueNAS SCALE 24.04.1 DragonFish

:::


## Requirements

### System Apps

We expect users to have fully followed the quick-start guide and hence have installed *all* operators listed there

### HeavyScript

This guide makes use of the command-line tool, called `HeavyScript` and assumes you've already created backups using the BASH HeavyScript.

Please refer to the GitHub page for [HeavyScript](https://github.com/Heavybullets8/heavy_script) to follow the commands and instructions below.

### S3 Backup Provider

Our only officially supported system for "offsite" backups is S3(-compatible) storage. Offsite can be either another machine with minio or a S3 Storage provider like BackBlaze or AWS.
Currently our only officially supported backup provider is BackBlaze. But we're looking forward to expand this list in the future.


## Backup

### General configuration

- Enter your S3 credentials under `credentials`

### Exporting App Configuration

To be done.
This section will contain information to export your App configuration so it can be imported later

### PVC Backups

PVC data can be quite-easily backed to S3 storage, by using our integrated `VolSync` support.

For each App, Destination (automatic restore) *has to be* set on creation of the App:
- Add `VolSync` to each persistence object you want synced
- Add the name you gave to the S3 credentials under `credentials`
- Enable `source` (backup) and/or `destination` (automatic restore)
- confirm the data is writhen to your s3 server after 5 minutes

*you do not have to manually create the bucket beforehand, although this can be adviced to ensure the bucket-name is available beforehand*

### CNPG Database Backups

CNPG-backed postgresql databases, have their own S3 Backup system.
Luckily enough we integrated it in such a way, that they can safely share a bucket with the PVC backups.

For each App:
- Add CNPG backups to each database you want backed up
- Add the name you gave to the S3 credentials under `credentials`
- confirm the data is writhen to your s3 server after 5 minutes
- We advice to set the `mode` to `restore`, this at should prevent the app to start with an empty database on restore.

## Restore

### Importing App Configuration

To be done.
This section will contain information to import your App configuration so you do not have to manually recreate it

### Recreating an App

When you've no exported app configuration, you can remake the app while also restoring your PVC and CNPG backups as follows:
- Ensure the app name matches the name of the app previously backed-up
- Enter the same S3 credentials under `credentials`
- Preferably ensure all other configuration options are setup precisely the same.

### PVC data restoration

PVC data restoration will happen automatically before the app will start.
Please be aware this can take a while depending on the size of the backup

### CNPG Database Restore

Before CNPG will correctly restore the database, the following modifications need to be done after recreating or importing the app configuration:

- Ensure you setup CNPG backups as well as restore like it was previously
- Ensure `mode` to `recovery`
- set `revision` on your restore to match the previous `revision` setting on your backup setting
- Increase the `revision` on your backup setting by 1 (or set to 1 if previously empty)

### Total System restore and Migration to new system

When on a completely new system, you can easily restore using the above steps giving the following caveats:

- On a non-SCALE system, the PVC backend needs to support snapshots
- The Apps need to be called PRECISELY the same, preferably using previously exported config
- If you've any non-PVC storage attached, be sure that this is still available or Apps wont start

## Video Guide

TBD

## Developer notes

### PVC mountpoints on replication

In some/all cases PVC mountpoints are not correctly set to `legacy` after replication.
To fix this issue manually, run:

>

```bash
zfs set mountpoint=legacy "$(zfs list -t filesystem -r "$(cli -c 'app kubernetes config' | grep -E "pool\s\|" | awk -F '|' '{print $3}' | tr -d " \t\n\r")" -o name -H | grep "volumes/pvc")"
```
