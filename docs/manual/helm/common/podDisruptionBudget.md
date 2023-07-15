# PodDisruptionBudget

| Key                                                       |       Type        | Required |   Helm Template    | Default | Description                                                                        |
| :-------------------------------------------------------- | :---------------: | :------: | :----------------: | :-----: | :--------------------------------------------------------------------------------- |
| podDisruptionBudget                                       |      `dict`       |    ❌    |         ❌         |  `{}`   | Define the PDBs as dicts                                                           |
| podDisruptionBudget.[pdb-name]                            |      `dict`       |    ✅    |         ❌         |  `{}`   | Holds PDB definition                                                               |
| podDisruptionBudget.[pdb-name].namespace                  |     `string`      |    ❌    |         ✅         |  `""`   | Explicitly define the namespace                                                    |
| podDisruptionBudget.[pdb-name].enabled                    |     `boolean`     |    ✅    |         ❌         | `false` | Enables or Disables the PDB                                                        |
| podDisruptionBudget.[pdb-name].labels                     |      `dict`       |    ❌    | ✅ (On value only) |  `{}`   | Additional labels for PDB                                                          |
| podDisruptionBudget.[pdb-name].annotations                |      `dict`       |    ❌    | ✅ (On value only) |  `{}`   | Additional annotations for PDB                                                     |
| podDisruptionBudget.[pdb-name].minAvailable               | `int` or `string` |    ❌    |         ✅         |  `""`   | Define the minAvailable.                                                           |
| podDisruptionBudget.[pdb-name].maxUnavailable             | `int` or `string` |    ❌    |         ✅         |  `""`   | Define the maxUnavailable.                                                         |
| podDisruptionBudget.[pdb-name].unhealthyPodEvictionPolicy |     `string`      |    ❌    |         ✅         |  `""`   | Define the unhealthyPodEvictionPolicy. Valid values [IfHealthyBudget, AlwaysAllow] |

Notes:

> At least 1 of `minAvailable` or `maxUnavailable` must be set.

---

Appears in:

- `.Values.podDisruptionBudget`

---

Naming scheme:

- `$FullName-$podDisruptionBudgetName` (release-name-chart-name-podDisruptionBudgetName)

---

Examples:

```yaml
podDisruptionBudget:
  pdb-name:
    enabled: true
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    minAvailable: 1
    maxUnavailable: 1
    unhealthyPodEvictionPolicy: IfHealthyBudget

  other-pdb-name:
    enabled: true
    namespace: some-namespace
    minAvailable: 1
```
