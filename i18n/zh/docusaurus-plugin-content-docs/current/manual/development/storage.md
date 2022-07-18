# 存储

这篇文章可以作为存储文章的开发扩展 [在这里](https://wiki.truecharts.org/general/storage/)

## 存储和通用图表

对于所有这些存储解决方案，我们要求将通用图表添加到应用中。 通用图表既处理容器中存储的连接/添加，又处理特殊k8s任务，以便在自定义存储请求时修复权限。

### 集成持久性存储

当添加应用程序时，几乎总是需要某些文件夹才能进行实时应用。 例如，配置文件应该在重启过程中保持持久性。

对于这些存储，我们可以轻松地在界面中添加修正值。 这些设置不能被禁用或删除，默认情况下也是最好的。 被限制为“内部”存储类 防止用户禁用它们，确保用户不会(错误) 移除存储。

```yaml
  - 变量：持久性
    标签：“持久性综合存储”
    描述：“Websocket 服务”
    组：“存储”
    schema：
      类型：dict
      景点：
        - 变量：数据
          标签：“应用程序配置存储”
          描述：“存储应用程序配置配置配置配置”。”
          schema:
            type: dict
            toters:
              - 变量: 启用
                标签: "启用存储"
                schema:
                  type: boolian
                  default: true
                  hidden: false
              - 变量: storageClass
                标签: "存储类型"
                描述: "警告: SCALE ZFS 以外的任何东西都会中断回滚!"
                schema:
                  type: string
                  default: "SCALE-ZFS"
              - variable: mountPath
                label: "mountPath"
                description: "Path inside the container the storage is mounted"
                schema:
                  type: string
                  default: "/config"
                  hidden: true
              - variable: emptyDir
                label: "EmptyDir Volume"
                schema:
                  type: dict
                  hidden: false
                  attrs:
                    - variable: enabled
                      label: "Use emptyDir volume"
                      schema:
                        type: boolean
                        default: false
                        hidden: false
                        show_subquestions_if: true
                        subquestions:
                          - variable: medium
                            label: "EmptyDir Medium"
                            schema:
                              type: string
                              default: ""
                              enum:
                                - value: ""
                                  description: "Default"
                                - value: "Memory"
                                  description: "Memory"
              - variable: accessMode
                label: "Access Mode (Advanced)"
                description: "Allow or disallow multiple PVC's writhing to the same PVC"
                schema:
                  type: string
                  default: "ReadWriteOnce"
                  enum:
                    - value: "ReadWriteOnce"
                      description: "ReadWriteOnce"
                    - value: "ReadOnlyMany"
                      description: "ReadOnlyMany"
                    - value: "ReadWriteMany"
                      description: "ReadWriteMany"
              - variable: size
                label: "Size quotum of storage"
                schema:
                  type: string
                  default: "100Gi"
          schema:
            type: dict
            toters:
              - 变量: 启用
                标签: "启用存储"
                schema:
                  type: boolian
                  default: true
                  hidden: false
              - 变量: storageClass
                标签: "存储类型"
                描述: "警告: SCALE ZFS 以外的任何东西都会中断回滚!"
                - 变量：持久性
    标签：“持久性综合存储”
    描述：“Websocket 服务”
    组：“存储”
    schema：
      类型：dict
      景点：
        - 变量：数据
          标签：“应用程序配置存储”
          描述：“存储应用程序配置配置配置配置”。”
          schema:
            type: dict
            toters:
              - 变量: 启用
                标签: "启用存储"
                schema:
                  type: boolian
                  default: true
                  hidden: false
              - 变量: storageClass
                标签: "存储类型"
                描述: "警告: SCALE ZFS 以外的任何东西都会中断回滚!"
                schema:
                  type: string
                  default: "SCALE-ZFS"
              - variable: mountPath
                label: "mountPath"
                description: "Path inside the container the storage is mounted"
                schema:
                  type: string
                  default: "/config"
                  hidden: true
              - variable: emptyDir
                label: "EmptyDir Volume"
                schema:
                  type: dict
                  hidden: false
                  attrs:
                    - variable: enabled
                      label: "Use emptyDir volume"
                      schema:
                        type: boolean
                        default: false
                        hidden: false
                        show_subquestions_if: true
                        subquestions:
                          - variable: medium
                            label: "EmptyDir Medium"
                            schema:
                              type: string
                              default: ""
                              enum:
                                - value: ""
                                  description: "Default"
                                - value: "Memory"
                                  description: "Memory"
              - variable: accessMode
                label: "Access Mode (Advanced)"
                description: "Allow or disallow multiple PVC's writhing to the same PVC"
                schema:
                  type: string
                  default: "ReadWriteOnce"
                  enum:
                    - value: "ReadWriteOnce"
                      description: "ReadWriteOnce"
                    - value: "ReadOnlyMany"
                      description: "ReadOnlyMany"
                    - value: "ReadWriteMany"
                      description: "ReadWriteMany"
              - variable: size
                label: "Size quotum of storage"
                schema:
                  type: string
                  default: "100Gi"
          schema:
            type: dict
            toters:
              - 变量: 启用
                标签: "启用存储"
                schema:
                  type: boolian
                  default: true
                  hidden: false
              - 变量: storageClass
                标签: "存储类型"
                描述: "警告: SCALE ZFS 以外的任何东西都会中断回滚!"
                schema:
                  type: string
                  default: "SCALE-ZFS"
              - variable: mountPath
                label: "mountPath"
                description: "Path inside the container the storage is mounted"
                schema:
                  type: string
                  default: "/config"
                  hidden: true
              - variable: emptyDir
                label: "EmptyDir Volume"
                schema:
                  type: dict
                  hidden: false
                  attrs:
                    - variable: enabled
                      label: "Use emptyDir volume"
                      schema:
                        type: boolean
                        default: false
                        hidden: false
                        show_subquestions_if: true
                        subquestions:
                          - variable: medium
                            label: "EmptyDir Medium"
                            schema:
                              type: string
                              default: ""
                              enum:
                                - value: ""
                                  description: "Default"
                                - value: "Memory"
                                  description: "Memory"
              - variable: accessMode
                label: "Access Mode (Advanced)"
                description: "Allow or disallow multiple PVC's writhing to the same PVC"
                schema:
                  type: string
                  default: "ReadWriteOnce"
                  enum:
                    - value: "ReadWriteOnce"
                      description: "ReadWriteOnce"
                    - value: "ReadOnlyMany"
                      description: "ReadOnlyMany"
                    - value: "ReadWriteMany"
                      description: "ReadWriteMany"
              - variable: size
                label: "Size quotum of storage"
                schema:
                  type: string
                  default: "100Gi"
```

### 无限自定义存储挂载

我们支持向用户呈现“自己做”样式列表 用户可以在主机系统上添加无限路径以挂载。 它应该总是包含在任何应用程序中，让用户可以选择自定义他们喜欢的东西。
