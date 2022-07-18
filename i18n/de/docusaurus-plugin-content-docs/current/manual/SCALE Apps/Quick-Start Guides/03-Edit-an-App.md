# 03 - Apps bearbeiten

Das Editieren von Apps ist seit 21.08 möglich, obwohl es eine etwas andere GUI hat, die gleiche Einstellung wie die Installation einer App.

## Anforderungen

- Stellen Sie sicher, dass Ihr Speicherpool erstellt wurde und funktioniert
- Stellen Sie sicher, dass Sie Ihren Speicherpool beim ersten Öffnen der "Apps" Schnittstelle ausgewählt haben wenn nicht, lesen Sie bitte den Schnellstart-Leitfaden `01 - Erstmaliges Einrichten von Apps`
- Stellen Sie sicher, dass Sie eine funktionierende Internetverbindung haben und github und truecharts.org vom Host-System aus erreichen können.
- Stellen Sie sicher, dass Sie den TrueCharts-Katalog von Guide 02 bereits hinzugefügt haben
- Stellen Sie sicher, dass Ihre App installiert ist und, vorzugsweise, funktioniert

## Die App bearbeiten

- Gehe zu `installierte Anwendungen`
- klicken Sie auf die Menü-Taste auf der rechten Seite der App Karte
- Wählen Sie `Bearbeiten`
- Ändere alle Einstellungen, die du ändern möchtest
- Änderungen einreichen

Die App durchläuft dann einen Prozess der Einreichung Ihrer Änderungen. Wenn der Prozess fehlschlägt, werden Ihre Änderungen nicht übermittelt und die Bearbeitung rückgängig gemacht. Das Prozess-Popup verschwindet und es kann einige Minuten dauern, um Ihre neuen Änderungen tatsächlich bereitzustellen, da einige Dinge im Hintergrund passieren.

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/UyqM798Arbo)

### Notizen

- Es ist NICHT ratsam, zwischen Nodeport und Loadbalancer zu wechseln, wobei die gleichen Ports verwendet werden. Diese WILL verursacht Probleme. Wenn Sie eine App bearbeiten und zwischen NodePort und Loadbalancer wechseln, verwenden Sie bitte verschiedene Ports.
