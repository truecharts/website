# 服务

每个应用程序都需要接触到某些东西，或是UI、API或其他容器。 oarticles with Kubernetes 我们不直接连接到运行应用程序的容器， 因为这些可能在另一个节点上，或者应用可能有多个“高可用”容器。 相反，我们使用所谓的 `服务`。 服务只是放在“内部装配器”上，它们也保证可以通过(内部！ ) 当健康检查尚未完成(或正在失败)时，DNS名称以及(在某些情况下)阻止流量抵达您的应用程序。

## 两种服务

### 主要服务

每个应用程序都需要有一个主服务，用户(或其他应用程序!)连接的主要内容。 如果它是一个 webUI, 一个 API 、 数据库连接或完全是其他的，那么就没有太大了。 总是需要一种服务。

请记住，每个应用都是不同的， 一些人只有一个服务( *ALWAYS* 必须调用 `main`)，另一些人需要更多的服务(每个人都必须有一个独特的名称)。 每个应用也使用不同的端口，所以请相应更改。

```yaml
  - variable: service
    group: "Networking"
    label: "Configure Service(s)"
    schema:
      type: dict
      attrs:
        - variable: main
          label: "Main Service"
          description: "The Primary service on which the healthcheck runs, often the webUI"
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Enable the service"
                schema:
                  type: boolean
                  default: true
                  hidden: true
              - variable: type
                label: "Service Type"
                description: "ClusterIP's are only internally available, nodePorts expose the container to the host node System, Loadbalancer exposes the service using the system loadbalancer"
                schema:
                  type: string
                  default: "NodePort"
                  enum:
                    - value: "NodePort"
                      description: "NodePort"
                    - value: "ClusterIP"
                      description: "ClusterIP"
                    - value: "LoadBalancer"
                      description: "LoadBalancer"
              - variable: loadBalancerIP
                label: "LoadBalancer IP"
                description: "LoadBalancerIP"
                schema:
                  show_if: [["type", "=", "LoadBalancer"]]
                  type: string
                  default: ""
                  required: true
              - variable: externalIPs
                label: "External IP's"
                description: "External IP's"
                schema:
                  show_if: [["type", "=", "LoadBalancer"]]
                  type: list
                  default: []
                  items:
                    - variable: externalIP
                      label: "External IP"
                      required: true
                      schema:
                        type: string
              - variable: ports
                label: "Service's Port(s) Configuration"
                schema:
                  type: dict
                  attrs:
                    - variable: main
                      label: "Main Service Port Configuration"
                      schema:
                        type: dict
                        attrs:
                          - variable: enabled
                            label: "Enable the port"
                            schema:
                              type: boolean
                              default: true
                              hidden: true
                          - variable: protocol
                            label: "Port Type"
                            schema:
                              type: string
                              default: "HTTP"
                              hidden: false
                              enum:
                                - value: HTTP
                                  description: "HTTP"
                                - value: "HTTPS"
                                  description: "HTTPS"
                                - value: TCP
                                  description: "TCP"
                                - value: "UDP"
                                  description: "UDP"
                          - variable: port
                            label: "Container Port"
                            schema:
                              type: int
                              default: 5076
                              editable: false
                              hidden: true
                          - variable: targetport
                            label: "Target Port"
                            description: "This port exposes the container port on the service"
                            schema:
                              type: int
                              default: 5076
                              editable: true
                              hidden: false
                              required: true
                          - variable: nodePort
                            label: "Node Port (Optional)"
                            description: "This port gets exposed to the node. 仅在服务类型为 NodePort”
                            schema:
                              type : int
                              min: 9000
                              max: 65535
                              default: 36041
                              require: true 仅在服务类型为 NodePort”
                            schema:
                              type : int
                              min: 9000
                              max: 65535
                              default: 36041
                              require: true
```
