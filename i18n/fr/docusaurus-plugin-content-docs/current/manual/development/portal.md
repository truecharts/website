# Bouton du portail

Après l'installation, presque chaque application devrait avoir un bouton "portail". Ce bouton est une façon simple et simplifiée d'entrer dans les applications après l'installation. Cependant, il faut savoir qu'il ne suit pas magiquement les changements à l'intérieur de l'application (par exemple : de http à https).

## exemple.yaml

Chaque fichier questions.yaml doit contenir les extraits suivants pour activer le bouton du portail. Veuillez noter que pour changer `"http"` en `"https"` dans les services. ain.port.protocol si votre application utilise http au lieu de https lorsque vous utilisez "NodePort".

Veuillez également noter que le portail uniquement (!) pointe vers le service principal, le port de service principal et les entrées principales.

```yaml
portails:
  web_portail:
    protocoles:
      - "$kubernetes-resource_configmap_portal_protocol"
    hôte :
      - "$kubernetes-resource_configmap_portal_host"
    ports :
      - "$kubernetes-resource_configmap_portal_port"
        path: "/"

questions:

  - variable: portal
    group: "Container Image"
    label: "Configurer le bouton du portail"
    schema:
      type: dict
      hidden: true
      attrs: true
        - variable: enabled
          label: "Enable"
          description: "enable the portal button"
          schema:
            hidden: true
            editable: false
            type: boolean
            default: true

```

Il y a également des options supplémentaires (avancées) disponibles, qui peuvent être ajoutées sous la partie requise ci-dessus si nécessaire:

**hôte :**

```yaml
        - variable: nom d'hôte
          : "override Host when using NodePort"
          description: "override the host setting when using NodePort. Exemple de cas d'utilisation serait de charger des NodePorts équilibrés.
          schema:
            hidden: true
            editable: false
            type: string
            default: "test.com"
```
