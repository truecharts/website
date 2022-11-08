---
sidebar_position: 5
---
# Networking and Services

Networking options for any applications are contained here. Some applications may have complicated networking setups with multiple options or some may have no options here at all. Options here include the service and port configurations for the application, and more may be enabled or changed under the Advanced Settings and Show Expert Config boxes.

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
