# Speicher

Dieser Artikel dient als Entwicklungserweiterung für den hier verfügbaren Speicherartikel

## Speicher- und Common-Chart

Für all diese Speicherlösungen benötigen wir, dass das gemeinsame Diagramm der App hinzugefügt wird. Das Common-Chart behandelt sowohl die Verbindung/Hinzufügung des Speichers zum Container als auch das Drehen spezieller k8s-Aufträge, um die Berechtigungen zu korrigieren, wenn dies für den benutzerdefinierten Speicher erforderlich ist.

### Integrierter Dauerspeicher

Beim Hinzufügen einer App gibt es fast immer bestimmte Ordner, die für eine solide Performance der Apps benötigt werden. Zum Beispiel Konfigurationsdateien, die bei einem Neustart dauerhaft sein sollten.

Für diese Speicherplätze können wir einfach Fixes Werte in der Benutzeroberfläche hinzufügen diese Einstellungen können nicht deaktiviert oder entfernt werden und würde standardmäßig und bevorzugt auf die "interne" Speicherklasse beschränkt sein den Benutzer zu hindern, sie zu deaktivieren, stellt sicher, dass Benutzer (irrtümlicherweise) den Speicher nicht entfernen.

```yaml
  - Variable: persistenz
    label: "Integrated Persistent Storage"
    description: "Websocket Service"
    group: "Storage"
    schema:
      type: dict
      attrs:
        - Variable: Daten
          label: "App Config Storage"
          description: "Speichert die Anwendungskonfiguration."
          Schema:
            type: dict
            attrs:
              - Variable: aktiviert
                Label: "Aktiviere den Speicher"
                Schema:
                  Typ: boolean
                  default: true
                  hidden: false
              - Variable: storageClass
                label: "Type of Storage"
                description: " Warnung: " Alles andere als SCALE-ZFS wird Rollback!"
                schema:
                  type: string
                  default: "SCALE-ZFS"
              - variable: mountPath
                label: "mountPath"
                description: "Path inside the container the storage is mounted"
                schema:
                  type: string
                  default: "/config"
                  hidden: true
              - variable: emptyDir
                label: "EmptyDir Volume"
                schema:
                  type: dict
                  hidden: false
                  attrs:
                    - variable: enabled
                      label: "Use emptyDir volume"
                      schema:
                        type: boolean
                        default: false
                        hidden: false
                        show_subquestions_if: true
                        subquestions:
                          - variable: medium
                            label: "EmptyDir Medium"
                            schema:
                              type: string
                              default: ""
                              enum:
                                - value: ""
                                  description: "Default"
                                - value: "Memory"
                                  description: "Memory"
              - variable: accessMode
                label: "Access Mode (Advanced)"
                description: "Allow or disallow multiple PVC's writhing to the same PVC"
                schema:
                  type: string
                  default: "ReadWriteOnce"
                  enum:
                    - value: "ReadWriteOnce"
                      description: "ReadWriteOnce"
                    - value: "ReadOnlyMany"
                      description: "ReadOnlyMany"
                    - value: "ReadWriteMany"
                      description: "ReadWriteMany"
              - variable: size
                label: "Size quotum of storage"
                schema:
                  type: string
                  default: "100Gi"
```

### Unbegrenzte Benutzerdefinierte Speicher-Mounts

Wir unterstützen die Darstellung des Benutzers mit einer Stil-Liste "Do it yourself" in dem der Benutzer unbegrenzte Pfade auf dem Host-System einbinden kann. Es sollte immer in jeder App enthalten sein, um Benutzern die Möglichkeit zu geben, Dinge anzupassen, wie sie wollen.
