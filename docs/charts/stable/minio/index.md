---
title: minio
---

![Version: 10.0.0](https://img.shields.io/badge/Version-10.0.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2024.01.01](https://img.shields.io/badge/AppVersion-2024.01.01-informational?style=flat-square)

Minio is a self-hosted S3 storage server

:::Caution

When using a PVC the backup data will be stored on the dataset that holds the app data. If minio is used to store backup data to safe guard your application data it is recommended to configure it on a different zpool, this can be done with a hostpath.

:::

## Chart Sources

- https://github.com/truecharts/charts/tree/master/charts/stable/minio
- https://hub.docker.com/r/minio/minio
- https://github.com/minio/minio

## Available Documentation

- [**Changelog**](./CHANGELOG.md)
- [**Installation Notes**](./installation_notes.md)
