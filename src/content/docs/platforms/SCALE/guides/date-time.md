---
title: Date and Time Fixes
---

\*Credit to TrueCharts team member [Xstar97](https://xstar97thenoob.com) for the guide originally found [here](https://docs.xstar97thenoob.com/docs/platforms/scale/networking/scale-date-time/).

A guide on how to fix Scale's Date and time issues.

Truenas SCALE, like any other modern operating system, can have issues with time and date synchronization. If the time on your Truenas SCALE system is not properly synchronized, it can cause a variety of problems, including issues with DNS resolution, file synchronization, and more. This is important as well with database running apps, such as those running CloudnativePG or CNPG.

Fortunately, resolving time issues on Truenas SCALE is relatively easy. The first step is to open the system shell and run the following command to verify if your current local time matches what TrueNAS reports:

```bash
date
```

If the time/date does match then proceed to run the following commands:

```bash
sudo systemctl stop ntp && sudo ntpd -gq && sudo systemctl start ntp && date
```

The command will stop ntp, sync the clock with ntp server, start the ntp service and print date afterwards.

If the output of the "date" command matches the current local time for your system, then the time issue is resolved. However, if the output does not match, repeat the above steps until the system clock is properly synchronized.

It's also worth noting that if you are experiencing issues resolving DNS on your Truenas SCALE system, you can try running the "date" command in the system shell to see if there is an issue with the system clock. If the output of the "date" command does not match the current local time for your system, it is likely that the time issue is causing the DNS issue. In this case, follow the above steps to resolve the time issue and then try resolving the DNS issue again.
