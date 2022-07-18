# 07 - Lets-Encrypt Zertifikate hinzufügen

Mit TrueNAS SCALE ist es möglich, automatisch Zertifikate für Ihre Domain(en) mit letsencrypt zu generieren. Dieser Prozess ist jedoch nicht sehr selbsterklärend. Nachdem es dir gelungen ist, dieses How-to abzuschließen Sie sollten in der Lage sein, "iX Certificate" als Zertifikatsoption und Ihr persönliches Zertifikat in der anderen Dropdown-Box auszuwählen!

## Anforderungen

Um iX-Zertifikate mit letsencrypt zu verwenden, gibt es einige Voraussetzungen:

- Verwenden Sie bevorzugt einen DNS-Server, der kein Caching (kein lokaler DNS-Server) für Ihr TrueNAS-System hat.
- Haben Sie eine E-Mail-Adresse für Ihren TrueNAS SCALE `root` Benutzer eingegeben. (diese E-Mail wird auch für letsverschlüsselte Erinnerung verwendet!)
- Besitze einen Domainnamen
- Verwenden Sie entweder Cloudflare oder AWS Route53 für Ihre Domain. (Falls Sie sich fragen: Die Nutzung von Cloudflare als DNS-Provider ist kostenlos)
- Haben Sie eine aktive Internetverbindung, damit TrueNAS SCALE Cloudflare oder AWS kontaktieren kann, um Ihren Domain-Besitz zu überprüfen

## Anleitungen

- Klicken Sie auf `Zugangsdaten` im linken Menü und gehen Sie auf die `Zertifikate` Seite.

![LI](/img/LE/LE2.png)

- Hinweis `ACME DNS-Authentifikatoren`, wählen Sie `Hinzufügen` neben `ACME DNS-Authenticators` aus, um das Menü zur Hinzufügung Ihres DNS-Providers für die Domainüberprüfung zu öffnen.

- Geben Sie die erforderlichen Informationen ein und klicken Sie auf `Speichern`. Für Cloudflare benötigen Sie entweder einen globalen API-Schlüssel oder einen eingeschränkten API-Token. Bitte schauen Sie in der Cloud flare und/oder AWS nach, wie Sie die erforderlichen Anmeldeinformationen erhalten.

![LE1](/img/LE/LE1.png)

- Notiz `Zertifikatssignierungsanfragen`, wählen Sie `Hinzufügen` neben `Zertifikatsignierungsanfragen` um das Menü für das Hinzufügen der Domaininformationen zu öffnen, für die Sie ein Zertifikat wünschen.

![LE3](/img/LE/LE3.png)

- Geben Sie alle erforderlichen Informationen im Assistenten ein und speichern Sie diese. Wenn Sie sich nicht sicher sind, sind die Standardwerte fast immer "alrecht", da das meiste von dem, was Sie hier eingeben, von Letsencrypt komplett ignoriert wird. `Allgemeiner Name` bedeutet in diesem Fall `Primärer Domainname`, wobei `Subject Alternate Names` `Extra Domain-Namen` bedeutet.

![LE4](/img/LE/LE5.PNG)

- Notizen Sie Ihren neuen `Zertifikatssignierungsanfrage` im Feld unten `Zertifikatssignierungsanfragen`. Beachten Sie auch das kleine `Schraube` Symbol rechts von Ihrem `Zertifikatssignierungsanfrage`

- Klicken Sie auf das kleine `Schlauch` Symbol, dies öffnet das `ACME Zertifikat erstellen Menü`. In diesem Menü können wir ein echtes (Produktion)-Zertifikat oder ein Testzertifikat von Letsencrypt anfordern. Zur Klarheit, ist es ratsam, den gleichen Authenticator für alle Domain-Namen zu verwenden. Es ist jedoch in Ordnung, sowohl ein Test- als auch ein Staging-Zertifikat für die gleiche Domain zu generieren.

- Nach dem Speichern und Warten auf den Generierungsprozess Sie sollten am Ende mit einem weiteren `Zertifikat Signing Request` und einem neuen `Zertifikat` unter `Zertifikate`, diese neue `Zertifikatsunterschrift Anfrage` wird verwendet, um Ihr `Zertifikat` in Zukunft zu erneuern und sollte nicht gelöscht werden!

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/TJ5fDiDRcbU)
