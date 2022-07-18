# Progreso

Ingress es lo que llamamos "Reverse Proxy" en la interfaz de usuario y en el lado de usuario de la documentación. Les ruego que tengan en cuenta que se refieren al mismo sistema. Un Ingress es, simplemente, sólo la forma de Kubernetes de conectar al exterior con aplicaciones que se ejecutan en contenedores.

## Tipos de Ingress

Actualmente soportamos:

- HTTP vía Ingres
- HTTP vía Traefik IngressRoute (HTTP-IR)
- TCP vía Traefik IngressRouteTCP
- UDP vía Traefik IngressRouteUDP

De questions.yaml y la interfaz de usuario, estos se pueden cambiar seleccionando otro "Tipo". Sin embargo, bajo la capilla IngressRoutes e Ingress son bestias totalmente diferentes y tienen un proceso de creación independiente. Los errores para HTTP Plano NO tienen que estar presentes en HTTP-IR.

También es importante tener en cuenta que TCP (y aún más: UDP) tienen menos opciones disponibles. Las configuraciones de ejemplo a continuación contienen una visión general de lo que actualmente está disponible y razonable.

### Progreso y servicios

Es importante saber qué hace Ingress antes de empezar a crear ingresos en questions.yaml. Ingresa enviar fuera de Traffic, a un servicio de kubernetes que a su vez reenvía tráfico a los contenedores actuales.

Esto significa que cada contenedor necesita saber cómo llegar a su Servicio. Si no lo hacen, las cosas van mal.

Para asegurar esto, se aconseja mantener los nombres de sus Ingresos como los de sus servicios. Nos aseguramos de que el progreso detecte automáticamente (y conecte) el puerto principal de un Servicio con el mismo nombre.

Sin embargo: En caso de que necesite hacer esto de forma diferente, necesita conectarse a Servicios adicionales y/o necesidad de conectarse a un puerto secundario, puede configurar manualmente tanto el serviceName como el servicePort en preguntas. aml. Sin embargo, aconsejamos que sólo lo haga si es absolutamente necesario.

### El progreso principal

El principal servicio de Ingress y Principal desempeña un papel importante en nuestra estandarización. Cuando el Servicio principal se utiliza para los controles de salud y el botón "portal", el Ingress principal se utiliza para el botón portal.

Sin embargo: Como los mantenedores esperan que nuevas características se conecten al servicio principal y las entradas principales, causará problemas si decide eludirlos/ignorarlos.

### Estándares/Ejemplos

Intentamos mantener la mayor parte de un formato estandarizado de questions.yaml posible, para asegurar que la edición a granel se mantenga lo más fácil posible.

#### Ingress HTTP

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

#### Progreso TCP

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

#### Progreso UDP

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

### Otras opciones de Ingress

Hay algunas otras opciones que rara vez (si es que nunca) se utilizan.

#### puerto de servicio

```yaml
                     - variable: servicePort
                       label: "Service Port to proxy to"
                       schema:
                         hidden: true
                         editable: false
                         type: int
                         default: 80
```

#### serviceKind

```yaml
                    - variable: serviceKind
                      label: "Service Kind to proxy to"
                      schema:
                        hidden: true
                        editable: false
                        type: string
                        default: ""
```

### Servicios externos

La opción Servicios externos, en realidad es en realidad un Ingress "bajo el capó" que sólo crea un servicio muy pequeño (mínimo).

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
