# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/rtmpserver:latest@sha256:bfc85c58cc8cb8866774364af135c8fe3816ed26ee5c4ea182d28d2acf63c16e
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/rtmpserver:latest@sha256:bfc85c58cc8cb8866774364af135c8fe3816ed26ee5c4ea182d28d2acf63c16e**

#### Container: tccr.io/truecharts/rtmpserver:latest@sha256:bfc85c58cc8cb8866774364af135c8fe3816ed26ee5c4ea182d28d2acf63c16e (debian 9.13)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  1.4.11 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  4.4-5 |  |
| bash         |    CVE-2019-18276   |   LOW  |  4.4-5 |  |
| bsdutils         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.26-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.26-3 |  |
| debian-archive-keyring         |    DLA-2948-1   |   UNKNOWN  |  2017.5+deb9u1 | 2017.5+deb9u2 |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.18.25 | 1.18.26 |
| e2fslibs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| gcc-6-base         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| gpgv         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u4 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u4 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.6-5 | 1.6-5+deb9u1 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.4.11 |  |
| libblkid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
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
| libc-dev-bin         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u4 |  |
| libc-dev-bin         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u4 |  |
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
| libc6-dev         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u4 |  |
| libc6-dev         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u4 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.14.8-1+deb9u1 |  |
| libcairo2         |    CVE-2017-9814   |   LOW  |  1.14.8-1+deb9u1 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.14.8-1+deb9u1 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.14.8-1+deb9u1 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.14.8-1+deb9u1 |  |
| libcomerr2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28-12+deb9u1 |  |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.0-2+deb9u3 |  |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u4 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.0-2+deb9u3 |  |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.0-2+deb9u3 | 2.2.0-2+deb9u5 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.0-2+deb9u3 |  |
| libfdisk1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.6.3-3.2+deb9u2 |  |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.6.3-3.2+deb9u2 |  |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.6.3-3.2+deb9u2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.6.3-3.2+deb9u2 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.7.6-2+deb9u4 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.7.6-2+deb9u4 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.7.6-2+deb9u4 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-1 | 2:6.1.2+dfsg-1+deb9u1 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.5.8-5+deb9u5 |  |
| libgnutls30         |    CVE-2018-16868   |   MEDIUM  |  3.5.8-5+deb9u5 |  |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.5.8-5+deb9u5 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.5.8-5+deb9u5 |  |
| libgnutls30         |    DLA-2759-1   |   UNKNOWN  |  3.5.8-5+deb9u5 | 3.5.8-5+deb9u6 |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  0.0~r131-2+deb9u1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.2-1.2 | 5.2.2-1.2+deb9u1 |
| libmount1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libmp3lame0         |    CVE-2017-15019   |   HIGH  |  3.99.5+repack1-9 |  |
| libmp3lame0         |    CVE-2017-13712   |   LOW  |  3.99.5+repack1-9 |  |
| libncursesw5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libncursesw5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| libpcre16-3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre16-3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre16-3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre16-3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre16-3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre16-3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre3-dev         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre32-3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcrecpp0v5         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libpixman-1-0         |    CVE-2022-44638   |   HIGH  |  0.34.0-1 |  |
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
| libss2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u6 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2022-2274   |   CRITICAL  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u4 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2022-3358   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2022-3602   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2022-3786   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2022-3996   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.0l-1~deb9u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.0l-1~deb9u3 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libsystemd0         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u13 | 232-25+deb9u14 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2017-18078   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2018-16888   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2018-6954   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  232-25+deb9u13 |  |
| libsystemd0         |    CVE-2020-13776   |   LOW  |  232-25+deb9u13 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.10-1.1+deb9u1 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.10-1.1+deb9u1 |  |
| libtinfo5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libudev1         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u13 | 232-25+deb9u14 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2017-18078   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2018-16888   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2018-6954   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  232-25+deb9u13 |  |
| libudev1         |    CVE-2020-13776   |   LOW  |  232-25+deb9u13 |  |
| libuuid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libvorbis-dev         |    CVE-2017-14160   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbis-dev         |    CVE-2018-10392   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbis-dev         |    CVE-2018-10393   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbis0a         |    CVE-2017-14160   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbis0a         |    CVE-2018-10392   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbis0a         |    CVE-2018-10393   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisenc2         |    CVE-2017-14160   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisenc2         |    CVE-2018-10392   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisenc2         |    CVE-2018-10393   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisfile3         |    CVE-2017-14160   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisfile3         |    CVE-2018-10392   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvorbisfile3         |    CVE-2018-10393   |   HIGH  |  1.3.5-4+deb9u2 | 1.3.5-4+deb9u3 |
| libvpx4         |    CVE-2020-0034   |   HIGH  |  1.6.1-3+deb9u2 | 1.6.1-3+deb9u3 |
| libvpx4         |    CVE-2017-0641   |   LOW  |  1.6.1-3+deb9u2 |  |
| libvpx4         |    CVE-2019-9371   |   LOW  |  1.6.1-3+deb9u2 |  |
| libx265-95         |    CVE-2017-13135   |   LOW  |  2.1-2 |  |
| libx265-dev         |    CVE-2017-13135   |   LOW  |  2.1-2 |  |
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3649   |   CRITICAL  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47939   |   CRITICAL  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47940   |   CRITICAL  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-12930   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-12931   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-25020   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-0145   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19377   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-2213   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-0030   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-16119   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2020-36385   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-20322   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-22543   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-33033   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-3506   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3600   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3612   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-3640   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-3653   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3752   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-37576   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3760   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-38160   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-38207   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-38300   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-39685   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-39686   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-39698   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-39713   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2021-39714   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-4037   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-40490   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-4083   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-41864   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-4197   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-42008   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-4202   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-45469   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-45485   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2022-0330   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0435   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0492   |   HIGH  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0850   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2022-1011   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1012   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1048   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1199   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1353   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1419   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1652   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1679   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1729   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1734   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-20141   |   HIGH  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2022-20368   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20421   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20422   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20566   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20568   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-23036   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23037   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23038   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23039   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23040   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23041   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-23042   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2327   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-24958   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2585   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2588   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2590   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2602   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-26365   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2639   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-26490   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-27223   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-28388   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-28390   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2938   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2959   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2964   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2977   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2978   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3028   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-30594   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-3176   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3202   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-32250   |   HIGH  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-3239   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33740   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33741   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33742   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33743   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-34918   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3522   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3526   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3541   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3577   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-36123   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3621   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3623   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3625   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3635   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-36946   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3910   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3977   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41222   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4139   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41674   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42719   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42720   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-43750   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47942   |   HIGH  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-18232   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-10322   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-1108   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2018-12929   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-13095   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-20449   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-7273   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-7754   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-0146   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-0147   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-0148   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-0149   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12984   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19036   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19039   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-20908   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-3874   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-9245   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-9444   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-9453   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-0067   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-15780   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-26141   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-26145   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-27777   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-27784   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-36557   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-36558   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-3702   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2020-4788   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-0920   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-20317   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-20320   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-20321   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-26401   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28711   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28712   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28713   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28714   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28715   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-28972   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-29264   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-33098   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-33624   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-33655   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-33656   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-34556   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-35477   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3679   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-37159   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-3732   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-3753   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3772   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-38198   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-38199   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-38204   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-39633   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-39636   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-4002   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-4149   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2021-4155   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-4159   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-4203   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-42739   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-43389   |   MEDIUM  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-43975   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-43976   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-45095   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2021-45868   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0001   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0002   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-0487   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0494   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-0617   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-0812   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-0854   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1016   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1184   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1195   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-1198   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1204   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1205   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1462   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-1516   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1974   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-1975   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-20132   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-20369   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20409   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20423   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20567   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-20572   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-21123   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-21125   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-21166   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-21385   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-21505   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2153   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2308   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2318   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2380   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-23816   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-23960   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2503   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-25258   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-25375   |   MEDIUM  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-2586   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-26373   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2663   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-26966   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2785   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-28356   |   MEDIUM  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2905   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-29901   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3061   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3077   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3078   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3104   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3105   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3106   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3107   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3110   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3111   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3112   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3113   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3114   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3115   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3303   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33744   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3435   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3543   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3544   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3586   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3619   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3630   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3646   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-36879   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-38457   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3903   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-39188   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-39190   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-40133   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-40307   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4095   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4128   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-41858   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42703   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42721   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42722   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45869   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-45888   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4662   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47938   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47941   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47943   |   MEDIUM  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-11472   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-12762   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-13695   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2017-9986   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-20669   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2018-8043   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-12615   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-18808   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19046   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19054   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19060   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19061   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19064   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19067   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2019-19075   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-27820   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-0929   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2021-3655   |   LOW  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-38205   |   LOW  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2021-45486   |   LOW  |  4.9.272-2 | 4.9.290-1 |
| linux-libc-dev         |    CVE-2022-24448   |   LOW  |  4.9.272-2 | 4.9.303-1 |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2991   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-32296   |   LOW  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-3238   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-32981   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-33981   |   LOW  |  4.9.272-2 | 4.9.320-2 |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3629   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-3633   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-39842   |   LOW  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-2196   |   UNKNOWN  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4379   |   UNKNOWN  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  4.9.272-2 |  |
| linux-libc-dev         |    CVE-2022-47946   |   UNKNOWN  |  4.9.272-2 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1+deb9u1 |  |
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
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u6 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2022-2274   |   CRITICAL  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u4 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2022-3358   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2022-3602   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2022-3786   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2022-3996   |   HIGH  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2019-1551   |   MEDIUM  |  1.1.0l-1~deb9u3 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.0l-1~deb9u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.0l-1~deb9u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1+deb9u1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u7 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u7 |  |
| tar         |    CVE-2018-20482   |   MEDIUM  |  1.29b-1.1 | 1.29b-1.1+deb9u1 |
| tar         |    CVE-2005-2541   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.29b-1.1 |  |
| tzdata         |    DLA-2797-1   |   UNKNOWN  |  2021a-0+deb9u1 | 2021a-0+deb9u2 |
| tzdata         |    DLA-2963-1   |   UNKNOWN  |  2021a-0+deb9u1 | 2021a-0+deb9u3 |
| tzdata         |    DLA-3051-1   |   UNKNOWN  |  2021a-0+deb9u1 | 2021a-0+deb9u4 |
| util-linux         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.8.dfsg-5 |  |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.8.dfsg-5 | 1:1.2.8.dfsg-5+deb9u1 |

