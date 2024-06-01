---
title: CNPG Backups and Restores on Helm Platforms
---

:::caution

The below is a work in progress

:::

## Requirements

### S3 Provider Setup

See [here](/guides/s3-setup) for instructions on how to setup an S3 storage provider for use. Once this is done, return here and continue with the below.

### Adding Credentials

You can add the credentials by copy-pasting the [Full Examples](/common/credentials#full-examples) section in the common-docs and adapting those accordingly

## CNPG Database Backups

CNPG-backed PostgreSQL databases have their own S3 backup system.

For each chart:

1. Add CNPG backups to each database you want backed up

2. Add the name you gave to the S3 credentials earlier, under the `credentials` section

3. Confirm the data is being sent to your S3 host after ~5 minutes

4. We advise you to set the "mode" to `restore`, this should prevent the app starting with an empty database upon restore.

## CNPG Database Restore

Before CNPG will correctly restore the database, the following modifications need to be done after recreating or importing the app configuration:

1. Ensure you've setup CNPG backups as well as restore as it was previously

2. Ensure the "mode" is set to `recovery`

3. Set "revision" on your restore to match the previous **revision** setting on your backup settings

4. Increase the **revision** on your backup setting by 1 (or set to 1 if previously empty)

## Total System Restore and Migration to New System

When on a completely new system, you can easily restore using the above steps with the following caveats:

- On a non-SCALE system, the PVC backend needs to support snapshots
- The apps need to be called **exactly** the same as they were before, preferably using a previously-exported config
- If you've any non-PVC storage attached, be sure that this is still available or apps won't start until this is resolved
