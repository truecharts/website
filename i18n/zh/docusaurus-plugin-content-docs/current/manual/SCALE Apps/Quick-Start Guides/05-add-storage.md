# 05-添加额外存储

我们提供了挂载尽可能多的主机文件夹的选项。

主机PathMounts实际上非常简单： 它从您的TrueNAS SCALE 系统中挂载一个目录，直接到您安装的应用程序内的目录。

## 权限

我们提供了一个可选的自动设置的权限通过 App fsGroup 或 PUID

Setting permissions automatically means we `chown` the folder and all folder within it, to a group of your choice. 然而，我们只是在安装或更新应用程序时才这样做。 然而，我们只是在安装或更新应用程序时才这样做。

请注意，自动设置所有权/权限，确实意味着它会覆盖您当前的 CHOWN 和 CHMOD 设置。 这可能会破坏事物，如果不小心使用，它将摧毁你的系统。 启用外部系统挂载共享的自动权限也是不明智的。

## 视频指南

![类型 :video](https://www.youtube.com/embed/aktv1r-KRI0)

### 附加文档
