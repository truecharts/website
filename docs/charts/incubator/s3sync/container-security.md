# Container Security

##### Detected Containers

          tccr.io/truecharts/s3sync:latest@sha256:cc550ce4464f5b3740176376ff65c011ad4fdb59b7e894ba26a52689f5975fac
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/s3sync:latest@sha256:cc550ce4464f5b3740176376ff65c011ad4fdb59b7e894ba26a52689f5975fac**

#### Container: tccr.io/truecharts/s3sync:latest@sha256:cc550ce4464f5b3740176376ff65c011ad4fdb59b7e894ba26a52689f5975fac (debian 10.9)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
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
| iproute2         |    CVE-2019-20795   |   MEDIUM  |  4.20.0-2+deb10u1 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
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
| libgnutls30         |    CVE-2021-20231   |   CRITICAL  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2021-20232   |   CRITICAL  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2020-24659   |   HIGH  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u6 |  |
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
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libpython3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| libpython3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| libpython3.7-stdlib         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| libseccomp2         |    CVE-2019-9893   |   LOW  |  2.3.3-4 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.8-1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libsqlite3-0         |    CVE-2020-35527   |   CRITICAL  |  3.27.2-3+deb10u1 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-35525   |   HIGH  |  3.27.2-3+deb10u1 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3+deb10u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1n-0+deb10u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u6 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u6 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u6 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u7 | 241-7~deb10u8 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u7 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u7 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u7 | 241-7~deb10u8 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u7 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u7 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libxtables12         |    CVE-2012-2663   |   LOW  |  1.8.2-4 |  |
| libxtables12         |    CVE-2019-11360   |   LOW  |  1.8.2-4 |  |
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
| openssl         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1n-0+deb10u2 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u6 | 1.1.1n-0+deb10u3 |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u6 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u6 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u6 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u6 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| python-pip-whl         |    CVE-2019-20916   |   HIGH  |  18.1-5 |  |
| python-pip-whl         |    CVE-2021-3572   |   MEDIUM  |  18.1-5 |  |
| python-pip-whl         |    CVE-2018-20225   |   LOW  |  18.1-5 |  |
| python3-pip         |    CVE-2019-20916   |   HIGH  |  18.1-5 |  |
| python3-pip         |    CVE-2021-3572   |   MEDIUM  |  18.1-5 |  |
| python3-pip         |    CVE-2018-20225   |   LOW  |  18.1-5 |  |
| python3.7         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| python3.7         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| python3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u1 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u1 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u1 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| urllib3         |    CVE-2021-33503   |   HIGH  |  1.26.4 | 1.26.5 |

