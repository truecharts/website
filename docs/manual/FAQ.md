---
sidebar_position: 5
---
# F.A.Q. (Frequently Asked Questions)

TrueCharts Frequently Asked Questions

## Why PVC is recommended over HostPath?

We recommend using PVC for `config` storage, as it provides an easy way to roll back your application in case of a failed update. Furthermore, we currently only offer active support for this storage option. You can still use host path for your `media` files.

:::caution

Using host path is **not** compatible with shares!

:::

:::tip

To share data, create an `NFS` share and select `NFS Share` for the `Type of Storage` in the `Additional App Storage` settings.  
You can create an `SMB` share on the same mount point if needed.  
See [Why I can't use host path on both my apps and sharing services?](#why-i-cant-use-host-path-on-both-my-apps-and-sharing-services) for further details.

:::

## How can I access data inside PVC?

You can use [HeavyScript](https://github.com/Heavybullets8/heavy_script) to mount the PVC and un-mount once you finish.
Use your preferred editor/explorer to do any changes you want.
You need to make sure permissions stay the same, or the app might not be able to access the files.

## Do we support ACLs for HostPath storage?

While it is technically feasible to use Access Control Lists (ACLs) for host path storage in ***most*** Charts/Apps, we strongly advise against it. We are unable to provide individual guidance to every user for setting up their ACLs for each chart. Apart from a few exceptions, user 568 (apps) must have access to their host path storage.

## Are there Ingress requirements for certain apps?

Certain applications require ingress to work correctly for security reasons.
Some examples are:

- Vaultwarden
- Nextcloud
- Monica
- Recipes

## Can I use another Load Balancer in front of traefik?

Technically, yes you can. But keep in mind this is out of our support scope.

## Do we support other proxies and LoadBalancers in front of Traefik?

Not supported for standard support channels. This includes cloudflare proxy.

## What is the meaning of Advanced/Expert Checkboxes (Networking, Storage, etc)?

These options are intended for experienced individuals and are beyond the scope of basic support. If you select these checkboxes or enable features such as host networking, it could potentially break your app and require a reinstall to restore functionality.

### Why don't you advise users to enable `Host-Networking`?

"When using host networking, a port is linked to the pod. Sadly enough, those ports are NOT correctly freed when hostNetworking is disabled in the future", see [discussion](https://github.com/k3s-io/k3s/discussions/7382).

## My Chart is asking for a default Password, what is it?

We use upstream containers. If the password is not on our website,
please refer to the upstream container sources we list on the website instead.

## My Chart application has had an upstream update, but the chart is not updated yet?

It takes a few days for our automation tools to pick up updates, please sit tight.
Please only report missed updates when 7 days have passed after the new *container(!)* has become available.

## Isn't there more documentation for a chart?

If it's not on our website or the discord, we (sadly) do not.
There might be other sources for documentation however!
If you'd like to create a guide for the website,
please submit a PR as demonstrated in the [Contribution Example](https://truecharts.org/manual/development/contributing-example).

## I would like another application to be added, how do I get it?

First, please verify that an issue on [GitHub](https://github.com/truecharts/charts)
for this same application hasn't already been created.
If there's no request for the application, please create a
[new issue](https://github.com/truecharts/charts/issues/new?assignees=&labels=New-App&template=app_request.yaml&title=%5BAdd%5D%3A+).
Keep in mind, that a request for an app is not guaranteed to be added. The requests are only
tracked so developers know what people would like to see added. It does not guarantee that the
request will be completed. Upvote requests that you'd like to see completed with github reactions!
Commenting `+1` just pings everyone following this request without an actual update.

## How do I know if there are Breaking Changes?

TrueCharts uses Semantic Versioning on the aspects of the chart that TrueCharts has changed.
Some upstream **containers** use `latest` tags or poor versioning schemes so updates aren't always
 clear if they contain breaking changes. Be sure to check the **changelog** for each chart before updating.

## How do I tell that this update is a Major and potentially breaking change?

You should always check **BOTH** `chart` version **AND** `container` version.
As both could have breaking changes on major updates independently.
Major changes are marked by a change in the first digit of the version. eg. 13.2.1 → 14.0.0.

## What to do before trying a breaking change update?

Take backups beforehand with [HeavyScript](https://github.com/Heavybullets8/heavy_script).

## Does HeavyScript auto-update major changes?

It depends on the flags you used. We recommend **NOT** using the `-U` flag, as this will update to major version changes.

## Do you offer support for breaking changes?

### Breaking change in chart

We try to help on a best effort basis, but support will be limited as they are
expected to be more-or-less breaking and we cannot control all scenarios.

### Breaking change in container

We can try to look on your setup/logs and see if there is anything obvious,
but apart from that we can't offer support for a product that we did not develop.
You most likely will have to reach to the upstream support channels for that.

## Why is my OpenVPN password not working?

Don't use `$` in your passwords, it won't work due to an upstream
[bug](https://github.com/dperson/openvpn-client/issues/376) in the OpenVPN container.

## Why is a beta-only container in the stable train?

The `stable` train refers to the stability of our chart, not the container itself. However, if the container exhibits significant bugs or regularly introduces breaking changes, our chart may be reverted back to `incubator` until these issues are resolved.

## Why I can't use host path on both my apps and sharing services?

TrueNAS Scale includes a safety check that makes sure apps and sharing services (SMB, NFS, etc) do not use the same data.
This is done to avoid permissions issues, as there are a lot of apps that change permissions without giving the user a warning,
or just plain do not work with ACL's.

This option is `opt out` and can be found in `Apps` -> `Settings` -> `Advanced Settings` -> `Enable Host Path Safety Checks`

## What are my options regarding Host Path Safety Checks and support?

- Option 1.

  Validation *disabled*, with the caveat we will **not** provide support on things that involve storage.
  If you have an issue with the app, the configuration screenshots must **not** have hostPath defined.
  Get it up and running, and then you add host paths and figure out your permissions yourself.

- Option 2.

  Validation *enabled*, ANY sharing service *disabled* for hostPaths that are used by Apps.
  Full support included.

- Option 3.

  Validation *enabled*, ANY sharing service *enabled*.
  You can mount paths on the host using the [NFS option on all TrueCharts apps](https://truecharts.org/manual/SCALE/guides/nfs-share).
  With the caveat that if any app stores SQLite db file in the NFS, It's a matter of time to have it corrupted
  and the NFS overhead.

## My app stays stopped even after clicking the start button multiple times.

The following apps do not have active services running under an `ix` namespace, and as a result, they will always appear as "Stopped" in the SCALE UI:

- `external-service`
- `metallb-config`
- `clusterissuer`
- `postgresql`

## How do I stop a TrueCharts App? (**TrueNAS SCALE Only**)

:::note

For reasons why this is necessary please see [Known Issues](https://truecharts.org/news/updates-recontinued#known-issues)

:::

:::caution

Do **NOT** hit the Stop Button ***UNLESS*** you are certain the App does not use [CloudNativePG (CNPG)](https://cloudnative-pg.io/).

:::

### How Do I know if an App uses CNPG?

Here's a list of Apps in the Stable and Enterprise trains that use CNPG (up to date as of 3rd May 2023):
  
`airsonic-advanced`
`authelia`
`authentik`
`babybuddy`
`baserow`
`blog`
`commento-plusplus`
`discordgsm`
`dsmr-reader`
`etherpad`
`ferdi-server`
`fireflyiii`
`firefox-syncserver`
`focalboard`
`gitea`
`gotify`
`grist`
`guacamole-client`
`hedgedoc`
`home-assistant`
`immich`
`inventree`
`invidious`
`joplin-server`
`kanboard`
`kutt`
`librephotos`
`lychee`
`mattermost`
`mealie`
`miniflux`
`n8n`
`nextcloud`
`nocodb`
`odoo`
`onlyoffice-document-server`
`openkm`
`outline`
`paperless-ngx`
`penpot`
`pgadmin`
`photoview`
`postgresql`
`quassel-core`
`recipes`
`redmine`
`shiori`
`shlink`
`spotweb`
`statping-ng`
`strapi`
`synapse`
`teedy`
`traccar`
`tt-rss`
`vaultwarden`
`vikunja`
`weblate`
`wger`
`wikijs`
`xwiki`

:::tip

You can also click the App and check the Container Images for references to either `tccr.io/truecharts/postgresql` or `ghcr.io/cloudnative-pg`.

:::

If the App does not use CNPG, you have several options to stop an App:

- 1. Press the Stop button in the Scale GUI.

- 2. Enter the following command in the Shell (replace `<app-name>` with the name of the App):
```k3s kubectl scale deploy <app-name> -n ix-<app-name> --replicas=0```

- 3. Use [HeavyScript](https://github.com/Heavybullets8/heavy_script).

### What If I've already pressed the Stop button on an App that uses CNPG?

:::danger

DO NOT REBOOT

:::

To recover from the App being in an unstable state enter this command in the Shell to restart the middleware service:
```sudo service middlewared restart``` OR ```sudo systemctl restart middlewared```

### So, how do I stop an App that uses CNPG?

**NEVER** use the Stop button!

Use option ii above or use the Heavyscript `args` branch

to stop:

heavyscript app --stop APPNAME

to start:

heavyscript app --start APPNAME

:::note

The application state in the web GUI will be `Started` since there is still a CNPG deployment running.

:::

:::danger

**NEVER EVER** try to stop any CNPG related pods.

:::

## Operators

TrueCharts has always required operators for many charts to work. Previously these operators were installed automatically and were not visible to the end user. TrueCharts now requires that these operators to be installed by the end user and the previous automatically installed operators to be removed. These operators are located on the [Operators TrueCharts train](https://truecharts.org/manual/SCALE/guides/getting-started#adding-truecharts).

### Prometheus-Operator

This operator is required for the use of Prometheus metrics and for any charts that utilize CloudNative Postgresql (CNPG).

To remove the previous automatically installed operator run this in the system shell as **root**: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete3`

### Cloudnative-PG

This operator is required for the use of any charts that utilize CloudNative Postgresql (CNPG).

:::warning DATA LOSS

The following command is destructive and will delete any existing CNPG databases. Follow [this guide](https://truecharts.org/manual/SCALE/guides/cnpg-migration-guide/) to safely migrate any existing CNPG databases.

:::

To remove the previous automatically installed operator run this in the system shell as **root**: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete2`

### Cert-Manager

This operator is required for the use of Cert-Manager (Clusterissuer) to issue certificates for chart ingress.

To remove the previous automatically installed operator run this in the system shell as **root**: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete4`

### MetalLB

This operator is required for the use of MetalLB to have each chart utilize a unique IP address.

:::warning LOSS OF CONNECTIVITY

Installing the MetalLB operator will prevent the use of the TrueNAS Scale integrated load balancer. Only install this operator if you intend to use MetalLB.

:::

To remove the previous automatically installed operator run this in the system shell as **root**: `k3s kubectl delete  --grace-period 30 --v=4 -k https://github.com/truecharts/manifests/delete`

### Traefik

This operator is required for the use of ingress to access apps using a fully qualified domain name (FQDN). This is also the chart for the Traefik dashboard and is located on the [Enterprise TrueCharts train](https://truecharts.org/manual/SCALE/guides/getting-started#adding-truecharts).

