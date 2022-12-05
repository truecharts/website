# Installation Guide

## Dataset Structure

This is the location your completed bittorrent files will be located

Typical setting user:group to `apps`, nothing fancy here

- Placed the created `nzb` dataset within the `downloads` folder

??? Note "Note"
The `apps`:`apps` user:group is built into Truenas SCALE, it is the default user for most applications on Truenas SCALE. You do not have to create a separate user for each application.

    When configuring your application you'll typically see user:group `568`, this is the UID for `apps` and its recommended not to change it.

![!Dataset: Tube](images/dataset.png)

<br />

## App Installation

### Networking

If you want to use ingress, its probably better to use `clusterIP` instead of `Simple`

![!Networking: qbittorrent](images/networking.png)

#### WebGUI

We left this default since there was no reason to change the WebGUI port

This is ALSO the port Sonarr/Radarr and other services will use to connect to qBittorrent

![!Networking: qbittorrent](images/networking_webgui.png)

#### Listening Ports

??? VPN "With VPN" - No need to port forward on your router - If you want fast seeding, you will need a service that supports port forwarding - We use Mullvad, Set the TCP Listening Port in Qbit webui (Tools > Options > Connection) to the port allocated by Mullvad

??? NOVPN "Without VPN" - You can leave the two ports default without a VPN - If you want fast seeding though, you will need to port forward this port on your router

![!Networking: qbittorrent](images/networking_listening.png)

<br />

### Storage

#### Configuration

The setup is default

![!Storage: NZBGet](images/storage_config.png)

#### Data

I always mount to the root directory of the container

I also try to use the applications name for the mountpath, since its typically never going to be a file or folder thats already present

![!Storage: NZBGet](images/storage_data.png)

<br />

### VPN

- Using a Wireguard setup
- Added the kubernetes network, as well as my LAN network to the killswitch

![!Storage: NZBGet](images/vpn.png)

<br />

## In-App Setup

### Downloads

??? qBittorrent "qBittorrent Table + Explanation"

    |          Setting                                   |         Value                  |          Explanation                                                                |
    |------------------------------------------------    |----------------------------    |----------------------------------------------------------------------------------    |
    | Default Torrent Management Mode:                  | Automatic                     | This is to automatically move the files torrents based on catagory                |
    | When Torrent Category changed:                     | Relocate Torrent               | This is to automatically move the files torrents based on catagory                   |
    | When Default Save Path changed:                    | Relocate Affected Torrents     | This is to automatically move the files torrents based on catagory                   |
    | When Category Save Path changed:                   | Relocate Affected Torrents     | This is to automatically move the files torrents based on catagory                   |
    | Default Save Path:                                 | `/qbitvpn/complete `             | Set this to what you set your dataset mountpoint as                                  |
    | Keep incomplete torrents in:                       | `/qbitvpn/temp`                  | Keep incomplete torrents in a folder no apps are monitoring                          |
    | Copy .torrent files for finished downloads to:     | `/qbitvpn/backup`                | Its nice to have a backup folder of all your `.torrents` in the event of a crash     |
    | Monitored Folder                                   | `/qbitvpn/monitor`               | Place `.torrent` files in this directory to automatically start those torrents       |

![!Downloads: qbit](images/settings_downloads.png)

<br />

### Connection

This should equal to your listening port you set [during the installation](https://heavysetup.info/applications/qbittorrent/installation/#listening-ports)

![!Connection: qbit](images/settings_connection.png)

<br />

### Speed

- Set `Alternative Rate Limits` to `10000` KiB

  - This is so during the day, or when users are using my Plex server, my qBittorrent instance isn't using _ALL_ of my bandwidth seeding

- Set my schedule from `08:00` to `02:00`
  - 8am to 2am, which is around the time users are watching Plex

![!Speed: qbit](images/settings_speed.png)

<br />

### BitTorrent

- Disabled `Local Peer Discovery`
  - This is only useful if you are on a huge network, like a college campus or something like that

![!Speed: qbit](images/settings_bittorrent.png)

<br />

### WebGUI

- Changed the password to something We would remember

Added both my LAN and Kubernetes LAN to the bypass list, this way neither of them have to authenticate, it gets annoying to log in over and over on your own network

**Bypass authentication for clients in whitelisted IP subnets**

```
192.168.0.0/16
172.16.0.0/16
```

![!Speed: qbit](images/settings_webgui1.png)

Since We am using `Traefik`, We decided to add the Kubernetes LAN to:

**Enable reverse proxy support**

```
172.16.0.0/16
```

![!Speed: qbit](images/settings_webgui2.png)

<br />

### Advanced

??? qBittorrent "qBittorrent Table + Explanation"

    |          Setting                                                       |         Value         |          Explanation                                                                    |
    |------------------------------------------------                        |-----------------------|----------------------------------------------------------------------------------        |
    | Network interface:                                                       | `wg0` or `tun0`       | Bind this to `wg0` or `tun0` if you are using Wireguard (wg0) or Openvpn(tun0)        |
    | Optional IP address to bind to:                                          | All Ipv4 Addresses     | Kubernetes doesnt support ipv6 now anyway so, We set this to just ipv4                   |
    | Resolve peer countries:                                                  | True                   | Just so We can see what countries We am leeching/seeding from                             |
    | Reannounce to all trackers when IP or port changed:                      | True                   | In the event my IP or port changes, We want everyone to know, so We can seed or leech     |

![!Speed: qbit](images/settings_advanced.png)

<br />
