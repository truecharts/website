# Dienste

mit Kubernetes verbinden wir uns nicht direkt mit den Containern mit der App, weil diese auf einem anderen Knoten liegen könnten oder es mehrere "hochverfügbare" Container für die App gibt. Stattdessen verwenden wir `Dienste`. Die Dienste werden einfach als "Interne Load-Balancers" bezeichnet, sie werden auch durch (interne) garantiert erreichbar sein. DNS-Name und (in einigen Fällen) verhindern, dass der Datenverkehr Ihre App erreicht, wenn der Gesundheitscheck noch nicht beendet ist (oder fehlschlägt).

## Zwei Arten von Dienstleistungen

### Hauptdienst

Jede App muss einen Hauptdienst haben, mit dem Nutzer (oder andere Apps!) verbinden. Keine Mater, wenn es sich um ein WebUI, eine API, eine Datenbankverbindung oder etwas ganz anderes handelt, ein Service ist immer erforderlich.

Bitte beachten Sie, dass jede App anders ist, einige haben nur einen Dienst (die *ALLES* muss `main`genannt werden) und andere benötigen mehr (die jeweils einen eindeutigen Namen haben). Jede App verwendet auch verschiedene Ports, daher ändern Sie bitte dementsprechend.

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
                            description: "This port gets exposed to the node. Nur berücksichtigt, wenn Service Typ NodePort"
                            Schema:
                              type: int
                              min: 9000
                              max: 65535
                              default: 36041
                              required: true
```
