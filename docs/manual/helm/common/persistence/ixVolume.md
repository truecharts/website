---
title: ixVolume
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.persistence.$name`

:::tip

- See available persistence keys [here](./index.md).
- This options apply only when `type: ixVolume`.
- This is only available under TrueNAS SCALE.

:::

---

## `datasetName`

Define the datasetName

|            |                                        |
| ---------- | -------------------------------------- |
| Key        | `persistence.$name.datasetName`        |
| Type       | `string`                               |
| Required   | `✅`                                   |
| Helm `tpl` | `✅`                                   |
| Default    | `""`                                   |

Example

```yaml
persistence:
  ix-vol:
    datasetName: ix-app
```

---

## `hostPathType`

Define the hostPathType

|            |                                          |
| ---------- | ---------------------------------------- |
| Key        | `persistence.$name.hostPathType`         |
| Type       | `string`                                 |
| Required   | `❌`                                     |
| Helm `tpl` | `✅`                                     |
| Default    | `""`                                     |

Valid Values

- `Directory`
- `DirectoryOrCreate`
- `File`
- `FileOrCreate`
- `""`

Example

```yaml
persistence:
  ix-vol:
    hostPathType: DirectoryOrCreate
```

---

## Full Examples

```yaml
persistence:
  ix-vol:
    enabled: true
    type: ixVolume
    datasetName: ix-app
    hostPathType: DirectoryOrCreate
```
