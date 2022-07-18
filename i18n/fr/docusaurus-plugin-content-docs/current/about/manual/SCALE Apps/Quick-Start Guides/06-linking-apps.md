# 06 - Lier des applications en interne

Nous avons souvent besoin de connecter des applications individuelles ensemble, par exemple : Sonarr et SABnzbd. Cela signifie que nous devons d'abord savoir comment accéder à ces applications.

## Lier des applications en interne

Le backend pour les applications d'échelle TrueNAS est Kubernetes. Lier des applications ensemble dans Kubernetes est fait légèrement différemment des autres systèmes, car vous ne pouvez pas pointer directement vers d'autres conteneurs en utilisant leur adresse IP.

Au lieu de cela, nous devons utiliser leur nom de domaine interne. Attention : ce nom est uniquement disponible entre les applications et ne peut pas être atteint depuis l'hôte/noeud ou votre propre PC.

Le format du nom de domaine interne pour le service principal est expliqué ci-dessous. Veuillez remplacer `$NAME` par le nom que vous avez donné à votre application lors de l'installation et `$APP` par le nom que l'application a sur le catalogue où elle est nécessaire.

**Si le nom de votre application *contient* le nom de l'application comme dans le catalogue, le format est le suivant.**

- `$NAME.ix-$NOM.svc.cluster.local`

**Si le nom de votre application *ne contient PAS* le nom de l'application comme dans le catalogue, le format est le suivant.**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

Si vous avez besoin d'accéder à un service différent (ce qui n'est pas souvent le cas! , vous avez besoin d'un format légèrement différent, où `$SVCNAME` est le nom du service que vous voulez atteindre :

**Si le nom de votre application *contient* le nom de l'application comme dans le catalogue, le format est le suivant.**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**Si le nom de votre application *ne contient PAS* le nom de l'application comme dans le catalogue, le format est le suivant.**

- `$NAME-$APPNAME-$SVCNAME.ix-$NOM.svc.cluster.local`

## Générateur de nom de domaine interne

### Exemple

Pour atteindre une application nommée « mon-sabnzbd-app » ou « sabnzbd » (nom contenant le nom de l'application du catalogue) dans Sonarr, nous pouvons utiliser le nom de domaine interne suivant :

- `sabnzbd.ix-sabnzbd.svc.cluster.local` ou
- `sabnzbd.ix-sabnzbd`

Pour atteindre une application nommée "sab" (le nom ne contient PAS le nom d'application du catalogue) dans Sonarr, nous pouvons utiliser le nom de domaine interne suivant :

- `sab-sabnzbd.ix-sab.svc.cluster.local` ou
- `sab-sabnzbd.ix-sab`

![linking-exemple-sonarrsabnzbd](/img/linking/linking-example-sonarrsabnzbd.png)

### Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/mWJL-XDgH98)

### Documentation supplémentaire

Pour plus d'aide sur la résolution de problèmes DNS dans Kubernetes, consultez la documentation officielle : https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
