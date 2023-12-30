---
title: Workload
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.workload`

## Naming scheme

- Primary: `$FullName` (release-name-chart-name)
- Non-Primary: `$FullName-$WorkloadName` (release-name-chart-name-workload-name)

:::tip

Replace references to `$name` with the actual name you want to use.

:::

---

## `workload`

Define workload objects

|            |            |
| ---------- | ---------- |
| Key        | `workload` |
| Type       | `map`      |
| Required   | ❌         |
| Helm `tpl` | ❌         |
| Default    | `{}`       |

Example

```yaml
workload: {}
```

---

### `$name`

Define workload

|            |                  |
| ---------- | ---------------- |
| Key        | `workload.$name` |
| Type       | `map`            |
| Required   | ✅               |
| Helm `tpl` | ❌               |
| Default    | `{}`             |

Example

```yaml
workload:
  workload-name: {}
```

---

#### `enabled`

Enable or disable workload

|            |                          |
| ---------- | ------------------------ |
| Key        | `workload.$name.enabled` |
| Type       | `bool`                   |
| Required   | ✅                       |
| Helm `tpl` | ❌                       |
| Default    | `false`                  |

Example

```yaml
workload:
  workload-name:
    enabled: true
```

---

#### `primary`

Set workload as primary

|            |                          |
| ---------- | ------------------------ |
| Key        | `workload.$name.primary` |
| Type       | `bool`                   |
| Required   | ✅                       |
| Helm `tpl` | ❌                       |
| Default    | `false`                  |

Example

```yaml
workload:
  workload-name:
    primary: true
```

---

#### `labels`

Define labels for workload

|            |                         |
| ---------- | ----------------------- |
| Key        | `workload.$name.labels` |
| Type       | `map`                   |
| Required   | ❌                      |
| Helm `tpl` | ✅ (On value only)      |
| Default    | `{}`                    |

Example

```yaml
workload:
  workload-name:
    labels:
      key: value
```

---

#### `annotations`

Define annotations for workload

|            |                              |
| ---------- | ---------------------------- |
| Key        | `workload.$name.annotations` |
| Type       | `map`                        |
| Required   | ❌                           |
| Helm `tpl` | ✅ (On value only)           |
| Default    | `{}`                         |

Example

```yaml
workload:
  workload-name:
    annotations:
      key: value
```

---

#### `namespace`

Define the namespace for this object

|            |                            |
| ---------- | -------------------------- |
| Key        | `workload.$name.namespace` |
| Type       | `string`                   |
| Required   | ❌                         |
| Helm `tpl` | ✅ (On value only)         |
| Default    | `""`                       |

Example

```yaml
workload:
  workload-name:
    namespace: some-namespace
```

---

#### `type`

Define the kind of the workload

|            |                       |
| ---------- | --------------------- |
| Key        | `workload.$name.type` |
| Type       | `string`              |
| Required   | ✅                    |
| Helm `tpl` | ❌                    |
| Default    | `""`                  |

Valid values

- [`Deployment`](./deployment.md)
- [`DaemonSet`](./daemonset.md)
- [`StatefulSet`](./statefulset.md)
- [`CronJob`](./cronjob.md)
- [`Job`](./job.md)

Example

```yaml
workload:
  workload-name:
    type: Deployment
```

---

#### `podSpec`

Define the podSpec for the workload

|            |                          |
| ---------- | ------------------------ |
| Key        | `workload.$name.podSpec` |
| Type       | `map`                    |
| Required   | ✅                       |
| Helm `tpl` | ❌                       |
| Default    | `{}`                     |

Example

```yaml
workload:
  workload-name:
    podSpec: {}
```

---

##### `labels`

Define labels for podSpec

|            |                                 |
| ---------- | ------------------------------- |
| Key        | `workload.$name.podSpec.labels` |
| Type       | `map`                           |
| Required   | ❌                              |
| Helm `tpl` | ✅ (On value only)              |
| Default    | `{}`                            |

Example

```yaml
workload:
  workload-name:
    podSpec:
      labels:
        key: value
```

---

##### `annotations`

Define annotations for podSpec

|            |                                      |
| ---------- | ------------------------------------ |
| Key        | `workload.$name.podSpec.annotations` |
| Type       | `map`                                |
| Required   | ❌                                   |
| Helm `tpl` | ✅ (On value only)                   |
| Default    | `{}`                                 |

Example

```yaml
workload:
  workload-name:
    podSpec:
      annotations:
        key: value
