---
sidebar:
  order: 1
title: Introduction to ClusterTool
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress.
Not done and even not widely available.

All code and docs are considered Pre-Alpha Drafts

:::

ClusterTool is TrueCharts easy deployment and maintanance tool for TalosOS clusters.

It has support for both single-node *and* multi-node clusters, both as Virtual Machines and on Bare-Metal.
It can also be used to bootstrap and maintain a FluxCD environment, sharted with Talos Through a single settings interface.

As security is important, it features integrated encryption and decryption. Based on SOPS and fully FluxCD compatible out-of-the-box