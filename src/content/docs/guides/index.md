---
title: Helm Quick-Start
sidebar:
  order: 1
---

:::caution[Charts]

We only support our own helm-charts for everything. If you run anything outside of our helm-charts, we cannot guarantee interoperability and you might run into issues

:::

## Installing a Chart

If you want to install a chart using helm, lookup the name of the chart in our Chart list.
Afterwards run this command to install it directly from our OCI repository:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME`

_Where "CHARTNAME" is the name of the chart you want to add and "mychart" is the name you want it to have on your system_

We would highly suggest your write your customisations and user specific options in your own `values.yaml` file.
After which you can install the chart with your user specific settings using:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME -f values.yaml`

_where `values.yaml` can be replaced with a path of your choice_

We would also advice users to specifiy seperate namespaces for deployed charts using:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME -f values.yaml -n NAMESPACE`

_where `NAMESPACE` is the namespace you want to deploy to_

For more information, please see the [Helm install docs](https://helm.sh/docs/helm/helm_install/)

## Upgrading charts

To upgrade either the chart version and/or the user-defined settings for a, already installed, Helm chart you can use "helm upgrade".
While this does not actually update the chart version, it does update the user settings supplied via the `values.yaml file specified above`

`helm upgrade oci://tccr.io/truecharts/CHARTNAME -f values.yaml -n NAMESPACE`

For more information, please see the [Helm upgrade docs](https://helm.sh/docs/helm/helm_upgrade/)

## Using KubeApps

KubeApps offers an easy-to-use GUI to just pick a chart from the list and enter/adapt the YAML, check it out!

---

:::note[Clustertool]

Clusters created using clustertool come pre-packed with MetallB and MetalLB config.

:::

## Minimal Getting Started Setup

Install the following charts with **default** values.yaml if not already installed:

- Install `cloudnative-pg` -> [Cloudnative-PG Installation](#prometheus-and-cnpg-system-app-installations)
- Install `prometheus-operator` -> [Prometheus-Operator Installation](#prometheus-and-cnpg-system-app-installations)
- Install `cert-manager` -> [Certificate Management with Cert-Manager](#cert-manager-operator-and-clusterissuer-installation-for-certificate-management)
- Install `volsync` which is used to configure Backups-> [PVC Backup Guide](/guides/volsync-backup-restore)
- `metallb` or another loadBalancer is required if you do not have a loadBalancer yet

To configure MetallB, you will need to also add `metallb-config` and adapt it to your own needs.

## Getting started using Charts with your own Domain

- Steps Above -> [Minimal Getting Started](#minimal-getting-started-setup-with-scale)
- Install the `traefik-crds` chart
- Install `traefik` -> [Traefik How-To](/charts/premium/traefik/how-to)
- Use Cloudflare for DNS and create API token -> [Guide](/charts/premium/clusterissuer/how-to#configure-acme-issuer)
- Install `Clusterissuer` and configure for your needs -> [Clusterissuer How-to](/charts/premium/clusterissuer/how-to)
- Add `Blocky` and configure with k8s-gateway enabled -> [Blocky Setup Guide](/charts/premium/blocky/setup-guide)
- Setup ingress on each Chart you want to expose -> [Configure Ingress using Clusterissuer certs](/charts/premium/clusterissuer/how-to/#configure-ingress-using-clusterissuer)

---

## Important Charts

### MetalLB installation

![MetalLB](./img/icons/metallb.png)

This step is mandatory if you don't use another LoadBalancer. We have a full guide explaining the setups on the [MetalLB-Config Setup Guide](/charts/premium/metallb-config/setup-guide) page on how to setup MetalLB. Please refer to that page for more info.

### Prometheus and CNPG system app installations

![Prometheus](./img/icons/prometheus-operator.png) ![CNPG](./img/icons/cnpg.png)

Many of the popular TrueCharts charts rely on `Prometheus Operator` and `Cloudnative-PG Operator` to be installed **PRIOR** to installing another chart that may rely on functionality these operators provide. If you're unsure if you're using any TrueCharts charts that require Prometheus or CNPG functionality, we advise you install these charts first anyway before attempting to then install any other charts.

[Here](/general/faq#how-do-i-know-if-an-app-uses-cnpg) is a list of charts that rely on CNPG functionality. If you intend to deploy any of these charts, you **must** install the `Cloudnative-PG Operator` chart first as above.

### Traefik installation for Ingress / Reverse-Proxy support with TrueCharts Charts

![Traefik](./img/icons/traefik.png)

`Traefik` is our "ingress" or "reverse-proxy" solution of choice and is integrated into all our charts in order to make it as easy as possible to secure your charts. To support this, we supply a separate Traefik "ingress" app, which has been pre-configured to provide secure and fast connections. Please check the `Traefik` [How-To](/charts/premium/traefik/how-to) for basic instructions and a video as well.

An optional but extra function enabled by Traefik and supported by many Truecharts Charts like `Nextcloud`, is the ability to use a `middleware` to use your charts remotely. You can setup a basicAuth middleware using our guide [Add Traefik Basic Auth to Charts](/charts/premium/traefik/traefik-basicauth-middleware/).

### Cert-Manager (operator) and Clusterissuer installation for certificate management

![Cert-Manager](./img/icons/cert-manager.png)

TrueCharts only supports the usage of `Cert-Manager` (both the operator portion and the main `clusterissuer`) for certificate management inside charts. We highly recommend setting up `clusterissuer` using our [clusterissuer setup-guide](/charts/premium/clusterissuer/how-to) before adding `Ingress` to your applications.

### Blocky DNS provider for split-DNS installation and guide

![Blocky](./img/icons/blocky.png)

Blocky is the optional, but preferred DNS solution for TrueCharts. It's a DNS proxy, DNS enhancer and ad-blocker which supports "split-DNS" through `K8S-Gateway` and is highly-available. The [Blocky Setup-Guide](/charts/premium/blocky/setup-guide) will cover basic setup options which will get you up and running and is not all inclusive.
