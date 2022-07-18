# Graphique de bibliothèque commune

Dans le heaume 3, leur équipe a introduit le concept d'un [graphique de bibliothèque](https://helm.sh/docs/topics/library_charts/).

> Un diagramme de bibliothèque est un type de diagramme qui définit des primitives ou des définitions de graphiques qui peuvent être partagées par des modèles de Helm dans d'autres graphiques. Cela permet aux utilisateurs de partager des extraits de code qui peuvent être réutilisés entre les graphiques, en évitant la répétition et en gardant les graphiques en mode DRY.

La première version de notre bibliothèque commune a été portée à partir de k8s-at-home, qu'ils ont introduits parce qu'ils ont vu de nombreux graphiques nécessitant seulement quelques options de configuration sélectes dans leurs diagrammes de casque.

Prenons par exemple Sonarr, Sabnzbd, Overseerr. Chacun de ces graphiques ne nécessite que le paramètre `service`, `port`, `persistance`, `ingres` et `image` car la configuration de l'état et de l'application est gérée par l'application elle-même. Afin de rester quelque peu sèche (ne vous répétez pas) et de respecter l'utilisation du heaume 3 pour un graphique de bibliothèque, nous avons vu ce modèle et avons décidé qu'il valait la peine pour nous de créer une bibliothèque. Cela signifie que chacun de ces graphiques d'applications a une dépendance vis-à-vis de ce que nous appelons la bibliothèque `commune`.
