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

### `resources.requests."gpu.intel.com/i915"`

See [Resources Requests GPU](./container/resources.md#resourceslimitsintelcomi915)

Default: `not set`

---

#### `resources.limits."nvidia.com/gpu"`

See [Resources Limits GPU](./container/resources.md#resourceslimitsnvidiacomgpu)

Default: `not set`

---

#### `resources.limits."amd.com/gpu"`

See [Resources Limits GPU](./container/resources.md#resourceslimitsamdcomgpu)

Default: `not set`

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
