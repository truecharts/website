---
title: nextcloud
---

![Version: 29.10.36](https://img.shields.io/badge/Version-29.10.36-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 28.0.4](https://img.shields.io/badge/AppVersion-28.0.4-informational?style=flat-square)

A private cloud server that puts the control and security of your own data back into your hands.

## Chart Sources

- https://github.com/nextcloud/docker
- https://github.com/nextcloud/helm
- https://github.com/truecharts/charts/tree/master/charts/premium/nextcloud
- https://hub.docker.com/r/nginxinc/nginx-unprivileged
- https://github.com/truecharts/containers/tree/master/apps/nextcloud-fpm
- https://hub.docker.com/r/collabora/code
- https://hub.docker.com/r/clamav/clamav
- https://github.com/truecharts/containers/tree/master/apps/nextcloud-imaginary
- https://github.com/truecharts/containers/tree/master/apps/nextcloud-push-notify

## Available Documentation

- [**Changelog**](./changelog)
- [**Changing Database Password**](./changingpassword)
- [**Installation Notes**](./installation-notes)
- [**NextCloud Support Policy**](./support)

## Readme Content


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/premium/nextcloud)

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
https://truecharts.org/charts/premium/nextcloud

### Support


- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/charts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](https://truecharts.org/general/sponsor) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
