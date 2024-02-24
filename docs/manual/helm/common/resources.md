---
title: Resources
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.resources`

## Defaults

```yaml
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
  requests:
    cpu: 10m
    memory: 50Mi
```

---

## `resources.limits`

See [Resources Limits](./container/resources.md#resourceslimits)

Default

```yaml
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
```

---

### `resources.limits.cpu`

See [Resources Limits CPU](./container/resources.md#resourceslimitscpu)

Default

```yaml
resources:
  limits:
    cpu: 4000m
```

---

### `resources.limits.memory`

See [Resources Limits Memory](./container/resources.md#resourceslimitsmemory)

Default

```yaml
resources:
  limits:
    memory: 8Gi
```

---

### `resources.limits.intel.com/i915`

Has a Intel GPU added when available
*Note that "intel.com/i915" is a single dict-name*

Default

```yaml
resources:
  limits:
    intel.com/i915: 1
```

---

### `resources.limits.nvidia.com/gpu`

Has a NVIDIA GPU added when available
*Note that "nvidia.com/gpu" is a single dict-name*

Default

```yaml
resources:
  limits:
    memory: 8Gi
```

---

### `resources.limits.amd.com/gpu`

Has a AMD GPU added when available
*Note that "amd.com/gpu" is a single dict-name*

Default

```yaml
resources:
  limits:
    memory: 8Gi
```


---

## `resources.requests`

See [Resources Requests](./container/resources.md#resourcesrequests)

Default

```yaml
resources:
  requests:
    cpu: 10m
    memory: 50Mi
```

---

### `resources.requests.cpu`

See [Resources Requests CPU](./container/resources.md#resourcesrequestscpu)

Default

```yaml
resources:
  requests:
    cpu: 10m
```

---

### `resources.requests.memory`

See [Resources Requests Memory](./container/resources.md#resourcesrequestsmemory)

Default

```yaml
resources:
  requests:
    memory: 50Mi
```

---

## Full Examples

```yaml
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
  requests:
    cpu: 10m
    memory: 50Mi
```
