---
slug: "cluster-wide-certificates"
title: "Cluster-Wide Certificates"
authors: [sdimovv]
---

We are happy to announce that support for cluster-wide certificates is now available for Truecharts! You can now create a single certificate and use it throughout your cluster. We call these certificates "cluster certificates".

Before you use the new feature, you should sync the Truecharts catalog and update all of your already installed apps to their latest version.

In addition to the `cert-manager` and `clusterissuer` apps you need for normal certificates, to use cluster certificates you also need to install our new `kubernetes-reflector` app from the enterprise train. For most setups installing it with default settings is sufficent.

Once installed, edit your `clusterissuer` app and add a new cluster certificate. Note down the name you called it. Edit the app you wish to use the cluster certificate for and go to the _Ingress_ section. If you have previously used a clusterissuer certificate, remove the issuer name. Click on _Show Advanced Settings_  and add a _TLS_ entry. Enter the name of your cluster certificate, and the certificate host(s) for which it will be used.

For a more detailed guide, see our [docs](../docs/charts/enterprise/clusterissuer/cluster-certificates.md).
