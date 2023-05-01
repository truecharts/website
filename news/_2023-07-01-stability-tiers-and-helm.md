---
slug: "stability-tiers-and-helm"
title: "Stability Tiers and more Helm Support"
authors: [ornias]
---

TBD/To-Be-Finished/To-Be-Worked-Out
**DO NOT ASSUME THIS AS FACT OR TO BE CORRECT, VERY ROUGH Draft**

We're very glad to announce a new step in our project: Stability Tiers.

**What are stability Tiers?**

Stability Tiers, is a Tier list of platforms supported by TrueCharts, ranked by how well we think our Charts function on said platform.
Ofcoarse all platforms get full access to community support, but we want to give realistic expectations on how many "snags" users can experience on the platform of their Choice.


**Improved First-Tier Helm Support**

With the new tiers, we are also finally ready to Announce we've finally finished the required work to officially release our Normal Helm Charts, as a first-tier supported platform.
This also means that our industry-leading community support, is now also available for Helm users!


**TrueNAS SCALE and it's tier**

While previously we've seen great effort and interest from the developers of TrueNAS SCALE, iXsystems, we've seen a shift in priorities towards limiting kubernetes support and prioritising their own catalogs at the cost of third-parties like TrueCharts.
We've also seen a shift in the fact they do not want to support multi-node clusters, due to gross design mistakes in earlier stages which would require massive refactor on their end and their severe lack of priority towards the fact they lack ANY decent backup utility for their platform while symultainiously preventing industry-standard kubernetes backup solutions from working correctly.

All-in-all and After long deliberation, this has lead us to decide to move TrueNAS SCALE to a "Second Tier" platform, as we cannot fully guarantee the same stability and reliability normal Helm offers.
This, however, does *not* mean a decrease in development efforts. We're still planning to completely support the platform where we can and expand both the catalog and our featureset on there in the future.

What it does mean is that some features might be slightly less reliable due to badly designed "middleware" that is part of TrueNAS SCALE. Which we, sadly enough, cannot do much against.

**The Tier list**

This leads us to the following Stability Tier List, which will be documented on the website **insert link here** and adapted where needed:

1. Helm
2. TrueNAS SCALE


We hope this gives users more clearity on which platform to pick and what experience to expect. We're super stoked to expand this least in the future to support more awesome platforms!