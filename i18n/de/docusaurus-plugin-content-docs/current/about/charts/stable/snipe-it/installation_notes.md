# Erstinstallation

`Snipe-it`'s Vorflug-Check [kann](https://github.com/snipe/snipe-it/issues/10779) nicht erkennen, wenn Sie hinter einem Proxy sitzen, also für die erste Installation wird empfohlen, ohne ingress zu gehen.

Schließen Sie das Setup ab, dann gehen Sie zurück und aktivieren ingress.

Beachten Sie auch, dass Sie `172.16.0.0/16` in Ihrer `APP_TRUSTED_PROXIES` haben sollten. Wenn Sie mehr vertrauenswürdige Proxies hinzufügen möchten. Es ist eine durch Komma getrennte Liste und Sie können es tun wie `172.16.0.0/16,192.168.1.0/24`.

Wenn es nicht gelingt, den initla-Setup-Bildschirm beim ersten Mal zu laden, stoppen Sie die App und starten Sie sie erneut. Danach sollte es funktionieren. Dieser Fehler wurde gemeldet [Upstream](https://github.com/snipe/snipe-it/issues/10945)
