# Mounted Volumes

This document lists the mounted volumes for each App. The intro needs improvement ;)

## 稳定的

| 应用                         |    Volume Name     |    类型     | Host Path       | Mount Path                                     |    Mode    |           状态            |
|:-------------------------- |:------------------:|:---------:|:--------------- |:---------------------------------------------- |:----------:|:-----------------------:|
| airdcpp-web客户端             |       config       |    PVC    | -               | /.airdcpp                                      | Read/Write |         Enabled         |
| 空声纳文                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 气声纳向导                      |       config       |    PVC    | -               | /airsonic                                      | Read/Write |         Enabled         |
| 气声纳向导                      |       music        |    PVC    | -               | /music                                         | Read/Write |         Enabled         |
| 气声纳向导                      |      podcasts      |    PVC    | -               | /podcasts                                      | Read/Write |         Enabled         |
| 气声纳向导                      |     playlists      |    PVC    | -               | /playlists                                     | Read/Write |         Enabled         |
| 专辑                         |         数据         |    PVC    | -               | /opt/alist/data                                | Read/Write |         Enabled         |
| amcrest2mqtt               |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 安诺纳迪文                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 安诺纳迪文                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| apache-musicindex          |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| appdaemon                  |        conf        |    PVC    | -               | /conf                                          | Read/Write |         Enabled         |
| appdaemon                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| aria2                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| aria2                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 粗略性                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 粗略性                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 音频书架                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 音频书架                       |     audiobooks     |    PVC    | -               | /audiobooks                                    | Read/Write |         Enabled         |
| 音频书架                       |      metadata      |    PVC    | -               | /metadata                                      | Read/Write |         Enabled         |
| authelia                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 自动音乐下载器                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 自动音乐下载器                    |         数据         |    PVC    | -               | /downloads-amd                                 | Read/Write |         Enabled         |
| 宝宝贝座                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 宝宝贝座                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 底座                         |         数据         |    PVC    | -               | /baserow/data                                  | Read/Write |         Enabled         |
| bazarr                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 蜜蜂：                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 蜜蜂：                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 博客                         |         数据         |    PVC    | -               | /var/www/html/data                             | Read/Write |         Enabled         |
| boinc                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| boinc                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| booksonic-air              |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 书店                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 书店                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 无浏览器chrome                 |     downloads      |    PVC    | -               | /downloads                                     | Read/Write |         Enabled         |
| 无浏览器chrome                 |         度量         |    PVC    | -               | /metrics                                       | Read/Write |         Enabled         |
| 居中                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 居中                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| calibre                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| calibre                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 口径网络                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 作弊模式                       |      storage       |    PVC    | -               | /var/www/html/images/                          | Read/Write |         Enabled         |
| 作弊模式                       |      content       |    PVC    | -               | /var/www/html/content/                         | Read/Write |         Enabled         |
| clamav                     |    sigdatabase     |    PVC    | -               | /var/lib/clamav                                | Read/Write |         Enabled         |
| clamav                     |      scandir       |    PVC    | -               | /scandir                                       | Read Only  |         Enabled         |
| clamav                     |        logs        |    PVC    | -               | /logs                                          | Read/Write |         Enabled         |
| 克森文                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 云9                         |        code        |    PVC    | -               | /code                                          | Read/Write |         Enabled         |
| 云9                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 代码服务器                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| commento-plusplus          |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 调度器                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 调度器                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 加密Folio                    |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 自定义应用                      |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 网上厨师                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 黑色                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 黑色                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 破折点                        |      host-mnt      | hostPath  | /               | /mnt/host                                      | Read Only  |         Enabled         |
| 破折点                        |        mem         | hostPath  | /dev/mem        | /dev/mem                                       | Read Only  |         Enabled         |
| davos                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| davos                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| ddclient                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| ddclient                   |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| ddns-go                    |         数据         |    PVC    | -               | /root                                          | Read/Write |         Enabled         |
| dns-updater                |         数据         |    PVC    | -               | /updater/data                                  | Read/Write |         Enabled         |
| 十月                         |       config       |    PVC    | -               | /opt/deCONZ                                    | Read/Write |         Enabled         |
| 认为ix                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 认为ix                       |         数据         |    PVC    | -               | /downloads                                     | Read/Write |         Enabled         |
| 深堆栈...                     |         数据         |    PVC    | -               | /datastore                                     | Read/Write |         Enabled         |
| 深堆栈...                     |     modelstore     |    PVC    | -               | /modelstore/detection                          | Read/Write |         Enabled         |
| 淡入淡出                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 淡入淡出                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 数码                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 数码                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| dillinger                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| dillinger                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| dizquetv                   |       config       |    PVC    | -               | /home/node/app/.dizquetv                       | Read/Write |         Enabled         |
| 停靠人员组成                     |       varrun       | emptyDir  | -               | -                                              | Read/Write | Persistence is Disabled |
| 停靠人员组成                     |        mnt         | hostPath  | /mnt            | /mnt                                           | Read/Write |         Enabled         |
| 停靠人员组成                     |        root        | hostPath  | /root           | /root                                          | Read/Write |         Enabled         |
| 停靠人员组成                     |      cluster       | hostPath  | /cluster        | /cluster                                       | Read/Write |         Enabled         |
| 停靠人员组成                     |  docker-certs-ca   |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| dokuwiki                   |       config       |    PVC    | -               | /bitnami/dokuwiki                              | Read/Write |         Enabled         |
| domoticz                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| domoticz                   |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| doplarr                    |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 双拍照                        |         数据         |    PVC    | -               | /.storage                                      | Read/Write |         Enabled         |
| doublecommander            |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| doublecommander            |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| drawio                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| dsmr-reader                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 管道数                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 管道数                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 重复项                        |       config       |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| emby                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| embystat                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| embystat                   |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| emulatorjs                 |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| emulatorjs                 |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| emulatorjs                 |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 无尽的                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 无尽的                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 眼镜                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 眼镜                         |     platformio     |    PVC    | -               | /.platformio                                   | Read/Write |         Enabled         |
| etherpad                   |         数据         |    PVC    | -               | /opt/etherpad-lite/var                         | Read/Write |         Enabled         |
| etherpad                   |        app         |    PVC    | -               | /opt/etherpad-lite/app                         | Read/Write |         Enabled         |
| 外部服务                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| ferdi-server               |         数据         |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| ferdi-server               |         配方         |    PVC    | -               | /app/recipes                                   | Read/Write |         Enabled         |
| 文件浏览器                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 文件浏览器                      |      database      |    PVC    | -               | /database                                      | Read/Write |         Enabled         |
| 文件浏览器                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 文件流                        |         数据         |    PVC    | -               | /app/Data                                      | Read/Write |         Enabled         |
| 文件流                        |        logs        |    PVC    | -               | /app/Logs                                      | Read/Write |         Enabled         |
| 文件流                        |        temp        |    PVC    | -               | /temp                                          | Read/Write |         Enabled         |
| 文件流                        |       media        |    PVC    | -               | /media                                         | Read/Write |         Enabled         |
| filezilla                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| filezilla                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| fireflyiii                 |         数据         |    PVC    | -               | /var/www/html/storage/upload                   | Read/Write |         Enabled         |
| firefox                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| firefox                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| firefox-syncserver         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| Flexverr                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 机队                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 机队                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| flexget                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| flexget                    |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 水流                         |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| fluidd                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| focalboard                 |      uploads       |    PVC    | -               | /uploads                                       | Read/Write |         Enabled         |
| foldingathome              |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| foldingathome              |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 矿石                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 弗莱德乌斯                      |       config       |    PVC    | -               | /etc/raddb                                     | Read/Write |         Enabled         |
| 淡入淡出                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 朋友卡                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 朋友卡                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 朋友卡                        |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 差距                         |         数据         |    PVC    | -               | /usr/data                                      | Read/Write |         Enabled         |
| gitea                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| gitea                      |        temp        | emptyDir  | -               | /tmp                                           | Read/Write |         Enabled         |
| gitea                      |       varlib       | emptyDir  | -               | /var/lib/gitea                                 | Read/Write |         Enabled         |
| 金币                         |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 金币                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 发光                         |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 正在校正                       |         数据         |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| 草地                         |       config       |    PVC    | -               | /opt/bitnami/grafana/data                      | Read/Write |         Enabled         |
| 拉夫                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 拉夫                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 研发师                        |      persist       |    PVC    | -               | /persist                                       | Read/Write |         Enabled         |
| 格罗西文                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| guacamole-client           |     initdbdata     |    PVC    | -               | /initdbdata                                    | Read/Write |         Enabled         |
| guacamole-client           |      temphack      |    PVC    | -               | /opt/guacamole/postgresql-hack                 | Read/Write |         Enabled         |
| guacamole-client           |    temphackalso    |    PVC    | -               | /opt/guacamole/postgresql                      | Read/Write |         Enabled         |
| 瓜克德                        |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 哈布里堡                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 哈布里堡                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 锤子                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 锤子                         |       assets       |    PVC    | -               | /assets                                        | Read/Write |         Enabled         |
| 手枪                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 手枪                         |      storage       |    PVC    | -               | /storage                                       | Read/Write |         Enabled         |
| 手枪                         |       output       |    PVC    | -               | /output                                        | Read/Write |         Enabled         |
| haste-server               |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 耳机                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 耳机                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 健康检查                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 套期赛克                       |      uploads       |    PVC    | -               | /hedgedoc/public/uploads                       | Read/Write |         Enabled         |
| heimdall                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| homar                      |       config       |    PVC    | -               | /app/data/configs                              | Read/Write |         Enabled         |
| homar                      |       icons        |    PVC    | -               | /app/public/icons                              | Read/Write |         Enabled         |
| 家庭助理                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 家庭助理                       |        init        |  custom   | -               | /config/init                                   | Read Only  |         Enabled         |
| 主人                         |       config       |    PVC    | -               | /www/assets                                    | Read/Write |         Enabled         |
| htpcmanager                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| htpcmanager                |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 超音速-ng                     |       config       |    PVC    | -               | /root/.hyperion                                | Read/Write |         Enabled         |
| icantbelieveitsnotvaletudo |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| icantbelieveitsnotvaletudo |      settings      |  custom   | -               | /app/config.json                               | Read/Write |         Enabled         |
| icinga2                    |       config       |    PVC    | -               | /etc/icinga2                                   | Read/Write |         Enabled         |
| icinga2                    |         数据         |    PVC    | -               | /var/lib/icinga2                               | Read/Write |         Enabled         |
| icinga2                    |         网页         |    PVC    | -               | /etc/icingaweb2                                | Read/Write |         Enabled         |
| icinga2                    |       ssmtp        |    PVC    | -               | /etc/ssmtp                                     | Read/Write |         Enabled         |
| 冒名-服务器                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 发明树                        |         数据         |    PVC    | -               | /home/inventree/data                           | Read/Write |         Enabled         |
| 发明树                        |  inventree-config  |  custom   | -               | /etc/nginx/nginx.conf                          | Read/Write |         Enabled         |
| ipfs                       |         数据         |    PVC    | -               | /data/ipfs                                     | Read/Write |         Enabled         |
| ipfs                       |      staging       |    PVC    | -               | /export                                        | Read/Write |         Enabled         |
| ipfs                       |        ipfs        |    PVC    | -               | /ipfs                                          | Read/Write |         Enabled         |
| ipfs                       |        ipns        |    PVC    | -               | /ipns                                          | Read/Write |         Enabled         |
| ispy-agent-dvr             |       config       |    PVC    | -               | /agent/Media/XML                               | Read/Write |         Enabled         |
| ispy-agent-dvr             |       media        |    PVC    | -               | /agent/Media/WebServerRoot/Media               | Read/Write |         Enabled         |
| ispy-agent-dvr             |      commands      |    PVC    | -               | /agent/Commands                                | Read/Write |         Enabled         |
| iyuuplus                   |       config       |    PVC    | -               | /IYUU/db                                       | Read/Write |         Enabled         |
| iyuuplus                   |      torrents      |    PVC    | -               | /torrents                                      | Read/Write |         Enabled         |
| iyuuplus                   |      btbackup      |    PVC    | -               | /BT_backup                                     | Read/Write |         Enabled         |
| jackett                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| jdownloader2               |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| jdownloader2               |       output       |    PVC    | -               | /output                                        | Read/Write |         Enabled         |
| jellyfin                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| jellyfin                   |       cache        | emptyDir  | -               | /cache                                         | Read/Write |         Enabled         |
| jellyseerr                 |       config       |    PVC    | -               | /app/config                                    | Read/Write |         Enabled         |
| joplin-服务器                 |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| k8s-网关                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| kanboard                   |         数据         |    PVC    | -               | /var/www/app/data                              | Read/Write |         Enabled         |
| kanboard                   |        ssl         |    PVC    | -               | /etc/nginx/ssl                                 | Read/Write |         Enabled         |
| kavita                     |       config       |    PVC    | -               | /kavita/config                                 | Read/Write |         Enabled         |
| kavita                     |       manga        |    PVC    | -               | /manga                                         | Read/Write |         Enabled         |
| kimai                      |         数据         |    PVC    | -               | /opt/kimai/var/data                            | Read/Write |         Enabled         |
| kimai                      |      plugins       |    PVC    | -               | /opt/kimai/var/plugins                         | Read/Write |         Enabled         |
| 毫秒                         |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 无头数                        |       config       |    PVC    | -               | /config/.kodi                                  | Read/Write |         Enabled         |
| 无头数                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| koel                       |       music        |    PVC    | -               | /music                                         | Read/Write |         Enabled         |
| koel                       |       covers       |    PVC    | -               | /var/www/html/public/img/covers                | Read/Write |         Enabled         |
| koel                       |    searchindex     |    PVC    | -               | /var/www/html/storage/search-indexes           | Read/Write |         Enabled         |
| komga                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| komga                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 科皮亚                        |       config       |    PVC    | -               | /app/config                                    | Read/Write |         Enabled         |
| 科皮亚                        |       cache        |    PVC    | -               | /app/cache                                     | Read/Write |         Enabled         |
| 科皮亚                        |        logs        |    PVC    | -               | /app/logs                                      | Read/Write |         Enabled         |
| 科皮亚                        |       rclone       |    PVC    | -               | /app/rclone                                    | Read/Write |         Enabled         |
| kutt                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 兰拉拉                        |       config       |    PVC    | -               | /home/koyomi/lanraragi/database                | Read/Write |         Enabled         |
| 兰拉拉                        |      content       |    PVC    | -               | /home/koyomi/lanraragi/content                 | Read/Write |         Enabled         |
| lazylibrarian              |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| lazylibrarian              |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| leaf2mqtt                  |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 清理时间                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| libreddit                  |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| libreoffice                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| libreoffice                |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| librephotics               |       media        |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| librephotics               |  protected-media   |    PVC    | -               | /protected_media                               | Read/Write |         Enabled         |
| librephotics               |        logs        |    PVC    | -               | /logs                                          | Read/Write |         Enabled         |
| librephotics               |       cache        |    PVC    | -               | /root/.cache                                   | Read/Write |         Enabled         |
| librephotics               | librephotos-config |  custom   | -               | /etc/nginx/nginx.conf                          | Read/Write |         Enabled         |
| librespeed                 |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| lidarr                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 链接                         |        logs        |    PVC    | -               | /app/storage/logs                              | Read/Write |         Enabled         |
| 链接                         |      backups       |    PVC    | -               | /app/storage/app/backups                       | Read/Write |         Enabled         |
| 链接中                        |         数据         |    PVC    | -               | /etc/linkding/data                             | Read/Write |         Enabled         |
| littellink                 |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| logitech-media-服务器         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| loki                       |       config       |    密文     | -               | /etc/loki                                      | Read/Write |         Enabled         |
| lychee                     |        conf        |    PVC    | -               | /conf                                          | Read/Write |         Enabled         |
| lychee                     |        sym         |    PVC    | -               | /sym                                           | Read/Write |         Enabled         |
| lychee                     |      uploads       |    PVC    | -               | /uploads                                       | Read/Write |         Enabled         |
| 马凯姆夫文                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 马凯姆夫文                      |      storage       |    PVC    | -               | /storage                                       | Read/Write |         Enabled         |
| 马凯姆夫文                      |       output       |    PVC    | -               | /output                                        | Read/Write |         Enabled         |
| matomo                     |         数据         |    PVC    | -               | /bitnami/matomo                                | Read/Write |         Enabled         |
| 最重要的                       |       config       |    PVC    | -               | /mattermost/config                             | Read/Write |         Enabled         |
| 最重要的                       |         数据         |    PVC    | -               | /mattermost/data                               | Read/Write |         Enabled         |
| 最重要的                       |        logs        |    PVC    | -               | /mattermost/logs                               | Read/Write |         Enabled         |
| 最重要的                       |      plugins       |    PVC    | -               | /mattermost/plugins                            | Read/Write |         Enabled         |
| 最重要的                       |   clientplugins    |    PVC    | -               | /mattermost/client/plugins                     | Read/Write |         Enabled         |
| 最重要的                       |    bleveindexes    |    PVC    | -               | /mattermost/bleve-indexes                      | Read/Write |         Enabled         |
| 肉类                         |       config       |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| medusa                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| medusa                     |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| meshroom                   |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 冶金                         |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 米塔                         |     downloads      |    PVC    | -               | /downloads                                     | Read/Write |         Enabled         |
| 矿工基石                       |       config       |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 矿工-java                    |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 雷测试                        |       config       |    PVC    | -               | /config/.minetest                              | Read/Write |         Enabled         |
| 雷测试                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| miniflux                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 迷你的                        |       config       |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 小型控制台                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 小型控制台                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| minisatip                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| minisatip                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| mkvtoolnix                 |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| mkvtoolnix                 |      storage       |    PVC    | -               | /storage                                       | Read/Write |         Enabled         |
| ml 工作区                     |     workspace      |    PVC    | -               | /workspace                                     | Read/Write |         Enabled         |
| ml 工作区                     |        shm         | emptyDir  | -               | /dev/shm                                       | Read/Write |         Enabled         |
| 莫尼卡                        |       config       |    PVC    | -               | /var/www/html/storage                          | Read/Write |         Enabled         |
| 恒星座                        |         数据         |    PVC    | -               | /etc/mosdns                                    | Read/Write |         Enabled         |
| 蚊子                         |         数据         |    PVC    | -               | /mosquitto/data                                | Read/Write |         Enabled         |
| 蚊子                         |     configinc      |    PVC    | -               | /mosquitto/configinc                           | Read/Write |         Enabled         |
| 蚊子                         |  mosquitto-config  |  custom   | -               | /mosquitto/config/mosquitto.conf               | Read/Write |         Enabled         |
| 毫流                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 毫流                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| muximux                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| muximux                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| mylar                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| mylar                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| mysql-工作台                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| mysql-工作台                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 无                          |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| nano-钱包                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| navidrome                  |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| netdata                    |       config       |    PVC    | -               | /etc/netdata                                   | Read/Write |         Enabled         |
| netdata                    |        lib         |    PVC    | -               | /var/lib/netdata                               | Read/Write |         Enabled         |
| netdata                    |       cache        |    PVC    | -               | /var/cache/netdata                             | Read/Write |         Enabled         |
| netdata                    |       passwd       | hostPath  | /etc/passwd     | /host/etc/passwd                               | Read Only  |         Enabled         |
| netdata                    |       group        | hostPath  | /etc/group      | /host/etc/group                                | Read Only  |         Enabled         |
| netdata                    |        proc        | hostPath  | /proc           | /host/proc                                     | Read Only  |         Enabled         |
| netdata                    |        dev         | hostPath  | /dev            | /host/dev                                      | Read Only  |         Enabled         |
| netdata                    |        sys         | hostPath  | /sys            | /host/sys                                      | Read Only  |         Enabled         |
| netdata                    |         os         | hostPath  | /etc/os-release | /host/etc/os-release                           | Read Only  |         Enabled         |
| netdata                    |  netdata-configs   |  custom   | -               | /etc/netdata/truecharts-defaults/.netdata.conf | Read/Write |         Enabled         |
| 下个云端                       |        html        |    PVC    | -               | /var/www/html                                  | Read/Write |         Enabled         |
| 下个云端                       |         数据         |    PVC    | -               | /var/www/html/data                             | Read/Write |         Enabled         |
| 下个云端                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 下个云端                       |       cache        | emptyDir  | -               | /var/cache/nginx                               | Read/Write |         Enabled         |
| 下个云端                       |       nginx        |  custom   | -               | /etc/nginx                                     | Read Only  |         Enabled         |
| 下一个                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 下一个                        |     recordings     |    PVC    | -               | /recordings                                    | Read/Write |         Enabled         |
| 下一个                        |       buffer       |    PVC    | -               | /buffer                                        | Read/Write |         Enabled         |
| ngircd                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| ngircd                     |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| nntp2nntp                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| nntp2nntp                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| nocodb                     |         数据         |    PVC    | -               | /usr/app/data                                  | Read/Write |         Enabled         |
| 节点红色                       |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| novnc                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 不使用                        |       config       |    PVC    | -               | /etc/ntfy                                      | Read/Write |         Enabled         |
| 不使用                        |       cache        |    PVC    | -               | /var/cache/ntfy                                | Read/Write |         Enabled         |
| nullserv                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| nzbget                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| nzbhydra                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| octoprint                  |         数据         |    PVC    | -               | /octoprint                                     | Read/Write |         Enabled         |
| octoprint                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| odoo                       |        odoo        |    PVC    | -               | /var/lib/odoo                                  | Read/Write |         Enabled         |
| odoo                       |       addons       |    PVC    | -               | /mnt/extra-addons                              | Read/Write |         Enabled         |
| omada-controller           |         数据         |    PVC    | -               | /opt/tplink/EAPController/data                 | Read/Write |         Enabled         |
| omada-controller           |        work        |    PVC    | -               | /opt/tplink/EAPController/work                 | Read/Write |         Enabled         |
| ombi                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 仅Office-document-server    |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| Openhab                    |       config       |    PVC    | -               | /openhab/conf                                  | Read/Write |         Enabled         |
| Openhab                    |       addons       |    PVC    | -               | /openhab/addons                                | Read/Write |         Enabled         |
| Openhab                    |      userdata      |    PVC    | -               | /openhab/userdata                              | Read/Write |         Enabled         |
| Openhab                    |        init        |  custom   | -               | /etc/cont-init.d/enable-console-logging.sh     | Read/Write |         Enabled         |
| 开放公里                       |       config       |    PVC    | -               | /opt/tomcat/repository                         | Read/Write |         Enabled         |
| 开放公里                       |        init        |  custom   | -               | /config/init                                   | Read Only  |         Enabled         |
| openldap                   |       varrun       | emptyDir  | -               | -                                              | Read/Write | Persistence is Disabled |
| openspeedtest              |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| openvscode-服务器             |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| openvscode-服务器             |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 组织者                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 组织者                        |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| oscam                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| oscam                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 大纲                         |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 监督者                        |       config       |    PVC    | -               | /app/config                                    | Read/Write |         Enabled         |
| 自拍照                        |       config       |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| owncloud-ocis              |         数据         |    PVC    | -               | /var/lib/ocis                                  | Read/Write |         Enabled         |
| 无纸状态                       |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 无纸状态                       |      consume       |    PVC    | -               | /consume                                       | Read/Write |         Enabled         |
| 无纸状态                       |       media        |    PVC    | -               | /media                                         | Read/Write |         Enabled         |
| 纸张合并                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 纸张合并                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| pgadmin                    |       config       |    PVC    | -               | /var/lib/pgadmin                               | Read/Write |         Enabled         |
| 光标                         |      storage       |    PVC    | -               | /assets                                        | Read/Write |         Enabled         |
| 光标                         |        temp        | emptyDir  | -               | /photoprism/temp                               | Read/Write |         Enabled         |
| 光标                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 光标                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 照片视图                       |       cache        |    PVC    | -               | /cache                                         | Read/Write |         Enabled         |
| 照片视图                       |       photos       |    PVC    | -               | /photos                                        | Read/Write |         Enabled         |
| phpldapadmin               |       varrun       | emptyDir  | -               | -                                              | Read/Write | Persistence is Disabled |
| piaware                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| picoshare                  |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| pidgin                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| pidgin                     |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| pihole                     |       config       |    PVC    | -               | /etc/pihole                                    | Read/Write |         Enabled         |
| pihole                     |      dnsmasq       |    PVC    | -               | /etc/dnsmasq.d                                 | Read/Write |         Enabled         |
| pinry                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| pixapop                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| pixapop                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| plexx                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| podgrab                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 预切-你再度xyzy                 |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 项目结束                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 项目结束                       |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 项目结束                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 增益模式                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 普梅尤斯                       |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 质子网桥                       |       config       |    PVC    | -               | /root                                          | Read/Write |         Enabled         |
| prowlarr                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| pwndrop                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| pwndrop                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| pydio-单元格                  |       cells        |    PVC    | -               | /cells                                         | Read/Write |         Enabled         |
| pydio-单元格                  |         数据         |    PVC    | -               | /cells/data                                    | Read/Write |         Enabled         |
| pydio-单元格                  |        logs        |    PVC    | -               | /cells/logs                                    | Read/Write |         Enabled         |
| pydio-单元格                  |      services      |    PVC    | -               | /cells/services                                | Read/Write |         Enabled         |
| pydio-单元格                  | pydiocells-install |  custom   | -               | /cells/install.yml                             | Read/Write |         Enabled         |
| pyload                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| pyload                     |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| pylon                      |        code        |    PVC    | -               | /code                                          | Read/Write |         Enabled         |
| pylon                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| qbitTorrent                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| qinglong                   |         数据         |    PVC    | -               | /ql/data                                       | Read/Write |         Enabled         |
| 四面核体                       |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| quassel-web                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| quassel-web                |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 雷达尔                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 读取r                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 配方                         |       media        |    PVC    | -               | /opt/recipes/mediafiles                        | Read/Write |         Enabled         |
| 配方                         |        静态的         | emptyDir  | -               | /opt/recipes/staticfiles                       | Read/Write |         Enabled         |
| 配方                         |   recipes-config   |  custom   | -               | /etc/nginx/nginx.conf                          | Read/Write |         Enabled         |
| redmine                    |         数据         |    PVC    | -               | /usr/src/redmine/files                         | Read/Write |         Enabled         |
| reg                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 雷米纳                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 雷米纳                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 请求者                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 请求者                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 复原力同步                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 复原力同步                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| rsnapshot                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| rsnapshot                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| rss-bridge                 |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| rsshub                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| sabnzbd                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 满意的                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 检查                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 检查                         |       config       |    PVC    | -               | /opt/scrutiny/config                           | Read/Write |         Enabled         |
| 检查                         |      influxdb      |    PVC    | -               | /opt/scrutiny/influxdb                         | Read/Write |         Enabled         |
| 检查                         |        udev        | hostPath  | /run/udev       | /run/udev                                      | Read Only  |         Enabled         |
| ser2sock                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| shiori                     |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| shiori                     |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| shlink                     |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| shlink-web-client          |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| shorturl                   |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| shorturl                   |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| sickchill                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| sickchill                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| sickgear                   |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| sickgear                   |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 吸烟中                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 吸烟中                        |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 快照                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 代码片段                       |        logs        |    PVC    | -               | /var/www/html/storage/logs                     | Read/Write |         Enabled         |
| 代码片段                       |         数据         |    PVC    | -               | /var/lib/snipeit/data                          | Read/Write |         Enabled         |
| 代码片段                       |      backups       |    PVC    | -               | /var/lib/snipeit/dumps                         | Read/Write |         Enabled         |
| 声纳尔                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 速度测试导出器                    |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| spotweb                    |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| sqlitebrowser              |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| sqlitebrowser              |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 隐藏的                        |       config       |    PVC    | -               | /root/.stash                                   | Read/Write |         Enabled         |
| 静态的                        |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 静态的                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| statping                   |         数据         |    PVC    | -               | /app                                           | Read/Write |         Enabled         |
| storj节点                    |      identity      |    PVC    | -               | /app/identity                                  | Read/Write |         Enabled         |
| storj节点                    |      storage       |    PVC    | -               | /app/config                                    | Read/Write |         Enabled         |
| strapi                     |         数据         |    PVC    | -               | /srv/app                                       | Read/Write |         Enabled         |
| synapse                    |       config       | configMap | -               | /data                                          | Read/Write |         Enabled         |
| synapse                    |         密文         |    密文     | -               | /data/secret                                   | Read/Write |         Enabled         |
| synapse                    |        key         |    PVC    | -               | /data/keys                                     | Read/Write |         Enabled         |
| synapse                    |       media        |    PVC    | -               | /data/media_store                              | Read/Write |         Enabled         |
| synapse                    |      uploads       |    PVC    | -               | /uploads                                       | Read/Write |         Enabled         |
| synclounge                 |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 同步                         |       config       |    PVC    | -               | /var/syncthing                                 | Read/Write |         Enabled         |
| syslog-ng                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| syslog-ng                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 陶乌尔利                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| tdarr                      |      configs       |    PVC    | -               | /app/configs                                   | Read/Write |         Enabled         |
| tdarr                      |        服务器         |    PVC    | -               | /app/server                                    | Read/Write |         Enabled         |
| tdarr                      |        logs        |    PVC    | -               | /app/logs                                      | Read/Write |         Enabled         |
| tdarr                      |  transcode-cache   |    PVC    | -               | /temp                                          | Read/Write |         Enabled         |
| tdarr                      |       media        |    PVC    | -               | /media                                         | Read/Write |         Enabled         |
| tdarr                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| tdarr节点                    |      configs       |    PVC    | -               | /app/configs                                   | Read/Write |         Enabled         |
| tdarr节点                    |        logs        |    PVC    | -               | /app/logs                                      | Read/Write |         Enabled         |
| tdarr节点                    |  transcode-cache   |    PVC    | -               | /temp                                          | Read/Write |         Enabled         |
| tdarr节点                    |       media        |    PVC    | -               | /media                                         | Read/Write |         Enabled         |
| tdarr节点                    |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 团队语音3                      |         数据         |    PVC    | -               | /var/ts3server                                 | Read/Write |         Enabled         |
| teedy                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| thelounge                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| tinymediamanager           |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| tinymediamanager           |       movies       |    PVC    | -               | /media/movies                                  | Read/Write |         Enabled         |
| tinymediamanager           |      tvshows       |    PVC    | -               | /media/tvshows                                 | Read/Write |         Enabled         |
| traccar                    |         数据         |    PVC    | -               | /opt/traccar/data                              | Read/Write |         Enabled         |
| traefik                    |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 传输方式                       |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 三个注解                       |       config       |    PVC    | -               | /home/node                                     | Read/Write |         Enabled         |
| truecommand                |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| tt-rss                     |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| tt-rss                     |      plugins       |    PVC    | -               | /app/plugins.local                             | Read/Write |         Enabled         |
| tt-rss                     |       themes       |    PVC    | -               | /app/themes.local                              | Read/Write |         Enabled         |
| tvheadend                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| tvheadend                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| twtxt                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| twtxt                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| twtxt                      |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| typecho                    |       config       |    PVC    | -               | /app/usr                                       | Read/Write |         Enabled         |
| ubooquity                  |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| ubooquity                  |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| ubooquity                  |       books        |    PVC    | -               | /books                                         | Read/Write |         Enabled         |
| ubooquity                  |       comics       |    PVC    | -               | /comics                                        | Read/Write |         Enabled         |
| ubooquity                  |         文件         |    PVC    | -               | /files                                         | Read/Write |         Enabled         |
| unifi                      |       config       |    PVC    | -               | /unifi                                         | Read/Write |         Enabled         |
| 未曼文                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 未曼文                        |      library       |    PVC    | -               | /library                                       | Read/Write |         Enabled         |
| 未曼文                        |       remote       |    PVC    | -               | /tmp/unmanic/remote_library                    | Read/Write |         Enabled         |
| 未曼文                        |       cache        | emptyDir  | -               | /tmp/unmanic                                   | Read/Write |         Enabled         |
| 未曼文                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 解压器                        |     downloads      |    PVC    | -               | /downloads                                     | Read/Write |         Enabled         |
| unpoller                   |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| 高时钟                        |       config       |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| 上级机器人-promeus              |         -          |     -     | -               | -                                              |     -      | Persistence not Defined |
| valheim                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| valheim                    |      backups       |    PVC    | -               | /backups                                       | Read/Write |         Enabled         |
| 瓦尔登省                       |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 每次同步                       |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 每次同步                       |        sync        |    PVC    | -               | /Sync                                          | Read/Write |         Enabled         |
| vikunja                    |         文件         |    PVC    | -               | /app/vikunja/files                             | Read/Write |         Enabled         |
| vikunja                    |   vikunja-config   |  custom   | -               | /etc/nginx/conf.d/default.conf                 | Read/Write |         Enabled         |
| webgrabplus                |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| webgrabplus                |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| webgrabplus                |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| weblate                    |       config       |    PVC    | -               | /app/data                                      | Read/Write |         Enabled         |
| weblate                    |       cache        | emptyDir  | -               | /app/cache                                     | Read/Write |         Enabled         |
| 网站截图                       |    screenshots     |    PVC    | -               | /usr/src/website-shot/screenshots              | Read/Write |         Enabled         |
| wekan                      |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| 宽松的                        |       config       |    PVC    | -               | /etc/wireguard                                 | Read/Write |         Enabled         |
| whoogle                    |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| 维基耶斯                       |     wikicache      | emptyDir  | -               | /wiki/data/                                    | Read/Write |         Enabled         |
| 连线                         |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| 连线                         |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| x骨头                        |       config       |    PVC    | -               | /app/config                                    | Read/Write |         Enabled         |
| xteve                      |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| xwiki                      |       config       |    PVC    | -               | /usr/local/xwiki                               | Read/Write |         Enabled         |
| zerotier                   |       config       |    PVC    | -               | /var/lib/zerotier-one                          | Read/Write |         Enabled         |
| zerotier                   |        tun         | hostPath  | /dev/net/tun    | /dev/net/tun                                   | Read/Write |         Enabled         |
| zigbee2mqtt                |         数据         |    PVC    | -               | /data                                          | Read/Write |         Enabled         |
| znc                        |       varrun       | emptyDir  | -               | /var/run                                       | Read/Write |         Enabled         |
| znc                        |       config       |    PVC    | -               | /config                                        | Read/Write |         Enabled         |
| zwavejs2mqtt               |       config       |    PVC    | -               | /usr/src/app/store                             | Read/Write |         Enabled         |

