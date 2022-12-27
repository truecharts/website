# Container Security

##### Detected Containers

          tccr.io/truecharts/flashpaper:latest@sha256:a784f26d36046473f36f3cf2c214f6ac63517c1b1434eb769fd15a7ee2f10c29
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/flashpaper:latest@sha256:a784f26d36046473f36f3cf2c214f6ac63517c1b1434eb769fd15a7ee2f10c29**

#### Container: tccr.io/truecharts/flashpaper:latest@sha256:a784f26d36046473f36f3cf2c214f6ac63517c1b1434eb769fd15a7ee2f10c29 (alpine 3.14.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.12.5-r1 | 2.12.6-r0 |
| busybox         |    CVE-2021-42378   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.33.1-r2 | 1.33.1-r7 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r4 |
| busybox         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r5 |
| curl         |    CVE-2021-22945   |   CRITICAL  |  7.77.0-r1 | 7.79.0-r0 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2021-22946   |   HIGH  |  7.77.0-r1 | 7.79.0-r0 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.77.0-r1 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.77.0-r1 | 7.79.1-r1 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.77.0-r1 | 7.79.1-r4 |
| curl         |    CVE-2021-22922   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| curl         |    CVE-2021-22923   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| curl         |    CVE-2021-22925   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| curl         |    CVE-2021-22947   |   MEDIUM  |  7.77.0-r1 | 7.79.0-r0 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r4 |
| curl         |    CVE-2021-22924   |   LOW  |  7.77.0-r1 | 7.78.0-r0 |
| curl         |    CVE-2022-35252   |   LOW  |  7.77.0-r1 | 7.79.1-r3 |
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2021-22945   |   CRITICAL  |  7.77.0-r1 | 7.79.0-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2021-22946   |   HIGH  |  7.77.0-r1 | 7.79.0-r0 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.77.0-r1 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.77.0-r1 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.77.0-r1 | 7.79.1-r4 |
| libcurl         |    CVE-2021-22922   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22923   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22925   |   MEDIUM  |  7.77.0-r1 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22947   |   MEDIUM  |  7.77.0-r1 | 7.79.0-r0 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r2 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.77.0-r1 | 7.79.1-r4 |
| libcurl         |    CVE-2021-22924   |   LOW  |  7.77.0-r1 | 7.78.0-r0 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.77.0-r1 | 7.79.1-r3 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3-r0 | 3.3.3p1-r3 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| libxml2         |    CVE-2022-2309   |   HIGH  |  2.9.12-r1 | 2.9.14-r1 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.12-r1 | 2.9.13-r0 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.12-r1 | 2.9.14-r2 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.12-r1 | 2.9.14-r2 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.12-r1 | 2.9.14-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| pcre2         |    CVE-2022-1586   |   CRITICAL  |  10.36-r0 | 10.36-r1 |
| pcre2         |    CVE-2022-1587   |   CRITICAL  |  10.36-r0 | 10.36-r1 |
| php7         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-common         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-common         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-common         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-common         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-common         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-common         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-fpm         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-fpm         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-fpm         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-fpm         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-fpm         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-fpm         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-opcache         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-opcache         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-opcache         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-opcache         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-opcache         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-opcache         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-opcache         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-opcache         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-opcache         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-opcache         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-opcache         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-openssl         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-openssl         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-openssl         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-openssl         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-openssl         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-openssl         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-pdo         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-pdo         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-pdo         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-pdo         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-pdo         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-pdo         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo_sqlite         |    CVE-2021-21708   |   CRITICAL  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo_sqlite         |    CVE-2022-37454   |   CRITICAL  |  7.4.20-r0 | 7.4.33-r0 |
| php7-pdo_sqlite         |    CVE-2021-21703   |   HIGH  |  7.4.20-r0 | 7.4.25-r0 |
| php7-pdo_sqlite         |    CVE-2022-31625   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo_sqlite         |    CVE-2022-31626   |   HIGH  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo_sqlite         |    CVE-2022-31630   |   HIGH  |  7.4.20-r0 | 7.4.33-r0 |
| php7-pdo_sqlite         |    CVE-2021-21705   |   MEDIUM  |  7.4.20-r0 | 7.4.21-r0 |
| php7-pdo_sqlite         |    CVE-2021-21706   |   MEDIUM  |  7.4.20-r0 | 7.4.24-r0 |
| php7-pdo_sqlite         |    CVE-2021-21707   |   MEDIUM  |  7.4.20-r0 | 7.4.26-r0 |
| php7-pdo_sqlite         |    CVE-2022-31628   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| php7-pdo_sqlite         |    CVE-2022-31629   |   MEDIUM  |  7.4.20-r0 | 7.4.32-r0 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.33.1-r2 | 1.33.1-r7 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r4 |
| ssl_client         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r5 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

