# 14 - Copia de seguridad y restauración

## Requisitos

Esta guía hace uso de nuestra herramienta de línea de comandos, llamada `TrueTool`.

Esto debe ser instalado usando: `pip install truetool`

Tenga en cuenta que esto necesita reinstalar después de cada actualización de la SCALE de TrueNAS.

## Respaldo

### Creando copias de seguridad manual

Las copias de seguridad manuales se pueden realizar fácilmente usando TrueTool.

`verdadera herramienta -b`

Elimina automáticamente copias de seguridad excesivas, que por defecto es un máximo de 14 copias de seguridad. Para aumentar esto, hasta 31, por ejemplo, utilice:

`verdadera herramienta -b 31`

Esto también se puede combinar fácilmente con TrueTool actualizar, sincronizar, limpiar, etc. de esta manera:

`truetool -b 31 -u -s -p`

Para saber qué copias de seguridad se hacen anteriormente, puedes ejecutar el siguiente comando:

`verdadera herramienta -l`

### Creando copias de seguridad frecuentes

SCALE incluye un sistema integrado para hacer una copia de seguridad de los objetos kubernetes, así como hacer instantáneas del almacenamiento `PVC` y `ix_volume`. Sin embargo, NO crea estas actualizaciones fuera de las actualizaciones de la ESCALA.

Para crear copias de seguridad diarias de los objetos kubernetes, cree un trabajo Cron en la interfaz de usuario SCALE con el comando TrueTool que desea ejecutar. Si desea asegurarse de que TrueTool se actualiza automáticamente y/o (re)se instala después de una actualización de TrueNAS SCALE, puede usar:

`pip install --no-cache-dir --upgrade truetool && truetool -b -s -u -a -p`

### Exportando copias de seguridad

Lo anterior sólo crea una copia de seguridad de los objetos kubernetes y una instantánea del almacenamiento `PVC` y `ix_volume`. Estas copias de seguridad se guardan en el mismo conjunto de datos de ix_applications.

No los protege en contra, por ejemplo, de la eliminación de conjuntos de datos o los guarda en un sistema externo.

**altamente** consejo haciendo una copia de seguridad interna (conjunto de datos separado en el mismo sistema) *y* una copia de seguridad fuera del sitio. Se podría crear un normal recursivo(! replicación del conjunto de datos `ix-volumes` usando el SCALE GUI, con los siguientes trucos especiales editando la replicación después de la creación:

Para ello, configure la siguiente tarea de replicación:

1[rep1](/img/backup/rep1.png) 1[rep2](/img/backup/rep2.png)

También es importante asegurarse de que mantiene copias de seguridad regulares del sistema SCALE en sí, preferiblemente justo después de la copia de seguridad de las aplicaciones anteriores). Sin embargo, esto no es parte de esta guía y asumiremos que lo ha hecho usted mismo.

### Comprobando copias de seguridad

Para hacer qué copias de seguridad están presentes, se puede usar el siguiente comando en un shell:

`verdadera herramienta -l`

## Restaurar

Una de las partes más importantes de las copias de seguridad es garantizar que puedan ser restauradas. Hay dos escenarios para una restauración:

1. Invirtiendo un sistema operativo

2. Restauración total del sistema

### Invirtiendo un sistema en ejecución

Invertir un sistema en funcionamiento es bastante trivial. Pero hay algunas advertencias:

- Esto reinicializará el nodo kubernetes, lo que significa que todos los objetos kubernetes que no están desplegados usando el sistema de aplicaciones serán revertidos
- NO PUEDES revertir una sola aplicación

Para revertir un sistema existente, el proceso es el siguiente:

1. Listar tus copias de seguridad actuales usando `truetool -l`

2. Elija una copia de seguridad para revertir y notar su nombre

3. Ejecutar: `truetool -r BACKUPNAME` (donde reemplaza BACKUPNAME con el nombre de la copia de seguridad que seleccionó anteriormente)

Por favor, tenga en cuenta que esto puede tomar un tiempo LONGA.

### Restauración total del sistema

A veces necesitas limpiar tu Pool, Migrar a una nueva Pool o restaurar un sistema completamente. Con los pasos anteriores todo esto es muy posible.

0. No inicie el sistema de aplicaciones (seleccione un pool para) todavía.

1. Opcional: Cuando el propio sistema SCALE también se borre, asegúrese de restaurarlo usando una exportación de configuración SCALE **primero**.

2. Utilizando la replicación ZFS, regresa el conjunto de datos de `ix-applications` previamente respaldado.

3. Continue con los pasos listados en `Invertir un sistema en ejecución`

## Guía de vídeo

TBD
