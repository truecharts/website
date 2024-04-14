---
title: Introduction to TrueNAS SCALE
sidebar:
  order: 2
---

## IMPORTANT: Must Read!

All guides under this section are made for TrueNAS SCALE.
We do **NOT** control anything made by iX-Systems, no matter how great or shitty it is. More specifically, we have no control **AT ALL** over the following:

- Adding/Creating certificates
- Backup functions
- Restore functions
- Rollback functions
- Opening the Shell
- All GUI elements except: Install-menu, Edit-menu and Portal-Button

Even if we made some tools and guides to make the above easier to use, we cannot provide **any** support for these features.

More specifically:
Anything related to TrueTool has been deprecated and is now replaced with [HeavyScript](https://github.com/Heavybullets8/heavy_script), any guides still referring to TrueTool will be updated or replaced.

## Installing Apps

Once you've [added the TrueCharts Catalog](/platforms/scale/guides/getting-started/#minimal-getting-started-setup-with-scale) to your SCALE installation, you can choose from [hundreds of apps](/charts/description-list) to install through the catalog user interface.

- Your Apps pool must be configured before adding TrueCharts. When opening the Apps menu item on SCALE for the first time, you'll be prompted to choose a storage pool for your Apps. See our [system requirements](/platforms/scale/systemrequirements/) page to ensure you're good to go.
- After creating your Apps pool, you'll be able to add the 3rd party TrueCharts catalog.

### Requirements

- Your SCALE Apps has the [TrueCharts catalog](/platforms/scale/guides/getting-started#adding-truecharts) added and meets the minimum system requirements mentioned above
- You have a working Internet connection and can reach GitHub and truecharts.org from the host system
- If you plan to add additional app storage to your app, review important information about [app storage and host path validation](/platforms/scale/guides/add-storage).

### Adding the App

To add a new TrueCharts app to your SCALE installation:

1. Click **Apps** from the SCALE menu

![Apps](./img/Apps.png)

2. Go to **Discover Apps** at the top-right of the Apps page

![Discover Apps](./img/Apps2.png)

3. Find the app you wish to install using the search bar (or by scrolling through the catalog), e.g. Homarr, and click the **Install** button.

![Adding App](./img/Apps6.png)

4. [Configure your app](/platforms/scale/options/) for each section depending on your desired settings out the necessary information to configure your app for each section and click **Next**.
   **[Application Name:](/platforms/scale/options/application-name/)** Configure a custom name for your app and select a version to install.
   **General Settings:** Choose the number of replicas, preferred timezone, and add custom environmental variables.
   **[Networking & Services:](/platforms/scale/options/networking/)** Choose how you'd like to expose your app from the k3s network to your local network and the Internet.
   **[Storage and Persistence:](/platforms/scale/options/storage/)** Configure core app storage and [add additional app storage](/platforms/scale/guides/add-storage).
   **[Ingress:](/platforms/scale/options/ingress/)** For TrueCharts apps you can configure [Ingress with Traefik](/charts/premium/traefik/how-to) to easily proxy Internet traffic to your app.
   **Security & Permissions:** Configure PUID, fsGroup, and other security and file permissions for your app.
   **Other Options:** You can also configure GPU support, addons (such as adding a CodeServer for easy file editing), and advanced app settings.
5. Once you've finished configuring your app, click **Install** to start the deployment process.

![Installing App](./img/Apps7.png)

Give your app a few minutes to deploy. You can check its status in the SCALE task manager at the top right of your GUI.

### Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/9UDUMFiaXBM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Notes

- You can view specific configuration information about your app in its app-specific page by searching for it in the [charts list](/charts/description-list), searching our guides, or by searching for threads about it on the TrueCharts Discord.
- If you see both an `incubator` and `stable` version of an app in the TrueCharts catalog, you should always use the `stable` version as it is the best maintained version.
- Some apps are available in both the TrueCharts catalog and iXsystems default catalog. We recommend and only support the TrueCharts version of an app for access to features and capability alignment.
- Once an app is thoroughly tested and known to be stable, it can be moved from the `incubator` train to the `stable` train. You can let the TrueCharts team know if a particular app appears to be working well enough to be moved to the `stable` train.

## Editing Apps

Editing Apps is possible since 21.08, although it has a slightly different GUI it exposes the same setting as installing an App.

### Requirements

- Make sure your storage-pool is created and working
- Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to [Configuring your Apps Pool](/platforms/scale/guides/getting-started)
- Make sure you have a working internet connection and can reach github and truecharts.org from the host system.
- Make sure you already added the TrueCharts catalog from [Adding TrueCharts to SCALE](/platforms/scale/guides/getting-started#adding-truecharts)
- Make sure your App is installed and, preferably, working

### Editing the App

- Go to the `Apps` page of the SCALE GUI
- Select your desired app to edit from the list of installed apps
- Select the `Edit` button
- Change any settings you want to change
- Submit your changes.

The App will then go through a process of submitting your changes. If the process fails, your changes will not be submitted and the edit will be reverted.
Once the process popup disappears, it might take a few minutes to actually deploy your new changes, due to some things that happen in the background.

### Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/UyqM798Arbo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Notes

- It's NOT advisable to switch between Nodeport and Loadbalancer, using the same ports. This WILL cause problems. If you edit an app and switch between NodePort and Loadbalancer, please be sure to use different ports.

## Upgrading

### Upgrading the app using the SCALE GUI

- Go to the `Apps` page of the SCALE GUI
- Make sure your App reports that an Upgrade is available on the App Card
- Make note of the current version, you might want to revert to this version in the future
- Select `Upgrade` or `Update`
- Confirm you want to upgrade, checking the changelog for any potential issues such as breaking changes.

The App will then go through a process of backing up(!) and upgrading. If the process fails, your changes will not be submitted and the edit will be reverted.
After the process popup disappears, it might take a few minutes to actually deploy your newly upgraded app, due to some things that happen in the background.

### Upgrading the app using HeavyScript

Alternatively, you can also use [HeavyScript](/platforms/scale/guides/getting-started/#heavyscript) to update your apps and even configure it to do so automatically via a CRON job. Examples and instructions are found on the previously linked page and the HeavyScript Github, also linked on that page.

## Rollback an app

### Reverting using the GUI

1. Select the app you wish to rollback from the list of installed apps
2. Select "Roll Back"
3. Under "Version" - Click the dropdown and select which version you would like to rollback to
4. Check the "Roll Back Snapshot" box
5. Select "Roll Back"

Wait a few moments for the process to happen in the background and you should soon be greeted by the prior version of the app deployed and running.

### Reverting using the CLI

1. Enter cli to enter the SCALE command line interface
2. Enter app chart_release rollback
   It should give you this screen:
   ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. Enter the release name and item_version like this:
   ![cli-rollback2](/img/rollback/cli-rollback2.png)
   (be sure to remove the # before the release name)
4. Click save then click quit
   It should show something like this, confirming the rollback:
   ![cli-rollback3](/img/rollback/cli-rollback3.png)

### Finding the last installed version

SCALE does not list which versions are available to roll-back to, but does required a version to be entered.
There is a short walk-through to get the versioning history for the app in question:

1. Run `export KUBECONFIG=/etc/rancher/k3s/k3s.yaml`
2. Run `helm history jackett -n ix-jackett` where "jackett" should be replaced with the name of the App that broke your UI.
   You'll see this:
   ![history](/img/rollback/history.png)
   Take note of the "Chart" column, it lists the version numbers you can enter in the rollback interface, prefixed by the App Name.
   Of coarse only enter the version number in the GUI or CLI, not the name

## Delete

### Delete using the GUI

1. Select the app you wish to delete from the list of installed apps
2. Select "Delete"
3. Check the "Confirm" box
4. Select "Continue"

Wait a few moments for the process to happen in the background.

### Delete using the CLI

1. Enter the SCALE terminal via the GUI or SSH
2. Type the following command
   - `cli -c 'app chart_release delete release_name=NAME_OF_APPLICATION'`
   - ex: `cli -c 'app chart_release delete release_name=traefik'`

### Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/ONbMhQJPQwc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
