# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/clarkson:v1.1.2@sha256:a35fdb77c19fa17ddaf80329755a6115bde6c2fa99daab136a795c1a2cdd07cd
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/mariadb:10.10.2@sha256:df9a0e20fc8371426eac28202164a996da644befdb7823c4d5749b5ee39b9ddb
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/clarkson:v1.1.2@sha256:a35fdb77c19fa17ddaf80329755a6115bde6c2fa99daab136a795c1a2cdd07cd**

#### Container: tccr.io/truecharts/clarkson:v1.1.2@sha256:a35fdb77c19fa17ddaf80329755a6115bde6c2fa99daab136a795c1a2cdd07cd (alpine 3.12)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.2.10-r0 | 2.2.10-r1 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.2.10-r0 | 2.2.10-r2 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.2.10-r0 | 2.2.10-r2 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.2.10-r0 | 2.2.10-r2 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.2.10-r0 | 2.2.10-r1 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.2.10-r0 | 2.2.10-r2 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.2.10-r0 | 2.2.10-r2 |
| freetype         |    CVE-2022-27404   |   CRITICAL  |  2.10.4-r0 | 2.10.4-r1 |
| freetype         |    CVE-2022-27405   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| freetype         |    CVE-2022-27406   |   HIGH  |  2.10.4-r0 | 2.10.4-r2 |
| krb5-libs         |    CVE-2021-37750   |   MEDIUM  |  1.18.4-r0 | 1.18.5-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.35.2-r0 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.35.2-r0 | 2.37.4-r0 |
| nodejs         |    CVE-2021-44531   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2022-21824   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-22959   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-22960   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-44532   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-44533   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nss         |    CVE-2022-1097   |   HIGH  |  3.60-r2 | 3.68.3-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.h2database:h2         |    CVE-2021-23463   |   CRITICAL  |  1.4.193 | 2.0.202 |
| com.h2database:h2         |    CVE-2021-42392   |   CRITICAL  |  1.4.193 | 2.0.206 |
| com.h2database:h2         |    CVE-2022-23221   |   CRITICAL  |  1.4.193 | 2.1.210 |
| com.h2database:h2         |    CVE-2022-45868   |   HIGH  |  1.4.193 |  |
| com.h2database:h2         |    GHSA-h376-j262-vhq6   |   UNKNOWN  |  1.4.193 | 2.0.206 |
| org.apache.derby:derby         |    CVE-2018-1313   |   MEDIUM  |  10.12.1.1 | 10.14.2.0 |
| org.hsqldb:hsqldb         |    CVE-2022-41853   |   CRITICAL  |  2.3.4 | 2.7.1 |
| org.postgresql:postgresql         |    CVE-2022-21724   |   CRITICAL  |  9.4.1208.jre6 | 42.2.25, 42.3.2 |
| org.postgresql:postgresql         |    CVE-2020-13692   |   HIGH  |  9.4.1208.jre6 | 42.2.13 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| express         |    CVE-2022-24999   |   HIGH  |  4.16.4 | 4.17.3 |
| express-jwt         |    CVE-2020-15084   |   HIGH  |  5.3.3 | 6.0.0 |
| helmet-csp         |    GHSA-c3m8-x3cg-qm2c   |   MEDIUM  |  2.6.0 | 2.9.1 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.1.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.1.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.1.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.1.1 | 9.0.0 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.29.1 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.1 | 2.29.4 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |

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

