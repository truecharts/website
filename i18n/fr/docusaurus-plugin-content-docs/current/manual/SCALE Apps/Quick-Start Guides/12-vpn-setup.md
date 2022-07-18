# 12 - VPN Addon Setup

## Pré-requis

1. Assurez-vous qu'Internet pour le conteneur fonctionne PRIOR pour ajouter la connexion VPN
2. Obtenez une configuration Wireguard ou un fichier de configuration OpenVPN
    - Wireguard se termine dans un .conf
    - OpenVPN se termine par un .ovpn
3. Connaissez votre LAN kubernetes et votre LAN personnel

## Préparation des fichiers de configuration

### Garde-filet

1. Supprimer toute la ligne qui contient "DNS"
2. Supprimer toutes les mentions d'IPv6
    - Habituellement après les adresses IPv4
    - `::/0` est la syntaxe IPv6.

Voici un exemple de configuration de Wireguard Notez les adresses IPv6 supprimées et la ligne DNS Supprimée.

```text
[Interface]
PrivateKey = cFuYkobFFgdfghdffdghdfghdfghdfghdfghdfgh
Adresse = 10.64.48.226/32

[Peer]
Clé publique = Casdfgsdfghsdfghsdfghsdfghs
Autorisés IPs = 0.0.0.0/0
Point d'extrémité = 198.54.128.58:51820
```

#### Informations supplémentaires

Ignorer toute clé, privé public, psk, etc. Nous n'avons eu aucun problème à garder toutes les clés dans une configuration.

### OpenVPN

1. Ajoutez les deux lignes suivantes à votre configuration
    - `pull-filter ignore "ifconfig-ipv6"`

    - `pull-filter ignore "route-ipv6"`

    Ces deux lignes assureront que IPv6 est ignoré, ce qui est vital pour une connexion VPN stable.

Note Les deux lignes ajoutées Voici un exemple de configuration OpenVPN

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

## Modifier la configuration

L'étape suivante permet d'activer le module dans notre configuration d'édition

1. Échelle de l'interface
    1. Applications
    2. Applications installées
2. Trouvez l'application que vous voulez, cliquez sur les 3 premiers points à droite de votre application
    1. Cliquez sur `Modifier`
    2. Faites défiler vers le bas jusqu'à ce que vous voyez `Addons`
    3. Cliquez sur le menu déroulant sous `Tapez`
    4. Choisissez Wireguard ou OpenVPN
        1. OpenVPN
            - Tapez vos identifiants pour votre fournisseur VPN
    5. Cochez "Activer le commutateur de Kill"
        - Cliquez sur `Ajouter` Suivant à `Configurer les réseaux IPv4 exclus de Killswitch`
        - Cliquez sur `Ajouter` pour le réseau EACH.
        - `172.16.0.0/16` est le réseau par défaut de Kubernetes, vous voulez cela dans votre killswitch pour que kubernetes puisse toujours communiquer avec l'application
        - `192.168.0.0/24` est mon réseau local personnel, cela doit y être pour que VOUS puissiez communiquer avec le conteneur
    6. Enfin, ajoutez le chemin d'accès où vous avez sauvegardé votre fichier de configuration modifié
        - EX: `/mnt/speed/vpn/wireguard/jackett2.conf`

Maintenant, ton écran devrait ressembler à ceci : ![vpn1](/img/vpn/vpn1.png)

## Guide Vidéo

![type:vidéo](https://www.youtube.com/embed/zSNApt-Ojng)
