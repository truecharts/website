---
sidebar:
  order: 5
title: decrypt
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress.
Not done and even not widely available.

All code and docs are considered Pre-Alpha Drafts

:::

The decryption feature of clustertool, goes over all config files and, if encrypted, checks if `.sops.yaml` specifies that they should be decrypted.
If so they are decrypted using your `age.agekey` file as specified in `.sops.yaml`