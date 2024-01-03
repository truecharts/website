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

- `.Values.scaleCertificate`

## Naming scheme

- `$FullName-$CertName` (release-name-chart-name-cert-name)

:::tip

- Replace references to `$name` with the actual name you want to use.

:::

---

## `scaleCertificate`

Create Scale Certificate objects

|            |                    |
| ---------- | ------------------ |
| Key        | `scaleCertificate` |
| Type       | `map`              |
| Required   | ❌                 |
| Helm `tpl` | ❌                 |
| Default    | `{}`               |

Example

```yaml
scaleCertificate: {}
```

---

### `$name`

Define Scale Certificate

:::note

A secret will be created with 2 keys in the data section: `tls.crt` and `tls.key`.

:::

|            |                          |
| ---------- | ------------------------ |
| Key        | `scaleCertificate.$name` |
| Type       | `map`                    |
| Required   | ✅                       |
| Helm `tpl` | ❌                       |
| Default    | `{}`                     |

Example

```yaml
scaleCertificate:
  cert-name: {}
```

---

#### `enabled`

Enable Scale Certificate

|            |                                  |
| ---------- | -------------------------------- |
| Key        | `scaleCertificate.$name.enabled` |
| Type       | `bool`                           |
| Required   | ✅                               |
| Helm `tpl` | ❌                               |
| Default    | `false`                          |

Example

```yaml
scaleCertificate:
  cert-name:
    enabled: true
```

---

#### `labels`

Define labels for Scale Certificate

|            |                                 |
| ---------- | ------------------------------- |
| Key        | `scaleCertificate.$name.labels` |
| Type       | `map`                           |
| Required   | ❌                              |
| Helm `tpl` | ✅ (On value only)              |
| Default    | `{}`                            |

Example

```yaml
scaleCertificate:
  cert-name:
    labels:
      key: value
```

---

#### `annotations`

Define annotations for Scale Certificate

|            |                                      |
| ---------- | ------------------------------------ |
| Key        | `scaleCertificate.$name.annotations` |
| Type       | `map`                                |
| Required   | ❌                                   |
| Helm `tpl` | ✅ (On value only)                   |
| Default    | `{}`                                 |

Example

```yaml
scaleCertificate:
  cert-name:
    annotations:
      key: value
```

---

#### `id`

Define ID for Scale Certificate

:::tip

ID is a value injected by the TrueNAS SCALE UI.

:::

|            |                             |
| ---------- | --------------------------- |
| Key        | `scaleCertificate.$name.id` |
| Type       | `string`                    |
| Required   | ✅                          |
| Helm `tpl` | ❌                          |
| Default    | `""`                        |

Example

```yaml
scaleCertificate:
  cert-name:
    id: "1"
```

---

## Full Examples

```yaml
scaleCertificate:
  cert-name:
    enabled: false
    labels: {}
    annotations: {}
    id: 1
```

You can mount certificate as a secret using the following snippet:

```yaml
scaleCertificate:
  cert-name:
    enabled: false
    id: 1

persistence:
  # This will mount it on the primary pod/container
  cert-vol:
    enabled: true
    type: secret
    objectName: cert-name
    expandObjectName: true # You can omit this, it's the default
    # subPath
    mountPath: /path/to/mount/cert.crt
    subPath: cert.crt
    # or items
    mountPath: /path/to/mount
    items:
      - key: tls.crt
        path: cert.crt

  # This will mount it on the specific pod/container
  cert-vol:
    enabled: true
    type: secret
    objectName: cert-name
    expandObjectName: true # You can omit this, it's the default
    # subPath
    subPath: tls.crt
    targetSelector:
      workload-name:
        container-name:
          mountPath: /path/to/mount/cert.crt
          # subPath: cert.crt (You can define subPath here as well, per container)
    # or items
    items:
      - key: tls.crt
        path: cert.crt
    targetSelector:
      workload-name:
        container-name:
          mountPath: /path/to/mount

# Both will result in a mounted file in the container at /path/to/mount/cert.crt
```
