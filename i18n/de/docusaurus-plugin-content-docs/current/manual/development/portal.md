# Portal-Taste

Nach der Installation sollte fast jede App einen "Portal"-Button haben. Dieser Knopf ist eine einfache und rationelle Möglichkeit, die Anwendungen nach der Installation zu betreten. Allerdings sollte man sich darüber im Klaren sein, dass es den Änderungen innerhalb der Anwendung nicht magisch folgt (zum Beispiel: von http bis https).

## questions.yaml Beispiel

Jede questions.yaml Datei sollte folgende Snippets enthalten, um den Portal-Button zu aktivieren. Bitte beachten Sie, dass `"http"` zu `"https"` in Diensten geändert werden muss. ain.port.protocol wenn Ihre Anwendung http anstelle von https verwendet, wenn Sie "NodePort" verwenden.

Bitte beachten Sie auch, dass das Portal nur (!) auf den Hauptdienst, den Haupt-Service-Port und den Haupt-ingress verweist.

```yaml
portals:
  web_portal:
    protocols:
      - "$kubernetes-resource_configmap_portal_protocol"
    host:
      - "$kubernetes-resource_configmap_portal_host"
    ports:
      - "$kubernetes-resource_configmap_portal_port"
        path: "/"

questions:

  - variable: portal
    group: "Container Image"
    label: "Configure Portal Button"
    schema:
      type: dict
      hidden: true
      attrs:
        - variable: enabled
          label: "Enable"
          description: "enable the portal button"
          schema:
            hidden: true
            editable: false
            type: boolean
            default: true

```

Es gibt auch einige zusätzliche (fortgeschrittene) Optionen, die unter dem oben angegebenen Teil hinzugefügt werden können, falls erforderlich:

**host:**

```yaml
        - Variable: Host
          Label: "Host bei Verwendung von NodePort überschreiben"
          Beschreibung: "Überschreibt die Host-Einstellung bei Verwendung von NodePort. Ein Beispiel wäre das Laden von ausgewogenen NodePorts."
          schema:
            versteckt: true
            editierbar: false
            type: string
            default: "test.com"
```
