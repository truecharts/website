---
title: Scale External Interface
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.scaleExternalInterface`

## Naming scheme

- `ix-$ReleaseName-$index` (ix-release-name-0)

:::tip

- Replace references to `$name`, `$podName`, `$containerName` with the actual name you want to use.

:::

---

## Target Selector

- `targetSelectAll` (bool): Whether to assign the external interface to all workloads or not. `targetSelector` is ignored in this case
- `targetSelector` (list): Define the workload(s) to assign the external interface
- `targetSelector` (empty): Assign the external interface to the primary workload

---

## `scaleExternalInterface`

Create Scale External Interface objects

|            |                          |
| ---------- | ------------------------ |
| Key        | `scaleExternalInterface` |
| Type       | `list` of `map`          |
| Required   | ❌                       |
| Helm `tpl` | ❌                       |
| Default    | `[]`                     |

Example

```yaml
scaleExternalInterface: []
```

---

### `scaleExternalInterface[].hostInterface`

Define the hostInterface

:::note

Host interface is injected from TrueNAS SCALE UI

:::

|            |                                        |
| ---------- | -------------------------------------- |
| Key        | `scaleExternalInterface.hostInterface` |
| Type       | `string`                               |
| Required   | ✅                                     |
| Helm `tpl` | ❌                                     |
| Default    | `""`                                   |

Example

```yaml
scaleExternalInterface:
  - hostInterface: eth0
```

---

### `scaleExternalInterface[].ipam`

Define the ipam

|            |                               |
| ---------- | ----------------------------- |
| Key        | `scaleExternalInterface.ipam` |
| Type       | `map`                         |
| Required   | ✅                            |
| Helm `tpl` | ❌                            |
| Default    | `{}`                          |

Example

```yaml
scaleExternalInterface:
  - ipam: {}
```

---

#### `scaleExternalInterface[].ipam.type`

Define the ipam type

|            |                                    |
| ---------- | ---------------------------------- |
| Key        | `scaleExternalInterface.ipam.type` |
| Type       | `string`                           |
| Required   | ✅                                 |
| Helm `tpl` | ❌                                 |
| Default    | `""`                               |

Example

```yaml
scaleExternalInterface:
  - ipam:
      type: dhcp
```

---

#### `scaleExternalInterface[].ipam.staticIPConfigurations`

Define static IP Configuration

:::note

Only required when the `ipam.type: static`

:::

|            |                                                      |
| ---------- | ---------------------------------------------------- |
| Key        | `scaleExternalInterface.ipam.staticIPConfigurations` |
| Type       | `list` of `string`                                   |
| Required   | ✅                                                   |
| Helm `tpl` | ❌                                                   |
| Default    | `[]`                                                 |

Example

```yaml
scaleExternalInterface:
  - ipam:
      type: static
      staticIPConfigurations: []
```

---

##### `scaleExternalInterface[].ipam.staticRoutes`

Define static routes

|            |                                            |
| ---------- | ------------------------------------------ |
| Key        | `scaleExternalInterface.ipam.staticRoutes` |
| Type       | `list` of `string`                         |
| Required   | ❌                                         |
| Helm `tpl` | ❌                                         |
| Default    | `[]`                                       |

Example

```yaml
scaleExternalInterface:
  - ipam:
      type: static
      staticRoutes: []
```

---

##### `scaleExternalInterface[].ipam.staticRoutes.destination`

Define the static destination

|            |                                                        |
| ---------- | ------------------------------------------------------ |
| Key        | `scaleExternalInterface.ipam.staticRoutes.destination` |
| Type       | `string`                                               |
| Required   | ✅                                                     |
| Helm `tpl` | ❌                                                     |
| Default    | `""`                                                   |

Example

```yaml
scaleExternalInterface:
  - ipam:
      type: static
      staticRoutes:
        - destination: ""
```

---

##### `scaleExternalInterface[].ipam.staticRoutes.gateway`

Define the static gateway

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Key        | `scaleExternalInterface.ipam.staticRoutes.gateway` |
| Type       | `string`                                           |
| Required   | ✅                                                 |
| Helm `tpl` | ❌                                                 |
| Default    | `""`                                               |

Example

```yaml
scaleExternalInterface:
  - ipam:
      type: static
      staticRoutes:
        - gateway: ""
```

---

## Full Examples

```yaml
scaleExternalInterface:
  - hostInterface: ""
    ipam:
      type: ""
      staticRoutes: []
      staticIPConfigurations: []
    # targetSelectAll: false
    targetSelector:
      - workload-name
```
