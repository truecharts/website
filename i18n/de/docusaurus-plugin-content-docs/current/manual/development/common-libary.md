# Gemeinsames Bibliotheksdiagramm

In Helm 3 hat ihr Team das Konzept einer [Bibliothekskarte](https://helm.sh/docs/topics/library_charts/) eingeführt.

> Ein Bibliotheksdiagramm ist eine Art Helm-Diagramm, die primitive Diagramme oder Definitionen definiert, die von Helm-Vorlagen in anderen Diagrammen geteilt werden können. Dies erlaubt Benutzern Snippets von Code zu teilen, die über Diagramme hinweg wiederverwendet werden können, um Wiederholungen zu vermeiden und Diagramme DRY zu behalten.

Die erste Version unserer Common Library wurde von k8s-zuhause portiert die sie einführten, weil sie viele Diagramme sahen, die nur wenige Auswahloptionen in ihren Helm-Diagrammen benötigten.

Nehmen wir zum Beispiel Sonarr, Sabnzbd, Overseerr. Jede dieser Diagramme erfordert nur die Einstellung `Service`, `Port`, `Persistenz`, `ingress` und `Bild` , da Zustands- und App-Konfiguration von der Anwendung selbst verwaltet wird. Um ein wenig DRY zu bleiben (Wiederholen Sie sich nicht) und mit Helm 3 Verwendung für ein Bibliotheksdiagramm zu bleiben, Wir sahen dieses Muster und entschieden uns, es lohnt sich für uns, eine Bibliothek zu erstellen. This means each one of these app charts has a dependency on what we call the `common` library.
