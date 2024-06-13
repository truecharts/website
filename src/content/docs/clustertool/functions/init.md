---
sidebar:
  order: 4
title: Init
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress. It is not done and not widely available.

All code and docs are considered Pre-Alpha drafts

:::

ClusterTool requires a specific directory layout to ensure smooth operators and standardised environments.

To ensure smooth deployment, the init function can pre-generate all required files in the right places.
Afterwards, you can edit talconfig.yaml and talenv.yaml to reflect your personal settings.

When done, please run clustertool genconfig to generate all configurations based on your personal settings.


## Created Files and Folders

talconfig.yaml -> Contains your Talos Cluster layout
talenv.yaml -> Contains configuration options for both your Charts and Talos Cluster
talsecret.yaml -> Contains Talos Cluster encryption keys
age.agekey -> Contains SOPS encryption keys which can be used to encrypt data. It's **IMPERATIVE** you save this specific file elsewhere as a backup, not doing so *will* result in future data loss
.sops.yaml -> Contains specifications on how to decrypt any encrypted files found
.pre-commit-config.yaml -> Contains configurations for users of "pre-commit"
talconfig.json -> Contains the validations "schema" for talconfig.yaml
/patches/ -> This folder contains our custom Talos Machine Configuration patches, these should not be altered by any end-user. however, you can add your own here
/manifests/ -> This folder will contain some pre-generated files that will be used to bootstrap the cluster and, if configured, can be consumed by fluxcd for automatic updates and manual configuration