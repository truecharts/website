# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/miniflux:2.0.41@sha256:2cc9e17d6d853c4fc00f19748fe9427b2571552b0dfe9d53447d68927e4cab91
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/miniflux:2.0.41@sha256:2cc9e17d6d853c4fc00f19748fe9427b2571552b0dfe9d53447d68927e4cab91**

#### Container: tccr.io/truecharts/miniflux:2.0.41@sha256:2cc9e17d6d853c4fc00f19748fe9427b2571552b0dfe9d53447d68927e4cab91 (alpine 3.17.0)
    

**alpine**

      
| No Vulnerabilities found         |
|:---------------------------------|

      

**Container: tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c**

#### Container: tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c (debian 11.5)
    

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
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.0.1 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2021-43784   |   MEDIUM  |  v1.0.1 | 1.1.0 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.0.1 | v1.1.2 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210817142637-7d9622a276b7 | 0.0.0-20220412211240-33da011f77ad |

