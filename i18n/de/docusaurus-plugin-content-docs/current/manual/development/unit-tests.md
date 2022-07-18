# Einheitstests

Wir testen unsere gemeinsame Bibliothek, obwohl sie nicht in der Nähe der vollständigen Deckung ist, aber sie bietet einige grundlegende Prüfungen.

## Durchführung der Tests

Das Ausführen dieser Tests kann beliebig durchgeführt werden. In diesem Dokument beschränken wir uns auf die Verwendung von Visual Studio Code mit Hilfe unseres Entwicklungs-Containers.

### Verwendung von Visual Studio Code

Unser Repo enthält einen Visual Studio Code [Entwicklungscontainer](https://code.visualstudio.com/docs/remote/containers) und `starten. Sohn` , mit dem Sie schnell eine Umgebung einrichten können, in der Sie die Tests ausführen können.

#### Voraussetzungen

- Visual Studio Code ist installiert.
- Docker ist installiert und läuft.
- Die Erweiterung "Remote - Containers" wird in Visual Studio Code installiert und aktiviert.

Weitere Details finden Sie in der [-offiziellen Dokumentation](https://code.visualstudio.com/docs/remote/containers#_system-requirements).

#### Führe Tests aus

Sobald Visual Studio Code eingerichtet ist und Sie die `Diagramme` geöffnet haben Sie werden ein Popup sehen, wenn Sie den Arbeitsbereich in einem Entwicklungs-Container erneut öffnen möchten:

![Visual Studio Code Entwicklung Container-Popup](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_devcontainer_popup.png)

Wählen Sie aus, um dies zu tun, und ein Dockerizierter Arbeitsbereich wird gebaut. Sie können nun Visual Studio Code wie gewohnt verwenden.

Um die Unit-Tests auszuführen oder zu debuggen, klicken Sie auf "Ausführen" in der linken Seitenleiste und wählen die gewünschte Konfiguration:

![Visual Studio Code Ausführung Konfigurationen](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_run_unittests.png)

- _UnitTest - nur aktive spec Datei_: Diese Konfiguration wird versuchen, die aktuell geöffnete Testdatei auszuführen.

  **Hinweis:** Stellen Sie sicher, dass Sie eine gültige Testdatei geöffnet haben (`. b` Dateien im Ordner `test/charts` oder dies wird nicht funktionieren.

- _UnitTest - alle spec Dateien_: Diese Konfiguration führt alle Testdateien im Ordner `test/charts` aus.

Als nächstes drücken Sie das grüne "Spiel"-Symbol. Dadurch wird das Ergebnis in einem Terminalfenster angezeigt.

## Ausgang

Ein erfolgreicher Test wird so etwas wie Folgendes ausgeben...

```text
Begonnen mit den Ausführungsoptionen --seed 52955

common-test::statefulset volumeClaimTemplates
  können Werte für VolumenClaimTemplates PASS (0. 6s)
  VolumenClaimTemplates sollten standardmäßig PASS (0. 6s)

common-test::ports settings
  targetPort kann PASS überschrieben werden (0. 7s)
  Port-Name kann PASS (0. 7s)
  defaults to name "http" on port 8080 PASS (0. 6s)
  targetPort kann kein benannter Port PASS (0. 5s)

common-test::pod replicas
  defaults 1 PASS (0. 8s)
  akzeptiert Integer als Wert PASS (0. 8s)

common-test::Environment Settings
  Prüfen Sie keine Umgebungsvariablen PASS (0. 5s)
  setzen Sie "valueFrom" Umgebungsvariablen PASS (0. 1s)
  setzen Sie "static" und "Dynamic/Tpl" Umgebungsvariablen PASS (0. 5s)
  setzen Sie "Dynamic/Tpl" Umgebungsvariablen PASS (0. 1s)
  setzen Sie "static" Umgebungsvariablen PASS (0. 0s)

common-test::ingress
  ingress with hosts PASS (0. 0s)
  sollte deaktiviert werden, wenn ingress. nabled: falscher PASS (0. 6s)
  ingress with hosts template is evaluated PASS (0. 1s)
  ingress with hosts and tls PASS (0. 5s)
  ingress with hosts and tls templates is evaluated PASS (0. 6s)
  sollte aktiviert werden, wenn ingress. nabled: true PASS (0. 6s)

common-test::controller type
  akzeptiert "Daemonset" PASS (0. 6s)
  akzeptiert "statefulset" PASS (0. 6s)
  defaults to "Deployment" PASS (0.
```
