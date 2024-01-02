---
title: Common Chart Documentation
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values`

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

> TODO: Restructure from here and below

---

## Global Values that apply on pods/containers

All of the below values are applied on all pods/containers, but can be overridden on the pod/container level.
This is so, you can have a single point to define the values from the scale UI,
but still have the ability to override them on the pod/container level, in case you need to.

| Key                                              |   Type   | Required | Helm Template |  Default  | Description                                                            |
| :----------------------------------------------- | :------: | :------: | :-----------: | :-------: | :--------------------------------------------------------------------- |
| .Values.TZ                                       | `string` |    ✅    |      ❌       | See below | Timezone that is used everywhere applicable                            |
| .Values.namespace                                | `string` |    ❌    |      ✅       |   `""`    | Namespace to apply to all objects, does not apply to chart deps        |
| .Values.containerOptions                         |  `map`   |    ✅    |      ❌       | See below | Container options that apply to all containers                         |
| .Values.containerOptions.NVIDIA_CAPS             |  `list`  |    ✅    |      ❌       | See below | NVIDIA_CAPS (Only applied when scaleGPU is passed)                     |
| .Values.resources                                |  `map`   |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.limits                         |  `map`   |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.limits.cpu                     | `string` |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.limits.memory                  | `string` |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.requests                       |  `map`   |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.requests.cpu                   | `string` |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.resources.requests.memory                | `string` |    ✅    |      ❌       | See below | Resources                                                              |
| .Values.podOptions                               |  `map`   |    ✅    |      ❌       | See below | Options that apply to all pods                                         |
| .Values.podOptions.enableServiceLinks            |  `bool`  |    ✅    |      ❌       | See below | enableServiceLinks                                                     |
| .Values.podOptions.hostNetwork                   |  `bool`  |    ✅    |      ❌       | See below | hostNetwork                                                            |
| .Values.podOptions.hostIPC                       |  `bool`  |    ✅    |      ❌       | See below | hostIPC                                                                |
| .Values.podOptions.hostPID                       |  `bool`  |    ✅    |      ❌       | See below | hostPID                                                                |
| .Values.podOptions.hostUsers                     |  `bool`  |    ✅    |      ❌       | See below | hostUsers                                                              |
| .Values.podOptions.shareProcessNamespace         |  `bool`  |    ✅    |      ❌       | See below | shareProcessNamespace                                                  |
| .Values.podOptions.restartPolicy                 | `string` |    ✅    |      ❌       | See below | restartPolicy                                                          |
| .Values.podOptions.dnsPolicy                     | `string` |    ✅    |      ❌       | See below | dnsPolicy                                                              |
| .Values.podOptions.dnsConfig                     |  `list`  |    ✅    |      ❌       | See below | dnsConfig                                                              |
| .Values.podOptions.hostAliases                   |  `list`  |    ✅    |      ❌       | See below | hostAliases                                                            |
| .Values.podOptions.tolerations                   |  `list`  |    ✅    |      ❌       | See below | tolerations                                                            |
| .Values.podOptions.runtimeClassName              | `string` |    ✅    |      ❌       | See below | runtimeClassName (value in ixChartContext will always take precedence) |
| .Values.podOptions.automountServiceAccountToken  |  `bool`  |    ✅    |      ❌       | See below | automountServiceAccountToken                                           |
| .Values.podOptions.terminationGracePeriodSeconds |  `int`   |    ✅    |      ❌       | See below | terminationGracePeriodSeconds                                          |

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

---

## Images

| Key                      |   Type   | Required | Helm Template |  Default  | Description       |
| :----------------------- | :------: | :------: | :-----------: | :-------: | :---------------- |
| .Values.image            |  `map`   |    ✅    |      ❌       | See below | Image             |
| .Values.image.repository | `string` |    ✅    |      ❌       | See below | Image Repository  |
| .Values.image.tag        | `string` |    ✅    |      ❌       | See below | Image Tag         |
| .Values.image.pullPolicy | `string` |    ✅    |      ❌       | See below | Image Pull Policy |

<!-- TODO: Improve descriptions -->

---

Defaults:

```yaml
image:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

You can define additional images using the following convention:

```yaml
workerImage:
  repository: ""
  tag: ""
  pullPolicy: IfNotPresent
```

There isn't anything special in the above format (`nameImage`), it's just a convention.
It's also a format that some external tools can use for automatic image updates.
For example, [Renovate](https://docs.renovatebot.com/modules/manager/helm-values/#additional-information)

---

Additional Documentation:

- [workload](workload/index.md)
- [container](container/index.md)
- [service](service/index.md)
- [persistence](persistence/index.md)
- [configmap](configmap.md)
- [secret](secret.md)
- [imagePullSecret](imagePullSecret.md)
- [serviceAccount](serviceAccount.md)
- [rbac](rbac.md)
- [podDisruptionBudget](podDisruptionBudget.md)
- [webhook](webhook.md)
- [scaleGPU](scaleGPU.md)
- [scaleCertificate](scaleCertificate.md)
- [scaleExternalInterface](scaleExternalInterface.md)
- [notes](notes.md)

---

Notes:

This applies across all the documentation:

- Helm Template:
  - ❌ means that the value is not templated
  - ✅ means that the value is templated,
    for example instead of a hardcoded value, you can set it to `{{ .Values.some.value }}`.
    and it will be replaced by the value contained in `.Values.some.value` at the installation/upgrade time.
