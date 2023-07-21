---
slug: "cert-manager-operator"
title: "Cert-Manager Operator"
authors: [kqmaverick]
---

After building our own MetalLB, CNPG and Prometheus operator charts, we've also now finished the work on building our own Cert-Manager operator chart. As of today this chart will be a requirement for new users if they want to use Cert-Manager and required for all users starting 01-08-2023.

If you have already installed clusterissuer follow the below guidance for installation of the Cert-Manager operator chart.

If you have not already done so add the operator train to TrueCharts [as outlined here](https://truecharts.org/manual/SCALE/guides/getting-started#adding-truecharts)

1. Run this in the system shell as **root**: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete4`
2. Install [cert-manager](https://truecharts.org/charts/operators/cert-manager/) from the operators train.
3. Update [clusterissuer](https://truecharts.org/charts/enterprise/clusterissuer/) to the latest version of (2.0.1+). If you are already on the latest version complete any empty edit of clusterissuer (edit app configs and save without making any changes).

*If you run into any more issues, please file a ticket with our dedicated support staff on Discord like normal**

