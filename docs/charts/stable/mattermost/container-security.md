# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/mattermost:7.3@sha256:be700165a0f8ed996982d758ceb20523f401333f333119ef461857f89ecee792
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/mattermost:7.3@sha256:be700165a0f8ed996982d758ceb20523f401333f333119ef461857f89ecee792**

#### Container: tccr.io/truecharts/mattermost:7.3@sha256:be700165a0f8ed996982d758ceb20523f401333f333119ef461857f89ecee792 (debian 10.12)
    

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
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u2 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libbz2-1.0         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl3-gnutls         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u5 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u6 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u4 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.9.1-3+deb10u2 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libglib2.0-0         |    CVE-2021-3800   |   HIGH  |  2.58.3-2+deb10u3 | 2.58.3-2+deb10u4 |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u3 |  |
| libglib2.0-0         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u3 |  |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u7 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2017-15232   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2018-11813   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2020-17541   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnghttp2-14         |    CVE-2020-11080   |   HIGH  |  1.36.0-2+deb10u1 |  |
| libnss3         |    CVE-2020-12403   |   CRITICAL  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2020-25648   |   HIGH  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2020-12400   |   MEDIUM  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2020-12401   |   MEDIUM  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2020-6829   |   MEDIUM  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2017-11695   |   LOW  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2017-11696   |   LOW  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2017-11697   |   LOW  |  2:3.42.1-1+deb10u5 |  |
| libnss3         |    CVE-2017-11698   |   LOW  |  2:3.42.1-1+deb10u5 |  |
| libopenjp2-7         |    CVE-2021-3575   |   HIGH  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2019-12973   |   MEDIUM  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2021-29338   |   MEDIUM  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2022-1122   |   MEDIUM  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-10505   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-10506   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9113   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9114   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9115   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9116   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9117   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9580   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2016-9581   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2017-17479   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-16375   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-16376   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-20845   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-20846   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-5727   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2018-7648   |   LOW  |  2.3.0-2+deb10u2 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.3.0-2+deb10u2 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libpixman-1-0         |    CVE-2022-44638   |   HIGH  |  0.36.0-1 | 0.36.0-1+deb10u1 |
| libpng16-16         |    CVE-2018-14048   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2018-14550   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.36-6 |  |
| libpoppler82         |    CVE-2019-14494   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2020-27778   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2022-38784   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2018-18897   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2018-19058   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2018-20650   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2019-9903   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2019-9959   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2022-27337   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler82         |    CVE-2013-4472   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2017-2814   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2017-2818   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2017-2820   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2017-9083   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2018-19059   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2018-19060   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2019-10871   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2019-11026   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2019-9543   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2019-9545   |   LOW  |  0.71.0-5 |  |
| libpoppler82         |    CVE-2022-24106   |   LOW  |  0.71.0-5 |  |
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
| libssh2-1         |    CVE-2019-13115   |   HIGH  |  1.8.0-2.1 |  |
| libssh2-1         |    CVE-2019-17498   |   LOW  |  1.8.0-2.1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
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
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2020-35521   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2020-35522   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
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
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2+deb10u1 |  |
| libwmf0.2-7         |    CVE-2007-3476   |   LOW  |  0.2.8.4-14 |  |
| libwmf0.2-7         |    CVE-2007-3477   |   LOW  |  0.2.8.4-14 |  |
| libwmf0.2-7         |    CVE-2007-3996   |   LOW  |  0.2.8.4-14 |  |
| libwmf0.2-7         |    CVE-2009-3546   |   LOW  |  0.2.8.4-14 |  |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
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
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| poppler-utils         |    CVE-2019-14494   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2020-27778   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2022-38784   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2018-18897   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2018-19058   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2018-20650   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2019-9903   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2019-9959   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2022-27337   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| poppler-utils         |    CVE-2013-4472   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2017-2814   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2017-2818   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2017-2820   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2017-9083   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2018-19059   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2018-19060   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2019-10871   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2019-11026   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2019-9543   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2019-9545   |   LOW  |  0.71.0-5 |  |
| poppler-utils         |    CVE-2022-24106   |   LOW  |  0.71.0-5 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u5 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u5 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1+deb10u1 | 1:1.2.11.dfsg-1+deb10u2 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.79 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.79 |  |
| github.com/blevesearch/bleve/v2         |    CVE-2022-31022   |   MEDIUM  |  v2.3.4-0.20220810122446-d89c6c0a6873 |  |
| github.com/dgrijalva/jwt-go         |    CVE-2020-26160   |   HIGH  |  v3.2.0+incompatible |  |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220812174116-3211cb980234 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220812174116-3211cb980234 | 0.4.0 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.34 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.34 |  |
| github.com/blevesearch/bleve/v2         |    CVE-2022-31022   |   MEDIUM  |  v2.3.2 |  |
| github.com/dgrijalva/jwt-go         |    CVE-2020-26160   |   HIGH  |  v3.2.0+incompatible |  |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220614195744-fb05da6f9022 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220614195744-fb05da6f9022 | 0.4.0 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

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

