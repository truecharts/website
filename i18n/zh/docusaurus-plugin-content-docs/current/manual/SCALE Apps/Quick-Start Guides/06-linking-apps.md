# 06-内部连接应用程序

我们常常需要将个别应用连接起来，例如：Sonarr 和 SABnzbd。 这意味着我们首先需要知道如何达到这些应用程序。

## 内部连接应用程序

TrueNAS SCALE 应用程序的后端是 Kubernetes。 在Kubernetes将应用连接起来的方式与其他系统稍有不同，因为您不能直接指向使用其IP地址的其他容器。

相反，我们需要使用内部(!)域名。 请注意：这个名称仅在应用程序之间可用，无法从主机/节点或您自己的 PC。

主服务的内部域名格式解释下文。 请将 `$NAME` 替换为您在安装应用时给出的名称。 `$APP` 替换为应用程序在目录上需要的名称。

**如果您的应用名称 *像目录中一样包含* 个应用名称，格式如下。**

- `$NAME.ix-$NAME.svc.cluster.local`

**如果您的应用名 *不包含* 个应用名称和目录中的名称，格式如下。**

- `$NAME-$APP.ix-$NAME.svc.cluster.local`

如果您需要到达不同的服务(这不是经常的情况！ , 你需要稍微不同的格式, `$SVCNAME` 是你想要达到的服务的名称:

**如果您的应用名称 *像目录中一样包含* 个应用名称，格式如下。**

- `$NAME-$SVCNAMe.ix-$NAME.svc.cluster.local`

**如果您的应用名 *不包含* 个应用名称和目录中的名称，格式如下。**

- `$NAME-$APNAME-$SVCNAME.ix-$NAME.svc.cluster.local`

## 内部域名生成器

### 示例

若要在索纳尔内达到一个名为“my-sabnzbd-app”或“sabnzbd”（名称包含目录应用名称）的应用，我们可以使用以下内部域名：

- `sabnzbd.ix-sabnzbd.svc.cluster.loc` 或
- `sabnzbd.ix-sabnzbd`

若要在索纳尔内达到一个名为“sab”的应用程序(名称不包含目录应用名称)，我们可以使用以下内部域名：

- `sab-sabnzbd.ix-sab.svc.cluster.loc` 或
- `sab-sabnzbd.ix-sab`

![链接示例-sonarrsabnzbd](/img/linking/linking-example-sonarrsabnzbd.png)

### 视频指南

![类型 :video](https://www.youtube.com/embed/mWJL-XDgH98)

### 附加文档

为了更多帮助解决Kubernetes的DNS解析问题，请查阅官方文件：https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/
