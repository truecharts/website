# Webhook

| Key                                                                                        |   Type    | Required |   Helm Template    | Default | Description                                                                                        |
| :----------------------------------------------------------------------------------------- | :-------: | :------: | :----------------: | :-----: | :------------------------------------------------------------------------------------------------- |
| webhook                                                                                    |  `dict`   |    ❌    |         ❌         |  `{}`   | Define the webhooks as dicts                                                                       |
| webhook.[webhook-name]                                                                     |  `dict`   |    ✅    |         ❌         |  `{}`   | Holds webhook definition                                                                           |
| webhook.[webhook-name].enabled                                                             | `boolean` |    ✅    |         ❌         | `false` | Enables or Disables the webhook                                                                    |
| webhook.[webhook-name].namespace                                                           | `string`  |    ❌    |         ✅         |  `""`   | Define the namespace for this object                                                               |
| webhook.[webhook-name].labels                                                              |  `dict`   |    ❌    | ✅ (On value only) |  `{}`   | Additional labels for webhook                                                                      |
| webhook.[webhook-name].annotations                                                         |  `dict`   |    ❌    | ✅ (On value only) |  `{}`   | Additional annotations for webhook                                                                 |
| webhook.[webhook-name].type                                                                | `string`  |    ✅    |         ✅         |  `""`   | Define the type of the webhook. [mutating, validating]                                             |
| webhook.[webhook-name].webhooks                                                            |  `list`   |    ✅    |         ❌         |  `[]`   | Define the webhooks.                                                                               |
| webhook.[webhook-name].webhooks.[webhook].name                                             | `string`  |    ✅    |         ✅         |  `""`   | Define the webhook name                                                                            |
| webhook.[webhook-name].webhooks.[webhook].failurePolicy                                    | `string`  |    ❌    |         ✅         |  `""`   | Define the failurePolicy for the webhook [Ignore, Fail]                                            |
| webhook.[webhook-name].webhooks.[webhook].matchPolicy                                      | `string`  |    ❌    |         ✅         |  `""`   | Define the matchPolicy for the webhook [Exact, Equivalent]                                         |
| webhook.[webhook-name].webhooks.[webhook].sideEffects                                      | `string`  |    ❌    |         ✅         |  `""`   | Define the sideEffects for the webhook [None, NoneOnDryRun]                                        |
| webhook.[webhook-name].webhooks.[webhook].reinvocationPolicy                               | `string`  |    ❌    |         ✅         |  `""`   | Define the reinvocationPolicy for the webhook [Never, IfNeeded]. Only on mutating webhook          |
| webhook.[webhook-name].webhooks.[webhook].timeoutSeconds                                   |   `int`   |    ❌    |         ❌         |  `""`   | Define the timeoutSeconds for the webhook. Between 1 and 30                                        |
| webhook.[webhook-name].webhooks.[webhook].admissionReviewVersions                          |  `list`   |    ✅    |         ❌         |  `[]`   | Define the admissionReviewVersions for the webhook                                                 |
| webhook.[webhook-name].webhooks.[webhook].admissionReviewVersions.[admissionReviewVersion] | `string`  |    ✅    |         ✅         |  `""`   | Define the admissionReviewVersion item for the webhook                                             |
| webhook.[webhook-name].webhooks.[webhook].clientConfig                                     |  `dict`   |    ✅    |         ❌         |  `{}`   | Define the clientConfig for the webhook                                                            |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.caBundle                            | `string`  |    ❌    |         ✅         |  `""`   | Define the caBundle in clientConfig for the webhook                                                |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.url                                 | `string`  |    ❌    |         ✅         |  `""`   | Define the url in clientConfig for the webhook, required if service is not defined in clientConfig |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.service                             |  `dict`   |    ❌    |         ❌         |  `{}`   | Define the service in clientConfig for the webhook, required if url is not defined in clientConfig |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.service.name                        | `string`  |    ✅    |         ✅         |  `""`   | Define the service name in clientConfig for the webhook                                            |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.service.namespace                   | `string`  |    ✅    |         ✅         |  `""`   | Define the service namespace in clientConfig for the webhook                                       |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.service.path                        | `string`  |    ❌    |         ✅         |  `""`   | Define the service path in clientConfig for the webhook                                            |
| webhook.[webhook-name].webhooks.[webhook].clientConfig.service.port                        |   `int`   |    ❌    |         ✅         |  `""`   | Define the service port in clientConfig for the webhook                                            |
| webhook.[webhook-name].webhooks.[webhook].rules                                            |  `list`   |    ✅    |         ❌         |  `[]`   | Define the rules for the webhook                                                                   |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].scope                               | `string`  |    ❌    |         ✅         |  `""`   | Define the scope of the rule for the webhook [Cluster, Namespaced, *]                              |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].apiGroups                           |  `list`   |    ✅    |         ❌         |  `[]`   | Define the apiGroups of the rule for the webhook                                                   |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].apiGroups.[apiGroup]                | `string`  |    ✅    |         ✅         |  `""`   | Define the apiGroup in apiGroups of the rule for the webhook                                       |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].apiVersions                         |  `list`   |    ✅    |         ❌         |  `[]`   | Define the apiVersions of the rule for the webhook                                                 |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].apiVersions.[apiVersion]            | `string`  |    ✅    |         ✅         |  `""`   | Define the apiVersion in apiVersions of the rule for the webhook                                   |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].operations                          |  `list`   |    ✅    |         ❌         |  `[]`   | Define the operations of the rule for the webhook                                                  |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].operations.[operation]              | `string`  |    ✅    |         ✅         |  `""`   | Define the operation in operations of the rule for the webhook                                     |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].resources                           |  `list`   |    ✅    |         ❌         |  `[]`   | Define the resources of the rule for the webhook                                                   |
| webhook.[webhook-name].webhooks.[webhook].rules.[rule].resources.[resource]                | `string`  |    ✅    |         ✅         |  `""`   | Define the resource in resources of the rule for the webhook                                       |

---

Appears in:

- `.Values.webhook`

---

Naming scheme:

- `$FullName-$webhookName` (release-name-chart-name-webhookName)

---

Examples:

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
