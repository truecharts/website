# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          'tccr.io/truecharts/projectsend:v2021.12.10'
          tccr.io/truecharts/projectsend:v2021.12.10
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: 'tccr.io/truecharts/projectsend:v2021.12.10'**


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

**Container: tccr.io/truecharts/projectsend:v2021.12.10**

#### Container: tccr.io/truecharts/projectsend:v2021.12.10 (alpine 3.14)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apache2-utils         |    CVE-2021-44790   |   CRITICAL  |  2.4.51-r0 | 2.4.52-r0 |
| apache2-utils         |    CVE-2022-22720   |   CRITICAL  |  2.4.51-r0 | 2.4.53-r0 |
| apache2-utils         |    CVE-2022-22721   |   CRITICAL  |  2.4.51-r0 | 2.4.53-r0 |
| apache2-utils         |    CVE-2022-23943   |   CRITICAL  |  2.4.51-r0 | 2.4.53-r0 |
| apache2-utils         |    CVE-2022-28615   |   CRITICAL  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-31813   |   CRITICAL  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2021-44224   |   HIGH  |  2.4.51-r0 | 2.4.52-r0 |
| apache2-utils         |    CVE-2022-22719   |   HIGH  |  2.4.51-r0 | 2.4.53-r0 |
| apache2-utils         |    CVE-2022-26377   |   HIGH  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-29404   |   HIGH  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-30522   |   HIGH  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-30556   |   HIGH  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-28330   |   MEDIUM  |  2.4.51-r0 | 2.4.54-r0 |
| apache2-utils         |    CVE-2022-28614   |   MEDIUM  |  2.4.51-r0 | 2.4.54-r0 |
| apr         |    CVE-2021-35940.patch   |   UNKNOWN  |  1.7.0-r0 | 1.7.0-r1 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.33.1-r6 | 1.33.1-r7 |
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
| expat         |    CVE-2022-22822   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22823   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22824   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.4.1-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.1-r0 | 2.4.9-r0 |
| expat         |    CVE-2021-45960   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2021-46143   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22825   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22826   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22827   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.4.1-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.1-r0 | 2.5.0-r0 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.4.1-r0 | 2.4.5-r0 |
| freetype         |    CVE-2022-27404   |   CRITICAL  |  2.10.4-r1 | 2.10.4-r2 |
| freetype         |    CVE-2022-27405   |   HIGH  |  2.10.4-r1 | 2.10.4-r3 |
| freetype         |    CVE-2022-27406   |   HIGH  |  2.10.4-r1 | 2.10.4-r3 |
| git         |    CVE-2022-24765   |   HIGH  |  2.32.0-r0 | 2.32.1-r0 |
| git         |    CVE-2022-29187   |   HIGH  |  2.32.0-r0 | 2.32.3-r0 |
| git         |    CVE-2022-39260   |   HIGH  |  2.32.0-r0 | 2.32.4-r0 |
| git         |    CVE-2022-39253   |   MEDIUM  |  2.32.0-r0 | 2.32.4-r0 |
| gmp         |    CVE-2021-43618   |   HIGH  |  6.2.1-r0 | 6.2.1-r1 |
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
| libressl3.3-libcrypto         |    CVE-2022-0778   |   HIGH  |  3.3.3-r0 | 3.3.6-r0 |
| libressl3.3-libssl         |    CVE-2022-0778   |   HIGH  |  3.3.3-r0 | 3.3.6-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3p1-r2 | 3.3.3p1-r3 |
| libsasl         |    CVE-2022-24407   |   HIGH  |  2.1.27-r12 | 2.1.28-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.37.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.37.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.37.2-r0 | 2.37.4-r0 |
| libxml2         |    CVE-2022-2309   |   HIGH  |  2.9.12-r1 | 2.9.14-r1 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.12-r1 | 2.9.13-r0 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.12-r1 | 2.9.14-r2 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.12-r1 | 2.9.14-r2 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.12-r1 | 2.9.14-r0 |
| logrotate         |    CVE-2022-1348   |   MEDIUM  |  3.18.1-r0 | 3.18.1-r2 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| pcre2         |    CVE-2022-1586   |   CRITICAL  |  10.36-r0 | 10.36-r1 |
| pcre2         |    CVE-2022-1587   |   CRITICAL  |  10.36-r0 | 10.36-r1 |
| php7         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bcmath         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bcmath         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-bcmath         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bcmath         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bcmath         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-bcmath         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bcmath         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bz2         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bz2         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-bz2         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bz2         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bz2         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-bz2         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-bz2         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-common         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-common         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-common         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-ctype         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-ctype         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-ctype         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-ctype         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-ctype         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-ctype         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-ctype         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-curl         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-curl         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-curl         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-curl         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-curl         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-curl         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-curl         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-dom         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-dom         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-dom         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-dom         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-dom         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-dom         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-dom         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fileinfo         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fileinfo         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-fileinfo         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fileinfo         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fileinfo         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-fileinfo         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fileinfo         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-fpm         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-fpm         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-fpm         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gd         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gd         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gd         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gd         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gd         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gd         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gd         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gettext         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gettext         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gettext         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gettext         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gettext         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gettext         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gettext         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gmp         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gmp         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gmp         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gmp         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gmp         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-gmp         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-gmp         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-iconv         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-iconv         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-iconv         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-iconv         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-iconv         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-iconv         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-iconv         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-json         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-json         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-json         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-json         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-json         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-json         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-json         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mbstring         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mbstring         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mbstring         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mbstring         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mbstring         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mbstring         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mbstring         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqli         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqli         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mysqli         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqli         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqli         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mysqli         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqli         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqlnd         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqlnd         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mysqlnd         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqlnd         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqlnd         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-mysqlnd         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-mysqlnd         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-openssl         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-openssl         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-openssl         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_dblib         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_dblib         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo_dblib         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_dblib         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_dblib         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo_dblib         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_dblib         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_mysql         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_mysql         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo_mysql         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_mysql         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_mysql         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-pdo_mysql         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-pdo_mysql         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-phar         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-phar         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-phar         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-phar         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-phar         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-phar         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-phar         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-session         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-session         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-session         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-session         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-session         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-session         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-session         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-simplexml         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-simplexml         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-simplexml         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-simplexml         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-simplexml         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-simplexml         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-simplexml         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-soap         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-soap         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-soap         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-soap         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-soap         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-soap         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-soap         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xml         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xml         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xml         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xml         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xml         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xml         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xml         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlreader         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlreader         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlreader         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlreader         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlreader         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlreader         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlreader         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlrpc         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlrpc         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlrpc         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlrpc         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlrpc         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlrpc         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlrpc         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlwriter         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlwriter         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlwriter         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlwriter         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlwriter         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-xmlwriter         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-xmlwriter         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-zip         |    CVE-2021-21708   |   CRITICAL  |  7.4.26-r0 | 7.4.32-r0 |
| php7-zip         |    CVE-2022-37454   |   CRITICAL  |  7.4.26-r0 | 7.4.33-r0 |
| php7-zip         |    CVE-2022-31625   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-zip         |    CVE-2022-31626   |   HIGH  |  7.4.26-r0 | 7.4.32-r0 |
| php7-zip         |    CVE-2022-31630   |   HIGH  |  7.4.26-r0 | 7.4.33-r0 |
| php7-zip         |    CVE-2022-31628   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| php7-zip         |    CVE-2022-31629   |   MEDIUM  |  7.4.26-r0 | 7.4.32-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.33.1-r6 | 1.33.1-r7 |
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| @yaireo/tagify         |    CVE-2022-25854   |   MEDIUM  |  2.9.1 | 4.9.8 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| jquery-validation         |    CVE-2022-31147   |   HIGH  |  1.19.3 | 1.19.5 |
| jquery-validation         |    CVE-2021-43306   |   LOW  |  1.19.3 | 1.19.4 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| lodash         |    CVE-2019-10744   |   CRITICAL  |  1.0.2 | 4.17.12 |
| lodash         |    CVE-2018-16487   |   HIGH  |  1.0.2 | &gt;=4.17.11 |
| lodash         |    CVE-2020-8203   |   HIGH  |  1.0.2 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  1.0.2 | 4.17.21 |
| lodash         |    CVE-2019-1010266   |   MEDIUM  |  1.0.2 | 4.17.11 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  1.0.2 | 4.17.21 |
| lodash         |    CVE-2018-3721   |   LOW  |  1.0.2 | &gt;=4.17.5 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.20 | 4.17.21 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.20 | 4.17.21 |
| lodash.template         |    CVE-2019-10744   |   CRITICAL  |  3.6.2 | 4.5.0 |
| minimatch         |    CVE-2016-10540   |   HIGH  |  0.2.14 | 3.0.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  0.2.14 | 3.0.5 |
| minimatch         |    NSWG-ECO-118   |   HIGH  |  0.2.14 | &gt;=3.0.2 |
| minimatch         |    CVE-2016-10540   |   HIGH  |  2.0.10 | 3.0.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  2.0.10 | 3.0.5 |
| minimatch         |    NSWG-ECO-118   |   HIGH  |  2.0.10 | &gt;=3.0.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.29.1 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.1 | 2.29.4 |
| node-sass         |    CVE-2020-24025   |   MEDIUM  |  4.14.1 | 7.0.0 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  5.2.18 | 7.0.36, 8.2.13 |
| postcss         |    CVE-2021-23368   |   MEDIUM  |  7.0.26 | 8.2.10, 7.0.36 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  7.0.26 | 7.0.36, 8.2.13 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| scss-tokenizer         |    CVE-2022-25758   |   HIGH  |  0.2.3 | 0.4.3 |
| tar         |    CVE-2021-32803   |   HIGH  |  2.2.2 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  2.2.2 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  2.2.2 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |
| trim-newlines         |    CVE-2021-33623   |   HIGH  |  1.0.0 | 4.0.1, 3.0.1 |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| enshrined/svg-sanitize         |    CVE-2022-23638   |   MEDIUM  |  0.13.3 | 0.15.0 |

