---
title: Service Account
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

## Naming scheme

- Primary: `$FullName` (release-name-chart-name)
- Non-Primary: `$FullName-$ServiceAccountName` (release-name-chart-name-ServiceAccountName)

---

## Target Selector

- `targetSelectAll` (boolean): Whether to assign the serviceAccount to all pods or not. `targetSelector` is ignored in this case
- `targetSelector` (list): Define the pod(s) to assign the serviceAccount
- `targetSelector` (empty): Assign the serviceAccount to the primary pod

---

## Keys

Appears in:

- `.Values.serviceAccount`

### serviceAccount

Create serviceAccount objects

- Key: `serviceAccount`
- Type: `map`
- Required: `❌`
- tpl: `❌`
- Default: `{}`

---

### serviceAccount.$name

Define serviceAccount

- Key: `serviceAccount.$name`
- Type: `map`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### serviceAccount.$name.enabled

Enables or Disables the serviceAccount

- Key: `serviceAccount.$name.enabled`
- Type: `bool`
- Required: `✅`
- tpl: `❌`
- Default: `false`
- Example

```yaml
enabled: true
```

---

### serviceAccount.$name.primary

Sets the serviceAccount as primary

- Key: `serviceAccount.$name.primary`
- Type: `bool`
- Required: `❌`
- tpl: `❌`
- Default: `false`
- Example

```yaml
primary: true
```

---

### serviceAccount.$name.namespace

Define the namespace for this object

- Key: `serviceAccount.$name.namespace`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
namespace: some-namespace
```

---

### serviceAccount.$name.labels

Additional labels for service account

- Key: `serviceAccount.$name.labels`
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

### serviceAccount.$name.annotations

Additional annotations for service account

- Key: `serviceAccount.$name.annotations`
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

### serviceAccount.$name.targetSelectAll

Whether to assign the serviceAccount to all pods or not

- Key: `serviceAccount.$name.targetSelectAll`
- Type: `bool`
- Required: `❌`
- tpl: `❌`
- Default: unset
- Example

```yaml
targetSelectAll: true
```

---

### serviceAccount.$name.targetSelector

Define the pod(s) to assign the serviceAccount

- Key: `serviceAccount.$name.targetSelector`
- Type: `list` of `string`
- Required: `❌`
- tpl: `❌`
- Default: `[]`
- Example

```yaml
targetSelector:
  - workload-name1
  - workload-name2
```

---

Full Examples

```yaml
serviceAccount:
  sa-name:
    enabled: true
    primary: true
    namespace: some-namespace
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    targetSelectAll: true

  other-sa-name:
    enabled: true
    namespace: some-namespace
    targetSelector:
      - pod-name
      - other-pod-name
```
