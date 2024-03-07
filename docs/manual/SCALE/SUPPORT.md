---
title: Support Policy
sidebar_position: 2
---

## TrueCharts on TrueNAS SCALE

TrueCharts aims to always support the latest version of TrueNAS SCALE.
However, sometimes new versions of either TrueNAS or TrueCharts introduces breaking changes.
This document highlights which versions of TrueCharts (or rather branches), support which versions of TrueNAS SCALE.

We also document which versions of TrueNAS will receive TrueCharts updates and for which versions we are accepting bug reports.

### Supported Versions of TrueNAS SCALE

| TrueNAS version    | Branch   | Supported with updates | Accepting Support tickets | Accepting Bug Reports | Notes                                                                                          |
| ------------------ | -------- | ---------------------- | ------------------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| 22.12.4.2 or prior | `master` | :x:                    | :x:                       | :x:                   | Update to 23.10.X Supported Version [TrueNAS SCALE](https://www.truenas.com/docs/scale/23.10/) |
| 23.10.0.1          | `master` | :white_check_mark:     | :x:                       | :x:                   | Update to 23.10.1 [TrueNAS SCALE](https://www.truenas.com/docs/scale/23.10/)                   |
| 23.10.1            | `master` | :white_check_mark:     | :white_check_mark:        | :white_check_mark:    | Stable Release as of 2023-12-19                                                                |
| Nightly            | `master` | :white_check_mark:     | :x:                       | :white_check_mark:    | Please only submit bug reports during code-freeze                                              |

## Project Scope

For more info on what to expect from TrueCharts Apps, be sure to also read the Project Scope documentation:
https://truecharts.org/manual/scope

## Unsupported Features

Sadly enough iX-Systems has build a rather crude middleware in-between Apps and the kubernetes cluster itself. Many of it's features have severe design-flaws and they do not have the expertise in-house nor the intention to fix the codebase.

For this reason we do not support a number of features on TrueNAS SCALE Apps and/or have alternative features implemented ourselves

### Stop-Button

**DO NOT** use the iX-Stop button, it's implementation is severely flawed and only works with kubernetes objects designed by iX-Systems themselves, leaving half of your Apps in a limbo-state.
Instead of the Stop-Button, use TrueCharts "Stop-All" a feature available in the App configuration.

### Storage Roll-back

While Roll-back of kubernetes objects works fine, this is a native feature on Normal Helm deployments as well.
The "include storage" option for rollback on SCALE either does not work at all or breaks some things (like databases).

### Migration to another Pool

While the idea of cross-pool migration is nice, it inherently does not work because it's not kubernetes aware and only works correctly with a limited subset of kubernetes objects created by iX-Systems

Migration, certainly, does not work with CNPG, our postgresql backend at all.
Manual steps might be needed to restore systems containing databases.

### SCALE Certificates

There are a lot of issues with SCALE certificates and they are crudely injected into the kubernetes cluster in ways that are not "normal" when working with kubernetes.
We instead rely on Cert-Manager, an industry standard kubernetes-aware certificate management solution for kubernetes

### iX-Volumes

iX-Volumes are a crudely designed "PVC-like" storage solution by iX-Systems, offloading behavior that should normally be handeled by PVC storage controllers onto the host-system.
This is not a good way to deal with storage on kubernetes and might unexpectingly lead to issues.

We use PVC storage, like normal with kubernetes, instead.

** TrueNAS SCALE 24.04 "DragonFish" Note:**
Starting DragonFish, iX is removing their support for using PVC storage like normal.
Instead we will soon be rolling out our own PVC storage support for TrueNAS SCALE. 

Until this is ready, DragonFish is **NOT** supported


### Backup-and-Restore

iX has not officially released backup-and-restore and SCALE Apps do not work with normal kubernetes backup-and-restore tools like Velero, due to their achaic kubernetes folder-structure-design.
HeavyScript offers an alternative, but we cannot guarantee it works out-of-the-box, at all or with our Apps. But it's the best there is at the moment.

Backup-and-Restore, certainly, does not work with CNPG, our postgresql backend at all.
Manual steps might be needed to restore systems containing databases.


### TrueNAS GPU Selectors

The GPU selectors have weirdly worded options, confusing many users and heavily rely on the host system to say which GPU's are available or not.
This might cause issues with updates, installs, edits etc.
Kubernetes usually handles GPUs itself, the amount entered is just a request of how many GPUs the applications/container wants assigned and kubernetes can handle the rest.

Instead we offer our own option, where you can enter the number of specific GPU's you want assigned under "Resources" in the "Limits" section


:::warning Support Guidelines

Our [Discord](https://discord.gg/tVsPTHWTtr) support (the ticketing system inside #support) is primarily limited to what is covered by our written guides. This includes installing, linking and editing apps. This doesn't mean the actual setup of the application. All #support tickets covered by the staff are done so in a **best effort** policy.

:::
