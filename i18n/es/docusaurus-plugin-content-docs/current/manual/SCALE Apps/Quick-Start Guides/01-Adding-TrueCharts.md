# 01 - Añadir TrueCharts a SCALE

Añadir el Catálogo de la Comunidad TrueCharts es relativamente sencillo.

## Requisitos

- Asegúrate de que tu grupo de almacenamiento está creado y funcionando
- Asegúrese de que tiene una conexión a Internet en funcionamiento y de que puede acceder a github y truecharts.org desde el sistema anfitrión.

## Adding TrueCharts

Al abrir el elemento de menú de Aplicaciones en la SCALE de TrueNAS por primera vez, se le pide que configure un nuevo grupo de Aplicaciones. Esto creará un nuevo conjunto de datos en el grupo seleccionado llamado "ix-applications", que contendrá todos los contenedores docker y la mayoría de los datos de la aplicación, a menos que se especifique lo contrario.

- Ir a "Apps" en el menú de la izquierda
- Seleccione la pestaña "Administrar catálogos"
- Haga clic en "Añadir catálogo" e introduzca la información requerida:

- Name: `truecharts`
- Repositorio: `https://github.com/truecharts/catalog`
- Trenes preferidos: `estable`
- Rama: `principal`

También recomendamos fuertemente a las personas que empiezan con TrueCharts y el resto de esta guía para asegurarse de que `núcleo` y `estable` se añadan a los trenes preferidos. Sin esos dos trenes no podrá seguir todos los pasos que hemos descrito en las "Guías de inicio rápido". También puedes habilitar otros trenes, ver abajo una descripción del contenido de cada tren.

## Diferencia entre establo e incubadora

TrueCharts tiene múltiples "trenes": Todos los trenes contienen aplicaciones que deberían funcionar bien. Sin embargo, tienen un significado ligeramente diferente:

- `estable` contiene la mayoría de nuestras aplicaciones. Se consideran estables y funcionales.
- `dependencia` contiene aplicaciones que se usan principalmente como dependencias. Este tren no está soportado, además de corregir errores.
- `incubadora` Estas aplicaciones todavía están en desarrollo y/o no se consideran de alta calidad.

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/Vomm8uvdCM0)

## Notas

- Si esto no funciona de inmediato, intente hacer clic en "Actualizar catálogos".
