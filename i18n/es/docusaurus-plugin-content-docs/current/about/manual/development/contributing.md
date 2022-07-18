# Directrices de contribución

Este proyecto acoge con satisfacción todas las aportaciones, pero necesitamos algunas directrices de calidad. Estas directrices se ilustrarán aquí, en este documento.

## GIT Guidelines

---

### Nuevo en GIT

Si nunca has usado git antes, puedes consultar nuestra referencia general en nuestra wiki.

### Git y tú

GIT es un sistema fantástico, pero mientras lo usamos tenemos algunas directrices para mantenerlo fantástico para todos.

- Enviar PRs completos.
- Añada [DNM] si no desea que su PR se fusione.
- Siempre trate de rellenar todo el formulario, incluso para pequeños PR.
- No cerrar cuando un revisor solicita cambios (simplemente pulse los cambios o pida ayuda).
- Explique lo que hizo en su PR.
- Hágase a fondo.
- Si puedes añadir capturas de pantalla para aclarar.
- Intente siempre añadir "Fixes #000" (donde 000 es el problema de sus correcciones de relaciones públicas)
- ha encontrado algo que quiere arreglarse? Por favor, hagan también un problema.

## Directrices de estructuras

---

### Inclusión de archivos y carpetas

Aunque GIT es bastante amigable en lo que acepta en términos de archivos y cambios de carpeta en un commit, el tiempo de un revisor o bugfixer no es ilimitado. Por esta razón, tenemos algunas pautas específicas en lo que respecta a la inclusión de archivos y carpetas en sus PR.

- Sólo incluya los archivos que realmente ha cambiado.
- Intentar no incluir varios cambios en un PR
- ¿Quieres cambiar el formato de varios archivos también? Crear un PR separado.

## Directrices de código

---

### Tu código, tu estilo, mi opinión

Aquí en TrueCharts, valoramos a la gente con su propio estilo. Pero tu código debe ser revisable y editable también por otros. Por esta razón, tenemos algunas directrices básicas de codificación

- **Siempre** explique la expresión regular en un comentario dentro de su código.
- Escribe código simple y no intentes impresionar.
- Ejecutaremos (Basic) el reformateo automático del código de una vez en un tiempo.
- Documenta tus cambios en tu código y, si es necesario, en el wiki.
- Todos los PRs deben poder pasar nuestras pruebas automatizadas.

#### Requisitos de aplicaciones

- Las aplicaciones siempre deben guardar datos específicos del usuario en una ubicación persistente. Eso puede ser conectado por IXVolume o ruta de host
- Las aplicaciones no deben requerir que el usuario edite por sí mismo cualquier archivo de configuración. Todos los cambios de configuración deben ser automatizados o usando la interfaz de usuario
- Las aplicaciones no deben usar contraseñas por defecto, el usuario siempre debe ser forzado (!) para poner las credenciales manualmente

## Directrices de revisión

---

Incluso nosotros revisamos los dioses de vez en cuando.

- Que la gente aprenda de sus errores
- Revisar en lugar de fusionar sin comentarios
- Obide por estas pautas en su revisión
- Existen pruebas por una razón. No fusionar con test-failures

## Todo vs Característica vs bug

---

Tenga en cuenta la diferencia entre un TODO y Característica

- Bug: Un comportamiento inesperado del guión o un crash. Incluyendo, pero no limitado a, errores y advertencias.
- Todo: Cuando encuentras algo que necesita modificar/añadir durante el desarrollo, no es un comportamiento inesperado
- Característica: Cuando usted, por preferencia personal, quiere algo añadido o cambiado.

### ¡Eso es todo!

---

Alguien vendrá y revisará los cambios. Si todo se ve bien, entonces lo fusionarán con el repositorio principal. Si necesitas ayuda no tienes miedo de preguntar en el canal de discord: [https://discord.gg/tFcTpBp](https://discord.gg/tFcTpBp)
