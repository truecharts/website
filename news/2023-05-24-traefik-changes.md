---
slug: "traefik-changes"
title: "Traefik Changes"
authors: [ornias]
---

As some of you might've noticed, Traefik has been a bit outdated the last few weeks.
The reason behind this, was a multitude of potentially breaking todo's where left and we don't want to bother users with continues manual intervention on breaking changes.
By now we've fixed the remaining issues and will soon release a breaking-change release for traefik and a patch for all the charts.

In short we've ensured that we only use our signature "tc-system" namespace for storing configuration and middlewares for traefik. This ensures consistent behavior for users using ingressClasses and allowed us to, cleanly, fix the known bug where a port got appended to the TrueNAS SCALE "portal" button.

We also got the request from iX-systems staff a while ago to limit our use of non-ix-prefixed namespaces on kubernetes. While the other work to do so, requires a **lot** of work building our own operator helm-charts, these Traefik changes are the initial step to comply to those wishes. The "low hanging fruit".

**Unrelated new issue**

There is also an unrelated temporary issue, which has been created on purpose: CNPG will currently only be installed on new systems, if one of our "enterprise" charts is being installed.
The reason behind this, is the fact we're working hard on building seperate operator helm-charts, instead of handling it in the background. More news about this will be released later.
