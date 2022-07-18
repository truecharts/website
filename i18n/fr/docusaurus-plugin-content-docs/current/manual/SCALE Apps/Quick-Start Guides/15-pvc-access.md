# 15 - Accès aux données en PVC

## Où sont les fichiers de mon application?

- Vos fichiers sont conservés dans le conteneur
- Ils ne sont pas visibles à partir de la structure de fichier de votre serveur sans avoir préalablement monté ce PVC

## Données de montage en PVC

### format@@0 Heavy_Script

Une option est d'utiliser Heavy_Script.

Si vous prévoyez de monter plus de fois le stockage en PVC, c'est peut-être la meilleure option pour vous.

1. Le script affichera toutes vos informations de PVC pour chaque application
2. Arrêtez votre application en toute sécurité avant de monter
3. Fixez votre PVC à /mnt/temporary/STORAGE-NOM

La vidéo commencera avec la fonction de montage pour que vous puissiez voir à quoi elle ressemble.

Ensuite, si vous souhaitez l'installer, suivez le guide vidéo à partir de 15h52.

[![format@@0 Heavy_Script](/img/pvc_access/video_thumbnail.jpg)](https://youtu.be/uZp4x_Susgo?t=616 "format@@0 Heavy_Script")

### Méthode manuelle - Nouveau guide d'utilisateur

Le montage manuel du stockage en PVC prend un peu plus de temps que la méthode script.

Cependant, je sais que certains utilisateurs aiment savoir exactement quelles commandes ils exécutent, etc.

### Objets recommandés

- Un terminal qui permet la copie et le collage
- Un bloc-notes ouvert

1\. **STOP l'application que vous prévoyez de monter**

2\. **Exécutez la commande suivante pour voir vos données PVC**

```bash
k3s kubectl get pvc -A | sort -u | awk '{print "\t" $1 "\t" $2 "\t" $4}' | colonne -t
```

3\. **Trouvez l'application que vous souhaitez monter**

Cela peut être déroutant dans un premier temps parce que de nombreuses applications auront de nombreuses instances différentes de PVC.

![liste_pvc](/img/pvc_access/pvc_list.png)

- Vous verrez dans cette photo, Nextcloud a beaucoup de PVC différents.
  - Cependant, si vous le décomposez en regardant la colonne du milieu, ce n'est pas trop confus.
  1. `data-nextcloud-redis-0`
      - Ceci est votre PVC Redis
  2. `db-nextcloud-postgresql-0`
      - Ceci est votre PVC PostgreSQL
  3. `données nextcloud-`
      - Ceci est votre Data PVC

4\. **Après avoir trouvé quel PVC vous souhaitez monter, copier la colonne à droite (Le volume) qui commence par pvc dans un bloc-notes à utiliser dans la commande suivante**

- Si je voulais monter `nextcloud-data`, j'utiliserais :
- `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

5\. **Exécutez la commande suivante pour trouver le chemin complet vers vos applications PVC**

```bash
liste zfs | grep PVC_VOLUME
```

- En partant de l'exemple Nextcloud, je remplacerais simplement `PVC_VOLUME` par `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

Exemple:

```bash
liste zfs | grep pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Voici à quoi devrait ressembler la sortie ![volumes suivants](/img/pvc_access/nextcloud_volumes.png)

6\. **Montez votre PVC**

```bash
zfs set mountpoint=/temporary/NOM FULL_PVC_PATH
```

Exemple:

```bash
zfs set mountpoint=/temporary/nextcloud-data speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

- Cette commande ne produira aucune sortie si elle est réussie
- Maintenant vous devriez pouvoir faire ce que vous voulez dans le PVC de l'application

7\. **Remontage**

```bash
zfs set mountpoint=ancien POOL_NAME/ix-applications/releases/APPLICATION_NAME/volumes/VOLUME-NAME
```

Exemple:

```bash
zfs set mountpoint=speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Ensuite, j'aime toujours `rmdir` sur le répertoire qui a été créé lors du montage

- Dans mon cas, je m'exécuterai:

```bash
rmdir /mnt/temporary/nextcloud-data
```

- Cela vous permet de garder votre dossier temporaire propre et de savoir ce qui est ou n'est pas monté actuellement.

- Ne vous inquiétez pas, `rmdir` ne peut pas supprimer les dossiers montés, ou les dossiers contenant du contenu.

### Méthode manuelle - Guide de l'utilisateur avancé

**TOUJOURS NE PAS SOUMETTRE L'APP EST DÉCOULÉE QUE LE PVC MOUNTANT**

#### Pour obtenir le PVCNAME:

```bash
k3s kubectl get pvc -n ix-APPNAME
```

#### Pour obtenir le PVCPATH :

```bash
liste zfs | grep legacy | grep APPNAME
```

#### Si vous voulez monter la teneur en PVC :

```bash
zfs set mountpoint=/temporaire PVCPATH
```

Votre PVC sera monté sous `/mnt/temporary`

#### et lorsque vous avez fini de modifier :

```bash
zfs set mountpoint=vieux PVCPATH
```
