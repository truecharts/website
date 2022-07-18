# 12 - VPN Addon Setup

## Voraussetzungen

1. Stellen Sie sicher, dass das Internet für den Container funktioniert, um die VPN-Verbindung hinzuzufügen
2. Erhalte entweder eine Wireguard-Konfiguration oder eine OpenVPN-Konfigurationsdatei
    - Wireguard endet in einer .conf
    - OpenVPN endet in einer .ovpn
3. Kennen Sie sowohl Ihr kubernetes LAN als auch Ihr persönliches LAN

## Konfigurationsdateien vorbereiten

### Drahtgitter

1. Lösche die gesamte Zeile mit "DNS"
2. ALLE Erwähnungen von IPv6 entfernen
    - Normalerweise nach den IPv4-Adressen
    - `::/0` ist die IPv6-Syntax.

Hier ist ein Beispiel Wireguard-Konfiguration. Beachten Sie die gelöschten IPv6-Adressen und die gelöschte DNS-Zeile.

```text
[Interface]
PrivateKey = cFuYkobFFgdfghdfghdfghdfghdfgh
Address = 10.64.48.226/32

[Peer]
PublicKey = Casdfgsdfghsdfghsdfghsdfghsdfghs
AllowedIPs = 0.0.0/0
Endpoint = 198.54.128.58:51820
```

#### Zusätzliche Informationen

Ignoriere alle Schlüssel, öffentliche Privatsphäre, Psk usw. Ignoriere alle Schlüssel, öffentliche Privatsphäre, Psk usw. Wir hatten keine Probleme, alle Schlüssel innerhalb einer Konfiguration zu halten.

### OpenVPN

1. Fügen Sie die zwei folgenden Zeilen Ihrer Konfiguration hinzu
    - `pull-filter ignorieren "ifconfig-ipv6"`

    - `pull-filter ignorieren "route-ipv6"`

    Diese beiden Zeilen stellen sicher, dass IPv6 ignoriert wird, was für eine stabile VPN-Verbindung entscheidend ist.

Hinweis Die zwei hinzugefügten Zeilen Hier ist ein Beispiel OpenVPN-Konfiguration

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

## Konfiguration bearbeiten

Der nächste Schritt aktiviert das Addon in unserer Bearbeitungskonfiguration

1. GUI skalieren
    1. Apps
    2. Installierte Anwendungen
2. Finde die App die du möchtest, Klicke rechts von deiner Anwendung auf die Top 3 Punkte
    1. `Bearbeiten`
    2. Scrolle nach unten, bis du `Addons` siehst
    3. Klicken Sie auf das Dropdown-Menü unter `Typ`
    4. Wireguard oder OpenVPN auswählen
        1. OpenVPN
            - Geben Sie Ihre Zugangsdaten für Ihren vpn Provider ein.
    5. Aktiviere "Killswitch"
        - `Hinzufügen` neben `Killswitch einrichten Ausgeschlossene IPv4-Netzwerke`
        - Klicken Sie auf `Hinzufügen` für EACH-Netzwerk.
        - `172.16.0.0/16` ist das Standard-Kubernetes Netzwerk, du möchtest dies in deinem KillSwitch, damit kubernetes trotzdem mit der Anwendung kommunizieren kann
        - `192.168.0.0/24` ist mein persönliches LAN, dies muss dort sein, damit DU mit dem Container kommunizieren kann
    6. Schließlich, fügen Sie den Dateipfad hinzu, in dem Sie Ihre geänderte Konfigurationsdatei gespeichert haben
        - EX: `/mnt/speed/vpn/wireguard/jackett2.conf`

Inzwischen sollte dein Bildschirm so aussehen: ![vpn1](/img/vpn/vpn1.png)

## Video-Leitfaden

![typ:video](https://www.youtube.com/embed/zSNApt-Ojng)
