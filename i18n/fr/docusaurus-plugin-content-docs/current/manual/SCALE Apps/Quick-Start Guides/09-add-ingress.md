# 09 - Exposer des applications avec Ingress et Traefik

Pour utiliser Traefik comme ingress, tout ce que vous avez à faire est d'activer "ingress" dans l'application de votre choix et de remplir un petit formulaire. Nous avons actuellement besoin d'installer Traefik avant d'activer ingress sur votre application.

## Exigences

- Assurez-vous que votre pool de stockage est créé et fonctionnel
- Assurez-vous d'avoir sélectionné votre réserve de stockage lorsque vous avez ouvert l'interface "Applications", si ce n'est pas le cas, reportez-vous au guide de démarrage rapide `01 - Configuration des applications pour la première fois`
- Assurez-vous que vous avez une connexion internet fonctionnelle et que vous pouvez atteindre github et truecharts.org depuis le système hôte.
- Assurez-vous d'avoir déjà ajouté le catalogue TrueCharts à partir du guide 02
- Assurez-vous que votre application est installée et, de préférence, fonctionne
- Assurez-vous d'avoir ajouté vos certificats dans le guide 07
- Assurez-vous que vous avez configuré traefik dans le guide 08

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/0Rmav5gyAwI)

## Notes

Il y a quelques surlignements à prendre en compte lors de l'ajout d'une entrée à une application :

- L'ajout d'hôtes est requis Par défaut, la liste d'hôtes est vide, ceci est dû à des choix de conception amont et est un problème qui doit encore être résolu en amont. Quoi qu'il en soit, l'ajout d'hôtes (de préférence un seul) est nécessaire pour que N'IMPORTE QUELQUE application fonctionne avec une entrée activée. Les applications peuvent ne pas installer et lancer d'erreurs si vous n'ajoutez pas d'hôtes.

- Traefik n'accepte/utilise pas de certificats Parfois, vous pourriez remarquer que Traefik ignore votre certificat. Cela est très probablement dû au domaine de votre certificat, étant différent du domaine que vous avez entré dans la boîte d'hôte proxy inverse. Traefik nécessite votre certificat pour correspondre au domaine utilisé pour Ingress. Il s'agit d'une décision de conception en amont et nous pouvons facilement et en toute sécurité désactiver.
