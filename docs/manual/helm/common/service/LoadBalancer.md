---
title: LoadBalancer
---

:::tip

Prefix all keys below with `service.$name.`

See available service keys [here](./index.md).

:::

## Keys

Appears in:

- `.Values.service.$name`

---

### sharedKey

Sets the shared key in `metallb.universe.tf/allow-shared-ip` **MetalLB** Annotation

- Key: `sharedKey`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `$FullName`
- Example

```yaml
sharedKey: custom-shared-key
```

### loadBalancerIP

Define the load balancer IP, sets the `metallb.universe.tf/loadBalancerIPs` **MetalLB** annotation. Mutually exclusive with `loadBalancerIPs`

- Key: `loadBalancerIP`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Example

```yaml
loadBalancerIP: 1.2.3.4
```

### loadBalancerIPs

Define the load balancer IPs, sets the `metallb.universe.tf/loadBalancerIPs` **MetalLB** annotation. Mutually exclusive with `loadBalancerIP`

- Key: `loadBalancerIPs`
- Type: `list` of `string`
- Required: `❌`
- tpl: `✅` (On entries only)
- Default: `[]`
- Example

```yaml
loadBalancerIPs:
  - 1.2.3.4
  - 5.6.7.8
```

---

### clusterIP

Configure Cluster IP type

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

### ipFamilyPolicy

Define the ipFamilyPolicy (SingleStack, PreferDualStack, RequireDualStack)

- Key: `ipFamilyPolicy`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `""`
- Valid Values:
  - `SingleStack`
  - `PreferDualStack`
  - `RequireDualStack`
- Example

```yaml
ipFamilyPolicy: SingleStack
```

---

### ipFamilies

Define the ipFamilies

- Key: `ipFamilies`
- Type: `list` of `string`
- Required: `❌`
- tpl: `✅` (On entries only)
- Default: `[]`
- Example

```yaml
ipFamilies:
  - IPv4
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

### loadBalancerSourceRanges

Define the load balancer source ranges

- Key: `loadBalancerSourceRanges`
- Type: `list` of `string`
- Required: `❌`
- tpl: `✅` (On entries only)
- Default: `[]`
- Example

```yaml
loadBalancerSourceRanges:
  - 10.100.100.0/24
  - 10.100.200.0/24
```

---

## Full Examples

```yaml
service:
  service-lb:
    enabled: true
    primary: true
    type: LoadBalancer
    loadBalancerIP: 10.100.100.2
    loadBalancerSourceRanges:
      - 10.100.100.0/24
    clusterIP: 172.16.20.233
    sharedKey: custom-shared-key
    publishNotReadyAddresses: true
    ipFamilyPolicy: SingleStack
    ipFamilies:
      - IPv4
    externalIPs:
      - 10.200.230.34
    sessionAffinity: ClientIP
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 86400
    externalTrafficPolicy: Cluster
    targetSelector: pod-name
    ports:
      port-name:
        enabled: true
        primary: true
        targetSelector: container-name
        port: 80
        protocol: HTTP
        targetPort: 8080
```
