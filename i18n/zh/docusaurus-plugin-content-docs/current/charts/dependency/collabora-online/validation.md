# 输入验证

__`服务器名称`__ 接受的格式是：

- Single FQDN (e.g. `collabora.mydomain.com` or `mydomain.com`)
- 单个IP(例如： `10.10.10.11`)

_FQDN适用与上面一节相同的规则_

用于匹配此内容的正则表达式： `^(([a-z\d](-?[a-z\d])(-?[a-z\d]){0,62})\.)*([a-z\d](-?[a-z\d]){0,62})\. ([a-z](-?[a-z\d]){1,62}((\d{1,3}\.){3}\d{1,3})$` 您可以在这里试试 [这里](https://regex101.com/r/mICKDp/1)

__`Web 界面密码`__ 接受的格式是：

- 字母，数字，符号，符号，最低8个字符，例如 `dg523$*a`- 接受 `a-z` `A-Z`, `0-9` 和 `！ #$%^&*?`

Regex used to match those: `[a-zA-Z0-9!@#$%^&*?]{8,}` You can try live [here](https://regex101.com/r/ef3V88/1)

---

_如果您找到了一个您认为需要验证的字段，请在 github 上打开一个问题_
