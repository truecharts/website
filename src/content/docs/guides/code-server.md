---
title: CodeServer Addon
---

You can add a codeserver-addon to our charts to modify files of the running chart inside your browser.
You can choose between exposing a port our adding an ingress to it.

```yaml
addons:
      codeserver:
        # -- Enable running a code-server container in the pod
        enabled: true

        service:
        # -- Enable a service for the code-server add-on.
            type: "LoadBalancer"
            loadBalancerIP: "192.168.178.11"
            # Specify the default port information
            ports:
                codeserver:
                  port: 12321

        ingress:
          # -- Enable an ingress for the code-server add-on.
            certManager:
              enabled: true
              certificateIssuer: cloudflare
          hosts:
            - host: recyclarr.codeserver.mydomain.com
```
