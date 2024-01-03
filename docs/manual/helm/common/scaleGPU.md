---
title: Scale Certificate
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

:::warning

This options are only available through GUI on TrueNAS SCALE

:::

## Appears in

- `.Values.scaleGPU`

---

## Target Selector

- `targetSelector` (map): Assign the GPU to the selected container(s) in the selected pod(s)
- `targetSelector` (empty): Assign the GPU to the primary container of the primary pod

Selected pod's will get the group `44` appended in `supplementalGroups`. This is to allow rootless containers to access the GPU

---

## `scaleGPU`

Create Scale GPU objects

|            |                 |
| ---------- | --------------- |
| Key        | `scaleGPU`      |
| Type       | `list` of `map` |
| Required   | ❌              |
| Helm `tpl` | ❌              |
| Default    | `[]`            |

Example

```yaml
scaleGPU: []
```

---

### `scaleGPU[].gpu`

The key value pair of the GPU to assign

:::tip

The key/value pair is injected by the TrueNAS SCALE UI.

:::

|            |                  |
| ---------- | ---------------- |
| Key        | `scaleGPU[].gpu` |
| Type       | `map`            |
| Required   | ✅               |
| Helm `tpl` | ❌               |
| Default    | `{}`             |

Example

```yaml
scaleGPU:
  - gpu:
      nvidia.com/gpu: "1"
```

---

#### `targetSelector`

Define the pod(s) to assign the GPU

|            |                             |
| ---------- | --------------------------- |
| Key        | `scaleGPU[].targetSelector` |
| Type       | `map`                       |
| Required   | ❌                          |
| Helm `tpl` | ❌                          |
| Default    | `{}`                        |

Example

```yaml
scaleGPU:
  - targetSelector:
      workload-name:
        - container-name
```

---

#### `targetSelector.$name`

Define the container(s) to assign the GPU

|            |                                   |
| ---------- | --------------------------------- |
| Key        | `scaleGPU[].targetSelector.$name` |
| Type       | `list` of `string`                |
| Required   | ❌                                |
| Helm `tpl` | ❌                                |
| Default    | `[]`                              |

Example

```yaml
scaleGPU:
  - targetSelector:
      workload-name:
        - container-name
```

---

## Full Examples

```yaml
scaleGPU:
  - gpu:
      # Injected from SCALE UI/Middleware using $ref
      nvidia.com/gpu: "1"
    targetSelector:
      workload-name:
        - container-name
```
