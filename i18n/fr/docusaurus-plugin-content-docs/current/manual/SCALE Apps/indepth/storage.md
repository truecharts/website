# Stockage

TrueCharts utilise plusieurs systèmes de stockage différents:

## Types de stockage

Le stockage est actuellement séparé en deux types :

1. Stockage persistant intégré (PVC)
2. Stockage personnalisé aka "hostPathMounts"

## Stockage persistant intégré

Le stockage persistant intégré est basé sur les PVC Kubernetes pour s'intégrer le plus étroitement possible dans TrueNAS SCALE. Ils sont également fortement préconfigurés pour fonctionner le plus efficacement possible et fournissent des options pour une future expansion comme NFS et Gluster options étant ajoutées. Ces options de stockage ne sont pas bien adaptées pour être partagées avec plusieurs applications.

Ce stockage est intégré dans la SCALE TrueNAS et supporte complètement la restauration des mises à jour. C'est pourquoi c'est la façon par défaut (et seulement supportée !) de stocker les fichiers de configuration de l'application.

## Stockage d'applications personnalisées aka "hostPathMounts"

En plus de la mention précédente Integrated Persistent Storage, nous fournissons également la possibilité de monter autant de dossiers hôtes que vous le souhaitez.

hostPathMounts est en fait assez simple : Il monte un répertoire à partir de votre système d'échelle TrueNAS, directement dans un répertoire à l'intérieur de l'application que vous installez.

## Permissions

Les paramètres de permission sont assez importants et sont souvent des problèmes pour les utilisateurs. Pour le stockage persistant intégré et le stockage personnalisé, nous offrons des options spéciales pour définir automatiquement les autorisations pour coïncider avec votre conteneur.

### Stockage persistant intégré

Celles-ci sont automatiquement définies pour être détenues par : **PGID**

### Stockage d'applications personnalisées aka "hostPathMounts"

Nous offrons un paramétrage automatique facultatif des autorisations selon App fsGroup ou PUID.

Définir les permissions automatiquement signifie que nous `chown` le dossier et tous les dossiers qu'il contient, vers un utilisateur et un groupe de votre choix. Cependant, nous ne le faisons que lors de l'installation ou de la mise à jour d'une application.

Veuillez noter que le paramétrage automatique des droits d'propriété/permissions, cela signifie que cela remplace vos paramètres CHOWN et CHMOD actuels. Cela pourrait casser les choses et oui, cela détruira votre système si vous l'utilisez de manière négligente. Il n'est pas non plus judicieux d'activer les permissions automatiques sur les partages montés à partir d'un système externe. Ces permissions sont basées sur l'utilisateur et le groupe que vous entrez dans la boîte de dialogue de configuration de l'application et par défaut sur `568` (l'utilisateur des applications par défaut SCALE).
