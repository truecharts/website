# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/rss-proxy:latest@sha256:234cff7a4617753574440eafca872b85c4be1f76fd8992c7c45de94de4c3457f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/rss-proxy:latest@sha256:234cff7a4617753574440eafca872b85c4be1f76fd8992c7c45de94de4c3457f**

#### Container: tccr.io/truecharts/rss-proxy:latest@sha256:234cff7a4617753574440eafca872b85c4be1f76fd8992c7c45de94de4c3457f (debian 9.13)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2020-27350   |   MEDIUM  |  1.4.10 | 1.4.11 |
| apt         |    CVE-2011-3374   |   LOW  |  1.4.10 |  |
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
| libapt-pkg5.0         |    CVE-2020-27350   |   MEDIUM  |  1.4.10 | 1.4.11 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.4.10 |  |
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
| libcomerr2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28-12+deb9u1 |  |
| libfdisk1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.7.6-2+deb9u3 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.7.6-2+deb9u3 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.7.6-2+deb9u3 | 1.7.6-2+deb9u4 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.7.6-2+deb9u3 |  |
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
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libperl5.24         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u7 |  |
| libperl5.24         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u7 |  |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27~101-g0780600+dfsg-3+deb9u1 | 2.1.27~101-g0780600+dfsg-3+deb9u2 |
| libsasl2-modules         |    CVE-2022-24407   |   HIGH  |  2.1.27~101-g0780600+dfsg-3+deb9u1 | 2.1.27~101-g0780600+dfsg-3+deb9u2 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27~101-g0780600+dfsg-3+deb9u1 | 2.1.27~101-g0780600+dfsg-3+deb9u2 |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.6-2 |  |
| libsmartcols1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2+deb9u2 |  |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u6 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-2274   |   CRITICAL  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u4 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2022-3358   |   HIGH  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3602   |   HIGH  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3786   |   HIGH  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-3996   |   HIGH  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u2 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.0l-1~deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.0l-1~deb9u1 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.0l-1~deb9u1 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  6.3.0-18+deb9u1 |  |
| libsystemd0         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u12 | 232-25+deb9u14 |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u12 | 232-25+deb9u13 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2017-18078   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2018-16888   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2018-6954   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  232-25+deb9u12 |  |
| libsystemd0         |    CVE-2020-13776   |   LOW  |  232-25+deb9u12 |  |
| libtinfo5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libtinfo5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u2 |  |
| libudev1         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u12 | 232-25+deb9u14 |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u12 | 232-25+deb9u13 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2017-18078   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2018-16888   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2018-6954   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  232-25+deb9u12 |  |
| libudev1         |    CVE-2020-13776   |   LOW  |  232-25+deb9u12 |  |
| libuuid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| login         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| memcached         |    CVE-2019-15026   |   HIGH  |  1.4.33-1+deb9u1 |  |
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
| passwd         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u7 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u7 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u7 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u7 |  |
| perl-modules-5.24         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u7 |  |
| perl-modules-5.24         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u7 |  |
| tar         |    CVE-2018-20482   |   MEDIUM  |  1.29b-1.1 | 1.29b-1.1+deb9u1 |
| tar         |    CVE-2005-2541   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.29b-1.1 |  |
| tzdata         |    DLA-2424-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2020d-0+deb9u1 |
| tzdata         |    DLA-2509-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2020e-0+deb9u1 |
| tzdata         |    DLA-2542-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2021a-0+deb9u1 |
| tzdata         |    DLA-2797-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2021a-0+deb9u2 |
| tzdata         |    DLA-2963-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2021a-0+deb9u3 |
| tzdata         |    DLA-3051-1   |   UNKNOWN  |  2020a-0+deb9u1 | 2021a-0+deb9u4 |
| util-linux         |    CVE-2016-2779   |   HIGH  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.29.2-1+deb9u1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.29.2-1+deb9u1 |  |
| xz-utils         |    CVE-2022-1271   |   HIGH  |  5.2.2-1.2 | 5.2.2-1.2+deb9u1 |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.8.dfsg-5 |  |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.8.dfsg-5 | 1:1.2.8.dfsg-5+deb9u1 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ajv         |    CVE-2020-15366   |   MEDIUM  |  5.5.2 | 6.12.3 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| async         |    CVE-2021-43138   |   HIGH  |  2.6.3 | 2.6.4, 3.2.2 |
| async         |    CVE-2021-43138   |   HIGH  |  3.2.0 | 2.6.4, 3.2.2 |
| axios         |    CVE-2021-3749   |   HIGH  |  0.19.2 | 0.21.2 |
| axios         |    CVE-2020-28168   |   MEDIUM  |  0.19.2 | 0.21.1 |
| color-string         |    CVE-2021-29060   |   MEDIUM  |  1.5.4 | 1.5.5 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| degenerator         |    CVE-2021-23406   |   HIGH  |  1.0.4 | 3.0.1 |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.5.10 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.5.10 | 1.14.8 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  5.1.1 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| hosted-git-info         |    CVE-2021-23362   |   MEDIUM  |  2.8.8 | 2.8.9, 3.0.8 |
| ini         |    CVE-2020-7788   |   HIGH  |  1.3.5 | 1.3.6 |
| jsdom         |    CVE-2021-20066   |   MEDIUM  |  15.2.1 | 16.5.0 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.20 | 4.17.21 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.20 | 4.17.21 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.29.1 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.1 | 2.29.4 |
| moment-timezone         |    GHSA-v78c-4p63-2j6c   |   MEDIUM  |  0.5.31 | 0.5.35 |
| moment-timezone         |    GHSA-56x4-j7p9-fcf9   |   LOW  |  0.5.31 | 0.5.35 |
| netmask         |    CVE-2021-28918   |   CRITICAL  |  1.0.6 | 1.1.0 |
| netmask         |    CVE-2021-29418   |   MEDIUM  |  1.0.6 | 2.0.1 |
| node-fetch         |    CVE-2022-0235   |   HIGH  |  2.6.1 | 2.6.7, 3.1.1 |
| npm-user-validate         |    CVE-2020-7754   |   HIGH  |  1.0.0 | 1.0.1 |
| npm-user-validate         |    GHSA-xgh6-85xh-479p   |   LOW  |  1.0.0 | 1.0.1 |
| pac-resolver         |    CVE-2021-23406   |   HIGH  |  3.0.0 | 5.0.0 |
| path-parse         |    CVE-2021-23343   |   MEDIUM  |  1.0.6 | 1.0.7 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| ssri         |    CVE-2021-27290   |   HIGH  |  6.0.1 | 8.0.1, 7.1.1, 6.0.2 |
| systeminformation         |    CVE-2020-7778   |   HIGH  |  4.30.0 | 4.30.2 |
| systeminformation         |    CVE-2021-21388   |   HIGH  |  4.30.0 | 5.6.4 |
| systeminformation         |    CVE-2020-26245   |   MEDIUM  |  4.30.0 | 4.30.5 |
| systeminformation         |    CVE-2020-26274   |   MEDIUM  |  4.30.0 | 4.31.1 |
| systeminformation         |    CVE-2021-21315   |   MEDIUM  |  4.30.0 | 5.3.1 |
| tar         |    CVE-2021-32803   |   HIGH  |  4.4.13 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  4.4.13 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  4.4.13 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| urijs         |    CVE-2021-27516   |   HIGH  |  1.19.5 | 1.19.6 |
| urijs         |    CVE-2022-1243   |   HIGH  |  1.19.5 | 1.19.11 |
| urijs         |    CVE-2021-3647   |   MEDIUM  |  1.19.5 | 1.19.7 |
| urijs         |    CVE-2022-0613   |   MEDIUM  |  1.19.5 | 1.19.8 |
| urijs         |    CVE-2022-0868   |   MEDIUM  |  1.19.5 | 1.19.10 |
| urijs         |    CVE-2022-1233   |   MEDIUM  |  1.19.5 | 1.19.11 |
| urijs         |    CVE-2022-24723   |   MEDIUM  |  1.19.5 | 1.19.9 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  6.2.1 | 5.2.3, 6.2.2, 7.4.6 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  7.2.5 | 5.2.3, 6.2.2, 7.4.6 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  7.4.2 | 5.2.3, 6.2.2, 7.4.6 |
| y18n         |    CVE-2020-7774   |   HIGH  |  4.0.0 | 5.0.5, 4.0.1, 3.2.2 |

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

