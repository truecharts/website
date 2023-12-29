---
title: ExternalIP
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.service.$name`

:::tip

- See available service keys [here](./index.md).
- This options apply only when `type: ExternalIP`.

:::

---

## `externalIP`

Configure External IP type

|            |                            |
| ---------- | -------------------------- |
| Key        | `service.$name.externalIP` |
| Type       | `string`                   |
| Required   | `✅`                       |
| Helm `tpl` | `✅`                       |
| Default    | `""`                       |

Example

```yaml
service:
  some-service:
    externalIP: 1.2.3.4
```

---

## `useSlice`

Define whether to use `EndpointSlice` or `Endpoint`

|            |                          |
| ---------- | ------------------------ |
| Key        | `service.$name.useSlice` |
| Type       | `bool`                   |
| Required   | `❌`                     |
| Helm `tpl` | `❌`                     |
| Default    | `true`                   |

Example

```yaml
service:
  some-service:
    useSlice: false
```

---

## `addressType`

Define the addressType for External IP

|            |                             |
| ---------- | --------------------------- |
| Key        | `service.$name.addressType` |
| Type       | `string`                    |
| Required   | `❌`                        |
| Helm `tpl` | `✅`                        |
| Default    | `IPv4`                      |

Valid Values:

- `IPv4`
- `IPv6`
- `FQDN`

Example

```yaml
service:
  some-service:
    addressType: IPv6
```

---

## `appProtocol`

Define the appProtocol for External IP

|            |                             |
| ---------- | --------------------------- |
| Key        | `service.$name.appProtocol` |
| Type       | `string`                    |
| Required   | `❌`                        |
| Helm `tpl` | `✅`                        |
| Default    | `""`                        |

Example

```yaml
service:
  some-service:
    appProtocol: http
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

## Full Examples

```yaml
service:
  # Special type
  service-externalip:
    enabled: true
    primary: true
    type: ExternalIP
    useSlice: true
    externalIP: 1.1.1.1
    addressType: IPv4
    appProtocol: http
    publishNotReadyAddresses: true
    externalIPs:
      - 10.200.230.34
    sessionAffinity: ClientIP
    externalTrafficPolicy: Cluster
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        targetPort: 8080
        protocol: HTTP
```
