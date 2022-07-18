# Gráfico de Biblioteca Común

En el Helm 3, su equipo introdujo el concepto de un gráfico de la biblioteca [](https://helm.sh/docs/topics/library_charts/).

> Un gráfico de biblioteca es un tipo de gráfico de casco que define primitivos o definiciones de cartas que pueden ser compartidas por plantillas de Helm en otros gráficos. Esto permite a los usuarios compartir fragmentos de código que pueden ser reutilizados a través de gráficos, evitando repeticiones y manteniendo gráficos DRY.

La primera versión de nuestra biblioteca común fue portada desde k8s-at-home, que introdujeron porque vieron muchos gráficos que requerían sólo unas pocas opciones de configuración seleccionadas en sus cartas Helm.

Tomemos, por ejemplo, Sonarr, Sabnzbd, Overseerr. Cada una de estas cartas solo requiere configurar `servicio`, `puerto`, `persistencia`, `progreso` y `imagen` ya que el estado y la configuración de la aplicación son manejados por la propia aplicación. Con el fin de permanecer un poco DRY (no repetirlo) y mantener con el uso de Helm 3 para un gráfico de la Biblioteca, vimos este patrón y decidimos que valía la pena crear una biblioteca. Esto significa que cada uno de estos gráficos de aplicaciones tiene una dependencia de lo que llamamos la librería `común`.
