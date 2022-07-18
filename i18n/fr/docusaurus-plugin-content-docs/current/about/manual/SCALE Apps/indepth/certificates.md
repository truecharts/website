# Comment faire pour créer des certificats

Chez TrueCharts, nous prenons en charge les déploiements HTTPS de chaque application en utilisant notre Proxy Inverse Traefik. Nous supportons les certificats auto-signés, personnalisés et chiffrés par lets, en utilisant le gestionnaire de certificats de construction TrueNAS SCALE. Disponible sous "Identifiants"

## Certificats auto-signés

Les certificats auto-signés sont relativement directs et manipulés par Traefik lui-même. Vous n'avez qu'à sélectionner le certificat TrueNAS par défaut lors de l'ajout d'une entrée à votre application et Traefik fait le reste! Veuillez noter que ces certificats ne sont pas vraiment sécurisés, mais qu'ils sont « suffisamment bons » pour être testés.

## Certificats Lets-Encrypt

Avec la version actuelle de TrueNAS SCALE, il est possible de générer automatiquement des certificats pour votre/vos domaine(s) en utilisant letsencrypt. Toutefois, ce processus n'est pas très clair, c'est pourquoi nous avons également ajouté un bref guide pratique. Une fois que vous avez terminé ceci, vous devriez être en mesure de sélectionner « Certificat iX » comme option de certificat et votre certificat personnel dans l'autre liste déroulante !

## Importer les certificats existants

TrueNAS SCALE vous permet également d'importer manuellement des certificats, ceci est plutôt direct : Copiez-Collez les clés dans leurs boîtes respectives et appuyez sur `sauvez`
