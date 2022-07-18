# Servicios

Cada aplicación necesita estar expuesta a algo, ya sea una interfaz de usuario, API u otros contenedores. owever with Kubernetes we don't directly connect to the containers running the App, porque estos pueden estar en otro nodo o puede haber múltiples contenedores "de alta disponibilidad" para la aplicación. En su lugar, usamos lo que se llama `Servicios`. Los servicios son simplemente "Balanceadores de Carga Interno", también garantizados para ser alcanzables (¡interna!) El nombre DNS y (en algunos casos) impiden que el tráfico llegue a tu aplicación cuando el chequeo de salud aún no está terminado (o está fallando).

## Dos tipos de servicios

### Servicio Principal

Cada aplicación es necesaria para tener un servicio principal, lo principal con lo que los usuarios (¡u otras aplicaciones!) conectan. No importa si es un webUI, una API, una conexión a base de datos o algo totalmente distinto, Siempre se requiere un servicio.

Ten en cuenta que cada aplicación es diferente, algunos solo tienen un servicio (que *SIEMPRE* tiene que ser llamado `principal`) y otros necesitan más (que cada uno debe tener un nombre único). Cada aplicación también utiliza diferentes puertos, así que por favor modifíquelo en consecuencia.

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
                            description: "This port gets exposed to the node. Solo se considera cuando el tipo de servicio es NodePort"
                            schema:
                              type: int
                              min: 9000
                              max: 65535
                              default: 36041
                              required: true
```
