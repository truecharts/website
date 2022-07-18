# 云端点数

![Version: 1.0.0](https://img.shields.io/badge/Version-1.0.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: latest](https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square)

动态更新您的 Cloudflare DNS 记录

**Homepage:** <https://github.com/truecharts/apps/tree/master/charts/stable/cloudflareddns>

## 维护者

| 名称         | 电子邮件地址              | Url                    |
| ---------- | ------------------- | ---------------------- |
| TrueCharts | info@truecharts.org | https://truecharts.org |

## 源代码

* <https://github.com/hotio/cloudflareddns>
* <https://hotio.dev/containers/cloudflareddns/>

## B. 所需经费

Kubernetes: `>=1.16.0-0`

| 存储库                                   | 名称  | 版本     |
| ------------------------------------- | --- | ------ |
| https://library-charts.truecharts.org | 常用的 | 10.4.4 |

## 值

| 关键字                                    | 类型  | 默认设置                                                                                                          | 描述 |
| -------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------- | -- |
| env.CF_HOSTS                           | 字符串 | `"test.example.com;test.foobar.com;test2.foobar.com"`                                                         |    |
| env.CF_RECORDTYPES                     | 字符串 | `"A;A;AAAA"`                                                                                                  |    |
| env.CF_USER                            | 字符串 | `"your.cf.email@example.com"`                                                                                 |    |
| env.CF_ZONES                           | 字符串 | `"example.com;foobar.com;foobar.com"`                                                                         |    |
| env.DETECTION_MODE                     | 字符串 | `"{{ ternary .Values.env.DETECT_MODE .Values.env.DETECT_OVERRIDE (eq .Values.env.DETECT_OVERRIDE \"\") }}"` |    |
| env.DETECT_MODE                        | 字符串 | `"dig-whoami.cloudflare"`                                                                                     |    |
| env.DETECT_OVERRIDE                    | 字符串 | `""`                                                                                                          |    |
| env.INTERVAL                           | 整数  | `300`                                                                                                         |    |
| env.LOG_LEVEL                          | 整数  | `3`                                                                                                           |    |
| env.cloudflareddns                     | 字符串 | `""`                                                                                                          |    |
| 脉冲策略                                   | 字符串 | `“IfNotPresent”`                                                                                              |    |
| image.repository                       | 字符串 | `"tccr.io/truecharts/cloudflareddns"`                                                                         |    |
| image.tag                              | 字符串 | `"latest@sha256:21393f2edec6838dde0e1db48e37a976bdf26f991d775057e95480e6983d4a6e"`                            |    |
| 已启用                                    | 布尔值 | `true`                                                                                                        |    |
| 持久性.config.mountPath                   | 字符串 | `"/config"`                                                                                                   |    |
| persistence.varrun.enabled             | 布尔值 | `true`                                                                                                        |    |
| podSecurityContext.runAsGroup          | 整数  | `0`                                                                                                           |    |
| podSecurityContext.runAsUser           | 整数  | `0`                                                                                                           |    |
| 已启用 probes.liveness.liveness.启用        | 布尔值 | `false`                                                                                                       |    |
| 已启用 probes.readiness.                  | 布尔值 | `false`                                                                                                       |    |
| probes.startup.enabled                 | 布尔值 | `false`                                                                                                       |    |
| secretEnv.CF_APIKEY                    | 字符串 | `""`                                                                                                          |    |
| secretEnv.CF_APITOKEN                  | 字符串 | `""`                                                                                                          |    |
| secretEnv.CF_APITOKEN_ZONE           | 字符串 | `""`                                                                                                          |    |
| securityContext.readOnlyRootFilesystem | 布尔值 | `false`                                                                                                       |    |
| securityContext.runAsNonRoot           | 布尔值 | `false`                                                                                                       |    |
| 已启用                                    | 布尔值 | `false`                                                                                                       |    |
| 启用了 service.main.ports.main.lain.      | 布尔值 | `false`                                                                                                       |    |

----------------------------------------------
Autogenerated from chart metadata using [helm-docs v0.1.1](https://github.com/k8s-at-home/helm-docs/releases/v0.1.1)
