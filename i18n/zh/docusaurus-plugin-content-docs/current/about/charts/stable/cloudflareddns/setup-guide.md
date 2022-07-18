# 如何到

所以您已经关注了我们的一些TrueNAS指南，设置您的域名。 证书和使用 Cloudflare 来管理你的DNS 管理，不管你没有静态IP，本指南是给你的。 这个快速指南将帮助您通过步骤使用 Cloudflareddns 更新动态IP以及您的整个部署，以便即使您更改IP，您的域也会指向正确的地址。

## B. 所需经费

域名(可以通过 Cloudflare 等购买)

Cloudflare DNS管理

- 免费注册 Cloudflare版
- 将你的名字命名器指派给你的 Cloudflare ![图片](https://user-images.githubusercontent.com/89483932/179332161-e903e46e-ed8c-4b58-81fc-6fcadf1a9851.png)

云端图表

## 必备条件

本指南假定您已经在TrueNAS 上跟着我们的主 [快速启动指南](https://truecharts.org/docs/manual/SCALE%20Apps/Quick-Start%20Guides/adding-letsencrypt) 并完成了云端的DNS配置(见 [我们的 YouTube 频道上的这个视频](https://www.youtube.com/watch?v=hJVghecs3rE))

推荐的方式是为您的子域设置 CNAME (图表) 并保留您的记录指向您的基本域名，如下面的

![图片](https://user-images.githubusercontent.com/89483932/179334653-316e462f-7bf7-4cda-a9dc-dd8842e76021.png)

注意 `区域 ID` and `帐户 ID`, 这就是我们将在云端图中使用的东西。

![概览](https://user-images.githubusercontent.com/89483932/179336819-64a32521-c64b-4ae6-8d5d-225b7342b786.png)

## 云层图表设置

第 1 -2步：第二步的名称图表和保留默认值

![步骤1](https://user-images.githubusercontent.com/89483932/179336761-2ce2da3a-cd75-43ba-befe-4c3775f04027.png)

步骤 3：

![步骤3 第一部分](https://user-images.githubusercontent.com/89483932/179336779-e2aa5273-8527-40f1-bc3c-3768931ea289.png)

在 `CF_APITOKEN_ZONE` 字段中使用 Cloudflare 域名中的 ZoneID (见上文)

在 `CF_APITOKEN` 字段中使用 Cloudflare 域名中的帐户 ID (见上文)

![步骤3 第二部分](https://user-images.githubusercontent.com/89483932/179336787-338b1939-546c-42fa-86a2-afe89da91e8d.png)

除了 `CF_RECORDTYPES` 之外，如果您只要更改您的记录，您可以保留所有的默认值。 (更多选项 [请参阅上游文档](https://hotio.dev/containers/cloudflareddns/))

如果您只是更改您的主域名，请将 `CF_RECORDTYPES` 改为A

步骤4-8：根据需要调整，但默认是很好

## 支持

- 如果您需要更多的细节或有更多的自定义设置， [上游](https://hotio.dev/containers/cloudflareddns/) 的文档就非常完整，因此请检查该选项的描述。
- 您也可以使用Discord来获得实时反馈和支持
- 查看我们的 [Discord](https://discord.gg/tVsPTHWTtr)
- 如果你在我们的图表中发现了一个错误，请打开一个 Github [问题](https://github.com/truecharts/apps/issues/new/choose)

---

版权所有 - TrueCharts 项目
