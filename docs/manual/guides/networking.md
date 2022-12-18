# App Network Options

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
