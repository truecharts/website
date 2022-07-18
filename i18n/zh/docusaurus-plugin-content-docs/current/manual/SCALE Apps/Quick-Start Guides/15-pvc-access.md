# 15 - 访问 PVC 数据

## 我的应用程序文件在哪里？

- 您的文件被持有在容器中
- 如果不先挂载PVC，他们就无法从您的服务器的文件结构中看到。

## 挂载 PVC 数据

### 重置脚本

一个选项是使用重脚本.

如果您计划安装PVC存储设备超过了几倍，这可能是您最好的选择。

1. 脚本将列出每个应用程序的 PVC 所有信息
2. 安装前安全关闭您的应用程序
3. 把您的 PVC 挂载到 /mnt/time/StrORAGE-NAME

视频将从安装功能开始，以便您可以看到它看起来是什么。

然后，如果您想要安装它，请按照视频指南从 15:52 开始。

[![重置脚本](/img/pvc_access/video_thumbnail.jpg)](https://youtu.be/uZp4x_Susgo?t=616 "重置脚本")

### 手动方法 - 新用户指南

手动挂载PVC存储需要比脚本方法多一点时间。

然而，我知道一些用户想要确切知道他们正在执行什么命令等。

### 推荐项目

- 允许复制和粘贴的终端
- 打开笔记本

1\. 1\. **停止你在挂载时计划的应用程序**

2\. 2\. **运行以下命令以查看您的 PVC 数据**

```bash
k3s kubectl get pvc - A | sorth -u | awk '{print "\t" $1 "\t"\t" 4}' | 列 -t
```

3\. 3\. **查找您想挂载的程序**

这首先可能引起混淆，因为许多应用都有许多不同的PVC实例。

![pvc_list](/img/pvc_access/pvc_list.png)

- 你会在这张照片中看到。 Nextcloud有许多不同的 PVC。
  - 然而，如果你看中间一栏打破它，它就不会太令人困惑。
  1. `数据下一个云端-雷迪斯-0`
      - 这是你的 Redis PVC
  2. `db-nextcloud-postgresql-0`
      - 这是您的 PostgreSQL PVC
  3. `下一个云数据`
      - 这是您的数据PVC

4\. 4\. **在找到你想挂载的PVC后， 复制从pvc开始的右边列(卷)到笔记本，供下一个命令使用**

- 如果我想挂载 `下一个云端数据`，我会使用：
- `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

5\. 5\. **运行以下命令来找到您的应用程序PVC的完整路径**

```bash
zfs 列表 | grep PVC_VOLUME
```

- 下次云端示例结束后，我会把 `PVC_VOLUME` 替换成 `pvc-cd84394b-7812-43c3-a6d9-1a5693592cbe`

示例：

```bash
zfs 列表 | grep pvc-cd84394b-7812-43c3-a6d9-1a56992cbe
```

下面是输出应该看起来像 ![下一个云卷](/img/pvc_access/nextcloud_volumes.png)

6\. 6\. **挂载您的 PVC**

```bash
zfs 设置挂载点=/temporary/NAME FULL_PVC_PATH
```

示例：

```bash
zfs 设置挂载点=/temporary/nextcloud-data speed/ix-applications/releases/nextcloud/volumees/pvc-cd84394b-7812-43c3-a6d9-1a56932cbe
```

- 此命令如果成功将不产生输出
- 现在你应该能够在应用程序的 PVC 内做任何你想做的事情。

7\. 7\. **正在重新挂起**

```bash
zfs 设置挂载点=旧的 POOL_NAME/ix-applications/releases/APPLICATION_NAME/volumes/ VOLUME-NAME
```

示例：

```bash
zfs set mountpoint=legal speed/ix-applications/releases/nextcloud/volumes/pvc-cd84394b-7812-43c3-a6d9-1a56932cbe
```

然后，我总是想在挂载时创建的目录上 `rmdir`

- 在我的情况下，我将运行：

```bash
rmdir /mnt/temporary/nextcloud-data
```

- 这只是为了保持您的临时文件夹的清理，让您知道什么是挂载的还是没有挂载。

- 不要担心， `rmdir` 无法删除挂载的文件夹或其中的内容。

### 手动方法 - 高级用户指南

**完全可以在PVC中找到这个应用程序。**

#### 要获取 PVCNAME：

```bash
k3s kubectl get pvc -n ix-APPNAME
```

#### 获取PVCPATH：

```bash
zfs 列表 | grep 遗留问题 | grep APPNAME
```

#### 如果你想挂载PVC内容：

```bash
zfs 设置挂载点=/temporary PVCPATH
```

您的 PVC 将在 `/mnt/temporary` 下挂载

#### 当你完成编辑时：

```bash
zfs 设置挂载点=legisled PVCPATH
```
