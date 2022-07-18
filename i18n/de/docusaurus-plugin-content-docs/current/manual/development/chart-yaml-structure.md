# Chart.yaml Layout

Bei TrueCharts versuchen wir einige Dateien standardisiert zu halten. Dies ermöglicht es uns, Änderungen an diesen Diagrammen in großen Mengen mit geringerem Fehlerrisiko vorzunehmen. Chart.yaml ist eine dieser Dateien. In dieser Dokumentation werden wir die standardisierten Layoutoptionen erläutern. Für ein Beispiel-Layout sehen Sie bitte unsere Standard Chart.yaml [Vorlage](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml)

## Layout erklärt

```yaml
apiVersion: Die Diagramm API Version (erforderlich)
kubeVersion: Ein SemVer Bereich kompatibler Kubernetes Versionen (optional)
Name: Der Name des Diagramms (erforderlich)
Version: Eine SemVer 2 Version (erforderlich)
Upstream_version: Eine SemVer 2 Version, wie von einer Upstream Helm Chart Quelle verwendet (optional)
appVersion: Die Version der App, die diese enthält (optional). Benötigt nicht SemVer. Angebote empfohlen.
Beschreibung: Eine Beschreibung dieses Projekts mit einem Satz (optional)
Typ: Der Typ des Diagramms (optional)
veraltet: Ob dieses Diagramm veraltet ist (optional, optional, boolean)
Home: Die URL dieser Projekt-Startseite (optional)
Symbol: Eine URL zu einem SVG oder PNG-Bild, das als Symbol verwendet werden soll (optional).
Keywords:
  - Eine Liste von Keywords für dieses Projekt (optional)
Quellen:
  - Eine Liste von URLs für Quellcode für dieses Projekt (optional)
Abhängigkeiten:
  - Name: Der Name des Diagramms (nginx)
    Repository: Die Repository-URL ("https://example. om/charts") oder Alias ("@repo-name")
    Version: Die Version des Diagramms ("1.2. ")
    Bedingung: (optional) Ein yaml-Pfad, der sich mit einem Boolean auflöst, der zum Aktivieren/Deaktivieren von Diagrammen verwendet wird (z.B. subchart1. nabled )
    tags: # (optional)
      - Jedes Element kann eine Zeichenkette oder ein Paar untergeordneter Elemente sein.
    Alias: (optional) Alias für das Diagramm. Nützlich, wenn Sie das selbe Diagramm mehrmals
Betreuer hinzufügen müssen: # (optional)
  - Name: Der Name der Betreuer (benötigt für jeden Betreuer)
    E-Mail: Die E-Mail der Betreuer (optional für jeden Betreuer)
    Url: Eine URL für den Betreuer (optional für jeden Betreuer)
Anmerkungen:
  Beispiel: Eine Liste von Anmerkungen mit Namen (optional).
```

### Kommentieren

In der obigen Beschreibung gibt es viele Werte, die nicht wirklich verwendet werden. Einige von ihnen, wie `veraltet`, setzen wir einfach auf falsch. Während andere wie `-Anmerkungen` auskommentiert werden.

Please refer to our standard Chart.yaml [template](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml) to see which unused values needs which treatment.

### Abhängigkeiten

Wir erwarten, dass jedes Diagramm unsere Common-Chart in irgendeiner Eigenschaft nutzt, es sei denn, es ist absolut unmöglich, dies zu tun. Das bedeutet auch, dass wir erwarten, dass die Common-Chart immer die erste Abhängigkeit in der Liste ist. Dies ermöglicht es uns, alle Referenzen von gemeinsamen Diagrammen in großen Mengen zu aktualisieren.

Es wird erwartet, dass alle anderen Abhängigkeiten in alphabetischer Reihenfolge aufgeführt werden.

### Maintainer

Der einzige Betreuer sollte immer TrueChart sein, , da von dem TrueCharts-Kern-Team erwartet wird, dass es einspringt, wenn die anderen Betreuer ihre Arbeit nicht pflegen. Ein Beispiel dafür, wie TrueCharts als Maintainer aufgelistet werden, ist in unserer Standard Chart.yaml [Vorlage](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml) verfügbar.
