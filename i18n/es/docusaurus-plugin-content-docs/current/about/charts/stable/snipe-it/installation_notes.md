# Instalación inicial

`Comprobación de pre-vuelo de Snipe-it` [no puede detectar](https://github.com/snipe/snipe-it/issues/10779) si se está ejecutando detrás de un proxy, así que para la instalación inicial se sugiere ir sin ingresos.

Completa la configuración y vuelve atrás y habilita ingresos.

También ten en cuenta que deberías tener `172.16.0.0/16` en tu `APP_TRUSTED_PROXIES`. Si desea agregar más proxies de confianza. Es una lista separada por comas y puedes hacerlo de esa manera `172.16.0.0/16,192.168.1.0/24`.

Si no puede cargar la pantalla de configuración de initla la primera vez que la instala, detenga la aplicación y vuelva a iniciarla. Debería funcionar justo después. Este error ha sido reportado [upstream](https://github.com/snipe/snipe-it/issues/10945)
