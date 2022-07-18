# Cómo crear: Crear certificados

En TrueCharts soportamos implementaciones HTTPS de cada aplicación usando nuestro Proxy Traefik Reverse. Soportamos certificados personalizados y lets-encrypt, usando el gestor de certificados de construcción TrueNAS SCALE. Disponible bajo "Credenciales"

## Certificados autofirmados

Los certificados autofirmados son relativamente directos y manejados por Traefik mismo. ¡Simplemente selecciona el certificado por defecto de TrueNAS cuando agrega un progreso a tu aplicación y Traefik hace el resto! Tenga en cuenta que estos certificados no son realmente seguros, pero son "suficientemente buenos" para las pruebas.

## Certificados de Lets-Cifrado

Con la versión actual de TrueNAS SCALE, es posible generar automáticamente certificados para su(s) dominio(s) usando letsencrypt. Sin embargo, este proceso no está muy claro, por lo que también hemos añadido un breve guía. Después de haber conseguido completar esto, debería ser capaz de seleccionar "iX Certificate" como opción de certificado y su certificado personal en la otra caja desplegable!

## Importar certificados existentes

TrueNAS SCALE también le permite importar certificados manualmente, esto es bastante recto hacia adelante: Copie y pegue las teclas en sus respectivos cuadros y presione `guardar`
