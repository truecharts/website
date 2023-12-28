---
title: Persistence
---

:::tip

Replace references to `$name`, `$podName`, `$containerName` with the actual name you want to use.

:::

Appears in:

- `.Values.persistence`

## Naming scheme

- `$FullName-$PersistenceName` (release-name-chart-name-PersistenceName)

---

## Target Selector

- `targetSelectAll` (bool): Whether to define the volume to all pods and mount it on all containers. `targetSelector` is ignored in this case. Useful for shared volumes.
- `targetSelector` (map): Define the pod(s) and container(s) to define the volume and mount it.
- `targetSelector` (empty): Define the volume to the primary pod and mount it on the primary container

## `persistence`

Define persistence objects

|          |               |
| -------- | ------------- |
| Key      | `persistence` |
| Type     | `map`         |
| Required | `❌`          |
| tpl      | `❌`          |
| Default  | `{}`          |

---

### `persistence.$name`

Define persistence

|          |                     |
| -------- | ------------------- |
| Key      | `persistence.$name` |
| Type     | `map`               |
| Required | `✅`                |
| tpl      | `❌`                |
| Default  | `{}`                |

---

#### `persistence.$name.enabled`

Enables or Disables the persistence

|          |                             |
| -------- | --------------------------- |
| Key      | `persistence.$name.enabled` |
| Type     | `bool`                      |
| Required | `✅`                        |
| tpl      | `❌`                        |
| Default  | `false`                     |

Example

```yaml
enabled: true
```

---

#### `persistence.$name.type`

Define the persistence type

|          |                                                  |
| -------- | ------------------------------------------------ |
| Key      | `persistence.$name.type`                         |
| Type     | `string`                                         |
| Required | `❌`                                             |
| tpl      | `❌`                                             |
| Default  | `{{ .Values.fallbackDefaults.persistenceType }}` |

Valid Values:

- [`hostPath`](hostPath.md)
- [`configmap`](configmap.md)
- [`secret`](secret.md)
- [`device`](device.md)
- [`pvc`](pvc.md)
- [`vct`](vct.md)
- [`nfs`](nfs.md)
- [`emptyDir`](emptyDir.md)
- [`ixVolume`](ixVolume.md)
- [`iscsi`](iscsi.md)

Example

```yaml
type: pvc
```

---

#### `persistence.$name.mountPath`

Define the mountPath for the persistence, applies to all containers that are selected

|          |                               |
| -------- | ----------------------------- |
| Key      | `persistence.$name.mountPath` |
| Type     | `string`                      |
| Required | `❌`                          |
| tpl      | `❌`                          |
| Default  | `""`                          |

Example

```yaml
mountPath: /path
```

---

#### `persistence.$name.mountPropagation`

Define the mountPropagation for the persistence, applies to all containers that are selected

|          |                                      |
| -------- | ------------------------------------ |
| Key      | `persistence.$name.mountPropagation` |
| Type     | `string`                             |
| Required | `❌`                                 |
| tpl      | `❌`                                 |
| Default  | `""`                                 |

Valid Values:

- `None`
- `HostToContainer`
- `Bidirectional`

Example

```yaml
mountPropagation: HostToContainer
```

---

#### `persistence.$name.subPath`

Define the subPath for the persistence, applies to all containers that are selected

|          |                             |
| -------- | --------------------------- |
| Key      | `persistence.$name.subPath` |
| Type     | `string`                    |
| Required | `❌`                        |
| tpl      | `❌`                        |
| Default  | `""`                        |

Example

```yaml
subPath: some-path
```

---

#### `persistence.$name.readOnly`

Define the readOnly for the persistence, applies to all containers that are selected

|          |                              |
| -------- | ---------------------------- |
| Key      | `persistence.$name.readOnly` |
| Type     | `bool`                       |
| Required | `❌`                         |
| tpl      | `❌`                         |
| Default  | `false`                      |

Example

```yaml
readOnly: true
```

---

#### `persistence.$name.targetSelectAll`

Define wether to define this volume to all workloads and mount it on all containers

|          |                                                             |
| -------- | ----------------------------------------------------------- |
| Key      | `persistence.$name.targetSelectAll`                         |
| Type     | `bool`                                                      |
| Required | `❌`                                                        |
| tpl      | `❌`                                                        |
| Default  | `{{ .Values.fallbackDefaults.persistenceTargetSelectAll }}` |

Example

```yaml
targetSelectAll: true
```

---

#### `persistence.$name.targetSelector`

Define a map with pod and containers to mount

