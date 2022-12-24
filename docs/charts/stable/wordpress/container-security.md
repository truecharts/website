# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/wordpress:6.1.1@sha256:cc2f688e8a9f228db8640b2353ad6896fb2fb0152cfec5c49535f0dc084968bd
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb**

#### Container: tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb (debian 11.5)
    

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
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.0.1 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2021-43784   |   MEDIUM  |  v1.0.1 | 1.1.0 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.0.1 | v1.1.2 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210817142637-7d9622a276b7 | 0.0.0-20220412211240-33da011f77ad |

**Container: tccr.io/truecharts/wordpress:6.1.1@sha256:cc2f688e8a9f228db8640b2353ad6896fb2fb0152cfec5c49535f0dc084968bd**

#### Container: tccr.io/truecharts/wordpress:6.1.1@sha256:cc2f688e8a9f228db8640b2353ad6896fb2fb0152cfec5c49535f0dc084968bd (debian 11.5)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| imagemagick-6-common         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libaom0         |    CVE-2021-30473   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30474   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30475   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-0478   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36131   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36133   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36130   |   MEDIUM  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36135   |   MEDIUM  |  1.0.0.errata1-3 |  |
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
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libde265-0         |    CVE-2022-1253   |   CRITICAL  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21598   |   HIGH  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36409   |   HIGH  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21594   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21595   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21596   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21597   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21599   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21600   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21601   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21602   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21603   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21604   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21605   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21606   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-35452   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36408   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36410   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36411   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43235   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43236   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43237   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43238   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43239   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43240   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43241   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43242   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43243   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43244   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43245   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43248   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43249   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43250   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43252   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43253   |   MEDIUM  |  1.0.8-1 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libheif1         |    CVE-2020-23109   |   HIGH  |  1.11.0-1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
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
| libmagickcore-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libopenjp2-7         |    CVE-2021-3575   |   HIGH  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2021-29338   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2022-1122   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10505   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10506   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9113   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9114   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9115   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9116   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9117   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9580   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9581   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2017-17479   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16375   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16376   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-20846   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
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
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpdemux2         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpmux3         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.34-4+deb11u1 |  |
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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.0.1 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2021-43784   |   MEDIUM  |  v1.0.1 | 1.1.0 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.0.1 | v1.1.2 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210817142637-7d9622a276b7 | 0.0.0-20220412211240-33da011f77ad |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| guzzlehttp/guzzle         |    CVE-2022-29248   |   HIGH  |  7.3.0 | 7.4.3, 6.5.6 |
| guzzlehttp/guzzle         |    CVE-2022-31042   |   HIGH  |  7.3.0 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31043   |   HIGH  |  7.3.0 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31090   |   HIGH  |  7.3.0 | 7.4.5, 6.5.8 |
| guzzlehttp/guzzle         |    CVE-2022-31091   |   HIGH  |  7.3.0 | 6.5.8, 7.4.5 |
| guzzlehttp/psr7         |    CVE-2022-24775   |   HIGH  |  1.8.1 | 2.1.1, 1.8.4 |

