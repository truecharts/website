---
sidebar:
  order: 1
title: TrueNAS Scale Frequently Asked Questions (FAQ)
---

TrueNAS Scale TrueCharts Frequently Asked Questions

## What happened to TrueNAS Scale TrueCharts apps?

Unfortanetly IX Systems decided that with the upcoming Electric Eel TrueNAS Scale update (24.10) to switch the application backend to Docker and remove Kubernates. TrueCharts is and always has been a Helm Charts project. Previous versions of TrueNAS Scale were able to install our Helm Charts due to its Kubernates support. With the removal of Kubernates from TrueNAS Scale our Helm Charts can no longer be installed using the native app system.

## Why dont you just continue making TrueNAS Scale apps?

We never made "TrueNAS Scale Apps", we have always made Helm Charts that previous versions of TrueNAS Scale supported. Our charts eco-system is not possible on a Docker based OS. Additionally as part of this IX Systems transition to Docker they will no longer allow third party app catalogs. Starting with 24.10 the only apps that can be installed on TrueNAS Scale will be those officially maintained by IX Systems.

## Why was there no warning about this change?

IX Systems announced there intention to move to Docker shortly after the release of Dragonfish (24.04) on 29 May 2024. As soon as the annoucmnet was made the TrueCharts team started working on a solution for all of our TrueNAS Scale users.

## Could you not have had a solution ready earlier?

TrueCharts is not affiltaed with IX Systems. We found out about the removal of Kubernates support on 29 May 2024 the same as everyone else.

## So does this mean that TrueCharts is dead?

No TrueCharts is not dead. We have always made Helm Charts and our Charts can be installed on any supported OS not just TrueNAS Scale. We continue to provide these Helm Charts as always and they can already be installed on a compatible OS.

## How do I install TrueCharts now?

You are able to install any supported OS and add the TrueCharts repository.

## I want to keep using TrueNAS Scale as my OS. What can I do?

We are currently developing ClusterTool. Once completed it will help create and configure a Kubernates cluster on Talos for use with TrueCharts. We already have created guides for setting up a Talos VM on TrueNAS Scale. Once ClusterTool is completed it will assist with the migration of your currently installed TrueCharts apps on TrueNAS Scale to a Talos VM. Please watch the News for more information as ClusterTool development continues ahead of the TrueNAS Scale 24.10 update.

## Why Talos?

Talos is a light weight OS specifically designed for running a Kuberantes cluster.

## What about HexOS?

HexOS is an internet based WebUI for TrueNAS Scale. It utilizes API calls to TrueNAS Scale and as such has the same limitations as TrueNAS Scale.

## What about *insert your choice* OS?

Our Helm Charts can be installed on any OS that supports installing Helm Charts. You are not required to use Talos. ClusterTool is a seperate project that is being created to help create a Kuberantes cluster and migrate existing TrueNAS Scale users.

## What happened to the TrueNAS Scale TrueCharts application catalog?

It was decided to remove the TrueNAS Scale TrueCharts application catalog to prevent any new user from starting use of TrueCharts on TrueNAS Scale during this transition period.

## Why am I not seeing updates for apps?

Once IX Systems decided to announce the depreciation of Kuberantes on TrueNAS Scale we needed to divert our developer time from maintaing the TrueNAS Scale application catalog to work on ClusterTool.

## Why couldnt you keep the TrueNAS Scale TrueCharts application catalog running and up to date until ClusterTool is ready or Electric Eel is released?

TrueNAS Scale support for TrueCharts was always developer intensive. We are not able to do both maintain the catalog and work on ClusterTool. We decided to immediately focus on ClusterTool so that is ready for release before TrueNAS Scale 24.10.

## My app has an updated and I want to install it.

Almost all apps will continue to run without updates. 

## I can not wait I need to update me apps.

If you do not want to wait for ClusterTool you have the following options:

1. Install a supported OS and add the TrueCharts repository.
2. Switch your applications to those provided by IX Systems. They have promised there applications will migrate to the new Docker system.