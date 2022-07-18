# Clustering

Uno de los objetivos finales de la SCALE es ejecutar clústeres convertidos en hiperconvergentes basados en ZFS, Gluster y Kubernetes. Aunque esto es increíble, nos gusta destacar 3 formas de usar Clustering con TrueCharts Apps en el futuro.

Actualmente no se apoya ningún clustering con TrueCharts todavía, pero ya tomamos precauciones durante nuestra fase de diseño para implementar la agrupación sin problemas en el futuro.

## Flexible con un Pod

Estas aplicaciones (pueden) sólo ejecutar una sola instancia de un pod a la vez, por lo que no hay una configuración de "alta disponibilidad" disponible. Sin embargo, estas aplicaciones todavía pueden moverse dinámicamente a diferentes nodos si un nodo falla, esto debería asegurarse de que el tiempo de inactividad permanece relativamente pequeño. Estas aplicaciones también pueden ser "propagadas" sobre todos los nodos de kubernetes. Esto también significa que vale la pena cortar grandes aplicaciones de un solo Pod en múltiples implementaciones más pequeñas, Por ejemplo: n preferimos desplegar pequeños servidores de bases de datos con cada aplicación (ya que estos pueden ser distribuidos dinámicamente sobre múltiples nodos) en una aplicación flexible de un solo pod.

Algunos ejemplos de aplicaciones que no pueden ejecutarse con más de un pod a la vez, incluso si queríamos, son:

- Sonarr
- Lidarr
- Radar
- Plex

## No flexible con un Pod

Estas aplicaciones no pueden ejecutarse con más de 1 pod a la vez y por otro lado están unidas a un nodo. Esto significa: Anfitrión-Abajo? ¡Descenso!

Casi siempre esto se debe a que las aplicaciones están vinculadas a una configuración de hardware específica.

*Ejemplos:*

- zwavejs2mqtt
- Asistente de hogar (dependiendo del hardware añadido)
- Handbrake (dependiendo del hardware añadido)

## Aplicaciones de alta disponibilidad

Estas aplicaciones están diseñadas para ser las más resistentes de todos, pueden manejar fallos de nodos y fallos de pod sin ningún problema, porque siempre ejecutan múltiples Pods a la vez que rellenan una vez que pods o nodos empiezan a fallar.

Porque estas aplicaciones también son las más complicadas de todas. tratamos de limitarlos a las áreas clave del ecosistema TrueCharts que no se puede cortar en piezas más pequeñas (Single-Pod Flexible) fácilmente. Me gusta: Progreso y seguimiento.

*Ejemplos:*

- Traefik
