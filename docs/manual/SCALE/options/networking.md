---
sidebar_position: 5
---
# Networking and Services

Networking options for any applications are contained here. Some applications may have complicated networking setups with multiple options or some may have no options here at all. Options here include the service and port configurations for the application, and more may be enabled or changed under the Advanced Settings and Show Expert Config boxes.

## App Network Options

TrueCharts contain a number of networking options, some super-easy, others quite-advanced. In this document we will try to give a general overview what the general configuration options are and what are their downside and upsides.

## General Choices

### LoadBalancer

Loadbalancer service exposes ports to the host. However it can do so in lower ranges than NodePort, making it a great solution for things like DNS servers.

### ClusterIP

ClusterIP creates a service that is only available on the internal kubernetes network. Ports are not exposed to the host.

ClusterIP is recommended when apps are configured to use ingress (Traefik).

### Host Networking

This option is considered to be an advanced option and is rarely needed. It connects the network-stack of the host to the App.

The reason this is not needed in most Apps, is because we already have great options to deal with most forms of network traffic and every maintainer has the goal to make sure you don't need this setting.

Please refer to the documentation of individual Apps or the Support-Discussions section on github, if you think you might need this setting in your specific use case


## `Networking and Services`

If shown, one may choose the `Service Type` for their application. Might be multiple services shown depending on the application or none at all.

- `Service Type`:
  - `LoadBalancer` (default) exposes the service using the system loadbalancer.
    - If `LoadBalancer` is selected an empty box called `Loadbalancer IP` appears. This box is only used for users of `MetalLB`, as it selects the Loadbalancer IP to expose on. Required when using PortalButton with MetalLB.
  - `ClusterIP` exposes the services internally only.

- `Service Port`:
  - This port exposes the container port on the service. This port is the `external` port to reach the application.
  - To change the `interal` / Target Port or `Port Type` one must click on the `Show Advanced Settings` box.

:::Warning Show Export Config

Checking the `Show Export Config` box enables one to change many expert or advanced options not described here. Enabling them may render you application unable to deploy and is advised for advanced Kubernetes users only.

:::

