---
slug: "cnpg-changes"
title: "New CloudNative-PG (CNPG) operator chart."
authors: [ornias]
---

After building our own MetalLB operator chart, we've also now finished the work on building our own CloudNative-PG  Chart.
As of today this chart will be a requirement for new users if they want to run applications featuring a postgresql database.

**Updating to the new Cloudnative-PG helm chart for existing users**

We want to point out though, that users should update the new CloudNative-PG Helm chart *as soon as possible*.
To update an existing install with applications using postgresql databases to the new system, the following procedure can be used:

We want to explicitly highlight that this procedure *will* **COMPLETELY DESTROY** all your databases.
It's absolutely crucial to export your databases manually beforehand.

- export all your databases manually, on SCALE using the following guide: https://truecharts.org/manual/SCALE/guides/cnpg-migration-guide (do **not** rely on heavyscript backups for this!)
- run this in a **root** shell: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete2`
- install the new `cloudnative-pg` chart from the `operators` train
- wait a few minutes
- Hit `edit` and save without changes on all applications using postgresql databases.
- wait a few minutes
- Restore all your databases manually, on SCALE using the following guide: https://truecharts.org/manual/SCALE/guides/cnpg-migration-guide (do **not** rely on heavyscript backups for this!)

*If you run into any more issues, please file a ticket with our dedicated support staff on Discord like normal**
