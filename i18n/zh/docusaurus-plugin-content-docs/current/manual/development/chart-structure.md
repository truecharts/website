# TrueNAS SCALE 图结构

这是关于SCALE 应用和/或帮助图结构的一般性提示，它并不直接反映TrueChasts特定设置。

以下文件一般被认为是“正常的”头盔图：

```text
图/<train>/<chart name>/
  图/# 包含依赖图表的目录
  图表 aml # 必需的 Helm 图信息文件
  README d # 可选：Helm Readme 文件(也将在TrueNAS SCALE UI中呈现)
  模板/ # 一个模板目录： 当与值合并时。 ml 将生成 K8s YAML
  值。 aml # 此图表的默认配置值
```

TrueNAS SCALE具有以下特定文件：

```text
图/<train>/<chart name>/SCALE/
  应用程序读。 d # TrueNAS SCALE Specific: Reme file for show in TrueNAS SCALE UI 自动生成
  问题。 aml # TrueNAS SCALE Specific: file containing questions for TrueNAS SCALE UI
  ix_values. aml # 在使用 TrueNAS SCALE 安装时隐藏配置值
  项。 aml # 包含关于TrueNAS SCALE UI应用的通用信息
```

*查看上游头盔图表 [开发者参考](https://helm.sh/docs/chart_template_guide/) 来全面走遍开发图表。*

要转换上游图表以利用TrueNAS SCALE 增强的UX，首先创建一个 `item.yaml` 文件。 此文件和其他目录项信息提供了此图表适合的类别列表。 这有助于用户在浏览目录界面时导航和过滤。

`$ cat 图/<train>/<chart name>/SCALE/item.yaml`

```yaml
类别：
  - 通用的
icon_url: "http://ix_url"
```

然后添加 `个问题 s.yaml` 文件来提醒用户一些东西。

```yaml
groups:
  - name: "Container Images"
    description: "Image to be used for container"
questions:
  - variable: image
    description: "Docker Image Details"
    group: "Container Images"
    schema:
      type: dict
      required: true
      attrs:
        - variable: repository
          description: "Docker image repository"
          label: "Image repository"
          schema:
            type: string
            required: true
        - variable: tag
          description: "Tag to use for specified image"
          label: "Image Tag"
          schema:
            type: string
            default: "latest"
        - variable: pullPolicy
          description: "Docker Image Pull Policy"
          label: "Image Pull Policy"
          schema:
            type: string
            default: "IfNotPresent"
            enum:
              - value: "IfNotPresent"
                description: "Only pull image if not present on host"
              - value: "Always"
                description: "Always pull image even if present on host"
              - value: "Never"
                description: "Never pull image even if it's not present on host"
```

以上将会提示用户使用 2 个文本字段和用户界面下拉菜单中图像配置的详细信息。 *有关问题.yaml的更多信息可在这里 [](https://wiki.truecharts.org/development/questions-yaml/)*
