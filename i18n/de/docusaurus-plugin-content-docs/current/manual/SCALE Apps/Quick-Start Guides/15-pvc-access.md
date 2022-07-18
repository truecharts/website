# 15 - Zugriff auf PVC-Daten

## Wo sind meine Bewerbungsdateien?

- Ihre Dateien werden im Container gespeichert
- Sie sind aus der Dateistruktur Ihres Servers nicht sichtbar, ohne das PVC vorher zu mounten

## PVC-Daten montieren

### Schwere_Skript

Eine Option ist die Verwendung von Heavy_Script.

Wenn Sie vorhaben, PVC-Speicher mehr als nur ein paar Mal zu montieren, ist dies die beste Option für Sie.

1. Das Skript listet alle Ihre PVC-Informationen für jede Anwendung auf
2. Beenden Sie Ihre Anwendung vor dem Mounten sicher
3. Halten Sie Ihr PVC an /mnt/temporär/STORAGE-NAME

Das Video startet bei der Einbaufunktion, so dass Sie sehen können, wie es aussieht.

Wenn Sie es installieren möchten, folgen Sie der Video-Anleitung ab 15:52.

[![Schwere_Skript](/img/pvc_access/video_thumbnail.jpg)](https://youtu.be/uZp4x_Susgo?t=616 "Schwere_Skript")

### Manuelle Methode - Neues Benutzerhandbuch

Die manuelle Montage des PVC-Speichers dauert etwas mehr Zeit als die Skriptmethode.

Ich kenne jedoch einige Benutzer gerne wissen, welche Befehle sie ausführen usw.

### Empfohlene Artikel

- Ein Terminal, das das Kopieren und Einfügen erlaubt
- Ein offenes Notizblock

1\. **STOP die Anwendung, die Sie beim Mounten planen**

2\. **Führe den folgenden Befehl aus, um deine PVC-Daten anzuzeigen**

```bash
k3s kubectl get pvc -A | sort -u | awk '{print "\t"\t" $2 "\t" $4}' | Spalte -t
```

3\. **Finde die Anwendung, die du einhängen möchtest**

Das kann zunächst verwirrend sein, da viele Anwendungen viele verschiedene PVC-Vorkommen haben werden.

![pvc_list](/img/pvc_access/pvc_list.png)

- Sie werden in diesem Foto sehen, Nextcloud hat viele verschiedene PVC-'s.
  - Wenn Sie es jedoch durch einen Blick auf die mittlere Spalte aufteilen, ist es nicht zu verwirrend.
  1. `data-nextcloud-redis-0`
      - Dies ist dein Redis PVC
  2. `db-nextcloud-postgresql-0`
      - Dies ist Ihr PostgreSQL PVC
  3. `nextCloud-Daten`
      - Dies ist Ihre Daten-PVC

4\. **Nachdem du gefunden hast, welches PVC du einlegen möchtest, kopiere die rechte Spalte (The Volume), die mit pvc beginnt in ein Notepad für den nächsten Befehl**

- If I was wanting to mount `nextcloud-data`, I would use:
- `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

5\. **Führe den folgenden Befehl aus, um den vollständigen Pfad zu deinen Anwendungen PVC** zu finden

```bash
zfs Liste | grep PVC_VOLUME
```

- Wenn ich von der Nextcloud abkomme, würde ich `PVC_VOLUME` einfach durch `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe ersetzen`

Beispiel:

```bash
zfs Liste | grep pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Hier ist, wie die Ausgabe aussehen soll ![nextcloud_Volumes](/img/pvc_access/nextcloud_volumes.png)

6\. **Halten Sie Ihr PVC**

```bash
zfs set mountpoint=/temporary/NAME VULL_PVC_PATH
```

Beispiel:

```bash
zfs set mountpoint=/temporary/nextcloud-data speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

- Dieser Befehl erzeugt keine Ausgabe, wenn er erfolgreich ist
- Jetzt solltest du in der Lage sein, das zu tun, was du willst, innerhalb der App PVC

7\. **Entfernt**

```bash
zfs set mountpoint=legacy POOL_NAME/ix-applications/releases/APPLICATION_NAME/Volumes/VOLUME-NAME
```

Beispiel:

```bash
zfs set mountpoint=legacy speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Danach mag ich immer `rmdir` in dem Verzeichnis, das beim Mounten erstellt wurde

- In meinem Fall würde ich laufen:

```bash
rmdir /mnt/temporär/nextcloud-Daten
```

- Dies hilft Ihnen nur, Ihren temporären Ordner sauber zu halten und lässt Sie wissen, was ist oder nicht.

- Keine Sorge, `rmdir` kann gemountete Ordner oder Ordner mit Inhalt nicht löschen.

### Manuelle Methode - Erweiterte Benutzerhandbuch

**ALLES MACHEN SIE DIE APP SICHERT WERDEN, WIE SIE DIE PVC MOUNTING**

#### Um PVCNAME zu erhalten:

```bash
k3s kubectl get pvc -n ix-APPNAME
```

#### Um das PVCPATH zu erhalten:

```bash
zfs Liste | grep legacy | grep APPNAME
```

#### Wenn du den PVC-Inhalt einhängen möchtest:

```bash
zfs set mountpoint=/temporary PVCPATH
```

Ihr PVC wird unter `/mnt/temporär` montiert

#### und wenn du fertig bist:

```bash
zfs set mountpoint=Legacy PVCPATH
```
