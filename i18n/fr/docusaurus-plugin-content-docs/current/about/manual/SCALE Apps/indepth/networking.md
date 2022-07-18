# Réseaux

Les TrueCharts contiennent un certain nombre d'options de réseautage, certaines très simples, d'autres abandonnées. Dans ce document, nous allons essayer de donner un aperçu général de ce que sont les options générales de configuration et de ce que sont leurs inconvénients et leurs inconvénients.

## Choix généraux

### Réseaux d'hôtes

Cette option est considérée comme une option avancée et est rarement nécessaire. Il connecte la pile réseau de l'hôte à l'application.

La raison pour laquelle cela n'est pas nécessaire dans la plupart des applications, est parce que nous avons déjà de grandes options pour gérer la plupart des formes de trafic réseau et chaque responsable a le but de s'assurer que vous n'avez pas besoin de ce paramètre.

Veuillez vous référer à la documentation de chaque application ou à la section Support-Discussions sur github, si vous pensez avoir besoin de ce paramètre dans votre cas d'utilisation spécifique

### IP du cluster

Le mode réseau "Basic", il crée un répartiteur de charge spécial appelé un "service" qui n'est disponible que sur le réseau interne entre les applications.

Ne pensez pas que vous ne pouvez pas vous y connecter, car notre [proxy inverse](https://wiki.truecharts.org/general/reverse-proxy/) peut vous transmettre la plupart du trafic pour vous!

### Port du nœud

Le nom indique déjà clairement ce que celui-ci fait : il se connecte à un port sur votre nœud (le PC hébergeant votre application).

C'est un ClusterIP spécial qui transfère tout le trafic d'un certain port sur votre système hôte aka "node", directement au service. Cependant, c'est aussi un ClusterIP, donc il est très bien possible d'utiliser à la fois le proxy inverse et le NodePort, mais pas au même port.

Il y a cependant plusieurs inconvénients à l'utilisation de nodeports:

- Vous ne pouvez choisir que des ports supérieurs à 9000
- Vous ne pouvez pas connecter deux applications au même port

### Équilibreur de charge

Loadbalancer connecte un service targetPort directement au réseau hôte. Quoi qu'il en soit, il peut le faire dans des intervalles inférieurs à NodePort, ce qui en fait une excellente solution pour des choses comme les serveurs DNS.

Il y a cependant des inconvénients à utiliser LoadBalancer:

- Vous ne pouvez pas connecter deux applications au même port
