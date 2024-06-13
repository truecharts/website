---
sidebar:
  order: 6
title: Bootstrap
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Alpha drafts

:::

`bootstrap` applies your config to the first (top) controlplane node in your `talconfig.yaml`, it then "bootstraps" hence creating a new cluster with said node.

After this is done, we apply a number of helm-charts and manifests by default such as:

- Metallb
- Metallb-Config
- Cilium (CNI)
- Certificate-Approver
- KubeApps
- Kubernetes-Dashboard
