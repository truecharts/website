---
sidebar_position: 7
---
# Ingress

Ingress or more commonly known as Reverse Proxy settings can configured here. This is the way that Kubernetes connects your Applications in containers to FQDNs (fully qualified domain names). If one chooses to enable this one must have a Reverse Proxy also installed and something resolve the DNS name of the FQDN specified.

## `Ingress`

:::caution Reverse Proxy support

Currently the `Reverse Proxy` of choice for `TrueCharts` is `Traefik`. Enabling `Ingress` will configure settings for use with the `Traefik` application. Other reverse proxies may be used by users however they won't be affected by anything in the menu below and come without support from the `TrueCharts` team.

:::

### Main Ingress

A step by step guide to this section is included in the [manual](https://truecharts.org/docs/manual/SCALE%20Apps/add-ingress) along with a video guide. Please refer to the [`Traefik`](https://truecharts.org/docs/charts/stable/traefik/) documentation for more info.

- `Hosts`
  - `HostName` (required): Enter your FQDN here (app.mydomain.com)
- `Paths` : Must have one but may have multiple paths.
  - `Path` (required): `/` is entered by default.
  - `Path Type` (required): `Prefix` is entered by default.

- `TLS-Settings`
  - `Certificate Hosts`: Must have one but multiple may be used.
  - `Host`: (required) Enter FQDN for HTTPS (app.mydomain.com)
  - `Select TrueNAS SCALE Certificate`: Choose the Certificate created for your domain (see [manual](https://truecharts.org/docs/manual/SCALE%20Apps/adding-letsencrypt) if you haven't done this yet)

- `Traefik Middlewares`: Any `Traefik` middlewares may be added here

- `Add Manual Custom Ingresses` (expert): Enables advanced custom Ingress settings that may be used by expert users.

## Guide

To use Traefik as Reverse Proxy using Kubernetes ingress, all you have to do is enable "ingress" in the App of your choice and fill out a little form.
We currently require Traefik to be installed before you enable ingress on your App.

### Requirements

- Make sure your storage-pool is created and working
- Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to [Adding TrueCharts to SCALE](/manual/guides/Adding-TrueCharts/)
- Make sure you have a working internet connection and can reach github and truecharts.org from the host system.
- Make sure you already added the TrueCharts catalog from [Adding TrueCharts to SCALE](/manual/guides/Adding-TrueCharts/)
- Make sure your App is installed and, preferably, working
- Make sure you added your certificates in [Adding Lets-Encrypt Certificates](/manual/guides/adding-letsencrypt/)
- Make sure you've setup traefik in [Installing Traefik](/charts/enterprise/traefik/how-to/)

### Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/0Rmav5gyAwI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Notes

There are a few highlights to take into account when adding a ingress to an App:

- Adding hosts is required
By default the hosts list is empty, this is due to upstream design choices and is a issue that is yet to be solved upstream.
However: adding hosts (preferably just one) is required for ANY app to function with a ingress enabled. Apps might not install and throw errors if you do not add any hosts.

- Traefik not accepting/using certificates
Sometimes you might notice Traefik ignores your certificate. This is most likely due to the domain on your certificate, being different from the domain you entered into the reverse proxy host box.
Traefik requires your certificate to match the domain used for Ingress. This is an upstream design decision and something we can easily and safely disable.
