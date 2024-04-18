---
title: Resources
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](/general/common/resources#full-examples) section for complete examples.

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

See [Resources Limits](/general/common/container/resources#resourceslimits)

Default

```yaml
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
```

---

### `resources.limits.cpu`

See [Resources Limits CPU](/general/common/container/resources#resourceslimitscpu)

Default

```yaml
resources:
  limits:
    cpu: 4000m
```

---

### `resources.limits.memory`

See [Resources Limits Memory](/general/common/container/resources#resourceslimitsmemory)

Default

```yaml
resources:
  limits:
    memory: 8Gi
```

---

### `resources.requests."gpu.intel.com/i915"`

See [Resources Requests GPU](/general/common/container/resources#resourceslimitsgpuintelcomi915)

Default: `not set`

---

#### `resources.limits."nvidia.com/gpu"`

See [Resources Limits GPU](/general/common/container/resources#resourceslimitsnvidiacomgpu)

Default: `not set`

---

#### `resources.limits."amd.com/gpu"`

See [Resources Limits GPU](/general/common/container/resources#resourceslimitsamdcomgpu)

Default: `not set`

---

## `resources.requests`

See [Resources Requests](/general/common/container/resources#resourcesrequests)

Default

```yaml
resources:
  requests:
    cpu: 10m
    memory: 50Mi
```

---

### `resources.requests.cpu`

See [Resources Requests CPU](/general/common/container/resources#resourcesrequestscpu)

Default

```yaml
resources:
  requests:
    cpu: 10m
```

---

### `resources.requests.memory`

See [Resources Requests Memory](/general/common/container/resources#resourcesrequestsmemory)

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
