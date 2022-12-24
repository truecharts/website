# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/nginx-proxy-manager:2.9.19@sha256:73be08c2f155c70a8e74f2f2683636333288f86d18f2fd94d2865b604387f84e
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

**Container: tccr.io/truecharts/nginx-proxy-manager:2.9.19@sha256:73be08c2f155c70a8e74f2f2683636333288f86d18f2fd94d2865b604387f84e**

#### Container: tccr.io/truecharts/nginx-proxy-manager:2.9.19@sha256:73be08c2f155c70a8e74f2f2683636333288f86d18f2fd94d2865b604387f84e (debian 10.13)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apache2-utils         |    CVE-2021-33193   |   HIGH  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2019-17567   |   MEDIUM  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2001-1534   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2003-1307   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2003-1580   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2003-1581   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2007-0086   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2007-1743   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2007-3303   |   LOW  |  2.4.38-3+deb10u8 |  |
| apache2-utils         |    CVE-2008-0456   |   LOW  |  2.4.38-3+deb10u8 |  |
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| binutils         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| cpp-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| cpp-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| g++-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| g++-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gcc-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| git         |    CVE-2022-24765   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git         |    CVE-2022-29187   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git         |    CVE-2022-39260   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git         |    CVE-2022-39253   |   MEDIUM  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.20.1-2+deb10u4 |  |
| git         |    CVE-2022-24975   |   LOW  |  1:2.20.1-2+deb10u4 |  |
| git         |    DLA-3239-2   |   UNKNOWN  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u6 |
| git-man         |    CVE-2022-24765   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git-man         |    CVE-2022-29187   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git-man         |    CVE-2022-39260   |   HIGH  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git-man         |    CVE-2022-39253   |   MEDIUM  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u5 |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.20.1-2+deb10u4 |  |
| git-man         |    CVE-2022-24975   |   LOW  |  1:2.20.1-2+deb10u4 |  |
| git-man         |    DLA-3239-2   |   UNKNOWN  |  1:2.20.1-2+deb10u4 | 1:2.20.1-2+deb10u6 |
| gnupg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gnupg-l10n         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gnupg-utils         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-agent         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-wks-client         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-wks-server         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgconf         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgsm         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libasan5         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libasan5         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libatomic1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libatomic1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libbinutils         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
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
| libc-dev-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libcc1-0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libcc1-0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u6 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libgcc-8-dev         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc-8-dev         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u9 |  |
| libgomp1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgomp1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libitm1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libitm1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2+deb10u1 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| liblsan0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| liblsan0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libmpx2         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libmpx2         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libnghttp2-14         |    CVE-2020-11080   |   HIGH  |  1.36.0-2+deb10u1 |  |
| libonig5         |    CVE-2019-13224   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-13225   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-16163   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19012   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19203   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19204   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19246   |   LOW  |  6.9.1-1 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2019-20454   |   HIGH  |  10.32-5 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libperl5.28         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| libperl5.28         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| libpython3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u4 |  |
| libpython3.7-stdlib         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u4 |  |
| libquadmath0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libquadmath0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
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
| libssh2-1         |    CVE-2019-13115   |   HIGH  |  1.8.0-2.1 |  |
| libssh2-1         |    CVE-2019-17498   |   LOW  |  1.8.0-2.1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
| libstdc++-8-dev         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++-8-dev         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
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
| libtsan0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libtsan0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libubsan1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libubsan1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
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
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3649   |   CRITICAL  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-36385   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3493   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-38207   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-4037   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-2978   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3176   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3621   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43750   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-16120   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-26141   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-26145   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-26541   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-36310   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-1184   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-20369   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-21499   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-23816   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-29901   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3061   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3115   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3303   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3646   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3903   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-12615   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19064   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2019-19083   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-27820   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-0929   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  4.19.260-1 |  |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  4.19.260-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  4.19.260-1 |  |
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
| nodejs         |    CVE-2021-44531   |   HIGH  |  16.18.1-deb-1nodesource1 |  |
| nodejs         |    CVE-2022-43548   |   HIGH  |  16.18.1-deb-1nodesource1 |  |
| nodejs         |    CVE-2021-44532   |   MEDIUM  |  16.18.1-deb-1nodesource1 |  |
| nodejs         |    CVE-2021-44533   |   MEDIUM  |  16.18.1-deb-1nodesource1 |  |
| openssh-client         |    CVE-2021-41617   |   HIGH  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2007-2243   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2007-2768   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2008-3234   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2016-20012   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2018-15919   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2019-16905   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2019-6110   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2020-12062   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2020-14145   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2020-15778   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssh-client         |    CVE-2021-36368   |   LOW  |  1:7.9p1-10+deb10u2 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| patch         |    CVE-2010-4651   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6951   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-3+deb10u1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| python-pip-whl         |    CVE-2019-20916   |   HIGH  |  18.1-5 |  |
| python-pip-whl         |    CVE-2021-3572   |   MEDIUM  |  18.1-5 |  |
| python-pip-whl         |    CVE-2018-20225   |   LOW  |  18.1-5 |  |
| python3.7         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u4 |  |
| python3.7-venv         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u4 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| unzip         |    CVE-2021-4217   |   LOW  |  6.0-23+deb10u3 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  5.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| dicer         |    CVE-2022-24434   |   HIGH  |  0.3.0 |  |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  5.1.1 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  9.6.0 | 11.8.5, 12.1.0 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| knex         |    CVE-2016-20018   |   HIGH  |  0.20.15 |  |
| liquidjs         |    CVE-2022-25948   |   MEDIUM  |  9.15.0 | 10.0.0 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2022.9.24 | 2022.12.07 |
| cryptography         |    CVE-2020-25659   |   MEDIUM  |  2.8 | 3.2.1 |

