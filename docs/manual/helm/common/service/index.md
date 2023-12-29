---
title: Service
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.service`

## Naming scheme

- Primary: `$FullName` (release-name-chart-name)
- Non-Primary: `$FullName-$ServiceName` (release-name-chart-name-ServiceName)

:::tip

Replace references to `$name` and `$port-name` with the actual name you want to use.

:::

---

## Target Selector

- `targetSelector` (string): Define the pod to link the service, by default will use the primary pod/container
- `targetSelector` (empty): Assign the service to the primary pod/container

---

## `service`

Define service objects

|            |           |
| ---------- | --------- |
| Key        | `service` |
| Type       | `map`     |
| Required   | `❌`      |
| Helm `tpl` | `❌`      |
| Default    | `{}`      |

Example

```yaml
service: {}
```

---

### `$name`

Define service

|            |                 |
| ---------- | --------------- |
| Key        | `service.$name` |
| Type       | `map`           |
| Required   | `✅`            |
| Helm `tpl` | `❌`            |
| Default    | `{}`            |

Example

```yaml
service:
  service-name: {}
```

---

#### `enabled`

Enables or Disables the service

|            |                         |
| ---------- | ----------------------- |
| Key        | `service.$name.enabled` |
| Type       | `bool`                  |
| Required   | `✅`                    |
| Helm `tpl` | `❌`                    |
| Default    | `false`                 |

Example

```yaml
service:
  service-name:
    enabled: true
```

---

#### `namespace`

Define the namespace for this object

|            |                           |
| ---------- | ------------------------- |
| Key        | `service.$name.namespace` |
| Type       | `string`                  |
| Required   | `❌`                      |
| Helm `tpl` | `✅ (On value only)`      |
| Default    | `""`                      |

Example

```yaml
service:
  service-name:
    namespace: some-namespace
```

---

#### `labels`

Additional labels for service

|            |                        |
| ---------- | ---------------------- |
| Key        | `service.$name.labels` |
| Type       | `map`                  |
| Required   | `❌`                   |
| Helm `tpl` | `✅ (On value only)`   |
| Default    | `{}`                   |

Example

```yaml
service:
  service-name:
    labels:
      some-label: some-value
```

---

#### `annotations`

Additional annotations for service

|            |                             |
| ---------- | --------------------------- |
| Key        | `service.$name.annotations` |
| Type       | `map`                       |
| Required   | `❌`                        |
| Helm `tpl` | `✅ (On value only)`        |
| Default    | `{}`                        |

Example

```yaml
service:
  service-name:
    annotations:
      some-annotation: some-value
```

---

#### `type`

Define the service type

|            |                      |
| ---------- | -------------------- |
| Key        | `service.$name.type` |
| Type       | `string`             |
| Required   | `✅`                 |
| Helm `tpl` | `✅`                 |
| Default    | `ClusterIP`          |

Valid Values:

- [`ClusterIP`](ClusterIP.md)
- [`LoadBalancer`](LoadBalancer.md)
- [`NodePort`](NodePort.md)
- [`ExternalName`](ExternalName.md)
- [`ExternalIP`](ExternalIP.md)

Example

```yaml
service:
  service-name:
    type: ClusterIP
```

---

#### `expandObjectName`

Whether to expand the object name (based on the [naming scheme](#naming-scheme)) or not

|            |                                  |
| ---------- | -------------------------------- |
| Key        | `service.$name.expandObjectName` |
| Type       | `bool`                           |
| Required   | `❌`                             |
| Helm `tpl` | `❌`                             |
| Default    | `true`                           |

Example

```yaml
service:
  service-name:
    expandObjectName: false
```

---

#### `publishNotReadyAddresses`

Define whether to publishNotReadyAddresses or not

|            |                                          |
| ---------- | ---------------------------------------- |
| Key        | `service.$name.publishNotReadyAddresses` |
| Type       | `bool`                                   |
| Required   | `❌`                                     |
| Helm `tpl` | `❌`                                     |
| Default    | `false`                                  |

Example

```yaml
service:
  service-name:
    publishNotReadyAddresses: true
