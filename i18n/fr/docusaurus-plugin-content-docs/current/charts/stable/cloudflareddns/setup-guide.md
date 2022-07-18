# Comment faire

Vous avez donc suivi certains de nos guides TrueNAS, configurez votre nom de domaine, et utilisez Cloudflare pour votre gestion DNS, cependant vous n'avez pas d'IP statique, alors ce guide est pour vous. Ce guide rapide vous aidera à passer par les étapes d'utilisation de Cloudflareddns pour mettre à jour votre IP dynamique avec votre déploiement entier de sorte que même si vous changez d'IP, votre domaine pointera vers la bonne adresse.

## Exigences

Nom de domaine (peut être acheté via Cloudflare ou etc)

Gestion des DNS Cloudflare

- Inscrivez-vous gratuitement à Cloudflare
- Pointez vos serveurs de noms sur ceux que Cloudflare vous assigne ![image](https://user-images.githubusercontent.com/89483932/179332161-e903e46e-ed8c-4b58-81fc-6fcadf1a9851.png)

Graphique de l'éclair nuageux

## Pré-requis

Ce guide suppose que vous avez suivi notre [Guide de démarrage rapide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/adding-letsencrypt) principal avec votre domaine sur TrueNAS et que vous avez fait la configuration de votre DNS sur Cloudflare (voir [cette vidéo](https://www.youtube.com/watch?v=hJVghecs3rE) sur notre chaîne YouTube)

La façon recommandée est de configurer des CNAMEs pour vos sous-domaines (graphiques) et de garder votre enregistrement A pointé sur votre domaine de base, comme ci-dessous

![image](https://user-images.githubusercontent.com/89483932/179334653-316e462f-7bf7-4cda-a9dc-dd8842e76021.png)

Prenez note des `ID de zone` et `ID de compte`, c'est ce que nous allons utiliser dans le graphique de Cloudflareddns.

![Aperçu](https://user-images.githubusercontent.com/89483932/179336819-64a32521-c64b-4ae6-8d5d-225b7342b786.png)

## Configuration du graphique de Cloudflareddns

Étape 1-2: Nommez le graphique et laissez les valeurs par défaut pour l'étape 2

![Étape 1](https://user-images.githubusercontent.com/89483932/179336761-2ce2da3a-cd75-43ba-befe-4c3775f04027.png)

Étape 3 :

![Étape 3 Partie 1](https://user-images.githubusercontent.com/89483932/179336779-e2aa5273-8527-40f1-bc3c-3768931ea289.png)

Utiliser ZoneID à partir de la page d'aperçu du domaine Cloudflare (voir ci-dessus) pour le champ `CF_APITOKEN_ZONE`

Utiliser l'ID du compte client à partir de la page Aperçu du domaine Cloudflare (voir ci-dessus) pour le champ `CF_APITOKEN`

![Étape 3 Partie 2](https://user-images.githubusercontent.com/89483932/179336787-338b1939-546c-42fa-86a2-afe89da91e8d.png)

Vous pouvez tout laisser sauf les `CF_RECORDTYPES` par défaut si vous ne changez que votre enregistrement A, (reportez-vous à la documentation amont pour plus d'options [ici](https://hotio.dev/containers/cloudflareddns/))

Changez `CF_RECORDTYPES` en A si vous ne changez que votre domaine principal

Étapes 4-8 : Ajuster si nécessaire mais les valeurs par défaut sont correctes

## Soutien

- Si vous avez besoin de plus de détails ou si vous avez une configuration plus personnalisée, la documentation sur le [amont](https://hotio.dev/containers/cloudflareddns/) est très complète, donc vérifiez les descriptions des options là-bas.
- Vous pouvez également nous joindre en utilisant Discord pour obtenir des commentaires en temps réel et du support
- Consultez notre [Discord](https://discord.gg/tVsPTHWTtr)
- Si vous avez trouvé un bug dans notre graphique, ouvrez un problème Github [](https://github.com/truecharts/apps/issues/new/choose)

---

Tous droits réservés - Le projet TrueCharts
