# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/grist:1.0.5@sha256:28352249ac21219bc64b2b63ed9241b7da87f3d1fca594a58bcdefb9be708913
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/grist:1.0.5@sha256:28352249ac21219bc64b2b63ed9241b7da87f3d1fca594a58bcdefb9be708913**

#### Container: tccr.io/truecharts/grist:1.0.5@sha256:28352249ac21219bc64b2b63ed9241b7da87f3d1fca594a58bcdefb9be708913 (debian 10.13)
    

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
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u6 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u9 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
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
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3+deb10u2 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  5.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| async         |    CVE-2021-43138   |   HIGH  |  2.6.3 | 2.6.4, 3.2.2 |
| async         |    CVE-2021-43138   |   HIGH  |  3.2.0 | 2.6.4, 3.2.2 |
| bootstrap         |    CVE-2016-10735   |   MEDIUM  |  3.3.5 | 3.4.0 |
| bootstrap         |    CVE-2018-14041   |   MEDIUM  |  3.3.5 | 4.1.2, 3.4.0 |
| bootstrap         |    CVE-2018-20676   |   MEDIUM  |  3.3.5 | 3.4.0 |
| bootstrap         |    CVE-2018-20677   |   MEDIUM  |  3.3.5 | 3.4.0 |
| bootstrap         |    CVE-2019-8331   |   MEDIUM  |  3.3.5 | 3.4.1, 4.3.1 |
| csv-parse         |    CVE-2019-17592   |   HIGH  |  3.2.0 | 4.4.6 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| ejs         |    CVE-2022-29078   |   CRITICAL  |  2.7.4 | 3.1.7 |
| electron         |    CVE-2022-4135   |   CRITICAL  |  19.0.9 | 19.1.8 |
| electron         |    CVE-2022-36077   |   MEDIUM  |  19.0.9 | 19.0.11, 20.0.1, 18.3.7 |
| express         |    CVE-2022-24999   |   HIGH  |  4.16.4 | 4.17.3 |
| got         |    CVE-2022-33987   |   MEDIUM  |  5.6.0 | 11.8.5, 12.1.0 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| got         |    CVE-2022-33987   |   MEDIUM  |  9.6.0 | 11.8.5, 12.1.0 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.3.0 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.3.0 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.3.0 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.3.0 | 9.0.0 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  1.4.0 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  2.0.2 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  2.0.2 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  2.0.2 | 3.2.1, 2.0.4, 1.4.2 |
| minimatch         |    CVE-2016-10540   |   HIGH  |  0.3.0 | 3.0.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  0.3.0 | 3.0.5 |
| minimatch         |    NSWG-ECO-118   |   HIGH  |  0.3.0 | &gt;=3.0.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  0.0.8 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  0.0.8 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.1.3 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  1.1.3 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.29.1 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.1 | 2.29.4 |
| node-fetch         |    CVE-2022-0235   |   HIGH  |  2.6.1 | 2.6.7, 3.1.1 |
| node-forge         |    CVE-2022-24771   |   HIGH  |  0.10.0 | 1.3.0 |
| node-forge         |    CVE-2022-24772   |   HIGH  |  0.10.0 | 1.3.0 |
| node-forge         |    CVE-2022-0122   |   MEDIUM  |  0.10.0 | 1.0.0 |
| node-forge         |    CVE-2022-24773   |   MEDIUM  |  0.10.0 | 1.3.0 |
| node-forge         |    GHSA-5rrq-pxf6-6jx5   |   LOW  |  0.10.0 | 1.0.0 |
| node-forge         |    GHSA-gf8q-jrpm-jvxq   |   LOW  |  0.10.0 | 1.0.0 |
| node-forge         |    CVE-2020-7720   |   HIGH  |  0.7.6 | 0.10.0 |
| node-forge         |    CVE-2022-24771   |   HIGH  |  0.7.6 | 1.3.0 |
| node-forge         |    CVE-2022-24772   |   HIGH  |  0.7.6 | 1.3.0 |
| node-forge         |    CVE-2022-0122   |   MEDIUM  |  0.7.6 | 1.0.0 |
| node-forge         |    CVE-2022-24773   |   MEDIUM  |  0.7.6 | 1.3.0 |
| node-forge         |    GHSA-5rrq-pxf6-6jx5   |   LOW  |  0.7.6 | 1.0.0 |
| node-forge         |    GHSA-gf8q-jrpm-jvxq   |   LOW  |  0.7.6 | 1.0.0 |
| node-forge         |    GHSA-wxgw-qj99-44c2   |   LOW  |  0.7.6 | 0.10.0 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.10.1 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| redis         |    CVE-2021-29469   |   HIGH  |  2.8.0 | 3.1.1 |
| redis         |    CVE-2021-29469   |   HIGH  |  3.1.0 | 3.1.1 |
| shell-quote         |    CVE-2016-10541   |   CRITICAL  |  1.4.3 | 1.6.1 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.4.3 | 1.7.3 |
| shell-quote         |    NSWG-ECO-117   |   HIGH  |  1.4.3 | &gt;=1.6.1 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.7.2 | 1.7.3 |
| tar         |    CVE-2021-32803   |   HIGH  |  6.0.2 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  6.0.2 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  6.0.2 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  6.0.2 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  6.0.2 | 6.1.9, 5.0.10, 4.4.18 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  7.4.4 | 5.2.3, 6.2.2, 7.4.6 |
| xml-crypto         |    GHSA-c27r-x354-4m68   |   HIGH  |  0.10.1 | 2.0.0 |
| xmldom         |    CVE-2022-39353   |   CRITICAL  |  0.1.19 |  |
| xmldom         |    CVE-2021-32796   |   MEDIUM  |  0.1.19 | 0.7.0 |
| xmldom         |    CVE-2021-21366   |   LOW  |  0.1.19 | 0.5.0 |
| xmldom         |    CVE-2022-39353   |   CRITICAL  |  0.1.31 |  |
| xmldom         |    CVE-2021-32796   |   MEDIUM  |  0.1.31 | 0.7.0 |
| xmldom         |    CVE-2021-21366   |   LOW  |  0.1.31 | 0.5.0 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| pip         |    CVE-2019-20916   |   HIGH  |  18.1 | 19.2 |
| pip         |    CVE-2021-3572   |   MEDIUM  |  18.1 | 21.1 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210908233432-aa78b53d3365 | 0.0.0-20220412211240-33da011f77ad |

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

**Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276**

#### Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276 (debian 11.6)
    

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

