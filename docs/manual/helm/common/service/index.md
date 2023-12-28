---
title: Service
---

:::tip

Replace references to `$name` and `$port-name` with the actual name you want to use.

:::

## Naming scheme

- Primary: `$FullName` (release-name-chart-name)
- Non-Primary: `$FullName-$ServiceName` (release-name-chart-name-ServiceName)

---

## Target Selector

- `targetSelector` (string): Define the pod to link the service, by default will use the primary pod/container
- `targetSelector` (empty): Assign the service to the primary pod/container

## Keys

Appears in:

- `.Values.service`

---

### service

Define service objects

- Key: `service`
- Type: `map`
- Required: `❌`
- tpl: `❌`
- Default: `{}`

---

### service.$name

Define service

- Key: `service.$name`
- Type: `map`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### service.$name.enabled

Enables or Disables the service

- Key: `service.$name.enabled`
- Type: `bool`
- Required: `✅`
- tpl: `❌`
- Default: `false`
- Example

```yaml
enabled: true
```

---

### service.$name.namespace

Define the namespace for this object

- Key: `service.$name.namespace`
- Type: `string`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `""`
- Example

```yaml
namespace: some-namespace
```

---

### service.$name.labels

Additional labels for service

- Key: `service.$name.labels`
- Type: `map`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`
- Example

```yaml
labels:
  some-label: some-value
```

---

### service.$name.annotations

Additional annotations for service

- Key: `service.$name.annotations`
- Type: `map`
- Required: `❌`
- tpl: `✅ (On value only)`
- Default: `{}`
- Example

```yaml
annotations:
  some-annotation: some-value
```

---

### service.$name.type

Define the service type

- Key: `service.$name.type`
- Type: `string`
- Required: `✅`
- tpl: `✅`
- Default: `ClusterIP`
- Valid Values:
  - [ClusterIP](ClusterIP.md)
  - [LoadBalancer](LoadBalancer.md)
  - [NodePort](NodePort.md)
  - [ExternalName](ExternalName.md)
  - [ExternalIP](ExternalIP.md)
- Example

```yaml
type: ClusterIP
```

---

### service.$name.expandObjectName

Whether to expand the object name (based on the [naming scheme](#naming-scheme)) or not

- Key: `service.$name.expandObjectName`
- Type: `bool`
- Required: `❌`
- tpl: `❌`
- Default: `true`
- Example

```yaml
expandObjectName: false
```

---

### service.$name.publishNotReadyAddresses

Define whether to publishNotReadyAddresses or not

- Key: `service.$name.publishNotReadyAddresses`
- Type: `bool`
- Required: `❌`
- tpl: `❌`
- Default: `false`
- Example

```yaml
publishNotReadyAddresses: true
```

---

### service.$name.targetSelector

Define the pod to link the service, by default will use the primary pod

- Key: `service.$name.targetSelector`
- Type: `string`
- Required: `❌`
- tpl: `❌`
- Default: `""`
- Example

```yaml
targetSelector: some-pod
```

---

### service.$name.ports

Define the ports of the service

- Key: `service.$name.ports`
- Type: `map`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### service.$name.ports.$port-name

Define the port dict

- Key: `service.$name.ports.$port-name`
- Type: `map`
- Required: `✅`
- tpl: `❌`
- Default: `{}`

---

### service.$name.ports.$port-name.port

Define the port that will be exposed by the service

- Key: `service.$name.ports.$port-name.port`
- Type: `int`
- Required: `✅`
- tpl: `✅`
- Default: unset
- Example

```yaml
port: 80
```

---

### service.$name.ports.$port-name.targetPort

Define the target port (No named ports)

- Key: `service.$name.ports.$port-name.targetPort`
- Type: `int`
- Required: `✅`
- tpl: `✅`
- Default: (Defaults to `port` if not set)
- Example

```yaml
targetPort: 80
```

---

### service.$name.ports.$port-name.protocol

Define the port protocol Used by the container ports and probes, http and https are converted to tcp where needed

- Key: `service.$name.ports.$port-name.protocol`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: `{{ .Values.fallbackDefaults.serviceProtocol }}`
- Example

```yaml
protocol: tcp
```

---

### service.$name.ports.$port-name.nodePort

Define the node port

- Key: `service.$name.ports.$port-name.nodePort`
- Type: `int`
- Required: `❌`
- tpl: `✅`
- Default: unset
- Example

```yaml
nodePort: 30000
```

---

### service.$name.ports.$port-name.hostPort

Define the hostPort, should be **avoided**, unless **ABSOLUTELY** necessary

- Key: `service.$name.ports.$port-name.hostPort`
- Type: `int`
- Required: `❌`
- tpl: `✅`
- Default: unset
- Example

```yaml
hostPort: 30000
```

---

### service.$name.ports.$port-name.targetSelector

Define the container to link this port (Must be on under the pod linked above)

- Key: `service.$name.ports.$port-name.targetSelector`
- Type: `string`
- Required: `❌`
- tpl: `✅`
- Default: unset
- Example

```yaml
targetSelector: some-container
```

---

## Full Examples

Full examples can be found under each service type

- [ClusterIP](ClusterIP.md)
- [LoadBalancer](LoadBalancer.md)
- [NodePort](NodePort.md)
- [ExternalName](ExternalName.md)
- [ExternalIP](ExternalIP.md)
