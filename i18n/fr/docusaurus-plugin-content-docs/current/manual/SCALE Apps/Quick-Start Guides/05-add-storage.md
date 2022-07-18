# 05 - Ajout de stockage supplémentaire

Nous fournissons la possibilité de monter autant de dossiers hôtes que vous le souhaitez.

hostPathMounts est en fait assez simple : Il monte un répertoire à partir de votre système d'échelle TrueNAS, directement dans un répertoire à l'intérieur de l'application que vous installez.

## Permissions

Nous offrons un paramétrage automatique optionnel des autorisations selon App fsGroup ou PUID.

Définir les permissions automatiquement signifie que nous `chown` le dossier et tous les dossiers qu'il contient, vers un groupe de votre choix. Cependant, nous ne le faisons que lors de l'installation ou de la mise à jour d'une application.

Veuillez noter que le paramétrage automatique des droits d'propriété/permissions, cela signifie que cela remplace vos paramètres CHOWN et CHMOD actuels. Cela pourrait casser les choses et oui, cela détruira votre système si vous l'utilisez de manière négligente. Il n'est pas non plus judicieux d'activer les permissions automatiques sur les partages montés à partir d'un système externe.

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/aktv1r-KRI0)

### Documentation supplémentaire
