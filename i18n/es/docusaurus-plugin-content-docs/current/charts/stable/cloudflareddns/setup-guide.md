# Cómo

Así que has seguido algunas de nuestras guías TrueNAS, configura tu nombre de dominio, certifica y usa Cloudflare para tu administración DNS, sin embargo no tienes una IP estática, entonces esta guía es para ti. Esta guía rápida le ayudará a pasar los pasos para usar Cloudflareddns para actualizar su IP dinámica junto con su despliegue completo de modo que incluso si cambia la IP, su dominio apunte a la dirección correcta.

## Requisitos

Nombre de dominio (puede ser comprado a través de Cloudflare o etc)

Gestión de DNS de Cloudflare

- Regístrate gratis en Cloudflare
- Apunte a los servidores de nombres que Cloudflare le asigne ![imagen](https://user-images.githubusercontent.com/89483932/179332161-e903e46e-ed8c-4b58-81fc-6fcadf1a9851.png)

Gráfico Cloudflareddns

## Prerrequisitos

Esta guía asume que has seguido nuestra guía principal [de Quick-Start Guide](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/adding-letsencrypt) con tu dominio en TrueNAS y has hecho la configuración de tu DNS en Cloudflare (ver [este video](https://www.youtube.com/watch?v=hJVghecs3rE) en nuestro canal de YouTube)

La forma recomendada es configurar CNAMEs para sus subdominios (gráficos) y mantener su registro A apuntado a su dominio base, como abajo

![imagen](https://user-images.githubusercontent.com/89483932/179334653-316e462f-7bf7-4cda-a9dc-dd8842e76021.png)

Tenga en cuenta el `ID de zona` y el `ID de cuenta`, eso es lo que usaremos dentro del gráfico Cloudflareddns.

![Resumen](https://user-images.githubusercontent.com/89483932/179336819-64a32521-c64b-4ae6-8d5d-225b7342b786.png)

## Configuración del gráfico Cloudflareddns

Paso 1-2: Nombre del gráfico y dejar el valor predeterminado para el paso 2

![Paso 1](https://user-images.githubusercontent.com/89483932/179336761-2ce2da3a-cd75-43ba-befe-4c3775f04027.png)

Paso 3:

![Paso 3 Parte 1](https://user-images.githubusercontent.com/89483932/179336779-e2aa5273-8527-40f1-bc3c-3768931ea289.png)

Usar ZoneID de la página de Resumen del Dominio de Cloudflare (ver arriba) para el campo `CF_APITOKEN_ZONE`

Usar ID de cuenta de la página de Resumen del Dominio de Cloudflare (ver arriba) para el campo `CF_APITOKEN`

![Paso 3 Parte 2](https://user-images.githubusercontent.com/89483932/179336787-338b1939-546c-42fa-86a2-afe89da91e8d.png)

Puede dejar todo excepto el `CF_RECORDTYPES` al valor predeterminado si sólo está cambiando su registro A, (consulte la documentación del autor para más opciones [aquí](https://hotio.dev/containers/cloudflareddns/))

Cambie `CF_RECORDTYPES` a A si solo está cambiando su dominio principal

Pasos 4-8: Ajustar según sea necesario, pero los valores por defecto son correctos

## Soporte

- Si necesita más detalles o tiene una configuración más personalizada, la documentación en el [upstream](https://hotio.dev/containers/cloudflareddns/) está muy completa, así que compruebe las descripciones de las opciones allí.
- También puedes contactarnos usando Discord para comentarios y soporte en tiempo real
- Echa un vistazo a nuestra Discord
- Si encontraste un error en nuestro gráfico, abre un [problema de Github](https://github.com/truecharts/apps/issues/new/choose)

---

Todos los derechos reservados - El Proyecto TrueCharts
