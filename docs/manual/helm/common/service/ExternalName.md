---
title: ExternalName
---

:::tip

Prefix all keys below with `service.$name.`

See available service keys [here](./index.md).

:::

## Keys

Appears in:

- `.Values.service.$name`

---

### externalName

Configure ExternalName type

- Key: `externalName`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `""`
- Example

```yaml
externalName: external-name
```

---

### clusterIP

Define the clusterIP for ExternalName

- Key: `clusterIP`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
clusterIP: 172.16.0.123
```

---

### sessionAffinity

Define the session affinity (ClientIP, None)

- Key: `sessionAffinity`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Valid Values:
  - `ClientIP`
  - `None`
Example

```yaml
sessionAffinity: ClientIP
```

---

### sessionAffinityConfig.clientIP.timeoutSeconds

Define the timeout for ClientIP session affinity (0-86400)

- Key: `sessionAffinityConfig.clientIP.timeoutSeconds`
- Type: `int`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Valid Values:
  - `0` - `86400`
- Example

```yaml
sessionAffinityConfig:
  clientIP:
    timeoutSeconds: 86400
```

---

### externalIPs

Define externalIPs

- Key: `externalIPs`
- Type: `list` of `string`
- Required: `❌`
- tpl: `✅` (On entries only)
- Default: `[]`
- Example

```yaml
externalIPs:
  - 1.2.3.4
  - 5.6.7.8
```

---

### externalTrafficPolicy

Define the external traffic policy (Cluster, Local)

- Key: `externalTrafficPolicy`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Valid Values:
  - `Cluster`
  - `Local`
- Example

```yaml
externalTrafficPolicy: Cluster
```

---

## Full Examples

```yaml
service:
  # Special type
  service-external-name:
    enabled: true
    primary: true
    type: ExternalName
    externalName: external-name
    clusterIP: 172.16.20.233
    publishNotReadyAddresses: true
    externalIPs:
      - 10.200.230.34
    sessionAffinity: ClientIP
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 86400
    externalTrafficPolicy: Cluster
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        protocol: HTTP
```
