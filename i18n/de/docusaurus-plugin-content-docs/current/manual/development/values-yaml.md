# Werte.yaml Dateien

Values.yaml Dateien enthalten im Allgemeinen immer Konfigurationseinstellungen für Helm-Diagramme, TrueCharts ist nicht anders. Allerdings haben wir mehrere verschiedene Werte.yaml Dateien, mit unterschiedlichen Zielen. Weil TrueNAS SCALE nur etwas anders funktioniert als die Standard Helm Charts

## Die Dateien

### values.yaml

Diese Datei enthält die Standardkonfiguration, wenn die App unter Verwendung von stock helm ausgeführt wird (nicht SCALE). Es wird auch für die Testing-Suite verwendet.

### ix_values.yaml

Diese Datei enthält Konfigurationswerte, die nicht in questions.yaml enthalten sind, aber trotzdem in die resultierende Konfiguration kopiert werden sollten. Es wird hauptsächlich verwendet, um sicherzustellen, dass die Einstellung durch den Betreuer mit jedem Update geändert werden kann, wie z.B. Versionen, was nicht möglich ist, wenn die Dinge als Standardwerte in Fragen gesetzt werden. aml

Diese Datei wird jedoch nicht sehr gut durch Validierung und CI überprüft. Benutzen Sie es, wenn Sie es unbedingt müssen.

Eine wichtige Einstellung in ix_values. aml ist die optionale Einstellung: `startAsRoot: true` Diese Einstellung ist ein Kompatibilitäts-Schalter für Container, die von root gestartet werden müssen, oft verwenden diese Container PUID und PGID um (niedriger) weg vom Root zu deeskalieren, aber es muss gestartet werden.

Ein minimales Beispiel wäre ix_values.yaml:

```yaml
##
# Diese Datei enthält Werte.yaml Inhalte, die zur Ausgabe von Fragen hinzugefügt werden. aml
# Es ist NUR für Inhalte gedacht, von denen der Benutzer NICHT erwartet wird, dass er sich ändert.
# Beispiel: Alles unter "Bild" ist nicht in questions.yaml enthalten, sondern ist hier enthalten.
##

Bild:
  repository: jacobalberty/unifi
  tag: 6.0. 5
  pullPolicy: IfNotPresent


##
# Die meisten anderen Standardwerte sind in Fragen gesetzt. aml
# Für andere Optionen wenden Sie sich bitte an das Wiki, default_values.yaml oder das Common Library Chart
##

```
