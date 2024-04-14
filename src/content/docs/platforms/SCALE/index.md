---
title: TrueNAS SCALE Introduction
sidebar:
  order: 1
---

SCALE Apps is a Helm-Charts-as-Apps tool.
However, in contrast to more "premium-grade" solutions, like kubeapps, it's not built by Kubernetes specialists and it does not offer complete freedom to deploy helm charts.
Nor can you manually edit Chart-Yaml files manually.

This makes SCALE Apps a great tool for users running a TrueNAS SCALE NAS and running a few applications on it.
But makes it less optimal for Advanced users.

:::tip

Please, always remember to check the content specific to the chart.

:::

## Tier

SCALE Apps is what we call a "Tier 3" deployment options.
This means that, while we expect it to go smoothly, there are likely caveats, limited options and/or we've limited staff available to help out.

Hence we would advice a "Tier 2" or "Tier 1" solution instead.

## Caveats

SCALE Apps is a pretty limited solution.
For normal home-lab use, TrueCharts SCALE Apps, likely would suffice just-fine.
But for more advanced setups, it's not sufficient.

It also adds significant layers "middleware" between the App GUI and kubernetes/helm, which is prone to lead to niche issues that other deployment options do not face.

We also would like to point out, that iX-Systems, the creators of TrueNAS SCALE, do not have much kubernetes experience or specialised engineers available.
This does affect the quality of the end-product.

Hence for chart management our preference would be to use [KubeApps](/platforms/kubeapps/) instead.

## How to Configure

This can be done following the SCALE Guides [here](/platforms/scale/guides/scale-intro/)
