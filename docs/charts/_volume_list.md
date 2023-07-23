---
sidebar_position: 3
---
# Mounted Volumes

This document lists the mounted volumes for each App.
The intro needs improvement ;)

## Stable

| App | Volume Name | Type | Host Path | Mount Path | Mode | Status |
|:----|:-----------:|:----:|:----------|:-----------|:----:|:------:|
|actualserver              |server-files          |PVC      |-              |/app/server-files                                    |Read/Write|Enabled                |
|actualserver              |user-files            |PVC      |-              |/app/user-files                                      |Read/Write|Enabled                |
|adguard-home              |config                |PVC      |-              |/opt/adguardhome/conf                                |Read/Write|Enabled                |
|adguard-home              |data                  |PVC      |-              |/opt/adguardhome/work                                |Read/Write|Enabled                |
|adminer                   |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|airdcpp-webclient         |config                |PVC      |-              |/.airdcpp                                            |Read/Write|Enabled                |
|airsonic                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|airsonic-advanced         |config                |PVC      |-              |/airsonic                                            |Read/Write|Enabled                |
|airsonic-advanced         |music                 |PVC      |-              |/music                                               |Read/Write|Enabled                |
|airsonic-advanced         |podcasts              |PVC      |-              |/podcasts                                            |Read/Write|Enabled                |
|airsonic-advanced         |playlists             |PVC      |-              |/playlists                                           |Read/Write|Enabled                |
|alist                     |data                  |PVC      |-              |/opt/alist/data                                      |Read/Write|Enabled                |
|amcrest2mqtt              |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|amule                     |complete              |PVC      |-              |/incoming                                            |Read/Write|Enabled                |
|amule                     |config                |PVC      |-              |/home/amule/.aMule                                   |Read/Write|Enabled                |
|amule                     |incomplete            |PVC      |-              |/temp                                                |Read/Write|Enabled                |
|anonaddy                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|apache-musicindex         |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|appdaemon                 |conf                  |PVC      |-              |/conf                                                |Read/Write|Enabled                |
|apt-cacher-ng             |apt-cacher-ng         |PVC      |-              |/var/cache/apt-cacher-ng                             |Read/Write|Enabled                |
|aria2                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ariang                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|audacity                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|audiobookshelf            |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|audiobookshelf            |audiobooks            |PVC      |-              |/audiobooks                                          |Read/Write|Enabled                |
|audiobookshelf            |metadata              |PVC      |-              |/metadata                                            |Read/Write|Enabled                |
|autobrr                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|automatic-music-downloader|config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|automatic-music-downloader|data                  |PVC      |-              |/downloads-amd                                       |Read/Write|Enabled                |
|autoscan                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|avidemux                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|avidemux                  |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|babybuddy                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|baserow                   |data                  |PVC      |-              |/baserow/data                                        |Read/Write|Enabled                |
|bazarr                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|beets                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|blog                      |data                  |PVC      |-              |/var/www/html/data                                   |Read/Write|Enabled                |
|boinc                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|booksonic-air             |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|bookstack                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|browserless-chrome        |downloads             |PVC      |-              |/downloads                                           |Read/Write|Enabled                |
|browserless-chrome        |metrics               |PVC      |-              |/metrics                                             |Read/Write|Enabled                |
|budge                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|calibre                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|calibre-web               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|channels-dvr              |config                |PVC      |-              |/channels-dvr                                        |Read/Write|Enabled                |
|channels-dvr              |recordings            |PVC      |-              |/shares/DVR                                          |Read/Write|Enabled                |
|chevereto                 |storage               |PVC      |-              |/var/www/html/images/                                |Read/Write|Enabled                |
|chevereto                 |content               |PVC      |-              |/var/www/html/content/                               |Read/Write|Enabled                |
|chronos                   |chronos               |PVC      |-              |/chronos                                             |Read/Write|Enabled                |
|clamav                    |sigdatabase           |PVC      |-              |/var/lib/clamav                                      |Read/Write|Enabled                |
|clamav                    |scandir               |PVC      |-              |/scandir                                             |Read Only |Enabled                |
|clamav                    |logs                  |PVC      |-              |/logs                                                |Read/Write|Enabled                |
|clarkson                  |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|cloud9                    |code                  |PVC      |-              |/code                                                |Read/Write|Enabled                |
|cloudflared               |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|cloudflareddns            |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|code-server               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|collabora                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|commento-plusplus         |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|cops                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|cops                      |books                 |PVC      |-              |/books                                               |Read/Write|Enabled                |
|couchpotato               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|crafty-4                  |config                |PVC      |-              |/crafty/app/config                                   |Read/Write|Enabled                |
|crafty-4                  |servers               |PVC      |-              |/crafty/servers                                      |Read/Write|Enabled                |
|crafty-4                  |logs                  |PVC      |-              |/crafty/logs                                         |Read/Write|Enabled                |
|crafty-4                  |import                |PVC      |-              |/crafty/import                                       |Read/Write|Enabled                |
|crafty-4                  |backups               |PVC      |-              |/crafty/backups                                      |Read/Write|Enabled                |
|cryptofolio               |data                  |PVC      |-              |/var/www/html/api/data                               |Read/Write|Enabled                |
|cura-novnc                |homefolder            |PVC      |-              |/home/cura/                                          |Read/Write|Enabled                |
|cura-novnc                |prints                |PVC      |-              |/prints/                                             |Read/Write|Enabled                |
|custom-app                |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|cyberchef                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|czkawka                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|czkawka                   |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|czkawka                   |trash                 |PVC      |-              |/trash                                               |Read/Write|Enabled                |
|dashdot                   |host-mnt              |hostPath |/              |/mnt/host                                            |Read Only |Enabled                |
|dashdot                   |mem                   |hostPath |/dev/mem       |/dev/mem                                             |Read Only |Enabled                |
|davos                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ddclient                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ddns-go                   |data                  |PVC      |-              |/root                                                |Read/Write|Enabled                |
|ddns-updater              |data                  |PVC      |-              |/updater/data                                        |Read/Write|Enabled                |
|deconz                    |config                |PVC      |-              |/opt/deCONZ                                          |Read/Write|Enabled                |
|deemix                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|deemix                    |data                  |PVC      |-              |/downloads                                           |Read/Write|Enabled                |
|deepstack                 |data                  |PVC      |-              |/datastore                                           |Read/Write|Enabled                |
|deepstack                 |modelstore            |PVC      |-              |/modelstore/detection                                |Read/Write|Enabled                |
|dell-idrac-fan-controller |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|deluge                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|digikam                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|dillinger                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|discordgsm                |config                |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|dizquetv                  |config                |PVC      |-              |/home/node/app/.dizquetv                             |Read/Write|Enabled                |
|docker-compose            |docker-certs-ca       |PVC      |-              |/config                                              |Read/Write|Enabled                |
|docusaurus                |config                |PVC      |-              |/docusaurus                                          |Read/Write|Enabled                |
|dokuwiki                  |config                |PVC      |-              |/bitnami/dokuwiki                                    |Read/Write|Enabled                |
|domoticz                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|doplarr                   |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|double-take               |data                  |PVC      |-              |/.storage                                            |Read/Write|Enabled                |
|doublecommander           |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|drawio                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|duckdns                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|duplicati                 |config                |PVC      |-              |/data                                                |Read/Write|Enabled                |
|emby                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|embystat                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|emulatorjs                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|emulatorjs                |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|endlessh                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|esphome                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|esphome                   |platformio            |PVC      |-              |/.platformio                                         |Read/Write|Enabled                |
|etesync                   |app                   |PVC      |-              |/data                                                |Read/Write|Enabled                |
|etesync                   |secret                |secret   |-              |/data/secret.txt                                     |Read Only |Enabled                |
|etherpad                  |data                  |PVC      |-              |/opt/etherpad-lite/var                               |Read/Write|Enabled                |
|etherpad                  |app                   |PVC      |-              |/opt/etherpad-lite/app                               |Read/Write|Enabled                |
|external-service          |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|ferdi-server              |data                  |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|ferdi-server              |recipes               |PVC      |-              |/app/recipes                                         |Read/Write|Enabled                |
|filebot                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|filebot                   |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|filebot                   |watch                 |PVC      |-              |/watch                                               |Read/Write|Enabled                |
|filebot                   |output                |PVC      |-              |/output                                              |Read/Write|Enabled                |
|filebrowser               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|filebrowser               |database              |PVC      |-              |/database                                            |Read/Write|Enabled                |
|filebrowser               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|fileflows                 |data                  |PVC      |-              |/app/Data                                            |Read/Write|Enabled                |
|fileflows                 |logs                  |PVC      |-              |/app/Logs                                            |Read/Write|Enabled                |
|fileflows                 |temp                  |PVC      |-              |/temp                                                |Read/Write|Enabled                |
|fileflows                 |media                 |PVC      |-              |/media                                               |Read/Write|Enabled                |
|fireflyiii                |data                  |PVC      |-              |/var/www/html/storage/upload                         |Read/Write|Enabled                |
|firefox                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|firefox                   |varrun                |emptyDir |-              |-                                                    |Read/Write|Persistence is Disabled|
|firefox-syncserver        |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|flaresolverr              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|fleet                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|fleet                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|flexget                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|flexget                   |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|flood                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|fluidd                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|foldingathome             |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|foldingathome             |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|fossil                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|freeradius                |config                |PVC      |-              |/etc/raddb                                           |Read/Write|Enabled                |
|freshrss                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|friendica                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|friendica                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|friendica                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|frigate                   |media                 |PVC      |-              |/media                                               |Read/Write|Enabled                |
|frigate                   |config                |PVC      |-              |-                                                    |Read/Write|Persistence is Disabled|
|gamevault-backend         |logs                  |PVC      |-              |/logs                                                |Read/Write|Enabled                |
|gamevault-backend         |images                |PVC      |-              |/images                                              |Read/Write|Enabled                |
|gamevault-backend         |games                 |PVC      |-              |/games                                               |Read/Write|Enabled                |
|gaps                      |data                  |PVC      |-              |/usr/data                                            |Read/Write|Enabled                |
|gitea                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|gitea                     |varlib                |emptyDir |-              |/var/lib/gitea                                       |Read/Write|Enabled                |
|golinks                   |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|golinks                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|gonic                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|grav                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|grav                      |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|grocy                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|guacd                     |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|hammond                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|hammond                   |assets                |PVC      |-              |/assets                                              |Read/Write|Enabled                |
|handbrake                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|handbrake                 |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|handbrake                 |output                |PVC      |-              |/output                                              |Read/Write|Enabled                |
|haste-server              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|headphones                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|headphones                |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|healthchecks              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|hedgedoc                  |uploads               |PVC      |-              |/hedgedoc/public/uploads                             |Read/Write|Enabled                |
|heimdall                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|homarr                    |config                |PVC      |-              |/app/data/configs                                    |Read/Write|Enabled                |
|homarr                    |icons                 |PVC      |-              |/app/public/icons                                    |Read/Write|Enabled                |
|home-assistant            |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|home-assistant            |init                  |configmap|-              |/config/init                                         |Read Only |Enabled                |
|homebox                   |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|homelablabelmaker         |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|homepage                  |config                |PVC      |-              |/app/config                                          |Read/Write|Enabled                |
|homer                     |config                |PVC      |-              |/www/assets                                          |Read/Write|Enabled                |
|htpcmanager               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|htpcmanager               |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|hyperion-ng               |config                |PVC      |-              |/root/.hyperion                                      |Read/Write|Enabled                |
|immich                    |mlcache               |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|immich                    |microcache            |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|immich                    |typesense             |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|immich                    |library               |PVC      |-              |/usr/src/app/upload/library                          |Read/Write|Enabled                |
|immich                    |uploads               |PVC      |-              |/usr/src/app/upload/upload                           |Read/Write|Enabled                |
|immich                    |thumbs                |PVC      |-              |/usr/src/app/upload/thumbs                           |Read/Write|Enabled                |
|immich                    |profile               |PVC      |-              |/usr/src/app/upload/profile                          |Read/Write|Enabled                |
|immich                    |video                 |PVC      |-              |/usr/src/app/upload/encoded-video                    |Read/Write|Enabled                |
|impostor-server           |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|invidious                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|ipfs                      |data                  |PVC      |-              |/data/ipfs                                           |Read/Write|Enabled                |
|ipfs                      |staging               |PVC      |-              |/export                                              |Read/Write|Enabled                |
|ipfs                      |ipfs                  |PVC      |-              |/ipfs                                                |Read/Write|Enabled                |
|ipfs                      |ipns                  |PVC      |-              |/ipns                                                |Read/Write|Enabled                |
|ispy-agent-dvr            |config                |PVC      |-              |/agent/Media/XML                                     |Read/Write|Enabled                |
|ispy-agent-dvr            |media                 |PVC      |-              |/agent/Media/WebServerRoot/Media                     |Read/Write|Enabled                |
|ispy-agent-dvr            |commands              |PVC      |-              |/agent/Commands                                      |Read/Write|Enabled                |
|iyuuplus                  |config                |PVC      |-              |/IYUU/db                                             |Read/Write|Enabled                |
|iyuuplus                  |torrents              |PVC      |-              |/torrents                                            |Read/Write|Enabled                |
|iyuuplus                  |btbackup              |PVC      |-              |/BT_backup                                           |Read/Write|Enabled                |
|jackett                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|jdownloader2              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|jdownloader2              |output                |PVC      |-              |/output                                              |Read/Write|Enabled                |
|jellyfin                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|jellyfin                  |cache                 |emptyDir |-              |/cache                                               |Read/Write|Enabled                |
|jellyfin                  |transcode             |emptyDir |-              |/config/transcodes                                   |Read/Write|Enabled                |
|jellyseerr                |config                |PVC      |-              |/app/config                                          |Read/Write|Enabled                |
|jupyter                   |data                  |PVC      |-              |/home/jovyan/work                                    |Read/Write|Enabled                |
|kanboard                  |data                  |PVC      |-              |/var/www/app/data                                    |Read/Write|Enabled                |
|kanboard                  |ssl                   |PVC      |-              |/etc/nginx/ssl                                       |Read/Write|Enabled                |
|kasm                      |data                  |PVC      |-              |/opt                                                 |Read/Write|Enabled                |
|kasm                      |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|kavita                    |config                |PVC      |-              |/kavita/config                                       |Read/Write|Enabled                |
|kavita                    |manga                 |PVC      |-              |/manga                                               |Read/Write|Enabled                |
|kitchenowl                |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|kiwix-serve               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|kms                       |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|kodi-headless             |config                |PVC      |-              |/config/.kodi                                        |Read/Write|Enabled                |
|kodi-headless             |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|komga                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|komga                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|lama-cleaner              |torch                 |PVC      |-              |/root/.cache/torch                                   |Read/Write|Enabled                |
|lama-cleaner              |huggingface           |PVC      |-              |/root/.cache/huggingface                             |Read/Write|Enabled                |
|lancache-dns              |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|lancache-monolithic       |config                |PVC      |-              |/data                                                |Read/Write|Enabled                |
|lancache-monolithic       |logs                  |PVC      |-              |/data/logs                                           |Read/Write|Enabled                |
|lanraragi                 |config                |PVC      |-              |/home/koyomi/lanraragi/database                      |Read/Write|Enabled                |
|lanraragi                 |content               |PVC      |-              |/home/koyomi/lanraragi/content                       |Read/Write|Enabled                |
|lazylibrarian             |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|lazylibrarian             |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|leaf2mqtt                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|libreddit                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|libremdb                  |config                |PVC      |-              |/opt/app                                             |Read/Write|Enabled                |
|librespeed                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|lidarr                    |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|linkding                  |data                  |PVC      |-              |/etc/linkding/data                                   |Read/Write|Enabled                |
|littlelink                |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|lldap                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|logitech-media-server     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|makemkv                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|makemkv                   |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|makemkv                   |output                |PVC      |-              |/output                                              |Read/Write|Enabled                |
|matomo                    |data                  |PVC      |-              |/bitnami/matomo                                      |Read/Write|Enabled                |
|mattermost                |config                |PVC      |-              |/mattermost/config                                   |Read/Write|Enabled                |
|mattermost                |data                  |PVC      |-              |/mattermost/data                                     |Read/Write|Enabled                |
|mattermost                |logs                  |PVC      |-              |/mattermost/logs                                     |Read/Write|Enabled                |
|mattermost                |plugins               |PVC      |-              |/mattermost/plugins                                  |Read/Write|Enabled                |
|mattermost                |clientplugins         |PVC      |-              |/mattermost/client/plugins                           |Read/Write|Enabled                |
|mattermost                |bleveindexes          |PVC      |-              |/mattermost/bleve-indexes                            |Read/Write|Enabled                |
|mc-router                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|mealie                    |data                  |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|mediainfo                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mediainfo                 |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|medusa                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|medusa                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|meshcentral               |data                  |PVC      |-              |/opt/meshcentral/meshcentral-data                    |Read/Write|Enabled                |
|meshcentral               |files                 |PVC      |-              |/opt/meshcentral/meshcentral-files                   |Read/Write|Enabled                |
|meshcentral               |web                   |PVC      |-              |/opt/meshcentral/meshcentral-web                     |Read/Write|Enabled                |
|meshcentral               |backups               |PVC      |-              |/opt/meshcentral/meshcentral-backup                  |Read/Write|Enabled                |
|meshcentral               |configfile            |secret   |-              |/opt/meshcentral/meshcentral-data/config.json        |Read Only |Enabled                |
|meshroom                  |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|metube                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|metube                    |downloads             |PVC      |-              |/downloads                                           |Read/Write|Enabled                |
|minecraft-bedrock         |config                |PVC      |-              |/data                                                |Read/Write|Enabled                |
|minecraft-bungeecord      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|minecraft-bungeecord      |server                |PVC      |-              |/server                                              |Read/Write|Enabled                |
|minecraft-bungeecord      |plugins               |PVC      |-              |/plugins                                             |Read/Write|Enabled                |
|minecraft-java            |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|minetest                  |config                |PVC      |-              |/config/.minetest                                    |Read/Write|Enabled                |
|minetest                  |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|minio                     |config                |PVC      |-              |/data                                                |Read/Write|Enabled                |
|minio-console             |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|minio-console             |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|minisatip                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|minisatip                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|mkvcleaver                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mkvcleaver                |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|mkvtoolnix                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mkvtoolnix                |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|mongo-express             |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|monica                    |config                |PVC      |-              |/var/www/html/storage                                |Read/Write|Enabled                |
|mosdns                    |data                  |PVC      |-              |/etc/mosdns                                          |Read/Write|Enabled                |
|mosquitto                 |data                  |PVC      |-              |/mosquitto/data                                      |Read/Write|Enabled                |
|mosquitto                 |configinc             |PVC      |-              |/mosquitto/configinc                                 |Read/Write|Enabled                |
|mosquitto                 |mosquitto-config      |configmap|-              |/mosquitto/config/mosquitto.conf                     |Read/Write|Enabled                |
|mstream                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mstream                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|muse                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|muximux                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|muximux                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|mylar                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mylar                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|mymediaforalexa           |data                  |PVC      |-              |/datadir                                             |Read/Write|Enabled                |
|mymediaforalexa           |media                 |PVC      |-              |/medialibrary                                        |Read/Write|Enabled                |
|mysql-workbench           |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|mysql-workbench           |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|n8n                       |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|nano-wallet               |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|navidrome                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|navidrome                 |music                 |PVC      |-              |/music                                               |Read/Write|Enabled                |
|netdata                   |config                |PVC      |-              |/etc/netdata                                         |Read/Write|Enabled                |
|netdata                   |lib                   |PVC      |-              |/var/lib/netdata                                     |Read/Write|Enabled                |
|netdata                   |cache                 |PVC      |-              |/var/cache/netdata                                   |Read/Write|Enabled                |
|netdata                   |passwd                |hostPath |/etc/passwd    |/host/etc/passwd                                     |Read Only |Enabled                |
|netdata                   |group                 |hostPath |/etc/group     |/host/etc/group                                      |Read Only |Enabled                |
|netdata                   |proc                  |hostPath |/proc          |/host/proc                                           |Read Only |Enabled                |
|netdata                   |dev                   |hostPath |/dev           |/host/dev                                            |Read Only |Enabled                |
|netdata                   |sys                   |hostPath |/sys           |/host/sys                                            |Read Only |Enabled                |
|netdata                   |os                    |hostPath |/etc/os-release|/host/etc/os-release                                 |Read Only |Enabled                |
|netdata                   |netdata-configs       |configmap|-              |/etc/netdata/truecharts-defaults/.netdata.conf       |Read/Write|Enabled                |
|netdata                   |go-d-configs          |configmap|-              |/etc/netdata/truecharts-defaults/.go.d.conf          |Read/Write|Enabled                |
|netdata                   |go-d-k8s-state-configs|configmap|-              |/etc/netdata/truecharts-defaults/go.d/.k8s_state.conf|Read/Write|Enabled                |
|nextcloud                 |php-tune              |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |redis-session         |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |nginx                 |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |nginx-temp            |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |html                  |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextcloud                 |data                  |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|nextpvr                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|nextpvr                   |recordings            |PVC      |-              |/recordings                                          |Read/Write|Enabled                |
|nextpvr                   |buffer                |PVC      |-              |/buffer                                              |Read/Write|Enabled                |
|nginx-proxy-manager       |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|nginx-proxy-manager       |letsencrypt           |PVC      |-              |/etc/letsencrypt                                     |Read/Write|Enabled                |
|ngircd                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ngircd                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|nntp2nntp                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|nntp2nntp                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|nocodb                    |data                  |PVC      |-              |/usr/app/data                                        |Read/Write|Enabled                |
|node-red                  |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|novnc                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|ntfy                      |config                |PVC      |-              |/etc/ntfy                                            |Read/Write|Enabled                |
|ntfy                      |cache                 |PVC      |-              |/var/cache/ntfy                                      |Read/Write|Enabled                |
|nullserv                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|nzbget                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|nzbhydra                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|octoprint                 |data                  |PVC      |-              |/octoprint                                           |Read/Write|Enabled                |
|octoprint                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|odoo                      |odoo                  |PVC      |-              |/var/lib/odoo                                        |Read/Write|Enabled                |
|odoo                      |addons                |PVC      |-              |/mnt/extra-addons                                    |Read/Write|Enabled                |
|omada-controller          |data                  |PVC      |-              |/opt/tplink/EAPController/data                       |Read/Write|Enabled                |
|omada-controller          |work                  |PVC      |-              |/opt/tplink/EAPController/work                       |Read/Write|Enabled                |
|ombi                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|onlyoffice-document-server|-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|openhab                   |config                |PVC      |-              |/openhab/conf                                        |Read/Write|Enabled                |
|openhab                   |addons                |PVC      |-              |/openhab/addons                                      |Read/Write|Enabled                |
|openhab                   |userdata              |PVC      |-              |/openhab/userdata                                    |Read/Write|Enabled                |
|openhab                   |init                  |configmap|-              |/etc/cont-init.d/enable-console-logging.sh           |Read/Write|Enabled                |
|openspeedtest             |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|openvscode-server         |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|openvscode-server         |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|organizr                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|organizr                  |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|oscam                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|oscam                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|outline                   |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|overseerr                 |config                |PVC      |-              |/app/config                                          |Read/Write|Enabled                |
|owncast                   |config                |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|paperless-ngx             |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|paperless-ngx             |consume               |PVC      |-              |/consume                                             |Read/Write|Enabled                |
|paperless-ngx             |media                 |PVC      |-              |/media                                               |Read/Write|Enabled                |
|paperless-ngx             |varrun                |emptyDir |-              |-                                                    |Read/Write|Persistence is Disabled|
|papermerge                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|papermerge                |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|pasta                     |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|pgadmin                   |config                |PVC      |-              |/var/lib/pgadmin                                     |Read/Write|Enabled                |
|photoprism                |storage               |PVC      |-              |/assets                                              |Read/Write|Enabled                |
|photoprism                |photoprismtemp        |emptyDir |-              |/photoprism_temp                                     |Read/Write|Enabled                |
|photoshow                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|photoshow                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|phpldapadmin              |varrun                |emptyDir |-              |-                                                    |Read/Write|Persistence is Disabled|
|picoshare                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|pihole                    |config                |PVC      |-              |/etc/pihole                                          |Read/Write|Enabled                |
|pihole                    |dnsmasq               |PVC      |-              |/etc/dnsmasq.d                                       |Read/Write|Enabled                |
|pinry                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|piwigo                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|piwigo                    |gallery               |PVC      |-              |/gallery                                             |Read/Write|Enabled                |
|piwigo                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|pixapop                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|pixapop                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|plaxt                     |config                |PVC      |-              |/app/keystore                                        |Read/Write|Enabled                |
|plex                      |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|plex-auto-languages       |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|plex-utills               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|plex-utills               |logs                  |PVC      |-              |/logs                                                |Read/Write|Enabled                |
|plex-utills               |plexlibrary           |PVC      |-              |/films                                               |Read/Write|Enabled                |
|podgrab                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|portainer                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|portainer                 |cache                 |emptyDir |-              |/.cache                                              |Read/Write|Enabled                |
|posterr                   |config                |PVC      |-              |/usr/src/app/config                                  |Read/Write|Enabled                |
|posterr                   |custom                |PVC      |-              |/usr/src/app/public/custom                           |Read/Write|Enabled                |
|postgresql                |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|pretend-youre-xyzzy       |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|projectsend               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|projectsend               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|projectsend               |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|promcord                  |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|prowlarr                  |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|prusaslicer-novnc         |configsfolder         |PVC      |-              |/configs/                                            |Read/Write|Enabled                |
|prusaslicer-novnc         |prints                |PVC      |-              |/prints/                                             |Read/Write|Enabled                |
|putty                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|pwndrop                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|pwndrop                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|pyload                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|pyload                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|pylon                     |code                  |PVC      |-              |/code                                                |Read/Write|Enabled                |
|pylon                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|qbitmanage                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|qbitmanage                |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|qbittorrent               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|qdirstat                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|qdirstat                  |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|qinglong                  |data                  |PVC      |-              |/ql/data                                             |Read/Write|Enabled                |
|quassel-core              |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|quassel-web               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|quassel-web               |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|radarr                    |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|rcon-webadmin             |db                    |PVC      |-              |/opt/rcon-web-admin/db                               |Read/Write|Enabled                |
|rdesktop                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|readarr                   |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|recyclarr                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|redmine                   |data                  |PVC      |-              |/usr/src/redmine/files                               |Read/Write|Enabled                |
|reg                       |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|remmina                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|remmina                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|requestrr                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|requestrr                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|resilio-sync              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|resilio-sync              |data                  |PVC      |-              |/sync                                                |Read/Write|Enabled                |
|resilio-sync              |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|retrobot                  |data                  |PVC      |-              |/retrobot/data                                       |Read/Write|Enabled                |
|ring-mqtt                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|romm                      |library               |PVC      |-              |/romm/library                                        |Read/Write|Enabled                |
|romm                      |resources             |PVC      |-              |/romm/resources                                      |Read/Write|Enabled                |
|rsnapshot                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|rsnapshot                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|rss-bridge                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|rsshub                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|sabnzbd                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|satisfactory              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|scrutiny                  |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|scrutiny                  |config                |PVC      |-              |/opt/scrutiny/config                                 |Read/Write|Enabled                |
|scrutiny                  |influxdb              |PVC      |-              |/opt/scrutiny/influxdb                               |Read/Write|Enabled                |
|scrutiny                  |udev                  |hostPath |/run/udev      |/run/udev                                            |Read Only |Enabled                |
|seafile                   |storage               |PVC      |-              |/shared/seafile                                      |Read/Write|Enabled                |
|ser2sock                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|shlink                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|shlink-web-client         |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|shoko-server              |appdata               |PVC      |-              |/home/shoko/.shoko/                                  |Read/Write|Enabled                |
|shorturl                  |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|shorturl                  |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|sickchill                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|sickchill                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|sickgear                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|sickgear                  |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|simply-shorten            |config                |PVC      |-              |/config/db                                           |Read/Write|Enabled                |
|smokeping                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|smokeping                 |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|snapdrop                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|snippet-box               |data                  |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|soft-serve                |config                |PVC      |-              |/soft-serve                                          |Read/Write|Enabled                |
|soft-serve                |ssh                   |PVC      |-              |/.ssh                                                |Read/Write|Enabled                |
|soft-serve                |repos                 |PVC      |-              |/repos                                               |Read/Write|Enabled                |
|sonarr                    |config                |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|speedtest-exporter        |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|spotweb                   |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|sqlitebrowser             |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|sqlitebrowser             |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|sshwifty                  |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|stash                     |config                |PVC      |-              |/root/.stash                                         |Read/Write|Enabled                |
|stash                     |cache                 |PVC      |-              |/cache                                               |Read/Write|Enabled                |
|stash                     |generated             |PVC      |-              |/generated                                           |Read/Write|Enabled                |
|stash                     |metadata              |PVC      |-              |/metadata                                            |Read/Write|Enabled                |
|stash                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|static                    |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|static                    |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|storj-node                |identity              |PVC      |-              |/app/identity                                        |Read/Write|Enabled                |
|storj-node                |storage               |PVC      |-              |/app/config                                          |Read/Write|Enabled                |
|strapi                    |data                  |PVC      |-              |/srv/app                                             |Read/Write|Enabled                |
|synclounge                |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|syncthing                 |config                |PVC      |-              |/var/syncthing                                       |Read/Write|Enabled                |
|synctube                  |storageconfig         |PVC      |-              |/usr/src/app/user                                    |Read/Write|Enabled                |
|syslog-ng                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|syslog-ng                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tailscale                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|tailscale                 |tun                   |hostPath |/dev/net/tun   |/dev/net/tun                                         |Read/Write|Enabled                |
|tautulli                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tdarr                     |configs               |PVC      |-              |/app/configs                                         |Read/Write|Enabled                |
|tdarr                     |server                |PVC      |-              |/app/server                                          |Read/Write|Enabled                |
|tdarr                     |logs                  |PVC      |-              |/app/logs                                            |Read/Write|Enabled                |
|tdarr                     |transcode-cache       |PVC      |-              |/temp                                                |Read/Write|Enabled                |
|tdarr                     |media                 |PVC      |-              |/media                                               |Read/Write|Enabled                |
|tdarr                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|tdarr-node                |configs               |PVC      |-              |/app/configs                                         |Read/Write|Enabled                |
|tdarr-node                |logs                  |PVC      |-              |/app/logs                                            |Read/Write|Enabled                |
|tdarr-node                |transcode-cache       |PVC      |-              |/temp                                                |Read/Write|Enabled                |
|tdarr-node                |media                 |PVC      |-              |/media                                               |Read/Write|Enabled                |
|tdarr-node                |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|teedy                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|thelounge                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|theme-park                |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tinymediamanager          |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|tinymediamanager          |movies                |PVC      |-              |/media/movies                                        |Read/Write|Enabled                |
|tinymediamanager          |tvshows               |PVC      |-              |/media/tvshows                                       |Read/Write|Enabled                |
|traccar                   |data                  |PVC      |-              |/opt/traccar/data                                    |Read/Write|Enabled                |
|traggo                    |config                |PVC      |-              |/opt/traggo/data                                     |Read/Write|Enabled                |
|transmission              |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|trilium-notes             |config                |PVC      |-              |/home/node                                           |Read/Write|Enabled                |
|truecommand               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|tsmuxer                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tsmuxer                   |storage               |PVC      |-              |/storage                                             |Read/Write|Enabled                |
|tt-rss                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tt-rss                    |plugins               |PVC      |-              |/app/plugins.local                                   |Read/Write|Enabled                |
|tt-rss                    |themes                |PVC      |-              |/app/themes.local                                    |Read/Write|Enabled                |
|tvheadend                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|tvheadend                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|twtxt                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|twtxt                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|twtxt                     |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|ubooquity                 |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|ubooquity                 |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ubooquity                 |books                 |PVC      |-              |/books                                               |Read/Write|Enabled                |
|ubooquity                 |comics                |PVC      |-              |/comics                                              |Read/Write|Enabled                |
|ubooquity                 |files                 |PVC      |-              |/files                                               |Read/Write|Enabled                |
|unifi                     |config                |PVC      |-              |/unifi                                               |Read/Write|Enabled                |
|unmanic                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|unmanic                   |library               |PVC      |-              |/library                                             |Read/Write|Enabled                |
|unmanic                   |remote                |PVC      |-              |/tmp/unmanic/remote_library                          |Read/Write|Enabled                |
|unmanic                   |cache                 |emptyDir |-              |/tmp/unmanic                                         |Read/Write|Enabled                |
|unmanic                   |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|unpackerr                 |downloads             |PVC      |-              |/downloads                                           |Read/Write|Enabled                |
|unpoller                  |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|uptime-kuma               |config                |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|uptimerobot-prometheus    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|valheim                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|valheim                   |backups               |PVC      |-              |/backups                                             |Read/Write|Enabled                |
|valheim                   |varrun                |emptyDir |-              |-                                                    |Read/Write|Persistence is Disabled|
|verysync                  |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|verysync                  |sync                  |PVC      |-              |/Sync                                                |Read/Write|Enabled                |
|vikunja                   |files                 |PVC      |-              |/app/vikunja/files                                   |Read/Write|Enabled                |
|vikunja                   |vikunja-nginx         |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|vikunja                   |vikunja-config        |PVC      |-              |-                                                    |Read/Write|Mount Path not Defined |
|watchyourlan              |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|webgrabplus               |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|webgrabplus               |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|webgrabplus               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|weblate                   |config                |PVC      |-              |/app/data                                            |Read/Write|Enabled                |
|weblate                   |cache                 |emptyDir |-              |/app/cache                                           |Read/Write|Enabled                |
|webnut                    |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|website-shot              |screenshots           |PVC      |-              |/usr/src/website-shot/screenshots                    |Read/Write|Enabled                |
|webtop                    |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|wekan                     |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|wg-easy                   |config                |PVC      |-              |/etc/wireguard                                       |Read/Write|Enabled                |
|whisparr                  |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|whisper-asr-webservice    |pip                   |PVC      |-              |/root/.cache/pip                                     |Read/Write|Enabled                |
|whisper-asr-webservice    |poetry                |PVC      |-              |/root/.cache/poetry                                  |Read/Write|Enabled                |
|whisper-asr-webservice    |whisper               |PVC      |-              |/root/.cache/whisper                                 |Read/Write|Enabled                |
|whisper-asr-webservice    |faster-whisper        |PVC      |-              |/root/.cache/faster_whisper                          |Read/Write|Enabled                |
|whoogle                   |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|wikijs                    |wikicache             |emptyDir |-              |/wiki/data/                                          |Read/Write|Enabled                |
|wireguard                 |-                     |-        |-              |-                                                    |-         |Persistence not Defined|
|wizarr                    |database              |PVC      |-              |/data/database                                       |Read/Write|Enabled                |
|wordpress                 |config                |PVC      |-              |/bitnami/wordpress                                   |Read/Write|Enabled                |
|xen-orchestra             |xo-data               |PVC      |-              |/var/lib/xo-server                                   |Read/Write|Enabled                |
|xen-orchestra             |redis-data            |PVC      |-              |/var/lib/redis                                       |Read/Write|Enabled                |
|xteve                     |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|xwiki                     |config                |PVC      |-              |/usr/local/xwiki                                     |Read/Write|Enabled                |
|youtransfer               |config                |PVC      |-              |/opt/youtransfer/config                              |Read/Write|Enabled                |
|youtransfer               |hostpath3             |PVC      |-              |/opt/youtransfer/uploads                             |Read/Write|Enabled                |
|youtubedl-material        |appdata               |PVC      |-              |/app/appdata                                         |Read/Write|Enabled                |
|youtubedl-material        |users                 |PVC      |-              |/app/users                                           |Read/Write|Enabled                |
|youtubedl-material        |subscriptions         |PVC      |-              |/app/subscriptions                                   |Read/Write|Enabled                |
|youtubedl-material        |audio                 |PVC      |-              |/app/audio                                           |Read/Write|Enabled                |
|youtubedl-material        |video                 |PVC      |-              |/app/video                                           |Read/Write|Enabled                |
|zerotier                  |config                |PVC      |-              |/var/lib/zerotier-one                                |Read/Write|Enabled                |
|zerotier                  |tun                   |hostPath |/dev/net/tun   |/dev/net/tun                                         |Read/Write|Enabled                |
|zigbee2mqtt               |data                  |PVC      |-              |/data                                                |Read/Write|Enabled                |
|znc                       |varrun                |emptyDir |-              |/var/run                                             |Read/Write|Enabled                |
|znc                       |config                |PVC      |-              |/config                                              |Read/Write|Enabled                |
|ztcuui-aio                |config                |PVC      |-              |/opt/key-networks/ztncui/etc                         |Read/Write|Enabled                |
|ztcuui-aio                |zerotier              |PVC      |-              |/var/lib/zerotier-one                                |Read/Write|Enabled                |
|zwavejs2mqtt              |config                |PVC      |-              |/usr/src/app/store                                   |Read/Write|Enabled                |

