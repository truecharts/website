# 04 - Actualizar, Rollback y Eliminar

Con TrueCharts siempre enviamos nuevas versiones de una aplicación para cualquier cambio. Incluso para los contenedores. Esto asegura la actualización de la aplicación siempre te da lo último y genial de TrueCharts

## Requisitos

- Asegúrate de que tu grupo de almacenamiento está creado y funcionando
- Asegúrate de seleccionar tu grupo de almacenamiento cuando abras por primera vez la interfaz "Apps", si no es así, consulte la guía de inicio rápido `01 - Configuración de aplicaciones por primera vez`
- Asegúrese de que tiene una conexión a Internet en funcionamiento y de que puede acceder a github y truecharts.org desde el sistema anfitrión.
- Asegúrese de que ya ha agregado el catálogo de TrueCharts de la guía 02
- Asegúrate de que tu aplicación está instalada y, preferiblemente, funcionando

## Actualizando

### Actualizar la aplicación usando el GUI

- Ir a `Aplicaciones instaladas`
- Asegúrate de que tu aplicación reporta que una actualización está disponible en la tarjeta de la aplicación.
- Tome nota de la versión actual, tal vez quiera volver a esta versión en el futuro.
- haz clic en el botón de menú en el lado derecho de la App card
- Selecciona `Upgrade`
- Confirme su deseo de actualizar

La aplicación pasará a través de un proceso de copia de seguridad (!) y actualización. Si el proceso falla, sus cambios no serán enviados y la edición será revertida. Después de que la ventana emergente desaparezca, puede tardar unos minutos en desplegar su aplicación recién actualizada, debido a algunas cosas que suceden en segundo plano.

## Rollback

### Invertir usando la GUI

1. Selecciona los 3 primeros puntos de tu tarjeta de aplicación
2. Selecciona "Roll Back"
3. En "Versión" - Haz clic en el menú desplegable y selecciona a qué versión quieres volver a usar
4. Marque la casilla "Roll Back Snapshot"
5. Selecciona "Roll Back"

### Invertir usando la CLI

1. introduce cli para entrar a la interfaz de línea de comandos SCALE
2. introduce el rollback de la aplicación chart_release Debería darte esta pantalla: ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. Introduzca el nombre de lanzamiento y item_version así: ![cli-rollback2](/img/rollback/cli-rollback2.png) (asegúrese de eliminar el # antes del nombre de lanzamiento)
4. Haga clic en guardar y cierre Debe mostrar algo como esto, confirmando la reversión: ![cli-rollback3](/img/rollback/cli-rollback3.png)

### Encontrando la última versión instalada

Por desgracia, SCALE no muestra a qué versiones están disponibles para dar marcha atrás, pero requiere que se introduzca una versión. Hay un corto recorrido para obtener el historial de versiones de la aplicación en cuestión:

1. ejecutar `export KUBECONFIG=is/rancher/k3s/k3s.yaml`
2. ejecuta  `jackett historial del casco -n ix-jackett donde "jackett"` debe reemplazarse con el nombre de la aplicación que rompió tu interfaz de usuario Verás esto: ![history](/img/rollback/history.png) Ten en cuenta la columna "Chart", enumera los números de versión que puedes introducir en la interfaz de cancelación, con el prefijo del nombre de la aplicación. De grueso sólo introduzca el número de versión en el GUI o CLI, no el nombre

## Eliminar

### Eliminar usando la GUI

1. Selecciona los 3 primeros puntos de tu tarjeta de aplicación
2. Selecciona "Delete"
3. Marque la casilla "Confirmar"
4. Selecciona "Continue"

### Eliminar usando el CLI

1. Introduzca la terminal de Truenas SCALE vía GUI o SSH
2. Escriba el siguiente comando
    - `cli -c 'app chart_release delete release_name=NAME_OF_APPLICATION'`
    - ej: `cli -c 'app chart_release delete release_name=traefik'`

#### Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/ONbMhQJPQwc)
