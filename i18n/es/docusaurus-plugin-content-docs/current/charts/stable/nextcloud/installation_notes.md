# Notas Importantes

Nextcloud es una Aplicación MUY Picky y es MUY difícil de soportar. Por esta razón le pedimos que no presente solicitudes de soporte en nuestro Discord o Github, a menos que su problema esté claramente causado por TrueCharts.

Mientras consideramos la capa de aplicaciones "estable", simplemente no podemos garantizar la estabilidad debido a la naturaleza de la aplicación Nextcloud dentro de la aplicación.

## Notas de instalación

Nextcloud genera su archivo `config.php` en el primer arranque/instalación. Por lo tanto, tiene que establecer algunos valores correctamente en el primer intento. De lo contrario, tendrás que volver a instalar la aplicación o editar manualmente el archivo `config.php` , con el último fuera de nuestro ámbito de soporte. Los valores mencionados son:

- PROXIES
- IP del nodo
- Ingresa, si planeas usarlo.
- Ubicación de almacenamiento de datos, tipo (ej. PVC, hostPath).

Nextcloud también crea un usuario administrador en el primer arranque/instalación, el cual sólo puede definir su nombre de usuario y contraseña en la primera instalación. Cambiarlos más tarde, no tendrá ningún efecto. Los valores mencionados son:

- NEXTCLOUD ADMIN
- NEXTCLOUD ADMIN_PASSWORD
