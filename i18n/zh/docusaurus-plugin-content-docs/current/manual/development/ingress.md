# 会议

会议是我们在用户界面和文档的用户面中所称的“逆向代理”。 请注意那些指同一系统。 简单地说，仅仅是Kubernetes连接外面和在容器中运行的应用程序的方法。

## 批发类型

我们目前支持：

- 通过 Ingres 的 HTTP
- 通过 Traefik IngressRoute (HTTP-IR) 的 HTTP
- 通过 Traefik IngressRouteTCP
- 通过 Traefik IngressRouteUDP 的 UDP

从问题.yaml 和 UI 可以通过选择另一个“类型”来更改它们。 但是，在这种情况下，“侵略路线和国会”是完全不同的行为，有一个单独的创作过程。 纯HTTP 错误不必在 HTTP IR 中存在。

同样重要的是要注意到TCP(甚至更多：UDP)拥有的选项较少。 下面的示例配置基本上包含了对现有和合理性的概述。

### 会议和服务

在你开始创建问题.yaml中的摄入之前，知道什么是重要的。 违规行为是送到交通工具之外的地方，而后者又将交通转到实际的集装箱。

这意味着每个容器都需要知道如何接近他们的服务。 如果不这样做，那就错了。

为了确保这一点，建议您保持您的侵入名称与您服务的名称相同。 我们确保导入将自动检测（并连接到具有相同名称的服务的主要端口。

但：如果您需要做不同的事，需要连接到额外服务和/或连接到二级端口， 您可以在问题中手动设置服务名称和服务端口两者。 然而，我们建议只在绝对必要时才这样做！

### 主要大会

主要的国会和主要服务部门在我们的标准化工作中发挥着重要作用。 在主要服务用于健康检查和“门户”按钮的地方，主要的信息只是用于门户按钮。

但是，由于维护者期望新的功能会连接到主要服务和主要用途， 如果您决定绕过/忽略这些，它将造成问题。

### 标准/实例

我们试图保持尽可能多的标准化问题.yaml格式，以确保（全时）编辑尽可能简单。

#### HTTP Incongress

```yaml
  - variable: ingress
    label: "Ingress Configuration"
    group: "Ingress Configuration"
    schema:
      type: dict
      attrs:
        - variable: main
          label: "Main Ingress"
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Enable Ingress"
                schema:
                  type: boolean
                  default: false
                  show_subquestions_if: true
                  subquestions:
                    - variable: hosts
                      label: "Hosts"
                      schema:
                        type: list
                        default: []
                        items:
                          - variable: host
                            label: "Host"
                            schema:
                              type: dict
                              attrs:
                                - variable: host
                                  label: "HostName"
                                  schema:
                                    type: string
                                    default: ""
                                    required: true
                                - variable: paths
                                  label: "Hosts"
                                  schema:
                                    type: list
                                    default: []
                                    items:
                                      - variable: path
                                        label: "path"
                                        schema:
                                          type: string
                                          required: true
                                          hidden: false
                                          default: "/"
                                      - variable: pathType
                                        label: "pathType"
                                        schema:
                                          type: string
                                          required: true
                                          hidden: false
                                          default: "Prefix"
                    - variable: tls
                      label: "TLS-Settings"
                      schema:
                        type: list
                        default: []
                        items:
                          - variable: hosts
                            label: "Certificate Hosts"
                            schema:
                              type: list
                              default: []
                              items:
                                - variable: host
                                  label: "Host"
                                  schema:
                                    type: string
                                    default: ""
                                    required: true
                          - variable: scaleCERT
                            label: "Select TrueNAS SCALE Certificate"
                            schema:
                              type: int
                              $ref:
                                - "definitions/certificate"

```

#### TCP Incongress

```yaml
        - variable: tcp
          label: "TCP Reverse Proxy Configuration"
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Enable TCP Reverse Proxy"
                schema:
                  type: boolean
                  default: false
                  show_subquestions_if: true
                  subquestions:
                    - variable: type
                      label: "Select Reverse Proxy Type"
                      schema:
                        type: string
                        default: "TCP"
                        required: true
                        editable: false
                        hidden: true
                    - variable: serviceName
                      label: "Service name to proxy to"
                      schema:
                        hidden: true
                        editable: false
                        type: string
                        default: ""
                    - variable: entrypoint
                      label: "Select Entrypoint"
                      schema:
                        type: string
                        default: "torrent-tcp"
                        required: true
                        enum:
                          - value: "torrent-tcp"
                            description: "Torrent-TCP: port 51413"
```

