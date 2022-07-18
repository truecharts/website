# 问题.yam

yaml 是由 TrueNAS 渲染以创建用户界面的文件。 当不创建新图表时，这个项目所做的大部分工作是将问题.yaml 文件合在一起，以便将现有的Helm Charts变成应用。

## 语法

在这个文档中，我们给你一个简短的参考指南(引用自第九个官方文件)，其中列出了问题.yaml中可用的设置。

### 问题变量参考

| 变量                   | 类型   | 必填    | 描述                                                                                                                                                                                            |
| -------------------- | ---- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 变量                   | 字符串  | true  | 定义 `values.yaml`文件中指定的变量名称。                                                                                                                                                                   |
| 标签                   | 字符串  | true  | 定义界面标签。                                                                                                                                                                                       |
| 描述                   | 字符串  | false | 指定变量的描述。                                                                                                                                                                                      |
| 群組                   | 字符串  | false | 按输入值分组问题。                                                                                                                                                                                     |
| schema               | 词典   | true  | 为 `变量指定schema 详细信息`                                                                                                                                                                           |
| schema.type          | 字符串  | true  | 指定 `变量` 的值类型(当前支持的类型是字符串、 英寸、 布尔值、 路径、 主机路径、 列表、 dict、 ipaddr 和 cron)。                                                                                                                        |
| 必填项                  | 布尔值  | false | 定义变量是否必需(true \ false)，默认为false                                                                                                                                                              |
| 默认                   | 对象   | false | 指定默认值。                                                                                                                                                                                        |
| 模式.min_长度            | 整数   | false | 字符串类型变量的最小字符长度。                                                                                                                                                                               |
| schema.max_长度        | 整数   | false | 字符串类型变量最大字符长度。                                                                                                                                                                                |
| schema.min           | 整数   | false | 最小整数长度                                                                                                                                                                                        |
| schema.max           | 整数   | false | 最大整数长度。                                                                                                                                                                                       |
| schema.enum          | []字典 | false | 指定变量类型为 `string`的选项<br /><br />枚举:<br />- 值: "RollingUpdate"<br />&nbsp;&nbsp;描述: "创建新点, 然后杀死旧点"<br />- 值: "Recreate"<br />&nbsp;&nbsp;描述: "在创建新点之前杀死现有点" |
| schema.valid_chars   | 字符串  | false | 输入字符验证的正则表达式。                                                                                                                                                                                 |
| schema.subquestions  | 子问题  | false | 添加一个数组子问题。                                                                                                                                                                                    |
| 显示if                 | 字符串  | false | 如果指定条件为 true，显示当前变量，例如 `显示条件： [["diverype", "=", "CronJob"]]`                                                                                                                                 |
| show_subquestions if | 字符串  | false | 显示子问题如果为真或等于某个选项。 例如， `show_subquestion_if "static"`。 系统将会自动转换为 `schema.show_if` 指定的过滤器格式。                                                                                                    |
| schema.attrs         | 变量   | false | 指定 `schema.type` 是声明字典中允许的属性。                                                                                                                                                                 |
| 项目                   | 变量   | false | 指定 `schema.type` 是要声明列表中允许的属性。                                                                                                                                                                |
| 私密方案                 | 布尔值  | false | 指定用于声明信息敏感字段。                                                                                                                                                                                 |
| schema.null          | 布尔值  | false | 指定变量的值是否为 null。 默认为false。                                                                                                                                                                     |

#### 子问题

`子问题 [` 无法包含 `子问题` 或 `show_subquestions_if` keys, 但支持上表中的所有其他键。 同时具有 `schema类型` 列表的变量不支持 `子问题`。

#### 特别问题

有一些新鲜事例，我们希望能够通过动态地从系统中获取一些数据来配置/管理用于工作量的资源。 因此，一个图表可以通过定义引用来指定一个变量的系统要执行的某些动作。 一个例子更好地说明了这个概念：

```yaml
- variable: volume
  label: "Volume"
  schema:
    type: dict
    $ref:
      - "normalize/ixVolume"
    attrs:
      - variable: mountPath
        label: "Mount Path"
        description: "Path where the volume will be mounted inside the pod"
        schema:
          type: path
          required: true
      - variable: datasetName
        label: "Dataset Name"
        schema:
          type: string
          required: true
```

在上面的变量中，我们在架构中定义了一个 `$ref` ，该变量指定了系统应该采取一些行动来规范指定的变量值。 在这一具体案件中， `ix_volume` 是一个引入的概念，我们建议使用一个我们能够在图表发行回滚上自动回滚的卷。 在本质上， 只是一个 `主机路径` 卷, 系统为此自动创建指定的数据集。 我们现在有以下类型的操作在 `$ref` 中支持：

1. 定义
2. 将 规范化为 (1)，系统将自动更新特定定义的模式。 例如，

