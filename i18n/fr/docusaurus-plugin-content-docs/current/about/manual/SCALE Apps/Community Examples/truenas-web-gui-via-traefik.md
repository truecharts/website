# TrueNAS Web GUI via Traefik sur le port 443

Si vous avez suivi les instructions dans `11 - Exposer Traefik sur le port 80/443` dans les `Guides de démarrage rapide`, votre interface Web TrueNAS sera maintenant diffusée sur des ports personnalisés (port 81 et 444 dans le guide vidéo).

Si vous ne voulez pas accéder à l'interface Web TrueNAS en utilisant ces ports personnalisés, vous pouvez suivre les instructions dans le guide `16 - Configurer External-Services` pour accéder à l'interface Web TrueNAS via Traefik sur le port 443.

Lors de la configuration du `Service Externe`:

- Définissez `IP du service externe` à l'adresse IP de votre serveur TrueNAS
- Définir `Type de port` à `HTTPS`
- Définissez `Port de service` à la même valeur que `Port HTTPS d'interface Web` dans les paramètres GUI TrueNAS (`444` si vous avez suivi le guide 11)
- Configurez Ingress selon le guide 12 (définissez les valeurs `Host` et `HostName` à ex. truenas.example.com)

Maintenant Traefik va servir l'interface Web TrueNAS via HTTPS sur truenas.example.com. Assurez-vous que votre DNS pointe truenas.example.com à l'adresse IP de votre serveur TrueNAS.

Pour vérifier si vous avez tout configuré correctement, comparez vos paramètres avec les paramètres de cette capture d'écran :

![Capture d'écran avec la vue d'ensemble des paramètres du service externe](img/truenas-web-gui-via-traefik-screenshot.png)

Une fois que votre Service Externe est déployé, vous pouvez obtenir cette vue d'ensemble en choisissant "Editer" dans le menu Service Externe (trois points).
