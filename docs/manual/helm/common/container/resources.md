---
title: Resources
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.workload.$name.podSpec.containers.$name`
- `.Values.workload.$name.podSpec.initContainers.$name`

## Notes

- [CPU Regex Validation](https://regex101.com/r/D4HouI/1)
- [Memory Regex Validation](https://regex101.com/r/4X3Z9V/1)

---

## `resources`

Define resources for the container

|            |                                                     |
| ---------- | --------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources` |
| Type       | `map`                                               |
| Required   | ✅                                                  |
| Helm `tpl` | ❌                                                  |
| Default    | `{{ .Values.containerOptions.resources }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources: {}
```

---

### `resources.requests`

Define the requests for the container

:::note

Requests are **required**, because without it, kubernetes uses the `limits` as the `requests`.
Which can lead pods to be evicted or not even scheduled when they reach their `limits`.

:::

|            |                                                              |
| ---------- | ------------------------------------------------------------ |
| Key        | `workload.$name.podSpec.containers.$name.resources.requests` |
| Type       | `map`                                                        |
| Required   | ✅                                                           |
| Helm `tpl` | ❌                                                           |
| Default    | `{{ .Values.containerOptions.resources.requests }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            requests: {}
```

---

#### `resources.requests.cpu`

Define the requests.cpu for the container

|            |                                                                  |
| ---------- | ---------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.requests.cpu` |
| Type       | `string`                                                         |
| Required   | ✅                                                               |
| Helm `tpl` | ❌                                                               |
| Default    | `{{ .Values.containerOptions.resources.requests.cpu }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            requests:
              cpu: 10m
```

---

#### `resources.requests.memory`

Define the requests.memory for the container

|            |                                                                     |
| ---------- | ------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.requests.memory` |
| Type       | `string`                                                            |
| Required   | ✅                                                                  |
| Helm `tpl` | ❌                                                                  |
| Default    | `{{ .Values.containerOptions.resources.requests.memory }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            requests:
              memory: 50Mi
```

---

### `resources.limits`

Define the limits for the container

:::note

Limits are **optional**, can be set to "unlimited" by setting it's values (`cpu` and `memory`) to `0`.

:::

|            |                                                            |
| ---------- | ---------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits` |
| Type       | `map`                                                      |
| Required   | ❌                                                         |
| Helm `tpl` | ❌                                                         |
| Default    | `{{ .Values.containerOptions.resources.limits }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits: {}
```

---

#### `resources.limits.cpu`

Define the limits.cpu for the container

|            |                                                                |
| ---------- | -------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits.cpu` |
| Type       | `string`                                                       |
| Required   | ❌                                                             |
| Helm `tpl` | ❌                                                             |
| Default    | `{{ .Values.containerOptions.resources.limits.cpu }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits:
              cpu: "1"
```

---

#### `resources.limits.memory`

Define the limits.memory for the container

|            |                                                                   |
| ---------- | ----------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits.memory` |
| Type       | `string`                                                          |
| Required   | ❌                                                                |
| Helm `tpl` | ❌                                                                |
| Default    | `{{ .Values.containerOptions.resources.limits.memory }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits:
              memory: 1Gi
```

---

## Full Examples

```yaml
workload:
  workload-name:
    enabled: true
    primary: true
    podSpec:
      containers:
        container-name:
          enabled: true
          primary: true
          resources:
            limits:
              cpu: "1"
              memory: 1Gi
            requests:
              cpu: 10m
              memory: 50Mi
```