## 依赖关系

| 应用         | Volume Name  |    类型    | Host Path     | Mount Path    |    Mode    |           状态            |
|:---------- |:------------:|:--------:|:------------- |:------------- |:----------:|:-----------------------:|
| 在线协作       |      -       |    -     | -             | -             |     -      | Persistence not Defined |
| mariadb    |      -       |    -     | -             | -             |     -      | Persistence not Defined |
| Memcached  |      -       |    -     | -             | -             |     -      | Persistence not Defined |
| mongodb    |      -       |    -     | -             | -             |     -      | Persistence not Defined |
| postgresql |      -       |    -     | -             | -             |     -      | Persistence not Defined |
| promtail   |  containers  | hostPath | /mnt          | /mnt          | Read Only  |         Enabled         |
| promtail   |     pods     | hostPath | /var/log/pods | /var/log/pods | Read Only  |         Enabled         |
| promtail   |     run      | hostPath | /run/promtail | /run/promtail | Read/Write |         Enabled         |
| promtail   |    config    |    密文    | -             | /etc/promtail | Read/Write |         Enabled         |
| 雷迪斯        | redis-health |  custom  | -             | /health       | Read/Write |         Enabled         |
| solr       |      -       |    -     | -             | -             |     -      | Persistence not Defined |

## 孵化器

