# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/statping:v0.90.78@sha256:4d1d4d3bb8c4174abd3b2209624e6246684a2a3bb8330d05b42924b232fb9f50
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68**

#### Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68 (debian 11.6)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.34-4+deb11u1 |  |
| locales         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.1.0 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.1.0 | v1.1.2 |

**Container: tccr.io/truecharts/statping:v0.90.78@sha256:4d1d4d3bb8c4174abd3b2209624e6246684a2a3bb8330d05b42924b232fb9f50**

#### Container: tccr.io/truecharts/statping:v0.90.78@sha256:4d1d4d3bb8c4174abd3b2209624e6246684a2a3bb8330d05b42924b232fb9f50 (alpine 3.14.2)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2021-42378   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.33.1-r3 | 1.33.1-r7 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r3 | 1.33.1-r4 |
| busybox         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r3 | 1.33.1-r5 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r0 | 7.79.1-r4 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r4 |
| curl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r0 | 7.79.1-r4 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r4 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3p1-r2 | 3.3.3p1-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.33.1-r3 | 1.33.1-r6 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.33.1-r3 | 1.33.1-r7 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r3 | 1.33.1-r4 |
| ssl_client         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r3 | 1.33.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.30.20 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.30.20 |  |
| github.com/aws/aws-sdk-go         |    CVE-2022-2582   |   UNKNOWN  |  v1.30.20 | 1.34.0 |
| github.com/dgrijalva/jwt-go         |    CVE-2020-26160   |   HIGH  |  v3.2.0+incompatible |  |
| github.com/prometheus/client_golang         |    CVE-2022-21698   |   HIGH  |  v1.1.0 | 1.11.1 |
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20200622213623-75b288015ac9 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20200622213623-75b288015ac9 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20200622213623-75b288015ac9 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20200904194848-62affa334b73 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20200904194848-62affa334b73 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20200904194848-62affa334b73 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20200904194848-62affa334b73 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20200904194848-62affa334b73 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20200724161237-0e2f3a69832c | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.3 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.3 | 0.3.8 |

