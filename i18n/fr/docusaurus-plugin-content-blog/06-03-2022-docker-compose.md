---
slug: "Docker-Composer sur la SCALE TrueNAS en utilisant TrueCharts"
title: "Docker-Composer sur la SCALE TrueNAS en utilisant TrueCharts"
authors:
  - ornias
---

Dès les premières étapes du développement de TrueNAS SCALE, nous avons lu de nombreuses plaintes concernant le fait docker-compose n’a pas été pris en charge par TrueNAS SCALE. C’est compréhensible, car c’est l’une des options de déploiement de docker les plus utilisées pour les utilisateurs domestiques.

La communauté TrueNAS SCALE a trouvé des moyens intéressants d'activer Docker-Compose. Mais cette approche a tous un certain nombre de inconvénients :

- Ce n'est pas une preuve future, il peut être nuked de façon permanente et sans avertissement, avec n'importe quelle mise à jour d'échelle TrueNAS.

- Il casse de façon intrinsèque les applications SCALE et nécessite même souvent des personnes handicapées.

- Il n'y a pas de support pour ce contournement.

Pour résoudre ce problème, nous avons décidé de prendre les choses entre nos mains. Nous sommes heureux d'annoncer enfin notre solution :

**Application Docker-Compose pour TrueNAS SCALE par TrueCharts**

Il est conçu dès le départ pour donner aux utilisateurs presque la même expérience que Docker-Compose sur le système hôte, et contient même quelques jolies astuces :

- Il est entièrement soutenu par les applications d'échelle TrueNAS, donc il survivra aux mises à jour.

- Il y a une option GUI pour entrer votre fichier Docker-Composé, qui survivra aux redémarrages.

- Complètement autonome, et ne modifiera pas la pile de docker par défaut.

- Compatible avec d'autres applications d'échelle TrueNAS afin de pouvoir facilement migrer vos applications Docker-Compose vers des applications d'échelle TrueNAS.

- Nous sommes votre soutien si la demande ne fonctionne pas comme annoncé.

Tout cela avec une seule mise en garde :

- La commande Docker-Compose doit être exécutée depuis l'intérieur du shell conteneur.

Nous avons basé notre solution sur le conteneur officiel Docker-in-Docker de Docker par Docker, avec quelques outils supplémentaires pour l'optimiser pour les déploiements mono-conteneurs. Peut-être le plus intéressant, le conteneur a un accès natif à `/mnt`, `/root` et `/cluster`, pour que vous puissiez travailler avec vos conteneurs comme vous travaillez sur l'hôte.

Avec cela en place, nous espérons que TrueNAS SCALE pourra enfin commencer à remplir les grandes chaussures de solutions comme Unraid et TrueNAS Core et donner à la communauté ce qu'ils veulent, pas seulement ce dont ils ont besoin!
