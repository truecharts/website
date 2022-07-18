# 04 - Mise à niveau, restauration et suppression

Avec TrueCharts, nous envoyons toujours de nouvelles versions d'une application pour tout changement. Même pour les conteneurs. Cela garantit que la mise à jour de l'application vous donne toujours les derniers et les plus grands de TrueCharts

## Exigences

- Assurez-vous que votre pool de stockage est créé et fonctionnel
- Assurez-vous d'avoir sélectionné votre réserve de stockage lorsque vous avez ouvert l'interface "Applications", si ce n'est pas le cas, reportez-vous au guide de démarrage rapide `01 - Configuration des applications pour la première fois`
- Assurez-vous que vous avez une connexion internet fonctionnelle et que vous pouvez atteindre github et truecharts.org depuis le système hôte.
- Assurez-vous d'avoir déjà ajouté le catalogue TrueCharts à partir du guide 02
- Assurez-vous que votre application est installée et, de préférence, fonctionne

## Mise à jour

### Mise à jour de l'application à l'aide de l'interface

- Allez sur `Applications installées`
- Assurez-vous que votre application signale qu'une mise à niveau est disponible sur la carte App.
- Prenez note de la version actuelle, vous voudrez peut-être revenir à cette version à l'avenir.
- cliquez sur le bouton de menu sur le côté droit de la carte App
- Sélectionnez `Amélioration`
- Confirmez votre souhait de mise à niveau

L'application passera alors par un processus de sauvegarde et de mise à niveau. Si le processus échoue, vos modifications ne seront pas soumises et la modification sera annulée. Après la disparition de la popup du processus, il peut prendre quelques minutes pour déployer votre application nouvellement mise à jour, à cause de certaines choses qui se passent en arrière-plan.

## Rollback

### Rétablir avec l'interface

1. Sélectionnez les 3 points les plus importants de votre carte d'application
2. Sélectionnez "Roll Back"
3. Sous "Version" - Cliquez sur le menu déroulant et sélectionnez la version à laquelle vous souhaitez revenir
4. Cochez la case "Rouler la capture d'arrière-plan"
5. Sélectionnez "Roll Back"

### Rétablir en utilisant le CLI

1. entrer en cli pour entrer dans l'interface en ligne de commande SCALE
2. entrer l'annulation de chart_release application Cela devrait vous donner cet écran : ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. Entrez le nom de la version et item_version comme ceci : ![cli-rollback2](/img/rollback/cli-rollback2.png) (assurez-vous de supprimer le # avant le nom de la version)
4. Cliquez sur Enregistrer puis cliquez sur Quitter Il devrait afficher quelque chose comme ceci, confirmant l'annulation : ![cli-rollback3](/img/rollback/cli-rollback3.png)

### Recherche de la dernière version installée

Malheureusement, SCALE ne répertorie pas les versions auxquelles il est possible d'annuler, mais nécessite la saisie d'une version. Il y a un court parcours pour obtenir l'historique des versions de l'application en question :

1. run `export KUBECONFIG=/etc/rancher/k3s/k3s.yaml`
2. exécutez  `jackett historique de casque -n ix-jackett où "jackett"` doit être remplacé par le nom de l'application qui a cassé votre interface utilisateur Vous verrez ceci : ![history](/img/rollback/history.png) Prenez note de la colonne "Graphique", il liste les numéros de version que vous pouvez entrer dans l'interface d'annulation, préfixé par le nom de l'application. De grossier ne saisissez que le numéro de version dans l'interface graphique ou CLI, pas le nom

## Supprimez

### Supprimer en utilisant l'interface

1. Sélectionnez les 3 points les plus importants de votre carte d'application
2. Sélectionnez "Supprimer"
3. Cochez la case "Confirmer"
4. Sélectionnez "Continue"

### Supprimer en utilisant la CLI

1. Entrez le terminal d'échelle Truenas via l'interface graphique ou le SSH
2. Tapez la commande suivante
    - `cli -c 'app chart_release delete release_name=NAME_OF_APPLICATION'`
    - ex: `cli -c 'app chart_release delete release_name=traefik'`

#### Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/ONbMhQJPQwc)
