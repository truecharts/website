---
title: Common Chart Documentation
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values`

## Notes

This applies across all the documentation:

- Helm `tpl`:
  - ❌ means that the value is not templated
  - ✅ means that the value is templated,
    for example instead of a hardcoded value, you can set it to `{{ .Values.some.value }}`.
    and it will be replaced by the value contained in `.Values.some.value` at the installation/upgrade time.

---

## `global`

Global values that apply to all charts

:::note

See more info about global values [here](./global.md)

:::

|            |                                  |
| ---------- | -------------------------------- |
| Key        | `global`                         |
| Type       | `map`                            |
| Required   | ❌                               |
| Helm `tpl` | ❌                               |
| Default    | See [here](./global.md#defaults) |

Example

```yaml
global: {}
```

---

## `fallbackDefaults`

The fallback defaults are used when a value is not defined in the chart.

:::note

- See more info about fallbackDefaults [here](./fallbackDefaults.md)

:::

|            |                                            |
| ---------- | ------------------------------------------ |
| Key        | `fallbackDefaults`                         |
| Type       | `map`                                      |
| Required   | ❌                                         |
| Helm `tpl` | ❌                                         |
| Default    | See [here](./fallbackDefaults.md#defaults) |

---

## `extraTpl`

Define kubernetes resources, 1 per list item, tpl will be resolved

|            |                    |
| ---------- | ------------------ |
| Key        | `extraTpl`         |
| Type       | `list` of `string` |
| Required   | ❌                 |
| Helm `tpl` | ✅                 |
| Default    | `[]`               |

Example

```yaml
extraTpl:
  - |
    apiVersion: v1
    kind: Deployment
    ...
```

---

## `operator`

Contains specific settings for helm charts containing or using system

|            |            |
| ---------- | ---------- |
| Key        | `operator` |
| Type       | `map`      |
| Required   | ❌         |
| Helm `tpl` | ❌         |

Default

```yaml
operator:
  register: false
  verify:
    enabled: true
    additionalsystem: []
```

Example

```yaml
operator:
  register: true
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
```

---

### `operator.register`

Adds a configmap in the operator's namespace to register the chart as an operator

|            |                     |
| ---------- | ------------------- |
| Key        | `operator.register` |
| Type       | `bool`              |
| Required   | ❌                  |
| Helm `tpl` | ❌                  |
| Default    | `false`             |

Example

```yaml
operator:
  register: true
```

---

### `operator.verify`

Contains specific settings for verifying system

|            |                   |
| ---------- | ----------------- |
| Key        | `operator.verify` |
| Type       | `map`             |
| Required   | ❌                |
| Helm `tpl` | ❌                |

Default

```yaml
operator:
  verify:
    enabled: true
    additionalsystem: []
```

Example

```yaml
operator:
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
```

---

#### `operator.verify.enabled`

Enables or disables the verification of system

|            |                           |
| ---------- | ------------------------- |
| Key        | `operator.verify.enabled` |
| Type       | `bool`                    |
| Required   | ❌                        |
| Helm `tpl` | ❌                        |
| Default    | `true`                    |

Example

```yaml
operator:
  verify:
    enabled: true
```

---

#### `operator.verify.additionalsystem`

Additional system to verify

|            |                                       |
| ---------- | ------------------------------------- |
| Key        | `operator.verify.additionalsystem` |
| Type       | `list` of `string`                    |
| Required   | ❌                                    |
| Helm `tpl` | ❌                                    |
| Default    | `[]`                                  |

Example

```yaml
operator:
  verify:
    additionalsystem:
      - operator1
      - operator2
```

---

## `podOptions`

Options that apply to all pods, unless overridden at the pod level

:::note

See more info about podOptions [here](./podOptions.md)

:::

|            |                                      |
| ---------- | ------------------------------------ |
| Key        | `podOptions`                         |
| Type       | `map`                                |
| Required   | ❌                                   |
| Helm `tpl` | ❌                                   |
| Default    | See [here](./podOptions.md#defaults) |

Example

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostUsers: false
  hostIPC: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  tolerations: []
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 120
```

---

## `containerOptions`

Options that apply to all containers, unless overridden at the container level

:::note

See more info about containerOptions [here](./containerOptions.md)

:::

