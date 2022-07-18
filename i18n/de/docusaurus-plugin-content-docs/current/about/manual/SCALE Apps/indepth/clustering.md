# Clustering

Eines der letztendlichen Ziele von SCALE ist es, hyperkonvergierte Cluster auf Basis von ZFS, Gluster und Kubernetes zu betreiben. Während dies großartig ist, möchten wir in Zukunft 3 Möglichkeiten hervorheben, Clustering mit TrueCharts Apps zu nutzen.

Derzeit wird noch kein Cluster mit TrueCharts unterstützt, aber wir treffen bereits Vorkehrungen während unserer Entwicklungsphase, um Clustering in Zukunft reibungslos umzusetzen.

## Single-Pod flexibel

Diese Apps (kann) führen nur eine einzige Instanz eines Pods gleichzeitig aus, so dass kein "hochverfügbares" Setup verfügbar ist. Allerdings können diese Apps immer noch dynamisch zu verschiedenen Knoten verschoben werden, wenn ein Knoten fehlschlägt, sollte dies sicherstellen, dass die Ausfallzeit relativ klein bleibt. Diese Apps können auch über alle Knoten von kubernetes "verbreitet" werden. Das bedeutet auch, dass es sich lohnt, große Single-Pod-Apps in mehrere kleinere Anwendungen zu schneiden, Zum Beispiel: n ziehen wir es vor, kleine Datenbankserver mit jeder App (diese können dynamischer über mehrere Knoten verteilt werden) über eine Big Single Pod Flexible App zu verteilen.

Einige Beispiele von Apps, die nicht mit mehr als einem Pod auf einmal laufen können, auch wenn wir wollten:

- Sonarr
- Lidarr
- Radarr
- Plex

## Single-Pod nicht flexibel

Diese Apps können nicht mit mehr als 1 Pod gleichzeitig ausgeführt werden und auf der anderen Seite sind an einen Knoten gebunden. Das bedeutet: Host-Down? Pod-Down!

Dies wird fast immer dadurch verursacht, dass Apps an eine bestimmte Hardware gebunden sind.

*Beispiele:*

- zwavejs2mqtt
- HomeAssistant (abhängig von hinzugefügter Hardware)
- Handbremse (abhängig von zusätzlicher Hardware)

## Hochverfügbare Apps

Diese Apps sind als die widerstandsfähigsten von allen konzipiert, sie können Knotenfehler und Pod-Fehler ohne Probleme handhaben weil sie immer mehrere Pods gleichzeitig ausführen, die ausfüllen, sobald Pods oder Knoten anfangen zu scheitern.

Weil diese Apps auch am kompliziertesten sind wir versuchen, sie auf Schlüsselbereiche des TrueCharts Ökosystems zu beschränken, das nicht in kleinere Teile (Single-Pod Flexible) leicht geschnitten werden kann. Gleich: Einzug und Überwachung.

*Beispiele:*

- Traefik
