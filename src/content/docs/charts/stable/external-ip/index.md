---
title: external-ip
---

![Version: 6.0.7](https://img.shields.io/badge/Version-6.0.7-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: latest](https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square)

Gets external IP via DIG command ( OpenDNS , Cloudflare, google ) on a scheduled basis that can be customized. Also includes the ability to alert you via pushover if the IP changes.

## Chart Sources

- https://github.com/xavier-hernandez/docker-external-ip
- https://github.com/truecharts/charts/tree/master/charts/stable/external-ip
- https://hub.docker.com/r/xavierh/external-ip

## Available Documentation



---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/stable/external-ip)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/CHARTNAME`

For more information on how to install TrueCharts Helm charts, checkout the instructions on the website: https://truecharts.org/helm/


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](https://truecharts.org/scale/guides/scale-intro).

### Configuration Options

To view the chart specific options, please view Values.yaml included in the chart.

All our Charts use a shared "common" library chart that contains most of the templating and options.
For the complete overview of all available options, please checkout the documentation for them on the website: https://truecharts.org/common/

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/stable/external-ip

### Support


- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/charts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](https://truecharts.org/general/sponsor) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
