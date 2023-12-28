---
title: ClusterIP
---

:::tip

Prefix all keys below with `service.$name.`

See available service keys [here](./index.md).

:::

Appears in:

- `.Values.service.$name`

---

## `clusterIP`

Configure Cluster IP type

|          |             |
| -------- | ----------- |
| Key      | `clusterIP` |
| Type     | `string`    |
| Required | `❌`        |
| tpl      | `✅`        |
| Default  | `""`        |

Example

```yaml
clusterIP: 172.16.0.123
```

---

## `ipFamilyPolicy`

Define the ipFamilyPolicy (SingleStack, PreferDualStack, RequireDualStack)

|          |                  |
| -------- | ---------------- |
| Key      | `ipFamilyPolicy` |
| Type     | `string`         |
| Required | `❌`             |
| tpl      | `✅`             |
| Default  | `""`             |

Valid Values:

- `SingleStack`
- `PreferDualStack`
- `RequireDualStack`

Example

```yaml
ipFamilyPolicy: SingleStack
```

---

## `ipFamilies`

Define the ipFamilies

|          |                        |
| -------- | ---------------------- |
| Key      | `ipFamilies`           |
| Type     | `list` of `string`     |
| Required | `❌`                   |
| tpl      | `✅` (On entries only) |
| Default  | `[]`                   |

Example

```yaml
ipFamilies:
  - IPv4
```

---

## `sessionAffinity`

Define the session affinity (ClientIP, None)

|          |                   |
| -------- | ----------------- |
| Key      | `sessionAffinity` |
| Type     | `string`          |
| Required | `❌`              |
| tpl      | `✅`              |
| Default  | `""`              |

Valid Values:

- `ClientIP`
- `None`

Example

```yaml
sessionAffinity: ClientIP
```

---

## `sessionAffinityConfig.clientIP.timeoutSeconds`

Define the timeout for ClientIP session affinity (0-86400)

|          |                                                 |
| -------- | ----------------------------------------------- |
| Key      | `sessionAffinityConfig.clientIP.timeoutSeconds` |
| Type     | `int`                                           |
| Required | `❌`                                            |
| tpl      | `✅`                                            |
| Default  | `""`                                            |

Valid Values:

- `0` - `86400`

Example

```yaml
sessionAffinityConfig:
  clientIP:
    timeoutSeconds: 86400
```

---

## `externalIPs`

Define externalIPs

|          |                        |
| -------- | ---------------------- |
| Key      | `externalIPs`          |
| Type     | `list` of `string`     |
| Required | `❌`                   |
| tpl      | `✅` (On entries only) |
| Default  | `[]`                   |

Example

```yaml
externalIPs:
  - 1.2.3.4
  - 5.6.7.8
```

---

## Full Examples

```yaml
service:
  service-clusterip:
    enabled: true
    primary: true
    publishNotReadyAddresses: true
    clusterIP: 172.16.20.233
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
    targetSelector: pod-name
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        protocol: http
        targetPort: 8080
```