| 应用                  |  Volume Name   |    类型    | Host Path     | Mount Path                               |    Mode    |           状态            |
|:------------------- |:--------------:|:--------:|:------------- |:---------------------------------------- |:----------:|:-----------------------:|
| Adguard-home        |     config     |   PVC    | -             | /opt/adguardhome/conf                    | Read/Write |         Enabled         |
| Adguard-home        |       数据       |   PVC    | -             | /opt/adguardhome/work                    | Read/Write |         Enabled         |
| 剧情模式                | appsmithstacks |   PVC    | -             | /appsmith-stacks                         | Read/Write |         Enabled         |
| 里昂文                 |       -        |    -     | -             | -                                        |     -      | Persistence not Defined |
| 真实的                 |     media      |   PVC    | -             | /media                                   | Read/Write |         Enabled         |
| 真实的                 |   templates    |   PVC    | -             | /templates                               | Read/Write |         Enabled         |
| 真实的                 |     certs      |   PVC    | -             | /certs                                   | Read/Write |         Enabled         |
| 真实的                 |     geoip      |   PVC    | -             | /geoip                                   | Read/Write |         Enabled         |
| avidemux            |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| avidemux            |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| 超棒的 ttrss           |     icons      |   PVC    | -             | /var/www/feed-icons                      | Read/Write |         Enabled         |
| 超棒的 ttrss           |    plugins     |   PVC    | -             | /var/www/plugins.local                   | Read/Write |         Enabled         |
| 超棒的 ttrss           |     themes     |   PVC    | -             | /var/www/themes.local                    | Read/Write |         Enabled         |
| clickhouse          |       -        |    -     | -             | -                                        |     -      | Persistence not Defined |
| 云签名                 |       -        |    -     | -             | -                                        |     -      | Persistence not Defined |
| 云端点数                |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| 云端点数                |     varrun     | emptyDir | -             | /var/run                                 | Read/Write |         Enabled         |
| 豪华服务器               |     config     |   PVC    | -             | /etc/cups                                | Read/Write |         Enabled         |
| 豪华服务器               |      dbus      | hostPath | /var/run/dbus | /var/run/dbus                            | Read/Write |         Enabled         |
| czkawka             |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| czkawka             |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| czkawka             |     trash      |   PVC    | -             | /trash                                   | Read/Write |         Enabled         |
| dupeguru            |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| dupeguru            |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| dupeguru            |     trash      |   PVC    | -             | /trash                                   | Read/Write |         Enabled         |
| etesync             |      app       |   PVC    | -             | /data                                    | Read/Write |         Enabled         |
| etesync             |       密文       |  custom  | -             | /data/secret.txt                         | Read Only  |         Enabled         |
| fancyindex          |     share      |   PVC    | -             | /share                                   | Read/Write |         Enabled         |
| filebot             |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| filebot             |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| filebot             |     watch      |   PVC    | -             | /watch                                   | Read/Write |         Enabled         |
| filebot             |     output     |   PVC    | -             | /output                                  | Read/Write |         Enabled         |
| 文件                  |     config     |   PVC    | -             | /var/www/html                            | Read/Write |         Enabled         |
| 文件                  |    userfile    |   PVC    | -             | /user-files                              | Read/Write |         Enabled         |
| 护卫车                 |     cache      | emptyDir | -             | /tmp/cache                               | Read/Write |         Enabled         |
| 护卫车                 |      shm       | emptyDir | -             | /dev/shm                                 | Read/Write |         Enabled         |
| 护卫车                 |     media      |   PVC    | -             | /media                                   | Read/Write |         Enabled         |
| 护卫车                 | frigate-config |  custom  | -             | /config/config.yml                       | Read/Write |         Enabled         |
| 幽灵：                 |    content     |   PVC    | -             | /var/lib/ghost/content                   | Read/Write |         Enabled         |
| 家庭桥子                |     config     |   PVC    | -             | /homebridge                              | Read/Write |         Enabled         |
| jitsi               |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| jitsi               |    crontabs    |   PVC    | -             | /var/spool/cron/crontabs                 | Read/Write |         Enabled         |
| jitsi               |  transcripts   |   PVC    | -             | /usr/share/jitsi-meet/transcripts        | Read/Write |         Enabled         |
| jitsi               | prosodyconfig  |   PVC    | -             | /prosodyconfig/config                    | Read/Write |         Enabled         |
| jitsi               | prosodyplugins |   PVC    | -             | /prosody-plugins-custom                  | Read/Write |         Enabled         |
| jitsi               |  jicofoconfig  |   PVC    | -             | /jicofoconfig/config                     | Read/Write |         Enabled         |
| jitsi               |   jvbconfig    |   PVC    | -             | /jvbconfig/config                        | Read/Write |         Enabled         |
| 跳转                  |  backgrounds   |   PVC    | -             | /backgrounds                             | Read/Write |         Enabled         |
| 跳转                  |     search     |   PVC    | -             | /search                                  | Read/Write |         Enabled         |
| 跳转                  |     sites      |   PVC    | -             | /sites                                   | Read/Write |         Enabled         |
| lancache-dns        |       -        |    -     | -             | -                                        |     -      | Persistence not Defined |
| lancache-monolithic |     config     |   PVC    | -             | /data/cache                              | Read/Write |         Enabled         |
| lancache-monolithic |      logs      |   PVC    | -             | /data/logs                               | Read/Write |         Enabled         |
| mediainfo           |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| mediainfo           |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| meshcentral         |       数据       |   PVC    | -             | /home/node/meshcentral/meshcentral-data  | Read/Write |         Enabled         |
| meshcentral         |       文件       |   PVC    | -             | /home/node/meshcentral/meshcentral-files | Read/Write |         Enabled         |
| 雷奥斯                 |     config     |   PVC    | -             | /var/games/minecraft                     | Read/Write |         Enabled         |
| mkvclaver           |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| mkvclaver           |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| piwigo              |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| piwigo              |     varrun     | emptyDir | -             | /var/run                                 | Read/Write |         Enabled         |
| 看来是可信的              |       -        |    -     | -             | -                                        |     -      | Persistence not Defined |
| plex-meta-manager   |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| 私人箱                 |      run       | emptyDir | -             | /run                                     | Read/Write |         Enabled         |
| 私人箱                 |  nginx-cache   | emptyDir | -             | /var/lib/nginx/tmp                       | Read/Write |         Enabled         |
| 私人箱                 |    conf-app    |  custom  | -             | /srv/cfg                                 | Read Only  |         Enabled         |
| 私人箱                 |    conf-php    |  custom  | -             | /etc/php8/conf.d/10-sizelimits.ini       | Read Only  |         Enabled         |
| 私人箱                 |   conf-nginx   |  custom  | -             | /etc/nginx/conf.d/sizelimits.conf        | Read Only  |         Enabled         |
| 小数                  |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| qdirstat            |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| qdirstat            |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| 偏差                  |     config     |   PVC    | -             | -                                        | Read/Write | Mount Path not Defined  |
| 偏差                  |     users      |  custom  | -             | /etc/radicale/users                      | Read Only  |         Enabled         |
| 偏差                  |       数据       |   PVC    | -             | /data                                    | Read/Write |         Enabled         |
| 自助密码                |     config     |   PVC    | -             | /assets/custom                           | Read/Write |         Enabled         |
| 自助密码                |      logs      |   PVC    | -             | /www/logs                                | Read/Write |         Enabled         |
| 传感器服务器              |       数据       |   PVC    | -             | /usr/share/CodeProject/SenseAI           | Read/Write |         Enabled         |
| technitium          |     config     |   PVC    | -             | /etc/dns/config                          | Read/Write |         Enabled         |
| 主题停车场               |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| tsmuxer             |     config     |   PVC    | -             | /config                                  | Read/Write |         Enabled         |
| tsmuxer             |    storage     |   PVC    | -             | /storage                                 | Read/Write |         Enabled         |
| 格子                  |     media      |   PVC    | -             | /home/wger/media                         | Read/Write |         Enabled         |
| 格子                  |      静态的       | emptyDir | -             | /home/wger/static                        | Read/Write |         Enabled         |
| 格子                  |  wger-config   |  custom  | -             | /etc/nginx/conf.d/default.conf           | Read/Write |         Enabled         |
| Youtubedl-material  |    appdata     |   PVC    | -             | /app/appdata                             | Read/Write |         Enabled         |
| Youtubedl-material  |     users      |   PVC    | -             | /app/users                               | Read/Write |         Enabled         |
| Youtubedl-material  | subscriptions  |   PVC    | -             | /app/subscriptions                       | Read/Write |         Enabled         |
| Youtubedl-material  |     audio      |   PVC    | -             | /app/audio                               | Read/Write |         Enabled         |
| Youtubedl-material  |     video      |   PVC    | -             | /app/video                               | Read/Write |         Enabled         |
| zabbix-服务器          |   snmptraps    |   PVC    | -             | /var/lib/zabbix/snmptraps                | Read/Write |         Enabled         |

> If you notice something wrong in the above info, please notify us so we can update the generator script
