---
sidebar_position: 17
---

# Common Errors on TrueNAS SCALE

#### nil pointer evaluating interface {}.mode
`[EFAULT] Failed to install chart release: Error: INSTALLATION FAILED: template: APPNAME/templates/common.yaml:1:3: executing "APPNAME/templates/common.yaml" at : error calling include: template: APPNAME/charts/common/templates/loader/_all.tpl:6:6: executing "tc.v1.common.loader.all" at : error calling include: template: APPNAME/charts/common/templates/loader/_apply.tpl:47:6: executing "tc.v1.common.loader.apply" at : error calling include: template: APPNAME/charts/common/templates/spawner/_pvc.tpl:25:10: executing "tc.v1.common.spawner.pvc" at : error calling include: template: APPNAME/charts/common/templates/lib/storage/_validation.tpl:18:43: executing "tc.v1.common.lib.persistence.validation" at <$objectData.static.mode>: nil pointer evaluating interface {}.mode `

Solution: Upgrade SCALE to Cobia (23.10.x). SCALE Bluefin and Angelfish releases are no longer supported. (System Settings -> Update. Select Cobia from the dropdown) 
Support Policy: https://truecharts.org/manual/SUPPORT

### Operator-Related Errors

#### service "cnpg-webhook-service" not found
`[EFAULT] Failed to update App: Error: UPGRADE FAILED: cannot patch "APPNAME-cnpg-main" with kind Cluster: Internal error occurred: failed calling webhook "mcluster.cnpg.io": failed to call webhook: Post "https://cnpg-webhook-service.ix-cloudnative-pg.svc/mutate-postgresql-cnpg-io-v1-cluster?timeout=10s": service "cnpg-webhook-service" not found`

Solution:
1. Enter the following command: 
```bash
k3s kubectl delete deployment.apps/cloudnative-pg -n ix-cloudnative-pg
```
2. Update cloudnative-pg to the latest version, or if on the latest version, edit cloudnative-pg and save/update without any changes

#### "monitoring.coreos.com/v1" ensure CRDs are installed first
`[EFAULT] Failed to update App: Error: UPGRADE FAILED: unable to build kubernetes objects from current release manifest: resource mapping not found for name: "APPNAME" namespace: "ix-APPNAME" from "": no matches for kind "PodMonitor" in version "monitoring.coreos.com/v1" ensure CRDs are installed first`

Solution: Install `prometheus-operator`. If you see this error with prometheus-operator already installed, then delete and reinstall. When deleting prometheus-operator, if you encounter the error:

`Error: [EFAULT] Unable to uninstall 'prometheus-operator' chart release: b'Error: failed to delete release: prometheus-operator\n'`

Run the following command from system shell as root:
```bash
k3s kubectl delete ns ix-prometheus-operator
```
Then install `prometheus-operator` again. It will fail on the first install attempt, but the second time it will work.

#### Rendered manifests contain a resource that already exists
`[EFAULT] Failed to install App: Error: INSTALLATION FAILED: rendered manifests contain a resource that already exists. Unable to continue with install: CustomResourceDefinition "certificaterequests.cert-manager.io" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "cert-manager"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "ix-cert-manager"`

Solution: https://truecharts.org/manual/FAQ#cert-manager

`[EFAULT] Failed to install App: Error: INSTALLATION FAILED: rendered manifests contain a resource that already exists. Unable to continue with install: CustomResourceDefinition "backups.postgresql.cnpg.io" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "cloudnative-pg"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "ix-cloudnative-pg"`

Solution: https://truecharts.org/manual/FAQ#cloudnative-pg

`"[EFAULT] Failed to install App: Error: INSTALLATION FAILED: rendered manifests contain a resource that already exists. Unable to continue with install: CustomResourceDefinition "addresspools.metallb.io" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "metallb"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "ix-metallb""`

Solution: https://truecharts.org/manual/FAQ#metallb

`[EFAULT] Failed to install chart release: Error: INSTALLATION FAILED: rendered manifests contain a resource that already exists. Unable to continue with install: CustomResourceDefinition "alertmanagerconfigs.monitoring.coreos.com" in namespace "" exists and cannot be imported into the current release: invalid ownership metadata; label validation error: missing key "app.kubernetes.io/managed-by": must be set to "Helm"; annotation validation error: missing key "meta.helm.sh/release-name": must be set to "prometheus-operator"; annotation validation error: missing key "meta.helm.sh/release-namespace": must be set to "ix-prometheus-operator"`

Solution: https://truecharts.org/manual/FAQ#prometheus-operator


#### Operator has to be installed first
`Failed to install App: Operator [traefik] has to be installed first`

Solution: If this error appears while installing Traefik, install Traefik with its own ingress disabled first. Once it's installed you can enable ingress for traefik.

`Failed to install App: Operator [cloudnative-pg] has to be installed first`

Solution: Install `cloudnative-pg`.
Prerequisite: Ensure the operators train is enabled in the Truecharts catalog under Apps -> Discover Apps -> Manage Catalogs

`Failed to install App: Operator [prometheus-operator] has to be installed first`

Solution: Install `prometheus-operator`.
Prerequisite: Ensure the operators train is enabled in the Truecharts catalog under Apps -> Discover Apps -> Manage Catalogs