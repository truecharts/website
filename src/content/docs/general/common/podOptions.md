---
title: Pod Options
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.podOptions`

## Defaults

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostIPC: false
  hostUsers: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  nodeSelector:
    kubernetes.io/arch: "amd64"
  defaultSpread: true
  topologySpreadConstraints: []
  tolerations: []
  schedulerName: ""
  priorityClassName: ""
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 60
```

---

## `enableServiceLinks`

See [Enable Service Links](/general/common/workload/index.md#enableservicelinks)

Default

```yaml
podOptions:
  enableServiceLinks: false
```

---

## `hostNetwork`

See [Host Network](/general/common/workload/index.md#hostnetwork)

Default

```yaml
podOptions:
  hostNetwork: false
```

---

## `hostPID`

See [Host PID](/general/common/workload/index.md#hostpid)

Default

```yaml
podOptions:
  hostPID: false
```

---

## `hostIPC`

See [Host IPC](/general/common/workload/index.md#hostipc)

Default

```yaml
podOptions:
  hostIPC: false
```

---

## `hostUsers`

See [Host Users](/general/common/workload/index.md#hostusers)

Default

```yaml
podOptions:
  hostUsers: false
```

---

## `shareProcessNamespace`

See [Share Process Namespace](/general/common/workload/index.md#shareprocessnamespace)

Default

```yaml
podOptions:
  shareProcessNamespace: false
```

---

## `restartPolicy`

See [Restart Policy](/general/common/workload/index.md#restartpolicy)

Default

```yaml
podOptions:
  restartPolicy: Always
```

---

## `dnsPolicy`

See [DNS Policy](/general/common/workload/index.md#dnspolicy)

Default

```yaml
podOptions:
  dnsPolicy: ClusterFirst
```

---

## `dnsConfig`

See [DNS Config](/general/common/workload/index.md#dnsconfig)

Default

```yaml
podOptions:
  dnsConfig:
    options:
      - name: ndots
        value: "1"
```

---

## `hostAliases`

See [Host Aliases](/general/common/workload/index.md#hostaliases)

Default

```yaml
podOptions:
  hostAliases: []
```

---

## `nodeSelector`

See [Node Selector](/general/common/workload/index.md#nodeselector)

Default

```yaml
podOptions:
  nodeSelector:
    kubernetes.io/arch: "amd64"
```

---

## `defaultSpread`

Sets some default topology spread constraints for good spread of pods across nodes.

Default

```yaml
podOptions:
  defaultSpread: true
```

---

## `topologySpreadConstraints`

See [Topology Spread Constraints](/general/common/workload/index.md#topologyspreadconstraints)

Default

```yaml
podOptions:
  topologySpreadConstraints: []
```

---

## `tolerations`

See [Tolerations](/general/common/workload/index.md#tolerations)

Default

```yaml
podOptions:
  tolerations: []
```

---

## `schedulerName`

See [Scheduler Name](/general/common/workload/index.md#schedulername)

Default

```yaml
podOptions:
  schedulerName: ""
```

---

## `priorityClassName`

See [Priority Class Name](/general/common/workload/index.md#priorityclassname)

Default

```yaml
podOptions:
  priorityClassName: ""
```

---

## `runtimeClassName`

See [Runtime Class Name](/general/common/workload/index.md#runtimeclassname)

Default

```yaml
podOptions:
  runtimeClassName: ""
```

---

## `automountServiceAccountToken`

See [Automount Service Account Token](/general/common/workload/index.md#automountserviceaccounttoken)

Default

```yaml
podOptions:
  automountServiceAccountToken: false
```

---

## `terminationGracePeriodSeconds`

See [Termination Grace Period Seconds](/general/common/workload/index.md#terminationgraceperiodseconds)

Default

```yaml
podOptions:
  terminationGracePeriodSeconds: 60
```

---

## Full Examples

```yaml
podOptions:
  enableServiceLinks: false
  hostNetwork: false
  hostPID: false
  hostIPC: false
  hostUsers: false
  shareProcessNamespace: false
  restartPolicy: Always
  dnsPolicy: ClusterFirst
  dnsConfig:
    options:
      - name: ndots
        value: "1"
  hostAliases: []
  nodeSelector:
    kubernetes.io/arch: "amd64"
  defaultSpread: true
  topologySpreadConstraints: []
  tolerations: []
  schedulerName: ""
  priorityClassName: ""
  runtimeClassName: ""
  automountServiceAccountToken: false
  terminationGracePeriodSeconds: 60
```
