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
