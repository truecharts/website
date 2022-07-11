# 06 - Linking Apps Internally

We often need to connect individual apps together, for example: Sonarr and SABnzbd. This means we first need to know how to reach those Apps.

## Linking Apps Internally

The backend for TrueNAS SCALE Apps is Kubernetes. Linking apps together in Kubernetes is done slightly differently than in other systems, as you can't point directly to other containers using their IP address.

Instead we need to use their internal(!) domain name. Please beware: this name is only available between Apps and can not be reached from the host/node or your own PC.

The format for internal domain name for the main service is explained bellow.
Please replace `$NAME` with the name you gave your App when installing and `$APP` with the name the app has on the catalog where is needed.

**If your app name *contains* the name of the app as in the catalog, the format is as follows.**

- `$NAME.ix-$NAME.svc.cluster.local`

**If your app name *does NOT contain* the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

If you need to reach a different service (which is not often the case!), you need a slightly different format, where `$SVCNAME` is the name of the service you want to reach:

**If your app name *contains* the name of the app as in the catalog, the format is as follows.**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**If your app name *does NOT contain* the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APPNAME-$SVCNAME.ix-$NAME.svc.cluster.local`

## Internal Domain Name generator

### Example

To reach an app named "my-sabnzbd-app" or "sabnzbd' (name contains the catalog app name) within Sonarr, we can use the following internal domain name:

- `sabnzbd.ix-sabnzbd.svc.cluster.local` or
- `sabnzbd.ix-sabnzbd`

To reach an app named "sab" (name does NOT contain catalog app name) within Sonarr, we can use the following internal domain name:

- `sab-sabnzbd.ix-sab.svc.cluster.local` or
- `sab-sabnzbd.ix-sab`

![linking-example-sonarrsabnzbd](/img/linking/linking-example-sonarrsabnzbd.png)

### Video Guide

![type:video](https://www.youtube.com/embed/mWJL-XDgH98)

### Additional Documentation

For more help troubleshooting DNS resolution in Kubernetes, review the official documentation: https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