#### UDP 进化

```yaml
        - variable: udp
          label: "UDP Reverse Proxy Configuration"
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Enable UDP Reverse Proxy"
                schema:
                  type: boolean
                  default: false
                  show_subquestions_if: true
                  subquestions:
                    - variable: type
                      label: "Select Reverse Proxy Type"
                      schema:
                        type: string
                        default: "UDP"
                        required: true
                        editable: false
                        hidden: true
                    - variable: serviceName
                      label: "Service name to proxy to"
                      schema:
                        hidden: true
                        editable: false
                        type: string
                        default: ""
                    - variable: entrypoint
                      label: "Select Entrypoint"
                      schema:
                        type: string
                        default: "torrent-udp"
                        required: true
                        enum:
                          - value: "torrent-udp"
                            description: "Torrent-UDP: port 51413"
```

### 其他可选方案

还有几种其他选项很少使用(如果有的话)。

#### 服务端口

```yaml
                     - 变量：servicePort
                       标签：“服务端口到代理”
                       schema：
                         隐藏：true
                         可编辑：false
                         类型：int
                         默认值：80
```

#### serviceKind

```yaml
                    - 变量: serviceKind
                      label: "Service Kind to proxy to"
                      schema:
                        隐藏: true
                        可编辑: false
                        type : string
                        default: ""
```

### 外部服务

外部服务的选择实际上主要是一种“头脑下”，而这种服务只能创造一种很小的(最低)服务。

```yaml
  - variable: externalServices
    label: "(Advanced) Add External Services"
    group: "Advanced"
    schema:
      type: list
      default: []
      items:
        - variable: externalService
          label: "External Service"
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Enable Web Reverse Proxy"
                schema:
                  type: boolean
                  hidden: true
                  editable: false
                  default: true
              - variable: type
                label: "Reverse Proxy Type"
                schema:
                  type: string
                  default: "HTTP"
                  hidden: true
                  editable: false
                  required: true
              - variable: serviceName
                label: "Service name to proxy to"
                schema:
                  hidden: true
                  editable: false
                  type: string
                  default: ""
              - variable: serviceTarget
                label: "IP Address of the external service"
                schema:
                  hidden: false
                  editable: true
                  required: true
                  type: string
                  default: "192.168.0.0"
              - variable: servicePort
                label: "External Service Port"
                description: "The port on the external service you want to proxy"
                schema:
                  hidden: false
                  required: true
                  editable: true
                  type: int
                  default: 80
              - variable: serviceType
                label: "Connection Type"
                description: "Connection Type between Traefik and the external service"
                schema:
                  hidden: false
                  editable: true
                  required: true
                  default: "HTTP"
                  type: string
                  enum:
                    - value: "HTTP"
                      description: "HTTP"
                    - value: "HTTPS"
                      description: "HTTPS"
              - variable: serviceKind
                label: "Service Kind to proxy to"
                schema:
                  hidden: true
                  editable: false
                  type: string
                  default: ""
              - variable: entrypoint
                label: "Select Entrypoint"
                schema:
                  type: string
                  default: "websecure"
                  required: true
                  enum:
                    - value: "websecure"
                      description: "Websecure: HTTPS/TLS port 443"
              - variable: host
                label: "Domain Name"
                required: true
                schema:
                  type: string
              - variable: path
                label: "path"
                schema:
                  type: string
                  required: true
                  hidden: false
                  default: "/"
              - variable: certType
                label: "Select Certificate Type"
                schema:
                  type: string
                  default: "selfsigned"
                  enum:
                    - value: ""
                      description: "No Encryption/TLS/Certificates"
                    - value: "selfsigned"
                      description: "Self-Signed Certificate"
                    - value: "ixcert"
                      description: "TrueNAS SCALE Certificate"
              - variable: certificate
                label: "Select TrueNAS SCALE Certificate"
                schema:
                  type: int
                  show_if: [["certType", "=", "ixcert"]]
                  $ref:
                    - "definitions/certificate"
              - variable: authForwardURL
                label: "Forward Authentication URL"
                schema:
                  type: string
                  default: ""
```
