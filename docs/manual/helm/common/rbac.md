---
title: RBAC
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

Appears in:

- `.Values.rbac`

## Naming scheme

- Primary: `$FullName` (release-name-chart-name)
- Non-Primary: `$FullName-$RBACName` (release-name-chart-name-RBACName)

---

## Target Selector

- `allServiceAccounts` (boolean): Whether to assign all service accounts or not to the (Cluster)RoleBinding
- `serviceAccounts` (list): Define the service account(s) to assign the (Cluster)RoleBinding
- `serviceAccounts` (empty): Assign the primary service account to the primary rbac

---

## `rbac`

Create rbac objects

|          |        |
| -------- | ------ |
| Key      | `rbac` |
| Type     | `map`  |
| Required | `❌`   |
| tpl      | `❌`   |
| Default  | `{}`   |

---

### `rbac.$name`

Define rbac

|          |              |
| -------- | ------------ |
| Key      | `rbac.$name` |
| Type     | `map`        |
| Required | `✅`         |
| tpl      | `❌`         |
| Default  | `{}`         |

---

#### `rbac.$name.enabled`

Enables or Disables the rbac

|          |                      |
| -------- | -------------------- |
| Key      | `rbac.$name.enabled` |
| Type     | `bool`               |
| Required | `✅`                 |
| tpl      | `❌`                 |
| Default  | `false`              |

Example

```yaml
enabled: true
```

---

#### `rbac.$name.primary`

Sets the rbac as primary

|          |                      |
| -------- | -------------------- |
| Key      | `rbac.$name.primary` |
| Type     | `bool`               |
| Required | `❌`                 |
| tpl      | `❌`                 |
| Default  | `false`              |

Example

```yaml
primary: true
```

---

#### `rbac.$name.namespace`

Define the namespace for this object (Only when clusterWide is false)

|          |                        |
| -------- | ---------------------- |
| Key      | `rbac.$name.namespace` |
| Type     | `string`               |
| Required | `❌`                   |
| tpl      | `✅`                   |
| Default  | `""`                   |

Example

```yaml
namespace: some-namespace
```

---

#### `rbac.$name.clusterWide`

Sets the rbac as cluster wide (ClusterRole, ClusterRoleBinding)

|          |                          |
| -------- | ------------------------ |
| Key      | `rbac.$name.clusterWide` |
| Type     | `bool`                   |
| Required | `❌`                     |
| tpl      | `❌`                     |
| Default  | `false`                  |

Example

```yaml
clusterWide: true
```

---

#### `rbac.$name.labels`

Additional labels for rbac

|          |                      |
| -------- | -------------------- |
| Key      | `rbac.$name.labels`  |
| Type     | `map`                |
| Required | `❌`                 |
| tpl      | `✅ (On value only)` |
| Default  | `{}`                 |

Example

```yaml
labels:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `rbac.$name.annotations`

Additional annotations for rbac

|          |                          |
| -------- | ------------------------ |
| Key      | `rbac.$name.annotations` |
| Type     | `map`                    |
| Required | `❌`                     |
| tpl      | `✅ (On value only)`     |
| Default  | `{}`                     |

Example

```yaml
annotations:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `rbac.$name.allServiceAccounts`

Whether to assign all service accounts or not to the (Cluster)RoleBinding

|          |                                 |
| -------- | ------------------------------- |
| Key      | `rbac.$name.allServiceAccounts` |
| Type     | `bool`                          |
| Required | `❌`                            |
| tpl      | `❌`                            |
| Default  | unset                           |

Example

```yaml
allServiceAccounts: true
```

---

#### `rbac.$name.serviceAccounts`

Define the service account(s) to assign the (Cluster)RoleBinding

|          |                              |
| -------- | ---------------------------- |
| Key      | `rbac.$name.serviceAccounts` |
| Type     | `list`                       |
| Required | `❌`                         |
| tpl      | `❌`                         |
| Default  | `[]`                         |

Example

```yaml
serviceAccounts:
  - service-account-name
```

---

#### `rbac.$name.rules`

Define the `rules` for the (Cluster)Role

|          |                    |
| -------- | ------------------ |
| Key      | `rbac.$name.rules` |
| Type     | `list`             |
| Required | `✅`               |
| tpl      | `❌`               |
| Default  | `[]`               |

