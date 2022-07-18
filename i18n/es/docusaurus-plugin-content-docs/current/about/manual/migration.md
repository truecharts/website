# Migración entre versiones

A veces no podemos garantizar la actualización automática entre las nuevas versiones de nuestras aplicaciones. Estas páginas incluyen algunos escenarios comunes y dan algunas orientaciones para moverse manualmente entre diferentes versiones y trenes.

## Entre trenes

Una aplicación siempre estará en un solo tren. Si una aplicación se mueve a un tren diferente, no podrás actualizar automáticamente Nuestra guía básica para estos casos es:

- Copia de seguridad de todos sus archivos, configuración y bases de datos.
- Haz notas sobre cómo configuraste tu aplicación previamente
- Eliminar la aplicación antigua
- Instala la nueva aplicación usando tus notas de configuración previamente hechas
- Detener la nueva aplicación
- Pon todos tus archivos antiguos.
- Re iniciar la nueva aplicación

## Entre versiones

Cuando las nuevas versiones introducen cambios de ruptura (que a menudo serían cambios importantes de versión) podrían requerir que el usuario reinstalara. Sin embargo, a menudo ya proporcionamos guiones de migración y tratamos estas cuestiones manualmente.

### Común 2.0 -> aplicaciones basadas en 3.0 comunes

En los casos en que actualice a una aplicación basada en 3.0, es necesario reinstalarla. Por favor, ten en cuenta: ¡Instalar nuclearizará tus datos! Tenga en cuenta que no tenemos instalaciones comunes basadas en 2.0 disponibles en el menú desplegable de versiones

### Común 3.0 -> aplicaciones basadas en 4.0 comunes

En caso de que actualice a una aplicación basada en 4.0, es necesario reinstalarla. Por favor, ten en cuenta: ¡Instalar nuclearizará tus datos! Sin embargo, las aplicaciones comunes 3.0 todavía están disponibles para ser instaladas usando el menú desplegable de versiones

### Común 4.0 -> aplicaciones basadas en 5.0 comunes

Común 5.0.0 es en realidad una actualización bastante pequeña: sólo permite usar un ramdisk cuando se usa emptyDir en hostPathMount. Sin embargo, sigue siendo un cambio rompiente.

Para actualizar, recomendamos eliminar todas las entradas de hostPathMount/customStorage y leerlas después de la actualización
