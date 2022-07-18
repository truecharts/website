# 03 - Modifier les applications

La modification d'Apps est possible depuis le 21.08, bien qu'elle ait une interface légèrement différente qui expose le même réglage que l'installation d'une App.

## Exigences

- Assurez-vous que votre pool de stockage est créé et fonctionnel
- Assurez-vous d'avoir sélectionné votre réserve de stockage lorsque vous avez ouvert l'interface "Applications", si ce n'est pas le cas, reportez-vous au guide de démarrage rapide `01 - Configuration des applications pour la première fois`
- Assurez-vous que vous avez une connexion internet fonctionnelle et que vous pouvez atteindre github et truecharts.org depuis le système hôte.
- Assurez-vous d'avoir déjà ajouté le catalogue TrueCharts à partir du guide 02
- Assurez-vous que votre application est installée et, de préférence, fonctionne

## Modification de l'application

- Allez sur `Applications installées`
- cliquez sur le bouton de menu sur le côté droit de la carte App
- Sélectionnez `Modifier`
- Modifier les paramètres que vous souhaitez modifier
- Soumettre vos modifications

L'application passera alors par un processus d'envoi de vos modifications. Si le processus échoue, vos modifications ne seront pas soumises et la modification sera annulée. Le popup du processus disparaît, il peut prendre quelques minutes pour déployer vos nouvelles modifications, en raison de certaines choses qui se passent en arrière-plan.

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/UyqM798Arbo)

### Notes

- Il n'est PAS conseillé de basculer entre Nodeport et Loadbalancer, en utilisant les mêmes ports. Cela causera des problèmes. Si vous modifiez une application et que vous basculez entre NodePort et Loadbalancer, assurez-vous d'utiliser différents ports.
