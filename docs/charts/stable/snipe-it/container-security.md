# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/snipe-it:6.0.14@sha256:b84e13478199cec983899c838bf3cc0a3d155a328b94ea9bc1ea15b0cd0dd8a3
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
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

**Container: tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78**

#### Container: tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78 (debian 11.6)
    

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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.0.1 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2021-43784   |   MEDIUM  |  v1.0.1 | 1.1.0 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.0.1 | v1.1.2 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210817142637-7d9622a276b7 | 0.0.0-20220412211240-33da011f77ad |

**Container: tccr.io/truecharts/snipe-it:6.0.14@sha256:b84e13478199cec983899c838bf3cc0a3d155a328b94ea9bc1ea15b0cd0dd8a3**

#### Container: tccr.io/truecharts/snipe-it:6.0.14@sha256:b84e13478199cec983899c838bf3cc0a3d155a328b94ea9bc1ea15b0cd0dd8a3 (ubuntu 20.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apache2         |    CVE-2019-17567   |   MEDIUM  |  2.4.41-4ubuntu3.12 |  |
| apache2-bin         |    CVE-2019-17567   |   MEDIUM  |  2.4.41-4ubuntu3.12 |  |
| apache2-data         |    CVE-2019-17567   |   MEDIUM  |  2.4.41-4ubuntu3.12 |  |
| apache2-utils         |    CVE-2019-17567   |   MEDIUM  |  2.4.41-4ubuntu3.12 |  |
| binutils         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| binutils         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-common         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| binutils-common         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-common         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-common         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-common         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-common         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| binutils-x86-64-linux-gnu         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| ca-certificates         |    CVE-2022-23491   |   MEDIUM  |  20211016~20.04.1 | 20211016ubuntu0.20.04.1 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3ubuntu2 |  |
| cpp         |    CVE-2020-13844   |   MEDIUM  |  1.185.1ubuntu2 |  |
| cpp-9         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| gcc         |    CVE-2020-13844   |   MEDIUM  |  1.185.1ubuntu2 |  |
| gcc-9         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| gcc-9-base         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.25.1-1ubuntu3.6 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.25.1-1ubuntu3.6 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| libapache2-mod-php7.4         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| libapache2-mod-php7.4         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| libapache2-mod-php7.4         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| libapache2-mod-php7.4         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| libapache2-mod-php7.4         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| libapache2-mod-php7.4         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| libasan5         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| libasn1-8-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libasn1-8-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libasn1-8-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libasn1-8-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libasn1-8-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libbinutils         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| libbinutils         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| libbinutils         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| libbinutils         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| libbinutils         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| libbinutils         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc-dev-bin         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc6-dev         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libctf-nobfd0         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| libctf-nobfd0         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf-nobfd0         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf-nobfd0         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf-nobfd0         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf-nobfd0         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf0         |    CVE-2022-38533   |   MEDIUM  |  2.34-6ubuntu1.3 | 2.34-6ubuntu1.4 |
| libctf0         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf0         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf0         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf0         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.3 |  |
| libctf0         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.3 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| libexpat1         |    CVE-2022-40674   |   MEDIUM  |  2.2.9-1ubuntu0.4 | 2.2.9-1ubuntu0.5 |
| libexpat1         |    CVE-2022-43680   |   MEDIUM  |  2.2.9-1ubuntu0.4 | 2.2.9-1ubuntu0.6 |
| libgcc-9-dev         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| libgd3         |    CVE-2021-40812   |   LOW  |  2.2.5-5.2ubuntu2.1 |  |
| libgssapi-krb5-2         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libgssapi-krb5-2         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libgssapi3-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libgssapi3-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libgssapi3-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libgssapi3-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libgssapi3-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhcrypto4-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhcrypto4-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhcrypto4-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libhcrypto4-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhcrypto4-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimbase1-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimbase1-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimbase1-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libheimbase1-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimbase1-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimntlm0-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimntlm0-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimntlm0-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libheimntlm0-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libheimntlm0-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhx509-5-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhx509-5-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhx509-5-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libhx509-5-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libhx509-5-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1build1 | 2.1-3.1ubuntu0.20.04.1 |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.0.3-0ubuntu1.20.04.3 |  |
| libk5crypto3         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libk5crypto3         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5-26-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libkrb5-26-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libkrb5-26-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libkrb5-26-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libkrb5-26-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libkrb5-3         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5-3         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5support0         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5support0         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12ubuntu0.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-2 |  |
| libpython3.8         |    CVE-2022-45061   |   MEDIUM  |  3.8.10-0ubuntu1~20.04.5 | 3.8.10-0ubuntu1~20.04.6 |
| libpython3.8         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.5 |  |
| libpython3.8-minimal         |    CVE-2022-45061   |   MEDIUM  |  3.8.10-0ubuntu1~20.04.5 | 3.8.10-0ubuntu1~20.04.6 |
| libpython3.8-minimal         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.5 |  |
| libpython3.8-stdlib         |    CVE-2022-45061   |   MEDIUM  |  3.8.10-0ubuntu1~20.04.5 | 3.8.10-0ubuntu1~20.04.6 |
| libpython3.8-stdlib         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.5 |  |
| libroken18-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libroken18-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libroken18-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libroken18-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libroken18-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libsqlite3-0         |    CVE-2022-35737   |   MEDIUM  |  3.31.1-4ubuntu0.4 | 3.31.1-4ubuntu0.5 |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.18 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-3970   |   MEDIUM  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.7 |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.5 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.5 |  |
| libtiff5         |    CVE-2022-2867   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-2868   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtiff5         |    CVE-2022-2869   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.5 | 4.1.0+git191117-2ubuntu0.20.04.6 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.18 |  |
| libwind0-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libwind0-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libwind0-heimdal         |    CVE-2022-41916   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 | 7.7.0+dfsg-1ubuntu1.2 |
| libwind0-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libwind0-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.1 |  |
| libxml2         |    CVE-2022-40303   |   MEDIUM  |  2.9.10+dfsg-5ubuntu0.20.04.4 | 2.9.10+dfsg-5ubuntu0.20.04.5 |
| libxml2         |    CVE-2022-40304   |   MEDIUM  |  2.9.10+dfsg-5ubuntu0.20.04.4 | 2.9.10+dfsg-5ubuntu0.20.04.5 |
| libxml2         |    CVE-2022-2309   |   LOW  |  2.9.10+dfsg-5ubuntu0.20.04.4 | 2.9.10+dfsg-5ubuntu0.20.04.5 |
| linux-libc-dev         |    CVE-2022-41222   |   HIGH  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-42703   |   HIGH  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2013-7445   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2015-8553   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2016-8660   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-17977   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-12362   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-24504   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-36310   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-20320   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-3864   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-39800   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-4001   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-4148   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-4150   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-4218   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-0168   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-0382   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-0400   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-1263   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-1508   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-20148   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-20422   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-2153   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-2978   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-29901   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-2991   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-3028   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-3524   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3545   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-3564   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3566   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3567   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3594   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3623   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-3625   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-3635   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-3640   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-3643   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-39188   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-39189   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2022-4139   |   MEDIUM  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-42719   |   MEDIUM  |  5.4.0-131.147 | 5.4.0-132.148 |
| linux-libc-dev         |    CVE-2017-0537   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2017-13165   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-12929   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-12930   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2018-12931   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2019-14899   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2019-15213   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2019-19378   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2019-19814   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-12363   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-12364   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-14304   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-34981   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-3669   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2021-39801   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-0854   |   LOW  |  5.4.0-131.147 |  |
| linux-libc-dev         |    CVE-2022-3565   |   LOW  |  5.4.0-131.147 | 5.4.0-135.152 |
| linux-libc-dev         |    CVE-2022-3621   |   LOW  |  5.4.0-131.147 | 5.4.0-135.152 |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1ubuntu5.20.04.2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1ubuntu5.20.04.2 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-6 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-6 |  |
| php7.4-bcmath         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-bcmath         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-bcmath         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-bcmath         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-bcmath         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-bcmath         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-cli         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-cli         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-cli         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-cli         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-cli         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-cli         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-common         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-common         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-common         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-common         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-common         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-common         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-curl         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-curl         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-curl         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-curl         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-curl         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-curl         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-dev         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-dev         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-dev         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-dev         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-dev         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-dev         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-gd         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-gd         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-gd         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-gd         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-gd         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-gd         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-json         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-json         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-json         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-json         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-json         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-json         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-ldap         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-ldap         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-ldap         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-ldap         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-ldap         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-ldap         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-mbstring         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mbstring         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mbstring         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mbstring         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mbstring         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-mbstring         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-mysql         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mysql         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mysql         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mysql         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-mysql         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-mysql         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-opcache         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-opcache         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-opcache         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-opcache         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-opcache         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-opcache         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-readline         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-readline         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-readline         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-readline         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-readline         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-readline         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-xml         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-xml         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-xml         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-xml         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-xml         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-xml         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-zip         |    CVE-2022-31628   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-zip         |    CVE-2022-31629   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-zip         |    CVE-2022-31630   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-zip         |    CVE-2022-37454   |   MEDIUM  |  7.4.3-4ubuntu2.13 | 7.4.3-4ubuntu2.15 |
| php7.4-zip         |    CVE-2016-9138   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| php7.4-zip         |    CVE-2017-7189   |   LOW  |  7.4.3-4ubuntu2.13 |  |
| python3.8         |    CVE-2022-45061   |   MEDIUM  |  3.8.10-0ubuntu1~20.04.5 | 3.8.10-0ubuntu1~20.04.6 |
| python3.8         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.5 |  |
| python3.8-minimal         |    CVE-2022-45061   |   MEDIUM  |  3.8.10-0ubuntu1~20.04.5 | 3.8.10-0ubuntu1~20.04.6 |
| python3.8-minimal         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.5 |  |
| vim         |    CVE-2021-4166   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2021-4192   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0213   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0261   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0318   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0319   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0351   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0359   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0361   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0368   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0392   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0408   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0413   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0417   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0554   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0572   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0685   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0714   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1674   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1720   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1851   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1927   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1942   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1968   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2175   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2183   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2304   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2343   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2344   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2345   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2571   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2923   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2946   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2980   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2021-4193   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0443   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-0729   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1733   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1735   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1785   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1796   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-1898   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2124   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2125   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2126   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2129   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2206   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2581   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2845   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim         |    CVE-2022-2849   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2021-4166   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2021-4192   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0213   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0261   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0318   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0319   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0351   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0359   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0361   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0368   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0392   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0408   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0413   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0417   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0554   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0572   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0685   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0714   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1674   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1720   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1851   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1927   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1942   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1968   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2175   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2183   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2304   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2343   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2344   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2345   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2571   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2923   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2946   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2980   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2021-4193   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0443   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-0729   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1733   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1735   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1785   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1796   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-1898   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2124   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2125   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2126   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2129   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2206   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2581   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2845   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-common         |    CVE-2022-2849   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2021-4166   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2021-4192   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0213   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0261   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0318   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0319   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0351   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0359   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0361   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0368   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0392   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0408   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0413   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0417   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0554   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0572   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0685   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0714   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1674   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1720   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1851   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1927   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1942   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1968   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2175   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2183   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2304   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2343   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2344   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2345   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2571   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2923   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2946   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2980   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2021-4193   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0443   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-0729   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1733   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1735   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1785   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1796   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-1898   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2124   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2125   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2126   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2129   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2206   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2581   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2845   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| vim-runtime         |    CVE-2022-2849   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.20.3-1ubuntu2 |  |
| xxd         |    CVE-2021-4166   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2021-4192   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0213   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0261   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0318   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0319   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0351   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0359   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0361   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0368   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0392   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0408   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0413   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0417   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0554   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0572   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0685   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0714   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1629   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1674   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1720   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1851   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1927   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1942   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1968   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2175   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2183   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2304   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2343   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2344   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2345   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2571   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2923   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2946   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2980   |   MEDIUM  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2021-4193   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0443   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-0729   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1733   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1735   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1785   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1796   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-1898   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2124   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2125   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2126   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2129   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2206   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2581   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2845   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |
| xxd         |    CVE-2022-2849   |   LOW  |  2:8.1.2269-1ubuntu5.9 |  |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| dompdf/dompdf         |    CVE-2022-41343   |   HIGH  |  v2.0.0 | 2.0.1 |

