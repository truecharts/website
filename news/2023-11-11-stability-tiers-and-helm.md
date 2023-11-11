---
slug: "stability-tiers-and-helm"
title: "Stability Tiers and Helm Support"
authors: [ornias]
---

We're very glad to announce a new step in our project: Stability Tiers.

**What are stability Tiers?**

Stability Tiers, is a Tier list of platforms supported by TrueCharts, ranked by how well we think our Charts function on said platform.
Ofcoarse all platforms get full access to community support, but we want to give realistic expectations on how many "snags" users can experience on the platform of their Choice.


**Improved First-Tier Helm Support**

With the new tiers, we are also finally ready to Announce we've finally finished the required work to officially release our Normal Helm Charts, as a first-tier supported platform.
This also means that our industry-leading community support, is now also available for Helm users!

We want to make clear that, just as with SCALE, not every setting we offer is going to work well with ever Chart.
Sadly enough we currently have not documented this very-well, if at-all. In the future we want to document the release state (Experimantal or GA), clearly per-helm option in the documentation.


**TrueNAS SCALE and it's tier**

While previously we've seen great effort and interest from the developers of TrueNAS SCALE, iXsystems, we've seen a shift in priorities towards limiting kubernetes support and prioritising their own catalogs at the cost of third-parties like TrueCharts.
We've also seen a shift in the fact they do not want to support multi-node clusters and  severe lack of priority towards the lack of ANY decent backup utility for their platform.

At the same time, we've been working hard on hardening our pipelines by signing both our container builds, as well as Helm Charts. Sadly enough TrueNAS SCALE, due to explicit design choices by iXsystems, also does not offer any tooling to ensure Helm Charts have their signatures validated before installation.
This leads us to conclude that TrueNAS SCALE Apps are inherently less secure and professional than Helm Charts.

All-in-all and After long deliberation, this has lead us to decide to move TrueNAS SCALE to a "Second Tier" platform, as we cannot fully guarantee the same stability and reliability normal Helm offers.
This, however, does *not* mean a decrease in development efforts. We're still planning to completely support the platform where we can and expand both the catalog and our featureset on there in the future.

What it does mean is that some features might be slightly less reliable due to badly designed "middleware" that is part of TrueNAS SCALE. Which we, sadly enough, cannot do much against.

**Future Platforms**

However, there is more!
We're also glad to announce we're working on supporting two more ways of deploying our Helm charts:

- **FluxCD**
- **Rancher**

For FluxCD, we hope to make a catalog of pre-made `helm-release+kustomize` files, that can be readily copy-pasted into your git-ops repository!
Even better, we're working hard to even automate the deployment of GitOps with Flux, Sops-Encryption and even a dedicated Operatingsystem: Talos-OS!

For Rancher, while you can already load our helm charts into Rancher and edit the Yaml like any other Helm Chart. We are planning to add custom Rancher GUI elements to each and every published Helm chart. Just like with SCALE, but this time: Fully kubernetes aware without crazy middleware!


**The Tier list**

This leads us to the following Stability Tier List, which will be documented on the website **insert link here** and adapted where needed:

1. Helm
2. TrueNAS SCALE


We hope this gives users more clearity on which platform to pick and what experience to expect. We're super stoked to expand this least in the future to support more awesome platforms!
