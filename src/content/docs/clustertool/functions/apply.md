---
sidebar:
  order: 7
title: Apply
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Beta drafts

:::

The `apply` command applies your Talos System configuration to each node in the cluster, existing or new It also runs automated checking of your config file and health checks between each node it has processed, to ensure you don't accidentally take down your whole cluster.

## Bootstrapping
If the cluster has not been bootstrapped yet, Apply will automatically detect this and ask if you want to bootstrap the cluster

Bootstrapping will apply your config to the first (top) controlplane node in your `talconfig.yaml`, it then "bootstraps" hence creating a new cluster with said node.

After this is done, we apply a number of helm-charts and manifests by default such as:

- Metallb
- Metallb-Config
- Cilium (CNI)
- Certificate-Approver
- Spegel
- KubeApps
- Kubernetes-Dashboard

### Bootstrapping FluxCD

During Bootstrapping, if a `GITHUB_REPOSITORY` is set in `clusterenv.yaml`, you will be asked if you also want to bootstrap FluxCD, checkout the getting-started guide for more info

## About Bootstrapping

While we load a lot of helm-charts during bootstrap, we will *never* manage them for you.
You're responsible for maintaining and configuring your cluster after bootstrapping.

Apply and *all other* commands, are just for maintaining Talos itself.
Not any contained helm-charts