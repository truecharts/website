---
slug: "persistence-changes"
title: "Changes to Storage, Persistence, and PostgreSQL"
authors: [ornias]
---

We're glad to announce that shortly we will release a big update to all our Apps. This will be a complex update that technically includes a few changes that might break some specific features for some users. While we do not foresee any data loss, it's imperative to back up your data.

## Standardization of PVC Storage

A number of new storage options are being released. These are all optional and should be considered somewhat experimental.

## Redesign of Cloudnative-PG

Our Cloudnative-PG backend has been completely rewritten. This should provide more stability, but also carries the risk of introducing new bugs.

### Migration Steps

We highly suggest not updating to the new breaking changes until a few weeks have passed. However, if you want to update, here are the instructions:

**All Platforms**

- We strongly advise upgrading ClusterIssuer, cert-manager, and Traefik before anything else.

**Helm**

- Ingress: Most of the certManager settings have been moved to "integrations".
- Ingress: All of the Traefik settings have been moved to "integrations".
- Ingress: It's advisable to apply the new structure from common values.yaml prior to upgrade: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml
- CNPG: All settings have been restructured. Prior to update, users should view the new structure in common values.yaml and adapt accordingly: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml

**SCALE**

- Ingress: It might be prudent to disable ingress prior to update and enable it again afterwards.
- Ingress: Most of the cert-manager settings have been moved to "integrations" and they are reset.
- Ingress: All of the Traefik settings have been moved to "integrations" and they are reset.
- Ingress: This means you likely will lose TLS and security middlewares after the update, until adapted.
- CNPG: You might need to manually enter `256Gi` as storage size in the GUI
- CNPG: Instance number and storage size have been moved and reset to defaults.
- CNPG: The other features should not be touched during migration.
