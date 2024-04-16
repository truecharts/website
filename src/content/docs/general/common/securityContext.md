---
title: Security Context
---

:::note

- Examples under each key are only to be used as a placement guide
- See the [Full Examples](#full-examples) section for complete examples.

:::

## Appears in

- `.Values.securityContext`

## Defaults

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

## `securityContext.container`

Defines the security context for the container. Can be overridden at container level.

See [Container Security Context](/general/common/container/securitycontext#securitycontext)

Default

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
```

---

### `securityContext.container.PUID`

See [Container Fixed Env PUID](/general/common/container/fixedenv#fixedenvpuid)

Default

```yaml
securityContext:
  container:
    PUID: 568
```

---

### `securityContext.container.UMASK`

See [Container Fixed Env UMASK](/general/common/container/fixedenv#fixedenvumask)

Default

```yaml
securityContext:
  container:
    UMASK: "002"
```

---

### `securityContext.container.runAsNonRoot`

See [Container Run As Non Root](/general/common/container/securitycontext#securitycontextrunasnonroot)

Default

```yaml
securityContext:
  container:
    runAsNonRoot: true
```

---

### `securityContext.container.runAsUser`

See [Container Run As User](/general/common/container/securitycontext#securitycontextrunasuser)

Default

```yaml
securityContext:
  container:
    runAsUser: 568
```

---

### `securityContext.container.runAsGroup`

See [Container Run As Group](/general/common/container/securitycontext#securitycontextrunasgroup)

Default

```yaml
securityContext:
  container:
    runAsGroup: 568
```

---

### `securityContext.container.readOnlyRootFilesystem`

See [Container Read Only Root Filesystem](/general/common/container/securitycontext#securitycontextreadonlyrootfilesystem)

Default

```yaml
securityContext:
  container:
    readOnlyRootFilesystem: true
```

---

### `securityContext.container.allowPrivilegeEscalation`

See [Container Allow Privilege Escalation](/general/common/container/securitycontext#securitycontextallowprivilegeescalation)

Default

```yaml
securityContext:
  container:
    allowPrivilegeEscalation: false
```

---

### `securityContext.container.privileged`

See [Container Privileged](/general/common/container/securitycontext#securitycontextprivileged)

Default

```yaml
securityContext:
  container:
    privileged: false
```

---

### `securityContext.container.seccompProfile`

See [Container Seccomp Profile](/general/common/container/securitycontext#securitycontextseccompprofile)

Default

```yaml
securityContext:
  container:
    seccompProfile:
      type: RuntimeDefault
```

---

#### `securityContext.container.seccompProfile.type`

See [Container Seccomp Profile Type](/general/common/container/securitycontext#securitycontextseccompprofiletype)

Default

```yaml
securityContext:
  container:
    seccompProfile:
      type: RuntimeDefault
```

---

#### `securityContext.container.seccompProfile.profile`

See [Container Seccomp Profile Profile](/general/common/container/securitycontext#securitycontextseccompprofileprofile)

Default

```yaml
securityContext:
  container:
    seccompProfile:
      profile: ""
```

### `securityContext.container.capabilities`

See [Container Capabilities](/general/common/container/securitycontext#securitycontextcapabilities)

Default

```yaml
securityContext:
  container:
    capabilities:
      add: []
      drop:
        - ALL
```

#### `securityContext.container.capabilities.add`

See [Container Capabilities Add](/general/common/container/securitycontext#securitycontextcapabilitiesadd)

Default

```yaml
securityContext:
  container:
    capabilities:
      add: []
```

#### `securityContext.container.capabilities.drop`

See [Container Capabilities Drop](/general/common/container/securitycontext#securitycontextcapabilitiesdrop)

Default

```yaml
securityContext:
  container:
    capabilities:
      drop:
        - ALL
```

---

## `securityContext.pod`

Defines the security context for the pod. Can be overridden at pod level.

See [Pod Security Context](/general/common/workload#securitycontext)

Default

```yaml
securityContext:
  pod:
    fsGroup: 568
    fsGroupChangePolicy: OnRootMismatch
    supplementalGroups: []
    sysctls: []
```

---

### `securityContext.pod.fsGroup`

See [Pod FS Group](/general/common/workload#securitycontextfsgroup)

Default

```yaml
securityContext:
  pod:
    fsGroup: 568
```

---

### `securityContext.pod.fsGroupChangePolicy`

See [Pod FS Group Change Policy](/general/common/workload#securitycontextfsgroupchangepolicy)

Default

```yaml
securityContext:
  pod:
    fsGroupChangePolicy: OnRootMismatch
```

---

### `securityContext.pod.supplementalGroups`

See [Pod Supplemental Groups](/general/common/workload#securitycontextsupplementalgroups)

Default

```yaml
securityContext:
  pod:
    supplementalGroups: []
```

---

### `securityContext.pod.sysctls`

See [Pod Sysctls](/general/common/workload#securitycontextsysctls)

Default

```yaml
securityContext:
  pod:
    sysctls: []
```

---

## Full Examples

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
      add:
        - SYS_ADMIN
        - SYS_PTRACE
      drop:
        - ALL
  pod:
    fsGroup: 568
    fsGroupChangePolicy: OnRootMismatch
    supplementalGroups:
      - 568
      - 1000
    sysctls:
      - name: net.ipv4.ip_unprivileged_port_start
        value: "0"
```
