---
title: speedtest-tracker
---

![Version: 5.6.1](https://img.shields.io/badge/Version-5.6.1-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 0.21.2](https://img.shields.io/badge/AppVersion-0.21.2-informational?style=flat-square)

Speedtest Tracker is a self-hosted internet performance tracking application that runs speedtest checks against Ookla's Speedtest service.

## Chart Sources

- https://ghcr.io/linuxserver/speedtest-tracker
- https://github.com/alexjustesen/speedtest-tracker
- https://github.com/linuxserver/docker-speedtest-tracker
- https://github.com/truecharts/charts/tree/master/charts/stable/speedtest-tracker

## Available Documentation

- [**Default credentials**](./credentials)


---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/stable/speedtest-tracker)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/speedtest-tracker`

For more information on how to install TrueCharts Helm charts, checkout the [instructions on the website](/guides)


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](/deprecated/scale).

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/stable/speedtest-tracker

### Configuration Options

Please note: For TrueNAS SCALE, only options available in the GUI are supported.
Hence most of these docs do not apply to TrueNAS SCALE

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/truecharts/public/blob/master/charts/stable/speedtest-tracker/values.yaml

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
