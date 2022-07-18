# Wichtige Notizen

Nextcloud ist eine SEHR witzige Anwendung und ist SEHR schwer zu unterstützen. Aus diesem Grund bitten wir dich, keine Supportanfragen bei unseren Discord oder Github einzureichen, es sei denn, dein Problem wird eindeutig von TrueCharts verursacht.

Während wir den App-Layer "Stable" betrachten, können wir aufgrund der Natur der Nextcloud-Anwendung innerhalb der App keine Stabilität garantieren.

## Installationshinweise

Nextcloud erzeugt seine `config.php` Datei beim ersten Start/Installation. Deshalb müssen Sie beim ersten Versuch einige Werte richtig einstellen. Andernfalls müssen Sie entweder die App neu installieren oder die `config.php` manuell bearbeiten, wobei letztere außerhalb unseres Supportbereichs liegt. Die genannten Werte sind:

- TRUSTED_PROXIES
- Knoten-IP
- Ingress, wenn Sie planen, es zu verwenden.
- Speicherort, Typ (z. B. PVC, hostPath).

Auch Nextcloud erstellt bei der ersten Installation einen Admin-Benutzer, den Sie nur bei der ersten Installation festlegen können. Eine spätere Änderung wird keine Wirkung haben. Die genannten Werte sind:

- NEXTCLOUD_ADMIN_USER
- NEXTCLOUD_ADMIN_PASSWORD
