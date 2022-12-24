# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/shaarli:vmaster
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/shaarli:vmaster**

#### Container: tccr.io/truecharts/shaarli:vmaster (alpine 3.12.7)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.10.6-r0 | 2.10.7-r0 |
| busybox         |    CVE-2021-42378   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.31.1-r20 | 1.31.1-r22 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.31.1-r20 | 1.31.1-r21 |
| freetype         |    CVE-2022-27404   |   CRITICAL  |  2.10.4-r0 | 2.10.4-r1 |
| freetype         |    CVE-2022-27405   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| freetype         |    CVE-2022-27406   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libcurl         |    CVE-2021-22945   |   CRITICAL  |  7.77.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2021-22946   |   HIGH  |  7.77.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.77.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.77.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2021-22922   |   MEDIUM  |  7.77.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22923   |   MEDIUM  |  7.77.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22925   |   MEDIUM  |  7.77.0-r0 | 7.78.0-r0 |
| libcurl         |    CVE-2021-22947   |   MEDIUM  |  7.77.0-r0 | 7.79.0-r0 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.77.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.77.0-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2021-22924   |   LOW  |  7.77.0-r0 | 7.78.0-r0 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.35.2-r0 | 2.37.4-r0 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.10-r6 | 2.9.13-r0 |
| libxml2         |    CVE-2021-3541   |   MEDIUM  |  2.9.10-r6 | 2.9.12-r0 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.10-r6 | 2.9.14-r0 |
| ncurses-libs         |    CVE-2021-39537   |   HIGH  |  6.2_p20200523-r0 | 6.2_p20200523-r1 |
| ncurses-terminfo-base         |    CVE-2021-39537   |   HIGH  |  6.2_p20200523-r0 | 6.2_p20200523-r1 |
| php7         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-common         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-common         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-common         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-ctype         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-ctype         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-ctype         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-curl         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-curl         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-curl         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-fpm         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-fpm         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-fpm         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-gd         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-gd         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-gd         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-iconv         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-iconv         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-iconv         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-intl         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-intl         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-intl         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-json         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-json         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-json         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-mbstring         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-mbstring         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-mbstring         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-openssl         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-openssl         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-openssl         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-session         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-session         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-session         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-simplexml         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-simplexml         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-simplexml         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| php7-xml         |    CVE-2021-21703   |   HIGH  |  7.3.29-r0 | 7.3.32-r0 |
| php7-xml         |    CVE-2021-21706   |   MEDIUM  |  7.3.29-r0 | 7.3.31-r0 |
| php7-xml         |    CVE-2021-21707   |   MEDIUM  |  7.3.29-r0 | 7.3.33-r0 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.31.1-r20 | 1.31.1-r21 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.31.1-r20 | 1.31.1-r22 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.31.1-r20 | 1.31.1-r21 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

