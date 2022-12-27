# Container Security

##### Detected Containers

          tccr.io/truecharts/pwm:latest@sha256:5c27b39dff4004a40a5b7b71d25361efec2b669e367923dc43fa582d614ba4ba
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/pwm:latest@sha256:5c27b39dff4004a40a5b7b71d25361efec2b669e367923dc43fa582d614ba4ba**

#### Container: tccr.io/truecharts/pwm:latest@sha256:5c27b39dff4004a40a5b7b71d25361efec2b669e367923dc43fa582d614ba4ba (debian 9.9)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2020-27350   |   MEDIUM  |  1.4.9 | 1.4.11 |
| apt         |    CVE-2020-3810   |   MEDIUM  |  1.4.9 | 1.4.10 |
| apt         |    CVE-2011-3374   |   LOW  |  1.4.9 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  4.4-5 |  |
| bash         |    CVE-2019-18276   |   LOW  |  4.4-5 |  |
| bsdutils         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| bzip2         |    CVE-2019-12900   |   CRITICAL  |  1.0.6-8.1 |  |
| ca-certificates         |    DLA-2593-1   |   UNKNOWN  |  20161130+nmu1+deb9u1 | 20200601~deb9u2 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.26-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.26-3 |  |
| debian-archive-keyring         |    DLA-2948-1   |   UNKNOWN  |  2017.5 | 2017.5+deb9u2 |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.18.25 | 1.18.26 |
| e2fslibs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| e2fslibs         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| e2fslibs         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| e2fsprogs         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| e2fsprogs         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| gcc-6-base         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| gpgv         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u4 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.6-5 | 1.6-5+deb9u1 |
| libapr1         |    CVE-2017-12613   |   HIGH  |  1.5.2-5 | 1.5.2-5+deb9u1 |
| libapt-pkg5.0         |    CVE-2020-27350   |   MEDIUM  |  1.4.9 | 1.4.11 |
| libapt-pkg5.0         |    CVE-2020-3810   |   MEDIUM  |  1.4.9 | 1.4.10 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.4.9 |  |
| libavahi-client3         |    CVE-2021-26720   |   HIGH  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-client3         |    CVE-2021-3468   |   MEDIUM  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-client3         |    CVE-2017-6519   |   LOW  |  0.6.32-2 |  |
| libavahi-common-data         |    CVE-2021-26720   |   HIGH  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-common-data         |    CVE-2021-3468   |   MEDIUM  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-common-data         |    CVE-2017-6519   |   LOW  |  0.6.32-2 |  |
| libavahi-common3         |    CVE-2021-26720   |   HIGH  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-common3         |    CVE-2021-3468   |   MEDIUM  |  0.6.32-2 | 0.6.32-2+deb9u1 |
| libavahi-common3         |    CVE-2017-6519   |   LOW  |  0.6.32-2 |  |
| libblkid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libbsd0         |    CVE-2019-20367   |   CRITICAL  |  0.8.3-1 | 0.8.3-1+deb9u1 |
| libbz2-1.0         |    CVE-2019-12900   |   CRITICAL  |  1.0.6-8.1 |  |
| libc-bin         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u4 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u4 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u4 |  |
| libcomerr2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| libcomerr2         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| libcomerr2         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| libcups2         |    CVE-2019-8675   |   HIGH  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u4 |
| libcups2         |    CVE-2019-8696   |   HIGH  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u4 |
| libcups2         |    CVE-2020-3898   |   HIGH  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u6 |
| libcups2         |    CVE-2019-2180   |   MEDIUM  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u4 |
| libcups2         |    CVE-2019-2228   |   MEDIUM  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u5 |
| libcups2         |    CVE-2020-10001   |   MEDIUM  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u7 |
| libcups2         |    CVE-2022-26691   |   MEDIUM  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u8 |
| libcups2         |    CVE-2014-8166   |   LOW  |  2.2.1-8+deb9u3 |  |
| libcups2         |    CVE-2019-8842   |   LOW  |  2.2.1-8+deb9u3 | 2.2.1-8+deb9u6 |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28-12+deb9u1 |  |
| libdbus-1-3         |    CVE-2019-12749   |   HIGH  |  1.10.26-0+deb9u1 | 1.10.28-0+deb9u1 |
| libdbus-1-3         |    CVE-2020-35512   |   HIGH  |  1.10.26-0+deb9u1 | 1.10.32-0+deb9u1 |
| libdbus-1-3         |    CVE-2020-12049   |   MEDIUM  |  1.10.26-0+deb9u1 | 1.10.32-0+deb9u1 |
| libdbus-1-3         |    CVE-2022-42010   |   MEDIUM  |  1.10.26-0+deb9u1 |  |
| libdbus-1-3         |    CVE-2022-42011   |   MEDIUM  |  1.10.26-0+deb9u1 |  |
| libdbus-1-3         |    CVE-2022-42012   |   MEDIUM  |  1.10.26-0+deb9u1 |  |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.0-2+deb9u1 |  |
| libexpat1         |    CVE-2018-20843   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u2 |
| libexpat1         |    CVE-2019-15903   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u3 |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.0-2+deb9u1 |  |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.0-2+deb9u1 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.0-2+deb9u1 |  |
| libfdisk1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.6.3-3.2 |  |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.6.3-3.2 |  |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.6.3-3.2 |  |
| libfreetype6         |    CVE-2020-15999   |   MEDIUM  |  2.6.3-3.2 | 2.6.3-3.2+deb9u2 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.6.3-3.2 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.7.6-2+deb9u3 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.7.6-2+deb9u3 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.7.6-2+deb9u3 | 1.7.6-2+deb9u4 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.7.6-2+deb9u3 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-1 | 2:6.1.2+dfsg-1+deb9u1 |
| libgnutls30         |    CVE-2019-3829   |   HIGH  |  3.5.8-5+deb9u4 | 3.5.8-5+deb9u5 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.5.8-5+deb9u4 |  |
| libgnutls30         |    CVE-2018-16868   |   MEDIUM  |  3.5.8-5+deb9u4 |  |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.5.8-5+deb9u4 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.5.8-5+deb9u4 |  |
| libgnutls30         |    DLA-2759-1   |   UNKNOWN  |  3.5.8-5+deb9u4 | 3.5.8-5+deb9u6 |
| libgssapi-krb5-2         |    CVE-2020-28196   |   HIGH  |  1.15-1+deb9u1 | 1.15-1+deb9u2 |
| libgssapi-krb5-2         |    CVE-2018-20217   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libgssapi-krb5-2         |    CVE-2018-5710   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libgssapi-krb5-2         |    CVE-2018-5729   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libgssapi-krb5-2         |    CVE-2021-37750   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.15-1+deb9u1 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.15-1+deb9u1 |  |
| libgssapi-krb5-2         |    CVE-2017-11462   |   LOW  |  1.15-1+deb9u1 |  |
| libgssapi-krb5-2         |    CVE-2017-15088   |   LOW  |  1.15-1+deb9u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.15-1+deb9u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5730   |   LOW  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| libicu57         |    CVE-2020-21913   |   MEDIUM  |  57.1-6+deb9u4 | 57.1-6+deb9u5 |
| libidn11         |    CVE-2017-14062   |   CRITICAL  |  1.33-1 | 1.33-1+deb9u1 |
| libjpeg62-turbo         |    CVE-2019-2201   |   HIGH  |  1:1.5.1-2 | 1:1.5.1-2+deb9u2 |
| libjpeg62-turbo         |    CVE-2020-13790   |   HIGH  |  1:1.5.1-2 | 1:1.5.1-2+deb9u1 |
| libjpeg62-turbo         |    CVE-2020-14152   |   HIGH  |  1:1.5.1-2 | 1:1.5.1-2+deb9u1 |
| libjpeg62-turbo         |    CVE-2018-1152   |   MEDIUM  |  1:1.5.1-2 | 1:1.5.1-2+deb9u1 |
| libjpeg62-turbo         |    CVE-2018-14498   |   MEDIUM  |  1:1.5.1-2 | 1:1.5.1-2+deb9u1 |
| libjpeg62-turbo         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.1-2 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.1-2 |  |
| libjpeg62-turbo         |    CVE-2017-15232   |   LOW  |  1:1.5.1-2 |  |
| libjpeg62-turbo         |    CVE-2018-11813   |   LOW  |  1:1.5.1-2 |  |
| libjpeg62-turbo         |    CVE-2020-17541   |   LOW  |  1:1.5.1-2 |  |
| libk5crypto3         |    CVE-2020-28196   |   HIGH  |  1.15-1+deb9u1 | 1.15-1+deb9u2 |
| libk5crypto3         |    CVE-2018-20217   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libk5crypto3         |    CVE-2018-5710   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libk5crypto3         |    CVE-2018-5729   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libk5crypto3         |    CVE-2021-37750   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.15-1+deb9u1 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.15-1+deb9u1 |  |
| libk5crypto3         |    CVE-2017-11462   |   LOW  |  1.15-1+deb9u1 |  |
| libk5crypto3         |    CVE-2017-15088   |   LOW  |  1.15-1+deb9u1 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.15-1+deb9u1 |  |
| libk5crypto3         |    CVE-2018-5730   |   LOW  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5-3         |    CVE-2020-28196   |   HIGH  |  1.15-1+deb9u1 | 1.15-1+deb9u2 |
| libkrb5-3         |    CVE-2018-20217   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5-3         |    CVE-2018-5710   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5-3         |    CVE-2018-5729   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5-3         |    CVE-2021-37750   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.15-1+deb9u1 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5-3         |    CVE-2017-11462   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5-3         |    CVE-2017-15088   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5-3         |    CVE-2018-5730   |   LOW  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5support0         |    CVE-2020-28196   |   HIGH  |  1.15-1+deb9u1 | 1.15-1+deb9u2 |
| libkrb5support0         |    CVE-2018-20217   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5support0         |    CVE-2018-5710   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5support0         |    CVE-2018-5729   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5support0         |    CVE-2021-37750   |   MEDIUM  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.15-1+deb9u1 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5support0         |    CVE-2017-11462   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5support0         |    CVE-2017-15088   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.15-1+deb9u1 |  |
| libkrb5support0         |    CVE-2018-5730   |   LOW  |  1.15-1+deb9u1 | 1.15-1+deb9u3 |
| liblz4-1         |    CVE-2021-3520   |   CRITICAL  |  0.0~r131-2 | 0.0~r131-2+deb9u1 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  0.0~r131-2 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.2-1.2 | 5.2.2-1.2+deb9u1 |
| libmount1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libncursesw5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| libnss3         |    CVE-2019-17006   |   CRITICAL  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-12403   |   CRITICAL  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2021-43527   |   CRITICAL  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u3 |
| libnss3         |    CVE-2019-11719   |   HIGH  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2019-11729   |   HIGH  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2019-11745   |   HIGH  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2019-17007   |   HIGH  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-25648   |   HIGH  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2022-3479   |   HIGH  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2018-12404   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2018-18508   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2019-11727   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2020-12399   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-12400   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-12401   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-12402   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2020-6829   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u2 |
| libnss3         |    CVE-2022-22747   |   MEDIUM  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u5 |
| libnss3         |    CVE-2017-11695   |   LOW  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2017-11696   |   LOW  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2017-11697   |   LOW  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2017-11698   |   LOW  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    CVE-2018-12384   |   LOW  |  2:3.26.2-1.1+deb9u1 |  |
| libnss3         |    DLA-2836-2   |   UNKNOWN  |  2:3.26.2-1.1+deb9u1 | 2:3.26.2-1.1+deb9u4 |
| libp11-kit0         |    CVE-2020-29361   |   HIGH  |  0.23.3-2 | 0.23.3-2+deb9u1 |
| libp11-kit0         |    CVE-2020-29362   |   MEDIUM  |  0.23.3-2 | 0.23.3-2+deb9u1 |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpng16-16         |    CVE-2017-12652   |   CRITICAL  |  1.6.28-1+deb9u1 |  |
| libpng16-16         |    CVE-2018-14048   |   LOW  |  1.6.28-1+deb9u1 |  |
| libpng16-16         |    CVE-2018-14550   |   LOW  |  1.6.28-1+deb9u1 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.28-1+deb9u1 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.28-1+deb9u1 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.6-2 |  |
| libsmartcols1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libsqlite3-0         |    CVE-2019-8457   |   CRITICAL  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2020-35527   |   CRITICAL  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2018-20346   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2018-20506   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2018-8740   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2019-20218   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u3 |
| libsqlite3-0         |    CVE-2019-5827   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2019-9936   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2019-9937   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2020-11655   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2020-13630   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2020-13871   |   HIGH  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2020-35525   |   HIGH  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   HIGH  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2019-16168   |   MEDIUM  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2020-13434   |   MEDIUM  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2020-13632   |   MEDIUM  |  3.16.2-5+deb9u1 | 3.16.2-5+deb9u2 |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2017-13685   |   LOW  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.16.2-5+deb9u1 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.16.2-5+deb9u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| libss2         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| libss2         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u6 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-2274   |   CRITICAL  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2019-1543   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0k-1~deb9u1 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u4 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2022-3358   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3602   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3786   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3996   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2019-1547   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u1 |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u2 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.0j-1~deb9u1 |  |
| libssl1.1         |    CVE-2019-1563   |   LOW  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u1 |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libsystemd0         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u11 | 232-25+deb9u14 |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u11 | 232-25+deb9u13 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2017-18078   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2018-16888   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2018-6954   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  232-25+deb9u11 |  |
| libsystemd0         |    CVE-2020-13776   |   LOW  |  232-25+deb9u11 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.10-1.1+deb9u1 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.10-1.1+deb9u1 |  |
| libtinfo5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libudev1         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u11 | 232-25+deb9u14 |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u11 | 232-25+deb9u13 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2017-18078   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2018-16888   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2018-6954   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  232-25+deb9u11 |  |
| libudev1         |    CVE-2020-13776   |   LOW  |  232-25+deb9u11 |  |
| libuuid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libx11-6         |    CVE-2021-31535   |   CRITICAL  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u4 |
| libx11-6         |    CVE-2020-14363   |   HIGH  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u3 |
| libx11-6         |    CVE-2020-14344   |   MEDIUM  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u2 |
| libx11-data         |    CVE-2021-31535   |   CRITICAL  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u4 |
| libx11-data         |    CVE-2020-14363   |   HIGH  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u3 |
| libx11-data         |    CVE-2020-14344   |   MEDIUM  |  2:1.6.4-3+deb9u1 | 2:1.6.4-3+deb9u2 |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u6 |
| libxml2         |    CVE-2017-5130   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u6 |
| libxml2         |    CVE-2021-3516   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u4 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u4 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u4 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u6 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 |  |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-2.2+deb9u3 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u6 |
| libxml2         |    CVE-2017-5969   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u6 |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u4 |
| libxml2         |    CVE-2021-3541   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u5 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.4+dfsg1-2.2+deb9u3 | 2.9.4+dfsg1-2.2+deb9u7 |
| libxslt1.1         |    CVE-2019-5815   |   HIGH  |  1.1.29-2.1+deb9u2 |  |
| libxslt1.1         |    CVE-2021-30560   |   HIGH  |  1.1.29-2.1+deb9u2 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.29-2.1+deb9u2 |  |
| login         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| mount         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| multiarch-support         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u4 |  |
| multiarch-support         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u4 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| ncurses-base         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-base         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-base         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| ncurses-bin         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-bin         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-bin         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u6 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2022-2274   |   CRITICAL  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2019-1543   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0k-1~deb9u1 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u3 |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u4 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2022-3358   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2022-3602   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2022-3786   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2022-3996   |   HIGH  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2019-1547   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u1 |
| openssl         |    CVE-2019-1551   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u2 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u3 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.0j-1~deb9u1 |  |
| openssl         |    CVE-2019-1563   |   LOW  |  1.1.0j-1~deb9u1 | 1.1.0l-1~deb9u1 |
| passwd         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| perl-base         |    CVE-2020-10543   |   HIGH  |  5.24.1-3+deb9u5 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-10878   |   HIGH  |  5.24.1-3+deb9u5 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-12723   |   HIGH  |  5.24.1-3+deb9u5 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u5 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u5 |  |
| tar         |    CVE-2018-20482   |   MEDIUM  |  1.29b-1.1 | 1.29b-1.1+deb9u1 |
| tar         |    CVE-2005-2541   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.29b-1.1 |  |
| tzdata         |    DLA-2424-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2020d-0+deb9u1 |
| tzdata         |    DLA-2509-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2020e-0+deb9u1 |
| tzdata         |    DLA-2542-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2021a-0+deb9u1 |
| tzdata         |    DLA-2797-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2021a-0+deb9u2 |
| tzdata         |    DLA-2963-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2021a-0+deb9u3 |
| tzdata         |    DLA-3051-1   |   UNKNOWN  |  2019a-0+deb9u1 | 2021a-0+deb9u4 |
| unzip         |    CVE-2022-0529   |   MEDIUM  |  6.0-21+deb9u2 |  |
| unzip         |    CVE-2022-0530   |   MEDIUM  |  6.0-21+deb9u2 |  |
| unzip         |    CVE-2021-4217   |   LOW  |  6.0-21+deb9u2 |  |
| util-linux         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| xz-utils         |    CVE-2022-1271   |   HIGH  |  5.2.2-1.2 | 5.2.2-1.2+deb9u1 |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.8.dfsg-5 |  |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.8.dfsg-5 | 1:1.2.8.dfsg-5+deb9u1 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.11.0 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.11.0 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.11.0 | 2.12.7.1, 2.13.4 |
| com.google.code.gson:gson         |    CVE-2022-25647   |   HIGH  |  2.8.6 | 2.8.9 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.2 | 2.7 |
| commons-net:commons-net         |    CVE-2021-37533   |   MEDIUM  |  3.7 | 3.9.0 |
| log4j:log4j         |    CVE-2019-17571   |   CRITICAL  |  1.2.17 | 2.0-alpha1 |
| log4j:log4j         |    CVE-2022-23305   |   CRITICAL  |  1.2.17 |  |
| log4j:log4j         |    CVE-2022-23302   |   HIGH  |  1.2.17 |  |
| log4j:log4j         |    CVE-2022-23307   |   HIGH  |  1.2.17 |  |
| log4j:log4j         |    CVE-2020-9488   |   LOW  |  1.2.17 | 2.13.2 |
| mysql:mysql-connector-java         |    CVE-2019-2692   |   MEDIUM  |  8.0.15 | 8.0.16 |
| mysql:mysql-connector-java         |    CVE-2020-2934   |   MEDIUM  |  8.0.15 | 5.1.49, 8.0.20 |
| mysql:mysql-connector-java         |    CVE-2021-2471   |   MEDIUM  |  8.0.15 | 8.0.27 |
| mysql:mysql-connector-java         |    CVE-2022-21363   |   MEDIUM  |  8.0.15 | 8.0.28 |
| org.apache.commons:commons-compress         |    CVE-2021-35515   |   HIGH  |  1.20 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-35516   |   HIGH  |  1.20 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-35517   |   HIGH  |  1.20 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-36090   |   HIGH  |  1.20 | 1.21 |
| org.apache.commons:commons-text         |    CVE-2022-42889   |   CRITICAL  |  1.9 | 1.10.0 |
| org.apache.httpcomponents:httpclient         |    CVE-2020-13956   |   MEDIUM  |  4.5.12 | 4.5.13 |
| org.apache.mina:mina-core         |    CVE-2021-41973   |   MEDIUM  |  2.1.3 | 2.1.5 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2020-17527   |   HIGH  |  9.0.20 | 8.5.60, 9.0.40, 10.0.2 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2020-9484   |   HIGH  |  9.0.20 | 7.0.104, 8.5.55, 9.0.35 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2022-25762   |   HIGH  |  9.0.20 | 8.5.76, 9.0.21 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2021-24122   |   MEDIUM  |  9.0.20 | 10.0.0-M10, 9.0.40, 8.5.60, 7.0.107 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2021-43980   |   LOW  |  9.0.20 |  |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-1938   |   CRITICAL  |  9.0.20 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-11996   |   HIGH  |  9.0.20 | 8.5.56, 9.0.36 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-13934   |   HIGH  |  9.0.20 | 8.5.57, 9.0.37 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-13935   |   HIGH  |  9.0.20 | 7.0.105, 8.5.57, 9.0.37, 10.0.2 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-17527   |   HIGH  |  9.0.20 | 8.5.60, 9.0.40, 10.0.2 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2022-42252   |   HIGH  |  9.0.20 | 8.5.83, 9.0.68, 10.0.27, 10.1.1 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-13943   |   MEDIUM  |  9.0.20 | 8.5.58, 9.0.38 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-1935   |   MEDIUM  |  9.0.20 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2021-24122   |   MEDIUM  |  9.0.20 | 10.0.0-M10, 9.0.40, 8.5.60, 7.0.107 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2021-33037   |   MEDIUM  |  9.0.20 | 8.5.68, 9.0.48, 10.0.7 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2021-43980   |   LOW  |  9.0.20 |  |
| org.apache.tomcat:tomcat-util         |    CVE-2020-1935   |   MEDIUM  |  9.0.20 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-util         |    CVE-2021-24122   |   MEDIUM  |  9.0.20 | 7.0.107, 8.5.60, 9.0.40, 10.0.2 |
| org.apache.tomcat:tomcat-util         |    CVE-2021-43980   |   LOW  |  9.0.20 |  |
| org.bouncycastle:bcprov-jdk15on         |    CVE-2020-28052   |   HIGH  |  1.66 | 1.67 |
| org.jdom:jdom2         |    CVE-2021-33813   |   HIGH  |  2.0.6 | 2.0.6.1 |
| org.jetbrains.kotlin:kotlin-stdlib         |    CVE-2020-29582   |   MEDIUM  |  1.3.10 | 1.4.21 |
| org.jetbrains.kotlin:kotlin-stdlib         |    CVE-2022-24329   |   MEDIUM  |  1.3.10 | 1.6.0 |
| org.postgresql:postgresql         |    CVE-2022-21724   |   CRITICAL  |  42.2.5 | 42.2.25, 42.3.2 |
| org.postgresql:postgresql         |    CVE-2022-26520   |   CRITICAL  |  42.2.5 | 42.3.3 |
| org.postgresql:postgresql         |    CVE-2020-13692   |   HIGH  |  42.2.5 | 42.2.13 |
| org.postgresql:postgresql         |    CVE-2022-31197   |   HIGH  |  42.2.5 | 42.2.26, 42.3.7, 42.4.1 |
| org.postgresql:postgresql         |    CVE-2022-41946   |   MEDIUM  |  42.2.5 | 42.2.27, 42.3.8, 42.4.3, 42.5.1 |
| org.postgresql:postgresql         |    GHSA-673j-qm5f-xpv8   |   MEDIUM  |  42.2.5 | 42.3.3 |

