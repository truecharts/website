---
title: Configmap
---

:::tip

Prefix all keys below with `persistence.$name.`

See available persistence keys [here](./index.md).

:::

Appears in:

- `.Values.persistence.$name`

---

## `objectName`

Define the configmap name.

|          |              |
| -------- | ------------ |
| Key      | `objectName` |
| Type     | `string`     |
| Required | ✅           |
| tpl      | ✅           |
| Default  | `""`         |

Example

```yaml
objectName: configmap-name
```

---

## `expandObjectName`

Whether to expand (adding the fullname as prefix) the configmap name.

|          |                    |
| -------- | ------------------ |
| Key      | `expandObjectName` |
| Type     | `boolean`          |
| Required | ❌                 |
| tpl      | ❌                 |
| Default  | `true`             |

Example

```yaml
expandObjectName: false
```

---

## `optional`

Whether the configmap should be required or not.

|          |            |
| -------- | ---------- |
| Key      | `optional` |
| Type     | `boolean`  |
| Required | ❌         |
| tpl      | ❌         |
| Default  | `false`    |

Example

```yaml
optional: false
```

---

## `defaultMode`

Define the defaultMode (must be a string in format of "0777").

|          |               |
| -------- | ------------- |
| Key      | `defaultMode` |
| Type     | `string`      |
| Required | ✅            |
| tpl      | ✅            |
| Default  | `""`          |

Example

```yaml
defaultMode: "0777"
```

---

## `items`

Define a list of items for configmap.

|          |         |
| -------- | ------- |
| Key      | `items` |
| Type     | `list`  |
| Required | ❌      |
| tpl      | ❌      |
| Default  | `[]`    |

Example

```yaml
items:
  - key: key1
    path: path1
  - key: key2
    path: path2
```

---

### `items.key`

Define the key of the configmap.

|          |          |
| -------- | -------- |
| Key      | `key`    |
| Type     | `string` |
| Required | ✅       |
| tpl      | ✅       |
| Default  | `""`     |

Example

```yaml
key: key1
```

---

### `items.path`

Define the path.

|          |          |
| -------- | -------- |
| Key      | `path`   |
| Type     | `string` |
| Required | ✅       |
| tpl      | ✅       |
| Default  | `""`     |

Example

```yaml
path: path1
```

---

## Full Examples

```yaml
persistence:
  configmap-vol:
    enabled: true
    type: configmap
    objectName: configmap-name
    expandObjectName: false
    optional: false
    defaultMode: "0777"
    items:
      - key: key1
        path: path1
      - key: key2
        path: path2
```