```yaml
- 变量: 主机接口
  描述: "请指定主机接口"
  标签: "主机接口"
  schema:
    类型: 字符串
    需要: true
    $ref:
      - "definitions/interface"
```

系统将根据系统上可用的接口自动生成用户可用的接口。 对于(2)，系统将使数值正常化或采取上文讨论的一些行动。

#### 标准化问题.yaml 部分

为了最大限度地减少我们的应用集的维护负荷，我们总是力求尽可能地实现标准化。 问题.yaml也是如此。 这里包括一些代码标准代码片段，预计将包含在每个应用中。 认识到有时特定的功能可能或不会完全起作用。 然而，离开这些功能将会大大增加维护负荷，常常说，这些功能将在以后的共同图表中添加。

#### 群組

为了确保所有应用保持一定的同一性，我们使用了一个标准化的组别列表。 请确保在您的应用程序中使用这些组：

```yaml
分组：
  - 名称：“容器映像”
    描述：“容器使用的图像”
  - 名称：“工作量配置”
    描述：“配置工作量部署”
  - 名称：“配置配置容器配置”
    描述：“网络配置”
  - 名称：“配置容器网络和服务”
    描述：“储存”
  - 名称：“保存”
    描述：“保存和共享与容器生命周期分开的数据”
  - 名称：“资源和设备”
    描述：“具体资源和设备”
  - 名称：“批发配置”
    描述：“批发配置”
  - 名称：“安全”
    描述：“配置安全环境”
  - 名称：“高级配置”
    描述：“名称：”
  - 名称：“警告”
    描述：“WARNING”。
```

#### 常规配置选项

这些选项总是包含\* 因为几乎每个图表(最终)都对它们有用和/或共同图表的其他部分取决于它们。 它们被称为一般备选方案，因为它们影响到图表的基本功能。 例如：自定义用户环境变量、权限和时区。

\*`PUID`, `PGID`, `UMASK` 仅在需要时被包含。

```yaml
  - 变量: env
    group: "Configuration"
    label: "Image Environment"
    schema:
      additional_tots: true
      type: dict
      tots:
        - variable: TZ
          label: "Timezone"
          schema:
            type: string
            default: "Etc/UTC"
            $ref:
        - "definitions/timezone"
        - variable: PUID
          label: "PUID"
          description: "Sets the PUID env var for LinuxServer. o (兼容) 容器"
          schema:
            type : int
            default: 568
        - 变量: PGID
          标签: "PGID"
          描述: "设置PGID env var for LinuxServer. o (兼容)容器"
          schema:
            type : int
            default: 568
        - variable: UMASK
          label: "UMASK"
          description: "Sets UMASK env var for LinuxServer. o (兼容) containers"
          schema:
            type : string
            default: "002"

  # 配置自定义环境变量
  - 变量: 环境变量
    标签: "图像环境"
    group: "配置"
    schema:
      type : list
      default: []
      item:
        - 变量: 环境变量
          labit: "环境变量"
          schema:
            type : dict
            tents:
              - 变量:
                label: "名称"
                schema:
                  type: 字符串
              - 变量: 值
                标签: "价值"
                type:
                  type : 字符串
```

#### 安全上下文配置选项

```yaml
  # Enable privileged
  - variable: securityContext
    group: "Security"
    label: "Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: privileged
          label: "Enable privileged mode for Common-Chart based charts"
          schema:
            type: boolean
            default: false
  # Set Pod Security Policy
  - variable: podSecurityContext
    group: "Security"
    label: "Pod Security Context"
    schema:
      additional_attrs: true
      type: dict
      attrs:
        - variable: runAsNonRoot
          label: "runAsNonRoot"
          schema:
            type: boolean
            default: true
        - variable: runAsUser
          label: "runAsUser"
          description: "The UserID of the user running the application"
          schema:
            type: int
            default: 568
        - variable: runAsGroup
          label: "runAsGroup"
          description: The groupID this App of the user running the application"
          schema:
            type: int
            default: 568
        - variable: fsGroup
          label: "fsGroup"
          description: "The group that should own ALL storage."
          schema:
            类型: int
            default: 568
        - 变量: fsGroupChangePolicy
          标签: "我们何时应取得所有权?"
          schema:
            类型: 字符串
            默认: "OnRootMissmatch"
            枚举:
              - 值: "OnRootMissmatch"
                描述: "OnRootMissmatch"
              - 值: "总是"
                描述: "总是"
          schema:
            类型: int
            default: 568
        - 变量: fsGroupChangePolicy
          标签: "我们何时应取得所有权?"
          schema:
            类型: 字符串
            默认: "OnRootMissmatch"
            枚举:
              - 值: "OnRootMissmatch"
                描述: "OnRootMissmatch"
              - 值: "总是"
                描述: "总是"
```
