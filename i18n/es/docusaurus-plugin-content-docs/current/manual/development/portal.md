# Botón de portal

Después de la instalación casi todas las aplicaciones deben tener un botón "portal". Este botón es una forma fácil y fluida de entrar en las Aplicaciones después de la instalación. Sin embargo, uno debe tener en cuenta que no sigue mágicamente los cambios dentro de la aplicación (por ejemplo: de http a https).

## ejemplo de questions.yaml

Cada archivo questions.yaml debe contener los siguientes fragmentos para activar el botón portal. Tenga en cuenta que puede cambiar `"http"` a `"https"` en los servicios. ain.port.protocol si su aplicación usa http en lugar de https cuando se ejecuta usando "NodePort".

También tenga en cuenta que el portal sólo(!) apunta hacia el servicio principal, principal puerto de servicio y entradas principales.

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

También hay algunas opciones adicionales (avanzadas) disponibles, estas se pueden añadir por debajo de la porción requerida anteriormente:

**anfitrión:**

```yaml
        - variable: host
          label: "override Host when using NodePort"
          description: "Sobrescribe la configuración del host cuando se utiliza NodePort. El caso de uso de ejemplo sería cargar NodePorts balanceados."
          schema:
            hidden: true
            editable: false
            type: string
            default: "test.com"
```
