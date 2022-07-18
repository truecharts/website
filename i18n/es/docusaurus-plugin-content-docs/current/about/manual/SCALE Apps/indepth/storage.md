# Almacenamiento

TrueCharts utiliza múltiples sistemas de almacenamiento diferentes:

## Tipos de almacenamiento

El almacenamiento está actualmente separado en dos tipos:

1. Almacenamiento persistente integrado (PVC)
2. Almacenamiento personalizado aka "hostPathMounts"

## Almacenamiento persistente integrado

Almacenamiento persistente integrado se basa en PVC de Kubernetes para integrarse lo más cerca posible en la SCALE de TrueNAS. También están muy preconfigurados para trabajar lo mejor posible y proporcionar opciones para la expansión futura como las opciones NFS y Gluster que se añaden. Estas opciones de almacenamiento inherentemente no son adecuadas para ser compartidas con múltiples aplicaciones.

Este almacenamiento está integrado en TrueNAS SCALE y soporta completamente la reversión de las actualizaciones. Ésa es la razón por la que esta es la forma predeterminada (¡y sólo de hecho soportada!) de almacenar archivos de configuración de la aplicación.

## Almacenamiento de aplicaciones personalizadas como "hostPathMounts"

Además de la anteriormente mencionada Tienda Integrada Persistente, también proporcionamos la opción de montar tantas carpetas de host como desee.

hostPathMounts en realidad es bastante simple: Monta un directorio de su sistema TrueNAS SCALE directamente a un directorio dentro de la aplicación que está instalando.

## Permisos

Los ajustes de permisos son bastante importantes y a menudo son algo que causa problemas a los usuarios. Tanto para almacenamiento persistente integrado como para almacenamiento personalizado, ofrecemos opciones especiales para configurar automáticamente los permisos que coincidan con su contenedor.

### Almacenamiento persistente integrado

Estos se configuran automáticamente para ser propiedad de: **PGID**

### Almacenamiento de aplicaciones personalizadas como "hostPathMounts"

Ofrecemos un ajuste automático opcional de permisos según la aplicación de fsGroup o PUID.

Configurar permisos automáticamente significa que `pulsamos` la carpeta y toda la carpeta dentro de ella, a un usuario y grupo de su elección. Sin embargo, sólo lo hacemos cuando instalamos o actualizamos una aplicación.

Tenga en cuenta que la configuración automática de los derechos de propiedad/permisos, significa que anula sus ajustes actuales de CHOWN y CHMOD. Esto podría romper las cosas y sí, destruirá su sistema si se utiliza descuidadamente. Tampoco es aconsejable habilitar los permisos automáticos en acciones montadas desde un sistema externo. Estos permisos se basan en el usuario y el grupo que ingresas en el diálogo de configuración de la aplicación y por defecto en `568` (el usuario de aplicaciones predeterminado de SCALE).
