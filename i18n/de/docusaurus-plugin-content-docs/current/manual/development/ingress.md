# Einzug

Einsehen ist das, was wir "Reverse Proxy" in der Benutzeroberfläche und in der Benutzerseite der Dokumentation nennen. Bitte beachten Sie, dass sich diese auf dasselbe System beziehen. Ein Ingress ist einfach ausgedrückt, nur Kubernetes kann Außenseite mit Apps verbinden, die in Containern laufen.

## Eintrittsarten

Wir unterstützen derzeit:

- HTTP via Ingres
- HTTP via Traefik IngressRoute (HTTP-IR)
- TCP via Traefik IngressRouteTCP
- UDP via Traefik IngressRouteUDP

Von questions.yaml und dem UI können diese mit der Auswahl eines anderen "Typs" geändert werden. Unter der Haube sind IngressRoutes und IngressRoutes völlig unterschiedliche Tiere und haben einen separaten Kreationsprozess. Fehler für Plain HTTP müssen NICHT in HTTP-IR vorhanden sein.

Es ist auch wichtig zu beachten, dass TCP (und sogar mehr: UDP) weniger Optionen zur Verfügung haben. Die untenstehenden Beispielkonfigurationen enthalten einen weitgehend vollständigen Überblick über die aktuell verfügbaren und vertretbaren Möglichkeiten.

### Einzug und Dienstleistungen

Es ist wichtig zu wissen, was Ingress tut, bevor Sie anfangen, ingresses in questions.yaml zu erstellen. Ingresses senden außerhalb des Verkehrs, zu einem kubernetes Service, der wiederum den Verkehr zu den eigentlichen Containern weiterleitet.

Das bedeutet, dass jeder Container wissen muss, wie er seinen Service erreichen kann. Andernfalls gehen die Dinge schief.

Um dies sicherzustellen, ist es ratsam, die Namen Ihrer Ingresses mit den Namen Ihrer Dienste zu behalten. Wir haben sichergestellt, dass die ingress automatisch den Hauptport eines Dienstes mit dem gleichen Namen erkennt (und sich mit ihm verbindet).

Fehler: Falls Sie dies anders tun müssen, müssen Sie sich mit Zusätzlichen Services verbinden und/oder sich mit einem sekundären Port verbinden Sie können sowohl den serviceName als auch den servicePort in Fragen manuell einstellen. aml. Wir raten jedoch, dies nur zu tun, wenn es absolut notwendig ist!

### Die Hauptinfalle

Der Hauptservice von Ingress und Main spielt eine wichtige Rolle bei der Standardisierung. Wo der Haupt-Service für Gesundheitschecks und den "Portal"-Button verwendet wird, wird der Haupt-Ingress nur für den Portal-Button verwendet.

Wie die Maintainer erwarten, dass sich neue Funktionen mit dem Hauptdienst und den Hauptingress verbinden, es wird zu Problemen führen, wenn Sie sich entschließen, diese zu umgehen/zu ignorieren.

### Standards/Beispiele

Wir bemühen uns, so viel wie möglich von einem standardisierten Format von questions.yaml zu erhalten, um sicherzustellen, dass die Bearbeitung so einfach wie möglich bleibt.

#### HTTP-Einzug

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

#### TCP Einzug

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

#### UDP Einzug

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

### Andere Einstiegsoptionen

Es gibt einige andere Optionen, die selten (wenn überhaupt) verwendet werden.

#### servicePort

```yaml
                     - Variable: servicePort
                       Label: "Service Port to proxy to"
                       Schema:
                         hidden: true
                         editierbar: false
                         type: int
                         default: 80
```

#### serviceKind

```yaml
                    - Variable: serviceKind
                      label: "Service Kind zum Proxy zu"
                      Schema:
                        versteckt: true
                        editierbar: false
                        type: string
                        default: ""
```

### Externe Dienste

Die Option externalServices ist eigentlich meistens ein Ingress "unter der Haube", die nur einen sehr kleinen (minimalen) Service schafft.

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
