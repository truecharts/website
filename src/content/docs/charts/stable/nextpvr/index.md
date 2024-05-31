---
title: nextpvr
---

![Version: 10.0.9](https://img.shields.io/badge/Version-10.0.9-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: stable](https://img.shields.io/badge/AppVersion-stable-informational?style=flat-square)

NextPVR is a personal video recorder application, with the goal making it easy to watch or record live TV.

## Chart Sources

- https://github.com/sub3/NextPVR/wiki/Install-Docker
- https://github.com/truecharts/charts/tree/master/charts/stable/nextpvr
- https://hub.docker.com/r/nextpvr/nextpvr_amd64

## Available Documentation

- [**Default Username/Password**](./credentials)


---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/stable/nextpvr)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/CHARTNAME`

For more information on how to install TrueCharts Helm charts, checkout the instructions on the website: https://truecharts.org/helm/


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](https://truecharts.org/scale).

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/stable/nextpvr

### Configuration Options

Please note: For TrueNAS SCALE, only options available in the GUI are supported.
Hence most of these docs do not apply to TrueNAS SCALE

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/truecharts/charts/charts/stable/nextpvr/values.yaml

All our Charts use a shared "common" library chart that contains most of the templating and options.
For the complete overview of all available options, please checkout the documentation for them on the website: https://truecharts.org/common/

For information about the common chart and all defaults included with it, please review its values.yaml file available here: https://github.com/truecharts/library-charts/blob/main/library/common/values.yaml

### Support

- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/charts/issues/new/choose)

---

### Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](https://truecharts.org/general/sponsor) or contributing back to the project any way you can!

_All Rights Reserved - The TrueCharts Project_
