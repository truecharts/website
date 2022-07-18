# Anleitungen

So hast du einige unserer TrueNAS Anleitungen befolgt und deinen Domainnamen einrichten -Zertifikate und verwenden Sie Cloudflare für Ihr DNS-Management, aber Sie haben keine statische IP, dann ist diese Anleitung für Sie. Diese Kurzanleitung wird Ihnen helfen, die Schritte mit Cloudflareddns zu durchlaufen, um Ihre dynamische IP zusammen mit Ihrer gesamten Bereitstellung zu aktualisieren, so dass Ihre Domain selbst wenn Sie IP wechseln, auf die richtige Adresse verweist.

## Anforderungen

Domänenname (kann über Cloudflare erworben werden oder usw.)

Cloudflare DNS-Verwaltung

- Für Cloudflare kostenlos registrieren
- Zeigen Sie Ihre Nameserver auf die Cloudflare zugeordnet ![bild](https://user-images.githubusercontent.com/89483932/179332161-e903e46e-ed8c-4b58-81fc-6fcadf1a9851.png)

Cloudflareddns Diagramm

## Voraussetzungen

Diese Anleitung geht davon aus, dass Sie unserem Hauptleitfaden [Quick-Start](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/adding-letsencrypt) mit Ihrer Domain auf TrueNAS gefolgt sind und die Konfiguration Ihres DNS auf Cloudflare durchgeführt haben (siehe [dieses Video](https://www.youtube.com/watch?v=hJVghecs3rE) auf unserem YouTube-Kanal)

Der empfohlene Weg ist CNAMEs für Ihre Subdomains (Diagramme) einzurichten und Ihren A-Eintrag auf Ihre Basis-Domain zu verweisen, wie unten

![bild](https://user-images.githubusercontent.com/89483932/179334653-316e462f-7bf7-4cda-a9dc-dd8842e76021.png)

Beachten Sie die `Zone ID` und `Account ID`, das werden wir im Cloudflareddns Diagramm verwenden.

![Übersicht](https://user-images.githubusercontent.com/89483932/179336819-64a32521-c64b-4ae6-8d5d-225b7342b786.png)

## Cloudflareddns Diagramm-Setup

Schritt 1-2: Namensdiagramm und Standardwert für Schritt 2 lassen

![Schritt 1](https://user-images.githubusercontent.com/89483932/179336761-2ce2da3a-cd75-43ba-befe-4c3775f04027.png)

Schritt 3:

![Schritt 3 Teil 1](https://user-images.githubusercontent.com/89483932/179336779-e2aa5273-8527-40f1-bc3c-3768931ea289.png)

Nutze ZoneID von Cloudflare Domain Übersicht Seite (siehe oben) für das Feld `CF_APITOKEN_ZONE`

Benutze Konto-ID von Cloudflare Domänenübersicht (siehe oben) für das Feld `CF_APITOKEN`

![Schritt 3 Teil 2](https://user-images.githubusercontent.com/89483932/179336787-338b1939-546c-42fa-86a2-afe89da91e8d.png)

Du kannst alles außer dem `CF_RECORDTYPES` auf Standard lassen, wenn du nur deinen A-Eintrag änderst, (siehe die Upstream-Dokumentation für weitere Optionen [hier](https://hotio.dev/containers/cloudflareddns/))

Ändern Sie `CF_RECORDTYPES` zu A, wenn Sie nur Ihre Haupt-Domain ändern

Schritte 4-8: Passen Sie sich wie nötig an, aber Standardwerte sind in Ordnung

## Unterstützung

- Wenn du mehr Details benötigst oder eine benutzerdefinierte Einrichtung hast, ist die Dokumentation im [Upstream](https://hotio.dev/containers/cloudflareddns/) sehr vollständig, also schau dir die Beschreibungen der Optionen an.
- Du kannst uns auch erreichen mit Discord für Echtzeit-Feedback und Support
- Schau dir unsere [Discord](https://discord.gg/tVsPTHWTtr)
- Wenn du einen Fehler in unserem Diagramm gefunden hast, öffne ein Github [Ticket](https://github.com/truecharts/apps/issues/new/choose)

---

Alle Rechte vorbehalten - Das TrueCharts-Projekt
