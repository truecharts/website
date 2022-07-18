# Preguntas.yaml

Questions.yaml es el archivo que se procesa por TrueNAS para crear la interfaz de usuario. Cuando no se crean nuevos gráficos, la mayor parte de lo que hace este proyecto es unir archivos de questions.yaml para convertir los cartas Helm existentes en aplicaciones.

## Síntesis

En este documento le damos una breve guía de referencia (portada del Oficial IX ) que establece los ajustes disponibles en questions.yaml.

### Referencia Variable de Pregunta

| Variable                   | Tipo          | Requerido | Descripción                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| variable                   | cadena        | verdad    | definir el nombre de la variable especificado en el archivo `values.yaml`.                                                                                                                                                                                                                                                                  |
| etiqueta                   | cadena        | verdad    | definir la etiqueta de la interfaz de usuario.                                                                                                                                                                                                                                                                                              |
| descripción                | cadena        | falso     | especifica la descripción de la variable.                                                                                                                                                                                                                                                                                                   |
| grupo                      | cadena        | falso     | agrupar preguntas por valor de entrada.                                                                                                                                                                                                                                                                                                     |
| esquema                    | diccionario   | verdad    | especifica detalles del esquema para la variable ``                                                                                                                                                                                                                                                                                         |
| schema.type                | cadena        | verdad    | especifica el tipo de valor para `variable` (los tipos soportados actualmente son string, int, boolean, ruta, ruta de host, lista, dicto, ipaddr, y cron).                                                                                                                                                                                  |
| esquema.requerido          | pluma         | falso     | definir si la variable es requerida o no (true \ false), por defecto es falso                                                                                                                                                                                                                                                              |
| esquema.por defecto        | objeto        | falso     | especificar el valor por defecto.                                                                                                                                                                                                                                                                                                           |
| esboza.min_longitud        | int           | falso     | longitud mínima de caracteres para la variable de tipo cadena.                                                                                                                                                                                                                                                                              |
| longitud máxima            | int           | falso     | longitud máxima de caracteres para la variable de tipo cadena.                                                                                                                                                                                                                                                                              |
| esquema.min                | int           | falso     | longitud entera mínima.                                                                                                                                                                                                                                                                                                                     |
| esquema.max                | int           | falso     | longitud máxima del entero.                                                                                                                                                                                                                                                                                                                 |
| schema.enum                | []diccionario | falso     | especificar las opciones cuando el tipo de variable es `string`, por ejemplo,<br /><br />enum:<br />- valor: "RollingUpdate"<br />&nbsp;&nbsp;description: "Create new pods and then kill old ones"<br />- valor: "Recrear"<br />&nbsp;&nbsp;description: "Kill existing pods before creating new ones" |
| esquema.caracteres válidos | cadena        | falso     | para validación de caracteres de entrada.                                                                                                                                                                                                                                                                                                   |
| schema.subquestions        | []subpregunta | falso     | añadir un array de subpreguntas.                                                                                                                                                                                                                                                                                                            |
| esquema.show_si            | cadena        | falso     | mostrar la variable actual si la condición especificada es verdadera, por ejemplo `show_if: [["workloadType", "=", "CronJob"]]`                                                                                                                                                                                                             |
| mostrar subpreguntas_si    | cadena        | falso     | mostrar subpreguntas si es verdadera o igual a una de las opciones. por ejemplo `show_subquestion_if: "static"`. el sistema convertirá esto en el formato de filtros especificado para `schema.show_if` automáticamente.                                                                                                                    |
| schema.attrs               | []variables   | falso     | especificado cuando `schema.type` es diccionario para declarar los atributos permitidos en el diccionario.                                                                                                                                                                                                                                  |
| esquema.items              | []variables   | falso     | especificado cuando `schema.type` es lista para declarar los atributos permitidos en la lista.                                                                                                                                                                                                                                              |
| esquema.privado            | pluma         | falso     | especificado para declarar campos sensibles a la información.                                                                                                                                                                                                                                                                               |
| esquema.null               | pluma         | falso     | especifica si el valor de la variable puede ser nulo. por defecto es falso.                                                                                                                                                                                                                                                                 |

#### Subpreguntas

`subpreguntas[]` no puede contener `subpreguntas` o `show_subquestions_if` claves, pero todas las demás claves de la tabla anterior son compatibles. También las variables que tienen la lista `schema.type` no soportan `subpreguntas`.

