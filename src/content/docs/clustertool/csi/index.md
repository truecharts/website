---
title: Container Storage Interfaces
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Beta drafts

:::

Container Storage Interfaces, better known as "CSI", are used to connect storage to kubernetes PVCs.
We at TrueCharts and ClusterTool do not include any form of storage, as everyone has their own preferences.

Guides under this section give some user-made examples of CSI storage options available.
However, as those are user-made, they are not covered by TrueCharts Discord Support.


## Overview

|                  | Location  | Disk Consumption | Snapshot Compat. | RWO/RWX | Notes                                                                                                                         |
|------------------|-----------|------------------|------------------|:-------:|-------------------------------------------------------------------------------------------------------------------------------|
| OpenEBS hostPath | Local     | Partial          | No               | RWX     |                                                                                                                               |
| OpenEBS Device   | Local     | Full             | Troublesome      | RWO     | Partial snapshotting support                                                                                                  |
| OpenEBS ZFS      | Local     | See Notes        | Troublesome      | RWX     | Data not easily accessable and Snapshot notoriously flaky , Full disk required for ZFS , partial disk can be used for OpenEBS |
| TopoLVM          | Local     | Full             | Yes              | RWO     | Data not easily accessable                                                                                                    |
| CEPH -block      | Clustered | Full             | Yes              | RWO     | Data not easily accessable , Shares disks with CEPH -FS                                                                       |
| CEPH -FS         | Clustered | Full             | Yes              | RWX     | Shares disks with CEPH -Block                                                                                                 |
| Longhorn         | Clustered | Both Available   | Yes              | RWO     | Version 1  "possible but flaky " to get working on Talos , Version 2 not Talos Compatible yet                                 |
| Democratic NFS   | Networked | Partial          | Yes              | RWX     | Requires TrueNAS Cron script due to instability                                                                               |
| Democratic iSCSI | Networked | Partial          | Yes              | RWO     | Data not easily accessable , Requires TrueNAS Cron script due to instability                                                  |


## General notes

Some general notes might be cool as well, wirthen out a little longer obviously:


- ClusterTool already includes snapshot controller by default
- Some CSIs try to claim unused disks or even wipe used disks. Be carefull when mixing multiple "full disk" CSIs!
- For multi-pod charts sharing storage, a RWX CSI is required!
- "Networked" CSIs means that ALL pods using that storage stop working when the networked storage goes down

## Our Top Picks

- Local non-volsync storage: OpenEBS hostPath
- Local general storage: TopoLVM
- Clustered RWO storage: CEPH-Block
- Clustered RWX storage: CEPH-FS
- Networked Storage: Democratic NFS
