# 06 - Aplicaciones vinculadas internamente

A menudo necesitamos conectar aplicaciones individuales juntas, por ejemplo: Sonarr y SABnzbd. Esto significa que primero necesitamos saber cómo llegar a esas aplicaciones.

## Enlazando Aplicaciones Internacionales

El backend de TrueNAS SCALE Apps es Kubernetes. La conexión de aplicaciones en Kubernetes se hace de forma ligeramente diferente que en otros sistemas, ya que no se puede apuntar directamente a otros contenedores usando su dirección IP.

En su lugar, necesitamos usar su nombre de dominio interna(!). Por favor, ten en cuenta: este nombre sólo está disponible entre las aplicaciones y no se puede acceder desde el host/nodo o tu propio equipo.

El formato para el nombre de dominio interno para el servicio principal se explica a continuación. Por favor, reemplace `$NAME` con el nombre que dio a su aplicación al instalar y `$APP` con el nombre que tiene la aplicación en el catálogo donde se necesita.

**Si el nombre de tu aplicación *contiene* el nombre de la aplicación como en el catálogo, el formato es el siguiente.**

- `$NAME.ix-$NOMBRE.svc.cluster.local`

**Si el nombre de tu aplicación *NO contiene* el nombre de la aplicación como en el catálogo, el formato es el siguiente.**

- `$NAME-$ix-$NAME.svc.cluster.local`

Si necesita llegar a un servicio diferente (que no suele ser el caso! , necesita un formato ligeramente diferente, donde `$SVCNAME` es el nombre del servicio que desea alcanzar:

**Si el nombre de tu aplicación *contiene* el nombre de la aplicación como en el catálogo, el formato es el siguiente.**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**Si el nombre de tu aplicación *NO contiene* el nombre de la aplicación como en el catálogo, el formato es el siguiente.**

- `$NAME-$NOMBRE-$SVCNAME.ix-$NOMBRE.svc.cluster.local`

## Generador de nombres de dominio interno

### Ejemplo

Para llegar a una aplicación llamada "my-sabnzbd-app" o "sabnzbd' (nombre contiene el nombre de aplicación del catálogo) dentro de Sonarr, podemos utilizar el siguiente nombre de dominio interno:

- `sabnzbd.ix-sabnzbd.svc.cluster.local` or
- `sabnzbd.ix-sabnzbd`

Para llegar a una aplicación llamada "sab" (nombre NO contiene el nombre de aplicación del catálogo) dentro de Sonarr, podemos utilizar el siguiente nombre de dominio interno:

- `sab-sabnzbd.ix-sab.svc.cluster.local` o
- `sab-sabnzbd.ix-sab`

![enlazar-ejemplo-sonarrsabnzbd](/img/linking/linking-example-sonarrsabnzbd.png)

### Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/mWJL-XDgH98)

### Documentación adicional

Para más ayuda para solucionar problemas DNS en Kubernetes, revisa la documentación oficial: https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
