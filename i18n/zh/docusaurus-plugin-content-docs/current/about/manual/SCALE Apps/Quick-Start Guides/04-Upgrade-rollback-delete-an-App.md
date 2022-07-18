# 04-升级、回滚和删除

使用TrueCharts，我们总是推送应用程序的新版本以进行任何更改。 即使是集装箱也是如此。 这将确保应用程序从TrueCharts向您提供最新和最新的

## B. 所需经费

- 请确保您的存储库已创建并工作
- 当您首次打开“应用”接口时，请确保您选择了存储池。 如果没有参考快速启动指南 `01- 首次应用程序设置`
- 请确保您有可用的互联网连接，并可以从主机系统访问 github 和 truecharts.org。
- 请确保您已经从指南02中添加了TrueCharts目录
- 请确保您的应用程序已安装，最好是工作

## 升级

### 使用 GUI 升级应用

- 跳转到 `已安装的应用程序`
- 请确保您的应用报告升级可在应用卡上。
- 注意到当前版本，您可能想要在将来恢复到这个版本。
- 点击应用卡右侧的菜单按钮
- 选择 `升级`
- 确认您的升级请求

然后应用将进行备份(!) 和升级过程。 如果进程失败，您的更改将不会被提交，编辑将被还原。 进程消失后，弹出窗口可能需要几分钟时间才能实际部署您新升级的应用程序。 由于某些事情在后台发生。

## Rollback

### 使用图形界面还原中

1. 在您的应用程序卡上选择前 3 点
2. 选择"回滚"
3. 在“版本”下——单击下拉菜单并选择您想回滚的版本
4. 选中"滚动快照"框
5. 选择"回滚"

### 使用 CLI 恢复

1. 输入 SCALE 命令行接口
2. 输入应用chart_release 回滚 应该给您这个屏幕： ![cli-rollback1](/img/rollback/cli-rollback1.png)
3. 输入发布名称和 item_version： ![cli-rollback2](/img/rollback/cli-rollback2.png) (一定要在发布名称前删除#)
4. 点击保存，然后点击退出 它应该显示类似的东西，确认回滚： ![cli-rollback3](/img/rollback/cli-rollback3.png)

### 查找最近安装的版本

可悲的是，SCALE没有列出哪些版本可以回滚，但是需要输入一个版本。 有一个短暂的步行来获取该应用的版本历史：

1. 运行 `导出 KUBECONFIG=/etc/rancher/k3s/k3s.yaml`
2. 运行  `头盔历史 jacket -n ix-jackett, 其中"jackett"` 应该替换为打断您的用户界面的应用程序名称 你会看到这一点： ![history](/img/rollback/history.png) 注意到“chart”列， 它列出了您可以在回滚接口中输入的版本号，以应用名称为前缀。 仅在图形界面或 CLI 中输入版本号，而不是名称

## 删除

### 使用图形界面删除

1. 在您的应用程序卡上选择前 3 点
2. 选择"删除"
3. 选中“确认”框
4. 选择"继续"

### 使用 CLI 删除

1. 通过 GUI 或 SSH 输入 Truenas SCALE 终端
2. 输入以下命令
    - `cli -c 'app chart_release_name=NAME_Off_APPLICATION'`
    - 例如： `cli -c 'app chart_release_name=traefik'`

#### 视频指南

![类型 :video](https://www.youtube.com/embed/ONbMhQJPQwc)
