---
title: Addons
sidebar:
  order: 11
---

Addons that are supplied by the TrueCharts team to add additional capabilities for users to use on top of the application’s defaults. Things included here are VPN addons, Codeserver for editing files inside the application’s container, Netshoot for network troubelshooting, etc. Generally not required for use but may be necessary at times for specific applications.

## `Addons`

This section is all unchecked by default, checking each option will display the menus described below.

- `Codeserver`: Enables an instance of `vscode` on port 36107 (default) to edit files in the container.
  - `Service Type`: LoadBalancer (default) or ClusterIP
    - `LoadBalancer IP`: MetalLB Only: Selects the Loadbalancer IP to expose on.
  - `Port` : 36107 (Default)
    - `Enable Ingress`: Enables ingress to access codeserver via hostname. Options are the same as main ingress section
  - `Codeserver Environment Variables`
- `Netshoot`: Enables a container sidecar with many common network utilities not typically found in container images
  - `Netshoot Environment Variables`

### `VPN`:

This section has its own guide in our manual, so please refer to our [manual](/platforms/scale/guides/vpn-setup/) for a full description and guide to setup a VPN for your application.
