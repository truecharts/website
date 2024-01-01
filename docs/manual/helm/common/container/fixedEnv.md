---
title: FixedEnv
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

:::tip

Variable names will be scanned for duplicates across all
[secrets](../secret.md), [configmaps](../configmap.md),
[env](./env.md), [envList](./envList.md) and [fixedEnv](./fixedEnv.md)
and will throw an error if it finds any.

:::

## Appears in

- `.Values.workload.$name.podSpec.containers.$name`
- `.Values.workload.$name.podSpec.initContainers.$name`

---

## `fixedEnv`

Override fixedEnv for the container

:::note

By default it will set the following environment variables:

- `TZ`: `{{ .Values.TZ }}` (or the value set in the container level under `fixedEnv`)
- `UMASK`: `{{ .Values.securityContext.container.UMASK }}` (or the value set in the container level under `fixedEnv`)
- `UMASK_SET`: `{{ .Values.securityContext.container.UMASK }}` (or the value set in the container level under `fixedEnv`)
- `S6_READ_ONLY_ROOT`: `1` (Only when `readOnlyRootFilesystem` or `runAsNonRoot` is `true`)
- `PUID`, `USER_ID`, `UID`: `{{ .Values.securityContext.container.PUID }}` (or the value set in the container level under `fixedEnv`)
  - Only when `runAsUser` or `runAsGroup` is `0`
- `PGID`, `GROUP_ID`, `GID`: To the `fsGroup` set for the pod (Either the default or the overridden value)
  - Only when `runAsUser` or `runAsGroup` is `0`
- `NVIDIA_DRIVER_CAPABILITIES`: `{{ .Values.containerOptions.NVIDIA_CAPS }}` (or the value set in the container level under `fixedEnv`)
  - Only when `scaleGPU` is assigned to the container

:::

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv` |
| Type       | `map`                                              |
| Required   | ❌                                                 |
| Helm `tpl` | ❌                                                 |
| Default    | `{}`                                               |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv: {}
```

---

### `fixedEnv.TZ`

Override the timezone for the container

|            |                                                       |
| ---------- | ----------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.TZ` |
| Type       | `string`                                              |
| Required   | ❌                                                    |
| Helm `tpl` | ❌                                                    |
| Default    | `{{ .Values.TZ }}`                                    |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            TZ: "America/New_York"
```

---

### `fixedEnv.UMASK`

Override the umask for the container

|            |                                                          |
| ---------- | -------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.UMASK` |
| Type       | `string`                                                 |
| Required   | ❌                                                       |
| Helm `tpl` | ❌                                                       |
| Default    | `{{ .Values.securityContext.container.UMASK }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            UMASK: "003"
```

---

### `fixedEnv.PUID`

Override the PUID for the container

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.PUID` |
| Type       | `string`                                                |
| Required   | ❌                                                      |
| Helm `tpl` | ❌                                                      |
| Default    | `{{ .Values.securityContext.container.PUID }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            PUID: "0"
```

---

### `fixedEnv.NVIDIA_CAPS`

Override the NVIDIA_CAPS for the container

|            |                                                                |
| ---------- | -------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.NVIDIA_CAPS` |
| Type       | `list`                                                         |
| Required   | ❌                                                             |
| Helm `tpl` | ❌                                                             |
| Default    | `{{ .Values.securityContext.container.NVIDIA_CAPS }}`          |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          fixedEnv:
            NVIDIA_CAPS:
              - compute
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
          fixedEnv:
            TZ: "America/New_York"
            NVIDIA_CAPS:
              - compute
            UMASK: "003"
            PUID: "0"
```
