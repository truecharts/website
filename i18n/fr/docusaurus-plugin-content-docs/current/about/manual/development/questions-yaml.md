# Questions.yaml

Questions.yaml est le fichier qui est rendu par TrueNAS pour créer l'interface utilisateur. Lorsque vous ne créez pas de nouveaux graphiques, la plupart de ce que fait ce projet est de colorier des fichiers questions.yaml pour transformer des fichiers de casques existants en applications.

## Syntaxe

Dans ce document, nous vous donnons un court guide de référence (porté depuis IX Officiel) qui définit les paramètres disponibles dans questions.yaml.

### Référence des variables de la question

| Variable                      | Type de texte        | Requis | Libellé                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------- | -------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variable                      | chaîne de caractères | vrai   | définissez le nom de la variable spécifié dans le fichier `values.yaml`.                                                                                                                                                                                                                                                                                              |
| Etiquette                     | chaîne de caractères | vrai   | définir l'étiquette de l'interface.                                                                                                                                                                                                                                                                                                                                   |
| Libellé                       | chaîne de caractères | Faux   | spécifiez la description de la variable.                                                                                                                                                                                                                                                                                                                              |
| Groupe                        | chaîne de caractères | Faux   | regrouper les questions par valeur d'entrée.                                                                                                                                                                                                                                                                                                                          |
| schéma                        | dictionnaire         | vrai   | spécifiez les détails du schéma pour la variable ``                                                                                                                                                                                                                                                                                                                   |
| schema.type                   | chaîne de caractères | vrai   | spécifiez le type de valeur de la variable `` (les types actuels supportés sont string, int, boolean, path, hostpath, list, dict, ipaddr et cron).                                                                                                                                                                                                                    |
| Requis                        | booléen              | Faux   | définir si la variable est requise ou non (true \ false), par défaut à false                                                                                                                                                                                                                                                                                         |
| Valeur par défaut             | objet                | Faux   | spécifiez la valeur par défaut.                                                                                                                                                                                                                                                                                                                                       |
| Longueur minimale             | Indice               | Faux   | longueur minimale de caractères pour la variable de type chaîne de caractères.                                                                                                                                                                                                                                                                                        |
| Longueur maximale             | Indice               | Faux   | longueur maximale de caractères pour la variable de type chaîne de caractères.                                                                                                                                                                                                                                                                                        |
| min                           | Indice               | Faux   | longueur d'entier minimale.                                                                                                                                                                                                                                                                                                                                           |
| schéma.max                    | Indice               | Faux   | longueur entière maximale.                                                                                                                                                                                                                                                                                                                                            |
| schema.enum                   | []dictionnaire       | Faux   | spécifiez les options lorsque le type de variable est `string`, par exemple,<br /><br />enum:<br />- valeur : "RollingUpdate"<br />&nbsp;&nbsp;description : "Créer de nouvelles podes et ensuite tuer les anciens"<br />- valeur : "Recréer"<br />&nbsp;&nbsp;description : "Tuer les pods existants avant de créer de nouveaux" |
| Caractères valides            | chaîne de caractères | Faux   | expression rationnelle pour la validation des caractères d'entrée.                                                                                                                                                                                                                                                                                                    |
| schema.subquestions           | []sous-question      | Faux   | ajouter un tableau de sous-questions.                                                                                                                                                                                                                                                                                                                                 |
| Montrer si                    | chaîne de caractères | Faux   | afficher la variable courante si la condition spécifiée est vraie, par exemple `show_if: [["workloadType", "=", "CronJob"]]`                                                                                                                                                                                                                                          |
| Montrer les sous-questions si | chaîne de caractères | Faux   | afficher les sous-questions si est vrai ou égal à l'une des options. par exemple `show_subquestion_if: "static"`. le système convertira cela au format de filtres spécifié pour `schema.show_if` automatiquement.                                                                                                                                                     |
| schema.attrs                  | []variables          | Faux   | spécifié lorsque `schema.type` est un dictionnaire pour déclarer les attributs autorisés dans le dictionnaire.                                                                                                                                                                                                                                                        |
| Éléments                      | []variables          | Faux   | spécifié lorsque `schema.type` est une liste pour déclarer les attributs autorisés dans la liste.                                                                                                                                                                                                                                                                     |
| privé                         | booléen              | Faux   | spécifié pour déclarer les champs sensibles à l'information.                                                                                                                                                                                                                                                                                                          |
| schema.null                   | booléen              | Faux   | spécifie si la valeur de la variable peut être null. par défaut à false.                                                                                                                                                                                                                                                                                              |

#### Sous-questions

`les sous-questions[]` ne peuvent pas contenir `des sous-questions` ou `montre_sous-questions_si` clés, or toutes les autres clés de la table ci-dessus sont prises en charge. Également les variables ayant la liste `schema.type` ne supportent pas `les sous-questions`.

#### Questions spéciales

Il y a des cas nouveaux où nous aimerions fournir la possibilité de configurer / gérer les ressources pour les charges de travail en obtenant des données du système de manière dynamique. Ainsi, un graphique peut spécifier certaines actions à effectuer par le système pour une variable en définissant une référence. Un exemple illustre mieux ce concept :

```yaml
- variable : volume
  label: "Volume"
  schéma :
    type: dict
    $ref:
      - "normalize/ixVolume"
    attrs:
      - variable: mountPath
        label: "Chemin de montage"
        description: "Chemin du chemin où le volume sera monté à l'intérieur du pod"
        schéma :
          type : chemin : chemin
          requis : vrai
      - variable: nomdededataset
        label: "Nom du dataset"
        schéma:
          type: string
          required: true
```

