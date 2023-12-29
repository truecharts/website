---
title: LoadBalancer
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.service.$name`

:::tip

- See available service keys [here](./index.md).
- This options apply only when `type: LoadBalancer`.

:::

---

## `sharedKey`

Sets the shared key in `metallb.universe.tf/allow-shared-ip` **MetalLB** Annotation

|            |                           |
| ---------- | ------------------------- |
| Key        | `service.$name.sharedKey` |
| Type       | `string`                  |
| Required   | `❌`                      |
| Helm `tpl` | `✅`                      |
| Default    | `$FullName`               |

Example

```yaml
service:
  some-service:
    sharedKey: custom-shared-key
```

## `loadBalancerIP`

Define the load balancer IP, sets the `metallb.universe.tf/loadBalancerIPs` **MetalLB** annotation. Mutually exclusive with `loadBalancerIPs`

|            |                                |
| ---------- | ------------------------------ |
| Key        | `service.$name.loadBalancerIP` |
| Type       | `string`                       |
| Required   | `❌`                           |
| Helm `tpl` | `✅`                           |
| Default    | `""`                           |

Example

```yaml
service:
  some-service:
    loadBalancerIP: 1.2.3.4
```

## `loadBalancerIPs`

Define the load balancer IPs, sets the `metallb.universe.tf/loadBalancerIPs` **MetalLB** annotation. Mutually exclusive with `loadBalancerIP`

|            |                                 |
| ---------- | ------------------------------- |
| Key        | `service.$name.loadBalancerIPs` |
| Type       | `list` of `string`              |
| Required   | `❌`                            |
| Helm `tpl` | `✅` (On entries only)          |
| Default    | `[]`                            |

Example

```yaml
service:
  some-service:
    loadBalancerIPs:
      - 1.2.3.4
      - 5.6.7.8
```

---

## `clusterIP`

Configure Cluster IP type

|            |                           |
| ---------- | ------------------------- |
| Key        | `service.$name.clusterIP` |
| Type       | `string`                  |
| Required   | `❌`                      |
| Helm `tpl` | `✅`                      |
| Default    | `""`                      |

Example

```yaml
service:
  some-service:
    clusterIP: 172.16.0.123
```

---

## `ipFamilyPolicy`

Define the ipFamilyPolicy (SingleStack, PreferDualStack, RequireDualStack)

|            |                                |
| ---------- | ------------------------------ |
| Key        | `service.$name.ipFamilyPolicy` |
| Type       | `string`                       |
| Required   | `❌`                           |
| Helm `tpl` | `✅`                           |
| Default    | `""`                           |

Valid Values:

- `SingleStack`
- `PreferDualStack`
- `RequireDualStack`

Example

```yaml
service:
  some-service:
    ipFamilyPolicy: SingleStack
```

---

## `ipFamilies`

Define the ipFamilies

|            |                            |
| ---------- | -------------------------- |
| Key        | `service.$name.ipFamilies` |
| Type       | `list` of `string`         |
| Required   | `❌`                       |
| Helm `tpl` | `✅` (On entries only)     |
| Default    | `[]`                       |

Example

```yaml
service:
  some-service:
    ipFamilies:
      - IPv4
```

---

## `sessionAffinity`

Define the session affinity (ClientIP, None)

|            |                                 |
| ---------- | ------------------------------- |
| Key        | `service.$name.sessionAffinity` |
| Type       | `string`                        |
| Required   | `❌`                            |
| Helm `tpl` | `✅`                            |
| Default    | `""`                            |

Valid Values:

- `ClientIP`
- `None`

Example

```yaml
service:
  some-service:
    sessionAffinity: ClientIP
```

---

## `sessionAffinityConfig.clientIP.timeoutSeconds`

Define the timeout for ClientIP session affinity (0-86400)

|            |                                                               |
| ---------- | ------------------------------------------------------------- |
| Key        | `service.$name.sessionAffinityConfig.clientIP.timeoutSeconds` |
| Type       | `int`                                                         |
| Required   | `❌`                                                          |
| Helm `tpl` | `✅`                                                          |
| Default    | `""`                                                          |

Valid Values:

- `0` - `86400`

Example

```yaml
service:
  some-service:
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 86400
```

---

## `externalIPs`

Define externalIPs

|            |                             |
| ---------- | --------------------------- |
| Key        | `service.$name.externalIPs` |
| Type       | `list` of `string`          |
| Required   | `❌`                        |
| Helm `tpl` | `✅` (On entries only)      |
| Default    | `[]`                        |

Example

```yaml
service:
  some-service:
    externalIPs:
      - 1.2.3.4
      - 5.6.7.8
```

---

## `externalTrafficPolicy`

Define the external traffic policy (Cluster, Local)

|            |                                       |
| ---------- | ------------------------------------- |
| Key        | `service.$name.externalTrafficPolicy` |
| Type       | `string`                              |
| Required   | `❌`                                  |
| Helm `tpl` | `✅`                                  |
| Default    | `""`                                  |

Valid Values:

- `Cluster`
- `Local`

Example

```yaml
service:
  some-service:
    externalTrafficPolicy: Cluster
```

---

## `loadBalancerSourceRanges`

Define the load balancer source ranges

|            |                                          |
| ---------- | ---------------------------------------- |
| Key        | `service.$name.loadBalancerSourceRanges` |
| Type       | `list` of `string`                       |
| Required   | `❌`                                     |
| Helm `tpl` | `✅` (On entries only)                   |
| Default    | `[]`                                     |

Example

```yaml
service:
  some-service:
    loadBalancerSourceRanges:
      - 10.100.100.0/24
      - 10.100.200.0/24
```

---

## Full Examples

```yaml
service:
  service-lb:
    enabled: true
    primary: true
    type: LoadBalancer
    loadBalancerIP: 10.100.100.2
    loadBalancerSourceRanges:
      - 10.100.100.0/24
    clusterIP: 172.16.20.233
    sharedKey: custom-shared-key
    publishNotReadyAddresses: true
    ipFamilyPolicy: SingleStack
    ipFamilies:
      - IPv4
    externalIPs:
      - 10.200.230.34
    sessionAffinity: ClientIP
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 86400
    externalTrafficPolicy: Cluster
    targetSelector: pod-name
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        protocol: HTTP
        targetPort: 8080
```
