---
slug: "persistence-changes"
title: "Changes to Storage, Persistence and Postgresql"
authors: [ornias]
---

We're glad to announce that shortly we will release a big update to all our Apps.
This will, yet again, be a complex update that technically has a few changes that might break some specific features for some users. 
While we do not forsee any dataloss, it's imperative to backup your data

## Standardisation of PVC storage

A number of new storage options are released, those are all optional and should be considered somewhat experimental

## Redesign of Cloudnative-PG

Our Cloudnative-PG backend has been completely rewriten. This should provide more stability, but also has risk of bringing new bugs to the surface.


### Migration steps

We highly suggest to not update to the new breaking changes, untill a few weeks have passed.
But if you want to update, here are the instructions:

**All platforms**

- We highly advice to upgrade clusterIssuer, cert-manager and Traefik before anything else

**Helm**

- Helm: Most of the certManager settings have been moved to "integrations".
- Helm: All of the Traefik settings have been moved to "integrations".
- Helm: It's advisable to apply  the new structure from common values.yaml prior to upgrade: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml
- CNPG: All settings have been restructured, prior to update users should view the new structure in common values.yaml and adapt accordingly: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml


**SCALE**

- Helm: Most of the certManager settings have been moved to "integrations" and they are reset
- Helm: All of the Traefik settings have been moved to "integrations" and they are reset.
- Helm: This means you likely loose TLS and security middlewares after update, till adapted.
- CNPG: Instance number and storage size have been moved and reset to defaults
- CNPG: The other features should not be touched during migration

