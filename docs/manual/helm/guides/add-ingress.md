---
title: Adding Ingress
---

## What is ingress

Ingress is a way to define "routes" from a domain name, through an "ingress controller", to the application running in a chart.
Simply put: they specify reverse proxy configuration for as special reverse proxy called "ingress controller"

## Pre-requisits

Before setting-up ingress, we advice to have an ingress-controller already set-up.
Our adviced ingress controller would be Traefik.

## How-To setup

To setup ingress add the following minimal section to the values.yaml manually, update the required rows, and adapt where needed:

```
ingress:
  main:
    enabled: true
    hosts:
      - host: chart-example.local
    tls:
      - hosts:
         - chart-example.local
```

This can be expanded by adding "integrations" with cert-manager, and/or homepage, for example:

```
ingress:
  main:
    enabled: true
    hosts:
      - host: chart-example.local
    tls:
      - hosts:
          - chart-example.local
        secretName: chart-example-tls
    integrations:
      certManager:
        enabled: false
        certificateIssuer: ""
      homepage:
        enabled: false
        name: ""
        description: ""
        group: ""
        icon: ""
        widget:
          type: ""
          url: ""
          custom:
            key: value
          customkv:
            - key: some key
              value: some value
```

In somecases an ingress might already been partly defined.
When that's the case, please merge above settings, with the already defined ingresses.

## More info:

For more info, checkout the common-chart ingress options:

https://truecharts.org/manual/helm/common/ingress/

