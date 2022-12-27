# Container Security

##### Detected Containers

          tccr.io/truecharts/dashmachine:latest@sha256:3494875c908ffd6c158a2eabc537a3d67521dc7ed2180fc1e6d75d2e023e8ab7
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/dashmachine:latest@sha256:3494875c908ffd6c158a2eabc537a3d67521dc7ed2180fc1e6d75d2e023e8ab7**

#### Container: tccr.io/truecharts/dashmachine:latest@sha256:3494875c908ffd6c158a2eabc537a3d67521dc7ed2180fc1e6d75d2e023e8ab7 (debian 10.5)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2020-27350   |   MEDIUM  |  1.8.2.1 | 1.8.2.2 |
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.1 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.9-3 | 1.9-3+deb10u1 |
| inetutils-ping         |    CVE-2020-10188   |   CRITICAL  |  2:1.9.4-7 | 2:1.9.4-7+deb10u1 |
| inetutils-ping         |    CVE-2019-0053   |   HIGH  |  2:1.9.4-7 | 2:1.9.4-7+deb10u2 |
| inetutils-ping         |    CVE-2022-39028   |   HIGH  |  2:1.9.4-7 | 2:1.9.4-7+deb10u2 |
| inetutils-ping         |    CVE-2021-40491   |   MEDIUM  |  2:1.9.4-7 | 2:1.9.4-7+deb10u2 |
| libapt-pkg5.0         |    CVE-2020-27350   |   MEDIUM  |  1.8.2.1 | 1.8.2.2 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.1 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libbz2-1.0         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u5 |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25314   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u6 |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u1 |  |
| libexpat1         |    DSA-5085-2   |   UNKNOWN  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u4 |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.8.4-5 | 1.8.4-5+deb10u1 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-4 | 2:6.1.2+dfsg-4+deb10u1 |
| libgnutls30         |    CVE-2021-20231   |   CRITICAL  |  3.6.7-4+deb10u5 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2021-20232   |   CRITICAL  |  3.6.7-4+deb10u5 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2020-24659   |   HIGH  |  3.6.7-4+deb10u5 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u5 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u5 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u5 |  |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| liblz4-1         |    CVE-2021-3520   |   CRITICAL  |  1.8.3-1 | 1.8.3-1+deb10u1 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.4-1 | 5.2.4-1+deb10u1 |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libp11-kit0         |    CVE-2020-29361   |   HIGH  |  0.23.15-2 | 0.23.15-2+deb10u1 |
| libp11-kit0         |    CVE-2020-29363   |   HIGH  |  0.23.15-2 | 0.23.15-2+deb10u1 |
| libp11-kit0         |    CVE-2020-29362   |   MEDIUM  |  0.23.15-2 | 0.23.15-2+deb10u1 |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libseccomp2         |    CVE-2019-9893   |   LOW  |  2.3.3-4 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.8-1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libsqlite3-0         |    CVE-2020-35527   |   CRITICAL  |  3.27.2-3 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19923   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19925   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19959   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-20218   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13630   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-35525   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-16168   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-13434   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13435   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-13632   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-15358   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u4 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u6 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u3 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u4 | 241-7~deb10u8 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u4 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u4 | 241-7~deb10u8 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u4 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libzstd1         |    CVE-2021-24031   |   MEDIUM  |  1.3.8+dfsg-3 | 1.3.8+dfsg-3+deb10u1 |
| libzstd1         |    CVE-2021-24032   |   MEDIUM  |  1.3.8+dfsg-3 | 1.3.8+dfsg-3+deb10u2 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| openssl         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u2 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u3 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2019-1551   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u4 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| openssl         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u6 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2020a-0+deb10u1 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2020a-0+deb10u1 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u1 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Flask-Caching         |    CVE-2021-33026   |   CRITICAL  |  1.9.0 |  |
| Jinja2         |    CVE-2020-28493   |   MEDIUM  |  2.11.2 | 2.11.3 |
| Mako         |    CVE-2022-40023   |   HIGH  |  1.1.3 | 1.2.2 |
| Pillow         |    CVE-2021-25287   |   CRITICAL  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2021-25288   |   CRITICAL  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2021-25289   |   CRITICAL  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-34552   |   CRITICAL  |  7.2.0 | 8.3.0 |
| Pillow         |    CVE-2022-22817   |   CRITICAL  |  7.2.0 | 9.0.0 |
| Pillow         |    CVE-2022-24303   |   CRITICAL  |  7.2.0 | 9.0.1 |
| Pillow         |    CVE-2020-35653   |   HIGH  |  7.2.0 | 8.1.0 |
| Pillow         |    CVE-2020-35654   |   HIGH  |  7.2.0 | 8.1.0 |
| Pillow         |    CVE-2021-23437   |   HIGH  |  7.2.0 | 8.3.2 |
| Pillow         |    CVE-2021-25290   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-25291   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-25293   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-27921   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-27922   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-27923   |   HIGH  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-28676   |   HIGH  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2021-28677   |   HIGH  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2022-45198   |   HIGH  |  7.2.0 | 9.2.0 |
| Pillow         |    CVE-2022-45199   |   HIGH  |  7.2.0 | 9.3.0 |
| Pillow         |    CVE-2020-35655   |   MEDIUM  |  7.2.0 | 8.1.0 |
| Pillow         |    CVE-2021-25292   |   MEDIUM  |  7.2.0 | 8.1.1 |
| Pillow         |    CVE-2021-28675   |   MEDIUM  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2021-28678   |   MEDIUM  |  7.2.0 | 8.2.0 |
| Pillow         |    CVE-2022-22815   |   MEDIUM  |  7.2.0 | 9.0.0 |
| Pillow         |    CVE-2022-22816   |   MEDIUM  |  7.2.0 | 9.0.0 |
| Pillow         |    GHSA-jgpv-4h4c-xhw3   |   MEDIUM  |  7.2.0 | 8.1.2 |
| Pillow         |    GHSA-4fx9-vc88-q2xc   |   LOW  |  7.2.0 | 9.0.0 |
| Werkzeug         |    CVE-2022-29361   |   CRITICAL  |  1.0.1 | 2.1.1 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2020.6.20 | 2022.12.07 |
| markdown2         |    CVE-2021-26813   |   HIGH  |  2.3.9 | 2.4.0 |
| pip         |    CVE-2021-3572   |   MEDIUM  |  20.2.3 | 21.1 |
| urllib3         |    CVE-2021-33503   |   HIGH  |  1.25.10 | 1.26.5 |

