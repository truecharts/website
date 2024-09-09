---
title: redm
---

![Version: 7.1.5](https://img.shields.io/badge/Version-7.1.5-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: latest](https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square)

With this Chart you can run RedM (Red Dead Redemption 2 MOD SERVER) it will automatically download the latest version or if you want to updated it yourself set the Manual Updates (in the 'Show more settings' tab down below) to true (without quotes). The Chart will automatically extract it and download all other required files (resources, server.cfg). You can get fx.tar.xz from here: https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/ To run this Chart you must provide a valid Server Key (you can get them from here: https://keymaster.fivem.net/) and your prefered Server Name.

## Chart Sources

- https://github.com/truecharts/charts/tree/master/charts/stable/redm
- https://hub.docker.com/r/ich777/redmserver
- https://redm.gg/

## Available Documentation



---

## Readme


### General Info

TrueCharts can be installed as both _normal_ Helm Charts or as TrueNAS SCALE Apps.
Both solutions are fully supported, but we heavily advice the use of normal Helm Charts where possible

For more information about this Chart, please check the docs on the TrueCharts [website](https://truecharts.org/charts/stable/redm)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

### Installation

#### Helm-Chart installation

To install TrueCharts Helm charts using Helm, you can use our OCI Repository.

`helm install mychart oci://tccr.io/truecharts/redm`

For more information on how to install TrueCharts Helm charts, checkout the [instructions on the website](/guides)


#### TrueNAS SCALE Apps

For more information on how to use TrueCharts as TrueNAS SCALE Apps, please checkout the [quick-start guides for TrueNAS SCALE](/deprecated/scale).

### Chart Specific Guides and information

All our charts have dedicated documentation pages.
The documentation for this chart can be found here:
https://truecharts.org/charts/stable/redm

### Configuration Options

Please note: For TrueNAS SCALE, only options available in the GUI are supported.
Hence most of these docs do not apply to TrueNAS SCALE

To view the chart specific options, please view Values.yaml included in the chart.
The most recent version of which, is available here: https://github.com/truecharts/charts/blob/master/charts/stable/redm/values.yaml

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
