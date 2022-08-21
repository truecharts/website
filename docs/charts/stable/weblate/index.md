# weblate

![Version: 4.0.30](https://img.shields.io/badge/Version-4.0.30-informational?style=flat-square) ![AppVersion: 4.13.1](https://img.shields.io/badge/AppVersion-4.13.1-informational?style=flat-square)

Weblate is a copylefted libre software web-based continuous localization system

TrueCharts can be installed as both *normal* Helm Charts or as Apps on TrueNAS SCALE.

This readme is just an automatically generated general guide on installing our Helm Charts and Apps.
For more information, please click here: [weblate](https://truecharts.org/docs/charts/stable/weblate)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

## Source Code

* <https://github.com/truecharts/charts/tree/master/charts/stable/weblate>
* <https://github.com/WeblateOrg/weblate>
* <https://github.com/WeblateOrg/docker>
* <https://github.com/WeblateOrg/docker-compose>
* <https://docs.weblate.org/en/latest/>

## Requirements

Kubernetes: `>=1.16.0-0`

## Dependencies

| Repository | Name | Version |
|------------|------|---------|
| https://charts.truecharts.org/ | postgresql | 8.0.56 |
| https://charts.truecharts.org | redis | 3.0.54 |
| https://library-charts.truecharts.org | common | 10.4.12 |

## Installing the Chart

### TrueNAS SCALE

To install this Chart on TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Installing-an-App).

### Helm

To install the chart with the release name `weblate`

```console
helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install weblate TrueCharts/weblate
```

## Uninstall

### TrueNAS SCALE

**Upgrading, Rolling Back and Uninstalling the Chart**

To upgrade, rollback or delete this Chart from TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Upgrade-rollback-delete-an-App).

### Helm

To uninstall the `weblate` deployment

```console
helm uninstall weblate
```

## Configuration

### Helm

#### Available Settings

Read through the [values.yaml](./values.yaml) file. It has several commented out suggested values.
Other values may be used from the [values.yaml](https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml) from the [common library](https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common).

#### Configure using the command line

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`.

```console
helm install weblate \
  --set env.TZ="America/New York" \
    TrueCharts/weblate
```

#### Configure using a yaml file

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart.

```console
helm install weblate TrueCharts/weblate -f values.yaml
```

#### Connecting to other charts

If you need to connect this Chart to other Charts on TrueNAS SCALE, please refer to our [Linking Charts Internally](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/linking-apps) quick-start guide.

## Support

- Please check our [quick-start guides for TrueNAS SCALE](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Important-MUST-READ).
- See the [Website](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/apps/issues/new/choose)

---

## Sponsor TrueCharts

TrueCharts can only exist due to the incredible effort of our staff.
Please consider making a [donation](https://truecharts.org/docs/about/sponsor) or contributing back to the project any way you can!

---

All Rights Reserved - The TrueCharts Project
