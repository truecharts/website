---
title: Setting Inotify in TrueNAS SCALE
---

Setting the inotify settings in SCALE can help assist with some app deployment issues and performance problems.
It should be noted this is not a magic fix all.

**To check your current values you can do the following**

    cat /proc/sys/fs/inotify/max_user_watches
    cat /proc/sys/fs/inotify/max_user_instances

By default on SCALE BlueFin these will likely return **8129** and **128** respectively. This will be too low for most users.

**To change these values head to system settings**

system settings > advanced Settings > sysctl section.

It should be noted that adjusting these values will slightly increase ram usage.

Good values to start with would be:

- `fs.inotify.max_user_watches = 524288`
- `fs.inotify.max_user_instances = 512`

**Example**

![](./img/inotify.png)