#### Preguntas especiales

Hay algunos casos nuevos en los que nos gustaría proporcionar la capacidad de configurar / administrar recursos para cargas de trabajo con obtener algunos datos del sistema dinámicamente. Así que un gráfico puede especificar ciertas acciones a ser ejecutadas por el sistema para una variable definiendo una referencia. Un ejemplo ilustra mejor este concepto:

```yaml
- variable: volume
  label: "Volumen"
  schema:
    type: dict
    $ref:
      - "normalize/ixVolume"
    attrs:
      - variable: mountPath
        label: "Mount Path"
        description: "Path where the volume will be mounted inside the pod"
        schema:
          type: path
          required: true
      - variable: datasetName
        label: "Dataset Name"
        schema:
          type: string
          required: true
```

En la variable anterior definimos un `$ref` en el esquema que especifica que el sistema debe tomar alguna acción para normalizar el valor especificado para la variable. En este caso concreto, `ix_volume` es un concepto introducido en el que recomendamos usar un volumen que podemos deshacer automáticamente en la cancelación del lanzamiento de gráficos. En esencia, es solo un volumen de `hostPath` para el cual el sistema crea automáticamente el conjunto de datos especificado. Tenemos los siguientes tipos de acciones soportadas en `$ref` ahora mismo:

1. definiciones
2. normalizar Para (1), el sistema actualizará automáticamente el esquema para una definición en particular. Por ejemplo,

```yaml
- variable: hostInterface
  description: "Please specify host interface"
  label: "Host Interface"
  schema:
    type: string
    required: true
    $ref:
      - "definitions/interface"
```

El sistema automáticamente rellenará las interfaces disponibles para el usuario basándose en qué interfaces están disponibles en el sistema. Para (2), el sistema normalizará los valores o realizará algunas acciones como se ha comentado anteriormente.

#### Secciones estandarizadas de questions.yaml

Para minimizar la carga de mantenimiento de nuestra colección de aplicaciones, siempre pretendemos estandarizar tanto como sea posible. Lo mismo ocurre con questions.yaml. Aquí se incluyen algunos fragmentos de código estandarizado de código que se espera que se incluyan en cada aplicación. Tenga en cuenta que a veces las funciones específicas pueden o no funcionar completamente. Sin embargo, dejarlos fuera aumentaría constantemente la carga de mantenimiento y, a menudo, dicha funcionalidad se añadirá más adelante en el gráfico común.

#### Grupos

Para asegurarse de que todas las aplicaciones permanezcan un poco iguales, utilizamos una lista de grupos estandarizados para la sección de grupos. Por favor, asegúrate de usar estos grupos en tus aplicaciones:

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

#### Opciones generales de configuración

Estas opciones siempre se incluyen\* porque casi todos los gráficos (eventualmente) tienen un uso para ellos y/o otras partes del gráfico común dependen de ellos. Se llaman opciones generales, porque afectan a las funcionalidades básicas de un gráfico. Por ejemplo: variables de entorno personalizadas, permisos y zonas horarias.

\*`PUID`, `PGID`, `UMASK` solo se incluyen cuando son necesarios.

```yaml
  - variable: env
    group: "Configuración"
    label: "Entorno de imagen"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: TZ
          label: "Zona horaria"
          schema:
            type: string
            default: "Etc/UTC"
            $ref:
        - "definiciones/zona horaria"
        - variable: PUID
          label: "PUID"
          description: "Establece la variable PUID env para LinuxServer. o (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: PGID
          label: "PGID"
          description: "Establece la variable env PGID para LinuxServer. o (compatible) containers"
          schema:
            type: int
            default: 568
        - variable: UMASK
          label: "UMASK"
          description: "Establece la variable env UMASK para LinuxServer. o (compatible) containers"
          schema:
            type: string
            default: "002"

  # Configurar variables de entorno personalizadas
  - variable: environmentVariables
    label: "Environment environment"
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
 type: string
```

#### Opciones de configuración del contexto de seguridad

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
          label: "¿Cuándo debemos tomar la propiedad?"
          schema:
            type: string
            default: "OnRootMismatch"
            enum:
              - value: "OnRootMismatch"
                description: "OnRootMismatch"
              - value: "Always"
                description: "Always"
```
