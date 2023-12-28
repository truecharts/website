---
title: Image Pull Secret
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

## Naming scheme

- `$FullName-$ImagePullSecretName` (release-name-chart-name-imagePullSecretName)

---

## Target Selector

- `targetSelectAll` (boolean): Whether to assign the secret to all pods or not. `targetSelector` is ignored in this case
- `targetSelector` (list): Define the pod(s) to assign the secret
- `targetSelector` (empty): Assign the secret to the primary pod

---

## Keys

Appears in:

- `.Values.imagePullSecret`

---

### imagePullSecret

Define image pull secrets

- Key: `imagePullSecret`
- Type: `dict`
- Required: `❌`
- tpl: `❌`
- Default: `{}`

---

### imagePullSecret.$name

Define image pull secret

- Key: `imagePullSecret.$name`
- Type: `dict`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### imagePullSecret.$name.enabled

Enables or Disables the image pull secret

- Key: `imagePullSecret.$name.enabled`
- Type: `boolean`
- Required: `✅`
- tpl: `❌`
- Default: `false`
- Values: `true` or `false`
- Example: `true`

---

### imagePullSecret.$name.namespace

Define the namespace for this object

- Key: `imagePullSecret.$name.namespace`
- Type: `string`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `""`
- Example

```yaml
namespace: `some-namespace`
```

---

### imagePullSecret.$name.labels

Additional labels for image pull secret

- Key: `imagePullSecret.$name.labels`
- Type: `dict`
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

### imagePullSecret.$name.annotations

Additional annotations for image pull secret

- Key: `imagePullSecret.$name.annotations`
- Type: `dict`
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

### imagePullSecret.$name.data

Define the data of the image pull secret

- Key: `imagePullSecret.$name.data`
- Type: `dict`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### imagePullSecret.$name.data.registry

Define the registry of the image pull secret

- Key: `imagePullSecret.$name.data.registry`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `""`
- Example

```yaml
registry: quay.io
```

---

### imagePullSecret.$name.data.username

Define the username of the image pull secret

- Key: `imagePullSecret.$name.data.username`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `""`
- Values: `string`
- Example

```yaml
username: my_user
```

---

### imagePullSecret.$name.data.password

Define the password of the image pull secret

- Key: `imagePullSecret.$name.data.password`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `""`
- Values: `string`
- Example

```yaml
password: my_pass
```

---

### imagePullSecret.$name.data.email

Define the email of the image pull secret

- Key: `imagePullSecret.$name.data.email`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `""`
- Values: `string`
- Example

```yaml
email: my_email@example.com
```

---

### imagePullSecret.$name.targetSelectAll

Whether to assign the secret to all pods or not

- Key: `imagePullSecret.$name.targetSelectAll`
- Type: `boolean`
- Required: `❌`
- tpl: `❌`
- Default: unset
- Values: `true` or `false`
- Example

```yaml
targetSelectAll: true
```

---

### imagePullSecret.$name.targetSelector

Define the pod(s) to assign the secret

- Key: `imagePullSecret.$name.targetSelector`
- Type: `list`
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

## Full Examples

```yaml
imagePullSecret:

  pull-secret-name:
    enabled: true
    namespace: some-namespace
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
      data:
        registry: quay.io
        username: my_user
        password: my_pass
        email: my_mail@example.com
      targetSelectAll: true

  other-pull-secret-name:
    enabled: true
    namespace: some-namespace
      data:
        registry: "{{ .Values.my_registry }}"
        username: "{{ .Values.my_user }}"
        password: "{{ .Values.my_pass }}"
        email: "{{ .Values.my_mail }}"
      targetSelector:
        - workload-name1
        - workload-name2
```
