# prometheus

kube-prometheus-stack collects Kubernetes manifests, Grafana dashboards, and Prometheus rules combined with documentation and scripts to provide easy to operate end-to-end Kubernetes cluster monitoring with Prometheus using the Prometheus Operator.

TrueCharts are designed to be installed as TrueNAS SCALE app only. We can not guarantee this charts works as a stand-alone helm installation. **This chart is not maintained by the upstream project and any issues with the chart should be raised [here](https://github.com/truecharts/apps/issues/new/choose)**

## Source Code

* <https://github.com/prometheus-community/helm-charts>
* <https://github.com/prometheus-operator/kube-prometheus>

## Requirements

Kubernetes: `>=1.16.0-0`

## Dependencies

| Repository                            | Name               | Version |
| ------------------------------------- | ------------------ | ------- |
| https://charts.bitnami.com/bitnami    | kube-state-metrics | 3.1.1   |
| https://charts.bitnami.com/bitnami    | node-exporter      | 3.0.4   |
| https://library-charts.truecharts.org | common             | 10.4.4  |

## Installing the Chart

To install this App on TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/).

## Upgrading, Rolling Back and Uninstalling the Chart

To upgrade, rollback or delete this App from TrueNAS SCALE check our [Quick-Start Guide](https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/).

##### Connecting to other apps
If you need to connect this App to other Apps on TrueNAS SCALE, please refer to our [Linking Apps Internally](https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/) quick-start guide.

## Support

- Please check our [quick-start guides](https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/) first.
- See the [Wiki](https://truecharts.org)
- Check our [Discord](https://discord.gg/tVsPTHWTtr)
- Open a [issue](https://github.com/truecharts/apps/issues/new/choose)

---

All Rights Reserved - The TrueCharts Project
