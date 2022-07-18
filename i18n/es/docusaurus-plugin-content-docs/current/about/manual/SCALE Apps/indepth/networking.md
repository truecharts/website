# Redes

TrueCharts contiene una serie de opciones de redes, algunas super-fáciles y otras avanzadas. En este documento trataremos de dar una visión general de cuáles son las opciones generales de configuración y cuáles son sus desventajas y ventajas.

## Opciones generales

### Red de Anfitriones

Esta opción se considera una opción avanzada y rara vez se necesita. Conecta la pila de red del host a la aplicación.

La razón por la que esto no es necesario en la mayoría de las aplicaciones, es porque ya tenemos grandes opciones para tratar con la mayoría de las formas de tráfico de red y cada mantenedor tiene el objetivo de asegurarse de que no necesita esta configuración.

Por favor, consulte la documentación de aplicaciones individuales o la sección de Discusiones de Soporte en github, si cree que puede necesitar esta configuración en su caso de uso específico

### ClusterIP

El modo de red "Basic", crea un equilibrador de carga especial llamado "servicio" que sólo está disponible en la red interna entre las aplicaciones.

No pienses que no puedes conectarte a ella, porque nuestro [proxy inverso](https://wiki.truecharts.org/general/reverse-proxy/) puede reenviar la mayor parte del tráfico para ti!

### NodePuerto

El nombre ya deja claro lo que hace éste: Conéctese a un puerto en su nodo (el PC que aloja su aplicación).

Es un clusterIP especial que reenvía todo el tráfico desde un puerto determinado en el "nodo" del sistema host, directamente al servicio. Sin embargo, también sigue siendo un ClusterIP, por lo que es muy bien posible usar tanto el proxy Inverso como el NodePort, no en el mismo puerto.

Sin embargo, hay múltiples desventajas en el uso de nodeports:

- Solo puedes elegir puertos por encima de 9000
- No puede conectar dos aplicaciones al mismo puerto

### Balanceador de carga

Loadbalancer conecta un destino de servicio directamente a la red de anfitriones. Sin embargo, puede hacerlo en rangos más bajos que NodePort, lo que lo convierte en una gran solución para cosas como los servidores DNS.

Sin embargo, hay desventajas en el uso de LoadBalancer:

- No puede conectar dos aplicaciones al mismo puerto
