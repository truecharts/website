# Notas de instalación

Si no habilita `Proxy inverso` en `Collabora` (no se recomienda ya que no es seguro), para que funcione tienes que

* Quitar `-o:ssl.termination=true -o:ssl.enable=false` de `Parámetros extra`.
* Establezca `Nombre del servidor` en `hostIP:port` (el número de puerto que ha establecido para `NodePort`)
* Establezca `tipo de servicio` a `NodePort`
* Establecer `tipo de puerto` a `HTTPS`
* Deshabilita la validación de certificados en la aplicación que vas a utilizar. (por ejemplo, Nextcloud tiene una casilla de verificación bajo la URL de Collabora para desactivar la validación del Cervecer)
