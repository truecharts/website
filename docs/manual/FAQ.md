---
sidebar_position: 2
---
# F.A.Q. (Frequently Asked Questions)

TrueCharts Frequently Asked Questions

## Why PVC is recommended over HostPath?

We recommend using PVC for `config` storage, as it provides an easy way to roll back your application in case of a failed update. Furthermore, we currently only offer active support for this storage option. You can still use host path for your `media` files.

> ⚠️ **WARNING**
> 
> Using host path is **not** compatible with shares!

> ℹ️ **INFO**
> 
> To share data, create an `NFS` share and select `NFS Share` for the `Type of Storage` in the `Additional App Storage` settings.  
> You can create an `SMB` share on the same mount point if needed.

## How can I access data inside PVC?

You can use [HeavyScript](https://github.com/Heavybullets8/heavy_script) to mount the PVC and un-mount once you finish.
Use your preferred editor/explorer to do any changes you want.
You need to make sure permissions stay the same, or the app might not be able to access the files.

## Do we support ACLs for HostPath storage?

While it is technically feasible to use Access Control Lists (ACLs) for host path storage in ***most*** Charts/Apps, we strongly advise against it. We are unable to provide individual guidance to every user for setting up their ACLs for each chart. Apart from a few exceptions, user 568 (apps) must have access to their host path storage.

## Are there Ingress requirement for certain apps?

Certain applications require ingress to work correctly due to security reasons.
Few example are:

- Vaultwarden
- Nextcloud
- Monica
- Recipes

## Can I use another Load Balancer in front of traefik?

Technically, yes you can. But keep in mind this is out of our support scope.

## Do we support other proxies and LoadBalancers in front of Traefik?

Not supported for standard support channels. This includes cloudflare proxy.

## What is the meaning of Advanced/Expert Checkboxes (Networking, Storage, etc)?

This options are only there for experienced people and out of basic support realm.
Checking those boxes and/or enabling things such as host-networking may break your app
and require a reinstall for it to work properly.

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
please submit a PR on [this](https://github.com/truecharts/website/tree/main/docs/charts) repo!

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

TrueCharts uses Semantic Versioning on the aspects of the chart that TrueCharts has changed.
Some upstream **containers** use `latest` tags or poor versioning schemes so updates aren't always
 clear if they contain breaking changes. Be sure to check the **changelog** for each chart before updating.

## How do I tell that this update is a Major and potentially breaking change?

You should always check **BOTH** `chart` version **AND** `container` version.
As both could have breaking changes on major updates independently.
Major changes are marked by a change in the first digit of the version. eg. 13.2.1 → 14.0.0.

## What to do before trying a breaking change update?

Take backups beforehand with [HeavyScript](https://github.com/Heavybullets8/heavy_script).

## Does HeavyScript auto-updates major changes?

Depending on the flags you used. We recommend to **NOT** use the `-U` flag.
If you use it, it will update to major version changes.

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

## Why does an beta-only container is in stable train?

Stable train means that our **chart** is stable, not the container.
But if container is very buggy and/or constantly pushing breaking changes,
our chart will move back to incubator until this is changed.

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
