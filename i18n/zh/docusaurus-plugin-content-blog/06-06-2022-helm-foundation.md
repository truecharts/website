---
slug: "Helm as a foundation"
title: "Helm as a foundation"
authors:
  - ornias
---

After some carefull consideration about how we want to move the project forward, we've decided to put our Helm Charts first and other solutions second. Our reasoning to do this, is that we want to allow users to be more flexible in which kubernetes platform they use and experience all the awesome projects that are out there.

**SCALE and TrueCharts**

What does this mean for our SCALE users? Not so much really: We will still fully support and build SCALE Apps. However, it does mean that we will more openly start calling our work "Charts" instead of "Apps" and some new Charts will not support SCALE out-of-the box.

**Helm and TrueCharts**

We're also going to up our game considerably to support users wanting to customise the YAML directly with Helm. More Apps with more flexible configuration. At the same time we're going to work on making the SCALE GUI generation more automated. While this might lead to a more "cluttered" GUI, it will bring things more in "sync" with the native Helm deployments we offer.

For new developers all of this will offer a much easier experience: Just build the helm chart and submit the PR for it. No more bothering with being required to move through hunderds of rows of SCALE GUI description.

With all of these changes combined, we hope to being our awesome repository of Charts to more people, much faster!
