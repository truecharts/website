---
sidebar:
  order: 4
title: encrypt
---

:::caution[Work In Progress]

This program, all its features and its general design, are all a Work-In-Progress.
Not done and even not widely available.

All code and docs are considered Pre-Alpha Drafts

:::

The encryption feature of clustertool, goes over all config files and, if not encrypted already, checks if `.sops.yaml` mandates that they should be encrypted.
Afterwards they are encrypted using your `age.agekey` file as specified in `.sops.yaml`