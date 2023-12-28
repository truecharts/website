---
title: ExternalIP
---

:::tip

Prefix all keys below with `service.$name.`

See available service keys [here](./index.md).

:::

## Keys

Appears in:

- `.Values.service.$name`

---

### externalIP

Configure External IP type

- Key: `externalIP`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`

---

### useSlice

Define whether to use EndpointSlice or Endpoint

- Key: `useSlice`
- Type: `bool`
- Required: `❌`
- tpl: `❌`
- Default: `true`
- Example

```yaml
useSlice: false
```

---

### addressType

Define the addressType for External IP

- Key: `addressType`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `IPv4`
- Valid Values:
  - `IPv4`
  - `IPv6`
  - `FQDN`
- Example

```yaml
addressType: IPv6
```

---

### appProtocol

Define the appProtocol for External IP

- Key: `appProtocol`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
appProtocol: http
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
- Example

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
  service-externalip:
    enabled: true
    primary: true
    type: ExternalIP
    useSlice: true
    externalIP: 1.1.1.1
    addressType: IPv4
    appProtocol: http
    publishNotReadyAddresses: true
    externalIPs:
      - 10.200.230.34
    sessionAffinity: ClientIP
    externalTrafficPolicy: Cluster
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        targetPort: 8080
        protocol: HTTP
```
