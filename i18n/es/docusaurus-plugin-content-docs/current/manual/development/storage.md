# Almacenamiento

Este artículo sirve como una extensión de desarrollo del artículo de almacenamiento disponible [aquí](https://wiki.truecharts.org/general/storage/)

## Almacenamiento y gráfico de comones

Para todas estas soluciones de almacenamiento necesitamos que el gráfico común se agregue a la aplicación. El Common-Chart maneja tanto la conexión/adición de almacenamiento al contenedor y girando tareas especiales de k8 para arreglar los permisos si se solicita para el almacenamiento personalizado.

### Almacenamiento persistente integrado

Al añadir una aplicación, casi siempre hay ciertas carpetas que son requeridas para un rendimiento sólido de las aplicaciones. Por ejemplo, los archivos de configuración que deberían ser persistentes a través de reinicios.

Para estos almacenamientos podemos agregar fácilmente valores de corrección en la interfaz de usuario, estos ajustes no pueden ser desactivados o eliminados y lo sería, por defecto y preferiblemente, estar limitado a la clase de almacenamiento "interno" Prevenir al usuario para deshabilitarlos, se asegura de que los usuarios no (por error) eliminen el almacenamiento.

```yaml
  - variable: persistencia
    label: "Almacenamiento persistente integrado"
    description: "Servicio de Websocket "
    group: "Almacenamiento"
    schema:
      type: dict
      attrs:
        - variable: data
          label: "Almacenamiento de aplicaciones "
          descripción: "Almacenamiento de la aplicación".
          schema:
            type: dict
            attrs:
              - variable: enabled
                label: "Habilitar el almacenamiento"
                schema:
                  type: booleano
                  default: true
                  hidden: false
              - variable: storageClass
                label: "Tipo de almacenamiento"
                descripción: " Advertencia: ¡Cualquier cosa que no sea SCALE-ZFS romperá la rollback!"
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

### Monturas de almacenamiento personalizado ilimitadas

Apoyamos presentar al usuario una lista de estilos "Hazlo tú mismo", en el que el usuario puede añadir rutas ilimitadas en el sistema host para montar. Siempre debe incluirse en cualquier aplicación, para dar a los usuarios la opción de personalizar las cosas como quieran.
