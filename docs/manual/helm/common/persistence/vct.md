---
title: VCT
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.persistence.$name`

:::tip

- See available persistence keys [here](./index.md).
- This options apply only when `type: vct`.

:::

## `labels`

Additional labels for persistence

|            |                            |
| ---------- | -------------------------- |
| Key        | `persistence.$name.labels` |
| Type       | `map`                      |
| Required   | ❌                         |
| Helm `tpl` | ✅ (On value only)         |
| Default    | `{}`                       |

Example

```yaml
persistence:
  vct-vol:
    labels:
      label1: value1
```

---

## `annotations`

Additional annotations for persistence

|            |                                 |
| ---------- | ------------------------------- |
| Key        | `persistence.$name.annotations` |
| Type       | `map`                           |
| Required   | ❌                              |
| Helm `tpl` | ✅ (On value only)              |
| Default    | `{}`                            |

Example

```yaml
persistence:
  vct-vol:
    annotations:
      annotation1: value1
```

---

## `namespace`

Define the namespace for this object

|            |                               |
| ---------- | ----------------------------- |
| Key        | `persistence.$name.namespace` |
| Type       | `string`                      |
| Required   | ❌                            |
| Helm `tpl` | ✅                            |
| Default    | `""`                          |

Example

```yaml
persistence:
  vct-vol:
    namespace: some-namespace
```

---

## `retain`

Define wether the to add helm annotation to retain resource on uninstall.
This does not **guarantee** that the resource will be retained.

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `persistence.$name.retain`                        |
| Type       | `boolean`                                         |
| Required   | ❌                                                |
| Helm `tpl` | ❌                                                |
| Default    | `{{ .Values.global.fallbackDefaults.pvcRetain }}` |

Example

```yaml
persistence:
  vct-vol:
    retain: true
```

---

## `accessModes`

Define the accessModes of the PVC, if it's single can be defined as a string, multiple as a list

|            |                                                        |
| ---------- | ------------------------------------------------------ |
| Key        | `persistence.$name.accessModes`                        |
| Type       | `string` or `list`                                     |
| Required   | ❌                                                     |
| Helm `tpl` | ✅                                                     |
| Default    | `{{ .Values.global.fallbackDefaults.pvcAccessModes }}` |

Example

```yaml
persistence:
  vct-vol:
    accessModes: ReadWriteOnce

persistence:
  vct-vol:
    accessModes:
      - ReadWriteOnce
      - ReadWriteMany
```

---

## `volumeName`

Define the volumeName of a PV, backing the claim

|            |                                |
| ---------- | ------------------------------ |
| Key        | `persistence.$name.volumeName` |
| Type       | `string`                       |
| Required   | ❌                             |
| Helm `tpl` | ✅                             |
| Default    | `""`                           |

Example

```yaml
persistence:
  vct-vol:
    volumeName: volume-name-backing-the-pvc
```

---

## `existingClaim`

Define an existing claim to use

|            |                                   |
| ---------- | --------------------------------- |
| Key        | `persistence.$name.existingClaim` |
| Type       | `string`                          |
| Required   | ❌                                |
| Helm `tpl` | ✅                                |
| Default    | `""`                              |

Example

```yaml
persistence:
  vct-vol:
    existingClaim: existing-claim-name
```

---

## `size`

Define the size of the PVC

|            |                                                 |
| ---------- | ----------------------------------------------- |
| Key        | `persistence.$name.size`                        |
| Type       | `string`                                        |
| Required   | ❌                                              |
| Helm `tpl` | ✅                                              |
| Default    | `{{ .Values.global.fallbackDefaults.vctSize }}` |

Example

```yaml
persistence:
  vct-vol:
    size: 2Gi
```

---

## `storageClass`

Define the storageClass to use

:::note How storageClass is resolved

- If storageClass is defined on the `persistence`
  - `-` **->** `""`, (which means requesting a PV without class)
  - `SCALE-ZFS` **->** `{{ .Values.global.ixChartContext.storageClassName }}`
  - Else **->** as is
- Else if **ixChartContext (TrueNAS SCALE)**, **->** `{{ .Values.global.ixChartContext.storageClassName }}`.
- Else if `{{ .Values.fallbackDefaults.storageClass }}`, **->** this
- Else **->** _nothing_ (which means requesting a PV without class)

:::

|            |                                  |
| ---------- | -------------------------------- |
| Key        | `persistence.$name.storageClass` |
| Type       | `string`                         |
| Required   | ❌                               |
| Helm `tpl` | ✅                               |
| Default    | `""`                             |

Example

```yaml
persistence:
  vct-vol:
    storageClass: storage-class-name
```

## `volumeSnapshots`

Define volumeSnapshots for the pvc

|            |                                     |
| ---------- | ----------------------------------- |
| Key        | `persistence.$name.volumeSnapshots` |
| Type       | `list` of `map`                     |
| Required   | ❌                                  |
| Helm `tpl` | ❌                                  |
| Default    | `[]`                                |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots: []
```

### `volumeSnapshots[].name`

Define the name of the volumeSnapshot

|            |                                            |
| ---------- | ------------------------------------------ |
| Key        | `persistence.$name.volumeSnapshots[].name` |
| Type       | `string`                                   |
| Required   | ❌                                         |
| Helm `tpl` | ❌                                         |
| Default    | `""`                                       |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots:
      - name: example1
```

### `volumeSnapshots[].enabled`

Define if the volumeSnapshot is enabled

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `persistence.$name.volumeSnapshots[].enabled` |
| Type       | `boolean`                                     |
| Required   | ❌                                            |
| Helm `tpl` | ❌                                            |
| Default    | `false`                                       |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots:
      - enabled: true
```

### `volumeSnapshots[].labels`

Define the labels of the volumeSnapshot

|            |                                              |
| ---------- | -------------------------------------------- |
| Key        | `persistence.$name.volumeSnapshots[].labels` |
| Type       | `map`                                        |
| Required   | ❌                                           |
| Helm `tpl` | ✅ (On value only)                           |
| Default    | `{}`                                         |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots:
      - labels:
          label1: value1
```

### `volumeSnapshots[].annotations`

Define the annotations of the volumeSnapshot

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `persistence.$name.volumeSnapshots[].annotations` |
| Type       | `map`                                             |
| Required   | ❌                                                |
| Helm `tpl` | ✅ (On value only)                                |
| Default    | `{}`                                              |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots:
      - annotations:
          annotation1: value1
```

### `volumeSnapshots[].volumeSnapshotClassName`

Define the volumeSnapshotClassName of the volumeSnapshot

|            |                                                               |
| ---------- | ------------------------------------------------------------- |
| Key        | `persistence.$name.volumeSnapshots[].volumeSnapshotClassName` |
| Type       | `string`                                                      |
| Required   | ❌                                                            |
| Helm `tpl` | ❌                                                            |
| Default    | `""`                                                          |

Example

```yaml
persistence:
  vct-vol:
    volumeSnapshots:
      - volumeSnapshotClassName: some-name
```

---

## Full Examples

```yaml
persistence:
  vct-vol:
    enabled: true
    type: vct
    namespace: some-namespace
    labels:
      label1: value1
    annotations:
      annotation1: value1
    accessModes: ReadWriteOnce
    volumeName: volume-name-backing-the-pvc
    existingClaim: existing-claim-name
    retain: true
    size: 2Gi
    volumeSnapshots:
      - name: example1
        enabled: true
        labels:
          label1: value1
        annotations:
          annotation1: value1
        volumeSnapshotClassName: some-name
    targetSelector:
      pod-name:
        container-name:
          mountPath: /path/to/mount
```
