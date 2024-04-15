---
title: FixedEnv
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

:::tip

Variable names will be scanned for duplicates across all
[secrets](/general/common/secret), [configmaps](/general/common/configmap),
[env](/general/common/env), [envList](/general/common/envList) and [fixedEnv](/general/common/fixedEnv)
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

- `TZ`: [Default TZ](/general/common/index#tz) or [fixedEnv.TZ](#fixedenvtz)
- `UMASK`: [Default UMASK](/general/common/securityContext#securitycontextcontainerumask) or [fixedEnv.UMASK](#fixedenvumask)
- `UMASK_SET`: [Default UMASK](/general/common/securityContext#securitycontextcontainerumask) or [fixedEnv.UMASK](#fixedenvumask)
- `S6_READ_ONLY_ROOT`: `1`
  - Only when [`readOnlyRootFilesystem`](/general/common/securityContext.md#securitycontextreadonlyrootfilesystem) or [`runAsNonRoot`](/general/common/securityContext#securitycontextrunasnonroot) is `true`
- `PUID`, `USER_ID`, `UID`: [Default PUID](/general/common/securityContext#securitycontextcontainerpuid) or [fixedEnv.PUID](#fixedenvpuid)
  - Only when [`runAsUser`](/general/common/securityContext.md#securitycontextrunasuser) or [`runAsGroup`](/general/common/securityContext#securitycontextcontainerrunasgroup) is `0`
- `PGID`, `GROUP_ID`, `GID`: Same as [`fsGroup`](/general/common/securityContext#securitycontextpodfsgroup)
  - Only when [`runAsUser`](/general/common/securityContext.md#securitycontextrunasuser) or [`runAsGroup`](/general/common/securityContext#securitycontextcontainerrunasgroup) is `0`
- `NVIDIA_DRIVER_CAPABILITIES`: [Default NVIDIA_CAPS](/general/common/containerOptions#nvidia_caps) or [fixedEnv.NVIDIA_CAPS](#fixedenvnvidia_caps)
  - Only when `nvidia.com/gpu` is set to `> 0` under [`resources`](/general/common/container/resources)

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
| Default    | See [here](/general/common/index#tz)                  |

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

|            |                                                                           |
| ---------- | ------------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.UMASK`                  |
| Type       | `string`                                                                  |
| Required   | ❌                                                                        |
| Helm `tpl` | ❌                                                                        |
| Default    | See [here](/general/common/securityContext#securitycontextcontainerumask) |

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

|            |                                                                          |
| ---------- | ------------------------------------------------------------------------ |
| Key        | `workload.$name.podSpec.containers.$name.fixedEnv.PUID`                  |
| Type       | `string`                                                                 |
| Required   | ❌                                                                       |
| Helm `tpl` | ❌                                                                       |
| Default    | See [here](/general/common/securityContext#securitycontextcontainerpuid) |

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
| Default    | See [here](/general/common/containerOptions#nvidia_caps)       |

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
