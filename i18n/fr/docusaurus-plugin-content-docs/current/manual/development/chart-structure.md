# Structure de cartes d'échelle TrueNAS

Il s'agit d'un synopsis général sur la structure d'une application SCALE et/ou d'un heaume graphique, il ne reflète pas directement les paramètres spécifiques à TrueCharts.

Les fichiers suivants sont généralement considérés comme un diagramme de casque "normal" :

```text
cartes/<train>/<chart name>/
  cartes/ # Répertoire contenant des diagrammes de dépendances
  . aml # Fichier d'information du heaume requis
  README. d # Facultatif : fichier Helm Readme (sera rendu également dans l'interface utilisateur de la SCALE TrueNAS)
  templates/ # Un répertoire de modèles qui, lorsqu'il est combiné avec des valeurs. ml va générer des valeurs K8s YAML
  . aml # Les valeurs de configuration par défaut pour ce graphique
```

Les fichiers suivants sont spécifiques pour TrueNAS SCALE:

```text
cartes/<train>/<chart name>/SCALE/
  app-readme. d # Spécifique à l'échelle TrueNAS : Lisez le fichier à afficher dans l'interface utilisateur de l'échelle TrueNAS, générée automatiquement
  questions. aml # Spécifique à l'échelle TrueNAS : Fichier contenant des questions pour l'interface utilisateur d'échelle TrueNAS
  ix_values. aml # Valeurs de configuration cachées lors de l'installation à l'aide de l'élément TrueNAS SCALE
  . aml # Contient des informations génériques sur l'application pour l'interface d'échelle TrueNAS
```

*Reportez-vous au tableau amont [de référence de développeur](https://helm.sh/docs/chart_template_guide/) pour une visite complète des cartes en développement.*

Pour convertir un graphique en amont afin de tirer parti des UX améliorés de TrueNAS SCALE, créez d'abord un fichier `item.yaml`. Ce fichier, entre autres informations sur les articles du catalogue, fournit une liste des catégories dans lesquelles ce graphique s’intègre. Cela aide les utilisateurs à naviguer et à filtrer lors de la navigation dans l'interface du catalogue.

`$ cat charts/<train>/<chart name>/SCALE/item.yaml`

```yaml
Catégories :
  - générique
icon_url: "http://ix_url"
```

Ensuite, ajoutez un fichier `questions.yaml` pour demander quelque chose à l'utilisateur.

```yaml
groups:
  - name: "Container Images"
    description: "Image to be used for container"
questions:
  - variable: image
    description: "Docker Image Details"
    group: "Container Images"
    schema:
      type: dict
      required: true
      attrs:
        - variable: repository
          description: "Docker image repository"
          label: "Image repository"
          schema:
            type: string
            required: true
        - variable: tag
          description: "Tag to use for specified image"
          label: "Image Tag"
          schema:
            type: string
            default: "latest"
        - variable: pullPolicy
          description: "Docker Image Pull Policy"
          label: "Image Pull Policy"
          schema:
            type: string
            default: "IfNotPresent"
            enum:
              - value: "IfNotPresent"
                description: "Only pull image if not present on host"
              - value: "Always"
                description: "Always pull image even if present on host"
              - value: "Never"
                description: "Never pull image even if it's not present on host"
```

Ce qui précède demandera à l'utilisateur avec 2 champs de texte et une liste déroulante dans l'interface utilisateur pour obtenir les détails de la configuration de l'image dans un diagramme de casque. *Plus d'informations sur questions.yaml est disponible [ici](https://wiki.truecharts.org/development/questions-yaml/)*
