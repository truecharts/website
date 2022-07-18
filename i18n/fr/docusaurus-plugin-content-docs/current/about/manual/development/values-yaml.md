# Fichiers Values.yaml

Les fichiers Values.yaml contiennent généralement toujours des paramètres de configuration pour les graphiques de casque, TrueCharts n'est pas différent. Cependant, nous avons plusieurs fichiers valeurs.yaml différents, avec différents objectifs. Parce que la SCALE de TrueNAS fonctionne légèrement différemment des casques standards

## Les fichiers

### values.yaml

Ce fichier contient la configuration par défaut lors de l'exécution de l'application en utilisant le casque de stock (pas l'échelle). Il est également utilisé pour la suite de tests.

### ix_valeurs.yaml

Ce fichier contient des valeurs de configuration qui ne sont pas incluses dans questions.yaml, mais qui doivent être copiées dans la configuration résultante. Il est principalement utilisé pour s'assurer que les paramètres peuvent être modifiés par le responsable à chaque mise à jour, comme les versions, ce qui n'est pas possible lors de la configuration des choses comme valeurs par défaut à l'intérieur des questions. aml

Ce fichier n'est cependant pas très bien vérifié par validation et CI. Utilisez-la quand vous en avez absolument besoin.

Un paramètre important dans ix_values. aml est le paramètre optionnel : `startAsRoot: true` Ce paramètre est une bascule de compatibilité pour les conteneurs qui doivent être démarrés par la racine, Souvent, ces conteneurs utilisent PUID et PGID pour démonter (inférieur) de la racine mais exigent qu'il démarre.

Un exemple minimal ix_values.yaml serait :

```yaml
##
# Ce fichier contient du contenu Values.yaml qui est ajouté à la sortie des questions. aml
# Il est UNIQUEMENT destiné au contenu que l'utilisateur n'est PAS censé changer.
# Exemple: Tout sous "image" n'est pas inclus dans questions.yaml mais est inclus ici.
##

image:
  dépôt: jacobalberty/unifi
  balise : 6.0. 5
  pullPolicy: IfNotPresent


##
# La plupart des autres valeurs par défaut sont définies dans les questions. aml
# Pour d'autres options, veuillez vous référer au wiki, default_values.yaml ou au graphique de bibliothèque commun
##

```
