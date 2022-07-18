# 14 - Sicherung und Wiederherstellung

## Anforderungen

Diese Anleitung nutzt unser Kommandozeilenwerkzeug `TrueTool`.

Dies sollte durch Verwendung installiert werden: `pip install truetool`

Bitte beachten Sie, dass dies nach jedem TrueNAS SCALE Update neu installiert werden muss.

## Sichern

### Manuelle Sicherungen erstellen

Manuelle Sicherungen können einfach mit TrueTool erstellt werden.

`truetool -b`

Es löscht automatisch exzessive Backups, was standardmäßig auf maximal 14 Backups hinausläuft. Um dies zum Beispiel auf 31 zu erhöhen, benutzen:

`truetool -b 31`

Dies lässt sich auch leicht mit TrueTool Update, Sync, Prune usw. kombinieren:

`truetool -b 31 -u -s -p`

Um herauszufinden, welche Sicherungen vorher erstellt wurden, können Sie den folgenden Befehl ausführen:

`truetool -l`

### Erstelle häufige Sicherungen

SCALE enthält ein integriertes System zur Sicherung der kubernetes Objekte sowie zur Erstellung von Schnappschüssen des `PVC` und `ix_volume` Speichers. Es erstellt diese jedoch NICHT außerhalb von SCALE Upgrades.

Um tägliche Sicherungen der kubernetes Objekte zu erstellen, erstellen Sie einen Cron-Job in der SCALE UI mit dem TrueTool Befehl, den Sie ausführen möchten. Wenn Sie sicherstellen wollen, dass TrueTool nach einem TrueNAS SCALE Update automatisch aktualisiert und/oder (neu) installiert wird, können Sie Folgendes verwenden:

`pip install --no-cache-dir --upgrade truetool && truetool -b -s -u -a -p`

### Exportiere Backups

Das obige erzeugt nur eine Sicherung der kubernetes Objekte und einen Schnappschuss des `PVC` und `ix_volume` Speichers. Diese Backups werden unter demselben ix_applications Datensatz gespeichert.

Sie schützt diese nicht vor beispielsweise der Löschung von Datensätzen oder deren Speicherung auf einem externen System.

Wir **empfehlen sehr** sowohl ein internes Backup (separater Datensatz auf demselben System) *als auch* ein Offsite-Backup. Man könnte ein normales rekursives (! Replikation des `ix-Volumes` Datensatzes mit der SCALE GUI, mit den folgenden wenigen speziellen Tricks durch Bearbeiten der Replikation nach der Erstellung:

Um dies zu tun, richten Sie folgende Replikationsaufgabe ein:

1[rep1](/img/backup/rep1.png) 1[rep2](/img/backup/rep2.png)

Es ist auch wichtig sicherzustellen, dass Sie regelmäßige Konfigurations-Backups des SCALE Systems selbst behalten, vorzugsweise unmittelbar nach der Sicherung der Apps). Dies ist jedoch nicht Teil dieses Leitfadens und wir gehen davon aus, dass du es selbst getan hast.

### Überprüfe Sicherungen

Um welche Sicherungen vorhanden sind, kann man folgenden Befehl in einer Shell verwenden:

`truetool -l`

## Wiederherstellen

Einer der wichtigsten Teile der Sicherungen ist die Sicherstellung ihrer Wiederherstellung. Es gibt zwei Szenarien für eine Wiederherstellung:

1. Ein funktionierendes System zurücksetzen

2. Gesamte Systemwiederherstellung

### Ein laufendes System zurücksetzen

Ein laufendes System rückgängig zu machen, ist ziemlich trivial. Aber es gibt ein paar Vorbehalte:

- Dies wird den kubernetes Knoten neu initialisieren, was bedeutet, dass alle kubernetes Objekte, die nicht mit dem App-System eingesetzt werden, zurückgesetzt werden
- Sie können keine einzelnen Apps zurücksetzen

Um ein bestehendes System rückgängig zu machen, ist der Prozess wie folgt:

1. Liste deine aktuellen Sicherungen mit `truetool -l`

2. Wähle ein Backup um es rückgängig zu machen und zu bemerken, dass es Name ist

3. Ausführen: `truetool -r BACKUPNAME` (wo Sie BACKUPNAME durch den Namen des oben ausgewählten Backups ersetzen)

Bitte beachten Sie, dass dies eine LONG Zeit dauern kann.

### Gesamte Systemwiederherstellung

Manchmal müssen Sie entweder Ihren Pool löschen, in einen neuen Pool migrieren oder ein System komplett wiederherstellen. Mit den obigen Schritten ist das alles sehr möglich.

0. Initiieren Sie das (Pool für) App-System noch nicht.

1. Optional: Wenn das SCALE System selbst ebenfalls gelöscht wird, stellen Sie sicher, dass es mittels eines SCALE config export **zuerst** wiederhergestellt wird.

2. Mit ZFS-Replikation verschieben Sie den zuvor gesicherten `ix-Applikationen` Datensatz zurück.

3. Fahren Sie mit den auf `aufgelisteten Schritten fort: Ein laufendes System zurücksetzen`

## Video-Leitfaden

TBD
