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

## Notes

Every option under `workload.$name.podSpec.containers.$name` is also
available under `workload.$name.podSpec.initContainers.$name`.

Unless otherwise noted.

---

## `enabled`

Define if the container is enabled or not

|            |                                                   |
| ---------- | ------------------------------------------------- |
| Key        | `workload.$name.podSpec.containers.$name.enabled` |
| Type       | `bool`                                         |
| Required   | ✅                                                |
| Helm `tpl` | ✅                                                |
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
| Type       | `bool`                                         |
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
| Type       | `bool`                                       |
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
| Type       | `bool`                                     |
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

See [command](./command.md)

---

## `args`

See [args](./args.md#args)

---

## `extraArgs`

See [extraArgs](./args.md#extraargs)

---

## `termination`

See [termination](./termination.md)

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
      containers:
        container-name:
          enabled: true
          primary: true
          imageSelector: image
          stdin: true
          tty: true
      initContainers:
        init-container-name:
          enabled: true
          type: init
          imageSelector: image
          stdin: true
          tty: true
```
