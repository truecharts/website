---
title: Configmap
---

## Naming scheme

- `$FullName-$ConfigmapName` (release-name-chart-name-configmap-name)

## Keys

Appears in:

- `.Values.configmap`

---

### configmap

Create ConfigMaps

- Key: `configmap`
- Type: `dict`
- Required: `❌`
- tpl: `❌`
- Default: `{}`

---

### configmap.$ConfigmapName

Define ConfigMap

- Key: `configmap.$ConfigmapName`
- Type: `dict`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### configmap.$ConfigmapName.enabled

Enables or Disables the ConfigMap

- Key: `configmap.$ConfigmapName.enabled`
- Type: `boolean`
- Required: `✅`
- tpl: `❌`
- Default: `false`
- Values: `true` or `false`

---

### configmap.$ConfigmapName.namespace

Define the namespace for this object

- Key: `configmap.$ConfigmapName.namespace`
- Type: `string`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `""`

---

### configmap.$ConfigmapName.labels

Additional labels for ConfigMap

- Key: `configmap.$ConfigmapName.labels`
- Type: `dict`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`

---

### configmap.$ConfigmapName.annotations

Additional annotations for ConfigMap

- Key: `configmap.$ConfigmapName.annotations`
- Type: `dict`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`

---

### configmap.$ConfigmapName.data

Define the data of the ConfigMap

- Key: `configmap.$ConfigmapName.data`
- Type: `dict`
- Required: `✅`
- tpl: `✅`
- Default: `{}`

---

Examples:

```yaml
configmap:

  configmap-name:
    enabled: true
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    data:
      key: value

  other-configmap-name:
    enabled: true
    namespace: some-namespace
    data:
      key: |
        multi line
        text value
```
