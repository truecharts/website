---
title: Helm
---

This manual contains general information on working with TrueCharts Charts using Helm directly.
As well as when editing Helm Yaml for tools like FluxCD, KubeApps and Rancher

Please always also check the Chart specific content.

## Installing a Chart

If you want to install a chart using helm, lookup the name of the chart in our Chart list.
Afterwards run this command to install it directly from our OCI repository:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME`

*Where "CHARTNAME" is the name of the chart you want to add and "mychart" is the name you want it to have on your system*


We would highly suggest your write your customisations and user specific options in your own `values.yaml` file.
After which you can install the chart with your user specific settings using:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME -f values.yaml`

*where `values.yaml` can be replaced with a path of your choice*

We would also advice users to specifiy seperate namespaces for deployed charts using:

`helm install mychart oci://tccr.io/truecharts/CHARTNAME -f values.yaml -n NAMESPACE`

*where `NAMESPACE` is the namespace you want to deploy to*

For more information, please see the Helm docs:
https://helm.sh/docs/helm/helm_install/

## Upgrading charts

To upgrade either the chart version and/or the user-defined settings for a, already installed, Helm chart you can use "helm upgrade".
While this does not actually update the chart version, it does update the user settings supplied via the `values.yaml file specified above`

`helm upgrade oci://tccr.io/truecharts/CHARTNAME -f values.yaml -n NAMESPACE`

For more information, please see the Helm docs:
https://helm.sh/docs/helm/helm_upgrade/