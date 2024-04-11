---
title: godaddy-ddns
---

![Version: 5.8.4](https://img.shields.io/badge/Version-5.8.4-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: latest](https://img.shields.io/badge/AppVersion-latest-informational?style=flat-square)

Chart to provide a DDNS service for godaddy domains. Uses the GoDaddy REST API to update the given domain's DNS IP address to the public IP address of the host it is executing on. Performs a check every 10 minutes, but you can alter this if you like by modifying /etc/cron.d/godaddy-ddns inside the Chart.

## Chart Sources

- https://github.com/truecharts/charts/tree/master/charts/stable/godaddy-ddns
- https://hub.docker.com/r/jwater7/godaddy-publicip-updater

## Available Documentation

- [**Changelog**](./CHANGELOG.md)
