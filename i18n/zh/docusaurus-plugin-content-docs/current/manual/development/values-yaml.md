# 值.yaml 文件

值.yaml 文件通常总是包含Helm ch的配置设置，TrueCharts 没有什么不同。 然而，我们有多种不同的价值.yaml文档，目标不同。 因为TrueNAS SCALE 的工作与标准Helm Charts 略有不同。

## 文件

### 值 yaml

使用股票头盔(而非SCALE)运行应用程序时，此文件包含默认设置。 它还被用于测试套装。

### ix_values.yaml

此文件包含的配置值未包含在问题.yaml中，但仍应复制到生成的配置文件中。 它大多用于确保每次更新都可以由维护者更改设置， 例如版本，当将事项设置为默认问题时是不可能的。

然而，验证和CI没有很好地检查这个文档。 当你绝对需要时使用它。

ix_值中的一个重要设置。 aml 是可选的设置: `startAsRoot: true` 此设置是需要以 root 启动的容器的兼容性切换， 这些容器常常使用 PUID 和 PGID 来提升(较低) 离开根目录，但要求它开始。

最小示例 ix_values.yaml 将是：

```yaml
##
# 此文件包含 Values.yaml 内容添加到问题输出中。 aml
# 只是指用户不会改变的内容。
# 示例：“image”下的所有东西都不包含在问题s.yaml 中，但包含在这里。
##

图像：
  仓库：jacobalberty/unifi
  标签：6.0。 5
  脉冲策略：IfNotPresent


##
# 大多数其他默认设置在问题中。 aml
# 其他选项请参阅wiki、default_values.yaml 或通用库图表
##

```
