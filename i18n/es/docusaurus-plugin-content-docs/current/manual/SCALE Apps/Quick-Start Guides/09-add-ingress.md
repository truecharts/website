# 09 - Exponer aplicaciones usando Ingress y Traefik

Para usar Traefik como ingresos, todo lo que tienes que hacer es habilitar "ingresos" en la aplicación de tu elección y rellenar un pequeño formulario. Actualmente necesitamos que Traefik esté instalado antes de activar el progreso en tu aplicación.

## Requisitos

- Asegúrate de que tu grupo de almacenamiento está creado y funcionando
- Asegúrate de seleccionar tu grupo de almacenamiento cuando abras por primera vez la interfaz "Apps", si no es así, consulte la guía de inicio rápido `01 - Configuración de aplicaciones por primera vez`
- Asegúrese de que tiene una conexión a Internet en funcionamiento y de que puede acceder a github y truecharts.org desde el sistema anfitrión.
- Asegúrese de que ya ha agregado el catálogo de TrueCharts de la guía 02
- Asegúrate de que tu aplicación está instalada y, preferiblemente, funcionando
- Asegúrate de añadir tus certificados en la guía 07
- Asegúrate de que has configurado traefik en la guía 08

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/0Rmav5gyAwI)

## Notas

Hay algunos puntos destacados que hay que tener en cuenta al agregar un progreso a una aplicación:

- Se requiere añadir hosts Por defecto la lista de hosts está vacía, esto se debe a las opciones de diseño originales y es un problema que todavía no se ha resuelto en la línea principal. Sin embargo, es necesario añadir hosts (preferiblemente sólo uno) para que CUALQUIER aplicación funcione con un progreso activado. Las aplicaciones podrían no instalar y lanzar errores si no agregas ningún host.

- Traefik no acepta/utiliza certificados A veces puedes notar que Traefik ignora tu certificado. Esto es muy probable debido al dominio en su certificado, siendo diferente del dominio que ha introducido en la caja de host proxy inverso. Traefik requiere que su certificado coincida con el dominio utilizado para Ingress. Esta es una decisión de diseño original y algo que podemos deshabilitar de forma fácil y segura.