## Dependency

| App | Volume Name | Type | Host Path | Mount Path | Mode | Status |
|:----|:-----------:|:----:|:----------|:-----------|:----:|:------:|
|clickhouse        |data        |PVC      |-       |/var/lib/clickhouse|Read/Write|Enabled                |
|kube-state-metrics|-           |-        |-       |-                  |-         |Persistence not Defined|
|mariadb           |data        |PVC      |-       |/bitnami/mariadb   |Read/Write|Enabled                |
|memcached         |-           |-        |-       |-                  |-         |Persistence not Defined|
|mongodb           |data        |PVC      |-       |/bitnami/mongodb   |Read/Write|Enabled                |
|node-exporter     |host        |hostPath |/       |/host              |Read Only |Enabled                |
|node-exporter     |proc        |hostPath |/proc   |/hostproc          |Read Only |Enabled                |
|node-exporter     |sys         |hostPath |/sys    |/hostsys           |Read Only |Enabled                |
|redis             |redis-health|configmap|-       |/health            |Read/Write|Enabled                |
|solr              |db          |PVC      |-       |/bitnami/solr      |Read/Write|Enabled                |

## Incubator

| App | Volume Name | Type | Host Path | Mount Path | Mode | Status |
|:----|:-----------:|:----:|:----------|:-----------|:----:|:------:|
|acestream                      |acestreamcache             |PVC      |-                |/srv/acestream/.ACEStream                       |Read/Write|Enabled                |
|adguardhome-sync               |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|alienswarm                     |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|alienswarm                     |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|alienswarm-reactivedrop        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|alienswarm-reactivedrop        |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|americasarmy-pg                |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|americasarmy-pg                |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|android-8-0                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|androiddebugbridge             |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|anki-sync-server               |config                     |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|anope                          |datapath                   |PVC      |-                |/anope                                          |Read/Write|Enabled                |
|apache-webdav                  |config                     |PVC      |-                |/var/lib/dav                                    |Read/Write|Enabled                |
|apache-webdav                  |data                       |PVC      |-                |/var/lib/dav/data                               |Read/Write|Enabled                |
|apprise-api                    |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|appsmith                       |appsmithstacks             |PVC      |-                |/appsmith-stacks                                |Read/Write|Enabled                |
|archiveteam-warrior            |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|arksurvivalevolved             |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|arksurvivalevolved             |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|arma3                          |profiles                   |PVC      |-                |/serverdata/.local/share                        |Read/Write|Enabled                |
|arma3                          |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|arma3                          |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|arma3exilemod                  |profiles                   |PVC      |-                |/serverdata/.local/share                        |Read/Write|Enabled                |
|arma3exilemod                  |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|arma3exilemod                  |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|artifactory-oss                |varoptjfrogartifactory     |PVC      |-                |/var/opt/jfrog/artifactory                      |Read/Write|Enabled                |
|assettocorsa                   |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|assettocorsa                   |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|aurora-files                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|authentik                      |media                      |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|authentik                      |templates                  |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|authentik                      |blueprints                 |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|authentik                      |certs                      |PVC      |-                |/certs                                          |Read/Write|Enabled                |
|authentik                      |geoip                      |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|auto-yt-dl                     |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|auto-yt-dl                     |hostpath1                  |PVC      |-                |/app/Downloads                                  |Read/Write|Enabled                |
|avorion                        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|avorion                        |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|awesome-ttrss                  |icons                      |PVC      |-                |/var/www/feed-icons                             |Read/Write|Enabled                |
|awesome-ttrss                  |plugins                    |PVC      |-                |/var/www/plugins.local                          |Read/Write|Enabled                |
|awesome-ttrss                  |themes                     |PVC      |-                |/var/www/themes.local                           |Read/Write|Enabled                |
|backuppc                       |backuplocation             |PVC      |-                |/var/lib/backuppc                               |Read/Write|Enabled                |
|backuppc                       |configurationfiles         |PVC      |-                |/etc/backuppc                                   |Read/Write|Enabled                |
|backuppc                       |homedirectory              |PVC      |-                |/home/backuppc                                  |Read/Write|Enabled                |
|backuppc                       |logs                       |PVC      |-                |/www/logs                                       |Read/Write|Enabled                |
|baikal                         |config                     |PVC      |-                |/var/www/baikal/config                          |Read/Write|Enabled                |
|baikal                         |specific                   |PVC      |-                |/var/www/baikal/Specific                        |Read/Write|Enabled                |
|barcodebuddy                   |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|barotrauma                     |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|barotrauma                     |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|batnoter                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|bender                         |config                     |PVC      |-                |/app/static                                     |Read/Write|Enabled                |
|bitcoin-node                   |blockhainstorage           |PVC      |-                |/bitcoin/.bitcoin                               |Read/Write|Enabled                |
|bitcoind                       |data                       |PVC      |-                |/root/.bitcoin/                                 |Read/Write|Enabled                |
|bitcoinunlimited               |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|bitcoinwalletgui               |bitcoinblockchainpath      |PVC      |-                |/headless/.bitcoin/                             |Read/Write|Enabled                |
|blender                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|blender-desktop-g3             |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|blender-desktop-g3             |storageprojects            |PVC      |-                |/srv/projects                                   |Read/Write|Enabled                |
|breitbandmessung-de            |config                     |PVC      |-                |/usr/src/app/config                             |Read/Write|Enabled                |
|breitbandmessung-de            |messurementlogs            |PVC      |-                |/export/                                        |Read/Write|Enabled                |
|briefkasten                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|btdex                          |btdex                      |PVC      |-                |/opt/btdex/cache                                |Read/Write|Enabled                |
|bwapp                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|cadquery-jupyter               |workdir                    |PVC      |-                |/home/cq                                        |Read/Write|Enabled                |
|cadquery-server                |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|checkmk                        |config                     |PVC      |-                |/omd/sites                                      |Read/Write|Enabled                |
|checkmk                        |cmk-temp                   |emptyDir |-                |/omd/sites/cmk/tmp                              |Read/Write|Enabled                |
|checkmk                        |cmk-cron                   |emptyDir |-                |/var/spool/cron/crontabs                        |Read/Write|Enabled                |
|cherry                         |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|chivalry-medievalwarfare       |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|chivalry-medievalwarfare       |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|chowdown                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|chromium                       |datadir                    |PVC      |-                |/chrome                                         |Read/Write|Enabled                |
|chromium-desktop-g3            |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|chronograf                     |chronograf                 |PVC      |-                |/var/lib/chronograf                             |Read/Write|Enabled                |
|ciao                           |databaselocation           |PVC      |-                |/app/db/sqlite                                  |Read/Write|Enabled                |
|citadel-forgedwithfire         |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|citadel-forgedwithfire         |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|cleanarr                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|clipplex                       |clips                      |PVC      |-                |/app/app/static/media                           |Read/Write|Enabled                |
|cloudbeaver                    |appdata                    |PVC      |-                |/opt/cloudbeaver/workspace                      |Read/Write|Enabled                |
|cloudcommander                 |appdata                    |PVC      |-                |/root                                           |Read/Write|Enabled                |
|cloudcommander                 |mountpath                  |PVC      |-                |/UNRAID                                         |Read/Write|Enabled                |
|cloudreve                      |avatarpath                 |PVC      |-                |/cloudreve/avatar                               |Read/Write|Enabled                |
|cloudreve                      |config                     |PVC      |-                |/cloudreve/config                               |Read/Write|Enabled                |
|cloudreve                      |databasepath               |PVC      |-                |/cloudreve/db                                   |Read/Write|Enabled                |
|cloudreve                      |uploadpath                 |PVC      |-                |/cloudreve/uploads                              |Read/Write|Enabled                |
|colonysurvival                 |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|colonysurvival                 |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|conanexiles                    |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|conanexiles                    |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|conreq                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|convos                         |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|core-keeper-dedicated-server   |datafiles                  |PVC      |-                |/home/steam/core-keeper-data                    |Read/Write|Enabled                |
|core-keeper-dedicated-server   |serverfiles                |PVC      |-                |/home/steam/core-keeper-dedicated               |Read/Write|Enabled                |
|corekeeper                     |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|corekeeper                     |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|counterstrike2d                |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|coupon-store                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|cowyo                          |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|craftopia                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|craftopia                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|crypto-exchanges-gateway       |configpath                 |PVC      |-                |/root/crypto-exchanges-gateway/custom_config    |Read/Write|Enabled                |
|cryptpad                       |blobpath                   |PVC      |-                |/cryptpad/blob                                  |Read/Write|Enabled                |
|cryptpad                       |blockpath                  |PVC      |-                |/cryptpad/block                                 |Read/Write|Enabled                |
|cryptpad                       |configpath                 |PVC      |-                |/cryptpad/config/config.js                      |Read/Write|Enabled                |
|cryptpad                       |customizepath              |PVC      |-                |/cryptpad/customize                             |Read/Write|Enabled                |
|cryptpad                       |data                       |PVC      |-                |/cryptpad/data                                  |Read/Write|Enabled                |
|cryptpad                       |datastorepath              |PVC      |-                |/cryptpad/datastore                             |Read/Write|Enabled                |
|csgo                           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|csgo                           |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|cssource                       |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|cssource                       |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|cstrike1-6                     |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|cstrike1-6                     |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|cstrikeconditionzero           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|cstrikeconditionzero           |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|cups-server                    |config                     |PVC      |-                |/etc/cups                                       |Read/Write|Enabled                |
|cups-server                    |dbus                       |hostPath |/var/run/dbus    |/var/run/dbus                                   |Read/Write|Enabled                |
|dailynotes                     |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|damselfly                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|damselfly                      |pictures                   |PVC      |-                |/pictures                                       |Read/Write|Enabled                |
|damselfly                      |thumbs                     |PVC      |-                |/thumbs                                         |Read/Write|Enabled                |
|darktable                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|darktable                      |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|dashmachine                    |appdata                    |PVC      |-                |/dashmachine/dashmachine/user_data              |Read/Write|Enabled                |
|dashy                          |icons                      |PVC      |-                |/app/public/item-icons                          |Read/Write|Enabled                |
|dayofdefeatsource              |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|dayofdefeatsource              |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|daysofwar                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|daysofwar                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|dayz                           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|dayz                           |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|ddns-route53                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|debian-apt-mirror              |config                     |PVC      |-                |/debian-mirror/config                           |Read/Write|Enabled                |
|debian-apt-mirror              |data                       |PVC      |-                |/debian-mirror/data                             |Read/Write|Enabled                |
|debian-bullseye                |homedirectory              |PVC      |-                |/debian                                         |Read/Write|Enabled                |
|dispatch                       |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|dns-doh-companion              |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|docker-hub-rss                 |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|dockerregistry                 |datastoragepath            |PVC      |-                |/var/lib/registry                               |Read/Write|Enabled                |
|docspell                       |server                     |secret   |-                |/opt/server.conf                                |Read Only |Enabled                |
|docspell                       |joex                       |secret   |-                |/opt/joex.conf                                  |Read Only |Enabled                |
|docspell                       |import                     |PVC      |-                |/import                                         |Read/Write|Enabled                |
|dontstarvetogether             |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|dontstarvetogether             |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|dontstarvetogether             |token                      |PVC      |-                |/serverdata/.klei/DoNotStarveTogether           |Read/Write|Enabled                |
|drone-runner                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|dropbox-by-otherguy            |dropboxsettings            |PVC      |-                |/opt/dropbox/.dropbox                           |Read/Write|Enabled                |
|dropbox-by-otherguy            |dropboxuserfiles           |PVC      |-                |/opt/dropbox/Dropbox                            |Read/Write|Enabled                |
|dsmr-reader                    |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|dupeguru                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|dupeguru                       |storage                    |PVC      |-                |/storage                                        |Read/Write|Enabled                |
|dupeguru                       |trash                      |PVC      |-                |/trash                                          |Read/Write|Enabled                |
|duplicacy                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|duplicacy                      |cache                      |PVC      |-                |/cache                                          |Read/Write|Enabled                |
|duplicacy                      |logs                       |PVC      |-                |/logs                                           |Read/Write|Enabled                |
|dvblink                        |dvblink                    |PVC      |-                |/opt/DVBLink                                    |Read/Write|Enabled                |
|eco                            |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|eco                            |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|ecodms                         |backuppath                 |PVC      |-                |/srv/backup                                     |Read/Write|Enabled                |
|ecodms                         |data                       |PVC      |-                |/srv/data                                       |Read/Write|Enabled                |
|ecodms                         |restorepath                |PVC      |-                |/srv/restore                                    |Read/Write|Enabled                |
|ecodms                         |scaninputpath              |PVC      |-                |/srv/scaninput                                  |Read/Write|Enabled                |
|electrum                       |datapath                   |PVC      |-                |/electrum                                       |Read/Write|Enabled                |
|emby-sync                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|ersatztv                       |config                     |PVC      |-                |/root/.local/share/ersatztv                     |Read/Write|Enabled                |
|ersatztv                       |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|ethercalc                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|euterpe                        |music                      |PVC      |-                |/root/Music                                     |Read/Write|Enabled                |
|euterpe                        |configfile                 |secret   |-                |/root/.euterpe/config.json                      |Read Only |Enabled                |
|explainshell                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|external-ip                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|factorio                       |config                     |PVC      |-                |/factorio                                       |Read/Write|Enabled                |
|factorioservermanager          |config                     |PVC      |-                |/opt/factorio/config                            |Read/Write|Enabled                |
|factorioservermanager          |fsmmods                    |PVC      |-                |/opt/factorio/mods                              |Read/Write|Enabled                |
|factorioservermanager          |fsmsaves                   |PVC      |-                |/opt/factorio/saves                             |Read/Write|Enabled                |
|facturascripts                 |appdata                    |PVC      |-                |/var/www/html                                   |Read/Write|Enabled                |
|fancyindex                     |share                      |PVC      |-                |/share                                          |Read/Write|Enabled                |
|farmos                         |sitesdirectory             |PVC      |-                |/var/www/html/sites                             |Read/Write|Enabled                |
|fastcom-mqtt                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|fenrus                         |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|fenrus                         |images                     |PVC      |-                |/app/wwwroot/images                             |Read/Write|Enabled                |
|ferdi-client                   |datadir                    |PVC      |-                |/ferdi                                          |Read/Write|Enabled                |
|ffmpeg-mkvdts2ac3              |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|ffmpeg-mkvdts2ac3              |copy                       |PVC      |-                |/copy                                           |Read/Write|Enabled                |
|ffmpeg-mkvdts2ac3              |output                     |PVC      |-                |/output                                         |Read/Write|Enabled                |
|ffmpeg-mkvdts2ac3              |watch                      |PVC      |-                |/watch                                          |Read/Write|Enabled                |
|filegator                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|filegator                      |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|filegator                      |storageconfigfile          |PVC      |-                |/var/www/localhost/filegator/configuration.php  |Read Only |Enabled                |
|filerun                        |config                     |PVC      |-                |/var/www/html                                   |Read/Write|Enabled                |
|filerun                        |userfile                   |PVC      |-                |/user-files                                     |Read/Write|Enabled                |
|fileshelter                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|filestash                      |appdata                    |PVC      |-                |/app/data/state/                                |Read/Write|Enabled                |
|filezilla                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|filezilla                      |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|fireflyiii-data-importer       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|firefox-desktop-g3             |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|fireshare                      |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|fireshare                      |processeddata              |PVC      |-                |/processed                                      |Read/Write|Enabled                |
|fireshare                      |videos                     |PVC      |-                |/videos                                         |Read/Write|Enabled                |
|firezone                       |config                     |PVC      |-                |/var/firezone                                   |Read/Write|Enabled                |
|fistfuloffrags                 |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|fistfuloffrags                 |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|fivem                          |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|flame                          |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|flashpaper                     |data                       |PVC      |-                |/var/www/html/data                              |Read/Write|Enabled                |
|flatnotes                      |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|flemarr                        |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|flextv                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|fluttercoin-wallet             |datapath                   |PVC      |-                |/fluttercoin                                    |Read/Write|Enabled                |
|fmd2-wine                      |appluamodulespath          |PVC      |-                |/app/FMD2/lua                                   |Read/Write|Enabled                |
|fmd2-wine                      |appuserdata                |PVC      |-                |/app/FMD2/userdata                              |Read/Write|Enabled                |
|fmd2-wine                      |appwineconfig              |PVC      |-                |/config/.wine                                   |Read/Write|Enabled                |
|fmd2-wine                      |data                       |PVC      |-                |/app/FMD2/data                                  |Read/Write|Enabled                |
|fmd2-wine                      |downloaddirectory          |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|focalboard                     |uploads                    |PVC      |-                |/uploads                                        |Read/Write|Enabled                |
|fogproject                     |images                     |PVC      |-                |/images                                         |Read/Write|Enabled                |
|fogproject                     |mysql                      |PVC      |-                |/var/lib/mysql                                  |Read/Write|Enabled                |
|fotosho                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|fotosho                        |photos                     |PVC      |-                |/photos                                         |Read/Write|Enabled                |
|fotosho                        |thumbs                     |PVC      |-                |/thumbnails                                     |Read/Write|Enabled                |
|freecad-desktop-g3             |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|fsm                            |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|funkwhale                      |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|funkwhale                      |musicpath                  |PVC      |-                |/music                                          |Read Only |Enabled                |
|garrysmod                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|garrysmod                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|genea                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|ghost                          |content                    |PVC      |-                |/var/lib/ghost/content                          |Read/Write|Enabled                |
|ghostfolio                     |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|github-backup                  |backuplocation             |PVC      |-                |/home/docker/backups                            |Read/Write|Enabled                |
|github-backup                  |config                     |PVC      |-                |/home/docker/github-backup/config/              |Read/Write|Enabled                |
|glauth                         |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|go-auto-yt                     |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|go-auto-yt                     |mounteddownloadsfolder     |PVC      |-                |/app/downloads                                  |Read/Write|Enabled                |
|go-playground                  |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|goaccess                       |goaccess                   |PVC      |-                |/opt/log                                        |Read/Write|Enabled                |
|goaccess-npm-logs              |hostpath1                  |PVC      |-                |/opt/log                                        |Read Only |Enabled                |
|godaddy-ddns                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|gokapi                         |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|gokapi                         |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|google-cloud-storage-backup    |google-cloud-storage-backup|PVC      |-                |/data/backup                                    |Read Only |Enabled                |
|googlephotossync               |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|googlephotossync               |hostpath1                  |PVC      |-                |/storage                                        |Read/Write|Enabled                |
|gotify                         |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|gotify                         |config-file                |secret   |-                |/etc/gotify/config.yml                          |Read Only |Enabled                |
|gpodder                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|gpodder                        |downloadspath              |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|grafana-image-renderer         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|gravity                        |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|gridcoinwalletgui              |appdataconfigpath          |PVC      |-                |/headless/.GridcoinResearch/                    |Read/Write|Enabled                |
|gridcoinwalletgui              |boincdatadir               |PVC      |-                |/var/lib/boinc-client/                          |Read/Write|Enabled                |
|grist                          |persist                    |PVC      |-                |/persist                                        |Read/Write|Enabled                |
|guacamole-client               |initdbdata                 |emptyDir |-                |/initdbdata                                     |Read/Write|Enabled                |
|guide2go                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|guide2go                       |guide2go                   |PVC      |-                |/guide2go                                       |Read/Write|Enabled                |
|guide2go                       |tvh                        |PVC      |-                |/TVH                                            |Read/Write|Enabled                |
|h5ai                           |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|h5ai                           |directorystorage           |PVC      |-                |/h5ai                                           |Read Only |Enabled                |
|habridge                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|habridge                       |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|halflife2deathmatch            |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|halflife2deathmatch            |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|hassconfigurator               |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|hassconfigurator               |hass-config                |PVC      |-                |/hass-config                                    |Read/Write|Enabled                |
|hastebin                       |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|hasty-paste                    |config                     |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|hetzner-ddns                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|hexchat                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|hexo-blog                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|homebridge                     |config                     |PVC      |-                |/homebridge                                     |Read/Write|Enabled                |
|hoobs                          |applicationpath            |PVC      |-                |/hoobs                                          |Read/Write|Enabled                |
|humhub                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|hurtworld                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|hurtworld                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|icantbelieveitsnotvaletudo     |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|icantbelieveitsnotvaletudo     |settings                   |custom   |-                |/app/config.json                                |Read/Write|Enabled                |
|icinga2                        |config                     |PVC      |-                |/etc/icinga2                                    |Read/Write|Enabled                |
|icinga2                        |data                       |PVC      |-                |/var/lib/icinga2                                |Read/Write|Enabled                |
|icinga2                        |web                        |PVC      |-                |/etc/icingaweb2                                 |Read/Write|Enabled                |
|icinga2                        |ssmtp                      |PVC      |-                |/etc/ssmtp                                      |Read/Write|Enabled                |
|icloudpd                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|icloudpd                       |data                       |PVC      |-                |/home/apps/iCloud                               |Read/Write|Enabled                |
|imgpush                        |storagecache               |PVC      |-                |/cache                                          |Read/Write|Enabled                |
|imgpush                        |storageimages              |PVC      |-                |/images                                         |Read/Write|Enabled                |
|import-ics                     |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|import-ics                     |icsexportfolder            |PVC      |-                |/import_ics/ical_export                         |Read/Write|Enabled                |
|inkscape-desktop-g3            |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|insurgencysandstorm            |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|insurgencysandstorm            |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|inventree                      |data                       |PVC      |-                |/home/inventree/data                            |Read/Write|Enabled                |
|inventree                      |inventree-nginx            |custom   |-                |/etc/nginx/conf.d                               |Read/Write|Enabled                |
|invitarr                       |config                     |PVC      |-                |/app/app/config                                 |Read/Write|Enabled                |
|ipmi-tools                     |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|jackett2telegram               |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|jackett2telegram               |blackhole                  |PVC      |-                |/app/blackhole                                  |Read/Write|Enabled                |
|jelu                           |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|jelu                           |databasepath               |PVC      |-                |/database                                       |Read/Write|Enabled                |
|jelu                           |imagespath                 |PVC      |-                |/files/images                                   |Read/Write|Enabled                |
|jelu                           |importspath                |PVC      |-                |/files/imports                                  |Read/Write|Enabled                |
|jenkins                        |data                       |PVC      |-                |/var/jenkins_home                               |Read/Write|Enabled                |
|jitsi                          |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|jitsi                          |crontabs                   |PVC      |-                |/var/spool/cron/crontabs                        |Read/Write|Enabled                |
|jitsi                          |transcripts                |PVC      |-                |/usr/share/jitsi-meet/transcripts               |Read/Write|Enabled                |
|jitsi                          |prosodyconfig              |PVC      |-                |/prosodyconfig/config                           |Read/Write|Enabled                |
|jitsi                          |prosodyplugins             |PVC      |-                |/prosody-plugins-custom                         |Read/Write|Enabled                |
|jitsi                          |jicofoconfig               |PVC      |-                |/jicofoconfig/config                            |Read/Write|Enabled                |
|jitsi                          |jvbconfig                  |PVC      |-                |/jvbconfig/config                               |Read/Write|Enabled                |
|jmzhomeproxy                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|joplin-server                  |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|jump                           |backgrounds                |PVC      |-                |/backgrounds                                    |Read/Write|Enabled                |
|jump                           |search                     |PVC      |-                |/search                                         |Read/Write|Enabled                |
|jump                           |sites                      |PVC      |-                |/sites                                          |Read/Write|Enabled                |
|kavitaemail                    |config                     |PVC      |-                |-                                               |Read/Write|Persistence is Disabled|
|kdenlive                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|kdenlive-vnc                   |content                    |PVC      |-                |/sharedContent                                  |Read/Write|Enabled                |
|keeweb                         |nginx                      |PVC      |-                |/etc/nginx/external                             |Read/Write|Enabled                |
|kerbalspaceprogram-lmp         |serverfiles                |PVC      |-                |/lunamultiplayer                                |Read/Write|Enabled                |
|kerio-connect                  |kerio-connect              |PVC      |-                |/backup                                         |Read/Write|Enabled                |
|kimai                          |data                       |PVC      |-                |/opt/kimai/var/data                             |Read/Write|Enabled                |
|kimai                          |plugins                    |PVC      |-                |/opt/kimai/var/plugins                          |Read/Write|Enabled                |
|kitana                         |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|koel                           |music                      |PVC      |-                |/music                                          |Read/Write|Enabled                |
|koel                           |covers                     |PVC      |-                |/var/www/html/public/img/covers                 |Read/Write|Enabled                |
|koel                           |searchindex                |PVC      |-                |/var/www/html/storage/search-indexes            |Read/Write|Enabled                |
|kopia                          |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|kopia                          |cache                      |PVC      |-                |/app/cache                                      |Read/Write|Enabled                |
|kopia                          |logs                       |PVC      |-                |/app/logs                                       |Read/Write|Enabled                |
|kopia                          |rclone                     |PVC      |-                |/app/rclone                                     |Read/Write|Enabled                |
|krusader                       |containerpath              |PVC      |-                |/krusader                                       |Read/Write|Enabled                |
|krusader                       |datapath                   |PVC      |-                |/mnt/user                                       |Read/Write|Enabled                |
|kutt                           |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|lastoasis                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|lastoasis                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|leantime                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|left4dead                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|left4dead                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|lemur-cfssl                    |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|lemur-cfssl                    |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|lenpaste                       |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|libreoffice                    |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|libreoffice                    |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|librephotos                    |media                      |PVC      |-                |/data                                           |Read/Write|Enabled                |
|librephotos                    |protected-media            |PVC      |-                |/protected_media                                |Read/Write|Enabled                |
|librephotos                    |logs                       |PVC      |-                |/logs                                           |Read/Write|Enabled                |
|librephotos                    |cache                      |PVC      |-                |/root/.cache                                    |Read/Write|Enabled                |
|librephotos                    |librephotos-config         |custom   |-                |/etc/nginx/nginx.conf                           |Read/Write|Enabled                |
|lingva                         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|linkace                        |logs                       |PVC      |-                |/app/storage/logs                               |Read/Write|Enabled                |
|linkace                        |backups                    |PVC      |-                |/app/storage/app/backups                        |Read/Write|Enabled                |
|linkwallet                     |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|livebook                       |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|livestreamdvr                  |config                     |PVC      |-                |/usr/local/share/twitchautomator/data/config    |Read/Write|Enabled                |
|livestreamdvr                  |hostpath1                  |PVC      |-                |/usr/local/share/twitchautomator/data/storage   |Read/Write|Enabled                |
|livestreamdvr                  |hostpath2                  |PVC      |-                |/usr/local/share/twitchautomator/data/cache     |Read/Write|Enabled                |
|livestreamdvr                  |hostpath4                  |PVC      |-                |/usr/local/share/twitchautomator/data/logs      |Read/Write|Enabled                |
|llalon-github-backup           |backuplocation             |PVC      |-                |/home/docker/backups                            |Read/Write|Enabled                |
|llalon-github-backup           |config                     |PVC      |-                |/home/docker/github-backup/config/              |Read/Write|Enabled                |
|loki                           |config                     |secret   |-                |/etc/loki                                       |Read/Write|Enabled                |
|longvinter                     |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|longvinter                     |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|lychee                         |conf                       |PVC      |-                |/conf                                           |Read/Write|Enabled                |
|lychee                         |sym                        |PVC      |-                |/sym                                            |Read/Write|Enabled                |
|lychee                         |uploads                    |PVC      |-                |/uploads                                        |Read/Write|Enabled                |
|magicmirror2                   |config                     |PVC      |-                |/magicmirror2                                   |Read/Write|Enabled                |
|magicmirror2                   |configfile                 |configMap|-                |/tmp/config.js                                  |Read/Write|Enabled                |
|mailpile                       |path1                      |PVC      |-                |/root/.local/share/Mailpile                     |Read/Write|Enabled                |
|mailpile                       |path2                      |PVC      |-                |/root/.gnupg                                    |Read/Write|Enabled                |
|maloja                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|mango                          |config                     |PVC      |-                |/root/.config/mango                             |Read/Write|Enabled                |
|mango                          |data                       |PVC      |-                |/root/mango                                     |Read/Write|Enabled                |
|media-roller                   |download                   |PVC      |-                |/download                                       |Read/Write|Enabled                |
|mediaelch                      |mediaelch                  |PVC      |-                |/shows                                          |Read/Write|Enabled                |
|mediagoblin                    |appdata                    |PVC      |-                |/var/lib/mediagoblin                            |Read/Write|Enabled                |
|megasync                       |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|megasync                       |hostpath                   |PVC      |-                |/mnt/host                                       |Read Only |Enabled                |
|memories-of-mars               |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|memories-of-mars               |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|metatube                       |storagedatabase            |PVC      |-                |/database                                       |Read/Write|Enabled                |
|metatube                       |storagedownloads           |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|microbin                       |data                       |PVC      |-                |/app/pasta_data                                 |Read/Write|Enabled                |
|midarr                         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|mindustry                      |serverfiles                |PVC      |-                |/mindustry                                      |Read/Write|Enabled                |
|mineos                         |config                     |PVC      |-                |/var/games/minecraft                            |Read/Write|Enabled                |
|miniflux                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|mininote                       |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|misskey                        |misskeyconfig              |configmap|-                |/misskey/.config                                |Read/Write|Enabled                |
|misskey                        |files                      |PVC      |-                |/misskey/files                                  |Read/Write|Enabled                |
|ml-workspace                   |workspace                  |PVC      |-                |/workspace                                      |Read/Write|Enabled                |
|ml-workspace                   |shm                        |emptyDir |-                |/dev/shm                                        |Read/Write|Enabled                |
|mocodo-mcd                     |path                       |PVC      |-                |/root/mocodo                                    |Read/Write|Enabled                |
|mojopaste                      |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|monero-node                    |blockchainstorage          |PVC      |-                |/home/monero/.bitmonero                         |Read/Write|Enabled                |
|monero-node                    |containerdir1              |PVC      |-                |/usr/local                                      |Read/Write|Enabled                |
|monero-node                    |containerdir2              |PVC      |-                |/src                                            |Read/Write|Enabled                |
|money-balancer                 |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|mordhau                        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|mordhau                        |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|moviegrabber                   |moviegrabber               |PVC      |-                |/media                                          |Read/Write|Enabled                |
|multi-scrobbler                |config                     |PVC      |-                |/home/node/config                               |Read/Write|Enabled                |
|multi-scrobbler                |logs                       |PVC      |-                |/home/node/app/logs                             |Read/Write|Enabled                |
|namecheap-ddns                 |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|necesse                        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|necesse                        |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|neko                           |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|netbootxyz                     |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|netbootxyz                     |assets                     |PVC      |-                |/assets                                         |Read/Write|Enabled                |
|netbox                         |config                     |PVC      |-                |/etc/netbox/config                              |Read/Write|Enabled                |
|netbox                         |reports                    |PVC      |-                |/etc/netbox/reports                             |Read/Write|Enabled                |
|netbox                         |scripts                    |PVC      |-                |/etc/netbox/scripts                             |Read/Write|Enabled                |
|netbox                         |media                      |PVC      |-                |/opt/netbox/netbox/media                        |Read/Write|Enabled                |
|netbox                         |configfile                 |secret   |-                |/etc/netbox/config/01-config.py                 |Read/Write|Enabled                |
|neverwinternights-ee           |serverfiles                |PVC      |-                |/nwnee                                          |Read/Write|Enabled                |
|newyearcountdownclock          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|nexus-oss                      |data                       |PVC      |-                |/nexus-data                                     |Read/Write|Enabled                |
|nightscout                     |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|nitter                         |nitter-conf                |secret   |-                |/src/nitter.conf                                |Read/Write|Enabled                |
|noisedash                      |db                         |PVC      |-                |/var/noisedash/db                               |Read/Write|Enabled                |
|noisedash                      |samples                    |PVC      |-                |/var/noisedash/samples                          |Read/Write|Enabled                |
|nosqlclient                    |appdata                    |PVC      |-                |/data/db                                        |Read/Write|Enabled                |
|notarius                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|notea                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|obs-ndi                        |configpath                 |PVC      |-                |/config/obs-studio                              |Read/Write|Enabled                |
|observium                      |observium                  |PVC      |-                |/opt/observium/rrd                              |Read/Write|Enabled                |
|obsidian                       |storageconfig              |PVC      |-                |/config/.config/obsidian                        |Read/Write|Enabled                |
|obsidian                       |storagevaults              |PVC      |-                |/vaults                                         |Read/Write|Enabled                |
|onlinecheckyourserver          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|openaudible                    |config                     |PVC      |-                |/config/OpenAudible                             |Read/Write|Enabled                |
|openbooks                      |books                      |PVC      |-                |/books/books                                    |Read/Write|Enabled                |
|openbooks                      |logs                       |PVC      |-                |/books/logs                                     |Read/Write|Enabled                |
|opengl-desktop-g3              |internalshare              |PVC      |-                |/UNRAID_SHARE                                   |Read/Write|Enabled                |
|openkm                         |config                     |PVC      |-                |/opt/tomcat/repository                          |Read/Write|Enabled                |
|openkm                         |init                       |custom   |-                |/config/init                                    |Read Only |Enabled                |
|openldap                       |varrun                     |emptyDir |-                |-                                               |Read/Write|Persistence is Disabled|
|openproject                    |assets                     |PVC      |-                |/var/openproject/assets                         |Read/Write|Enabled                |
|openra                         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|openttd                        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|orbital-sync                   |config                     |PVC      |-                |/app                                            |Read/Write|Enabled                |
|owi2plex                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|owi2plex                       |owi2plex                   |PVC      |-                |/owi2plex                                       |Read/Write|Enabled                |
|owi2plex                       |tvh                        |PVC      |-                |/TVH                                            |Read/Write|Enabled                |
|owncloud-ocis                  |data                       |PVC      |-                |/var/lib/ocis                                   |Read/Write|Enabled                |
|owncloud-ocis                  |config                     |PVC      |-                |/etc/ocis                                       |Read/Write|Enabled                |
|owntracks                      |store                      |PVC      |-                |/store                                          |Read/Write|Enabled                |
|passwordpusherephemeral        |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|pastey                         |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|pavlovvr                       |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|pavlovvr                       |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|penpot                         |data                       |PVC      |-                |/opt/data                                       |Read/Write|Enabled                |
|penpot                         |assets                     |PVC      |-                |/opt/data/assets                                |Read/Write|Enabled                |
|phoronix-test-suite            |appdata                    |PVC      |-                |/var/lib/phoronix-test-suite                    |Read/Write|Enabled                |
|phoronix-test-suite            |results                    |PVC      |-                |/var/lib/phoronix-test-suite/test-results       |Read/Write|Enabled                |
|photo-stream                   |storageimages              |PVC      |-                |/photo-stream/photos/original                   |Read/Write|Enabled                |
|photostructure                 |config                     |PVC      |-                |/ps/config                                      |Read/Write|Enabled                |
|photostructure                 |library                    |PVC      |-                |/ps/library                                     |Read/Write|Enabled                |
|photostructure                 |logs                       |PVC      |-                |/ps/logs                                        |Read/Write|Enabled                |
|photostructure                 |tempscratchdisk            |PVC      |-                |/ps/tmp                                         |Read/Write|Enabled                |
|photoview                      |cache                      |PVC      |-                |/cache                                          |Read/Write|Enabled                |
|photoview                      |photos                     |PVC      |-                |/photos                                         |Read/Write|Enabled                |
|phpmyadmin                     |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|pialert                        |config                     |PVC      |-                |/home/pi/pialert/config                         |Read/Write|Enabled                |
|pialert                        |db                         |PVC      |-                |/home/pi/pialert/db                             |Read/Write|Enabled                |
|pialert                        |pialert-config             |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|piaware                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|pidgin                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|pidgin                         |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|pigallery2                     |config                     |PVC      |-                |/app/data/config                                |Read/Write|Enabled                |
|pigallery2                     |db                         |PVC      |-                |/app/data/db                                    |Read/Write|Enabled                |
|pigallery2                     |image                      |PVC      |-                |/app/data/images/                               |Read Only |Enabled                |
|pigallery2                     |tmp                        |PVC      |-                |/app/data/tmp                                   |Read/Write|Enabled                |
|pingvin-share                  |data                       |PVC      |-                |/opt/app/backend/data                           |Read/Write|Enabled                |
|pixark                         |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|pixark                         |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|pixelserv-tls                  |certficatesdir             |PVC      |-                |/var/cache/pixelserv                            |Read/Write|Enabled                |
|plausible                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|plex-meta-manager              |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|plexanisync                    |settings                   |secret   |-                |/plexanisync/settings.ini                       |Read Only |Enabled                |
|plexripper                     |config                     |PVC      |-                |/Config                                         |Read/Write|Enabled                |
|plextraktsync                  |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|plik                           |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|plik                           |plikd-config               |custom   |-                |/home/plik/server/plikd.cfg                     |Read Only |Enabled                |
|post-recording                 |backupfolder               |PVC      |-                |/backup                                         |Read/Write|Enabled                |
|post-recording                 |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|post-recording                 |watchfolder                |PVC      |-                |/watch                                          |Read/Write|Enabled                |
|poste                          |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|postscriptum                   |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|postscriptum                   |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|preclear                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|pritunl                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|privatebin                     |run                        |emptyDir |-                |/run                                            |Read/Write|Enabled                |
|privatebin                     |nginx-cache                |emptyDir |-                |/var/lib/nginx/tmp                              |Read/Write|Enabled                |
|privatebin                     |conf-app                   |custom   |-                |/srv/cfg                                        |Read Only |Enabled                |
|privatebin                     |conf-php                   |custom   |-                |/etc/php8/conf.d/10-sizelimits.ini              |Read Only |Enabled                |
|privatebin                     |conf-nginx                 |custom   |-                |/etc/nginx/conf.d/sizelimits.conf               |Read Only |Enabled                |
|projectzomboidreporter-frontend|-                          |-        |-                |-                                               |-         |Persistence not Defined|
|protonmail-bridge              |config                     |PVC      |-                |/root                                           |Read/Write|Enabled                |
|prpdf                          |config                     |PVC      |-                |/source/config                                  |Read/Write|Enabled                |
|prpdf                          |files                      |PVC      |-                |/Archiv/                                        |Read/Write|Enabled                |
|prpdf                          |hostpath2                  |PVC      |-                |/source/static/pdf/                             |Read/Write|Enabled                |
|ps3netsrv                      |games                      |PVC      |-                |/games                                          |Read/Write|Enabled                |
|ps3netsrv                      |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|pt-helper                      |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|pure-ftpd                      |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|pure-ftpd                      |ftpfolder                  |PVC      |-                |/home                                           |Read/Write|Enabled                |
|pvk-ii                         |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|pvk-ii                         |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|pwm                            |appdata                    |PVC      |-                |/usr/share/pwm                                  |Read/Write|Enabled                |
|pydio-cells                    |cells                      |PVC      |-                |/cells                                          |Read/Write|Enabled                |
|pydio-cells                    |data                       |PVC      |-                |/cells/data                                     |Read/Write|Enabled                |
|pydio-cells                    |logs                       |PVC      |-                |/cells/logs                                     |Read/Write|Enabled                |
|pydio-cells                    |services                   |PVC      |-                |/cells/services                                 |Read/Write|Enabled                |
|pydio-cells                    |pydiocells-install         |custom   |-                |/cells/install.yml                              |Read/Write|Enabled                |
|pyload-ng                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|pyload-ng                      |pathdownloads              |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|qflood                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|quake3                         |serverfiles                |PVC      |-                |/quake3                                         |Read/Write|Enabled                |
|quickshare                     |storagedata                |PVC      |-                |/quickshare/root                                |Read/Write|Enabled                |
|quiz-game                      |config                     |PVC      |-                |/app                                            |Read/Write|Enabled                |
|qwantify                       |games                      |PVC      |-                |/games                                          |Read/Write|Enabled                |
|ra-rom-processor               |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|ra-rom-processor               |cache                      |PVC      |-                |/cache                                          |Read/Write|Enabled                |
|ra-rom-processor               |input                      |PVC      |-                |/input                                          |Read/Write|Enabled                |
|ra-rom-processor               |output                     |PVC      |-                |/output                                         |Read/Write|Enabled                |
|ra-rom-processor               |backup                     |PVC      |-                |/backup                                         |Read/Write|Enabled                |
|radarrsync                     |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|radicale                       |config                     |PVC      |-                |-                                               |Read/Write|Mount Path not Defined |
|radicale                       |users                      |custom   |-                |/etc/radicale/users                             |Read Only |Enabled                |
|radicale                       |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|raneto                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|rapidphotodownloader           |datadir                    |PVC      |-                |/rapidphotodownloader                           |Read/Write|Enabled                |
|rapidphotodownloader           |destinantionfolder         |PVC      |-                |/media/destination                              |Read/Write|Enabled                |
|rapidphotodownloader           |sourcefolder               |PVC      |-                |/media/source                                   |Read/Write|Enabled                |
|raspberrymatic                 |config                     |PVC      |-                |/usr/local                                      |Read/Write|Enabled                |
|raspberrymatic                 |modules                    |hostPath |/lib/modules     |/lib/modules                                    |Read Only |Enabled                |
|raspberrymatic                 |sys                        |hostPath |/sys             |/sys                                            |Read/Write|Enabled                |
|raspberrymatic                 |control                    |hostPath |/run/udev/control|/run/udev/control                               |Read/Write|Enabled                |
|reactive-resume                |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|recipes                        |media                      |PVC      |-                |/opt/recipes/mediafiles                         |Read/Write|Enabled                |
|recipes                        |static                     |emptyDir |-                |/opt/recipes/staticfiles                        |Read/Write|Enabled                |
|recipes                        |recipes-config             |custom   |-                |/etc/nginx/nginx.conf                           |Read/Write|Enabled                |
|red-discordbot                 |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|redisinsight                   |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|redisinsight                   |logs                       |PVC      |-                |/logs                                           |Read/Write|Enabled                |
|redm                           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|remotely                       |data                       |PVC      |-                |/remotely-data                                  |Read/Write|Enabled                |
|restic-rest-server             |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|restreamer                     |config                     |PVC      |-                |/core/config                                    |Read/Write|Enabled                |
|restreamer                     |data                       |PVC      |-                |/core/data                                      |Read/Write|Enabled                |
|rflood                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|rickroll                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|rimgo                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|rmlint                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|rmlint                         |searchlocation             |PVC      |-                |/root                                           |Read/Write|Enabled                |
|root                           |appdata                    |PVC      |-                |/appdata                                        |Read/Write|Enabled                |
|rss-proxy                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|rss-to-telegram                |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|rstudio                        |config                     |PVC      |-                |/home/rstudio/.config/rstudio                   |Read/Write|Enabled                |
|rstudio                        |workspace                  |PVC      |-                |/home/rstudio/workspace                         |Read/Write|Enabled                |
|rtmpserver                     |dash                       |PVC      |-                |/mnt/dash                                       |Read/Write|Enabled                |
|rtmpserver                     |hls                        |PVC      |-                |/mnt/hls                                        |Read/Write|Enabled                |
|rust                           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|rust                           |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|rustpad                        |storagedatabase            |PVC      |-                |/persist                                        |Read/Write|Enabled                |
|s3backup                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|s3sync                         |backupsourceexample        |PVC      |-                |/data/example                                   |Read Only |Enabled                |
|scprime                        |metadata                   |PVC      |-                |/scp-data                                       |Read/Write|Enabled                |
|scprime                        |storage                    |PVC      |-                |/storage                                        |Read/Write|Enabled                |
|scrypted                       |server                     |PVC      |-                |/server/volume                                  |Read/Write|Enabled                |
|scrypted                       |media                      |PVC      |-                |/media/external                                 |Read/Write|Enabled                |
|sdtd                           |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|sdtd                           |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|searx                          |config                     |PVC      |-                |/etc/searx                                      |Read/Write|Enabled                |
|searxng                        |config                     |PVC      |-                |/etc/searxng                                    |Read/Write|Enabled                |
|seedsync                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|seedsync                       |downloads                  |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|self-service-password          |config                     |PVC      |-                |/assets/custom                                  |Read/Write|Enabled                |
|self-service-password          |logs                       |PVC      |-                |/www/logs                                       |Read/Write|Enabled                |
|send                           |uploadpath                 |PVC      |-                |/uploads                                        |Read/Write|Enabled                |
|senseai-server                 |data                       |PVC      |-                |/usr/share/CodeProject/SenseAI                  |Read/Write|Enabled                |
|serpbear                       |data                       |PVC      |-                |/app/data                                       |Read/Write|Enabled                |
|servas                         |nginx                      |PVC      |-                |/var/run/nginx                                  |Read/Write|Enabled                |
|serviio                        |hostpath2                  |PVC      |-                |/opt/serviio/library                            |Read/Write|Enabled                |
|serviio                        |hostpath3                  |PVC      |-                |/opt/serviio/plugins                            |Read/Write|Enabled                |
|serviio                        |hostpath4                  |PVC      |-                |/opt/serviio/log                                |Read/Write|Enabled                |
|serviio                        |hostpath5                  |PVC      |-                |/media/serviio                                  |Read/Write|Enabled                |
|sftpgo                         |backupdirectory            |PVC      |-                |/srv/sftpgo/backups                             |Read/Write|Enabled                |
|sftpgo                         |configpath                 |PVC      |-                |/var/lib/sftpgo                                 |Read/Write|Enabled                |
|sftpgo                         |data                       |PVC      |-                |/srv/sftpgo/data                                |Read/Write|Enabled                |
|sftpgo                         |shareaccess                |PVC      |-                |/shareaccess                                    |Read/Write|Enabled                |
|shaarli                        |cache                      |PVC      |-                |/var/www/shaarli/cache                          |Read/Write|Enabled                |
|shaarli                        |data                       |PVC      |-                |/var/www/shaarli/data                           |Read/Write|Enabled                |
|shadowsocks                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|shapeshifter-obfuscator        |config                     |PVC      |-                |/state                                          |Read/Write|Enabled                |
|sheetable                      |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|shiori                         |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|shiori                         |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|shortipy                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|sia-daemon                     |datadirectory              |PVC      |-                |/sia-data                                       |Read/Write|Enabled                |
|sinusbot                       |data                       |PVC      |-                |/opt/sinusbot/data                              |Read/Write|Enabled                |
|sinusbot                       |scriptspath                |PVC      |-                |/opt/sinusbot/scripts                           |Read/Write|Enabled                |
|slack-invite                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|snipe-it                       |logs                       |PVC      |-                |/var/www/html/storage/logs                      |Read/Write|Enabled                |
|snipe-it                       |data                       |PVC      |-                |/var/lib/snipeit/data                           |Read/Write|Enabled                |
|snipe-it                       |backups                    |PVC      |-                |/var/lib/snipeit/dumps                          |Read/Write|Enabled                |
|snowflake-proxy                |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|socials                        |socials                    |PVC      |-                |/app/people                                     |Read/Write|Enabled                |
|somfyprotect2mqtt              |configfile                 |secret   |-                |/config/config.yaml                             |Read Only |Enabled                |
|sonarqube                      |data                       |PVC      |-                |/opt/sonarqube/data                             |Read/Write|Enabled                |
|sonarqube                      |extensions                 |PVC      |-                |/opt/sonarqube/extensions                       |Read/Write|Enabled                |
|sonarqube                      |logs                       |PVC      |-                |/opt/sonarqube/logs                             |Read/Write|Enabled                |
|songkong                       |music                      |PVC      |-                |/music                                          |Read/Write|Enabled                |
|songkong                       |songkongconfig             |PVC      |-                |/songkong                                       |Read/Write|Enabled                |
|sourcegraph                    |applicationdatastoragepath |PVC      |-                |/var/opt/sourcegraph                            |Read/Write|Enabled                |
|sourcegraph                    |configstoragepath          |PVC      |-                |/etc/sourcegraph                                |Read/Write|Enabled                |
|spaceengineers                 |savegame                   |PVC      |-                |/appdata/space-engineers/instances/Saves/       |Read/Write|Enabled                |
|spaceengineers                 |serverconfig               |PVC      |-                |/appdata/space-engineers/instances              |Read/Write|Enabled                |
|spaceengineers                 |serverfiles                |PVC      |-                |/appdata/space-engineers/SpaceEngineersDedicated|Read/Write|Enabled                |
|spaceengineers                 |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|speedtest-tracker              |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|splunk                         |appcreds                   |PVC      |-                |/opt/splunk/etc/                                |Read/Write|Enabled                |
|splunk                         |config                     |PVC      |-                |/opt/splunk/var                                 |Read/Write|Enabled                |
|splunk                         |datap                      |PVC      |-                |/splunkdata                                     |Read/Write|Enabled                |
|sqlite-web                     |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|st-reborn-server               |config                     |PVC      |-                |/home/server/config                             |Read/Write|Enabled                |
|st-reborn-server               |logs                       |PVC      |-                |/home/server/logs                               |Read/Write|Enabled                |
|st-reborn-server               |data                       |PVC      |-                |/home/server/Data                               |Read/Write|Enabled                |
|stackedit                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|standardnotes-web              |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|starmade                       |serverfiles                |PVC      |-                |/starmade                                       |Read/Write|Enabled                |
|stationeers                    |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|stationeers                    |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|statping-ng                    |data                       |PVC      |-                |/app                                            |Read/Write|Enabled                |
|steam-headless                 |home                       |PVC      |-                |/home/default                                   |Read/Write|Enabled                |
|steam-headless                 |games                      |PVC      |-                |/mnt/games                                      |Read/Write|Enabled                |
|steam-headless                 |flatpak                    |PVC      |-                |/var/lib/flatpak                                |Read/Write|Enabled                |
|storm                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|stun-turn-server               |containerpath              |PVC      |-                |/stun-turn                                      |Read/Write|Enabled                |
|suistartpage                   |appdata                    |PVC      |-                |/usr/share/nginx/html                           |Read/Write|Enabled                |
|survivethenights               |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|survivethenights               |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|synapse                        |config                     |configMap|-                |/data                                           |Read/Write|Enabled                |
|synapse                        |secret                     |secret   |-                |/data/secret                                    |Read/Write|Enabled                |
|synapse                        |key                        |PVC      |-                |/data/keys                                      |Read/Write|Enabled                |
|synapse                        |media                      |PVC      |-                |/data/media_store                               |Read/Write|Enabled                |
|synapse                        |uploads                    |PVC      |-                |/uploads                                        |Read/Write|Enabled                |
|tachidesk-docker               |appdata                    |PVC      |-                |/home/suwayomi/.local/share/Tachidesk           |Read/Write|Enabled                |
|tachidesk-docker               |library                    |PVC      |-                |/home/suwayomi/.local/share/Tachidesk/downloads |Read/Write|Enabled                |
|tachidesk-docker               |local-library              |PVC      |-                |/home/suwayomi/.local/share/Tachidesk/local     |Read/Write|Enabled                |
|tanoshi                        |directoryconfig            |PVC      |-                |/tanoshi                                        |Read/Write|Enabled                |
|tar1090                        |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|tasmoadmin                     |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|tasmobackup                    |data                       |PVC      |-                |/var/www/html/data                              |Read/Write|Enabled                |
|tasmocompiler                  |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|tauticord                      |logs                       |PVC      |-                |/logs                                           |Read/Write|Enabled                |
|teamspeak3                     |data                       |PVC      |-                |/var/ts3server                                  |Read/Write|Enabled                |
|technitium                     |config                     |PVC      |-                |/etc/dns/config                                 |Read/Write|Enabled                |
|teedy-docs                     |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|telethon-downloader            |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|telethon-downloader            |pathdownload               |PVC      |-                |/download                                       |Read/Write|Enabled                |
|telethon-downloader            |pathwatch                  |PVC      |-                |/watch                                          |Read/Write|Enabled                |
|terraria-tshock                |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|theforest                      |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|theforest                      |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|thumba                         |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|thumba                         |video                      |PVC      |-                |/app/video                                      |Read/Write|Enabled                |
|thunderbird                    |data                       |PVC      |-                |/thunderbird                                    |Read/Write|Enabled                |
|timetagger                     |config                     |PVC      |-                |/root/_timetagger                               |Read/Write|Enabled                |
|tonido                         |tonido                     |PVC      |-                |/unRAID                                         |Read/Write|Enabled                |
|tracks                         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|traefik-forward-auth           |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|traktarr                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|trango                         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|troddit                        |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|ts-dnsserver                   |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|ts3-manager                    |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|tubearchivist-es               |data                       |PVC      |-                |/usr/share/elasticsearch/data                   |Read/Write|Enabled                |
|tubearchivist-redisjson        |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|tubesync                       |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|tubesync                       |downloads                  |PVC      |-                |/downloads                                      |Read/Write|Enabled                |
|tvhproxy                       |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|twingate-connector             |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|twonky-server                  |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|twonky-server                  |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|typecho                        |config                     |PVC      |-                |/app/usr                                        |Read/Write|Enabled                |
|ubuntu-xrdp                    |ubuntu-xrdp                |PVC      |-                |/home/ubuntu/unraid                             |Read/Write|Enabled                |
|umami                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|ungoogled-chromium             |datadir                    |PVC      |-                |/ungoogledchromium                              |Read/Write|Enabled                |
|universal-media-server         |config                     |PVC      |-                |/root/.config/UMS/                              |Read/Write|Enabled                |
|universal-media-server         |media                      |PVC      |-                |/media                                          |Read/Write|Enabled                |
|unturned                       |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|unturned                       |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|upsnap                         |data                       |PVC      |-                |/app/pb_data                                    |Read/Write|Enabled                |
|urban-terror                   |datadir                    |PVC      |-                |/urbanterror                                    |Read/Write|Enabled                |
|v-rising                       |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|v-rising                       |steamcmd                   |PVC      |-                |/serverdata/steamcmd                            |Read/Write|Enabled                |
|valetudo-mapper                |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|vaulthunters                   |data                       |PVC      |-                |/data                                           |Read/Write|Enabled                |
|venstar2mqtt                   |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|vertex                         |config                     |PVC      |-                |/vertex                                         |Read/Write|Enabled                |
|vintage-story                  |serverfiles                |PVC      |-                |/vintagestory                                   |Read/Write|Enabled                |
|virt-manager                   |devkvm                     |PVC      |-                |/dev/kvm                                        |Read/Write|Enabled                |
|virt-manager                   |images                     |PVC      |-                |/var/lib/libvirt/images                         |Read/Write|Enabled                |
|virt-manager                   |libvirt-sock               |PVC      |-                |/var/run/libvirt/libvirt-sock                   |Read/Write|Enabled                |
|virt-manager                   |rootfolder                 |PVC      |-                |/root                                           |Read/Write|Enabled                |
|vlmcsd-kms-server              |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|vorta                          |backupsfrom                |PVC      |-                |/data/bkp_from                                  |Read Only |Enabled                |
|vorta                          |backupsto                  |PVC      |-                |/data/bkp_to                                    |Read/Write|Enabled                |
|vorta                          |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|wbo                            |data                       |PVC      |-                |/opt/app/server-data                            |Read/Write|Enabled                |
|webp-server                    |storagecache               |PVC      |-                |/opt/exhaust                                    |Read/Write|Enabled                |
|webp-server                    |storagepics                |PVC      |-                |/opt/pics                                       |Read Only |Enabled                |
|wger                           |media                      |PVC      |-                |/home/wger/media                                |Read/Write|Enabled                |
|wger                           |static                     |emptyDir |-                |/home/wger/static                               |Read/Write|Enabled                |
|wger                           |wger-config                |custom   |-                |/etc/nginx/conf.d                               |Read/Write|Enabled                |
|wifi-card                      |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|wireshark                      |varrun                     |emptyDir |-                |/var/run                                        |Read/Write|Enabled                |
|wireshark                      |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|wyoming-piper                  |config                     |PVC      |-                |/data                                           |Read/Write|Enabled                |
|wyoming-whisper                |config                     |PVC      |-                |/data                                           |Read/Write|Enabled                |
|xbackbone                      |config                     |PVC      |-                |/app/config                                     |Read/Write|Enabled                |
|xmrig                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|xonotic                        |serverfiles                |PVC      |-                |/serverdata/serverfiles                         |Read/Write|Enabled                |
|xware                          |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|yacreaderlibraryserver         |comics                     |PVC      |-                |/comics                                         |Read/Write|Enabled                |
|yacreaderlibraryserver         |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|yacy                           |appdata                    |PVC      |-                |/opt/yacy_search_server/DATA                    |Read/Write|Enabled                |
|yourls                         |-                          |-        |-                |-                                               |-         |Persistence not Defined|
|youtrack                       |data                       |PVC      |-                |/opt/youtrack/data                              |Read/Write|Enabled                |
|youtrack                       |conf                       |PVC      |-                |/opt/youtrack/conf                              |Read/Write|Enabled                |
|youtrack                       |logs                       |PVC      |-                |/opt/youtrack/logs                              |Read/Write|Enabled                |
|youtrack                       |backups                    |PVC      |-                |/opt/youtrack/backups                           |Read/Write|Enabled                |
|youtrack                       |youtracktemp               |emptyDir |-                |/opt/youtrack/temp                              |Read/Write|Enabled                |
|z80pack                        |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|zabbix                         |serveralertscripts         |PVC      |-                |/usr/lib/zabbix/alertscripts                    |Read/Write|Enabled                |
|zabbix                         |serverexternalscripts      |PVC      |-                |/usr/lib/zabbix/externalscripts                 |Read/Write|Enabled                |
|zabbix                         |servermodules              |PVC      |-                |/var/lib/zabbix/modules                         |Read/Write|Enabled                |
|zabbix                         |serverenc                  |PVC      |-                |/var/lib/zabbix/enc                             |Read/Write|Enabled                |
|zabbix                         |serversshkeys              |PVC      |-                |/var/lib/zabbix/ssh_keys                        |Read/Write|Enabled                |
|zabbix                         |serversslcerts             |PVC      |-                |/var/lib/zabbix/ssl/certs                       |Read/Write|Enabled                |
|zabbix                         |serversslkeys              |PVC      |-                |/var/lib/zabbix/ssl/keys                        |Read/Write|Enabled                |
|zabbix                         |serversslca                |PVC      |-                |/var/lib/zabbix/ssl/ssl_ca                      |Read/Write|Enabled                |
|zabbix                         |serverexport               |PVC      |-                |/var/lib/zabbix/export                          |Read/Write|Enabled                |
|zabbix                         |snmptraps                  |PVC      |-                |/var/lib/zabbix/snmptraps                       |Read/Write|Enabled                |
|zabbix                         |snmpmibs                   |PVC      |-                |/var/lib/zabbix/mibs                            |Read/Write|Enabled                |
|zabbix                         |hostproc                   |hostPath |/proc            |/host/proc                                      |Read Only |Enabled                |
|zabbix                         |hostsys                    |hostPath |/sys             |/host/sys                                       |Read Only |Enabled                |
|zabbix                         |agentconf                  |PVC      |-                |/etc/zabbix/zabbix_agentd.d                     |Read/Write|Enabled                |
|zabbix                         |agentenc                   |PVC      |-                |/var/lib/zabbix/enc                             |Read/Write|Enabled                |
|zabbix                         |agentbuffer                |PVC      |-                |/var/lib/zabbix/buffer                          |Read/Write|Enabled                |
|zabbix                         |javagatewaylibs            |PVC      |-                |/usr/sbin/zabbix_java/ext_lib                   |Read/Write|Enabled                |
|zoneminder                     |config                     |PVC      |-                |/config                                         |Read/Write|Enabled                |
|zoneminder                     |datapath                   |PVC      |-                |/var/cache/zoneminder                           |Read/Write|Enabled                |
|zusam                          |data                       |PVC      |-                |/zusam/data                                     |Read/Write|Enabled                |

