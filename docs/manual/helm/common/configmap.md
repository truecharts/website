---
title: Configmap
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

Appears in:

- `.Values.configmap`

## Naming scheme

- `$FullName-$ConfigmapName` (release-name-chart-name-configmap-name)

---

## `configmap`

Create ConfigMap objects

|          |             |
| -------- | ----------- |
| Key      | `configmap` |
| Type     | `map`       |
| Required | `❌`        |
| tpl      | `❌`        |
| Default  | `{}`        |

---

### `configmap.$name`

Define ConfigMap

|          |                   |
| -------- | ----------------- |
| Key      | `configmap.$name` |
| Type     | `map`             |
| Required | `✅`              |
| tpl      | `❌`              |
| Default  | `{}`              |

---

#### `configmap.$name.enabled`

Enables or Disables the ConfigMap

|          |                           |
| -------- | ------------------------- |
| Key      | `configmap.$name.enabled` |
| Type     | `bool`                    |
| Required | `✅`                      |
| tpl      | `❌`                      |
| Default  | `false`                   |

Example

```yaml
enabled: true
```

---

#### `configmap.$name.namespace`

Define the namespace for this object

|          |                             |
| -------- | --------------------------- |
| Key      | `configmap.$name.namespace` |
| Type     | `string`                    |
| Required | `❌`                        |
| tpl      | `✅ (On value only)`        |
| Default  | `""`                        |

Example

```yaml
namespace: some-namespace
```

---

#### `configmap.$name.labels`

Additional labels for ConfigMap

|          |                          |
| -------- | ------------------------ |
| Key      | `configmap.$name.labels` |
| Type     | `map`                    |
| Required | `❌`                     |
| tpl      | `✅ (On value only)`     |
| Default  | `{}`                     |

Example

```yaml
labels:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `configmap.$name.annotations`

Additional annotations for ConfigMap

|          |                               |
| -------- | ----------------------------- |
| Key      | `configmap.$name.annotations` |
| Type     | `map`                         |
| Required | `❌`                          |
| tpl      | `✅ (On value only)`          |
| Default  | `{}`                          |

Example

```yaml
annotations:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `configmap.$name.data`

Define the data of the ConfigMap

|          |                        |
| -------- | ---------------------- |
| Key      | `configmap.$name.data` |
| Type     | `map`                  |
| Required | `✅`                   |
| tpl      | `✅`                   |
| Default  | `{ }`                  |

Example

```yaml
data:
  key: value
```

---

## Full Examples

```yaml
configmap:
  configmap-name:
    enabled: true
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    data:
      key: value

  other-configmap-name:
    enabled: true
    namespace: some-namespace
    data:
      key: |
        multi line
        text value
```
