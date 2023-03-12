---
sidebar_position: 4
---
# Editing Apps

Editing Apps is possible since 21.08, although it has a slightly different GUI it exposes the same setting as installing an App.

## Requirements

- Make sure your storage-pool is created and working
- Make sure you selected your storage-pool when you first opened the "Apps" interface, if not please refer to [Adding TrueCharts to SCALE](/manual/guides/Adding-TrueCharts/)
- Make sure you have a working internet connection and can reach github and truecharts.org from the host system.
- Make sure you already added the TrueCharts catalog from [Adding TrueCharts to SCALE](/manual/guides/Adding-TrueCharts/)
- Make sure your App is installed and, preferably, working

## Editing the App

- Go to `Installed Applications`
- click the menu button on the right side of the App card
- Select `Edit`
- Change any settings you want to change
- Submit your changes

The App will then go through a process of submitting your changes. If the process fails, your changes will not be submitted and the edit will be reverted.
The process popup disappears, it might take a few minutes to actually deploy your new changes, due to some things that happen in the background.

## Video Guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/UyqM798Arbo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Notes

- It's NOT advisable to switch between Nodeport and Loadbalancer, using the same ports. This WILL cause problems. If you edit an app and switch between NodePort and Loadbalancer, please be sure to use different ports.
