# 普梅尤斯

kube-prometheus-stack 收藏的 Kubernetes 清单、 Grafana 仪表板， 和 Prometheus 规则与文档和脚本相结合，方便使用Prometheus 操作员与 Prometheus 进行端到端的Kubernetes 集群监测。

TrueCharts设计成只能安装为 TrueNAS SCALE 应用程序。 我们不能保证这个图表作为一个独立的头盔安装。 **此图表不由上游项目维护，此图表中的任何问题都应该在这里 [](https://github.com/truecharts/apps/issues/new/choose)**

## 源代码

* [https://github.com/prometheus-community/helm-tables](https://github.com/prometheus-community/helm-charts)
* <https://github.com/prometheus-operator/kube-prometheus>

## B. 所需经费

Kubernetes: `>=1.16.0-0`

## 依赖关系

| 存储库                                   | 名称                 | 版本     |
| ------------------------------------- | ------------------ | ------ |
| https://charts.bitnami.com/bitnami    | kube-state-metrics | 3.1.1  |
| https://charts.bitnami.com/bitnami    | 节点导出器              | 3.0.4  |
| https://library-charts.truecharts.org | 常用的                | 10.4.4 |

## 安装图表

要在TrueNAS SCALE 上安装此应用，请检查我们的 [快速启动指南](https://truecharts.org/manual/Quick-Start%20Guides/02-Installing-an-App/)。

## 升级、回滚和卸载图表

若要升级、回滚或从TrueNAS SCALE中删除此应用，请检查我们的 [快速启动指南](https://truecharts.org/manual/Quick-Start%20Guides/04-Upgrade-rollback-delete-an-App/)。

##### 正在连接到其他应用
如果您需要将此应用连接到 TrueNAS SCALE 上的其他应用，请参阅我们的 [链接应用内部](https://truecharts.org/manual/Quick-Start%20Guides/06-linking-apps/) 快速启动指南。

## 支持

- 请先检查我们的 [快速启动指南](https://truecharts.org/manual/Quick-Start%20Guides/01-Adding-TrueCharts/)。
- 查看 [Wiki](https://truecharts.org)
- 查看我们的 [Discord](https://discord.gg/tVsPTHWTtr)
- 打开一个 [问题](https://github.com/truecharts/apps/issues/new/choose)

---

版权所有 - TrueCharts 项目
