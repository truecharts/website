# 05 - Añadir almacenamiento adicional

Proporcionamos la opción de montar tantas carpetas de host como desee.

hostPathMounts en realidad es bastante simple: Monta un directorio de su sistema TrueNAS SCALE directamente a un directorio dentro de la aplicación que está instalando.

## Permisos

Ofrecemos un ajuste automático opcional de los permisos según App fsGroup o PUID.

Configurar permisos automáticamente significa que `pulsamos` la carpeta y toda la carpeta dentro de ella, a un grupo de su elección. Sin embargo, sólo lo hacemos cuando instalamos o actualizamos una aplicación.

Tenga en cuenta que la configuración automática de los derechos de propiedad/permisos, significa que anula sus ajustes actuales de CHOWN y CHMOD. Esto podría romper las cosas y sí, destruirá su sistema si se utiliza descuidadamente. Tampoco es aconsejable habilitar los permisos automáticos en acciones montadas desde un sistema externo.

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/aktv1r-KRI0)

### Documentación adicional
