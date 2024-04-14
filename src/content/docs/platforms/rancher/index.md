---
title: Rancher Introduction
sidebar:
  order: 1
---

Rancher is a Helm-Charts-as-Apps tool.
Rancher, like KubeApps, is developed by industry experts that know how to handle Helm-Charts optimally and doesn't add needless technical complications.

Just like, for example, TrueNAS SCALE Apps, you can use Rancher to install, update and remove our charts via a GUI.

:::tip

Please, always remember to check the content specific to the chart.

:::

## Tier

Rancher is what we call a "Tier 3" deployment options.
This means that, while we expect it to go smoothly, there are likely caveats, limited options and/or we've limited staff available to help out.

Hence we would advice a "Tier 2" or "Tier 1" solution instead.

## Caveats

Rancher is a pretty "heavy" solution. Hence for chart management our preference would be to use [KubeApps instead](/platforms/kubeapps)

## How to Configure

At the moment we don't have (many) specialized GUI elements available on Rancher, so configuration should be done "The Helm Way" via editing the Chart Yaml in the GUI.

This can be done following the [Helm Guides](/platforms/general/)

and checking all the many options available in our [Common Library Chart](/general/common/)
