---
sidebar:
  order: 1
title: TrueNAS SCALE -> ClusterTool
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress.
Not done and even not widely available.

All code and docs are considered Pre-Alpha Drafts

:::

## Pre-Migrations Advisory

Prior to migration, we advice the following:

### Ensure all "hostPath" storage is replaced with "NFS"-share based storage

With the future migration to Talos using ClusterTool, you won't technically be able to reach these folders through "hostPath" anymore.
Please ensure to make a *seperate* NFS share on TrueNAS SCALE for each of those folders and edit the TrueNAS SCALE App to point towards said share directly.

Please be sure to use the publically reachable IP of the TrueNAS server and not `127.0.0.1`

To ensure a stable running environment, we would heavily advice to ensure the TrueNAS SCALE host running NFS, uses a static IP and does *NOT* Use DHCP


### Ensure all PVC-storage has VolSync backups (not restore) Enabled

While we've not fully finished our design docs, there are big chances those are going to require you to already have VolSync backups of any PVC present.

Please follow the guides for setting-up VolSync backups on TrueNAS SCALE.
However, setting recovery is not needed and currently not functional on our TrueNAS SCALE Apps. Hence this can be safely skipped


