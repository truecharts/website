# Fragen.yaml

Questions.yaml ist die Datei, die von TrueNAS gerendert wird, um die Benutzeroberfläche zu erstellen. Wenn keine neuen Diagramme erstellt werden, wird das meiste von dem, was dieses Projekt tut, in frations.yaml Dateien zusammengeheftet, um bestehende Helm-Diagramme in Apps zu verwandeln.

## Syntax

In diesem Dokument geben wir Ihnen einen kurzen Leitfaden (portiert von IX Offiziell), der die verfügbaren Einstellungen in questions.yaml festlegt.

### Variablenreferenz der Frage

| Variable                      | Typ          | Benötigt | Beschreibung                                                                                                                                                                                                                                                                                                                                |
| ----------------------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| variabel                      | string       | wahr     | definieren Sie den Variablennamen, der in der Datei `values.yaml`angegeben wurde.                                                                                                                                                                                                                                                           |
| bezeichnen                    | string       | wahr     | definieren Sie das UI-Label.                                                                                                                                                                                                                                                                                                                |
| beschreibung                  | string       | falsch   | spezifizieren Sie die Beschreibung der Variable.                                                                                                                                                                                                                                                                                            |
| gruppe                        | string       | falsch   | Fragen nach Eingabewert gruppieren.                                                                                                                                                                                                                                                                                                         |
| schema                        | Wörterbuch   | wahr     | spezifiziere Schema Details für die `-Variable`                                                                                                                                                                                                                                                                                             |
| schema.type                   | string       | wahr     | den Werttyp für `Variable` angeben (aktuell unterstützte Typen sind String, int, boolean, path, hostpath, list, dict, ipaddr, und cron).                                                                                                                                                                                                    |
| schema.required               | bool         | falsch   | definieren, ob die Variable benötigt wird oder nicht (true \ false), Standardwert ist falsch                                                                                                                                                                                                                                               |
| schema.default                | objekt       | falsch   | geben Sie den Standardwert an.                                                                                                                                                                                                                                                                                                              |
| schema.min_Länge              | int          | falsch   | min Zeichenlänge für Zeichenvariablen des Stringtyps.                                                                                                                                                                                                                                                                                       |
| schema.max_Länge              | int          | falsch   | max. Zeichenlänge für Zeichentypvariablen des String-Typs.                                                                                                                                                                                                                                                                                  |
| schema.min                    | int          | falsch   | min. Integer-Länge.                                                                                                                                                                                                                                                                                                                         |
| schema.max                    | int          | falsch   | maximale Ganzzahllänge.                                                                                                                                                                                                                                                                                                                     |
| schema.enum                   | []Wörterbuch | falsch   | spezifizieren Sie die Optionen, wenn der Variablentyp `String`ist<br /><br />enum:<br />- Wert: "RollingUpdate"<br />&nbsp;&nbsp;description: "Neue Pods erstellen und dann alte löschen"<br />- Wert: "Recreate"<br />&nbsp;&nbsp;description: "Bestehende Pods vor dem Erstellen von neuen erstellen" |
| schema.valid_chars            | string       | falsch   | regulärer Ausdruck für die Validierung von Eingabezeichen.                                                                                                                                                                                                                                                                                  |
| schema.subquestions           | []Unterfrage | falsch   | füge ein Array von Unterfragen hinzu.                                                                                                                                                                                                                                                                                                       |
| schema.show                   | string       | falsch   | zeige die aktuelle Variable an, wenn die Bedingung wahr ist, zum Beispiel `show_if: [["workloadType", "=", "CronJob"]]`                                                                                                                                                                                                                     |
| schema.show_subquestions_if | string       | falsch   | Zeige Unterfragen, wenn wahr oder gleich einer der Optionen ist. zum Beispiel `show_subquestion_if: "static"`. wird dies automatisch in das für `schema.show_if` angegebene Filterformat konvertieren.                                                                                                                                      |
| schema.attrs                  | []Variablen  | falsch   | spezifiziert wenn `schema.type` Wörterbuch ist, um Attribute anzugeben, die im Wörterbuch erlaubt sind.                                                                                                                                                                                                                                     |
| schema.items                  | []Variablen  | falsch   | spezifiziert wenn `schema.type` eine Liste ist, um Attribute zu deklarieren, die in der Liste erlaubt sind.                                                                                                                                                                                                                                 |
| schema.private                | bool         | falsch   | spezifiziert für die Deklaration sensibler Felder.                                                                                                                                                                                                                                                                                          |
| schema.null                   | bool         | falsch   | gibt an, ob der Wert für die Variable null sein kann. standardmäßig auf falsch.                                                                                                                                                                                                                                                             |

#### Unterfragen

`Unterfragen []` können `Unterfragen` oder `show_subquestions_if` Schlüssel nicht enthalten, aber alle anderen Schlüssel in der obigen Tabelle werden unterstützt. Auch Variablen mit `Schema.type` Liste unterstützen `Unterfragen` nicht.

#### Spezielle Fragen

Es gibt einige neuartige Fälle, in denen wir gerne die Möglichkeit zur Konfiguration / Verwaltung von Ressourcen für Arbeitsbelastungen mit dem Erhalt einiger Daten aus dem System dynamisch zur Verfügung stellen möchten. So kann ein Diagramm bestimmte Aktionen spezifizieren, die vom System für eine Variable durchgeführt werden sollen, indem eine Referenz definiert wird. Ein Beispiel verdeutlicht dieses Konzept:

```yaml
- Variable: Volume
  label: "Volume"
  Schema:
    type: dict
    $ref:
      - "normalize/ixVolume"
    attrs:
      - Variable: mountPath
        label: "Mount Path"
        description: "Pfad, wo das Volume in den Pod eingebunden wird"
        Schema:
          Typ: Pfad
          benötigt: true
      - Variable: datasetName
        label: "Dataset Name"
        Schema:
          Typ: true: true
          required: true
```

