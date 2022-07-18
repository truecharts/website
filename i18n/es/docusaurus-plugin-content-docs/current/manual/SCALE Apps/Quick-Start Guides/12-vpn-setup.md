# 12 - VPN Addon Setup

## Prerrequisitos

1. Asegúrate de que Internet para el contenedor funciona PRIOR para añadir la conexión VPN
2. Obtener una configuración Wireguard o un archivo de configuración OpenVPN
    - Wireguard termina en un .conf
    - OpenVPN termina en un .ovpn
3. Conozca tanto su red de kubernetes como su LAN personal

## Preparando archivos de configuración

### Wireguard

1. Eliminar toda la línea que contiene "DNS"
2. Eliminar todas las menciones de IPv6
    - Normalmente después de las direcciones IPv4
    - `::/0` es la sintaxis IPv6.

Aquí hay un ejemplo de configuración de Wireguard. Tenga en cuenta las direcciones IPv6 eliminadas, y la línea DNS eliminada.

```text
[Interface]
PrivateKey = cFuYkobFFgdfghdffdghdfghdfghdfgh
Dirección = 10.64.48.226/32

[Peer]
Clave pública = Casdfgsdfghsdfghsdfghsdfghsdfghs
AllowedI = 0.0.0.0/0
Endpoint = 198.54.128.58:51820
```

#### Información adicional

Ignorar cualquier clave, privado público, psk, etc. No hemos tenido ningún problema guardando todas las claves dentro de una configuración.

### OpenVPN

1. Añade las dos siguientes líneas a tu configuración
    - `pull-filter ignorar "ifconfig-ipv6"`

    - `pull-filtro ignorar "ruta-ipv6"`

    Estas dos líneas asegurarán que IPv6 sea ignorado, lo que es vital para una conexión VPN estable.

Tenga en cuenta las dos líneas añadidas Aquí hay un ejemplo de configuración OpenVPN

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

## Editar configuración

El siguiente paso habilita el complemento en nuestra configuración de edición

1. GUI de escala
    1. Aplicaciones
    2. Aplicaciones instaladas
2. Encuentra la aplicación que quieras, haz clic en los 3 primeros puntos a la derecha de tu aplicación
    1. Haga clic en `Editar`
    2. Desplácese hasta la parte inferior hasta que vea `complementos`
    3. Haga clic en el menú desplegable debajo de `Tipo`
    4. Elegir Wireguard o OpenVPN
        1. OpenVPN
            - Escribe tus credenciales para tu proveedor de vpn.
    5. Marca "Activar Killswitch"
        - Haga clic en `Añadir` Al lado de `Configurar Killswitch Excluido redes IPv4`
        - Haga clic en `Añadir` para la red EACH.
        - `172.16.0.0/16` es la red de Kubernetes por defecto, quieres esto en tu killswitch para que kubernetes pueda comunicarse con la aplicación
        - `192.168.0.0/24` es mi LAN, esto tiene que estar ahí para que TU pueda comunicarse con el contenedor
    6. Finalmente, añada la ruta del archivo donde guardó el archivo de configuración modificado
        - EX: `/mnt/speed/vpn/wireguard/jackett2.conf`

A estas alturas, tu pantalla debería verse algo así: ![vpn1](/img/vpn/vpn1.png)

## Guía de vídeo

![tipo:vídeo](https://www.youtube.com/embed/zSNApt-Ojng)
