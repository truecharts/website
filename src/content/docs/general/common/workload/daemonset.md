---
title: DaemonSet
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](/general/common/workload/daemonset#full-examples) section for complete examples.
- See the [Workload](/general/common/workload) documentation for more information

:::

:::tip

Replace references to `$name` with the actual name you want to use.

:::

## Appears in

- `.Values.workload.$name`

## Notes

Value of `workload.$name.podSpec.restartPolicy` can only be `Always` for this type of workload

---

## `revisionHistoryLimit`

Define the number of history revisions

|            |                                       |
| ---------- | ------------------------------------- |
| Key        | `workload.$name.revisionHistoryLimit` |
| Type       | `int`                                 |
| Required   | ❌                                    |
| Helm `tpl` | ❌                                    |
| Default    | `3`                                   |

Example

```yaml
workload:
  workload-name:
    revisionHistoryLimit: 3
```

## `strategy`

Define the strategy of the workload

|            |                           |
| ---------- | ------------------------- |
| Key        | `workload.$name.strategy` |
| Type       | `string`                  |
| Required   | ❌                        |
| Helm `tpl` | ❌                        |
| Default    | `RollingUpdate`           |

Valid Values:

- `RollingUpdate`
- `OnDelete`

Example

```yaml
workload:
  workload-name:
    strategy: RollingUpdate
```

---

## `rollingUpdate`

Define the rollingUpdate options

:::note

Can only be used when `workload.$name.strategy` is `RollingUpdate`

:::

|            |                                |
| ---------- | ------------------------------ |
| Key        | `workload.$name.rollingUpdate` |
| Type       | `map`                          |
| Required   | ❌                             |
| Helm `tpl` | ❌                             |
| Default    | `{}`                           |

Example

```yaml
workload:
  workload-name:
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
```

---

## `rollingUpdate.maxUnavailable`

Define the maxUnavailable

:::note

Can only be used when `workload.$name.strategy` is `RollingUpdate`

:::

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `workload.$name.rollingUpdate.maxUnavailable` |
| Type       | `int`                                         |
| Required   | ❌                                            |
| Helm `tpl` | ❌                                            |
| Default    | unset                                         |

Example

```yaml
workload:
  workload-name:
    rollingUpdate:
      maxUnavailable: 1
```

---

## `rollingUpdate.maxSurge`

Define the maxSurge

:::note

Can only be used when `workload.$name.strategy` is `RollingUpdate`

:::

|            |                                         |
| ---------- | --------------------------------------- |
| Key        | `workload.$name.rollingUpdate.maxSurge` |
| Type       | `int`                                   |
| Required   | ❌                                      |
| Helm `tpl` | ❌                                      |
| Default    | unset                                   |

Example

```yaml
workload:
  workload-name:
    rollingUpdate:
      maxSurge: 1
```

---

## Full Examples

```yaml
workload:
  workload-name:
    enabled: true
    primary: true
    type: DaemonSet
    revisionHistoryLimit: 3
    strategy: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
    podSpec: {}

  other-workload-name:
    enabled: true
    primary: false
    type: DaemonSet
    labels: {}
    annotations: {}
    replicas: 1
    revisionHistoryLimit: 3
    strategy: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1
    podSpec: {}
```
