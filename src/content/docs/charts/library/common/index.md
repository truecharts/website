---
title: common
---

![Version: 25.0.0](https://img.shields.io/badge/Version-25.0.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: latest](https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square)

Function library for TrueCharts

## Chart Sources

null

## Available Documentation



---

## Readme


- ServiceAccount:
  - Primary: `$FullName`
  - Others: `$FullName-$ServiceAccountName`
- RBAC:
  - Primary: `$FullName`
  - Others: `$FullName-$RBACName`
- Service:
  - Primary: `$FullName`
  - Others: `$FullName-$ServiceName`
- Pods:
  - Primary: `$FullName`
  - Others: `$FullName-$PodName`
- Containers: `$ContainerName`
- ConfigMap: `$FullName-$ConfigMapName`
- Secret: `$FullName-$SecretName`

> Full name -> `$ReleaseName-$ChartName`
> Any name that exceeds 63 characters, will throw an error
