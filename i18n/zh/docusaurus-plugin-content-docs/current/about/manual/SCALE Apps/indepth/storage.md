# 存储

TrueCharts使用多个不同的存储系统：

## 存储类型

当前存储被分成两种类型：

1. 集成持久性存储 (PVC)
2. 自定义存储 "hostPathMounts"

## 集成持久性存储

集成持久性存储是以Kubernetes PVC为基础的，以便尽可能密切地融入TrueNAS SCALE。 它们还经过大量预先配置，尽可能发挥最佳作用，并为今后的扩展提供备选办法，如增加NFS和Gluster 备选方案。 这些存储选项本身并不适合与多个应用程序共享。

此存储已整合到 TrueNAS SCALE 并完全支持还原升级。 说明为什么这是默认(仅实际支持!)存储应用程序配置文件的方式。

## 自定义应用程序存储别名 "hostPathMounts"

除了前面提到的集成持久性存储外，我们还提供了挂载你想要的尽可能多的主机文件夹的选项。

主机PathMounts实际上非常简单： 它从您的TrueNAS SCALE 系统中挂载一个目录，直接到您安装的应用程序内的目录。

## 权限

权限设置相当重要，往往会给用户带来问题。 对于集成的持久性存储和自定义存储，我们提供了特殊的选项来自动设置与容器一致的权限。

### 集成持久性存储

这些获取自动设置为由: **PGID**

### 自定义应用程序存储别名 "hostPathMounts"

我们根据App fsGroup 或 PUID 提供可选的自动设置权限。

Setting permissions automatically means we `chown` the folder and all folder within it, to a user and group of your choice. 然而，我们只是在安装或更新应用程序时才这样做。

请注意，自动设置所有权/权限，确实意味着它会覆盖您当前的 CHOWN 和 CHMOD 设置。 这可能会破坏事物，如果不小心使用，它将摧毁你的系统。 启用外部系统挂载共享的自动权限也是不明智的。 这些权限基于您在应用配置对话框中输入的用户和组，并默认为 `568` (SCALE 默认应用用户)。
