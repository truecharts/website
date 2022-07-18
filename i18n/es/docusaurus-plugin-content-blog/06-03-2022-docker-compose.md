---
slug: "Componer Docker en TrueNAS SCALE usando TrueCharts"
title: "Componer Docker en TrueNAS SCALE usando TrueCharts"
authors:
  - ornias
---

Desde las primeras etapas del desarrollo de la SCALE de TrueNAS, hemos leído muchas quejas sobre el hecho de que la SCALE de TrueNAS no contaba con el apoyo de TrueNAS. Es comprensible, ya que es una de las opciones de implementación de docker más utilizadas para usuarios domésticos.

La comunidad TrueNAS SCALE ha encontrado formas interesantes de habilitar Docker-Compose. Pero todos estos enfoques tienen varios aspectos negativos:

- No es una prueba futura, puede ser nuclear permanentemente y sin previo aviso, con cualquier actualización de la SCALE de TrueNAS.

- Se rompe inherentemente las aplicaciones ESCALE y a menudo incluso requiere que las desactiven.

- No hay apoyo para esta tarea.

Para resolver este problema, hemos decidido tomar las cosas en nuestras manos. Nos complace anunciar finalmente nuestra solución:

**Aplicación Docker-Compose para TrueNAS SCALE por TrueCharts**

Está diseñado desde cero, para dar a los usuarios casi la misma experiencia que ejecutar Docker-Compose en el sistema anfitrión, e incluso contiene algunos buenos ajustes:

- Está totalmente respaldado por las aplicaciones SCALE de TrueNAS, por lo que sobrevivirá a las actualizaciones.

- Hay una opción GUI para ingresar tu archivo Docker-Compose que sobrevivirá a los reinicios.

- Totalmente autocontenido, y no modificará la pila de docker por defecto.

- Totalmente compatible para ejecutarse junto a otras aplicaciones TrueNAS SCALE para que pueda migrar fácilmente sus aplicaciones Docker-Compose a aplicaciones TrueNAS SCALE.

- Somos su apoyo si la solicitud no funciona como se anuncia.

Todo con una sola advertencia:

- El comando Docker-Compose tiene que ser ejecutado desde el interior del shell del contenedor.

Basamos nuestra solución en el contenedor oficial Docker-in-Docker de Docker, con algunas herramientas añadidas para optimizarlo para implementaciones de un solo contenedor. Tal vez lo más interesante sea que el contenedor tiene acceso nativo a `/mnt`, `/root` y `/cluster`, para que puedas trabajar con tus contenedores como si estuvieras trabajando en el host.

Con esto en su lugar esperamos que TrueNAS SCALE finalmente pueda empezar a llenar los zapatos grandes de soluciones como Unraid y TrueNAS Core y dar a la comunidad lo que quieren, ¡no sólo lo que necesitan!
