# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/minisatip:v2021.12.01@sha256:6378c0a033bbb72295402a0ad4cc990bd858bfd4b83a2581831c9c7ff9688dc7
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/minisatip:v2021.12.01@sha256:6378c0a033bbb72295402a0ad4cc990bd858bfd4b83a2581831c9c7ff9688dc7**

#### Container: tccr.io/truecharts/minisatip:v2021.12.01@sha256:6378c0a033bbb72295402a0ad4cc990bd858bfd4b83a2581831c9c7ff9688dc7 (alpine 3.13)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.32.1-r7 | 1.32.1-r8 |
| busybox         |    CVE-2022-30065   |   HIGH  |  1.32.1-r7 | 1.32.1-r9 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.32.1-r7 | 1.32.1-r8 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.32.1-r7 | 1.32.1-r9 |
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

