# 01 - Ajout de TrueCharts à l'échelle

Ajouter le catalogue d'applications de la communauté TrueCharts est relativement simple.

## Exigences

- Assurez-vous que votre pool de stockage est créé et fonctionnel
- Assurez-vous que vous avez une connexion internet fonctionnelle et que vous pouvez atteindre github et truecharts.org depuis le système hôte.

## Adding TrueCharts

Lorsque vous ouvrez l'élément de menu Applications sur TrueNAS SCALE pour la première fois, vous êtes invité à configurer un nouveau pool pour les applications. Cela créera un nouveau jeu de données sur le pool sélectionné appelé "ix-applications", qui contiendra tous les conteneurs docker et la plupart des données de l'application, sauf indication contraire.

- Allez dans "Apps" dans le menu de gauche
- Sélectionnez l'onglet "Gérer les catalogues"
- Cliquez sur "Ajouter le catalogue" et entrez les informations requises :

- Name: `truecharts`
- Dépôt : `https://github.com/truecharts/Catalogue`
- Entraînement préféré : `stable`
- Branche : `principal`

Nous recommandons également fortement aux personnes commençant avec TrueCharts et le reste de ce guide de s'assurer que `core` et `stable` sont ajoutés aux trains préférés. Sans ces deux trains, vous ne pourrez pas suivre toutes les étapes que nous avons décrites dans les "Guides de démarrage rapide". Vous pouvez également activer d'autres trains, voir ci-dessous pour une description du contenu de chaque train.

## Différence entre Stable et Incubateur

TrueCharts a plusieurs "trains" : tous les trains contiennent des applications qui devraient fonctionner correctement. Cependant, ils ont une signification légèrement différente :

- `stable` contient la plupart de nos applications. Elles sont considérées comme stables et fonctionnelles.
- `la dépendance` contient des applications qui sont principalement utilisées comme dépendances. Ce train n'est pas pris en charge, en plus des corrections de bogues.
- `incubateur` Ces applications sont toujours en développement et/ou ne sont pas considérées comme de qualité suffisante.

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/Vomm8uvdCM0)

## Notes

- Si cela ne fonctionne pas immédiatement, essayez de cliquer sur "Rafraîchir les catalogues".
