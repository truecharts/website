# 12 - VPN Addon Setup

## 必备条件

1. 确保容器的互联网正在使用 PRIOR 来添加 VPN 连接
2. 获取一个 Wireguard 配置或 OpenVPN 配置文件
    - Wireguard 结束于 .conf
    - OpenVPN 结束于 .ovpn
3. 了解您的 Kubernetes 局域网和您的个人局域网

## 准备配置文件

### Wireguard

1. 删除包含"DNS"的整个行
2. 删除所有IPv6的提及内容
    - 通常在IPv4地址之后
    - `:::/0` 是IPv6语法。

这是一个 Wireguard 配置示例。 注意已删除的IPv6地址和已删除的DNS线。

```text
[Interface]
PrivateKey = cFuYkobFFgdfghddghdfghdfghdfgh
Address = 10.64.48.226/32

[Peer]
PublicKey = cadfgsdfghsdfghsdfghs
allowedIPs = 0.0.0/00
Endpoint = 198.54.128.58:5182
```

#### 附加信息

忽略任何密钥，公共私钥，psk等。 我们没有任何问题在配置中保留所有的密钥。

### OpenVPN

1. 在您的配置中添加以下两行
    - `拉过滤器忽略"ifconfig-ipv6"`

    - `绘制过滤器忽略"route-ipv6"`

    这两条线路将确保IPv6被忽略，这对于稳定的 VPN 连接至关重要。

注意添加的两行 这是一个 OpenVPN 配置示例

```text
client
dev tun
proto udp
remote us-denver.privacy.network 1198
resolv-retry infinite
nobind
persist-key
persist-tun
cipher aes-128-cbc
auth sha1
tls-client
remote-cert-tls server
pull-filter ignore "ifconfig-ipv6 "
pull-filter ignore "route-ipv6 "

auth-user-pass
compress
verb 1
reneg-sec 0
<crl-verify>
-----BEGIN X509 CRL-----
MIIFqzCCBJOgAwIBAgIJAKZ7D5Yv87qDMA0GCSqGSIb3DQEBDQUAMIHoMQswCQYD
YDQ8z9v+DMO6iwyIDRiU

-----END X509 CRL-----
</crl-verify>

<ca>
-----BEGIN CERTIFICATE-----
MIIFqzCCBJOgAwIBAgIJAKZ7D5Yv87qDMA0GCSqGSIb3DQEBDQUAMIHoMQswCQYD
YDQ8z9v+DMO6iwyIDRiU
-----END CERTIFICATE-----
</ca>

disable-occ
```

## 编辑配置

下一步将在我们编辑配置中启用插件

1. 缩放 GUI
    1. 应用程序
    2. 已安装的应用程序
2. 查找您想要的应用，点击应用程序右边的前3点
    1. 点击 `编辑`
    2. 滚动到底部，直到你看到 `附加组件`
    3. 点击 `类型下的下拉列表`
    4. 选择 Wireguard 或 OpenVPN
        1. OpenVPN
            - 为您的 vpn 提供商输入您的凭据。
    5. 检查"启用 Killswitch"
        - 点击 `将` 添加到 `配置 Killtwitt 排除的IPv4 网络`
        - 点击 `为 EACH 网络添加`。
        - `172.16.0.0/16` 是默认的 Kubernetes 网络，您想要在您的 kubernetes 中这样做，这样Kubernetes 仍然可以与应用程序通信
        - `192.168.0.0/24` 是我个人的局域网，这需要在那里才能让你与容器联系
    6. 最后，添加文件路径，保存您修改的配置文件
        - EX: `/mnt/speed/vpn/wireguard/jackett2.conf`

现在，您的屏幕应该看起来像这样： ![vpn1](/img/vpn/vpn1.png)

## 视频指南

![类型 :video](https://www.youtube.com/embed/zSNApt-Ojng)
