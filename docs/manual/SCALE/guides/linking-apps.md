---
sidebar_position: 7
---
# Linking Apps Internally

You'll often need to connect individual apps to each other to exchange data, for example: Sonarr to SABnzbd to allow Sonarr to control downloads within SABnzbd. 

The backend for TrueNAS SCALE Apps is Kubernetes.  As you can't point directly to other Kubernetes app containers using their IP address you need to use their internal domain name instead. 

Please beware: this name is only available between Apps and cannot be reached from the host/node or your own PC.

## Main service
For most apps, you'll want to contact the main service (usually the web interface or primary way you interact with the app)

Please replace `$NAME` with the name you gave your App when installing it, and `$APP` with the name the app has on the catalog as needed.

**If your app name _contains_ the name of the app as in the catalog, the format is as follows.**

- `$NAME.ix-$NAME.svc.cluster.local`

**If your app name _does NOT contain_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

### Multiple Services
If you need to reach a different service of your app (which is not often the case), you need a slightly different format.  

As well as the above naming, replace `$SVCNAME` with the name of the service you want to reach:

**If your app name _contains_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**If your app name _does NOT contain_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APPNAME-$SVCNAME.ix-$NAME.svc.cluster.local`

Be aware: you'll only be able to reach ports published on the service they are published to - see the Mulitple Services example below for a demonstration of this.

## List Internal Domain Names using HeavyScript

HeavyScript is a very useful command-line utility built to help simplify administration of TrueNAS Scale apps.  One of it's many features is being able to list the internal DNS names and ports of your apps. If you are unsure of how names are "built" - then this is by far the easist way to be sure you are using the correct name.

Firstly, install HeavyScript or update your current installation to at least version 2.0.0.  Visit their GitHub repo to find out how: https://github.com/Heavybullets8/heavy_script

To list the DNS entries for your apps, open the TrueNAS Scale shell and use the command `heavyscript dns -a`

## Naming Examples
### Main Service

To reach an app named "sabnzbd" (note: the name contains the catalog app name "sabnzbd") you can use the following internal domain name:

- `sabnzbd.ix-sabnzbd.svc.cluster.local`

To reach an app named "sab" (note: the name does NOT contain catalog app name "sabnzbd") you can use the following internal domain name:

- `sab-sabnzbd.ix-sab.svc.cluster.local`

To reach an app named "sabnzbd-23" (note: the name contains the catalogue app name "sabnzbd" as well as extra name information "-23") you can use the following internal domain name:

- `sabnzbd-23.ix-sabnzbd-23.svc.cluster.local`

### Multiple Services
This is an example of where an app has more than one service, in this case it's Traefik

It's main service (note it follows the examples above)

- `traefik.ix-traefik.svc.cluster.local`

Then, it's extra services - one for metrics, and one for tcp

- `traefik-metrics.ix-traefik.svc.cluster.local`
- `traefik-tcp.ix-traefik.svc.cluster.local`

When you install an app with multiple services, you'll be able to see which ports are published to which service - if you aren't sure of this from the installation/edit view then HeavyScript will also show these.  

This is a HeavyScript output for Traefik, showing it's services and the published ports
- `traefik.ix-traefik.svc.cluster.local                        9000/TCP`
- `traefik-metrics.ix-traefik.svc.cluster.local                9180/TCP`
- `traefik-tcp.ix-traefik.svc.cluster.local                    80/TCP,443/TCP`

So, if you wanted to reach the metrics port, you should use `traefik-metrics.ix-traefik.svc.cluster.local` as the name as that port would not be available on other services.

## Video Guide

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/mWJL-XDgH98"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## Internal Domain Name generator

<!-- Start - Link Generator Leave empty line after-->

import { useState, useEffect } from "react";
export const LinkGenerator = ({ children, color }) => {
  const [name, setName] = useState("");
  const [app, setApp] = useState("");
  const [service, setService] = useState("");
  const [dns, setDNS] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAppChange = (event) => {
    setApp(event.target.value);
  };
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  useEffect(() => {
    let svcname = "";
    if (name.includes(app)) {
      svcname = name;
    } else {
      svcname = name + "-" + app;
    }
    if (service) {
      svcname = svcname + "-" + service;
    }
    if (name && app) {
      let svcdns = svcname + ".ix-" + name + ".svc.cluster.local";
      setDNS(svcdns);
    } else {
      setDNS("");
    }
  }, [name, app, service]);
  function copyToClipboard() {
    navigator.clipboard.writeText(dns);
  }
  return (
    <div>
      <div>
        <span>Internal DNS Generator</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>App Name</label>
          <input
            required
            id="name"
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="my-plex-app"
          />
        </div>
        <div>
          <label>Application</label>
          <input
            required
            id="app"
            value={app}
            onChange={handleAppChange}
            type="text"
            placeholder="plex"
          />
        </div>
        <div>
          <label>Service (Optional)</label>
          <input
            id="service"
            value={service}
            onChange={handleServiceChange}
            type="text"
            placeholder=""
          />
        </div>
      </form>
      <span>Internal DNS: {dns} </span>
      {dns ? <button onClick={copyToClipboard}>Copy</button> : ""}
    </div>
  );
};

<LinkGenerator />

<!-- End - Link Generator Leave empty line before-->
