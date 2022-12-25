# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/tasmobackup:latest@sha256:f191e4de7867b74936d33cbb4d02ddc21515a0bc9327c9544174d3e88e2c5768
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/tasmobackup:latest@sha256:f191e4de7867b74936d33cbb4d02ddc21515a0bc9327c9544174d3e88e2c5768**

#### Container: tccr.io/truecharts/tasmobackup:latest@sha256:f191e4de7867b74936d33cbb4d02ddc21515a0bc9327c9544174d3e88e2c5768 (alpine 3.12.9)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| expat         |    CVE-2022-22822   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-22823   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-22824   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r1 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.2.9-r1 | 2.2.10-r2 |
| expat         |    CVE-2021-45960   |   HIGH  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2021-46143   |   HIGH  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-22825   |   HIGH  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-22826   |   HIGH  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-22827   |   HIGH  |  2.2.9-r1 | 2.2.10-r0 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.2.9-r1 | 2.2.10-r1 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.2.9-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.2.9-r1 | 2.2.10-r2 |
| freetype         |    CVE-2022-27404   |   CRITICAL  |  2.10.4-r0 | 2.10.4-r1 |
| freetype         |    CVE-2022-27405   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| freetype         |    CVE-2022-27406   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| gmp         |    CVE-2021-43618   |   HIGH  |  6.2.0-r0 | 6.2.1-r1 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.35.2-r0 | 2.37.4-r0 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.12-r0 | 2.9.13-r0 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.12-r0 | 2.9.14-r0 |
| ncurses-libs         |    CVE-2021-39537   |   HIGH  |  6.2_p20200523-r0 | 6.2_p20200523-r1 |
| ncurses-terminfo-base         |    CVE-2021-39537   |   HIGH  |  6.2_p20200523-r0 | 6.2_p20200523-r1 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

