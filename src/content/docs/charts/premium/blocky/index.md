---
title: blocky
---

![Version: 16.4.0](https://img.shields.io/badge/Version-16.4.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.24.0](https://img.shields.io/badge/AppVersion-0.24.0-informational?style=flat-square)

Blocky is a DNS proxy, DNS enhancer and ad-blocker for the local network written in Go

## Chart Sources

- https://0xerr0r.github.io/blocky/
- https://github.com/0xERR0R/blocky
- https://github.com/Mozart409/blocky-frontend
- https://github.com/truecharts/charts/tree/master/charts/premium/blocky
- https://hub.docker.com/r/spx01/blocky
- https://quay.io/oriedge/k8s_gateway

## Available Documentation

- [**FAQ**](./faq)
- [**Installation notes**](./installation-notes)
- [**Blocky Setup Guide**](./setup-guide)


---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/premium/blocky)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/blocky`

For more information on how to install TrueCharts Helm charts, checkout the [instructions on the website](/guides)


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](/deprecated/scale).

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/premium/blocky

### Configuration Options

Please note: For TrueNAS SCALE, only options available in the GUI are supported.
Hence most of these docs do not apply to TrueNAS SCALE

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/truecharts/charts/blob/master/charts/premium/blocky/values.yaml

All our Charts use a shared "common" library chart that contains most of the templating and options.
For the complete overview of all available options, please checkout the documentation for them on the [common docs on our website](/common)

For information about the common chart and all defaults included with it, please review its values.yaml file available here: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml

### Support

- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/charts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](/general/sponsor) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