```

---

##### `automountServiceAccountToken`

Pod's automountServiceAccountToken

|            |                                                         |
| ---------- | ------------------------------------------------------- |
| Key        | `workload.$name.podSpec.automountServiceAccountToken`   |
| Type       | `bool`                                                  |
| Required   | ❌                                                      |
| Helm `tpl` | ❌                                                      |
| Default    | `{{ .Values.podOptions.automountServiceAccountToken }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      automountServiceAccountToken: true
```

---

##### `hostNetwork`

Bind pod to host's network

|            |                                        |
| ---------- | -------------------------------------- |
| Key        | `workload.$name.podSpec.hostNetwork`   |
| Type       | `bool`                                 |
| Required   | ❌                                     |
| Helm `tpl` | ❌                                     |
| Default    | `{{ .Values.podOptions.hostNetwork }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      hostNetwork: true
```

##### `hostPID`

Allow pod to access host's PID namespace

|            |                                    |
| ---------- | ---------------------------------- |
| Key        | `workload.$name.podSpec.hostPID`   |
| Type       | `bool`                             |
| Required   | ❌                                 |
| Helm `tpl` | ❌                                 |
| Default    | `{{ .Values.podOptions.hostPID }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      hostPID: true
```

---

##### `hostIPC`

Allow pod to access host's IPC namespace

|            |                                    |
| ---------- | ---------------------------------- |
| Key        | `workload.$name.podSpec.hostIPC`   |
| Type       | `bool`                             |
| Required   | ❌                                 |
| Helm `tpl` | ❌                                 |
| Default    | `{{ .Values.podOptions.hostIPC }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      hostIPC: true
```

---

##### `hostUsers`

Allow pod to access host's users namespace

|            |                                      |
| ---------- | ------------------------------------ |
| Key        | `workload.$name.podSpec.hostUsers`   |
| Type       | `bool`                               |
| Required   | ❌                                   |
| Helm `tpl` | ❌                                   |
| Default    | `{{ .Values.podOptions.hostUsers }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      hostUsers: true
```

---

##### `shareProcessNamespace`

Share Process Namespace with other containers in the pod

|            |                                                  |
| ---------- | ------------------------------------------------ |
| Key        | `workload.$name.podSpec.shareProcessNamespace`   |
| Type       | `bool`                                           |
| Required   | ❌                                               |
| Helm `tpl` | ❌                                               |
| Default    | `{{ .Values.podOptions.shareProcessNamespace }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      shareProcessNamespace: true
```

---

##### `enableServiceLinks`

Pod's enableServiceLinks

|            |                                               |
| ---------- | --------------------------------------------- |
| Key        | `workload.$name.podSpec.enableServiceLinks`   |
| Type       | `bool`                                        |
| Required   | ❌                                            |
| Helm `tpl` | ❌                                            |
| Default    | `{{ .Values.podOptions.enableServiceLinks }}` |

Example

```yaml
workload:
  workload-name:
    podSpec:
      enableServiceLinks: true
```

---

| Key                                                                  |   Type   | Required |   Helm Template    |                            Default                             | Description                                                              |
| :------------------------------------------------------------------- | :------: | :------: | :----------------: | :------------------------------------------------------------: | :----------------------------------------------------------------------- |
| workload.[workload-name].podSpec.restartPolicy                       | `string` |    ❌    |         ✅         |       `{{ .Values.podOptions.restartPolicy }}` (Always)        | Pod's restartPolicy. (Always, Never, OnFailure)                          |
| workload.[workload-name].podSpec.schedulerName                       | `string` |    ❌    |         ✅         |         `{{ .Values.podOptions.schedulerName }}` ("")          | Pod's schedulerName                                                      |
| workload.[workload-name].podSpec.priorityClassName                   | `string` |    ❌    |         ✅         |       `{{ .Values.podOptions.priorityClassName }}` ("")        | Pod's priorityClassName                                                  |
| workload.[workload-name].podSpec.hostname                            | `string` |    ❌    |         ✅         |                              `""`                              | Pod's hostname                                                           |
| workload.[workload-name].podSpec.terminationGracePeriodSeconds       |  `int`   |    ❌    |         ✅         | `{{ .Values.podOptions.terminationGracePeriodSeconds }}` (120) | Pod's terminationGracePeriodSeconds                                      |
| workload.[workload-name].podSpec.nodeSelector                        |  `map`   |    ❌    | ✅ (On value only) |          `{{ .Values.podOptions.nodeSelector }}` ({})          | Pod's nodeSelector                                                       |
| workload.[workload-name].podSpec.hostAliases                         |  `list`  |    ❌    |         ❌         |                                                                | Pod's host aliases                                                       |
| workload.[workload-name].podSpec.hostAliases.ip                      | `string` |    ❌    |         ✅         |                                                                | Value for `ip` in hosts aliases                                          |
| workload.[workload-name].podSpec.hostAliases.hostnames               |  `list`  |    ❌    |         ❌         |                                                                | Hostnames for the `ip` in hosts aliases                                  |
| workload.[workload-name].podSpec.hostAliases.hostnames.[host-name]   | `string` |    ❌    |         ✅         |                                                                | [Value] for `hostnames` for the `ip` in hosts aliases                    |
| workload.[workload-name].podSpec.dnsPolicy                           | `string` |    ❌    |         ✅         |      `{{ .Values.podOptions.dnsPolicy }}` (ClusterFirst)       | Pod's DNS Policy (ClusterFirst, ClusterFirstWithHostNet, Default, None). |
| workload.[workload-name].podSpec.dnsConfig                           |  `map`   |    ❌    |         ❌         |              `{{ .Values.podOptions.dnsConfig }}`              | Pod's DNS Config                                                         |
| workload.[workload-name].podSpec.dnsConfig.nameservers               |  `list`  |    ❌    |         ✅         |                              `[]`                              | Pod's DNS Config - Nameservers (Max 3)                                   |
| workload.[workload-name].podSpec.dnsConfig.nameservers.nameserver    | `string` |    ✅    |         ✅         |                              `""`                              | Pod's DNS Config - Nameserver                                            |
| workload.[workload-name].podSpec.dnsConfig.searches                  |  `list`  |    ❌    |         ✅         |                              `[]`                              | Pod's DNS Config - Searches (Max 6)                                      |
| workload.[workload-name].podSpec.dnsConfig.searches.[search]         | `string` |    ✅    |         ✅         |                              `""`                              | Pod's DNS Config - Search                                                |
| workload.[workload-name].podSpec.dnsConfig.options                   |  `map`   |    ❌    |         ❌         |                        `{"ndots": "1"}`                        | Pod's DNS Config - Options                                               |
| workload.[workload-name].podSpec.dnsConfig.options.name              | `string` |    ✅    |         ✅         |                              `""`                              | Pod's DNS Config - Option name                                           |
| workload.[workload-name].podSpec.dnsConfig.options.value             | `string` |    ❌    |         ✅         |                              `""`                              | Pod's DNS Config - Option value                                          |
| workload.[workload-name].podSpec.tolerations                         |  `list`  |    ❌    |         ❌         |          `{{ .Values.podOptions.tolerations }}` ([])           | Pod's Tolerations                                                        |
| workload.[workload-name].podSpec.tolerations.operator                | `string` |    ✅    |         ✅         |                                                                | Toleration's `operator` (Equal, Exists)                                  |
| workload.[workload-name].podSpec.tolerations.key                     | `string` |  ❌/✅   |         ✅         |                                                                | Toleration's `key`. Required only when `operator` = `Equal`              |
| workload.[workload-name].podSpec.tolerations.value                   | `string` |  ❌/✅   |         ✅         |                                                                | Toleration's `value`. Required only when `operator` = `Equal`            |
| workload.[workload-name].podSpec.tolerations.effect                  | `string` |    ❌    |         ✅         |                                                                | Toleration's `effect`.(NoExecute, NoSchedule, PreferNoSchedule)          |
| workload.[workload-name].podSpec.tolerations.tolerationSeconds       |  `int`   |    ❌    |         ❌         |                                                                | Toleration's `tolerationSeconds`.                                        |
| workload.[workload-name].podSpec.runtimeClassName                    | `string` |    ❌    |         ✅         |        `{{ .Values.podOptions.runtimeClassName }}` ("")        | Pod's runtimeClassName                                                   |
| workload.[workload-name].podSpec.securityContext                     |  `map`   |    ❌    |         ❌         |              `{{ .Values.securityContext.pod }}`               | Pod's securityContext                                                    |
| workload.[workload-name].podSpec.securityContext.fsGroup             |  `int`   |    ❌    |         ❌         |                             `568`                              | Pod's fsGroup                                                            |
| workload.[workload-name].podSpec.securityContext.fsGroupChangePolicy | `string` |    ❌    |         ❌         |                        `OnRootMismatch`                        | Pod's fsGroupChangePolicy (Always, OnRootMismatch)                       |
| workload.[workload-name].podSpec.securityContext.supplementalGroups  |  `list`  |    ❌    |         ❌         |                              `[]`                              | Pod's supplementalGroups (list of `int`)                                 |
| workload.[workload-name].podSpec.securityContext.sysctls             |  `list`  |    ❌    |         ❌         |                              `[]`                              | Pod's sysctls                                                            |
| workload.[workload-name].podSpec.securityContext.sysctls.name        | `string` |    ✅    |         ✅         |                              `""`                              | `name` of the sysctl                                                     |
| workload.[workload-name].podSpec.securityContext.sysctls.value       | `string` |    ✅    |         ✅         |                              `""`                              | `value` of the sysctl                                                    |
| workload.[workload-name].podSpec.containers                          |  `map`   |    ❌    |         ❌         |                              `{}`                              | Define container(s)                                                      |
| workload.[workload-name].podSpec.initContainers                      |  `map`   |    ❌    |         ❌         |                              `{}`                              | Define initContainer(s)                                                  |

---

Notes

> `dnsPolicy` is set automatically to `ClusterFirstWithHostNet` when `hostNetwork` is `true` > `runtimeClassName` will ignore any value set and use the `.Values.global.ixChartContext.nvidiaRuntimeClassName`,
> if a GPU is assigned to a container and Scale Middleware sets `.Values.global.ixChartContext.addNvidiaRuntimeClass` to `true`.
> Note that it will only set the `runtimeClassName` on the pod that this container belongs to.
> **sysctl** `net.ipv4.ip_unprivileged_port_start` will be automatically set to the lowest `targetPort` (or `port` if targetPort is not defined) number assigned to the pod.
> When hostNetwork is enabled the above **sysctl** (`net.ipv4.ip_unprivileged_port_start`) will not be added.

---

> Those are the common `keys` for all **workloads**.
> Additional keys, information and examples, see on the specific kind of workload

- [Deployment](deployment.md)
- [DaemonSet](daemonset.md)
- [StatefulSet](statefulset.md)
- [CronJob](cronjob.md)
- [Job](job.md)

> Additional keys, information and examples for `workload.[workload-name].podSpec.containers`.

- [Container](../container/index.md)

---

## Full Examples

```yaml
workload:
  workload-name:
    enabled: true
    primary: true
    namespace: some-namespace
    labels:
      key: value
    annotations:
      key: value
    podSpec:
      labels:
        key: value
      annotations:
        key: value
      automountServiceAccountToken: true
      hostNetwork: false
      hostPID: false
      shareProcessNamespace: false
      enableServiceLinks: false
      schedulerName: some-scheduler
      priorityClassName: some-priority-class-name
      hostname: some-hostname
      terminationGracePeriodSeconds: 100
      nodeSelector:
        disk_type: ssd
      hostAliases:
        - ip: 10.10.10.100
          hostnames:
            - myserver.local
            - storage.local
        - ip: 10.10.10.101
          hostnames:
            - myotherserver.local
            - backups.local
      dnsPolicy: ClusterFirst
      dnsConfig:
        nameservers:
          - 1.1.1.1
          - 1.0.0.1
        searches:
          - ns1.svc.cluster-domain.example
          - my.dns.search.suffix
        options:
          - name: ndots
            value: "1"
          - name: edns0
      tolerations:
        - operator: Exists
          effect: NoExecute
          tolerationSeconds: 3600
      runtimeClassName: some-runtime-class
      securityContext:
        fsGroup: 568
        fsGroupChangePolicy: OnRootMismatch
        supplementalGroups:
          - 568
        sysctls:
          - name: net.ipv4.ip_local_port_range
            value: 1024 65535
```
