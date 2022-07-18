# 13 - Componer Docker en ESCALE

Mientras que Docker-Compose no está soportado oficialmente por iX Systems, hemos diseñado una aplicación especial "Docker-Compose", que está disponible en el tren "core". Esta aplicación se puede utilizar para desplegar fácilmente un archivo de composición en un entorno docker completamente aislado.

Nuestra aplicación Docker-Compose tiene las siguientes características:

- Enlazar puertos al host, directamente desde docker-compose

- Redes internas Docker-Compose

- `/mnt`, `/root` y `/cluster` son directamente accesibles dentro del contenedor Docker-Compose por defecto

- Las imágenes docker y volúmenes docker, se guardan en un PVC especial dentro del sistema de aplicaciones de TrueNAS SCALE

- Los archivos de composición se pueden cargar automáticamente al inicio de nuestra aplicación Docker-Compose

- Sobrevivirá por completo a las actualizaciones de la SCALE de TrueNAS

- No alterará el sistema operativo de host

- Se puede combinar con la aplicación SCALE para permitir a los usuarios migrar lentamente de docker-compose a aplicaciones nativas de SCALE

Unas cuantas cosas para tener en cuenta:

- Para emitir comandos a docker o docker componen, debes estar dentro del shell de la aplicación Docker (no del shell del host)

- Asegúrese de que sus redes Docker-Compose no entran en conflicto con las redes de Kubernetes listadas en la configuración del sistema de aplicaciones SCALE.

- Tenga en cuenta que los contenedores Docker-Compose no pueden llegar dentro de la red de kubernetes. Así que no puede combinar un contenedor "Launch Docker" con una base de datos alojada Docker Compose por ejemplo.

Sencilla: Nuestra solución de componer docker funciona casi como usarla en el anfitrión, pero sin comprometer el sistema operativo de Aplicación que es TrueNAS SCALE.

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/QXooywQSfJY)
