---
title: Traefik Integration
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.ingress.$name.integration.traefik`

:::tip

- Replace references to `$name` with the actual name you want to use.

:::

---

## `enabled`

Enables or Disables the cert-manager integration

|            |                                              |
| ---------- | -------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.enabled` |
| Type       | `bool`                                       |
| Required   | ✅                                           |
| Helm `tpl` | ❌                                           |
| Default    | `false`                                      |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        enabled: true
```

---

## `entrypoints`

Define the entrypoints for this traefik integration

|            |                                                  |
| ---------- | ------------------------------------------------ |
| Key        | `ingress.$name.integrations.traefik.entrypoints` |
| Type       | `list`                                           |
| Required   | ❌                                               |
| Helm `tpl` | ❌                                               |
| Default    | `["websecure"]`                                  |

---

## `enableFixedMiddlewares`

Enable or disable the [fixedMiddlewares](../global.md#traefikfixedmiddlewares)

|            |                                                                |
| ---------- | -------------------------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.enableFixedMiddlewares`    |
| Type       | `bool`                                                         |
| Required   | ❌                                                             |
| Helm `tpl` | ❌                                                             |
| Default    | See default [here](../global.md#traefikenablefixedmiddlewares) |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        enableFixedMiddlewares: true
```

---

## `forceTLS`

Force TLS on this ingress

:::note

Adds the `traefik.ingress.kubernetes.io/router.tls` annotation.

It does that both with this set OR when [entrypoints](#entrypoints) include `websecure`

:::

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.forceTLS` |
| Type       | `bool`                                        |
| Required   | ❌                                            |
| Helm `tpl` | ❌                                            |
| Default    | `true`                                        |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        forceTLS: true
```

---

## `allowCors`

Allow CORS on this ingress

:::note

Relaxes some security settings to allow CORS requests.

Specifically, it uses [these middlewares](../global.md#traefikallowcorsmiddlewares)
instead of the [fixedMiddlewares](../global.md#traefikfixedmiddlewares)

:::

|            |                                                |
| ---------- | ---------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.allowCors` |
| Type       | `bool`                                         |
| Required   | ❌                                             |
| Helm `tpl` | ❌                                             |
| Default    | `false`                                        |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        allowCors: true
```

---

## `fixedMiddlewares`

Override the fixed middlewares for this traefik integration

|            |                                                          |
| ---------- | -------------------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.fixedMiddlewares`    |
| Type       | `list` of `map`                                          |
| Required   | ❌                                                       |
| Helm `tpl` | ❌                                                       |
| Default    | See default [here](../global.md#traefikfixedmiddlewares) |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        fixedMiddlewares:
          - name: chain-basic
            namespace: ""
```

---

### `fixedMiddlewares[].name`

The name of the middleware

|            |                                                              |
| ---------- | ------------------------------------------------------------ |
| Key        | `ingress.$name.integrations.traefik.fixedMiddlewares[].name` |
| Type       | `string`                                                     |
| Required   | ❌                                                           |
| Helm `tpl` | ❌                                                           |
| Default    | `""`                                                         |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        fixedMiddlewares:
          - name: chain-basic
            namespace: ""
```

---

### `fixedMiddlewares[].namespace`

The namespace of the middleware

:::tip

If not defined, helm will do a lookup and try to find the namespace of the middleware.
If more than one namespaces are found, it will throw an error.

:::

|            |                                                                   |
| ---------- | ----------------------------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.fixedMiddlewares[].namespace` |
| Type       | `string`                                                          |
| Required   | ❌                                                                |
| Helm `tpl` | ❌                                                                |
| Default    | `""`                                                              |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        fixedMiddlewares:
          - name: chain-basic
            namespace: ""
```

---

## `middlewares`

Override the middlewares for this traefik integration

|            |                                                  |
| ---------- | ------------------------------------------------ |
| Key        | `ingress.$name.integrations.traefik.middlewares` |
| Type       | `list` of `map`                                  |
| Required   | ❌                                               |
| Helm `tpl` | ❌                                               |
| Default    | `[]`                                             |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        middlewares:
          - name: my-middleware
            namespace: ""
```

---

### `middlewares[].name`

The name of the middleware

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| Key        | `ingress.$name.integrations.traefik.middlewares[].name` |
| Type       | `string`                                                |
| Required   | ❌                                                      |
| Helm `tpl` | ❌                                                      |
| Default    | `""`                                                    |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        middlewares:
          - name: my-middleware
            namespace: ""
```

---

### `middlewares[].namespace`

The namespace of the middleware

:::tip

If not defined, helm will do a lookup and try to find the namespace of the middleware.
If more than one namespaces are found, it will throw an error.

:::

|            |                                                              |
| ---------- | ------------------------------------------------------------ |
| Key        | `ingress.$name.integrations.traefik.middlewares[].namespace` |
| Type       | `string`                                                     |
| Required   | ❌                                                           |
| Helm `tpl` | ❌                                                           |
| Default    | `""`                                                         |

Example

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        middlewares:
          - name: my-middleware
            namespace: my-namespace
```

---

## Full Examples

```yaml
ingress:
  ingress-name:
    integrations:
      traefik:
        enabled: true
        entrypoints:
          - websecure
        enableFixedMiddlewares: true
        forceTLS: true
        allowCors: false
        fixedMiddlewares:
          - name: chain-basic
            namespace: ""
        middlewares:
          - name: my-middleware
            namespace: ""
```
