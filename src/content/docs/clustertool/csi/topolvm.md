---
title: TopoLVM
---


:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Beta drafts

:::

TopoLVM is a CSI plugin using LVM for Kubernetes. It can be considered as a specific implementation of local persistent volumes using CSI and LVM.

Their repo and helm chart are available at: https://github.com/topolvm/topolvm

Nothing in this guide is specific to TrueCharts. There are some Talos-specific steps, but they can be completed even more simply on other OSs.

## Requirements

TopoLVM requires it's own LVM Volume Group to provision storage from. In this guide we'll assume you're accomplishing this by providing a separate drive (or virtual disk) specifically for TopoLVM to keep it more simple.


### LVM Prep
find the name of the disk you want to use for TopoLVM. With Talos OS, use `talosctl disks` to list the names of the available disks. You may need to install another disk to your VM or your bare-metal server.

Use TrueCharts' LVM_disk_watcher chart and container, which can do these steps to a disk you configure.

TODO: Add LVM_DISK_WATCHER config


## Install TopoLVM
Now that you've completed your prep on the node to create volumes for TopoLVM to use, we can install TopoLVM.

TODO: Add Helm Reference

### Helm Values

The key things to update are adding a device-class that will use your thin pool, and adding a sotrage class that will use that device-class. Read their helm chart for more options.

```yaml
  values:
    # lvmd service
    lvmd:
      managed: false
      env:
        - name: LVM_SYSTEM_DIR
          value: /tmp
      # lvmd.deviceClasses -- Specify the device-class settings.
      deviceClasses:
        - name: main-thin
          volume-group: topolvm_vg
          default: true
          spare-gb: 10
          type: thin
          thin-pool:
            name: topolvm_thin
            overprovision-ratio: 2.0
    node:
      lvmdEmbedded: true

    # storageClasses -- Whether to create storageclass(es)
    # ref: https://kubernetes.io/docs/concepts/storage/storage-classes/
    storageClasses:
      - name: topolvm-thin-provisioner # Defines name of storage class.
        storageClass:
          # Supported filesystems are: ext4, xfs, and btrfs.
          fsType: xfs
          # reclaimPolicy
          reclaimPolicy: # Delete
          # Additional annotations
          annotations: {}
          # Default storage class for dynamic volume provisioning
          # ref: https://kubernetes.io/docs/concepts/storage/dynamic-provisioning
          isDefaultClass: true
          # volumeBindingMode can be either WaitForFirstConsumer or Immediate. WaitForFirstConsumer is recommended because TopoLVM cannot schedule pods wisely if volumeBindingMode is Immediate.
          volumeBindingMode: WaitForFirstConsumer
          # enables CSI drivers to expand volumes. This feature is available for Kubernetes 1.16 and later releases.
          allowVolumeExpansion: true
          additionalParameters: { "topolvm.io/device-class": "main-thin" } #Set this to the 
          # mount options
          mountOptions: []
```

## Snapshots
TBD

## Optional: Non-ClusterTool only

The following steps are already included in clustertool by default.


### Kernel Modules

Add these two kernel modules. Use modprobe for typical linux installs or add them to your talconfig.yaml if using TalHelper or ClusterTool as shown below:
```yaml
#talconfig.yaml
nodes:
  - hostname: k8s-control-1
    kernelModules:
      - name: dm_thin_pool
      - name: dm_mod
```

### Manually add disks

:::danger[Data Loss]

These steps could lead to data loss if done on the wrong disks.

:::

These commands set up a Volume Group and Thin Pool for TopoLVM to use. The names of these will need to be put into your TopoLVM Helm Values. The name of the disk may vary depending on your setup.

Create a Physical Volume
```bash
pvcreate /dev/vdb
```
Create a Volume Group
```bash
vgcreate topolvm_vg /dev/vdb
```
Create a Thin Pool
```bash
lvcreate -l 100%FREE --chunksize 256 -T -A n -n topolvm_thin topolvm_vg
```

### Create Privilaged Namespace

Create the namespace with these labels:
```yaml
apiVersion: v1
kind: Namespace
metadata:
    name: topolvm-system
    labels:
        pod-security.kubernetes.io/enforce: privileged
        topolvm.io/webhook: ignore
```


## Other references

Other resource for guidance: https://github.com/topolvm/topolvm/blob/main/docs/proposals/thin-volumes.md
