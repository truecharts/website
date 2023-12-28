---
title: Pod Disruption Budget
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

## Naming scheme

- `$FullName-$podDisruptionBudgetName` (release-name-chart-name-podDisruptionBudgetName)

---

## Keys

Appears in:

- `.Values.podDisruptionBudget`

### Notes

At least 1 of [`minAvailable`, `maxUnavailable`] must be set.

---

### podDisruptionBudget

Create Pod Disruption Budget objects

- Key: `podDisruptionBudget`
- Type: `map`
- Required: `❌`
- tpl: `❌`
- Default: `{}`

---

### podDisruptionBudget.$name

Define Pod Disruption Budget

- Key: `podDisruptionBudget.$name`
- Type: `map`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### podDisruptionBudget.$name.enabled

Enables or Disables the Pod Disruption Budget

- Key: `podDisruptionBudget.$name.enabled`
- Type: `bool`
- Required: `✅`
- tpl: `❌`
- Default: `false`
- Example

```yaml
enabled: true
```

---

### podDisruptionBudget.$name.namespace

Define the namespace for this object

- Key: `podDisruptionBudget.$name.namespace`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
namespace: some-namespace
```

---

### podDisruptionBudget.$name.labels

Additional labels for Pod Disruption Budget

- Key: `podDisruptionBudget.$name.labels`
- Type: `map`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`
- Example

```yaml
labels:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

### podDisruptionBudget.$name.annotations

Additional annotations for Pod Disruption Budget

- Key: `podDisruptionBudget.$name.annotations`
- Type: `map`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`
- Example

```yaml
annotations:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

### podDisruptionBudget.$name.minAvailable

Define the minAvailable.

- Key: `podDisruptionBudget.$name.minAvailable`
- Type: `int` or `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
minAvailable: 1
```

---

### podDisruptionBudget.$name.maxUnavailable

Define the maxUnavailable.

- Key: `podDisruptionBudget.$name.maxUnavailable`
- Type: `int` or `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
maxUnavailable: 1
```

---

### podDisruptionBudget.$name.unhealthyPodEvictionPolicy

Define the unhealthyPodEvictionPolicy

- Key: `podDisruptionBudget.$name.unhealthyPodEvictionPolicy`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Valid Values: `IfHealthyBudget`, `AlwaysAllow`
- Example

```yaml
unhealthyPodEvictionPolicy: IfHealthyBudget
```

---

## Full Examples

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
