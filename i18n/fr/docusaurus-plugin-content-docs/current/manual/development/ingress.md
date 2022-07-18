# Ingressage

Ingress est ce que nous appelons "Reverse Proxy" dans l'interface utilisateur et dans le côté utilisateur de la documentation. Sachez que ces derniers se réfèrent au même système. Un congrès est, simplement, juste des Kubernetes moyen de se connecter à l'extérieur à des applications fonctionnant dans des conteneurs.

## Types d'Ingress

Nous prenons actuellement en charge :

- HTTP via Ingres
- HTTP via Traefik IngressRoute (HTTP-IR)
- TCP via Traefik IngressRouteTCP
- UDP via Traefik IngressRouteUDP

À partir de questions.yaml et de l'interface utilisateur, ils peuvent être modifiés en sélectionnant un autre "Type". Cependant, sous le capot IngressRoutes et Ingress sont des bêtes totalement différentes et ont un processus de création distinct. Les erreurs pour le HTTP brut ne doivent PAS être présentes dans HTTP-IR.

Il est également important de noter que TCP (et plus encore: UDP) a moins d'options disponibles. Les exemples de configurations ci-dessous contiennent une vue d'ensemble presque complète de ce qui est actuellement disponible et raisonnable.

### Ingress et Services

Il est important de savoir ce que fait Ingress avant de commencer à créer des ingresses dans questions.yaml. Les ingresses envoient hors Traffic à un service kubernetes qui à son tour transfère le trafic vers les conteneurs réels.

Cela signifie que chaque conteneur a besoin de savoir comment atteindre son service. Dans le cas contraire, les choses tournent mal.

Pour ce faire, il est conseillé de conserver les noms de vos Ingresses au même titre que les noms de vos services. Nous nous sommes assurés que l'entrée détecterait automatiquement (et se connecter) le port principal d'un service avec le même nom.

Cependant, si vous devez le faire différemment, vous devez vous connecter à des services supplémentaires et/ou vous connecter à un port secondaire. vous pouvez définir manuellement le serviceName et le servicePort dans les questions. aml. Nous conseillons toutefois de ne le faire que si absolument nécessaire!

### Le congrès principal

Le principal service Ingress et Main joue un rôle important dans notre normalisation. Lorsque le service principal est utilisé pour les contrôles de santé et le bouton "portail", le principal Ingress est juste utilisé pour le bouton du portail.

Cependant, étant donné que les responsables s'attendent à ce que de nouvelles fonctionnalités se connectent au service principal et aux principales correspondances, cela causera des problèmes si vous décidez de contourner/ignorer ces problèmes.

### Standards/Exemples

Nous nous efforçons de maintenir le plus possible un format standard de questions.yaml afin de nous assurer que l'édition (volume) reste aussi simple que possible.

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

#### Ingress TCP

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

#### Ingress UDP

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

### Autres options d'Ingress

Il y a quelques autres options qui sont rarement utilisées (si jamais).

#### Port du service

```yaml
                     - variable : label servicePort
                       : "Port de service à proxy vers"
                       schéma :
                         masqué : true
                         éditable: false
                         type : int
                         par défaut : 80
```

#### serviceKind

```yaml
                    - variable: serviceKind
                      label: "Service Type à proxy vers"
                      schéma :
                        masqué : true
                        éditable: false
                        type: string
                        default: ""
```

### Services externes

L'option externalServices est en fait principalement un Ingress "sous le capot", qui crée juste un très petit (minimal).

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
