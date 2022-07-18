# Diseño de Chart.yaml

En TrueCharts tratamos de mantener algunos archivos estandarizados, esto nos permite hacer cambios en estos gráficos en masa con menos riesgo de errores. Chart.yaml es uno de estos archivos. En esta documentación explicaremos las opciones de diseño estandarizado. Para un diseño de ejemplo, consulte nuestra plantilla estándar de Chart.yaml

## Diseño explicado

```yaml
apiVersion: La versión de la API de cartas (requerido)
kubeVersion: Un rango de SemVer de versiones compatibles de Kubernetes (opcional)
name: El nombre de la carta (requerido)
version: A SemVer 2 versión (requerido)
upstream_version: A SemVer 2, como lo usa una fuente de Helm Chart (opcional)
appVersion: No necesita ser SemVer. Citas recomendadas.
description: Una descripción de una sola frase de este proyecto (opcional)
tipo: El tipo de gráfico (opcional)
obsoleto: Si este gráfico está obsoleto (opcional, boolean)
home: The URL of this projects home page (optional)
icon: A URL to an SVG or PNG image to be used as an icon (optional).
keywords:
  - Una lista de palabras clave sobre este proyecto (opcional)
fuentes:
  - Una lista de URLs al código fuente para este proyecto (opcional)
dependencias:
  - nombre: El nombre del gráfico (nginx)
    repositorio: La URL del repositorio ("https://example. om/charts") o alias ("@repo-name")
    versión: La versión del gráfico ("1.2. ") condición
    : (opcional) Una ruta de yaml que resuelve a un boolean, usada para activar/desactivar cartas (ej. subgráfico1. nabled )
    etiquetas: # (opcional)
      - Las etiquetas pueden ser utilizadas para agrupar gráficos para activar/desactivar juntos
    import-values: # (opcional)
      - ImportValores contiene el mapeo de los valores de origen a la clave padre a ser importada. Cada elemento puede ser una cadena o un par de subelementos hijos/padres.
    alias: (opcional) Alias a ser usado para el gráfico. Útil cuando tienes que añadir el mismo gráfico varias veces
mantenedores: # (opcional)
  - nombre: El nombre de los mantenedores (requerido para cada mantenedor)
    correo electrónico: el correo electrónico de los mantenedores (opcional para cada mantenedor)
    url: Una URL para el mantenedor (opcional para cada mantenedor)
anotaciones:
  ejemplo: una lista de anotaciones con clave por nombre (opcional).
```

### Comentando

En la descripción anterior hay muchos valores que no se utilizan. Algunos de ellos, como `desaprobados`, acabamos de establecer en falso. Mientras que otros, como `anotaciones` hacer comentarios.

Por favor, consulte nuestra plantilla [estándar de Chart.yaml](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml) para ver qué valores no utilizados necesitan que tratamiento.

### Dependencias

Esperamos que cada gráfico utilice nuestro Common-Chart en cierta capacidad, a menos que sea absolutamente imposible hacerlo. Esto también significa que esperamos que el Common-Chart sea siempre la primera dependencia de la lista. Esto nos permite actualizar fácilmente todas las referencias de gráficos comunes en masa.

Se espera que todas las demás dependencias estén listadas en orden alfabético.

### Mantenedores

El único mantenedor debe ser siempre TrueCharts, ya que se espera que el equipo central de TrueCharts intervenga si los otros mantenedores no mantienen su trabajo. Un ejemplo de cómo listar TrueCharts como mantenedor está disponible en nuestra plantilla estándar de Chart.yaml [](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml).
