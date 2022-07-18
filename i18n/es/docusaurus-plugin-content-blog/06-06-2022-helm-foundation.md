---
slug: "Timón como base"
title: "Timón como base"
authors:
  - ornias
---

Después de algunas cuidadosas reflexiones sobre cómo queremos hacer avanzar el proyecto, hemos decidido poner nuestros Helm Charts en primer lugar y otras soluciones en segundo. Nuestro razonamiento para hacer esto, es que queremos permitir a los usuarios ser más flexibles en que la plataforma kubernetes utilizan y experimentan todos los proyectos impresionantes que están ahí.

**ESCALE y TrueCharts**

¿Qué significa esto para nuestros usuarios de SCALE? No tanto en realidad: seguiremos apoyando y construyendo aplicaciones SCALE. Sin embargo, significa que comenzaremos a llamar más abiertamente nuestro trabajo "Charts" en lugar de "Apps" y algunos nuevos Charts no soportarán SCALE fuera de la caja.

**Yelmo y TrueCharts**

También vamos a aumentar considerablemente nuestro juego para apoyar a los usuarios que deseen personalizar el YAML directamente con Helm. Más aplicaciones con configuración más flexible. Al mismo tiempo vamos a trabajar para hacer que la generación de la interfaz de usuario de SCALE sea más automatizada. Si bien esto podría llevar a una interfaz GUI más "desordenada", traerá cosas más en "sincronización" con los despliegues nativos del Helmo que ofrecemos.

Para los nuevos desarrolladores, todo esto ofrecerá una experiencia mucho más fácil: simplemente construya el gráfico de timón y envíe los PR para él. No más molestarse en ser requerido para moverse a través de hunderds de filas de la descripción del GUI SCALE.

Con todos estos cambios combinados, esperamos ser nuestro impresionante repositorio de Charts para más gente, mucho más rápido!
