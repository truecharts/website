---
title: Getting Started
sidebar:
  order: 1
---

SCALE Apps is a Helm-Charts-as-Apps tool. However, in contrast to more "premium-grade" solutions like kubeapps, it's not built by Kubernetes specialists and it does not offer complete freedom to deploy helm charts. Nor can you manually edit Chart-Yaml files manually.

This makes SCALE Apps a great tool for users running a TrueNAS SCALE NAS and running a few applications on it. But makes it less optimal for Advanced users.

:::tip

Please, always remember to check the content specific to the chart.

:::

## Tier

SCALE Apps are what we call a "Tier 3" deployment option. This means that while we expect it to go smoothly, there are likely caveats, limited options and/or we've limited staff available to help out users with support. Hence, we would advise a "Tier 2" or "Tier 1" solution instead.

## Caveats

SCALE Apps is a pretty limited solution. For normal homelab use, TrueCharts SCALE Apps likely will suffice just fine. But for more advanced setups, as mentioned above, it's not sufficient. It also adds significant layers of "middleware" between the App GUI and Kubernetes/Helm, which is prone to lead to niche issues that other deployment options do not face.

We also would like to point out that iX-Systems, the creators of TrueNAS SCALE, do not have much kubernetes experience or specialised engineers available. This does affect the quality of the end product.

Hence for chart management our preference would be to use [FluxCD](/fluxcd/) instead.

## How to Configure

Below you'll find recommended steps to go from a blank or fresh TrueNAS SCALE installation to using TrueCharts with the best possible experience and performance as determined by the TrueCharts team. It does not replace the application specific guides and/or specific guides on certain subjects (PVCs, VPN, linking apps, etc) either, so please continue to check the app specific documentation and the TrueNAS SCALE specific guides we've provided on this website. If more info is needed about `TrueNAS SCALE` please check out our [introduction to SCALE](/scale/guides/scale-intro) page.

## Requirements

- TrueCharts apps share computing resources with your system. Please review our [recommended system requirements](/scale/systemrequirements/).
- Your apps dataset needs to be large enough to store the containers, configuration files, snapshots, and other persistent volume (PVC) data. You can always configure [additional storage](/scale/guides/add-storage) using HDD pools (e.g. downloads folder) for specific apps later.
- Make sure your SCALE installation has a working storage pool that you'd like to use for TrueCharts. [Read more](https://www.truenas.com/docs/scale/scaletutorials/storage/) in the SCALE tutorial.
- Make sure you have a working Internet connection and can reach `https://github.com`, `https://truecharts.org`, and `https://tccr.io` from the host system.
- Ensure your system time is up to date and you've chosen your preferred timezone in your [SCALE settings](https://www.truenas.com/docs/scale/scaleuireference/systemsettings/generalsettingsscreens/#localization). Apps you install will default to this timezone.
- You are signed into your TrueNAS SCALE WebUI as `root` or as a user that can execute commands with `root` permissions.
- Your apps pool must be configured before adding TrueCharts. When opening the Apps menu item on SCALE for the first time, you'll be prompted to [choose a storage pool](https://www.truenas.com/docs/scale/scaleuireference/apps/) for your Apps.

:::tip[Quick start guides]

Below are the tl;dr versions of the full setup for certain use cases, scroll down for short blurbs on each step and why they're recommended.

:::

## Minimal Getting Started Setup with SCALE

