---
sidebar_position: 11
---
# Addons

Addons that are supplied by the TrueCharts team to add additional capabilities for users to use on top of the application’s defaults. Things included here are VPN addons, Codeserver for editing files inside the application’s container, Promtail, etc. Generally not required for use but may be necessary at times for specific applications.

## `Addons`

This section is all unchecked by default, checking each option will display the menus described below.

- `Codeserver`: Enables an instance of `vscode` on port 36107 (default) to edit files in the container.
  - Git Settings
    - `Deploy Key`: Raw SSH Private Key
    - `Deploy Key Base64`
    - `Service Type`: LoadBalancer (default) or ClusterIP
      - `LoadBalancer IP`: MetalLB Only: Selects the Loadbalancer IP to expose on. Required when using PortalButton with MetalLB
    - `Port` : 36107 (Default)
    - `nodePort` : 36107 (leave empty to disable)
- `Promtail`
  -`Loki URL`: Required
  - `Log Paths`
    - `Name`: Required
    - `Path`: Required
  - Promtail Command Line Arguments : Add as necessary
  - Promtail Environment Variables : Add as necessary
- `Netshoot`
  -`Netshoot Environment Variables`: Add as necessary
    -`Name`:
    -`Value`:

### `VPN`:

This section has it's own guide in our Manual, so please refer to our [manual](https://truecharts.org/docs/manual/guides/vpn-setup) for a full description and guide to setup a VPN for your application.  
