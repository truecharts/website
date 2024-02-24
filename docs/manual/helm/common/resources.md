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
