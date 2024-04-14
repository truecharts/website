---
title: Adding Storage
---

## What is persistence

Persistence defines all forms of "storage" that can be added to a chart. This can be config text mounted to a file, ramdisks, or most frequently, actual data storage.

## Requirements

For PVC storage to function correctly, it's important to already have a storageClass defined and "Container Storage Interface" setup. Some platforms ship with this (SCALE, Harvester) others need you to set that up manually (TalosOS).

## How to Setup

To setup persistence, add the following section to the values.yaml manually and adapt as needed:

```yaml
persistence:
  config:
    enabled: true
    type: PVC
  mountPath: /mystorage
```

In some cases an ingress might already been partly defined. That means you should append the information as you need it, but not touch, for example, the mountPath.

## More info

For more info, check out the common-chart [persistence options](/general/common/persistence/)
