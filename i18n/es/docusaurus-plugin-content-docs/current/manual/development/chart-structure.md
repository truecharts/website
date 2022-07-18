# Estructura de carta de la SCALE de TrueNAS

Esta es una sinopsis general sobre la estructura de una aplicación SCALE y/o Helm Chart, que no refleja directamente la configuración específica de TrueCharts.

Los siguientes archivos generalmente se consideran un gráfico de casco "normal":

```text
charts/<train>/<chart name>/
  charts/ # Directorio que contiene cartas de dependencia
  Chart. aml # Archivo de información de carta Helm requerido
  README. d # Opcional: Archivo Helm Readme (será renderizado en la interfaz de usuario TrueNAS SCALE)
  templates/ # Un directorio de plantillas que, cuando se combina con valores. ml generará valores YAML
  de K8. aml # Los valores de configuración por defecto para este gráfico
```

Los siguientes archivos son específicos para TrueNAS SCALE:

```text
charts/<train>/<chart name>/SCALE/
  app-readme. d # Especifico de la SCALE TrueNAS: Archivo de lectura para mostrar en la interfaz de TrueNAS SCALE, pregunta
  generada automáticamente. aml # Especifico TrueNAS SCALE: archivo que contiene preguntas para la interfaz de la SCALE TrueNAS
  ix_values. los valores de configuración ocultos de aml # al instalar usando el elemento TrueNAS SCALE
  . aml # Contiene información genérica sobre la aplicación para la interfaz de la SCALE de TrueNAS
```

*Vea la referencia al desarrollador [del gráfico de Helm](https://helm.sh/docs/chart_template_guide/) para un paseo completo por las cartas de desarrollo.*

Para convertir un gráfico upstream para aprovechar la UX mejorada de TrueNAS SCALE, primero cree un archivo `item.yaml`. Este archivo entre otros artículos de catálogo proporciona una lista de categorías en las que se ajusta este gráfico. Esto ayuda a los usuarios a navegar y filtrar al navegar por la interfaz de usuario del catálogo.

`$ cartas de gatos/<train>/<chart name>/SCALE/item.yaml`

```yaml
categorías:
  - genérico
icon_url: "http://ix_url"
```

Luego añade un archivo `questions.yaml` para pedir algo al usuario.

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

Lo anterior le preguntará al usuario con 2 campos de texto y un menú desplegable en la interfaz para obtener detalles sobre la configuración de la imagen en un gráfico de mando. *Más información sobre questions.yaml está disponible [aquí](https://wiki.truecharts.org/development/questions-yaml/)*
