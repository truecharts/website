---
title: KubeApps
sidebar:
  order: 1
---

## Introduction

KubeApps is a Helm-Charts-as-Apps tool.
KubeApps, like Rancher, is developed by industry experts that know how to handle Helm-Charts optimally and doesn't add needless technical complications.

Just like, for example, TrueNAS SCALE Apps, you can use KubeApps to install update and remove our charts via a GUI.

:::tip

Please always remember to check the content specific to the chart.

:::

## Tier

KubeApps is what we call a "Tier 2" deployment option. More information on what this means is available [here](/blog/embrace-kubeapps/)

This means that we expect it to work smoothly, all options being technically available and we've enough staff available to help out with any required support. With Tier 2 options, you should not have to expect issues caused by the deployment option.

## How to configure

At the moment we don't have (many) specialized GUI elements available on KubeApps, so configuration should be done "The Helm Way" via editing the Chart Yaml in the GUI. We do have a couple of basic guides for adding [ingress](/platforms/general/guides/add-ingress/) and [storage](/platforms/general/guides/add-storage/), though.

Be sure to check all the many options available in our [Common Library Chart](/general/common/)
