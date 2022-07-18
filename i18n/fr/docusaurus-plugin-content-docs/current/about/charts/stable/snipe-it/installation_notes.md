# Installation initiale

`La vérification de pré-vol de`de Snipe-it [ne peut pas détecter](https://github.com/snipe/snipe-it/issues/10779) si vous exécutez derrière un proxy, donc pour l'installation initiale, il est recommandé d'aller sans ingress.

Complétez la configuration puis revenez en arrière et activez les entrées.

Gardez aussi à l'esprit que vous devriez avoir `172.16.0.0/16` dans votre `APP_TRUSTED_PROXIES`. Si vous voulez ajouter d'autres proxys de confiance. C'est une liste séparée par des virgules et vous pouvez le faire comme `172.16.0.0/16,192.168.1.0/24`.

S'il ne parvient pas à charger l'écran de configuration d'Initla la première fois que vous l'installez, arrêtez l'application et redémarrez-la. Il devrait fonctionner juste après. Ce bogue a été signalé [en amont](https://github.com/snipe/snipe-it/issues/10945)
