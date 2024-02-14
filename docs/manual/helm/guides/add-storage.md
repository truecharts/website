---
title: Adding storage
---

## What is persistence

Persistence defines all forms of "storage" that can be added to a chart.
This can be configtext mounted to a file, ramdisks or, most frequently, actual data-storage.

## Pre-requisits

For PVC storage to function correctly, it's important to already have a storageClass defined and "Container Storage Interface" setup.
Some platforms ship with this (SCALE, Harvester) others need you to set that up manually (TalosOS)

## How-To setup

To setup persistence add the following section to the values.yaml manually and adapt where needed:

```
persistence:
  config:
    enabled: true
    type: PVC
	mountPath: /mystorage
```


In somecases an ingress might already been partly defined.
That means you should append the information as you need it, but not touch, for example, the mountPath.


## More info:

For more info, checkout the common-chart persistence options:

https://truecharts.org/manual/helm/common/persistence/

