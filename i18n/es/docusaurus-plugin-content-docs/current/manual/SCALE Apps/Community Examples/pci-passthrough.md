# Pasado de dispositivos PCI(-E)

Para pasar por tus tarjetas PCI(-E) necesitas para:

- Ir a Aplicaciones Instaladas
- Haz clic en el botón de menú en el lado derecho de la App card
- Seleccionar Editar
- Desplazar hacia abajo a la sección "Recursos y Dispositivos"
- Bajo Configurar dispositivos USB Haga clic en el botón Añadir a la derecha (esto también funcionará para dispositivos PCI*)
- En "Host Device Path" & "Container Device Path" introduzca /dev/path para su tarjeta (ej: para dispositivos dvb será: /dev/dvb)
- Envía tus cambios

> *Este método no está garantizado para funcionar, y oficialmente no ofrecemos soporte para dispositivos PCI(-E) Passthrough en este momento.
