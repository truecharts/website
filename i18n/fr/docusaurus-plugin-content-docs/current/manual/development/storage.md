# Stockage

Cet article sert d'extension de développement à l'article de stockage disponible [ici](https://wiki.truecharts.org/general/storage/)

## Stockage et Graphique Communs

Pour toutes ces solutions de stockage, nous avons besoin que le diagramme commun soit ajouté à l'application. La carte commune gère à la fois la connexion/ajout de stockage au conteneur et la rotation des tâches spéciales de k8s pour corriger les permissions si demandé pour le stockage personnalisé.

### Stockage persistant intégré

Lors de l'ajout d'une application, il y a presque toujours certains dossiers qui sont requis pour des performances d'applications solides. Par exemple, les fichiers de configuration qui devraient être persistants à travers les redémarrages.

Pour ces stockages, nous pouvons facilement ajouter des valeurs de correctifs dans l'interface utilisateur, ces paramètres ne peuvent pas être désactivés ou supprimés et, par défaut, de préférence, être limité à la classe de stockage "interne" Empêcher l'utilisateur de les désactiver, s'assurer que les utilisateurs ne suppriment pas le stockage (par erreur).

```yaml
  - variable: persistance
    label: "Stockage persistant intégré"
    description : "Service Websocket"
    groupe : "Stockage"
    schéma :
      type : dicter
      attrs:
        - variable: données
          label: "App Config Storage"
          description : "Stocke la configuration de l'application."
          schéma :
            type: dict
            attrs:
              - variable: activé
                label: "Activer le stockage"
                schéma :
                  type: booléen
                  default: true
                  hidden: false
              - variable: storageClass
                label: "Type de stockage"
                description : " Avertissement : Tout ce qui n'est pas SCALE-ZFS cassera l'annulation!
                schema:
                  type: string
                  default: "SCALE-ZFS"
              - variable: mountPath
                label: "mountPath"
                description: "Path inside the container the storage is mounted"
                schema:
                  type: string
                  default: "/config"
                  hidden: true
              - variable: emptyDir
                label: "EmptyDir Volume"
                schema:
                  type: dict
                  hidden: false
                  attrs:
                    - variable: enabled
                      label: "Use emptyDir volume"
                      schema:
                        type: boolean
                        default: false
                        hidden: false
                        show_subquestions_if: true
                        subquestions:
                          - variable: medium
                            label: "EmptyDir Medium"
                            schema:
                              type: string
                              default: ""
                              enum:
                                - value: ""
                                  description: "Default"
                                - value: "Memory"
                                  description: "Memory"
              - variable: accessMode
                label: "Access Mode (Advanced)"
                description: "Allow or disallow multiple PVC's writhing to the same PVC"
                schema:
                  type: string
                  default: "ReadWriteOnce"
                  enum:
                    - value: "ReadWriteOnce"
                      description: "ReadWriteOnce"
                    - value: "ReadOnlyMany"
                      description: "ReadOnlyMany"
                    - value: "ReadWriteMany"
                      description: "ReadWriteMany"
              - variable: size
                label: "Size quotum of storage"
                schema:
                  type: string
                  default: "100Gi"
```

### Montures de stockage personnalisées illimitées

Nous supportons la présentation à l'utilisateur d'une liste de style "Faites-le vous-même" dans lequel l'utilisateur peut ajouter des chemins illimités sur le système hôte à monter. Il devrait toujours être inclus dans n'importe quelle application, afin de donner aux utilisateurs la possibilité de personnaliser les choses comme ils veulent.
