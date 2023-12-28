---
title: Webhook
---

:::tip

Replace references to `$name` with the actual name you want to use.

:::

Appears in:

- `.Values.webhook`

## Naming scheme

- `$FullName-$webhookName` (release-name-chart-name-webhookName)

---

## `webhook`

Create webhook objects

|          |           |
| -------- | --------- |
| Key      | `webhook` |
| Type     | `map`     |
| Required | `❌`      |
| tpl      | `❌`      |
| Default  | `{}`      |

---

### `webhook.$name`

Define webhook

|          |                 |
| -------- | --------------- |
| Key      | `webhook.$name` |
| Type     | `map`           |
| Required | `✅`            |
| tpl      | `❌`            |
| Default  | `{}`            |

---

#### `webhook.$name.enabled`

Enables or Disables the webhook

|          |                         |
| -------- | ----------------------- |
| Key      | `webhook.$name.enabled` |
| Type     | `bool`                  |
| Required | `✅`                    |
| tpl      | `❌`                    |
| Default  | `false`                 |

Example

```yaml
enabled: true
```

---

#### `webhook.$name.namespace`

Define the namespace for this object

|          |                           |
| -------- | ------------------------- |
| Key      | `webhook.$name.namespace` |
| Type     | `string`                  |
| Required | `❌`                      |
| tpl      | `✅ (On value only)`      |
| Default  | `""`                      |

Example

```yaml
namespace: some-namespace
```

---

#### `webhook.$name.labels`

Additional labels for webhook

|          |                        |
| -------- | ---------------------- |
| Key      | `webhook.$name.labels` |
| Type     | `map`                  |
| Required | `❌`                   |
| tpl      | `✅ (On value only)`   |
| Default  | `{}`                   |

Example

```yaml
labels:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `webhook.$name.annotations`

Additional annotations for webhook

|          |                             |
| -------- | --------------------------- |
| Key      | `webhook.$name.annotations` |
| Type     | `map`                       |
| Required | `❌`                        |
| tpl      | `✅ (On value only)`        |
| Default  | `{}`                        |

Example

```yaml
annotations:
  key: value
  keytpl: "{{ .Values.some.value }}"
```

---

#### `webhook.$name.type`

Define the type of the webhook.

|          |                      |
| -------- | -------------------- |
| Key      | `webhook.$name.type` |
| Type     | `string`             |
| Required | `✅`                 |
| tpl      | `✅`                 |
| Default  | `""`                 |

Valid Values:

- `mutating`
- `validating`

Example

```yaml
type: mutating
```

---

#### `webhook.$name.webhooks`

Define the webhooks.

|          |                          |
| -------- | ------------------------ |
| Key      | `webhook.$name.webhooks` |
| Type     | `list` of `map`          |
| Required | `✅`                     |
| tpl      | `❌`                     |
| Default  | `[]`                     |

---

##### `webhook.$name.webhooks[].name`

Define the webhook name

|          |                                 |
| -------- | ------------------------------- |
| Key      | `webhook.$name.webhooks[].name` |
| Type     | `string`                        |
| Required | `✅`                            |
| tpl      | `✅`                            |
| Default  | `""`                            |

Example

```yaml
name: webhook-name
```

---

##### `webhook.$name.webhooks[].failurePolicy`

Define the failurePolicy for the webhook

|          |                                          |
| -------- | ---------------------------------------- |
| Key      | `webhook.$name.webhooks[].failurePolicy` |
| Type     | `string`                                 |
| Required | `❌`                                     |
| tpl      | `✅`                                     |
| Default  | `""`                                     |

Valid Values:

- `Ignore`
- `Fail`

Example

```yaml
failurePolicy: Fail
```

---

##### `webhook.$name.webhooks[].matchPolicy`

Define the matchPolicy for the webhook

|          |                                        |
| -------- | -------------------------------------- |
| Key      | `webhook.$name.webhooks[].matchPolicy` |
| Type     | `string`                               |
| Required | `❌`                                   |
| tpl      | `✅`                                   |
| Default  | `""`                                   |

Valid Values:

- `Exact`
- `Equivalent`

Example

```yaml
matchPolicy: Exact
```

---

##### `webhook.$name.webhooks[].sideEffects`

Define the sideEffects for the webhook

|          |                                        |
| -------- | -------------------------------------- |
| Key      | `webhook.$name.webhooks[].sideEffects` |
| Type     | `string`                               |
| Required | `❌`                                   |
| tpl      | `✅`                                   |
| Default  | `""`                                   |

Valid Values:

- `None`
- `NoneOnDryRun`

Example

```yaml
sideEffects: None
```

---

##### `webhook.$name.webhooks[].reinvocationPolicy`

Define the reinvocationPolicy for the webhook

|          |                                               |
| -------- | --------------------------------------------- |
| Key      | `webhook.$name.webhooks[].reinvocationPolicy` |
| Type     | `string`                                      |
| Required | `❌`                                          |
| tpl      | `✅`                                          |
| Default  | `""`                                          |

Valid Values:

- `Never`
- `IfNeeded`

Example

```yaml
reinvocationPolicy: Never
```

---

##### `webhook.$name.webhooks[].timeoutSeconds`

Define the timeoutSeconds for the webhook

|          |                                           |
| -------- | ----------------------------------------- |
| Key      | `webhook.$name.webhooks[].timeoutSeconds` |
| Type     | `int`                                     |
| Required | `❌`                                      |
| tpl      | `✅`                                      |
| Default  | `""`                                      |

Example

```yaml
timeoutSeconds: 30
```

---

##### `webhook.$name.webhooks[].admissionReviewVersions`

Define the admissionReviewVersions for the webhook

|          |                                                    |
| -------- | -------------------------------------------------- |
| Key      | `webhook.$name.webhooks[].admissionReviewVersions` |
| Type     | `list` of `string`                                 |
| Required | `✅`                                               |
| tpl      | `✅`                                               |
| Default  | `[]`                                               |

Example

```yaml
admissionReviewVersions:
  - v1
  - v1beta1