---

##### `rbac.$name.rules[].apiGroups`

Define the `apiGroups` list for the `rules` for the (Cluster)Role

|          |                                |
| -------- | ------------------------------ |
| Key      | `rbac.$name.rules[].apiGroups` |
| Type     | `list` of `string`             |
| Required | `✅`                           |
| tpl      | `❌`                           |
| Default  | `[]`                           |

Example

```yaml
apiGroups:
  - ""
  - extensions
```

---

##### `rbac.$name.rules[].resources`

Define the `resources` list for the `rules` for the (Cluster)Role

|          |                                |
| -------- | ------------------------------ |
| Key      | `rbac.$name.rules[].resources` |
| Type     | `list` of `string`             |
| Required | `✅`                           |
| tpl      | `❌`                           |
| Default  | `[]`                           |

Example

```yaml
resources:
  - pods
```

---

##### `rbac.$name.rules[].resourceNames`

Define the `resourceNames` list for the `rules` for the (Cluster)Role

|          |                                    |
| -------- | ---------------------------------- |
| Key      | `rbac.$name.rules[].resourceNames` |
| Type     | `list` of `string`                 |
| Required | `❌`                               |
| tpl      | `❌`                               |
| Default  | `[]`                               |

Example

```yaml
resourceNames:
  - my-pod
```

---

##### `rbac.$name.rules[].verbs`

Define the `verbs` list for the `rules` for the (Cluster)Role

|          |                            |
| -------- | -------------------------- |
| Key      | `rbac.$name.rules[].verbs` |
| Type     | `list` of `string`         |
| Required | `✅`                       |
| tpl      | `❌`                       |
| Default  | `[]`                       |

Example

```yaml
verbs:
  - get
  - list
  - watch
```

---

#### `rbac.$name.subjects`

Define `subjects` for (Cluster)RoleBinding

|          |                       |
| -------- | --------------------- |
| Key      | `rbac.$name.subjects` |
| Type     | `list` of `map`       |
| Required | `❌`                  |
| tpl      | `❌`                  |
| Default  | `[]`                  |

Example

```yaml
subjects:
  - kind: my-kind
    name: my-name
    apiGroup: my-api-group
```

---

##### `rbac.$name.subjects[].kind`

Define the `kind` of `subjects` entry

|          |                              |
| -------- | ---------------------------- |
| Key      | `rbac.$name.subjects[].kind` |
| Type     | `string`                     |
| Required | `✅`                         |
| tpl      | `✅`                         |
| Default  | `""`                         |

Example

```yaml
kind: my-kind
```

---

##### `rbac.$name.subjects[].name`

Define the `name` of `subjects` entry

|          |                              |
| -------- | ---------------------------- |
| Key      | `rbac.$name.subjects[].name` |
| Type     | `string`                     |
| Required | `✅`                         |
| tpl      | `✅`                         |
| Default  | `""`                         |

Example

```yaml
name: my-name
```

---

##### `rbac.$name.subjects[].apiGroup`

Define the `apiGroup` of `subjects` entry

|          |                                  |
| -------- | -------------------------------- |
| Key      | `rbac.$name.subjects[].apiGroup` |
| Type     | `string`                         |
| Required | `✅`                             |
| tpl      | `✅`                             |
| Default  | `""`                             |

Example

```yaml
apiGroup: my-api-group
```

---

Full Examples

```yaml
rbac:
  rbac-name:
    enabled: true
    primary: true
    clusterWide: true
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    allServiceAccounts: true
    rules:
      - apiGroups:
          - ""
        resources:
          - "{{ .Values.some.value }}"
        resourceNames:
          - "{{ .Values.some.value }}"
        verbs:
          - get
          - "{{ .Values.some.value }}"
          - watch
    subjects:
      - kind: my-kind
        name: "{{ .Values.some.value }}"
        apiGroup: my-api-group

  other-rbac-name:
    enabled: true
    namespace: some-namespace
    serviceAccounts:
      - service-account-name
    rules:
      - apiGroups:
          - ""
        resources:
          - pods
        verbs:
          - get
          - list
          - watch
    subjects:
      - kind: my-kind
        name: my-name
        apiGroup: my-api-group
```