```

---

#### `targetSelector`

Define the pod to link the service, by default will use the primary pod

|            |                                |
| ---------- | ------------------------------ |
| Key        | `service.$name.targetSelector` |
| Type       | `string`                       |
| Required   | `❌`                           |
| Helm `tpl` | `❌`                           |
| Default    | `""`                           |

Example

```yaml
service:
  service-name:
    targetSelector: some-pod
```

---

#### `ports`

Define the ports of the service

|            |                       |
| ---------- | --------------------- |
| Key        | `service.$name.ports` |
| Type       | `map`                 |
| Required   | `✅`                  |
| Helm `tpl` | `❌`                  |
| Default    | `{}`                  |

Example

```yaml
service:
  service-name:
    ports: {}
```

---

##### `ports.$port-name`

Define the port dict

|            |                                  |
| ---------- | -------------------------------- |
| Key        | `service.$name.ports.$port-name` |
| Type       | `map`                            |
| Required   | `✅`                             |
| Helm `tpl` | `❌`                             |
| Default    | `{}`                             |

Example

```yaml
service:
  service-name:
    ports:
      port-name: {}
```

---

###### `ports.$port-name.port`

Define the port that will be exposed by the service

|            |                                       |
| ---------- | ------------------------------------- |
| Key        | `service.$name.ports.$port-name.port` |
| Type       | `int`                                 |
| Required   | `✅`                                  |
| Helm `tpl` | `✅`                                  |
| Default    | unset                                 |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        port: 80
```

---

###### `ports.$port-name.targetPort`

Define the target port (No named ports)

|            |                                             |
| ---------- | ------------------------------------------- |
| Key        | `service.$name.ports.$port-name.targetPort` |
| Type       | `int`                                       |
| Required   | `✅`                                        |
| Helm `tpl` | `✅`                                        |
| Default    | (Defaults to `port` if not set)             |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        targetPort: 80
```

---

###### `ports.$port-name.protocol`

Define the port protocol Used by the container ports and probes, http and https are converted to tcp where needed

|            |                                                  |
| ---------- | ------------------------------------------------ |
| Key        | `service.$name.ports.$port-name.protocol`        |
| Type       | `string`                                         |
| Required   | `❌`                                             |
| Helm `tpl` | `✅`                                             |
| Default    | `{{ .Values.fallbackDefaults.serviceProtocol }}` |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        protocol: tcp
```

---

###### `ports.$port-name.nodePort`

Define the node port

|            |                                           |
| ---------- | ----------------------------------------- |
| Key        | `service.$name.ports.$port-name.nodePort` |
| Type       | `int`                                     |
| Required   | `❌`                                      |
| Helm `tpl` | `✅`                                      |
| Default    | unset                                     |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        nodePort: 30000
```

---

###### `ports.$port-name.hostPort`

Define the hostPort, should be **avoided**, unless **ABSOLUTELY** necessary

|            |                                           |
| ---------- | ----------------------------------------- |
| Key        | `service.$name.ports.$port-name.hostPort` |
| Type       | `int`                                     |
| Required   | `❌`                                      |
| Helm `tpl` | `✅`                                      |
| Default    | unset                                     |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        hostPort: 30000
```

---

###### `ports.$port-name.targetSelector`

Define the container to link this port (Must be on under the pod linked above)

|            |                                                 |
| ---------- | ----------------------------------------------- |
| Key        | `service.$name.ports.$port-name.targetSelector` |
| Type       | `string`                                        |
| Required   | `❌`                                            |
| Helm `tpl` | `✅`                                            |
| Default    | unset                                           |

Example

```yaml
service:
  service-name:
    ports:
      port-name:
        targetSelector: some-container
```

---

## Full Examples

Full examples can be found under each service type

- [ClusterIP](ClusterIP.md)
- [LoadBalancer](LoadBalancer.md)
- [NodePort](NodePort.md)
- [ExternalName](ExternalName.md)
- [ExternalIP](ExternalIP.md)