Dans la variable ci-dessus, nous définissons un `$ref` dans le schéma qui spécifie que le système doit prendre des mesures pour normaliser la valeur spécifiée pour la variable. Dans ce cas spécifique, `ix_volume` est un concept introduit où nous recommandons d'utiliser un volume que nous sommes en mesure d'annuler automatiquement lors de l'annulation de la sortie du graphique. En essence, c'est juste un volume `hostPath` pour lequel le système crée automatiquement le jeu de données spécifié. Nous avons les types d'actions suivants pris en charge dans `$ref` pour le moment :

1. définitions
2. normalise Pour (1), le système mettra automatiquement à jour le schéma pour une définition particulière. Par exemple,

```yaml
- variable: hostInterface
  description : "Veuillez spécifier l'interface hôte"
  label: "Interface hôte"
  schéma :
    type: chaîne de caractère
    requise : true
    $ref:
      - "definitions/interface"
```

Le système remplira automatiquement les interfaces disponibles pour l'utilisateur en fonction des interfaces disponibles sur le système. Pour (2), le système normalisera les valeurs ou effectuera certaines actions telles que décrites plus haut.

#### Sections questions.yaml standardisées

Afin de minimiser la charge de maintenance de notre collection d'applications, nous visons toujours à normaliser autant que possible. Il en va de même pour questions.yaml. Vous trouverez ici des extraits de code normalisés qui devraient être inclus dans chaque application. Sachez que parfois des fonctions spécifiques peuvent ou ne peuvent pas fonctionner complètement. Les laisser sortir, cependant, augmenterait sans cesse la charge de maintenance et souvent cette fonctionnalité sera ajoutée dans le tableau commun de toute façon.

#### Groupes

Pour s'assurer que toutes les applications restent quelque peu les mêmes, nous utilisons une liste de groupes normalisés pour la section des groupes. Veuillez vous assurer d'utiliser ces groupes dans vos applications :

```yaml
groups:
  - name: "Container Image"
    description: "Image to be used for container"
  - name: "Workload Configuration"
    description: "Configure workload deployment"
  - name: "Configuration"
    description: "additional container configuration"
  - name: "Networking"
    description: "Configure Network and Services for container"
  - name: "Storage"
    description: "Persist and share data that is separate from the lifecycle of the container"
  - name: "Resources and Devices"
    description: "Specify resources/devices to be allocated to workload"
  - name: "Ingress Configuration"
    description: "Ingress Configuration"
  - name: "Security"
    description: "Configure security context"
  - name: "Advanced"
    description: "Advanced Configuration"
  - name: "WARNING"
    description: "WARNING"
```

#### Options de configuration générales

Ces options sont toujours\* incluses parce que presque chaque graphique (finalement) a une utilisation pour eux et/ou d'autres parties du graphique commun en dépendent. Elles sont appelées options générales, car elles affectent les fonctionnalités de base d'un graphique. Par exemple : Variables d'environnement utilisateur personnalisées, permissions et fuseaux horaires.

\*`PUID`, `PGID`, `UMASK` ne sont inclus que lorsqu'ils sont nécessaires.

```yaml
  - variable : env
    groupe : "Configuration"
    label: "Environnement d'image"
    schéma :
      additional_attrs: true
      type: dict
      attrs:
        - variable: TZ
          label: "Fuseau horaire"
          schéma :
            type: chaîne
            par défaut : "Etc/UTC"
            $ref:
        - "definitions/timezone"
        - variable: PUID
          label: "PUID"
          description: "Définit l'env PUID env var pour LinuxServer. o (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: PGID
          label: "PGID"
          description: "Définit la variable PGID pour LinuxServer. o (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: UMASK
          label: "UMASK"
          description: "Définit la variable UMASK env pour LinuxServer. o (compatible) containers"
          schema:
            type: string
            default: "002"

  # Configure Custom Environment Variables
  - variable: environmentVariables
    label: "Image environment"
    group: "Configuration"
    schema:
      type: list
      default: []
      items:
        - variable: environmentVariable
          label: "Environment Variable"
          schema:
            type: dict
            attrs:
              - variable: name
                label: "Name"
                schema:
                  type: string
              - variable: value
                label: "Value"
                schema:
                  type: string : string
```

#### Options de configuration du contexte de sécurité

```yaml
  # Enable privileged
  - variable: securityContext
    group: "Security"
    label: "Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: privileged
          label: "Enable privileged mode for Common-Chart based charts"
          schema:
            type: boolean
            default: false
  # Set Pod Security Policy
  - variable: podSecurityContext
    group: "Security"
    label: "Pod Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: runAsNonRoot
          label: "runAsNonRoot"
          schema:
            type: boolean
            default: true
        - variable: runAsUser
          label: "runAsUser"
          description: "The UserID of the user running the application"
          schema:
            type: int
            default: 568
        - variable: runAsGroup
          label: "runAsGroup"
          description: The groupID this App of the user running the application"
          schema:
            type: int
            default: 568
        - variable: fsGroup
          label: "fsGroup"
          description: "The group that should own ALL storage."
          schema:
            type: int
            default: 568
        - variable: fsGroupChangePolicy
          label: "Quand devons-nous prendre la propriété?"
          schéma :
            type: string
            default: "OnRootMismatch"
            enum:
              - valeur: "OnRootMismatch"
                description: "OnRootMismatch"
              - valeur: "Toujours"
                description: "Toujours"
```
