# TrueNAS Web GUI via Traefik auf Port 443

If you followed the instructions in `11 - Exposing Traefik on port 80/443` from the `Quick Start Guides`, your TrueNAS Web GUI will now be served on custom ports (port 81 and 444 in the video guide).

Wenn Sie nicht über diese benutzerdefinierten Ports auf die TrueNAS Web GUI zugreifen möchten, folgen Sie den Anweisungen im Leitfaden `16 - Einrichtung von External-Services` für den Zugriff auf die TrueNAS Web GUI via Traefik auf Port 443.

Beim Einrichten des `Externen Dienstes`:

- Setze `externe IP` auf die IP-Adresse deines TrueNAS Servers
- Setze `Port Typ` auf `HTTPS`
- Legen Sie `Service Port` auf den gleichen Wert wie `Web Interface HTTPS Port` in den TrueNAS GUI Einstellungen (`444` wenn Sie Anleitung 11)
- Ingress nach Leitfaden 12 einrichten (setzen Sie den `Host` und `HostName` Werte z.B. truenas.example.com)

Jetzt wird Traefik die TrueNAS Web GUI über HTTPS auf truenas.example.com bedienen. Stellen Sie sicher, dass Ihr DNS truenas.example.com auf die IP-Adresse Ihres TrueNAS Servers zeigt.

Um zu überprüfen, ob alles korrekt eingerichtet wurde, vergleichen Sie Ihre Einstellungen mit den Einstellungen in diesem Screenshot:

![Screenshot mit Übersicht der Einstellungen des externen Dienstes](img/truenas-web-gui-via-traefik-screenshot.png)

Sobald Ihr externer Dienst installiert ist, können Sie diese Übersicht über "Bearbeiten" aus dem Menü "Externe Dienste" (drei Punkte) erhalten.
