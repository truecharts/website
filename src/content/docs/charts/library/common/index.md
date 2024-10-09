---
title: common
---

![Version: 25.0.0](https://img.shields.io/badge/Version-25.0.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.10.3](https://img.shields.io/badge/AppVersion-1.10.3-informational?style=flat-square)

Function library for TrueCharts

## Chart Sources

- https://ghcr.io/cloudnative-pg/postgis
- https://ghcr.io/cloudnative-pg/postgresql
- https://ghcr.io/tensorchord/cloudnative-pgvecto.rs
- https://github.com/truecharts/charts/tree/master/charts/library/common
- https://github.com/truecharts/containers/tree/master/apps/alpine
- https://github.com/truecharts/containers/tree/master/apps/code-server
- https://github.com/truecharts/containers/tree/master/apps/db-wait-mariadb
- https://github.com/truecharts/containers/tree/master/apps/db-wait-mongodb
- https://github.com/truecharts/containers/tree/master/apps/db-wait-postgres
- https://github.com/truecharts/containers/tree/master/apps/db-wait-redis
- https://github.com/truecharts/containers/tree/master/apps/gluetun
- https://github.com/truecharts/containers/tree/master/apps/kubectl
- https://github.com/truecharts/containers/tree/master/apps/netshoot
- https://github.com/truecharts/containers/tree/master/apps/openvpn-client
- https://github.com/truecharts/containers/tree/master/apps/scratch
- https://github.com/truecharts/containers/tree/master/apps/tailscale
- https://github.com/truecharts/containers/tree/master/apps/wget
- https://github.com/truecharts/containers/tree/master/apps/wireguard
- https://hub.docker.com/_/
- https://hub.docker.com/r/mikefarah/yq
- https://hub.docker.com/r/traefik/whoami

## Available Documentation



---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/library/common)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/common`

For more information on how to install TrueCharts Helm charts, checkout the [instructions on the website](/guides)


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](/deprecated/scale).

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/library/common

### Configuration Options

Please note: For TrueNAS SCALE, only options available in the GUI are supported.
Hence most of these docs do not apply to TrueNAS SCALE

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/truecharts/public/blob/master/charts/library/common/values.yaml

All our Charts use a shared "common" library chart that contains most of the templating and options.
For the complete overview of all available options, please checkout the documentation for them on the [common docs on our website](/common)

For information about the common chart and all defaults included with it, please review its values.yaml file available here: https://github.com/truecharts/public/blob/master/charts/library/common/values.yaml

### Support

- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/charts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](/general/sponsor) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
