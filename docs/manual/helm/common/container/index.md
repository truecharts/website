---
title: Containers / Init Containers
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.workload.$name.podSpec.containers.$name`
- `.Values.workload.$name.podSpec.initContainers.$name`

:::tip

Replace references to `$name` with the actual name you want to use.

:::

---

## `enabled`

Define if the container is enabled or not

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.enabled` |
| Type       | `boolean`                                         |
| Required   | ✅                                                |
| Helm `tpl` | ❌                                                |
| Default    | `false`                                           |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          enabled: true
```

---

## `type`

Define the type of container

:::note

- Only applies to `initContainers`
- Init containers for each type are executed in an alphabetical order based on their name.

:::

|            |                                                    |
| ---------- | -------------------------------------------------- |
| Key        | `workload.$name.podSpec.initContainers.$name.type` |
| Type       | `string`                                           |
| Required   | ✅                                                 |
| Helm `tpl` | ✅                                                 |
| Default    | `init`                                             |

Valid Values:

- `init` (Runs before the containers is started.)
- `install` (Runs before the containers is started and only on install.)
- `upgrade` (Runs before the containers is started and only on upgrade.)

Example

```yaml
workload:
  workload-name:
    podSpec:
      initContainers:
        container-name:
          type: init
```

---

## `imageSelector`

Define the image `map` to use

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.imageSelector` |
| Type       | `string`                                                |
| Required   | ✅                                                      |
| Helm `tpl` | ✅                                                      |
| Default    | `image`                                                 |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          imageSelector: image
```

---

## `primary`

Define if the container is primary or not

:::note

Does **not** apply to `initContainers`

:::

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.primary` |
| Type       | `boolean`                                         |
| Required   | ✅                                                |
| Helm `tpl` | ❌                                                |
| Default    | `false`                                           |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          primary: true
```

---

## `stdin`

Define if the container should have stdin enabled or not

|            |                                                 |
| ---------- | ----------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.stdin` |
| Type       | `boolean`                                       |
| Required   | ❌                                              |
| Helm `tpl` | ❌                                              |
| Default    | `false`                                         |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          stdin: true
```

---

## `tty`

Define if the container should have tty enabled or not

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.tty` |
| Type       | `boolean`                                     |
| Required   | ❌                                            |
| Helm `tpl` | ❌                                            |
| Default    | `false`                                       |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          tty: true
```

---

## `command`

Define command(s). If it's single, can be defined as string

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.command` |
| Type       | `string` or `list` of `string`                    |
| Required   | ❌                                                |
| Helm `tpl` | ✅                                                |
| Default    | `[]`                                              |

---

## `args`

Define arg(s). If it's single, can be defined as string

|            |                                                |
| ---------- | ---------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.args` |
| Type       | `string` or `list` of `string`                 |
| Required   | ❌                                             |
| Helm `tpl` | ✅                                             |
| Default    | `[]`                                           |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          args:
            - arg1
            - arg2
# Or
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          args: arg
```

---

## `extraArgs`

Define extraArg(s).

:::note

Those are appended **after** the `args`.
Useful for adding args after the ones defined by the chart.

:::

|            |                                                     |
| ---------- | --------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.extraArgs` |
| Type       | `string` or `list` of `string`                      |
| Required   | ❌                                                  |
| Helm `tpl` | ✅                                                  |
| Default    | `[]`                                                |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          extraArgs:
            - extraArg1
            - extraArg2
# Or
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          extraArgs: extraArg
```

---

## `termination`

|            |                                                       |
| ---------- | ----------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.termination` |
| Type       | `map`                                                 |
| Required   | ❌                                                    |
| Helm `tpl` | ❌                                                    |
| Default    | `{}`                                                  |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          termination: {}
```

---

## `termination.messagePath`

|            |                                                                   |
| ---------- | ----------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.termination.messagePath` |
| Type       | `string`                                                          |
| Required   | ❌                                                                |
| Helm `tpl` | ✅                                                                |
| Default    | `""`                                                              |

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          termination:
            messagePath: /dev/termination-log
```

---

## `termination.messagePolicy`

|            |                                                                     |
| ---------- | ------------------------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.termination.messagePolicy` |
| Type       | `string`                                                            |
| Required   | ❌                                                                  |
| Helm `tpl` | ✅                                                                  |
| Default    | `""`                                                                |

Valid Values:

- `File`
- `FallbackToLogsOnError`

Example

```yaml
workload:
  workload-name:
    podSpec:
      containers:
        container-name:
          termination:
            messagePolicy: File
```

---

## `lifecycle`

:::note

Does **not** apply to `initContainers`

:::

See [lifecycle](./lifecycle.md)

---

## `probes`

:::note

Does **not** apply to `initContainers`

:::

See [probes](./probes.md)

---

## `resources`

See [resources](./resources.md)

---

## `securityContext`

See [securityContext](./securityContext.md)

---

## `envFrom`

See [envFrom](./envFrom.md)

---

## `fixedEnv`

See [fixedEnv](./fixedEnv.md)

---

## `env`

See [env](./env.md)

---

## `envList`

See [envList](./envList.md)

---

## Full Examples

```yaml
workload:
  workload-name:
    enabled: true
    primary: true
    podSpec:
      containers: # or initContainers
        container-name:
          enabled: true
          primary: true
          imageSelector: image
          stdin: true
          tty: true
          args:
            - arg1
            - arg2
          command:
            - command1
            - command2
          termination:
            messagePath: /dev/termination-log
            messagePolicy: File
```
