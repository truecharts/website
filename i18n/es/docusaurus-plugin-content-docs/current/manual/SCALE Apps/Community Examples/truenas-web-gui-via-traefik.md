# Web GUI de TrueNAS vía Traefik en el puerto 443

Si sigues las instrucciones en `11 - Exponiendo Traefik en el puerto 80/443` desde las `Guías de inicio rápido`, su Web GUI TrueNAS ahora será servido en puertos personalizados (puerto 81 y 444 en la guía de vídeo).

Si no desea acceder a la Web GUI de TrueNAS usando estos puertos personalizados, puedes seguir las instrucciones en la guía `16 - Configuración de Servicios Externales` para acceder al GUI Web TrueNAS a través de Traefik en el puerto 443.

Al configurar el `Servicio externo`:

- Establezca `IP de servicio externo` a la dirección IP de su servidor TrueNAS
- Establecer `tipo de puerto` a `HTTPS`
- Establezca `Puerto de Servicio` al mismo valor que `Puerto HTTPS de Interfaz Web` en los ajustes de GUI TrueNAS (`444` si siguió la guía 11)
- Configurar el progreso según la guía 12 (establecer los valores de `Host` y `HostName` por ejemplo truenas.example.com)

Ahora Traefik servirá a TrueNAS Web GUI sobre HTTPS en truenas.example.com. Asegúrese de que su DNS apunte truenas.example.com a la dirección IP de su servidor TrueNAS.

Para comprobar si configuras todo correctamente, compara tus ajustes con los de esta captura de pantalla:

![Captura de pantalla con configuración de servicio externo](img/truenas-web-gui-via-traefik-screenshot.png)

Una vez desplegado su Servicio Externo, puede obtener este resumen seleccionando "Editar" en el menú Servicio Externo (tres puntos).
