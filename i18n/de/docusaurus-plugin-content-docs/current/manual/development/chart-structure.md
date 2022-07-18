# TrueNAS SCALE Kartenstruktur

Dies ist eine allgemeine Übersicht über die Struktur einer SCALE App und/oder Helm Chart, es reflektiert nicht direkt TrueCharts spezifische Einstellungen.

Die folgenden Dateien werden allgemein als "normales" Helmdiagramm betrachtet:

```text
charts/<train>/<chart name>/
  charts/ # Verzeichnis mit Abhängigkeitsdiagrammen
  Chart. aml # Benötigte Helm Diagramm Informationsdatei
  README. d # Optional: Helm Readme Datei (wird auch in TrueNAS SCALE UI gerendert)
  templates/ # Ein Verzeichnis von Vorlagen, die in Kombination mit Werten. ml erzeugt K8s YAML
  Werte. aml # Die Standard-Konfigurationswerte für dieses Diagramm
```

Die folgenden Dateien sind spezifisch für TrueNAS SCALE:

```text
charts/<train>/<chart name>/SCALE/
  app-readme. d # TrueNAS SCALE Specific: Readme Datei für die Anzeige in TrueNAS SCALE UI, automatisch generierte
  Fragen. aml # TrueNAS SCALE Specific: Datei, die Fragen für TrueNAS SCALE UI
  ix_values enthält. aml # Versteckte Konfigurationswerte bei der Installation mit TrueNAS SCALE
  Element. aml # Enthält allgemeine Informationen über die App für die TrueNAS SCALE UI
```

*Sehen Sie sich die Quell-Helm-Chart [Entwickler-Referenz](https://helm.sh/docs/chart_template_guide/) für einen kompletten Spaziergang durch die Entwicklung von Diagrammen an.*

Um ein Upstream-Chart zu konvertieren, um die Vorteile der TrueNAS SCALE erweiterten UX zu nutzen, erstellen Sie zuerst eine `item.yaml` Datei. Diese Datei enthält neben anderen Katalogeinträgen eine Liste von Kategorien, in die dieses Diagramm passt. Dies hilft Benutzern beim Navigieren und Filtern der Katalog-Benutzeroberfläche.

`$ Katzenkarten/<train>/<chart name>/SCALE/item.yaml`

```yaml
Kategorien:
  - generisch
icon_url: "http://ix_url"
```

Fügen Sie dann eine `questions.yaml` Datei hinzu, um den Benutzer nach etwas zu fragen.

```yaml
groups:
  - name: "Container Images"
    description: "Image to be used for container"
questions:
  - variable: image
    description: "Docker Image Details"
    group: "Container Images"
    schema:
      type: dict
      required: true
      attrs:
        - variable: repository
          description: "Docker image repository"
          label: "Image repository"
          schema:
            type: string
            required: true
        - variable: tag
          description: "Tag to use for specified image"
          label: "Image Tag"
          schema:
            type: string
            default: "latest"
        - variable: pullPolicy
          description: "Docker Image Pull Policy"
          label: "Image Pull Policy"
          schema:
            type: string
            default: "IfNotPresent"
            enum:
              - value: "IfNotPresent"
                description: "Only pull image if not present on host"
              - value: "Always"
                description: "Always pull image even if present on host"
              - value: "Never"
                description: "Never pull image even if it's not present on host"
```

Das obige wird den Benutzer mit 2 Textfeldern und einem Dropdown-Menü in der UI erfragen Details für die Bildkonfiguration in einem Helm-Diagramm. *Weitere Informationen zu questions.yaml finden Sie [hier](https://wiki.truecharts.org/development/questions-yaml/)*
