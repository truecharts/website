# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/zabbix-server:6.2.6@sha256:4f9fee8a56ff9f0924be7c15ded112cdde9b3200338e01cd4501739fd0342162
          tccr.io/truecharts/zabbix-agent2:6.2.6@sha256:2d551fb471aaaf187bd291524adc0dc6304986d6593a79b657e62cad90cbebdd
          tccr.io/truecharts/zabbix-web:6.2.6@sha256:f78416db4defdf7599ae1b2e3ef25c21fa219bd1c037f36f9d90678d7ea809e7
          tccr.io/truecharts/zabbix-java-gateway:6.2.6@sha256:d837227d10915fd50d114db260b45e4c62948f3d91427b7d2f0d55c30e7625f7
        - tccr.io/truecharts/zabbix-snmptraps:6.2.6@sha256:742774dd883c1328f57c943aeaa9a59e9c25435229b78a4dcfcb139e4d85b3f6
          tccr.io/truecharts/zabbix-web-service:6.2.6@sha256:00f7ecd1ea375c75f63f8516a75cb453fef16aa012036ac83404f5cbecad4d6d
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

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

**Container: tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f**

#### Container: tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| ca-certificates         |    CVE-2022-23491   |   MEDIUM  |  20211016 | 20211016ubuntu0.22.04.1 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| dirmngr         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.34.1-1ubuntu1.5 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.34.1-1ubuntu1.5 |  |
| gnupg         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gnupg-l10n         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gnupg-utils         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-agent         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-wks-client         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-wks-server         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgconf         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgsm         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libexpat1         |    CVE-2022-40674   |   MEDIUM  |  2.4.7-1 | 2.4.7-1ubuntu0.1 |
| libexpat1         |    CVE-2022-43680   |   MEDIUM  |  2.4.7-1 | 2.4.7-1ubuntu0.2 |
| libmariadb3         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libxml2         |    CVE-2022-40303   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-40304   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-2309   |   LOW  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| locales         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| mariadb-client         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| unrar         |    CVE-2022-30333   |   MEDIUM  |  1:6.1.5-1 |  |
| vim-common         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21.2-2ubuntu1 |  |
| xxd         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |

**Container: tccr.io/truecharts/zabbix-agent2:6.2.6@sha256:2d551fb471aaaf187bd291524adc0dc6304986d6593a79b657e62cad90cbebdd**

#### Container: tccr.io/truecharts/zabbix-agent2:6.2.6@sha256:2d551fb471aaaf187bd291524adc0dc6304986d6593a79b657e62cad90cbebdd (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210226172049-e18ecbb05110 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220310020820-b874c991c1a5 | 0.0.0-20220412211240-33da011f77ad |

**Container: tccr.io/truecharts/zabbix-java-gateway:6.2.6@sha256:d837227d10915fd50d114db260b45e4c62948f3d91427b7d2f0d55c30e7625f7**

#### Container: tccr.io/truecharts/zabbix-java-gateway:6.2.6@sha256:d837227d10915fd50d114db260b45e4c62948f3d91427b7d2f0d55c30e7625f7 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.1.2-0ubuntu1 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |

**Container: tccr.io/truecharts/zabbix-server:6.2.6@sha256:4f9fee8a56ff9f0924be7c15ded112cdde9b3200338e01cd4501739fd0342162**

#### Container: tccr.io/truecharts/zabbix-server:6.2.6@sha256:4f9fee8a56ff9f0924be7c15ded112cdde9b3200338e01cd4501739fd0342162 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libsnmp-base         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp-base         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp40         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp40         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-7build2 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-7build2 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21.2-2ubuntu1 |  |

**Container: tccr.io/truecharts/zabbix-web-service:6.2.6@sha256:00f7ecd1ea375c75f63f8516a75cb453fef16aa012036ac83404f5cbecad4d6d**

#### Container: tccr.io/truecharts/zabbix-web-service:6.2.6@sha256:00f7ecd1ea375c75f63f8516a75cb453fef16aa012036ac83404f5cbecad4d6d (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libapparmor1         |    CVE-2016-1585   |   MEDIUM  |  3.0.4-2ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 | 2.1-3.1ubuntu0.22.04.1 |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.1.2-0ubuntu1 |  |
| libjpeg62-turbo         |    CVE-2022-32325   |   LOW  |  1:2.0.6-4 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-29338   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-3575   |   LOW  |  2.4.0-6 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libsndfile1         |    CVE-2021-4156   |   LOW  |  1.0.31-2build1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| xdg-utils         |    CVE-2022-4055   |   MEDIUM  |  1.1.3-4.1ubuntu3~22.04.1 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220310020820-b874c991c1a5 | 0.0.0-20220412211240-33da011f77ad |

**Container: tccr.io/truecharts/zabbix-web:6.2.6@sha256:f78416db4defdf7599ae1b2e3ef25c21fa219bd1c037f36f9d90678d7ea809e7**

#### Container: tccr.io/truecharts/zabbix-web:6.2.6@sha256:f78416db4defdf7599ae1b2e3ef25c21fa219bd1c037f36f9d90678d7ea809e7 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libapparmor1         |    CVE-2016-1585   |   MEDIUM  |  3.0.4-2ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libgd3         |    CVE-2021-40812   |   LOW  |  2.3.0-2ubuntu2 |  |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.1.2-0ubuntu1 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libpython3.10-minimal         |    CVE-2022-37454   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| libpython3.10-minimal         |    CVE-2022-45061   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| libpython3.10-minimal         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.1 |  |
| libpython3.10-stdlib         |    CVE-2022-37454   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| libpython3.10-stdlib         |    CVE-2022-45061   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| libpython3.10-stdlib         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| locales         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| php8.1-bcmath         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-bcmath         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-cli         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-cli         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-common         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-common         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-fpm         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-fpm         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-gd         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-gd         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-ldap         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-ldap         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-mbstring         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-mbstring         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-opcache         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-opcache         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-pgsql         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-pgsql         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-readline         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-readline         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-xml         |    CVE-2016-9138   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| php8.1-xml         |    CVE-2017-7189   |   LOW  |  8.1.2-1ubuntu2.9 |  |
| python3.10         |    CVE-2022-37454   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| python3.10         |    CVE-2022-45061   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| python3.10         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.1 |  |
| python3.10-minimal         |    CVE-2022-37454   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| python3.10-minimal         |    CVE-2022-45061   |   MEDIUM  |  3.10.6-1~22.04.1 | 3.10.6-1~22.04.2 |
| python3.10-minimal         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.1 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |

**Container: -**


**Container: tccr.io/truecharts/zabbix-snmptraps:6.2.6@sha256:742774dd883c1328f57c943aeaa9a59e9c25435229b78a4dcfcb139e4d85b3f6**

#### Container: tccr.io/truecharts/zabbix-snmptraps:6.2.6@sha256:742774dd883c1328f57c943aeaa9a59e9c25435229b78a4dcfcb139e4d85b3f6 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libnetsnmptrapd40         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libnetsnmptrapd40         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libsnmp-base         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp-base         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp40         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libsnmp40         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-7build2 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-7build2 |  |
| snmpd         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| snmpd         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| snmptrapd         |    CVE-2022-44792   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| snmptrapd         |    CVE-2022-44793   |   MEDIUM  |  5.9.1+dfsg-1ubuntu2.2 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21.2-2ubuntu1 |  |

