---
slug: "Introducción: repositorio de contenedores TrueCharts"
title: "Introducción: repositorio de contenedores TrueCharts"
authors:
  - ornias
---

El último año hemos crecido a un ritmo cada vez mayor, duplicando el código y los usuarios cada pocos meses. Algunos problemas se podían solucionar rápida y fácilmente, mientras que otros eran enormemente más complejos. Uno de esos problemas resultó ser el desorden enrevesado de diferentes fuentes de contenedores.

Todos estos contenedores tenían diferentes formatos de etiquetas, límites de velocidad, tiempos de inactividad, e incluso uno decidió empezar a eliminar etiquetas, lo que provocaba fallos en las aplicaciones. Obviamente, esta no fue la experiencia que queríamos que tuvieran nuestros usuarios.

Por lo tanto, hemos pasado la mejor parte de diciembre estableciendo nuestro propio sistema de distribución de contenedores. El repositorio de contenedores TrueCharts o TCR en breve. TCCR es una combinación de contenedores que hemos construido completamente nosotros mismos y contenedores que reflejamos, visualizamos y reetiquetamos en un formato estandarizado. Hacer esto también nos permitió asegurar *todos los contenedores* están disponibles de múltiples fuentes: GHCR, Quay y Dockerhub.

h, lo que nos permite cambiar fácilmente entre las fuentes de contenedores para nuestro repositorio, al mismo tiempo que nos da algo nuevo: métricas. Por fin podemos ver qué contenedores son populares y cuáles no, pero también podemos ver si hay gente que todavía utiliza versiones antiguas de aplicaciones. Esto nos permite mejorar nuestro proceso de toma de decisiones: en qué aplicaciones funcionarán y qué versiones antiguas soportar.

Todos ustedes tienen (bajo el capó), ya están ejecutando TCCR y sólo hemos tenido un puñado de problemas relacionados con él. Estamos felices de haber creado algo que de nuevo, nos destaca como la fuente número 1 para las aplicaciones de la SCALE de TrueNAS.
