---
slug: "Introduction : Dépôt contenant TrueCharts"
title: "Introduction : Dépôt contenant TrueCharts"
authors:
  - ornias
---

L’année dernière, nous avons augmenté à un rythme sans cesse croissant, doublant le code et les utilisateurs tous les quelques mois. Certains problèmes pouvaient être résolus rapidement et facilement, tandis que d'autres problèmes étaient bien plus complexes. L’un de ces problèmes a été le gâchis compliqué de différentes sources de conteneurs.

Ces sources de conteneurs avaient toutes des formats de balises différents, des limites de débit, des temps d'arrêt et un même a décidé de commencer à supprimer des tags, ce qui a entraîné une rupture des applications. Ce n'était évidemment pas l'expérience que nous voulions que nos utilisateurs possèdent.

Par conséquent, nous avons dépensé la meilleure partie de la mise en place de notre propre système de distribution de conteneurs. Le dépôt TrueCharts contient des conteneurs, ou TCCR en bref. TCCR est une combinaison de conteneurs que nous avons entièrement construits nous-mêmes et de conteneurs que nous avons miroir, écran et ré-étiqueter dans un format normalisé. Cela nous a également permis de nous assurer que *tous les conteneurs* sont disponibles à partir de plusieurs sources : GHCR, Quay et Dockerhub.

Pour y parvenir, nous nous sommes associés au foulard. , qui nous permet de basculer facilement entre les sources de conteneur pour notre référentiel, tout en nous donnant aussi quelque chose de nouveau : les métriques. Nous pouvons enfin voir quels conteneurs sont populaires et quels ne le sont pas, mais nous pouvons aussi voir s'il y a encore des personnes qui utilisent des versions plus anciennes d'applications. Cela nous permet d'améliorer notre processus de prise de décision : quelles applications travailler et quelles anciennes versions continuer à supporter.

Vous avez tous (sous le capot), déjà utilisé TCCR et nous n'avons eu qu'une poignée de problèmes liés à celui-ci. Nous sommes heureux d'avoir créé quelque chose qui nous met à nouveau en évidence comme la source numéro 1 pour les applications d'échelle TrueNAS.
