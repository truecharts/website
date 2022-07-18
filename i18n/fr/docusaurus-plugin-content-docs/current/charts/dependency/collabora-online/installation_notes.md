# Notes d'installation

Si vous n'activez pas `Proxy inverse` sur `Collabora` (ce n'est pas recommandé car il n'est pas sécurisé), pour que cela fonctionne, vous devez

* Retirer `-o:ssl.termination=true -o:ssl.enable=false` de `Paramètres supplémentaires`.
* Définissez `Nom du serveur` à `hostIP:port` (le numéro de port que vous avez défini pour `NodePort`)
* Définir le `type de service` à `NodePort`
* Définir le type de port `` à `HTTPS`
* Désactiver la validation de certificat dans l'application que vous allez utiliser. (par exemple. Nextcloud ont une case à cocher sous l'URL de Collabora pour désactiver la validation du Cert)
