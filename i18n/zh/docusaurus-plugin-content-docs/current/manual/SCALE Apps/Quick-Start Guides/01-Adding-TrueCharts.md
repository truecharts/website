# 01 - Adding TrueCharts to SCALE

Adding the TrueCharts Community App Catalog is relatively straight forward.

## B. 所需经费

- Make sure your storage-pool is created and working
- Make sure you have a working internet connection and can reach github and truecharts.org from the host system.

## Adding TrueCharts

When opening the Apps menu item on TrueNAS SCALE for the first time, you get prompted to setup a new pool for Apps. This will create a new dataset on the selected pool called "ix-applications", which will contain all docker containers and most application data, unless specified otherwise.

- Go to "Apps" in the left hand menu
- Select the "Manage Catalogs" tab
- Click "Add Catalog" and enter the required information:

- Name: `truecharts`
- Repository: `https://github.com/truecharts/catalog`
- Preferred Trains: `stable`
- Branch: `main`

We also heavily advise people starting with TrueCharts and the rest of this guide to ensure that `core` and `stable` are added to preferred trains. Without those two trains you will be unable to follow all the steps we've outlined in the "Quick Start Guides". You may enable other trains as well, see below for a description of the contents of each train.

## Difference between Stable and Incubator

TrueCharts has multiple "trains": All trains contain Apps that should work fine. However they have a slightly different meaning:

- `stable` contains most of our Apps. These are considered stable and working.
- `dependency` contains apps that are mostly used as dependencies. This train is not supported, besides from bug fixes.
- `incubator` These Apps are still in development and/or are not considered to be of high-enough quality.

## Video Guide

![type:video](https://www.youtube.com/embed/Vomm8uvdCM0)

## Notes

- If this doesn't work right away, try clicking "Refresh Catalogs".
