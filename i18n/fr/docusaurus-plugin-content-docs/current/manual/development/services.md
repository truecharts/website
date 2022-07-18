# Services

avec Kubernetes nous ne nous connectons pas directement aux conteneurs exécutant l'App, parce que ceux-ci peuvent être sur un autre noeud ou qu'il peut y avoir plusieurs conteneurs "high available" pour l'application. Au lieu de cela, nous utilisons ce qui est appelé `Services`. Les services sont simplement mis "Répartiteurs de charge interne", ils sont également garantis d'être joignables par (intérieur!) Le nom DNS et (dans certains cas) empêchent le trafic d'atteindre votre application lorsque le test de santé n'est pas encore terminé (ou qu'il échoue).

## Deux types de services

### Service principal

Chaque application est requise pour avoir un service principal, la chose principale avec laquelle les utilisateurs (ou d'autres applications!) se connectent. Pas de mater si c'est un webUI, une API, une connexion à une base de données ou quelque chose d'autre, un service est toujours nécessaire.

N’oubliez pas que chaque application est différente, certains ont juste un service (qui *TOUJOURS* doit être appelé `principal`) et d'autres ont besoin de plus (chacun ayant un nom unique). Chaque application utilise également des ports différents, donc veuillez modifier en conséquence.

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
                            description: "This port gets exposed to the node. Seulement pris en compte lorsque le type de service est NodePort"
                            schéma :
                              type: int
                              min: 9000
                              max : 65535
                              par défaut : 36041
                              requis : vrai
```
