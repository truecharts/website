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

The resources that the container can use.

|            |                                                     |
| ---------- | --------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources` |
| Type       | `map`                                               |
| Required   | ✅                                                  |
| Helm `tpl` | ❌                                                  |
| Default    | See [here](../resources.md#defaults)                |

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

The minimum amount of resources that the container needs.

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
| Default    | See [here](../resources.md#resourcesrequests)                |

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

The minimum amount of CPU that the container can use.

|            |                                                                  |
| ---------- | ---------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.requests.cpu` |
| Type       | `string`                                                         |
| Required   | ✅                                                               |
| Helm `tpl` | ❌                                                               |
| Default    | See [here](../resources.md#resourcesrequestscpu)                 |

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

The minimum amount of memory that the container can use.

|            |                                                                     |
| ---------- | ------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.requests.memory` |
| Type       | `string`                                                            |
| Required   | ✅                                                                  |
| Helm `tpl` | ❌                                                                  |
| Default    | See [here](../resources.md#resourcesrequestsmemory)                 |

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

The maximum amount of resources that the container can use.

:::note

Limits are **optional**, can be set to "unlimited" by setting it's values (`cpu` and `memory`) to `0`.

:::

|            |                                                            |
| ---------- | ---------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits` |
| Type       | `map`                                                      |
| Required   | ❌                                                         |
| Helm `tpl` | ❌                                                         |
| Default    | See [here](../resources.md#resourceslimits)                |

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

The maximum amount of CPU that the container can use.

|            |                                                                |
| ---------- | -------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits.cpu` |
| Type       | `string`                                                       |
| Required   | ❌                                                             |
| Helm `tpl` | ❌                                                             |
| Default    | See [here](../resources.md#resourceslimitscpu)                 |

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

The maximum amount of memory that the container can use.

|            |                                                                   |
| ---------- | ----------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.resources.limits.memory` |
| Type       | `string`                                                          |
| Required   | ❌                                                                |
| Helm `tpl` | ❌                                                                |
| Default    | See [here](../resources.md#resourceslimitsmemory)                 |

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

#### `resources.limits.intel.com/i915`

Has a Intel GPU added when available
*Note that "intel.com/i915" is a single dict-name*

Default

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits:
              intel.com/i915: 1
```

---

#### `resources.limits.nvidia.com/gpu`

Has a NVIDIA GPU added when available
*Note that "nvidia.com/gpu" is a single dict-name*

Default

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits:
              nvidia.com/gpu: 1
```

---

#### `resources.limits.amd.com/gpu`

Has a AMD GPU added when available
*Note that "amd.com/gpu" is a single dict-name*

Default

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          resources:
            limits:
              amd.com/gpu: 1
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
