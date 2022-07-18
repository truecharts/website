# 门户按钮

安装后，几乎每个应用都应该有一个“portal”按钮。 此按钮是在安装后进入应用程序的一种简单而简化的方式。 然而，人们应该意识到，它不会跟随应用程序内的更改(如：从 http 到 http)。

## yaml 示例

每个问题 .yaml 文件都应该包含以下代码片段以启用Portal按钮。 请在服务中将 `"http"` 更改为 `"https"` ain.port.protocol，如果您的应用程序在使用 "NodePort" 运行时使用 http 而不是 https

也请注意，只有门户网站 (!) 指向主要服务、主要服务端口和主要进入。

```yaml
portals:
  web_portal:
    protocols:
      - "$kubernetes-resource_configmap_portal_protocol"
    host:
      - "$kubernetes-resource_configmap_portal_host"
    ports:
      - "$kubernetes-resource_configmap_portal_port"
        path: "/"

questions:

  - variable: portal
    group: "Container Image"
    label: "Configure Portal Button"
    schema:
      type: dict
      hidden: true
      attrs:
        - variable: enabled
          label: "Enable"
          description: "enable the portal button"
          schema:
            hidden: true
            editable: false
            type: boolean
            default: true

```

还有一些其他（先进的）备选办法，可在上述所需部分以下增加：

**主机：**

```yaml
        - 变量：主机
          标签：“使用 NodePort时覆盖主机”
          描述：“使用 NodePort时覆盖主机设置。 示例使用案例将加载平衡的 NodePorts。”
          schema:
            隐藏：true
            编辑：fals
            类型：字符串
            默认值：“test.com”
          schema:
            隐藏：true
            编辑：fals
            类型：字符串
            默认值：“test.com”
          schema:
            隐藏：true
            编辑：fals
            类型：字符串
            默认值：“test.com”
```