|          |                                    |
| -------- | ---------------------------------- |
| Key      | `persistence.$name.targetSelector` |
| Type     | `map`                              |
| Required | `❌`                               |
| tpl      | `❌`                               |
| Default  | `{}`                               |

Example

```yaml
targetSelector: {}
```

---

#### `persistence.$name.targetSelector.$podName`

Define a map named after the pod to define the volume

|          |                                             |
| -------- | ------------------------------------------- |
| Key      | `persistence.$name.targetSelector.$podName` |
| Type     | `map`                                       |
| Required | `❌`                                        |
| tpl      | `❌`                                        |
| Default  | `{}`                                        |

Example

```yaml
targetSelector:
  my-pod: {}
```

---

#### `persistence.$name.targetSelector.$podName.$containerName`

Define a map named after the container to mount the volume

|          |                                                            |
| -------- | ---------------------------------------------------------- |
| Key      | `persistence.$name.targetSelector.$podName.$containerName` |
| Type     | `map`                                                      |
| Required | `❌`                                                       |
| tpl      | `❌`                                                       |
| Default  | `{}`                                                       |

Example

```yaml
targetSelector:
  my-pod:
    my-container: {}
```

---

##### `persistence.$name.targetSelector.$podName.$containerName.mountPath`

Define the mountPath for the container

|          |                                                                      |
| -------- | -------------------------------------------------------------------- |
| Key      | `persistence.$name.targetSelector.$podName.$containerName.mountPath` |
| Type     | `string`                                                             |
| Required | `❌`                                                                 |
| tpl      | `❌`                                                                 |
| Default  | `$name.mountPath`                                                    |

Example

```yaml
targetSelector:
  my-pod:
    my-container:
      mountPath: /path
```

---

##### `persistence.$name.targetSelector.$podName.$containerName.mountPropagation`

Define the mountPropagation for the container

|          |                                                                             |
| -------- | --------------------------------------------------------------------------- |
| Key      | `persistence.$name.targetSelector.$podName.$containerName.mountPropagation` |
| Type     | `string`                                                                    |
| Required | `❌`                                                                        |
| tpl      | `❌`                                                                        |
| Default  | `$name.mountPropagation`                                                    |

Example

```yaml
targetSelector:
  my-pod:
    my-container:
      mountPropagation: HostToContainer
```

---

##### `persistence.$name.targetSelector.$podName.$containerName.subPath`

Define the subPath for the container

|          |                                                                    |
| -------- | ------------------------------------------------------------------ |
| Key      | `persistence.$name.targetSelector.$podName.$containerName.subPath` |
| Type     | `string`                                                           |
| Required | `❌`                                                               |
| tpl      | `❌`                                                               |
| Default  | `$name.subPath`                                                    |

Example

```yaml
targetSelector:
  my-pod:
    my-container:
      subPath: some-path
```

---

##### `persistence.$name.targetSelector.$podName.$containerName.readOnly`

Define the readOnly for the container

|          |                                                                     |
| -------- | ------------------------------------------------------------------- |
| Key      | `persistence.$name.targetSelector.$podName.$containerName.readOnly` |
| Type     | `bool`                                                              |
| Required | `❌`                                                                |
| tpl      | `❌`                                                                |
| Default  | `$name.readOnly`                                                    |

Example

```yaml
targetSelector:
  my-pod:
    my-container:
      readOnly: true
```

---

## Full Examples

Full examples can be found under each persistence type

- [hostPath](hostPath.md)
- [configmap](configmap.md)
- [secret](secret.md)
- [device](device.md)
- [pvc](pvc.md)
- [vct](vct.md)
- [nfs](nfs.md)
- [emptyDir](emptyDir.md)
- [ixVolume](ixVolume.md)
- [iscsi](iscsi.md)

---

## Basic Examples

```yaml
# Example of a shared emptyDir volume
persistence:
  shared:
    enabled: true
    type: emptyDir
    mountPath: /shared
    readOnly: false
    targetSelectAll: true
```

```yaml
# Example of a volume mounted to a specific container with a specific mountPath
persistence:
  config:
    enabled: true
    type: emptyDir
    targetSelector:
      my-pod:
        my-container: {}
          mountPath: /path
          readOnly: false
        my-other-container: {}
          mountPath: /other/path
          readOnly: false
```

```yaml
# Example of a volume mounted to a specific container using the default mountPath
persistence:
  config:
    enabled: true
    type: emptyDir
    mountPath: /path
    readOnly: true
    targetSelector:
      my-pod:
        my-container: {}
        my-other-container:
          mountPath: /other/path
          readOnly: false
```