In der obigen Variable definieren wir ein `$ref` im Schema, das festlegt, dass das System eine Aktion zur Normalisierung des für die Variable angegebenen Wertes durchführen soll. In diesem konkreten Fall `ix_volume` ist ein eingeführtes Konzept, bei dem wir empfehlen, ein Volume zu verwenden, das wir automatisch beim Chart-Release-Rollback zurückführen können. Im Wesentlichen ist nur ein Volume `hostPath` für das das System automatisch den angegebenen Datensatz erstellt. Wir haben die folgenden Arten von Aktionen unterstützt in `$ref` derzeit:

1. definitionen
2. normalisiere für (1), das System aktualisiert automatisch Schema für eine bestimmte Definition. Zum Beispiel

```yaml
- Variable: hostInterface
  Beschreibung: "Bitte Host-Schnittstelle angeben"
  Label: "Host Interface"
  Schema:
    Typ: String
    benötigt: true
    $ref:
      - "Definitions/Interface"
```

Das System wird die verfügbaren Schnittstellen für den Benutzer automatisch ausfüllen, basierend auf den Schnittstellen auf dem System. Für (2) normalisiert das System Werte oder führt einige Aktionen aus, wie oben beschrieben.

#### Standardisierte frations.yaml Abschnitte

Um die Wartungslast unserer App-Sammlung zu minimieren, streben wir stets eine weitestgehende Standardisierung an. Dasselbe gilt für questions.yaml. Hier sind einige code-standardisierte Code-Snippets enthalten, von denen erwartet wird, dass sie in jede App aufgenommen werden. Seien Sie sich bewusst, dass bestimmte Funktionen manchmal voll funktionsfähig sind oder sein könnten. Wenn man sie auslässt, würde dies jedoch die Wartungslast immer erhöhen und oft wurde gesagt, dass die Funktionalität später ohnehin im Common-Chart hinzugefügt wird.

#### Gruppen

Um sicherzustellen, dass alle Apps etwas gleich bleiben, verwenden wir eine Liste von standardisierten Gruppen für den Gruppen-Bereich. Bitte stellen Sie sicher, dass Sie diese Gruppen in Ihren Apps verwenden:

```yaml
groups:
  - name: "Container Image"
    description: "Image to be used for container"
  - name: "Workload Configuration"
    description: "Configure workload deployment"
  - name: "Configuration"
    description: "additional container configuration"
  - name: "Networking"
    description: "Configure Network and Services for container"
  - name: "Storage"
    description: "Persist and share data that is separate from the lifecycle of the container"
  - name: "Resources and Devices"
    description: "Specify resources/devices to be allocated to workload"
  - name: "Ingress Configuration"
    description: "Ingress Configuration"
  - name: "Security"
    description: "Configure security context"
  - name: "Advanced"
    description: "Advanced Configuration"
  - name: "WARNING"
    description: "WARNING"
```

#### Allgemeine Konfigurationsoptionen

Diese Optionen sind immer enthalten\* weil fast jedes Diagramm (letztendlich) eine Verwendung für sie und/oder andere Teile des gemeinsamen Diagramms von ihnen abhängt. Sie werden als allgemeine Optionen bezeichnet, da sie die grundlegenden Funktionalitäten eines Diagramms beeinflussen. Zum Beispiel: Benutzerdefinierte Umgebungsvariablen, Berechtigungen und Zeitzonen.

\*`PUID`, `PGID`, `UMASK` sind nur enthalten, wenn sie benötigt werden.

```yaml
  - variable: env
    group: "Configuration"
    label: "Image Environment"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: TZ
          label: "Timezone"
          schema:
            type: string
            default: "Etc/UTC"
            $ref:
        - "definitions/timezone"
        - variable: PUID
          label: "PUID"
          description: "Sets the PUID env var for LinuxServer.io (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: PGID
          label: "PGID"
          description: "Sets the PGID env var for LinuxServer.io (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: UMASK
          label: "UMASK"
          description: "Sets the UMASK env var for LinuxServer.io (compatible) containers"
          schema:
            type: string
            default: "002"

  # Configure Custom Environment Variables
  - variable: environmentVariables
    label: "Image environment"
    group: "Configuration"
    schema:
      type: list
      default: []
      items:
        - variable: environmentVariable
          label: "Environment Variable"
          schema:
            type: dict
            attrs:
              - variable: name
                label: "Name"
                schema:
                  type: string
              - variable: value
                label: "Value"
                schema:
                  type: string
```

#### Sicherheitskontext-Konfigurationsoptionen

```yaml
  # Enable privileged
  - variable: securityContext
    group: "Security"
    label: "Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: privileged
          label: "Enable privileged mode for Common-Chart based charts"
          schema:
            type: boolean
            default: false
  # Set Pod Security Policy
  - variable: podSecurityContext
    group: "Security"
    label: "Pod Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: runAsNonRoot
          label: "runAsNonRoot"
          schema:
            type: boolean
            default: true
        - variable: runAsUser
          label: "runAsUser"
          description: "The UserID of the user running the application"
          schema:
            type: int
            default: 568
        - variable: runAsGroup
          label: "runAsGroup"
          description: The groupID this App of the user running the application"
          schema:
            type: int
            default: 568
        - variable: fsGroup
          label: "fsGroup"
          description: "The group that should own ALL storage."
          schema:
            type: int
            default: 568
        - variable: fsGroupChangePolicy
          label: "Wann soll das Eigentum übernommen werden?"
          schema:
            type: string
            default: "OnRootMismatch"
            enum:
              - Wert: "OnRootMismatch"
                description: "OnRootMismatch"
              -
```
