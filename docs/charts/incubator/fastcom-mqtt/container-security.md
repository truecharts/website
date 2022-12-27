# Container Security

##### Detected Containers

          tccr.io/truecharts/fastcom-mqtt:latest@sha256:941eb17c12ceb9cdbbbeb6f9e093a78c4bd5fb41b4759026ec784e1664c50a1a
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/fastcom-mqtt:latest@sha256:941eb17c12ceb9cdbbbeb6f9e093a78c4bd5fb41b4759026ec784e1664c50a1a**

#### Container: tccr.io/truecharts/fastcom-mqtt:latest@sha256:941eb17c12ceb9cdbbbeb6f9e093a78c4bd5fb41b4759026ec784e1664c50a1a (debian 10.12)
    

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
| dbus         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
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
| libapparmor1         |    CVE-2016-1585   |   LOW  |  2.13.2-10 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libavahi-client3         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-client3         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-common-data         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-common-data         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-common3         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-common3         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
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
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2019-6462   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcolord2         |    CVE-2021-42523   |   LOW  |  1.4.3-4 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcroco3         |    CVE-2017-8834   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2017-8871   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2020-12825   |   LOW  |  0.6.12-3 |  |
| libcups2         |    CVE-2014-8166   |   LOW  |  2.2.10-6+deb10u6 |  |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl3-gnutls         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libdbus-1-3         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| libdbus-1-3         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| libdbus-1-3         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
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
| libfribidi0         |    CVE-2022-25308   |   HIGH  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25309   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25310   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
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
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.3.1-1 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libip4tc0         |    CVE-2012-2663   |   LOW  |  1.8.2-4 |  |
| libip4tc0         |    CVE-2019-11360   |   LOW  |  1.8.2-4 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2017-15232   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2018-11813   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2020-17541   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libksba8         |    CVE-2022-3515   |   HIGH  |  1.3.5-2 | 1.3.5-2+deb10u1 |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2 | 1.3.5-2+deb10u2 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmosquitto1         |    CVE-2021-34432   |   HIGH  |  1.5.7-1+deb10u1 |  |
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
| libpam-systemd         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2019-20454   |   HIGH  |  10.32-5 |  |
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
| librsvg2-2         |    CVE-2019-20446   |   MEDIUM  |  2.44.10-2.1 | 2.44.10-2.1+deb10u1 |
| librsvg2-common         |    CVE-2019-20446   |   MEDIUM  |  2.44.10-2.1 | 2.44.10-2.1+deb10u1 |
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
| libwayland-client0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-cursor0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-egl1         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-server0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2+deb10u1 |  |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mosquitto-clients         |    CVE-2021-34432   |   HIGH  |  1.5.7-1+deb10u1 |  |
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
| systemd         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| systemd         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| systemd         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| systemd         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| systemd         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u5 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u5 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.20.1-1.1 |  |
| xdg-utils         |    CVE-2022-4055   |   HIGH  |  1.1.3-1+deb10u1 |  |
| xdg-utils         |    CVE-2020-27748   |   MEDIUM  |  1.1.3-1+deb10u1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1+deb10u1 | 1:1.2.11.dfsg-1+deb10u2 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |

