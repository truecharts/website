# Disposition du graphique yaml

Chez TrueCharts, nous essayons de standardiser certains fichiers, ce qui nous permet d'apporter des modifications à ces graphiques en vrac avec moins de risques d'erreurs. Chart.yaml est l'un de ces fichiers. Dans cette documentation, nous vous expliquerons les options de mise en page standardisées. Pour un exemple de mise en page, veuillez consulter notre modèle [Chart.yaml standard](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml)

## Présentation expliquée

```yaml
apiVersion: La version de l'API graphique (obligatoire)
kubeVersion: Une plage SemVer de versions compatibles Kubernetes (facultatives)
: Le nom du graphique (obligatoire)
version : Une version SemVer 2 (requise)
version amont : A SemVer 2 version, tel qu'utilisé par une source de la carte heaume amont (optionnelle)
appVersion: La version de l'application qui contient (optionnelle). Ne doit pas être SemVer. Devis recommandés.
description : Une description en une seule phrase de ce projet (facultatif)
type : le type du graphique (facultatif)
déprécié : si ce graphique est obsolète (facultatif, boolean)
Accueil : L'URL de la page d'accueil de ce projet (facultatif)
icône : Une URL vers une image SVG ou PNG à utiliser comme icône (facultatif).
mots-clés :
  - Une liste de mots-clés à propos de ce projet (facultatif)
sources :
  - Une liste d'URLs au code source pour ce projet (facultatif)
dépendances :
  - nom: Le nom du graphique (nginx)
    référentiel: L'URL du référentiel ("https://example. Version d'alias ("@repo-name")
    : La version du graphique ("1.2. ")
    condition: (optionnel) Un chemin yaml qui résout à un booléen, utilisé pour activer/désactiver les graphiques (par exemple sous-chart1. Chaque élément peut être une chaîne de caractères ou une paire d'éléments de sous-liste enfant/parent.
    alias : (optionnel) Alias à utiliser pour le graphique. Utile lorsque vous devez ajouter le même graphique plusieurs fois
mainteneurs : # (facultatif)
  - nom: Le nom des mainteneurs (requis pour chaque mainteneur)
    email : L'email des mainteneurs (facultatif pour chaque mainteneur)
    url: Une URL pour le responsable (facultatif pour chaque mainteneur)
annotations :
  exemple : Une liste d'annotations clés par nom (facultatif).
```

### Commenter

Dans la description ci-dessus, il y a beaucoup de valeurs qui ne sont pas réellement utilisées. Certains d'entre eux, comme `déprécié`, nous avons juste mis à false. Alors que d'autres, comme les annotations `` sont commentées.

Veuillez vous référer à notre modèle [Chart.yaml standard](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml) pour voir quelles valeurs inutilisées ont besoin de quel traitement.

### Dépendances

Nous nous attendons à ce que chaque graphique utilise notre Graphique Commun, à moins qu'il ne soit absolument impossible de le faire. Cela signifie également que nous nous attendons à ce que la carte commune soit toujours la première dépendance de la liste. Cela nous permet de mettre à jour facilement toutes les références courantes de graphiques en vrac.

Toutes les autres dépendances devraient être listées par ordre alphabétique.

### Mainteneurs

Le seul responsable devrait toujours être TrueCharts, car l'équipe principale de TrueCharts est censée intervenir si les autres responsables ne parviennent pas à maintenir leur travail. Un exemple de la façon de lister TrueCharts en tant que mainteneur est disponible dans notre template standard Chart.yaml [](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml).
