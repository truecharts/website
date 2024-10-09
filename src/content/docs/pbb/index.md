---
sidebar:
  order: 1
title: Introduction
---

G.O.A.T Cluster is our attempt at creating a ready-to-rock cluster and comprohensive guides for setting it up.

From setting-up a bare-metal machine or VM using TalosOS Linux
To installing whatever application you want from our Helm repository, we got you covered!

We even aim to provide thorough support throughout the years to keep people up-and-running with these clusters.

## GOAT Parts

For building a GOAT cluster we've decided to use the following components:

- TrueCharts ClusterTool
- FluxCD as GitOps toolgit
- TalosOS as Operating System
- MetalLM as a LoadBalancer
- Celium for kubernetes networking
- Cert-Manager for Certificate management
- Traefik for Ingress
- OpenEBS LocalPV for local storage
- Cloudflare for managing DNS
- A real Domain


## Why Kubernetes

Kubernetes is *the* industry standard orchestration tool.
A good summary is this childrens story:
https://www.youtube.com/watch?v=R9-SOzep73w

Why not docker one might ask?
Docker doesn't do orchestration, or at least not-well.
With kubernetes you describe what you want the cluster to do and all the intricate part of kubernetes work together to reach that end-result or report failure when trying!

## Isn't a cluster multiple nodes?

No, a cluster can be a single or multiple nodes or multiple racks or even multiple buildings.
You can make it as simple as you want, but even a single VM can be a perfect cluster in-and-off-itself!

Mater of factly we advice users to start-out with a single node cluster, because that means they won't have to bother with complicated storage solutions.


## Why FluxCD?

We wanted something that was fully Git-Ops.
Two primary contenders remained: ArgoCD and FluxCD.

While ArgoCD has an amazing GUI and many features we came to conclude that was more a problem than a boon.
As it also means there are many different ways of deploying things using ArgoCD, many of which will give unique issues.

FluxCD is precisely the opposite: It does one thing: GitOps and does it well.