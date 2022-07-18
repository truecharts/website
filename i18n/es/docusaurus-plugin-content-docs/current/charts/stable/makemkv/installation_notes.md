# Notas de instalación

- Si activas `Ingress` para esta aplicación, necesita tener `SECURE_CONNECTION` establecido en `false` y `Port Type` establecido en `HTTP`, de lo contrario se pueden encontrar errores para `Demasiadas redirecciones`.
- No puedes activar `Ingress` para `VNC` Si quieres usar `VNC`, debes establecer este servicio a `Simple` en su lugar
- `VNC` con `SECURE_CONNECTION` set `true`, solo funciona con muy pocos clientes. Uno de ellos es `SSVNC`.
- `SECURE_CONNECTION` afecta a `WebUI` y `VNC`.

---

- Si está pasando por dispositivos como `Optical Drives`, tienes que hacer clic en `Configuración de seguridad del contenedor` y establecer `PUID` a `0`.
