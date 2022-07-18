---
slug: "使用 TrueCharts 在 TrueNAS 上的 Docker-Compose"
title: "使用 TrueCharts 在 TrueNAS 上的 Docker-Compose"
authors:
  - ornias
---

从TrueNAS SCALE 开发的早期阶段，我们已经阅读了许多关于Docker-compose没有得到TrueNAS SCALE 支持的抱怨。 这是可以理解的，因为这是家居用户最常用的停泊器部署选项之一。

TrueNAS SCALE 社区已经找到了一些有趣的方法来启用 Docker-Compose。 但所有这些办法都有一些缺点：

- 它不是未来的证据，它可以在没有警告的情况下永久地被精减，并且有任何TrueNAS SCALE 更新。

- 它本来就会破坏SCALE应用，甚至常常要求这些应用被禁用。

- 对此工作不支持。

为了解决这个问题，我们决定把问题交给我们自己处理。 我们高兴地最后宣布我们的解决办法：

**TrueCharts 的 Docker-Compose TrueNAS SCALE 应用程序**

它的设计是从头开始，让用户在主机系统上运行Docker-Compose几乎具有相同的体验。 甚至包含一些好的调整：

- 它得到TrueNAS SCALE 应用程序的完全支持，因此它将在更新后存活。

- 有一个GUI选项来输入您的 Docker-Compose 文件，这将在重启后存活。

- 完全自成一体，不会修改默认停靠堆栈。

- 完全兼容与其他TrueNAS SCALE 应用程序一起运行，因此您可以轻松地将您的 Docker-Compose 应用程序迁移到TrueNAS SCALE 应用程序中。

- 如果应用程序不能作为广告使用，我们是您的支持。

所有这些都只有一个警告：

- Docker-Compose 命令必须从容器内执行。

我们的解决办法基于停靠码头的官方停靠码头集装箱，并且增加了一些工具来优化单一集装箱部署。 也许最令人感兴趣的是，容器本机可以访问 `/mnt`， `/root` 和 `/cluster`, 所以您可以使用您的容器，比如您正在主机上工作。

这样，我们希望TrueNAS SCALE 最终能够开始填充诸如Unraid and TrueNAS Core 之类的大片解决方案，并向社区提供他们想要的东西， 不仅仅是他们需要的东西！
