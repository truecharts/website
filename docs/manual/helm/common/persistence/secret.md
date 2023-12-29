---
title: Secret
---

:::tip

Prefix all keys below with `persistence.$name.`

See available persistence keys [here](./index.md).

:::

Appears in:

- `.Values.persistence.$name`

---

## `objectName`

Define the secret name.

|          |              |
| -------- | ------------ |
| Key      | `objectName` |
| Type     | `string`     |
| Required | ✅           |
| tpl      | ✅           |
| Default  | `""`         |

Example

```yaml
objectName: secret-name
```

---

## `expandObjectName`

Whether to expand (adding the fullname as prefix) the secret name.

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

Whether the secret should be required or not.

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

Define a list of items for secret.

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

Define the key of the secret.

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
  secret-vol:
    enabled: true
    type: secret
    objectName: secret-name
    expandObjectName: false
    optional: false
    defaultMode: "0777"
    items:
      - key: key1
        path: path1
      - key: key2
        path: path2
```
