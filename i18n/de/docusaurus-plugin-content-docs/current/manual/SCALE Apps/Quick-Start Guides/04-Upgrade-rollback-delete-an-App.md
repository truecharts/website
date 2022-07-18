# 04 - Upgrade, Rollback und Löschen

Mit TrueCharts schieben wir immer neue Versionen einer App für jede Änderung. Auch für die Container. Dies stellt sicher, dass ein Upgrade der App immer die aktuellsten und großartigsten von TrueCharts bietet

## Anforderungen

- Stellen Sie sicher, dass Ihr Speicherpool erstellt wurde und funktioniert
- Stellen Sie sicher, dass Sie Ihren Speicherpool beim ersten Öffnen der "Apps" Schnittstelle ausgewählt haben wenn nicht, lesen Sie bitte den Schnellstart-Leitfaden `01 - Erstmaliges Einrichten von Apps`
- Stellen Sie sicher, dass Sie eine funktionierende Internetverbindung haben und github und truecharts.org vom Host-System aus erreichen können.
- Stellen Sie sicher, dass Sie den TrueCharts-Katalog von Guide 02 bereits hinzugefügt haben
- Stellen Sie sicher, dass Ihre App installiert ist und, vorzugsweise, funktioniert

## Upgrade

### Upgrade der App mit der GUI

- Gehe zu `installierte Anwendungen`
- Stellen Sie sicher, dass Ihre App berichtet, dass ein Upgrade auf der App Card verfügbar ist.
- Notieren Sie sich die aktuelle Version, Sie möchten vielleicht in Zukunft zu dieser Version zurückkehren.
- klicken Sie auf die Menü-Taste auf der rechten Seite der App Karte
- Wählen Sie `Upgrade`
- Bestätigen Sie Ihren Wunsch zu aktualisieren

Die App wird dann einen Prozess der Sicherung (!) und der Aktualisierung durchlaufen. Wenn der Prozess fehlschlägt, werden Ihre Änderungen nicht übermittelt und die Bearbeitung rückgängig gemacht. Nachdem das Prozess-Popup verschwindet, kann es einige Minuten dauern, bis Ihre neu aktualisierte App tatsächlich verfügbar ist, auf einige Dinge, die im Hintergrund passieren.

## Rollback

### Benutze die GUI zurück

1. Wählen Sie die Top 3 Punkte auf Ihrer Anwendungskarte
2. Wähle "Rollback"
3. Unter "Version" - Klicke auf das Dropdown-Menü und wähle aus, auf welche Version du zurücktreten möchtest
4. Aktivieren Sie das "Roll Back Snapshot" Feld
5. Wähle "Rollback"

### Rückgängig mit CLI

1. cli eingeben um die SCALE Kommandozeilenschnittstelle zu betreten
2. geben Sie die App chart_release Rollback ein, es sollte Ihnen diesen Bildschirm geben: ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. Geben Sie den Release-Namen und die item_version wie folgt ein: ![cli-rollback2](/img/rollback/cli-rollback2.png) (entfernen Sie die # vor dem Release-Namen)
4. Klicke auf Speichern und dann auf Beenden Es sollte so etwas anzeigen, bestätige das Rollback: ![cli-rollback3](/img/rollback/cli-rollback3.png)

### Suche nach der zuletzt installierten Version

Leider listet SCALE nicht auf, auf welche Versionen Rollback möglich ist, sondern benötigt die Eingabe einer Version. Es gibt einen kurzen Durchgang, um die Versionierungsgeschichte für die App in Frage zu stellen:

1. exportiere KUBECONFIG=/etc/rancher/k3s/k3s.yaml
2. führen Sie  `helm History Jackett -n ix-jackett aus, wo "Jackett"` durch den Namen der App ersetzt werden sollte, die Ihre UI gebrochen hat Sie sehen Folgendes: ![history](/img/rollback/history.png) Notiz: "Chart" Spalte, es listet die Versionsnummern auf, die Sie in der Rollback-Schnittstelle eingeben können, die mit dem App-Namen vorangestellt ist. Von grober Größe nur die Versionsnummer in die GUI oder CLI eingeben, nicht der Name

## Löschen

### Mit der GUI löschen

1. Wählen Sie die Top 3 Punkte auf Ihrer Anwendungskarte
2. Wähle "Löschen"
3. Aktivieren Sie das Feld "Bestätigen"
4. Wähle "Weiter"

### Mit CLI löschen

1. Geben Sie Truenas SCALE Terminal über die GUI oder SSH ein
2. Folgenden Befehl eingeben
    - `cli -c 'app chart_release lösche release_name=NAME_OF_APPLICATION'`
    - z.B.: `cli -c 'app chart_release release_name=traefik'`

#### Video-Leitfaden

![typ:video](https://www.youtube.com/embed/ONbMhQJPQwc)
