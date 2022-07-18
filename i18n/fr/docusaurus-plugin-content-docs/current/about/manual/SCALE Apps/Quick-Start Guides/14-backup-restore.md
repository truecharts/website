# 14 - Sauvegarde et restauration

## Exigences

Ce guide utilise notre outil en ligne de commande, appelé `TrueTool`.

Ceci devrait être installé en utilisant : `pip install truetool`

Veuillez noter que cela nécessite une réinstallation après chaque mise à jour de la SCALE TrueNAS.

## Sauvegarde

### Création de sauvegardes manuelles

Les sauvegardes manuelles peuvent facilement être faites en utilisant TrueTool.

`truetool -b`

Il supprime automatiquement les sauvegardes excessives, ce qui est par défaut à un maximum de 14 sauvegardes. Pour augmenter cela, à 31 par exemple, utilisez:

`truetool -b 31`

Cela peut également être facilement combiné avec la mise à jour de TrueTool, la synchronisation, la prunelle, etc. comme ceci:

`truetool -b 31 -u -s -p`

Pour savoir quelles sauvegardes sont faites précédemment, vous pouvez exécuter la commande suivante :

`truetool -l`

### Création de sauvegardes fréquentes

SCALE inclut un système intégré pour sauvegarder les objets kubernetes ainsi que pour faire des instantanés du stockage `PVC` et `ix_volume`. Cependant, il ne crée PAS ces mises à jour en dehors de SCALE.

Pour créer des sauvegardes quotidiennes des objets kubernetes, créez une tâche Cron dans l'interface utilisateur SCALE avec la commande TrueTool que vous voulez exécuter. Si vous voulez vous assurer que TrueTool soit automatiquement mis à jour et/ou (ré)installé après une mise à jour de la SCALE TrueNAS, vous pouvez utiliser :

`pip install --no-cache-dir --upgrade truetool && truetool -b -s -u -a -p`

### Exportation des sauvegardes

Ce qui précède ne crée qu'une sauvegarde des objets kubernetes et un instantané du stockage `PVC` et `ix_volume`. Ces sauvegardes sont enregistrées dans le même jeu de données ix_applications.

Elle ne les protège pas, par exemple, contre la suppression des jeux de données ou contre leur sauvegarde dans un système externe.

Nous **conseillons fortement** de faire à la fois une sauvegarde interne (ensemble de données séparés sur le même système) *et* une sauvegarde hors site. On pourrait créer une récursivité normale (! réplication du jeu de données `ix-volumes` à l'aide de l'interface SCALE, avec les astuces spéciales suivantes en éditant la réplication après la création :

Pour cela, configurez la tâche suivante de réplication :

1[représentant1](/img/backup/rep1.png) 1[représentant2](/img/backup/rep2.png)

Il est également important de vous assurer que vous gardez les sauvegardes de configuration régulières du système SCALE lui-même, de préférence juste après la sauvegarde des applications ci-dessus). Cependant, cela ne fait pas partie de ce guide et nous supposerons que vous l'avez fait vous-même.

### Vérification des sauvegardes

Pour faire quelles sauvegardes sont présentes, on peut utiliser la commande suivante dans un shell:

`truetool -l`

## Restaurer

L'une des parties les plus importantes des sauvegardes est de s'assurer qu'elles peuvent être restaurées. Il y a deux scénarios pour une restauration :

1. Rétablir un système de travail

2. Restauration totale du système

### Rétablir un système en cours d'exécution

Rétablir un système en cours d'exécution est plutôt banal. Mais il y a quelques avertissements:

- Cela réinitialisera le nœud kubernetes, ce qui signifie que tous les objets kubernetes qui ne sont pas déployés en utilisant le système des applications seront restaurés
- Vous ne pouvez pas annuler une seule application

Pour annuler un système existant, le processus est le suivant :

1. Lister vos sauvegardes actuelles en utilisant `truetool -l`

2. Choisissez une sauvegarde pour revenir en arrière et la note son nom

3. Exécuter : `truetool -r BACKUPNAME` (où vous remplacez BACKUPNAME par le nom de la sauvegarde que vous avez sélectionnée ci-dessus)

Veuillez garder à l'esprit que cela peut prendre un temps LONG.

### Restauration totale du système

Parfois, vous avez besoin soit d'essuyer votre piscine, de migrer vers un nouveau bassin soit de restaurer un système complètement. Avec les étapes ci-dessus, tout cela est très possible.

0. Ne pas encore initier le système (sélectionner un groupement pour) Apps pour le moment.

1. Facultatif : Lorsque le système SCALE lui-même est également effacé, assurez-vous de le restaurer en utilisant un export de configuration SCALE **d'abord**.

2. En utilisant la réplication ZFS, reculez le jeu de données `ix-applications` précédemment sauvegardé.

3. Poursuivez avec les étapes listées sur `Rétablir un système en cours d'exécution`

## Guide Vidéo

TBD
