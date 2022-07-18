# Migration entre les versions

Parfois, nous ne pouvons pas garantir la mise à jour automatique entre les nouvelles versions de nos applications. Ces pages incluent des scénarios communs et donnent quelques conseils sur la façon de se déplacer manuellement entre les différentes versions et les trains.

## Entre les trains

Une application sera toujours dans un seul train. Si une application se déplace dans un autre train, vous ne serez pas en mesure de mettre à jour automatiquement Notre guide de base pour ces cas est :

- Sauvegardez tous vos fichiers, configuration et bases de données.
- Prenez note de la façon dont vous avez configuré votre application précédemment
- Supprimer l'ancienne application
- Installez la nouvelle application en utilisant vos notes de configuration faites précédemment
- Arrêter la nouvelle application
- Remettez tous vos anciens fichiers.
- Lancer la nouvelle application

## Entre les versions

Lorsque de nouvelles versions introduisent des changements cassés (qui sont souvent des changements majeurs de version), elles peuvent nécessiter la réinstallation de l'utilisateur. Quoi qu’il en soit, nous fournissons souvent déjà des coupons de migration et nous avons traité ces problèmes manuellement.

### Common 2.0 -> common 3.0 based Apps

Dans le cas où vous mettez à niveau vers une application commune 3.0, la réinstallation est actuellement requise. Soyez attentif : l'installation nuira à vos données ! Sachez également que nous n'avons pas d'installations communes basées sur la version 2.0 disponibles dans le menu déroulant de la version

### Commun 3.0 -> applications communes basées sur la version 4.0

Dans le cas où vous passez à une application commune basée sur la version 4.0, la réinstallation est actuellement requise. Soyez attentif : l'installation nuira à vos données ! Cependant, des applications basées sur Common 3.0 sont toujours disponibles pour être installées en utilisant la liste déroulante de la version

### Commun 4.0 -> applications communes à la version 5.0

La version commune 5.0.0 est en fait une petite mise à jour : elle permet simplement d'utiliser un disque virtuel en utilisant emptyDir sur hostPathMount. Il s'agit toutefois d'un changement radical.

Pour mettre à jour, nous vous conseillons de supprimer toutes les entrées de hostPathMounts/customStorage et de les ajouter après la mise à jour
