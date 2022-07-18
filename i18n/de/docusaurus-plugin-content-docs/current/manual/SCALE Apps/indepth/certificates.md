# So zu: Zertifikate erstellen

Bei TrueCharts unterstützen wir HTTPS-Deployment jeder App mit unserem Traefik Reverse Proxy. Wir unterstützen selbstsignierte, benutzerdefinierte und lets-verschlüsselte Zertifikate unter Verwendung des TrueNAS SCALE Gebäudezertifikatsmanagers. Verfügbar unter "Anmeldedaten"

## Selbstsignierte Zertifikate

Selbstsignierte Zertifikate sind relativ direkt vorwärts und werden von Traefik selbst verwaltet. Sie wählen nur das Standardzertifikat von TrueNAS aus, wenn Sie Ihrer App eine ingress hinzufügen und Traefik erledigt den Rest! Bitte beachten Sie, dass diese Zertifikate nicht wirklich sicher sind, aber "gut genug" für Tests sind.

## Lets-Verschlüsselung Zertifikate

Mit der aktuellen Version von TrueNAS SCALE ist es möglich, automatisch Zertifikate für Ihre Domäne mit Hilfe von letsencrypt zu generieren. Dieser Prozess ist jedoch nicht ganz klar, und deshalb haben wir auch einen kurzen Leitfaden hinzugefügt. Nachdem Sie es geschafft haben, dies zu vollenden Sie sollten in der Lage sein, "iX Certificate" als Zertifikatsoption und Ihr persönliches Zertifikat in der anderen Dropdown-Box auszuwählen!

## Existierende Zertifikate importieren

TrueNAS SCALE erlaubt Ihnen auch das manuelle Importieren von Zertifikaten, dies ist ziemlich gerade: Kopiere die Schlüssel in die entsprechenden Kästchen und drücke `speichern`
