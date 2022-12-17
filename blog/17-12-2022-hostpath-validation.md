---
slug: "TrueNAS SCALE 22.12: hostPath Validation"
title: "TrueNAS SCALE 22.12: hostPath Validation"
authors: [ornias]
---
We are excited to announce the release of TrueNAS SCALE version 22.12 "BlueFin," which includes a new feature called "hostPath validation." This feature is designed to ensure the stability and security of TrueNAS SCALE systems by preventing the use of any datasets for apps where that dataset is also used for shares.

While this feature is an important security measure, it can also be a source of frustration for some users who may be using datasets for both apps and shares. If you are encountering issues with "hostPath validation", such as Apps being "stuck on deploying" after update, there are three potential solutions you can consider:


1. 
Disable "hostPath validation." If you disable "hostPath validation," TrueCharts will not provide support on things that involve storage. If you disable "hostPath validation" and have an issue with the app, your configuration screenshots must not have any hostPath storage defined.


2. 
Keeping "hostPath validation" enabled and disable shares on any datasets that are also used with apps. TrueCharts will continue to provide support for things that involve storage.


3. 
Keeping "hostPath validation" enabled and keep shares enabled on any datasets that are also used with apps. Instead of hostPath, you can mount the dataset using the NFS option on available all TrueCharts apps. However, be aware that if any app stores a database on the NFS, it is likely to become corrupted over time.


We hope these suggestions are helpful in resolving any issues you may be experiencing with "hostPath validation" on TrueNAS SCALE version 22.12 "BlueFin".
