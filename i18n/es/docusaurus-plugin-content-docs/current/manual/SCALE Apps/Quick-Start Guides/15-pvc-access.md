# 15 - Accediendo a los datos PVC

## ¿Dónde están mis archivos de aplicación?

- Tus archivos están guardados en el contenedor
- No son visibles desde la estructura de archivos de su servidor sin primero montar ese PVC

## Montaje de datos PVC

### Guión Pesado

Una opción es usar Heavy_Script.

Si planea montar el almacenamiento PVC más de un par de veces, esta puede ser la mejor opción para usted.

1. El script mostrará toda la información de tu PVC para cada aplicación
2. Apagar la aplicación con seguridad antes de montarla
3. Monta tu PVC a /mnt/temporary/STORAGE-NAME

El vídeo comenzará con la función de montaje para que puedas ver cómo se ve.

Después, si desea instalarlo, siga la guía de vídeo que comienza a las 15:52.

[![Guión Pesado](/img/pvc_access/video_thumbnail.jpg)](https://youtu.be/uZp4x_Susgo?t=616 "Guión Pesado")

### Método manual - Guía de nuevo usuario

El montaje manual del almacenamiento PVC toma un poco más de tiempo que el método de script.

Sin embargo, sé que a algunos usuarios les gusta saber exactamente qué comandos están ejecutando, etc.

### Artículos recomendados

- Un terminal que permite copiar y pegar
- Un bloc de notas abierto

1\. **STOP la aplicación que planeas montar**

2\. **Ejecute el siguiente comando para ver sus datos PVC**

```bash
k3s kubectl get pvc -A | sort -u | awk '{print "\t" $1 "\t" $2 "\t" $4}' | columna -t
```

3\. **Encuentra la aplicación que te gustaría montar**

Esto puede ser confuso al principio porque muchas aplicaciones tendrán muchas instancias diferentes de PVC.

![pvc_lista](/img/pvc_access/pvc_list.png)

- Verás en esta foto, Nextcloud tiene diferentes PVC.
  - Sin embargo, si lo descomponen mirando la columna central, no es demasiado confuso.
  1. `data-nextcloud-redis-0`
      - Este es tu PVC Redis
  2. `db-nextcloud-postgresql-0`
      - Este es su PVC de PostgreSQL
  3. `datos nextcloud-`
      - Este es tu PVC de datos

4\. **Después de encontrar qué PVC quieres montarte, copia la columna de la derecha (el Volúmen) que comienza con pvc- en un bloc de notas para usar en el siguiente comando**

- Si quería montar `nextcloud-data`, usaría:
- `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

5\. **Ejecute el siguiente comando para encontrar la ruta completa a sus aplicaciones PVC**

```bash
lista zfs | grep PVC_VOLUME
```

- Saliendo del ejemplo de Nextcloud, simplemente reemplazaría `PVC_VOLUME` por `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

Ejemplo:

```bash
lista zfs | grep pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Esto es como debería ser la salida ![volúmenes_nextcloud](/img/pvc_access/nextcloud_volumes.png)

6\. **Monta tu PVC**

```bash
zfs establecer punto de montaje=/temporal/NOMBRE FULL_PVC_PATH
```

Ejemplo:

```bash
zfs set mountpoint=/temporary/nextcloud-data speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

- Este comando no producirá salida si tiene éxito
- Ahora deberías ser capaz de hacer lo que quieras dentro del PVC de la aplicación

7\. **Eliminando**

```bash
zfs set mountpoint=legacy POOL_NAME/ix-applications/releases/APPLICATION_NOMBRE/volumes/NOMBRE-VOLUME-NOMBRE
```

Ejemplo:

```bash
zfs set mountpoint=legacy speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe
```

Después, siempre me gusta `rmdir` en el directorio que se creó al montar

- En mi caso correría:

```bash
rmdir /mnt/temporary/nextcloud-data
```

- Esto sólo ayuda a mantener limpia su carpeta temporal y le permite saber qué es o no está montada actualmente.

- No se preocupe, `rmdir` no puede eliminar carpetas montadas, o carpetas con contenido en ellas.

### Método manual - Guía avanzada de usuario

**SIEMPRE TIENE SEGURIDAD DE LA APP ES ESTABLECIDA SIN MONTAR EL PVC**

#### Para obtener el PVCNAME:

```bash
k3s kubectl get pvc -n ix-APPNAME
```

#### Para obtener el PVCPATH:

```bash
lista zfs | grep legacy | grep APPNAME
```

#### Si desea montar el contenido PVC:

```bash
zfs establecer punto de montaje=/PVCPATH temporal
```

Tu PVC se montará en `/mnt/temporary`

#### y cuando hayas terminado de editar:

```bash
zfs establecer mountpoint=legacy PVCPATH
```
