# godaddy-ddns

![Version: 2.0.6](https://img.shields.io/badge/Version-2.0.6-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: "latest"](https://img.shields.io/badge/AppVersion-"latest"-informational?style=flat-square)

Chart to provide a DDNS service for godaddy domains. Uses the GoDaddy REST API to update the given domain's DNS IP address to the public IP address of the host it is executing on. Performs a check every 10 minutes, but you can alter this if you like by modifying /etc/cron.d/godaddy-ddns inside the Chart.

## Available Documentation

- [**Changelog**](CHANGELOG)

- [**Container Security**](container-security)

- [**Helm Security**](helm-security)

