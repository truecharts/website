# Migration zwischen den Versionen

Manchmal können wir keine automatische Aktualisierung zwischen neuen Versionen unserer Apps garantieren. Diese Seiten enthalten einige gemeinsame Szenarien und geben Anleitungen, wie man sich manuell zwischen verschiedenen Versionen und Zügen bewegen kann.

## Zwischen Zügen

Eine App wird immer nur in einem Zug sein. Wenn eine App in einen anderen Zug wechselt, können Sie nicht automatisch aktualisieren Unsere grundlegende Anleitung für diese Fälle ist:

- Sichern Sie alle Ihre Dateien, Konfigurationen und Datenbanken.
- Machen Sie Notizen darüber, wie Sie Ihre App zuvor eingerichtet haben
- Alte App löschen
- Installieren Sie die neue App mit Ihren zuvor erstellten Notizen
- Die neue App stoppen
- Legen Sie alle Ihre alten Dateien zurück.
- Re starten Sie die neue App

## Zwischen den Versionen

Wenn neue Versionen Änderungen einführen (was oft Hauptversionsänderungen wäre), müssen sie den Benutzer neu installieren. Wie auch immer: Wir stellen oft bereits Migrationsschreiber zur Verfügung und haben uns mit diesen Fragen manuell befasst.

### Common 2.0 -> gemeinsame 3.0 basierte Apps

In Fällen, in denen Sie auf eine gewöhnliche 3.0 basierte App aktualisieren, ist eine Neuinstallation derzeit erforderlich. Bitte beachten Sie: Die Installation wird Ihre Daten nucken! Beachten Sie auch, dass wir keine gewöhnlichen 2.0-basierten Installationen in der Dropdown-Versionsliste zur Verfügung haben

### Common 3.0 -> gemeinsame 4.0 basierte Apps

In Fällen, in denen Sie auf eine gängige 4.0-basierte App aktualisieren, ist eine Neuinstallation derzeit erforderlich. Bitte beachten Sie: Die Installation wird Ihre Daten nucken! Fehler: Gemeinsame 3.0 basierte Apps sind immer noch verfügbar für die Installation mit der Dropdown-Version

### Allgemeine 4.0 -> gemeinsame 5.0 basierte Apps

Common 5.0.0 ist eigentlich ein ziemlich kleines Update: Es erlaubt nur, eine RAMdisk zu verwenden, wenn emptyDir auf hostPathMount verwendet wird. Es handelt sich jedoch immer noch um eine bahnbrechende Veränderung.

Um zu aktualisieren, empfehlen wir alle Einträge aus hostPathMounts/customStorage zu entfernen und sie nach dem Update zu lesen
