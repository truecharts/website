---
sidebar_position: 2
---
# Adding TrueCharts to SCALE

TrueNAS SCALE has a catalog system which you can use to add [3rd party catalogs](https://www.truenas.com/docs/scale/scaleuireference/apps/appsscreensscale/#add-catalog), such as the TrueCharts community catalog, in just a few minutes. 

## Requirements

- SCALE apps share computing resources with your system. Please review our [recommended system requirements](https://truecharts.org/manual/systemrequirements).
- Your apps dataset needs to be large enough to store the containers, configuration files, snapshots, and other persistent volume (PVC) data. You can always configure [additional storage](https://truecharts.org/manual/guides/add-storage) using HDD pools (e.g. downloads folder) for specific apps later.
- Make sure your SCALE installation has a working storage pool that you'd like to use for TrueCharts. [Read more](https://www.truenas.com/docs/scale/scaletutorials/storage/) in the SCALE tutorial. 
- Make sure you have a working Internet connection and can reach `https://github.com`, `https://truecharts.org`, and `https://tccr.io` from the host system.
- Ensure your system time is up to date and you've chosen your preferred timezone in your [SCALE settings](https://www.truenas.com/docs/scale/scaleuireference/systemsettings/generalsettingsscreens/#localization). Apps you install will default to this timezone.

## Configuring Your App Pool

Your Apps pool must be configured before adding TrueCharts. When opening the Apps menu item on SCALE for the first time, you'll be prompted to [choose a storage pool](https://www.truenas.com/docs/scale/scaleuireference/apps/appsscreensscale/) for your Apps. 

After creating your Apps pool, you'll be able to add the TrueCharts Community Catalog.
 
## Adding TrueCharts

To add TrueCharts to your SCALE installation: 

 1. Go to **Apps** page from the top level SCALE menu
 2. Select **Manage Catalogs** tab on the Apps page
 3. Click **Add Catalog**
 4. After reading the iXsystems notice, click **Continue** and enter the required information:   
 Name: `truecharts`   
 Repository: `https://github.com/truecharts/catalog`   
 Preferred Train: `stable`   
 Branch: `main`
 5.  Click **Save** and allow SCALE to refresh its catalog with TrueCharts (this may take a few minutes)

## TrueCharts Trains Overview

TrueCharts has multiple "trains", or branches of apps which you can choose to install. Below is a summary of each train and its intended use.

- `stable` contains apps which have been thoroughly tested and expected to be stable and working. The `stable` version of an app is always the best available version.
- `incubator` contains apps which are still in development and/or are not considered to be stable and working well enough to be moved into the `stable` branch.
- `dependency` contains apps that are mostly used as dependencies. This train is not supported, aside from bug fixes.
- `enterprise` contains apps for core TrueCharts features and, in the future, will be covered by additional support for professional usecases.

[See here](https://truecharts.org/charts/description_list) for a list of all apps available for each TrueCharts trains.

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vomm8uvdCM0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Notes
- After adding the TrueCharts Repository You should start seeing available apps doesn't work right away, try clicking **Refresh Catalogs** on the Apps page.
