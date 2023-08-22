---
sidebar_position: 3
---
# System Requirements

All the below recommendations assume the TrueNAS system in question is not used for anything other than running apps and storage.
Adding VMs or busy shares will significantly increase the requirements.

## Minimal System Specifications

Systems complying with these minimal specifications will be able to run some apps and just a few at the same time.
Experiences in terms of performance and which Apps work may vary.

**CPU:** 4 Cores

**RAM:** 16GB

**GPU:** None

**Storage:** 250GB HDD Apps Pool with SSD metadata/8K-smallblocks special VDEV or 250GB SSD Apps Pool

<u><b>To be 100% clear: HDD apps pool without small-blocks/metadata are NOT supported.</b></u>

## Recommended System Specifications

Systems complying with these recommended specifications will be able to run (almost) any App we offer and many at the same time, depending on system load.

**CPU:** 8 Cores

**RAM:** 32GB

**GPU:** Intel iGPU

**Storage:** 1TB SSD apps pool or HDD with SSD metadata/16K-smallblocks special VDEV.
