---
title: Longhorn
---


:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Beta drafts

:::

Longhorn is a distributed block storage system for Kubernetes. Longhorn is cloud-native storage built using Kubernetes and container primitives.

Their Helm-Chart is available at: <https://github.com/longhorn/charts>

## Installation

### Helm configuration

These values differ from their Helm-Chart and are a minimum example for usage on a single node cluster.

```yaml
  values:
    defaultSettings:
      # When using clustertool, /var/lib/longhorn is already preconfigured and can be used as is.
      defaultReplicaCount: 3
      # Overprovisioning might be needed when using volsync
      storageOverProvisioningPercentage: 100000
    persistence:
      defaultClassReplicaCount: 3
```

### Create a VolumeSnapshotClass (reqired for e.g Volsync)

```yaml
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshotClass
metadata:
  name: longhorn-snapshot-vsc
deletionPolicy: Delete
driver: driver.longhorn.io
parameters:
  type: snap
```

## Optional, Non-Clustertool

The following things are already integrated in clsutertool.


### Create a namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: longhorn-system
  labels:
    pod-security.kubernetes.io/enforce: privileged
```



## Other references

<https://longhorn.io/docs/1.7.1/deploy/install/install-with-helm/>
<https://volsync.readthedocs.io/en/latest/installation/index.html>
