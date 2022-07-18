# 13 - Docker-Composer sur SCALE

Bien que Docker-Compose ne soit pas officiellement supporté par iX Systems, nous avons conçu une application spéciale "Docker-Compose", qui est disponible dans le train "core". Cette application peut être utilisée pour déployer facilement un fichier de composition dans un environnement de docker-composition complètement isolé.

Notre application Docker-Compose possède les fonctionnalités suivantes :

- Lier les ports à l'hôte, directement depuis docker-compose

- Réseaux internes Docker-Compose

- `/mnt`, `/root` et `/cluster` sont directement accessibles à l'intérieur du conteneur Docker-Compose par défaut

- Les docker-images et les volumes de docker, sont sauvegardés dans un PVC spécial dans le système Apps de TrueNAS SCALE

- Les fichiers peuvent être chargés automatiquement au début de notre application Docker-Compose

- Survivra entièrement les mises à jour de TrueNAS SCALE

- Ne modifiera pas le système d'exploitation hôte

- Peut être combiné avec l'application SCALE, pour permettre aux utilisateurs de migrer lentement de docker-compose vers des applications SCALE natives

Quelques éléments à prendre en compte :

- Pour donner des commandes à docker ou à docker compose, vous devez être dans le shell de l'application Docker-Compose (pas le shell hôte)

- Veuillez vous assurer que vos réseaux Docker-Compose ne sont pas en conflit avec les réseaux Kubernetes répertoriés dans les paramètres du système SCALE Apps.

- Veuillez noter que les conteneurs Docker-Compose ne peuvent pas atteindre à l'intérieur du réseau kubernetes. Vous ne pouvez donc pas combiner un conteneur "Lancer Docker" avec une base de données hébergée Docker-Compose par exemple.

Pour dire simplement : Notre solution docker-compose fonctionne presque comme l'utiliser sur l'hôte, mais sans compromettre l'OS d'Appliance qui est TrueNAS SCALE.

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/QXooywQSfJY)
