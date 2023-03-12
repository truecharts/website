---
sidebar_position: 7
---
# Linking Apps Internally

We often need to connect individual apps together, for example: Sonarr and SABnzbd. This means we first need to know how to reach those Apps.

## Linking Apps Internally

The backend for TrueNAS SCALE Apps is Kubernetes. Linking apps together in Kubernetes is done slightly differently than in other systems, as you can't point directly to other containers using their IP address.

Instead we need to use their internal(!) domain name. Please beware: this name is only available between Apps and can not be reached from the host/node or your own PC.

The format for internal domain name for the main service is explained bellow.
Please replace `$NAME` with the name you gave your App when installing and `$APP` with the name the app has on the catalog where is needed.

**If your app name _contains_ the name of the app as in the catalog, the format is as follows.**

- `$NAME.ix-$NAME.svc.cluster.local`

**If your app name _does NOT contain_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

If you need to reach a different service (which is not often the case!), you need a slightly different format, where `$SVCNAME` is the name of the service you want to reach:

**If your app name _contains_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$SVCNAME.ix-$NAME.svc.cluster.local`

**If your app name _does NOT contain_ the name of the app as in the catalog, the format is as follows.**

- `$NAME-$APPNAME-$SVCNAME.ix-$NAME.svc.cluster.local`

## List Internal Domain Names using HeavyScript

HeavyScript, a command-line utility, can list the internal DNS names of your apps using the command `./heavy_script.sh --dns`

Follow the installation instructions on the github repo: https://github.com/Heavybullets8/heavy_script

### Example

To reach an app named "sabnzbd" (name contains the catalog app name) within Sonarr, we can use the following internal domain name:

- `sabnzbd.ix-sabnzbd.svc.cluster.local`

To reach an app named "sab" (name does NOT contain catalog app name) within Sonarr, we can use the following internal domain name:

- `sab-sabnzbd.ix-sab.svc.cluster.local`

### Video Guide

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
