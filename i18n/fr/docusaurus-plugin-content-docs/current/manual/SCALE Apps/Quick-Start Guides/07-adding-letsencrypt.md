# 07 - Ajout de Lets-Encrypt Certificates

Avec TrueNAS SCALE, il est possible de générer automatiquement des certificats pour votre/vos domaine(s) en utilisant letsencrypt. Toutefois, ce processus n'est pas très explicatif. Une fois que vous avez réussi à compléter ce guide, vous devriez être en mesure de sélectionner « Certificat iX » comme option de certificat et votre certificat personnel dans l'autre liste déroulante !

## Exigences

Pour utiliser les certificats iX avec letsencrypt, il y a quelques exigences :

- Utilisez de préférence un serveur DNS qui n'a pas de cache (pas de serveur DNS local) pour votre système TrueNAS.
- Vous avez entré une adresse e-mail pour votre utilisateur d'échelle TrueNAS `root`. (cet e-mail sera également utilisé pour le rappel de letsencrypt!)
- Posséder un nom de domaine
- Utilisez Cloudflare ou AWS Route53 pour votre domaine. (Dans le cas où vous vous posez la question : utiliser Cloudflare comme fournisseur DNS est gratuit)
- Ayez une connexion internet active afin que TrueNAS SCALE puisse contacter Cloudflare ou AWS pour vérifier la propriété de votre domaine

## Comment faire

- Cliquez sur `Identifiants` dans le menu de gauche et allez sur la page `Certificats`.

![LC2](/img/LE/LE2.png)

- Notice `DNS-Authenticators ACME`, sélectionnez `Ajouter` en plus de `authentificateurs DNS-ACME` pour ouvrir le menu pour ajouter votre fournisseur DNS pour la vérification de domaine.

- Entrez les informations requises et cliquez sur `Enregistrer`. Pour Cloudflare, vous avez besoin d'une clé API globale ou d'un jeton API à portée limitée. Veuillez vous référer à cloudflare et/ou AWS pour savoir comment obtenir les informations d'identification requises.

![LC1](/img/LE/LE1.png)

- Avis `Demandes de signature de certificats`, sélectionnez `Ajouter` en plus de `demandes de signature de certificats` pour ouvrir le menu pour ajouter les informations de domaine pour lesquelles vous voulez un certificat.

![LC3](/img/LE/LE3.png)

- Entrez toutes les informations requises dans l'assistant et enregistrez-le. Si vous n'êtes pas sûr, les valeurs par défaut sont presque toujours "alright", parce que la plupart de ce que vous entrez ici est complètement ignoré par Letsencrypt. `Nom commun` dans ce cas signifie `Nom de domaine principal`, alors que `Noms alternatifs de sujet` signifie `Noms de domaine supplémentaires`.

![LC4](/img/LE/LE5.PNG)

- Notez votre nouvelle `demande de signature de certificat` apparaissant dans la case ci-dessous `Demandes de signature de certificats`. Notez également la petite icône `clé` à droite de votre `demande de signature de certificat`

- Cliquez sur la petite icône `clé` , cela ouvrira le menu `Créer un certificat ACME`. Dans ce menu, nous pouvons demander un certificat de production réel ou un certificat de test de Letsencrypt. Pour plus de clarté, il est conseillé d'utiliser le même authentificateur pour tous les noms de domaine. Cependant, il est normal de générer à la fois un test et un certificat de pré-production pour le même domaine.

- Après sauvegarde et attente du processus de génération, vous devriez finir avec une autre `demande de signature de certificat` et un nouveau `certificat` sous `certificats`, cette nouvelle `demande de signature de certificat` est utilisée pour renouveler votre `certificat` à l'avenir et ne devrait pas être supprimée !

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/TJ5fDiDRcbU)
