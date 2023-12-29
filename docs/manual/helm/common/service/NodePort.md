---
title: NodePort
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.service.$name`

:::tip

- See available service keys [here](./index.md).
- This options apply only when `type: NodePort`.

:::

---

## `clusterIP`

Configure Cluster IP type

|            |                           |
| ---------- | ------------------------- |
| Key        | `service.$name.clusterIP` |
| Type       | `string`                  |
| Required   | ❌                        |
| Helm `tpl` | ✅                        |
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
| Required   | ❌                             |
| Helm `tpl` | ✅                             |
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
| Required   | ❌                         |
| Helm `tpl` | ✅ (On entries only)       |
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
| Required   | ❌                              |
| Helm `tpl` | ✅                              |
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
| Required   | ❌                                                            |
| Helm `tpl` | ✅                                                            |
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
| Required   | ❌                          |
| Helm `tpl` | ✅ (On entries only)        |
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
| Required   | ❌                                    |
| Helm `tpl` | ✅                                    |
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

## `ports.$port-name.nodePort`

Define the node port that will be exposed on the node

|            |                                           |
| ---------- | ----------------------------------------- |
| Key        | `service.$name.ports.$port-name.nodePort` |
| Type       | `int`                                     |
| Required   | ✅                                        |
| Helm `tpl` | ✅                                        |
| Default    | unset                                     |

Example

```yaml
service:
  some-service:
    nodePort: 30080
```

---

## Full Examples

```yaml
service:
  service-nodeport:
    enabled: true
    primary: true
    type: NodePort
    clusterIP: 172.16.20.233
    publishNotReadyAddresses: true
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
        protocol: http
        targetPort: 8080
        nodePort: 30080
```
