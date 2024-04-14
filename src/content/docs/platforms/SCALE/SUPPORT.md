---
title: TrueNAS SCALE Support Policy
sidebar:
  order: 2
---

## TrueCharts on TrueNAS SCALE

TrueCharts aims to always support the latest version of TrueNAS SCALE.
However, sometimes new versions of either TrueNAS or TrueCharts introduce breaking changes.
This document highlights which versions of TrueCharts (or rather branches) support which versions of TrueNAS SCALE.

We also document which versions of TrueNAS will receive TrueCharts updates and for which versions we are accepting bug reports.

### Supported Versions of TrueNAS SCALE

| TrueNAS Version    | Branch   | Supported With Updates | Accepting Support Tickets | Accepting Bug Reports | Notes                                                                                          |
| ------------------ | -------- | ---------------------- | ------------------------- | --------------------- | ---------------------------------------------------------------------------------------------- |
| 22.12.4.2 or prior | `master` | :x:                    | :x:                       | :x:                   | Update to 23.10.X supported version [TrueNAS SCALE](https://www.truenas.com/docs/scale/23.10/) |
| 23.10.2            | `master` | :white_check_mark:     | :white_check_mark:        | :white_check_mark:    | Stable release as of 22 Feb 2024                                                               |
| 24.04.X            | `master` | :x:                    | :x:                       | :x:                   | Not yet supported                                                                              |
| Nightly            | `master` | :white_check_mark:     | :x:                       | :white_check_mark:    | Please only submit bug reports during code-freeze                                              |

## Project Scope

For more info on what to expect from TrueCharts Apps, be sure to also read the [Project Scope documentation](/general/scope)

## Unsupported Features

iX-Systems has built a rather crude middleware in-between Apps and the Kubernetes cluster itself. Many of its features have severe design flaws, and they do not have the expertise in-house nor the intention to fix the codebase.

For this reason we do not support a number of features on TrueNAS SCALE Apps and/or have alternative features implemented ourselves. This includes

### Stop Button

**DO NOT** use the iX-provided `Stop` button in the SCALE GUI. Its implementation is severely flawed and only works with Kubernetes objects designed by iX-Systems themselves, leaving your Apps open to being left in a limbo state.
Instead of the Stop button, use either

- The TrueCharts "Stop-All" feature available in the apps configuration/edit section or

- [HeavyScript](https://github.com/Heavybullets8/heavy_script) with the `-x appname` or `--stop appname` arguments.

### Storage Rollback

While rollback of Kubernetes objects works fine, this is a native feature on normal Helm deployments as well.
The "include storage" option for rollback on SCALE either does not work at all or breaks some things (like databases).

### Migration to another Pool

While the idea of cross-pool migration is nice, it inherently does not work because it's not Kubernetes aware and only works correctly with a limited subset of Kubernetes objects created by iX-Systems.

Migration certainly does not work with CNPG, our PostgreSQL backend at all.
Manual steps might be needed to restore systems containing databases.

### SCALE Certificates

There are a lot of issues with SCALE certificates and they are crudely injected into the Kubernetes cluster in ways that are not "normal" when working with Kubernetes.
We instead rely on `Cert-Manager`, an industry-standard Kubernetes-aware certificate management solution for Kubernetes.

### iX-Volumes

iX-Volumes are a crudely designed "PVC-like" storage solution by iX-Systems, offloading behavior that should normally be handled by PVC storage controllers onto the host system.
This is not a good way to deal with storage on Kubernetes and might unexpectingly lead to issues.

We use PVC storage, like normal with Kubernetes, instead.

**TrueNAS SCALE 24.04 "DragonFish" Note:**
Starting with DragonFish, iX-Systems is removing their support for using PVC storage like normal. Instead, we will soon be rolling out our own PVC storage support for TrueNAS SCALE.

Until this is ready, DragonFish is **NOT** supported.

### Backup and Restore

iX-Systems has not officially released backup and restore, and SCALE Apps do not work with normal Kubernetes backup and restore tools like Velero, due to their achaic Kubernetes folder-structure-design.
[HeavyScript](https://github.com/Heavybullets8/heavy_script) offers an alternative, but we cannot guarantee it works out-of-the-box, at all or with our Apps. But it's the best there is at the moment.

Backup and Restore certainly does not work with CNPG, our PostgreSQL backend at all. Manual steps might be needed to restore systems containing databases.

### TrueNAS GPU Selectors

The GPU selectors have weirdly worded options, confusing many users and heavily rely on the host system to say which GPUs are available or not. This might cause issues with updates, installs, edits etc.
Kubernetes usually handles GPUs itself, the amount entered is just a request of how many GPUs the applications/container wants assigned and Kubernetes can handle the rest.

Instead we offer our own option, where you can enter the number of specific GPUs you want assigned under "Resources" in the "Limits" section

:::warning Support Guidelines

Our [Discord](/s/discord) support (the ticketing system inside #support) is primarily limited to what is covered by our written guides. This includes installing, linking and editing apps. This doesn't mean the actual setup of the application. All #support tickets covered by the staff are done so on a **best effort** basis.

:::
