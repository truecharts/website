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

Contains specific settings for helm charts containing or using operators

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
    additionalOperators: []
```

Example

```yaml
operator:
  register: true
  verify:
    enabled: true
    additionalOperators:
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

Contains specific settings for verifying operators

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
    additionalOperators: []
```

Example

```yaml
operator:
  verify:
    enabled: true
    additionalOperators:
      - operator1
      - operator2
```

---

#### `operator.verify.enabled`

Enables or disables the verification of operators

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

#### `operator.verify.additionalOperators`

Additional operators to verify

|            |                                       |
| ---------- | ------------------------------------- |
| Key        | `operator.verify.additionalOperators` |
| Type       | `list` of `string`                    |
| Required   | ❌                                    |
| Helm `tpl` | ❌                                    |
| Default    | `[]`                                  |

Example

```yaml
operator:
  verify:
    additionalOperators:
      - operator1
      - operator2
```

---

## `podOptions`

Options that apply to all pods

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

> TODO: Restructure from here and below START

## Global Values that apply on pods/containers

All of the below values are applied on all pods/containers, but can be overridden on the pod/container level.
This is so, you can have a single point to define the values from the scale UI,
but still have the ability to override them on the pod/container level, in case you need to.

| Key                                  |   Type   | Required | Helm Template |  Default  | Description                                                     |
| :----------------------------------- | :------: | :------: | :-----------: | :-------: | :-------------------------------------------------------------- |
| .Values.TZ                           | `string` |    ✅    |      ❌       | See below | Timezone that is used everywhere applicable                     |
| .Values.namespace                    | `string` |    ❌    |      ✅       |   `""`    | Namespace to apply to all objects, does not apply to chart deps |
| .Values.containerOptions             |  `map`   |    ✅    |      ❌       | See below | Container options that apply to all containers                  |
| .Values.containerOptions.NVIDIA_CAPS |  `list`  |    ✅    |      ❌       | See below | NVIDIA_CAPS (Only applied when scaleGPU is passed)              |
| .Values.resources                    |  `map`   |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.limits             |  `map`   |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.limits.cpu         | `string` |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.limits.memory      | `string` |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.requests           |  `map`   |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.requests.cpu       | `string` |    ✅    |      ❌       | See below | Resources                                                       |
| .Values.resources.requests.memory    | `string` |    ✅    |      ❌       | See below | Resources                                                       |

<!-- TODO: Improve descriptions -->

---

Defaults:

```yaml
TZ: UTC
namespace: ""
containerOptions:
  NVIDIA_CAPS:
    - all
resources:
  limits:
    cpu: 4000m
    memory: 8Gi
  requests:
    cpu: 10m
    memory: 50Mi
```

---

## Global Security Context

All of the below values are applied on all pods/containers, but can be overridden on the pod/container level.
This is so, you can have a single point to define the values from the scale UI,
but still have the ability to override them on the pod/container level, in case you need to.

| Key                                                        |   Type   | Required | Helm Template |  Default  | Description                              |
| :--------------------------------------------------------- | :------: | :------: | :-----------: | :-------: | :--------------------------------------- |
| .Values.securityContext                                    |  `map`   |    ✅    |      ❌       | See below | Security Context                         |
| .Values.securityContext.container                          |  `map`   |    ✅    |      ❌       | See below | Security Context for containers          |
| .Values.securityContext.container.PUID                     |  `int`   |    ✅    |      ❌       | See below | PUID (Only applied when running as root) |
| .Values.securityContext.container.UMASK                    | `string` |    ✅    |      ❌       | See below | UMASK                                    |
| .Values.securityContext.container.runAsNonRoot             |  `bool`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.runAsUser                |  `int`   |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.runAsGroup               |  `int`   |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.readOnlyRootFilesystem   |  `bool`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.allowPrivilegeEscalation |  `bool`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.privileged               |  `bool`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.seccompProfile           |  `map`   |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.seccompProfile.type      | `string` |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.seccompProfile.profile   | `string` |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.capabilities             |  `map`   |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.capabilities.add         |  `list`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.container.capabilities.drop        |  `list`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.pod                                |  `map`   |    ✅    |      ❌       | See below | Security Context for pods                |
| .Values.securityContext.pod.fsGroup                        |  `int`   |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.pod.fsGroupChangePolicy            | `string` |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.pod.supplementalGroup              |  `list`  |    ✅    |      ❌       | See below |                                          |
| .Values.securityContext.pod.sysctls                        |  `list`  |    ✅    |      ❌       | See below |                                          |

<!-- TODO: Improve descriptions -->

Defaults:

```yaml
securityContext:
  # -- Container security context for all containers
  # Can be overruled per container
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
  # -- Pod security context for all pods
  # Can be overruled per pod
  pod:
    fsGroup: 568
    fsGroupChangePolicy: OnRootMismatch
    supplementalGroups: []
    sysctls: []
```

> TODO: Restructure from here and above END

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
  repository: "myrepo"
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
  repository: "myrepo"
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
- [imagePullSecret](./imagePullSecret.md)
- [notes](./notes.md)
- [persistence](./persistence/index.md)
- [podDisruptionBudget](./podDisruptionBudget.md)
- [priorityClass](./priorityClass.md)
- [rbac](./rbac.md)
- [scaleCertificate](./scaleCertificate.md)
- [scaleExternalInterface](./scaleExternalInterface.md)
- [scaleGPU](./scaleGPU.md)
- [secret](./secret.md)
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
    additionalOperators:
      - operator1
      - operator2
extraTpl:
  - |
    apiVersion: v1
    kind: Deployment
    ...
```
