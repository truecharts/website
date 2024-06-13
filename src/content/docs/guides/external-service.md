---
title: External Service
---

To access external services with traefik, use the `external-service` chart and

1. Set `type` to `External IP`
2. Set `externalIP` to the IP-Address for your service. (In this example 192.168.178.10)
3. Set `protocol` to either `HTTPS` or `HTTP` depending on your service.
4. Set the `port` to the port your service is using. 

When done it should look something like this:

```yaml
service:
  main:
    type: ExternalIP
    externalIP: "192.168.178.10"
    useSlice: false
    ports:
      main:
        protocol: https
        port: 444
```

Don't forget to add your Ingress to the external-service. To learn more about Ingress and how to use it click [here](/guides/add-ingress).

```yaml
ingress:
  main:
    annotations:
      traefik.frontend.passHostHeader: "false"
    enabled: true
    hosts:
      - host: "service.xyz.dev"
        paths:
          - path: "/"
            pathType: "Prefix"
    integrations:
      certManager:
        certificateIssuer: "cloudflare"
        enabled: true
```
