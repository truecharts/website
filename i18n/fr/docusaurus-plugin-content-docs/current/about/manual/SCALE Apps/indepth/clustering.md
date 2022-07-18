# Clustering

L’un des objectifs finaux de SCALE est d’exécuter des clusters hyperconvergents basés sur ZFS, Gluster et Kubernetes. Alors que c'est génial, nous aimerions mettre en évidence 3 façons d'utiliser Clustering avec les applications TrueCharts à l'avenir.

Actuellement, aucun clustering n'est encore supporté avec TrueCharts, mais nous prenons déjà des précautions durant notre phase de conception pour implémenter le clustering en douceur à l'avenir.

## Simple Pod Flexible

Ces applications (peuvent) ne peuvent exécuter qu'une seule instance de pod à la fois, donc aucune configuration "haute disponible" disponible. Cependant, ces applications peuvent toujours se déplacer dynamiquement vers différents nœuds si un noeud échoue, cela devrait s'assurer que le temps d'arrêt reste relativement faible. Ces applications peuvent également être « étendues» sur tous les nœuds par kubernetes. Cela signifie aussi qu'il vaut la peine de couper de grandes applications à un seul Pod en plusieurs déploiements plus petits, Par exemple : n nous préférons déployer de petits serveurs de base de données avec chaque application (comme ceux-ci peuvent être répartis plus dynamiquement sur plusieurs nœuds) sur une grande application souple à un seul pod.

Quelques exemples d'applications qui ne peuvent pas fonctionner avec plus d'un pod à la fois, même si nous le voulions, sont:

- Sonarr
- Lidarr
- Radarr
- Plex

## Pod unique non flexible

Ces applications ne peuvent pas être exécutées avec plus d'un pod à la fois et d'autre part sont liées à un noeud. Cela signifie : Host-Down? Pod-Down!

Presque toujours cela est dû au fait que les applications sont liées à une configuration matérielle spécifique.

*Exemples:*

- zwavejs2mqtt
- HomeAssistant (selon le matériel ajouté)
- Frein à main (selon le matériel ajouté)

## Applications haute disponibilité

Ces applications sont conçues pour être les plus résistantes de toutes, elles peuvent gérer les défaillances de nœuds et les erreurs de pod sans aucun problème, parce qu'ils exécutent toujours plusieurs pods à la fois qui se remplissent une fois que les pods ou les nœuds commencent à échouer.

Parce que ces applications sont aussi les plus compliquées de toutes, nous essayons de les limiter aux zones clés de l'écosystème TrueCharts qui ne peuvent pas être coupées en morceaux plus petits (flexibilité Single-Pod Simple) facilement. J'aime : Ingress and Monitoring.

*Exemples:*

- Traefik
