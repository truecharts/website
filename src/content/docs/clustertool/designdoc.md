---
sidebar:
  order: 3
title: Design Docs
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Alpha drafts

:::


This document aims to note-down some quick notes on the general design goals of ClusterTool.

- We would like to use GO, because it would make it a lot easier to support multiple platforms
- We also would like to get rid of the requirement to fork a repo
- We would prefer not to require users to have a complete boatload of folder structure (from said fork) configured for it to even play-nice
- We would like to cut down on the list of required dependencies and integrate everything into the go-tool as far as we can.

## Cluster Design

### Storage

Storage will be rendered by default by adding OpenEBS LocalPV. This means no clustered-storage is added.

Reasoning behind this:
- Clustered storage is highly personal
- Clustered storage has increased complexity

Challenges:
- Doing R&D to see if VolSync Restic Copy instead of snapshots work well enough

### Networking

- We will pack MetalLB as the default LoadBalancer, as it "just works" pretty well
- We will pack Cilium as CNI, as it's basically the best CNI out there
- We will **NOT** pack ingress by default, as that can quite easily be added after the fact

### Management

- We will add kubeapps, exposed to IP:port by default, to give users an easy copy-paste interface to launch helm-charts
- We will ship kubernetes-dashboard exposed to IP:Port (different ip than kubeapps) by default as well, to give an easy status and management interface
- FluxCD bootstrapping will be offered as an option and will automatically also manage the above added manifests

### Security

- A SOPS encryption key will be created by default
- Regardless of FluxCD install, we will always load the encryption key into the cluster
- We will offer quick tooling to encrypt and decrypt sensitive data

## Structure

There are basically multiple parts to it:

Part A. Generating TalosOS configs -> Talhelper and custom code (mixed)

 1. Verify talconfig (only if talos cluster)
 2. Create talsecret (only if talos cluster)
 3. Run complete config generation
 4. Ensure talenv/secrets are also uploaded to the cluster
 5. Ensure default helm values.yaml Files for included charts, are reflected under `/manifests`

Part B. Bootstrap a Cluster

 1. Applying configs to cluster nodes (if it's a Talos Cluster) -> Talhelper
 2. Bootstrap Talos if-needed and if it's a Talos Cluster -> Talhelper
 3. Load our default base charts on bootstrap -> Custom code

Part C. 

 1. Update Talos nodes if Talos cluster -> Talhelper with some extra magic
 2. Update k8s on Talos if Talos cluster -> Talos CLI
 3. Update our base charts if needed -> Custom code

Part D. Bootstrapping fluxcd (optional) -> Mostly just a fluxcd command

## Other tools:

- SOPS encryption
- SOPS decryption
- Prep working directory

## General Code flow for Talos stuff:

- Select Talos function
- Have "all" function to select all
- Render node list function for TUI/GUI from config
- Or select a list of nodes (now by name, comma sep, future GUI/TUI)
- Have a healthcheck function that takes node to check
- Prior to run, run health checks
- When parsing over, run a healthcheck after each node, warning to confirm if it doesn't work out
- Bootstrap only does the first node, after which user can apply

## Interesting other features

- We should craft a function that goes over the IPs listed and fills the storage and networking hardware found on the nodes as comments to the config, so users can easily configure.
