---
title: Secret
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

## Naming scheme

- `$FullName-$SecretName` (release-name-chart-name-secret-name)

Appears in:

- `.Values.secret`

---

## `secret`

Create Secret objects

|          |          |
| -------- | -------- |
| Key      | `secret` |
| Type     | `map`    |
| Required | `❌`     |
| tpl      | `❌`     |
| Default  | `{}`     |

---

### `secret.$name`

Define Secret

|          |                |
| -------- | -------------- |
| Key      | `secret.$name` |
| Type     | `map`          |
| Required | `✅`           |
| tpl      | `❌`           |
| Default  | `{}`           |

---

#### `secret.$name.enabled`

Enables or Disables the Secret

|          |                        |
| -------- | ---------------------- |
| Key      | `secret.$name.enabled` |
| Type     | `bool`                 |
| Required | `✅`                   |
| tpl      | `❌`                   |
| Default  | `false`                |

Example

```yaml
enabled: true
```

---

#### `secret.$name.namespace`

Define the namespace for this object

|          |                          |
| -------- | ------------------------ |
| Key      | `secret.$name.namespace` |
| Type     | `string`                 |
| Required | `❌`                     |
| tpl      | `✅`                     |
| Default  | `""`                     |

Example

```yaml
namespace: some-namespace
```

---

#### `secret.$name.labels`

Additional labels for secret

|          |                       |
| -------- | --------------------- |
| Key      | `secret.$name.labels` |
| Type     | `map`                 |
| Required | `❌`                  |
| tpl      | `✅ (On value only)`  |
| Default  | `{}`                  |

Example

```yaml
labels:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `secret.$name.annotations`

Additional annotations for secret

|          |                            |
| -------- | -------------------------- |
| Key      | `secret.$name.annotations` |
| Type     | `map`                      |
| Required | `❌`                       |
| tpl      | `✅ (On value only)`       |
| Default  | `{}`                       |

Example

```yaml
annotations:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `secret.$name.type`

Define the type of the secret

|          |                     |
| -------- | ------------------- |
| Key      | `secret.$name.type` |
| Type     | `string`            |
| Required | `❌`                |
| tpl      | `✅`                |
| Default  | `Opaque`            |

Example

```yaml
type: some-custom-type
```

---

#### `secret.$name.data`

Define the data of the secret

|          |                     |
| -------- | ------------------- |
| Key      | `secret.$name.data` |
| Type     | `map`               |
| Required | `✅`                |
| tpl      | `✅`                |
| Example  |                     |

```yaml
data:
  key: value
```

---

## Full Examples

```yaml
secret:
  secret-name:
    enabled: true
    type: CustomSecretType
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    data:
      key: value

  other-secret-name:
    namespace: some-namespace
    enabled: true
    data:
      key: |
        multi line
        text value
```
