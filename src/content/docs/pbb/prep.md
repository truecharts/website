---
sidebar:
  order: 2
title: 0. Prepare yourself! 
---

So, you want to start your own GOAT cluster?
Lets go!

There are three core components to a GOAT Cluster:
- The Kubernets Operating System
- The Gitops Toolkit
- The Git Repository

We've build the "ClusterTool" CLI tool, to make it as easy as possible to set this all up, but before we can actually start working on that, we will need some preparation work.
So in this part we're going to set-you-up with clustertool, prepare your cluster configuration and make sure your (virtual) cluster machines are ready to rock.

## Linux Machine required

To start the process we will need you to use a Linux machine or a windows WSL virtual machine

*insert steps of setting up WSL debian*

### Install Git

Ensure GIT is installed by running:

`sudo apt-get update`
`sudo apt-get install git`

## Forking and Cloning the Repository

### Forking

To start we will need you to fork the ClusterTool repository

- Click the little fork button 

*insert picture*

- DONE!

### Cloning

Now we need to have you your forked version available on your own system
Be sure you're on your own fork, check top bar to see your github username and fork-name.
Then click the big green button to get a link to clone the repository.

- On your Linux machine `cd` to the directory where you want your cluster data to be in.
- enter `git clone YOURLINK` where "YOURLINK" is replaced by the data copied from your fork.

## Configuration

By default ClusterTool is configured to run a single node cluster, with everything running on one node.
It's either 1 node, or 3-or-more nodes for a multinode cluster. Two node clusters should **not** be made.

We would advice to start with a single node when first starting out. Mostly because our default setup does not contain a storage backend storage for multi-node clusters.

### Single Node

Check the settings in talconfig.yaml and adapt the following settings:
*LIST OF SETTINGS*

Check the settings in talenv, this special file contains settings for everything that is actually going to run on the cluster and the cluster itself:
- metallbIPs
- Networking settings
- Traefik domains
- cloudflare settings

### Multi-Node

For multiple nodes, you can uncomment some of the other nodes specified in talconfig.yaml
You even differentiate between controle-pane-nodes (running kubernetes itself) and worker-nodes (running your applications)

There are two example config for this available
multinode AIO: *insert link*
multinode split: *insert link*

When it comes to the talenv, there is likely not anything special you need to change, thats not already specified in the singlepage setup.
Thats also why it's relatively easy to go from single-node to multi-node.

### Generate Configuration

When done, you can "generate" the configuration specified by you and the important cluster encryption keys, using ClusterTool

*instructions to use GenConfig in ClusterTool here*

## Cluster Machine(s)

Now the "fun" part, getting your actual cluster/server running.

### DHCP leases

First off, it's important to give static DHCP leaases to each-and-every of your cluster machines. No mater if it's just one or many.
How to do this depends on your Router. We'll not be able to provide help with that for you, if you cannot figure our how to set "statis DHCP leases", this might be a good time to reconsider running and maintaining your own cluster.

We can, however, give an example for both unifi, pfsense and opnsense

**unifi**

*insert picture*

**pfsense**

*insert picture*

**opnsense**

*insert picture*


### Burn the TalosOS ISO to USB or mount ISO

The most recent TalosOS ISO to burn can be aquired here:

https://github.com/truecharts/clustertool

*insert pictures*


For a Bare-Metal node you'll need a tool like BalenaEtcher to burn the ISO onto an USB drive.

*insert pictures*

For a VM you can directly mount the ISO.
You can find explicit steps to create a TalosOS VM on TrueNAS SCALE here: *Insert link to a guide specifically dedicated to this*

### Boot from USB

Now it's as simple as booting from USB, how to set that up, depends on your motherboard.
Most often you can get away with hitting F12 and selecting the USB drive or it would boot from USB automatically


## The Result

By now you'll have created your Github repository that is going to contain your cluster, crafted a cluster-configuration and Prepared one or more virtual machines that are going to be part of your cluster
In next parts we'll continue to actually create the cluster and "bootstrap" fluxcd so your github repository gets loaded.