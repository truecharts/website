---
title: General Helm Support Policy
---

This manual contains general information on working with TrueCharts Charts using Helm directly.
As well as when editing Helm Yaml for tools like FluxCD, KubeApps and Rancher

:::tip

Please, always remember to check the content specific to the chart.

:::

## Tier

Helm is our one-and-only "first tier" platform, everything is based on Helm itself and hence everything is most thoroughly tested on Helm.
We always advice using a first-tier or second-tier platform.

## TrueCharts on Helm

TrueCharts aims to always support the latest version of Helm.
However, sometimes new versions of either TrueNAS or TrueCharts introduces breaking changes.
This document highlights which versions of TrueCharts (or rather branches), support which versions of Helm.

We also document which versions of TrueNAS will receive TrueCharts updates and for which versions we are accepting bug reports.

### Supported Versions of Helm

| TrueNAS version | Branch   | Supported with updates | Accepting Support tickets | Accepting Bug Reports | Notes |
| --------------- | -------- | ---------------------- | ------------------------- | --------------------- | ----- |
| 3.11 and prior  | `master` | ✅                     | ❌                        | ❌                    |       |
| 3.12 - 3.14     | `master` | ✅                     | ✅                        | ✅                    |       |

## Project Scope

For more info on what to expect from TrueCharts Apps, be sure to also read the [Project Scope documentation](/general/scope)