```

---

##### `webhook.$name.webhooks[].clientConfig`

Define the clientConfig for the webhook

|          |                                         |
| -------- | --------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig` |
| Type     | `map`                                   |
| Required | `✅`                                    |
| tpl      | `❌`                                    |
| Default  | `{}`                                    |

---

###### `webhook.$name.webhooks[].clientConfig.caBundle`

Define the caBundle in clientConfig for the webhook

|          |                                                  |
| -------- | ------------------------------------------------ |
| Key      | `webhook.$name.webhooks[].clientConfig.caBundle` |
| Type     | `string`                                         |
| Required | `❌`                                             |
| tpl      | `✅`                                             |
| Default  | `""`                                             |

Example

```yaml
caBundle: ""
```

###### `webhook.$name.webhooks[].clientConfig.url`

Define the url in clientConfig for the webhook, required if service is not defined in clientConfig

|          |                                             |
| -------- | ------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.url` |
| Type     | `string`                                    |
| Required | `❌`                                        |
| tpl      | `✅`                                        |
| Default  | `""`                                        |

Example

```yaml
url: ""
```

---

###### `webhook.$name.webhooks[].clientConfig.service`

Define the service in clientConfig for the webhook, required if url is not defined in clientConfig

|          |                                                 |
| -------- | ----------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.service` |
| Type     | `map`                                           |
| Required | `❌`                                            |
| tpl      | `❌`                                            |
| Default  | `{}`                                            |

---

###### `webhook.$name.webhooks[].clientConfig.service.name`

Define the service name in clientConfig for the webhook

|          |                                                      |
| -------- | ---------------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.service.name` |
| Type     | `string`                                             |
| Required | `✅`                                                 |
| tpl      | `✅`                                                 |
| Default  | `""`                                                 |

Example

```yaml
name: ""
```

---

###### `webhook.$name.webhooks[].clientConfig.service.namespace`

Define the service namespace in clientConfig for the webhook

|          |                                                           |
| -------- | --------------------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.service.namespace` |
| Type     | `string`                                                  |
| Required | `✅`                                                      |
| tpl      | `✅`                                                      |
| Default  | `""`                                                      |

Example

```yaml
namespace: ""
```

---

###### `webhook.$name.webhooks[].clientConfig.service.path`

Define the service path in clientConfig for the webhook