## Enterprise

| App | Volume Name | Type | Host Path | Mount Path | Mode | Status |
|:----|:-----------:|:----:|:----------|:-----------|:----:|:------:|
|authelia      |config     |PVC     |-       |/config                  |Read/Write|Enabled                |
|blocky        |-          |-       |-       |-                        |-         |Persistence not Defined|
|clusterissuer |-          |-       |-       |-                        |-         |Persistence not Defined|
|grafana       |config     |PVC     |-       |/opt/bitnami/grafana/data|Read/Write|Enabled                |
|grafana       |grafana-tmp|emptyDir|-       |/opt/bitnami/grafana/tmp |Read/Write|Enabled                |
|metallb-config|-          |-       |-       |-                        |-         |Persistence not Defined|
|prometheus    |-          |-       |-       |-                        |-         |Persistence not Defined|
|traefik       |plugins    |emptyDir|-       |/plugins-storage         |Read/Write|Enabled                |
|vaultwarden   |data       |PVC     |-       |/data                    |Read/Write|Enabled                |

## Operators

| App | Volume Name | Type | Host Path | Mount Path | Mode | Status |
|:----|:-----------:|:----:|:----------|:-----------|:----:|:------:|
|cert-manager       |-                   |-       |-       |-          |-         |Persistence not Defined|
|cloudnative-pg     |scratch-data        |emptyDir|-       |/controller|Read/Write|Enabled                |
|cloudnative-pg     |webhook-certificates|PVC     |-       |-          |Read/Write|Mount Path not Defined |
|metallb            |webhook-server-cert |PVC     |-       |-          |Read/Write|Mount Path not Defined |
|metallb            |metallb-excludel2   |PVC     |-       |-          |Read/Write|Mount Path not Defined |
|metallb            |memberlist          |PVC     |-       |-          |Read/Write|Mount Path not Defined |
|prometheus-operator|-                   |-       |-       |-          |-         |Persistence not Defined|

> If you notice something wrong in the above info, please notify us so we can update the generator script