|            |                                            |
| ---------- | ------------------------------------------ |
| Key        | `containerOptions`                         |
| Type       | `map`                                      |
| Required   | ❌                                         |
| Helm `tpl` | ❌                                         |
| Default    | See [here](./containerOptions.md#defaults) |

Example

```yaml
containerOptions:
  NVIDIA_CAPS:
    - all
```

---

## `TZ`

Timezone that is used everywhere applicable, unless overridden at the container level

|            |       |
| ---------- | ----- |
| Key        | `TZ`  |
| Type       | `map` |
| Required   | ✅    |
| Helm `tpl` | ❌    |
| Default    | `UTC` |

Example

```yaml
TZ: UTC
```

---

## `namespace`

Namespace to apply to all objects, unless overridden at the object level

:::note

Does not apply to chart deps, use global.namespace for that

:::

---

## `resources`

Define resources for all containers, unless overridden at the container level

:::note

Resources apply to **EACH** container, not to the pod as a whole.

:::

|            |                                     |
| ---------- | ----------------------------------- |
| Key        | `resources`                         |
| Type       | `map`                               |
| Required   | ✅                                  |
| Helm `tpl` | ❌                                  |
| Default    | See [here](./resources.md#defaults) |

Example

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

## `securityContext`

Define security context for all containers and pods, unless overridden at the container/pod level

:::note

See more info about securityContext [here](./securityContext.md)

:::

|            |                                           |
| ---------- | ----------------------------------------- |
| Key        | `securityContext`                         |
| Type       | `map`                                     |
| Required   | ✅                                        |
| Helm `tpl` | ❌                                        |
| Default    | See [here](./securityContext.md#defaults) |

Example

```yaml
securityContext:
  container:
    PUID: 568
    UMASK: "002"
    runAsNonRoot: true
    runAsUser: 568
    runAsGroup: 568
    readOnlyRootFilesystem: true
    allowPrivilegeEscalation: false
    privileged: false
    seccompProfile:
      type: RuntimeDefault
    capabilities:
      add: []
      drop:
        - ALL
  pod:
    fsGroup: 568
    fsGroupChangePolicy: OnRootMismatch
    supplementalGroups: []
    sysctls: []
```

---

## Images

:::tip

Use [`imageSelector`](./container/index.md#imageselector) to select the image to use for a container.

:::

Images are defined in the following format:

```yaml
image:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

For additional images, you can define them in the following format:

```yaml
nameImage:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

:::note

There isn't anything special in the above format (`nameImage`), it's just a convention.
It's also a format that some external tools can use for automatic image updates.
For example, [Renovate](https://docs.renovatebot.com/modules/manager/helm-values/#additional-information)

:::

---

### `image`

Defines the image details

|            |         |
| ---------- | ------- |
| Key        | `image` |
| Type       | `map`   |
| Required   | ✅      |
| Helm `tpl` | ❌      |

Default

```yaml
image:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

Example

```yaml
image:
  repository: "my-repo"
  tag: "latest"
  pullPolicy: IfNotPresent
```

---

### `image.repository`

Defines the image repository

|            |                    |
| ---------- | ------------------ |
| Key        | `image.repository` |
| Type       | `string`           |
| Required   | ✅                 |
| Helm `tpl` | ❌                 |
| Default    | `""`               |

Example

```yaml
image:
  repository: "my-repo"
```

---

### `image.tag`

Defines the image tag

|            |             |
| ---------- | ----------- |
| Key        | `image.tag` |
| Type       | `string`    |
| Required   | ✅          |
| Helm `tpl` | ❌          |
| Default    | `""`        |

Example

```yaml
image:
  tag: "latest"
```

---

### `image.pullPolicy`

Defines the image pull policy

|            |                    |
| ---------- | ------------------ |
| Key        | `image.pullPolicy` |
| Type       | `string`           |
| Required   | ✅                 |
| Helm `tpl` | ❌                 |
| Default    | `IfNotPresent`     |

Example

```yaml
image:
  pullPolicy: IfNotPresent
```

---

## Additional Documentation

- [certificate](./certificate.md)
- [configmap](./configmap.md)
- [container](./container/index.md)
- [containerOptions](./containerOptions.md)
- [imagePullSecret](./imagePullSecret.md)
- [ingress](./ingress.md)
- [notes](./notes.md)
- [persistence](./persistence/index.md)
- [podDisruptionBudget](./podDisruptionBudget.md)
- [priorityClass](./priorityClass.md)
- [rbac](./rbac.md)
- [resources](./resources.md)
- [scaleExternalInterface](./scaleExternalInterface.md)
- [secret](./secret.md)
- [securityContext](./securityContext.md)
- [service](./service/index.md)
- [serviceAccount](./serviceAccount.md)
- [storageClass](./storageClass.md)
- [volumeSnapshot](./volumeSnapshot.md)
- [volumeSnapshotClass](./volumeSnapshotClass.md)
- [webhook](./webhook.md)
- [webhook](./webhook.md)
- [workload](./workload/index.md)

---

## Full Examples

```yaml
operator:
  register: false
  verify:
    enabled: true
    additionalsystem:
      - operator1
      - operator2
extraTpl:
  - |
    apiVersion: v1
    kind: Deployment
    ...
```
