# 07 - Añadir certificados de letras cifradas

Con TrueNAS SCALE, es posible generar automáticamente certificados para su(s) dominio(s) usando letsencrypt. Sin embargo, este proceso no es muy autoexplicativo. Después de que lograste completar este cómo, debería ser capaz de seleccionar "iX Certificate" como opción de certificado y su certificado personal en la otra caja desplegable!

## Requisitos

Para usar certificados iX con letsencrypt hay algunos requisitos:

- Preferiblemente use un servidor DNS que no tiene ningún caché (no servidor DNS local) para su sistema TrueNAS.
- Introduzca una dirección de correo electrónico para su usuario `root` de su SCALE TrueNAS. (¡Este correo electrónico también se utilizará para recordatorio letsencrypt!)
- Propio de un nombre de dominio
- Utilice Cloudflare o AWS Route53 para su dominio. (En caso de que te preguntas: usar Cloudflare como proveedor DNS es gratis)
- Tener una conexión activa a Internet para que TrueNAS SCALE pueda ponerse en contacto con Cloudflare o AWS para verificar su propiedad de dominio

## Cómo

- Haga clic en `Credenciales` en el menú del lado izquierdo y vaya a la página `Certificados`.

![LE2](/img/LE/LE2.png)

- Tenga en cuenta `ACME DNS-Authenticators`, seleccione `Añadir` además `ACME DNS-Authenticators` para abrir el menú para agregar su proveedor DNS para la verificación de dominio.

- Introduzca la información requerida y haga clic en `guardar`. Para Cloudflare necesita una API Key global o un token de API de alcance limitado. Por favor refiérase a cloudflare y/o AWS sobre cómo obtener las credenciales requeridas.

![LE1](/img/LE/LE1.png)

- Aviso `Solicitudes de Certificado`, seleccione `Añadir` además de `Solicitudes de firma de certificados` para abrir el menú para agregar la información de dominio para la que desea un certificado.

![LE3](/img/LE/LE3.png)

- Introduzca toda la información requerida en el asistente y guárdela. Si no está seguro, los valores por defecto son casi siempre "alright", porque la mayoría de lo que ingresa aquí es completamente ignorado por Letsencrypt. `Nombre común` en este caso significa `Nombre de dominio primario`, mientras que `Nombres de Subject Alternate` significa `Nombres de dominio Extra`.

![LE4](/img/LE/LE5.PNG)

- Tenga en cuenta que su nueva solicitud de firma de certificados ``aparece en el cuadro de abajo `Solicitudes de firma de certificados`. También nota el pequeño ícono de `envoltura` a la derecha de tu solicitud de firma de certificado``

- Haga clic en el icono pequeño `envoltura` , esto abrirá el menú `Crear certificado ACME`. En este menú podemos solicitar un certificado real (Producción) o un certificado de prueba (staging) de Letsencrypt. Para mayor claridad, es recomendable utilizar el mismo Autenticador para todos los nombres de dominio. Sin embargo: Está bien generar tanto una prueba como un certificado de puesta en escena para el mismo dominio.

- Después de guardar y esperar el proceso de generación, deberías terminar con otra `Solicitud de Firma de Certificado` y un nuevo `Certificado` bajo `Certificado`, este nuevo `Certificado de Solicitud de Firma` se utiliza para renovar su `Certificado` en el futuro y no debe ser eliminado!

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/TJ5fDiDRcbU)
