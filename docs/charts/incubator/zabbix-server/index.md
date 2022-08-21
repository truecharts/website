# zabbix-server

![Version: 2.0.31](https://img.shields.io/badge/Version-2.0.31-informational?style=flat-square) ![AppVersion: 6.2.1](https://img.shields.io/badge/AppVersion-6.2.1-informational?style=flat-square)

Zabbix is an enterprise-class open source distributed monitoring solution.

TrueCharts can be installed as both *normal* Helm Charts or as Apps on TrueNAS SCALE.

This readme is just an automatically generated general guide on installing our Helm Charts and Apps.
For more information, please click here: [zabbix-server](https://truecharts.org/docs/charts/stable/zabbix-server)

**This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/charts/issues/new/choose)**

## Source Code

* <https://github.com/truecharts/charts/tree/master/charts/incubator/zabbix-server>
* <https://hub.docker.com/r/zabbix/zabbix-server-pgsql>
* <https://hub.docker.com/r/zabbix/zabbix-web-nginx-pgsql>

## Requirements

Kubernetes: `>=1.16.0-0`

## Dependencies

| Repository | Name | Version |
|------------|------|---------|
| https://charts.truecharts.org/ | postgresql | 8.0.56 |
| https://library-charts.truecharts.org | common | 10.4.12 |

## Installing the Chart

### TrueNAS SCALE

To install this Chart on TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Installing-an-App).

### Helm

To install the chart with the release name `zabbix-server`

```console
helm repo add TrueCharts https://charts.truecharts.org
helm repo update
helm install zabbix-server TrueCharts/zabbix-server
```

## Uninstall

### TrueNAS SCALE

**Upgrading, Rolling Back and Uninstalling the Chart**

To upgrade, rollback or delete this Chart from TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/Upgrade-rollback-delete-an-App).

### Helm

To uninstall the `zabbix-server` deployment

```console
helm uninstall zabbix-server
```

## Configuration

### Helm

#### Available Settings

Read through the [values.yaml](./values.yaml) file. It has several commented out suggested values.
Other values may be used from the [values.yaml](https://github.com/truecharts/library-charts/tree/main/charts/stable/common/values.yaml) from the [common library](https://github.com/k8s-at-home/library-charts/tree/main/charts/stable/common).

#### Configure using the command line

Specify each parameter using the `--set key=value[,key=value]` argument to `helm install`.

```console
helm install zabbix-server \
  --set env.TZ="America/New York" \
    TrueCharts/zabbix-server
```

#### Configure using a yaml file

Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart.

```console
helm install zabbix-server TrueCharts/zabbix-server -f values.yaml
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
