# Container Security

##### Detected Containers

          tccr.io/truecharts/channels-dvr:latest@sha256:bfc3c73c1cefd578c121b6e3256a496ad9ee190a6a6901d3ad1b9aa2a7be082c
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/channels-dvr:latest@sha256:bfc3c73c1cefd578c121b6e3256a496ad9ee190a6a6901d3ad1b9aa2a7be082c**

#### Container: tccr.io/truecharts/channels-dvr:latest@sha256:bfc3c73c1cefd578c121b6e3256a496ad9ee190a6a6901d3ad1b9aa2a7be082c (alpine 3.13.2)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.12.1-r0 | 2.12.6-r0 |
| apk-tools         |    CVE-2021-30139   |   HIGH  |  2.12.1-r0 | 2.12.5-r0 |
| busybox         |    CVE-2021-28831   |   HIGH  |  1.32.1-r3 | 1.32.1-r4 |
| busybox         |    CVE-2021-42378   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.32.1-r3 | 1.32.1-r8 |
| busybox         |    CVE-2022-30065   |   HIGH  |  1.32.1-r3 | 1.32.1-r9 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.32.1-r3 | 1.32.1-r7 |
| busybox         |    CVE-2021-42375   |   MEDIUM  |  1.32.1-r3 | 1.32.1-r7 |
| curl         |    CVE-2021-22945   |   CRITICAL  |  7.74.0-r0 | 7.79.0-r0 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2021-22901   |   HIGH  |  7.74.0-r0 | 7.77.0-r0 |
| curl         |    CVE-2021-22946   |   HIGH  |  7.74.0-r0 | 7.79.0-r0 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.74.0-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.74.0-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2021-22876   |   MEDIUM  |  7.74.0-r0 | 7.76.0-r0 |
| curl         |    CVE-2021-22922   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| curl         |    CVE-2021-22923   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| curl         |    CVE-2021-22925   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| curl         |    CVE-2021-22947   |   MEDIUM  |  7.74.0-r0 | 7.79.0-r0 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| curl         |    CVE-2021-22890   |   LOW  |  7.74.0-r0 | 7.76.0-r0 |
| curl         |    CVE-2021-22898   |   LOW  |  7.74.0-r0 | 7.77.0-r0 |
| curl         |    CVE-2021-22924   |   LOW  |  7.74.0-r0 | 7.78.0-r0 |
| curl         |    CVE-2022-35252   |   LOW  |  7.74.0-r0 | 7.79.1-r3 |
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1j-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1j-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1j-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1j-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1j-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1j-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2021-22945   |   CRITICAL  |  7.74.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2021-22901   |   HIGH  |  7.74.0-r0 | 7.77.0-r0 |
| libcurl         |    CVE-2021-22946   |   HIGH  |  7.74.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.74.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.74.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2021-22876   |   MEDIUM  |  7.74.0-r0 | 7.76.0-r0 |
| libcurl         |    CVE-2021-22922   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22923   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22925   |   MEDIUM  |  7.74.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22947   |   MEDIUM  |  7.74.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.74.0-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2021-22890   |   LOW  |  7.74.0-r0 | 7.76.0-r0 |
| libcurl         |    CVE-2021-22898   |   LOW  |  7.74.0-r0 | 7.77.0-r0 |
| libcurl         |    CVE-2021-22924   |   LOW  |  7.74.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.74.0-r0 | 7.79.1-r3 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1j-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1j-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1j-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1j-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1j-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1j-r0 | 1.1.1q-r0 |
| ssl_client         |    CVE-2021-28831   |   HIGH  |  1.32.1-r3 | 1.32.1-r4 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.32.1-r3 | 1.32.1-r8 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.32.1-r3 | 1.32.1-r9 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.32.1-r3 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42375   |   MEDIUM  |  1.32.1-r3 | 1.32.1-r7 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