- Add catalog with the following trains: `stable`, `premium`, `system` -> [Adding TrueCharts](/scale/#adding-truecharts)
- Install the following apps from the `system` train with default settings: `Prometheus Operator` `Cloudnative-PG Operator` and `Cert-Manager`

## Adding TrueCharts

To add TrueCharts to your SCALE installation:

1.  Go to the **Apps** page from the top level SCALE menu

![Apps](./guides/img/Apps.png)

2.  Click the **Discover Apps** button on the Apps page

![Discover Apps](./guides/img/Apps2.png)

3.  Click the **Manage Catalogs** link on the Discover Apps page

![Manage Catalogs](./guides/img/Apps3.png)

4.  Click **Add Catalog**

![Add Catalog](./guides/img/Apps4.png)

5.  After reading the iXsystems notice, click **Continue** and enter the required information:

- Name: `truecharts`
- Repository: `https://github.com/truecharts/catalog`
- Preferred Trains: `premium`,`stable` and `system` (type each one manually)
- Branch: `main`

![Catalog Info](./guides/img/Apps5.png)

6.  Click **Save** and allow SCALE to refresh its catalog with TrueCharts (this may take a few minutes)

:::note[Potential issue with adding catalog]

If you're having issues adding the TrueCharts catalog to SCALE, you may need to check the "Force Create" button. This can sometimes occur on systems with slow internet connections or insufficient processing power.

:::

:::tip[Introduction to TrueNAS SCALE Guide]

Please free to check out our [Introduction to TrueNAS SCALE](/scale/guides/scale-intro) guide on some specific information on installing, editing, rollbacks and CLI commands for use with apps on TrueNAS SCALE.

:::

## Getting started using Charts with your own Domain

- Steps Above -> [Minimal Getting Started with SCALE](/scale#minimal-getting-started-setup-with-scale)
- Move TrueNAS Port to 81,444 -> [TrueNAS WebUI Instructions](/charts/premium/traefik/how-to#truenas-webui)
- Add Traefik -> [Traefik How-To](/charts/premium/traefik/how-to)
- Use Cloudflare for DNS and create API token -> [Guide](/charts/premium/clusterissuer/how-to#configure-acme-issuer)
- Add ClusterIssuer -> [Clusterissuer How-to](/charts/premium/clusterissuer/how-to)
- Add Blocky -> [Blocky Setup Guide](/charts/premium/blocky/setup-guide)
- Setup ingress on each Chart you want to expose -> [Configure Ingress using Clusterissuer certs](/charts/premium/clusterissuer/how-to/#configure-ingress-using-clusterissuer)

## Full TrueCharts Setup on TrueNAS SCALE

- Everything below (includes the steps listed above and extras like [HeavyScript](/scale/#heavyscript), [MetalLB](/scale/#metallb-installation-and-disabling-integrated-loadbalancer) and [Authelia](/scale/#authelia-installation))

### TrueCharts Trains Overview

TrueCharts has multiple "trains", or branches of apps which you can choose to install. Below is a summary of each train and its intended use.

- `stable` contains apps which have been thoroughly tested and expected to be stable and working. The `stable` version of an app is always the best available version
- `incubator` contains apps which are still in development and/or are not considered to be stable and working well enough to be moved into the `stable` branch
- `dependency` contains apps that are mostly used as dependencies. This train is not supported, aside from bug fixes
- `premium` contains apps for core TrueCharts features and, in the future, will be covered by additional support for professional use cases
- `system` contains operators required for certain apps apps to function at all, recommended leaving this `enabled`.

[See here](/charts/description-list) for a list of all apps available for each TrueCharts trains.

## HeavyScript

Once you've added the TrueCharts catalog, we also recommend installing [HeavyScript](https://github.com/Heavybullets8/heavy_script#how-to-install) and configuring it to run nightly with a [cron job](https://github.com/Heavybullets8/heavy_script#how-to-create-a-cron-job). HeavyScript is a bash script for managing TrueNAS SCALE applications, automatically updating those applications, backing up applications datasets, opening a shell for containers, and many other features. Please visit the [HeavyScript GitHub Page](https://github.com/Heavybullets8/heavy_script) for more info.

## OpenEBS Setup

![OpenEBS Icon](./guides/img/icons/openebs.png)

As outlined [here](/scale/migrations/cobia-dragonfish), iX-Systems no longer maintains or supports any form of PVC-based storage for apps. For this reason, TrueCharts provides our own OpenEBS storage solution for you to use with our apps. This means you need to install the `OpenEBS` app from the TrueCharts system train as below.

1. In the SCALE GUI, go to Apps -> Discover Apps -> Manage Catalogs

2. Ensure you have `system` in the list of Preferred Trains in the TRUECHARTS row as below. If so, skip the next step and proceed to step 4

![Catalog Trains](./guides/img/Dragonfish-Storage5.png)

3. If you don't already, you can add it by selecting the TRUECHARTS row and selecting the `Edit` button and selecting `system` under the "Preferred Trains" dropdown list as below

![system List](./guides/img/Dragonfish-Storage5b.png)

4. Create a dedicated, empty dataset outside of ix-applications. Please ensure you've chosen the **Pool/Dataset** that's **not** inside `ix-applications`

5. Then install the `OpenEBS` chart

![OpenEBS Icon](./guides/img/icons/openebs.png)

6. Enter the name of the pool and dataset you created earlier in `pool/dataset` format and do not include `/mnt/` in front of the pool/dataset, as shown below

![OpenEBS Storage](./guides/img/OpenEBS-storage.png)

:::danger

When setting the `pool/dataset` as above, do **not** set the path to the existing ix-applications dataset

:::

It's important to set the `pool/dataset` to the dataset you want to store the folders with the application data in them.

## MetalLB installation and disabling integrated LoadBalancer

![metallb](./guides/img/icons/metallb.png)

This step may be optional but is recommended for advanced users and/or those who which to assign specific IPs to their SCALE applications. We have a full guide explaining the setups on the [MetalLB-Config Setup Guide](/charts/premium/metallb-config/setup-guide) page on how to setup MetalLB and disable the integrated LoadBalancer. Please refer to that page for more info.

## Prometheus and CNPG system app installations

![Prometheus](./guides/img/icons/prometheus-operator.png) ![CNPG](./guides/img/icons/cnpg.png)

Many of the popular TrueCharts apps for TrueNAS SCALE rely on `Prometheus Operator` and `Cloudnative-PG Operator` to be installed **PRIOR** to installing another app that may rely on functionality these operators provide. If you're unsure if you're using any TrueCharts apps that require Prometheus or CNPG functionality, we advise you install these system apps first anyway before attempting to then install any other apps.

[Here](/general/faq#how-do-i-know-if-an-app-uses-cnpg) is a list of apps that rely on CNPG functionality. If you intend to deploy any of these apps, you **must** install the `Cloudnative-PG Operator` app first as above.

If you are migrating from a different CNPG operator, you can use our [CNPG Migration Guide](/scale/guides/cnpg-migration-guide) for steps on how to install the `Cloudnative-PG` operator and migrating to it. We also have [this](/general/faq#operators) FAQ entry on removing the previous CNPG backend once migrated.

For new users just starting out with TrueNAS SCALE, simply **first** install `Prometheus Operator` **followed by** `Cloudnative-PG Operator` from the TrueCharts Community Catalog before continuing.

## Traefik installation for Ingress / Reverse-Proxy support with TrueCharts Apps

![Traefik](./guides/img/icons/traefik.png)

`Traefik`, our `ingress` or `reverse-proxy` solution of choice, is integrated into all our apps in order to make it as easy as possible to secure your Apps. To support this, we supply a separate Traefik "ingress" app, which has been pre-configured to provide secure and fast connections. Please check the `Traefik` [How-To](/charts/premium/traefik/how-to) for basic instructions and a video as well.

An optional but extra function enabled by Traefik and supported by many Truecharts Community Catalog apps like `Nextcloud`, is the ability to use a `middleware` to use your apps remotely. You can setup a basicAuth middleware using our guide [Add Traefik Basic Auth to Apps](/charts/premium/traefik/traefik-basicauth-middleware/).

## Cert-Manager (operator) and Clusterissuer installation for certificate management

![Cert-Manager](./guides/img/icons/cert-manager.png)

TrueCharts only supports the usage of `Cert-Manager` (both the operator portion and the main `clusterissuer`) for certificate management inside apps for TrueNAS SCALE. The usage of TrueNAS SCALE certificates through the GUI is deprecated and may cease to function in future updates. We highly recommend setting up `clusterissuer` using our [clusterissuer setup-guide](/charts/premium/clusterissuer/how-to) before adding `Ingress` to your applications.



## Blocky DNS provider for split-DNS installation and guide

![Blocky](./guides/img/icons/blocky.png)

Blocky is the optional, but preferred DNS solution for TrueCharts. It's a DNS proxy, DNS enhancer and ad-blocker which supports "split-DNS" through `K8S-Gateway` and is highly-available. The [Blocky Setup-Guide](/charts/premium/blocky/setup-guide) will cover basic setup options which will get you up and running and is not all inclusive.

## Authelia Installation

![Authelia](./guides/img/icons/authelia.png)

Authelia is a Single Sign-On Multi-Factor portal for web apps, and is the preferred solution to secure your TrueCharts apps when exposing them using `Traefik` as your ingress solution. We have a detailed guide that goes through setting up Authelia, along with LLDAP as a backend for Authelia and setting up the `forwardAuth` section of Traefik to handle the redirections and securing your apps. Please refer to the [Authelia Setup-Guide](/charts/premium/authelia/setup-guide) for more info. It is not strictly required, however you are otherwise encouraged to set a very strong password in your previous steps.

### Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vomm8uvdCM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
