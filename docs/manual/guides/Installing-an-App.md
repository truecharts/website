---
sidebar_position: 3
---
# Installing Apps

Once you've added the TrueCharts Catalog to your SCALE installation, you can choose from [100s of apps](https://truecharts.org/charts/description_list) to install through the catalog user interface. 

- TrueCharts apps are packaged [helm charts](https://helm.sh/docs/topics/charts/) which have been configured to run in SCALE and maintained by our community. These apps will appear in your Apps catalog with a yellow **TrueCharts** banner.
- Apps in the ```stable``` train have been thoroughly tested and used by the community, while apps in ```incubator``` are still under development and may not be fully working (and have limited support).
- If you have questions about configuring or using a particular app in the ```stable``` train, you can get help in the ```#tc-scale-apps``` channel on [Discord](https://discord.gg/q3qsCDV2WC).

## Requirements

- Your SCALE Apps has the [TrueCharts catalog](https://truecharts.org/manual/guides/Adding-TrueCharts/) added and meets the minimum system requirements.
- You have a working Internet connection and can reach GitHub and truecharts.org from the host system.
- If you plan to add additional app storage to your app, review important information about [adding apps and host path validation](https://truecharts.org/manual/guides/add-storage-host-path-validation).

## Adding the App

To add a new TrueCharts app to your SCALE installation:
1. Click **Apps** from the SCALE menu
2. Go to **Available Applications** at the top of the Apps page
3. Find the app you wish to install using the search bar (or by scrolling through the catalog) and click **Install**
4. [Configure your app](https://truecharts.org/manual/options/) for each section depending on your desired settings out the necessary information to configure your app for each section and click **Next**:  
	```Application Name:``` Configure a custom name for your app and select a version to install.  
	```General Settings:``` Choose the number of replicas, preferred timezone, and add custom environmental variables.  
	```Networking & Services:``` Choose how you'd like to expose your app from the k3s network to your local network and the Internet.  
	```Storage and Persistence:``` Configure core app storage and [add additional app storage](https://truecharts.org/manual/guides/add-storage-host-path-validation).  
	```Ingress:``` For TrueCharts apps you can configure [Ingress with Traefik](https://truecharts.org/manual/guides/add-ingress) to easily proxy Internet traffic to your app.  
	```Security & Permissions:``` Configure PUID, fsGroup, and other security and file permissions for your app.
	```Other Options:``` You can also configure GPU support, addons (such as adding a CodeServer for easy file editing), and advanced app settings.
5. Once you've finished configuring your app, click **Install** to start the deployment process.

Give your app a few minutes to deploy. You can check its status in the SCALE task manager at the top right of your GUI.

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/9UDUMFiaXBM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Notes
- You can view specific configuration information about your app in its [app-specific page](https://truecharts.org/charts/description_list), or by searching for threads about it on the TrueCharts Discord.
- If you see both a ```incubator``` and ```stable``` version of an app in the TrueCharts catalog, you should always use the ```stable``` version as it is the best maintained version.  
- Some apps are available in both the TrueCharts catalog and iXsystems default catalog. If you wish to use specific TrueCharts features (such as Ingress support) or get help with your configuration, you should use the TrueCharts ```stable``` version of the app. 
- Once an app is thoroughly tested and known to be stable, it can be moved from the ```incubator``` train to the ```stable``` train. You can let the TrueCharts team know if a particular app appears to be working well enough to be moved to the ```stable``` train.
- When adding GPU support to an app, you can only configure a given GPU device (iGPU or dGPU) to a single app at a time.
