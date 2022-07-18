# Notes importantes

Nextcloud est une très bonne application et est très difficile à supporter. Pour cette raison, nous vous demandons de ne pas déposer de demandes de support sur notre Discord ou Github, à moins que votre problème ne soit clairement causé par des TrueCharts.

Alors que nous considérons la couche App "Stable", nous ne pouvons tout simplement pas garantir la stabilité en raison de la nature de l'application Nextcloud dans l'App.

## Notes d'installation

Nextcloud génère son fichier `config.php` au premier démarrage/installation. Par conséquent, vous devez définir des valeurs correctes lors du premier essai. Sinon, vous devrez soit réinstaller l'application, soit éditer le `config.php` manuellement, ce dernier étant hors de notre portée de support. Les valeurs mentionnées sont :

- PROXIES_TRUSTED_TITLE
- IP du nœud
- Ingress, si vous prévoyez de l'utiliser.
- Emplacement de stockage des données, type (par exemple PVC, hostPath).

Nextcloud crée également un utilisateur Admin lors du premier démarrage/installation, que vous ne pouvez définir que son nom d'utilisateur et son mot de passe lors de la première installation. Les modifier plus tard n'aura aucun effet. Les valeurs mentionnées sont :

- format@@0 NEXTCLOUD_ADMIN_USER
- Mot de passe suivant
