---
sidebar_position: 3
---
# System Requirements

All the below recommendations assume the TrueNAS System in question is not used for anything other than running Apps and Storage.
Adding VMs or busy shares will significantly increase the requirements.

## Minimal system Specifications

Systems complying with these minimal specifications will be able to run some Apps and just a few at the same time.
Experiences in terms of performance and which Apps work may vary.

**CPU:** 4 Cores

**RAM:** 16GB

**GPU:** None

**Storage:** 250GB HDD Apps Pool with SSD metadata/8K-smallblocks special vdev or 250GB SSD Apps Pool

<u><b>To be 100% clear: hdd apps pool without small-blocks/metadata, is not supported.</b></u>

## recommended System Specifications

Systems complying with these recommended specifications, will be able to run (almost) any App we offer and many at the same time, depending on system load.

**CPU:** 8 Cores

**RAM:** 32GB

**GPU:** Intel iGPU

**Storage:** 1TB SSD Apps Pool or HDD with SSD metadata/16K-smallblocks special vdev
