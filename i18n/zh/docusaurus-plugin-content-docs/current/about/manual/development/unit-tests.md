# 单元测试

我们测试我们的共同库，虽然它没有接近完整的覆盖范围，但它提供了一些基本的检查。

## 运行测试

运行这些测试可以以您喜欢的方式进行。 在这份文件中，我们只能使用我们的开发容器来使用 Visual Studio 代码。

### 使用 Visual Studio 代码

我们的repo 带有一个 Visual Studio 代码 [开发容器](https://code.visualstudio.com/docs/remote/containers) 定义和 `启动. son` 允许您快速设置一个您可以运行测试的环境。

#### 必备条件

- Visual Studio 代码已安装。
- Docker已安装并运行。
- “远程-容器”扩展已安装并在 Visual Studio 代码中启用。

欲了解更多详情，请参阅 [官方文档](https://code.visualstudio.com/docs/remote/containers#_system-requirements)。

#### 运行测试

设置了 Visual Studio 代码后，您将打开 `图表` 工作空间。 如果您想要在开发容器中重新打开工作区，您将看到一个弹出窗口询问：

![Visual Studio 代码开发容器弹出窗口](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_devcontainer_popup.png)

选中此项并将建立一个停靠工作区。 您现在可以正常使用 Visual Studio 代码。

要运行或调试设备测试，请单击左侧边栏上的“运行”按钮并选择所需的配置：

![Visual Studio 代码运行配置](https://raw.githubusercontent.com/k8s-at-home/charts/master/docs/images/vscode_run_unittests.png)

- _UnitTest - 活动的 spec 文件_: 此配置将尝试运行当前打开的测试文件。

  **注意：** 请确保您已经打开了一个有效的测试文件(`)。 b` 文件在 `测试/图表` 文件夹中，否则无法工作。

- _UnitTest - 所有 spec 文件_: 此配置将运行在 `test/chays` 文件夹中的所有测试文件。

接下来，按绿色的“播放”图标。 这将启动测试在终端窗口中显示结果。

## 产出

一个成功的测试将会输出如下的东西...

```text
Started with run options --seed 52955

common-test::statefulset volumeClaimTemplates
  can set values for volumeClaimTemplates                         PASS (0.16s)
  volumeClaimTemplates should be empty by default                 PASS (0.06s)

common-test::ports settings
  targetPort can be overridden                                    PASS (0.17s)
  port name can be overridden                                     PASS (0.17s)
  defaults to name "http" on port 8080                            PASS (0.16s)
  targetPort cannot be a named port                               PASS (0.05s)

common-test::pod replicas
  defaults to 1                                                   PASS (0.08s)
  accepts integer as value                                        PASS (0.08s)

common-test::Environment settings
  Check no environment variables                                  PASS (0.05s)
  set "valueFrom" environment variables                           PASS (0.11s)
  set "static" and "Dynamic/Tpl" environment variables            PASS (0.15s)
  set "Dynamic/Tpl" environment variables                         PASS (0.11s)
  set "static" environment variables                              PASS (0.10s)

common-test::ingress
  ingress with hosts                                              PASS (0.10s)
  should be disabled when ingress.enabled: false                  PASS (0.06s)
  ingress with hosts template is evaluated                        PASS (0.11s)
  ingress with hosts and tls                                      PASS (0.15s)
  ingress with hosts and tls templates is evaluated               PASS (0.16s)
  should be enabled when ingress.enabled: true                    PASS (0.06s)

common-test::controller type
  accepts "daemonset"                                             PASS (0.06s)
  accepts "statefulset"                                           PASS (0.06s)
  defaults to "Deployment"                                        PASS (0.06s)

Finished in 2.26077s
22 tests, 59 assertions, 0 failures, 0 errors, 0 skips
```
