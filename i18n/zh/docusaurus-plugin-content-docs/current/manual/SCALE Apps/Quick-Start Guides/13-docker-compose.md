# 13 - Docker-Compose on SCALE

虽然Docker-Compose没有得到iX Systems的正式支持，但我们设计了一个特殊的“Docker-Compose”应用程序，它可以在“核心”列车中使用。 这个应用程序可以用于在完全孤立的 docker-compose 环境中部署一个合成文件。

我们的 Docker-Compose 应用程序具有以下功能：

- 直接从docker-compose 将端口绑定到主机

- 内置 Docker-Compose 网络

- `/mnt`, `/root` 和 `/cluster` 可在Docker-Compose 容器内直接访问

- 停靠图像和码头卷保存在TrueNAS SCALE 应用程序系统中的一个特殊PVC中

- 编写文件可以在我们的 Docker-Compose 应用程序开始时自动加载

- TrueNAS SCALE 更新将完全存活。

- 不改变主机操作系统

- 可以与SCALE 应用程序合并，以使用户能够慢慢地从docker-compose迁移到本机SCALE 应用程序

了解以下几件事：

- 要发布命令到停泊器或停泊器合成，您需要在 Docker-Compose App shell (不是主机外壳) 内(不是主机外壳)

- 请确保您的 Docker-Compose 网络与SCALE 应用系统设置中列出的 Kubernetes 网络不冲突。

- 请注意，Docker-Compose 容器无法连接到 kubernetes 网络。 所以您不能将“调用码头”容器与Docker-Compose 托管数据库结合起来。

简单地说， 我们的码头构造解决方案几乎就像在主机上使用，但不会损害TrueNAS SCALE的Appliance OS 。

## 视频指南

![类型 :video](https://www.youtube.com/embed/QXooywQSfJY)
