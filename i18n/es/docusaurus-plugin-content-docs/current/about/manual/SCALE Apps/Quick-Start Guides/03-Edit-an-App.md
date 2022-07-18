# 03 - Editar Aplicaciones

Editar aplicaciones es posible desde 21.08, aunque tiene una interfaz de usuario ligeramente diferente, expone la misma configuración que instalar una aplicación.

## Requisitos

- Asegúrate de que tu grupo de almacenamiento está creado y funcionando
- Asegúrate de seleccionar tu grupo de almacenamiento cuando abras por primera vez la interfaz "Apps", si no es así, consulte la guía de inicio rápido `01 - Configuración de aplicaciones por primera vez`
- Asegúrese de que tiene una conexión a Internet en funcionamiento y de que puede acceder a github y truecharts.org desde el sistema anfitrión.
- Asegúrese de que ya ha agregado el catálogo de TrueCharts de la guía 02
- Asegúrate de que tu aplicación está instalada y, preferiblemente, funcionando

## Editando la aplicación

- Ir a `Aplicaciones instaladas`
- haz clic en el botón de menú en el lado derecho de la App card
- Seleccione `Editar`
- Cambiar cualquier configuración que desee cambiar
- Envía tus cambios

La aplicación pasará a través de un proceso de envío de tus cambios. Si el proceso falla, sus cambios no serán enviados y la edición será revertida. El proceso emergente desaparece, puede tardar unos minutos en desplegar tus nuevos cambios, debido a algunas cosas que suceden en segundo plano.

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/UyqM798Arbo)

### Notas

- NO es recomendable cambiar entre Nodeport y Loadbalancer, usando los mismos puertos. Esta WILL causa problemas. Si edita una aplicación y cambia entre NodePort y Loadbalancer, asegúrese de utilizar diferentes puertos.
