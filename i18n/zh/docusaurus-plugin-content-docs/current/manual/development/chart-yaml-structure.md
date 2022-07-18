# Chart.yaml 布局

在TrueCharts中，我们试图使一些文件标准化，因此我们可以大量修改这些图表，减少错误的风险。 Chart.yaml 是这些文件之一。 在这个文档中，我们将解释标准化的布局选项。 关于示例布局，请查看我们标准的 Chart.yaml [模板](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml)

## 布局说明

```yaml
apiVersion: 图表 API 版本 (required)
kubeVersion: A SemVer range of compatible Kubernetes 版本 (optional)
name: 图表名称 (required)
版本: SemVer 2 版本(required)
upstream_version: A SemVer 2 版本, 用于上游头盔图表源(可选)
appVersion: 此应用程序的版本 (可选) 不需要SemVer。 推荐引用。
描述：此工程的单句描述(可选)
类型：图表类型(可选)
已废弃：此图表是否已废弃(可选， 布尔值
主页：此项目主页的 URL (可选)
图标：SVG 或 PNG 图像的 URL 可作为图标使用(可选)
关键词：
  - 此工程的关键词列表 (可选)
源：
  - 此工程的源代码的 URL 列表 (可选)
依赖关系：
  - 名称：图表名称 (nginx)
    仓库：URL ("https://示例) om/charts") 或别名 (@repo-name")
    版本: 图表版本 ("1.2). ")
    conditions : (optional) A yaml 路径解析为布尔值，用于启用/禁用图表(例如子图1)。 已读)
    标签：# (可选)
      - 标签可以用于分组图表以启用/禁用一起
    导入值：# (可选)
      - 导入值包含导入的源值映射至父键。 每个项目可以是一个字符串或双子/父子子项。
    别名: (可选) 别名用于图表的别名。 当您需要多次添加相同的图表时
维护者: # (可选)
  - 名称: 维护者名称 (每个维护者需要)
    email: 维护者电子邮件 (每个维护者可选)
    url: 维护者的 URL (每个维护者可选)
注释:
  例如：按名称键的注释列表 (可选)
```

### 评论中

在上述描述中，有许多值没有实际使用。 其中一些东西，如 `已废弃的`，我们刚刚设置为 false。 其它人，如 `注释` 则被解读。

请参考我们的标准Chart.yaml [模板](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml) 查看哪些未使用的值需要处理。

### 依赖关系

我们期望每个图表以某种身份使用我们的共同图表，除非绝对不可能这样做。 这也意味着我们期望《共同图》永远是名单上的第一个依赖者。 这使我们能够轻松地大量更新所有通用图表引用。

所有其他依赖关系按字母顺序排列。

### 维护者

唯一的维护者应该始终是 TrueCharts, 由于TrueCharts核心小组预计将在其他维护者未能维持其工作的情况下介入该小组。 如何将TrueCharts列为维护者的示例可见于我们的标准Chart.yaml [模板](https://github.com/truecharts/apps/blob/master/templates/app/Chart.yaml)。
