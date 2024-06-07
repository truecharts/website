---
sidebar:
  order: 4
title: Init
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress.
Not done and even not widely available.

All code and docs are considered Pre-Alpha Drafts

:::

ClusterTool requires a specific directory layout to ensure smooth operators and standardised environments.

To ensure smooth deployment, the init function can pre-generate all required files in the right places.
Afterwards you can edit talconfig.yaml and talenv.yaml to reflect your personal settings.

When done, please run clustertool genconfig to generate all configarion based on your personal settings


## Created Files and Folders

talconfig.yaml -> Contains your Talos Cluster layout
talenv.yaml -> Contains configuration options for both your Charts and Talos Cluster
talsecret.yaml -> Contains Talos Cluster encryption keys
age.agekey -> contains SOPS encryption keys which can be used to encrypt data. It's **IMPERATIVE** you save this specific file elsewhere as a backup, not doing so *will* release in future dataloss.
.sops.yaml -> contains specifications on how to decrypt any encrypted files found
.pre-commit-config.yaml -> contains configurations for users of "pre-commit"
talconfig.json -> contains the validations "schema" for talconfig.yaml
/patches/ -> this folder contains our custom Talos Machine Configuration patches, these should not be altered by any end-user. however, you can add your own here.
/manifests/ -> this folder will contain some pre-generated files that will be used to bootstrap the cluster and, if configured, can be consumed by fluxcd for automatic updates and manual configuration