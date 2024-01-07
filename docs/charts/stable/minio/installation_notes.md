---
title: Installation Notes
---

:::Written for version

App Version: 2023.12.23
Chart Version: 9.1.0

:::

:::Preparation

1. Create a dataset for the data mount of minio referred to as <minio_data>.
2. Make sure you have DNS setup for all buckets as S3 requires DNS to be set for each bucket. See "Using Ingress and API ingress is recommended"

:::

This a guide containing the minimal required settings for installation:

- Workload->Settings->Containers->Main Container->Image Environment
  - `MINIO_ROOT_USER` and `MINIO_ROOT_PASSWORD` represent the username and password used to login to minio
- Storage and Persistence->Integrated Persistent Storage->App Config Storage
  - `Type of Storage` set to host path
  - `Automatic Permissions Configuration`
    - `enabled` set to true
    - `Run CHOWN` set to true with a minimal value of 600
  - `Host Path` select the dataset <minio_data>
- Using Ingress and API ingress is recommended
  - Main Ingress: minio.mydomain.com
  - API ingress: bucket_name.minio.mydomain.com (one entry for each bucket)
