# Notas de instalación

La aplicación Valheim no soporta tener diferentes números de puerto para `puerto` y `targetPort`. Establecer `puerto` establecerá el mismo número de puerto a `targetPort` y su variable medioambiental. e.g `STATUS_HTTP_PORT`, `SUPERVISOR_HTTP_PORT`, `SERVER_PORT`

También, servicios llamados `valheim1`, `valheim2`, `valheim3`, deben ser números de puerto continuos. eg 2456, 2457, 2458. ¡No puedes saltar un número!