|          |                                                      |
| -------- | ---------------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.service.path` |
| Type     | `string`                                             |
| Required | `❌`                                                 |
| tpl      | `✅`                                                 |
| Default  | `""`                                                 |

Example

```yaml
path: ""
```

---

###### `webhook.$name.webhooks[].clientConfig.service.port`

Define the service port in clientConfig for the webhook

|          |                                                      |
| -------- | ---------------------------------------------------- |
| Key      | `webhook.$name.webhooks[].clientConfig.service.port` |
| Type     | `int`                                                |
| Required | `❌`                                                 |
| tpl      | `✅`                                                 |
| Default  | unset                                                |

Example

```yaml
port: 443
```

---

#### `webhook.$name.webhooks[].rules`

Define the rules for the webhook

|          |                                  |
| -------- | -------------------------------- |
| Key      | `webhook.$name.webhooks[].rules` |
| Type     | `list` of `map`                  |
| Required | `✅`                             |
| tpl      | `❌`                             |
| Default  | `[]`                             |

---

##### `webhook.$name.webhooks[].rules[].scope`

Define the scope of the rule for the webhook

|          |                                          |
| -------- | ---------------------------------------- |
| Key      | `webhook.$name.webhooks[].rules[].scope` |
| Type     | `string`                                 |
| Required | `❌`                                     |
| tpl      | `✅`                                     |
| Default  | `""`                                     |

Valid Values:

- `Cluster`
- `Namespaced`
- `*`

Example

```yaml
scope: Cluster
```

---

##### `webhook.$name.webhooks[].rules[].apiGroups`

Define the apiGroups of the rule for the webhook

|          |                                              |
| -------- | -------------------------------------------- |
| Key      | `webhook.$name.webhooks[].rules[].apiGroups` |
| Type     | `list` of `string`                           |
| Required | `✅`                                         |
| tpl      | `❌`                                         |
| Default  | `[]`                                         |

Example

```yaml
apiGroups:
  - ""
  - "apps"
```

---

##### `webhook.$name.webhooks[].rules[].apiVersions`

Define the apiVersions of the rule for the webhook

|          |                                                |
| -------- | ---------------------------------------------- |
| Key      | `webhook.$name.webhooks[].rules[].apiVersions` |
| Type     | `list` of `string`                             |
| Required | `✅`                                           |
| tpl      | `❌`                                           |
| Default  | `[]`                                           |

Example

```yaml
apiVersions:
  - v1
  - v1beta1
```

---

##### `webhook.$name.webhooks[].rules[].operations`

Define the operations of the rule for the webhook

|          |                                               |
| -------- | --------------------------------------------- |
| Key      | `webhook.$name.webhooks[].rules[].operations` |
| Type     | `list` of `string`                            |
| Required | `✅`                                          |
| tpl      | `❌`                                          |
| Default  | `[]`                                          |

Example

```yaml
operations:
  - CREATE
  - UPDATE
```

---

##### `webhook.$name.webhooks[].rules[].resources`

Define the resources of the rule for the webhook

|          |                                              |
| -------- | -------------------------------------------- |
| Key      | `webhook.$name.webhooks[].rules[].resources` |
| Type     | `list` of `string`                           |
| Required | `✅`                                         |
| tpl      | `❌`                                         |
| Default  | `[]`                                         |

Example

```yaml
resources:
  - pods
  - pods/status
```

---

## Full Examples

```yaml
webhook:
  webhook-name:
    enabled: true
    labels:
      key: value
      keytpl: "{{ .Values.some.value }}"
    annotations:
      key: value
      keytpl: "{{ .Values.some.value }}"
    type: mutating
    webhooks:
      - name: webhook-name
        failurePolicy: Fail
        matchPolicy: Exact
        sideEffects: None
        reinvocationPolicy: Never
        timeoutSeconds: 30
        admissionReviewVersions:
          - v1
          - v1beta1
        clientConfig:
          caBundle: ""
          url: ""
        rules:
          - scope: Cluster
            apiGroups:
              - ""
            apiVersions:
              - v1
            operations:
              - CREATE
              - UPDATE
            resources:
              - pods
              - pods/status

  other-webhook-name:
    enabled: true
    namespace: some-namespace
    type: validating
    webhooks:
      - name: other-webhook-name
        failurePolicy: Fail
        matchPolicy: Exact
        sideEffects: None
        timeoutSeconds: 30
        admissionReviewVersions:
          - v1
          - v1beta1
        clientConfig:
          caBundle: ""
          service:
            name: ""
            namespace: ""
            path: ""
            port: 443
        rules:
          - scope: Namespaced
            apiGroups:
              - ""
            apiVersions:
              - v1
            operations:
              - CREATE
              - UPDATE
            resources:
              - pods
              - pods/status
```
