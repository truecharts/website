---
title: Adding Service
---

## What is a service

Services are all sorts of port you want to add to your chart

## How to Setup

To setup a service, add the following section to the values.yaml manually and adapt as needed:
You can also add multiple ports to a single service.
Type can be both `Loadbalancer` and `ClusterIP` depending on your need.

```yaml
service:
  myservice:
    enabled: true
    # only needed for loadBalancer
    loadBalancerIP: "192.168.178.11"
    type: "LoadBalancer"
    ports:
      web:
        enabled: true
        port: 8080
        targetPort: 80
        # http is set by default so can be skipped 
        # protocol: http
      api:
        enabled: true
        port: 9090
        targetPort: 90
        protocol: tcp
```

In most charts there are already predefined services. You can change them to your needs (Loadbalancer/ClusterIP).
As well as adding additional ones. Just make sure to choose a unique name

### Service requirements

Please be aware that most apps already have a primary service named `main` and at least 1 primary is required.
It's also important to note that all services added by the end user, should set `enabled` on all ports and services to `true`

## More info

For more info, check out the common-chart [service options](/common/service/)
