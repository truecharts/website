# Container Security

##### Detected Containers

          tccr.io/truecharts/bitcoinunlimited:latest@sha256:142797786f3755fa11d7c0b9749ac62b3d8e8de5afd33bf567eba679738627a5
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/bitcoinunlimited:latest@sha256:142797786f3755fa11d7c0b9749ac62b3d8e8de5afd33bf567eba679738627a5**

#### Container: tccr.io/truecharts/bitcoinunlimited:latest@sha256:142797786f3755fa11d7c0b9749ac62b3d8e8de5afd33bf567eba679738627a5 (debian 9.3)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2019-3462   |   HIGH  |  1.4.8 | 1.4.9 |
| apt         |    CVE-2020-27350   |   MEDIUM  |  1.4.8 | 1.4.11 |
| apt         |    CVE-2020-3810   |   MEDIUM  |  1.4.8 | 1.4.10 |
| apt         |    CVE-2011-3374   |   LOW  |  1.4.8 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  4.4-5 |  |
| bash         |    CVE-2019-18276   |   LOW  |  4.4-5 |  |
| bsdutils         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| bsdutils         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| ca-certificates         |    DLA-2593-1   |   UNKNOWN  |  20161130+nmu1 | 20200601~deb9u2 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.26-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.26-3 |  |
| debian-archive-keyring         |    DLA-2948-1   |   UNKNOWN  |  2017.5 | 2017.5+deb9u2 |
| dirmngr         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u1 |  |
| dirmngr         |    CVE-2018-12020   |   HIGH  |  2.1.18-8~deb9u1 | 2.1.18-8~deb9u2 |
| dirmngr         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u1 |  |
| dirmngr         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u1 |  |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u1 |  |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.18.24 | 1.18.26 |
| e2fslibs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| e2fslibs         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| e2fslibs         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| e2fsprogs         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| e2fsprogs         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| gcc-6-base         |    CVE-2018-12886   |   HIGH  |  6.3.0-18 |  |
| gcc-6-base         |    DSA-4121-1   |   UNKNOWN  |  6.3.0-18 | 6.3.0-18+deb9u1 |
| gnupg         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u1 |  |
| gnupg         |    CVE-2018-12020   |   HIGH  |  2.1.18-8~deb9u1 | 2.1.18-8~deb9u2 |
| gnupg         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u1 |  |
| gnupg         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u1 |  |
| gnupg         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u1 |  |
| gnupg-agent         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u1 |  |
| gnupg-agent         |    CVE-2018-12020   |   HIGH  |  2.1.18-8~deb9u1 | 2.1.18-8~deb9u2 |
| gnupg-agent         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u1 |  |
| gnupg-agent         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u1 |  |
| gnupg-agent         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u1 |  |
| gpgv         |    CVE-2018-1000858   |   HIGH  |  2.1.18-8~deb9u1 |  |
| gpgv         |    CVE-2018-12020   |   HIGH  |  2.1.18-8~deb9u1 | 2.1.18-8~deb9u2 |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.1.18-8~deb9u1 |  |
| gpgv         |    CVE-2018-9234   |   LOW  |  2.1.18-8~deb9u1 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.1.18-8~deb9u1 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.6-5 | 1.6-5+deb9u1 |
| libapt-pkg5.0         |    CVE-2019-3462   |   HIGH  |  1.4.8 | 1.4.9 |
| libapt-pkg5.0         |    CVE-2020-27350   |   MEDIUM  |  1.4.8 | 1.4.11 |
| libapt-pkg5.0         |    CVE-2020-3810   |   MEDIUM  |  1.4.8 | 1.4.10 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.4.8 |  |
| libblkid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| libblkid1         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| libbz2-1.0         |    CVE-2019-12900   |   CRITICAL  |  1.0.6-8.1 |  |
| libc-bin         |    CVE-2017-18269   |   CRITICAL  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2017-1000408   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2017-1000409   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2017-16997   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2017-12133   |   MEDIUM  |  2.24-11+deb9u1 | 2.24-11+deb9u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2017-15670   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2017-15671   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2017-15804   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2018-11236   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2018-11237   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u1 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2017-18269   |   CRITICAL  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2017-1000408   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2017-1000409   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2017-16997   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2017-12133   |   MEDIUM  |  2.24-11+deb9u1 | 2.24-11+deb9u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2017-15670   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2017-15671   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2017-15804   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2018-11236   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2018-11237   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| libc6         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u1 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u1 |  |
| libcomerr2         |    CVE-2022-1304   |   HIGH  |  1.43.4-2 |  |
| libcomerr2         |    CVE-2019-5094   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u1 |
| libcomerr2         |    CVE-2019-5188   |   MEDIUM  |  1.43.4-2 | 1.43.4-2+deb9u2 |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28-12+deb9u1 |  |
| libfdisk1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| libfdisk1         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  6.3.0-18 |  |
| libgcc1         |    DSA-4121-1   |   UNKNOWN  |  6.3.0-18 | 6.3.0-18+deb9u1 |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.7.6-2+deb9u2 |  |
| libgcrypt20         |    CVE-2018-0495   |   MEDIUM  |  1.7.6-2+deb9u2 | 1.7.6-2+deb9u3 |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.7.6-2+deb9u2 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.7.6-2+deb9u2 | 1.7.6-2+deb9u4 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.7.6-2+deb9u2 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-1 | 2:6.1.2+dfsg-1+deb9u1 |
| libgnutls30         |    CVE-2019-3829   |   HIGH  |  3.5.8-5+deb9u3 | 3.5.8-5+deb9u5 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.5.8-5+deb9u3 |  |
| libgnutls30         |    CVE-2018-10844   |   MEDIUM  |  3.5.8-5+deb9u3 | 3.5.8-5+deb9u4 |
| libgnutls30         |    CVE-2018-10845   |   MEDIUM  |  3.5.8-5+deb9u3 | 3.5.8-5+deb9u4 |
| libgnutls30         |    CVE-2018-10846   |   MEDIUM  |  3.5.8-5+deb9u3 | 3.5.8-5+deb9u4 |
| libgnutls30         |    CVE-2018-16868   |   MEDIUM  |  3.5.8-5+deb9u3 |  |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.5.8-5+deb9u3 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.5.8-5+deb9u3 |  |
| libgnutls30         |    DLA-2759-1   |   UNKNOWN  |  3.5.8-5+deb9u3 | 3.5.8-5+deb9u6 |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libhogweed4         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| libidn11         |    CVE-2017-14062   |   CRITICAL  |  1.33-1 | 1.33-1+deb9u1 |
| libksba8         |    CVE-2022-3515   |   HIGH  |  1.3.5-2 |  |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2 |  |
| libldap-2.4-2         |    CVE-2022-29155   |   CRITICAL  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u9 |
| libldap-2.4-2         |    CVE-2020-12243   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u4 |
| libldap-2.4-2         |    CVE-2020-25692   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u5 |
| libldap-2.4-2         |    CVE-2020-25709   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u6 |
| libldap-2.4-2         |    CVE-2020-25710   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u6 |
| libldap-2.4-2         |    CVE-2020-36221   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36222   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36223   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36224   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36225   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36226   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36227   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36228   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36229   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2020-36230   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-2.4-2         |    CVE-2021-27212   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u8 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-2.4-2         |    CVE-2019-13057   |   LOW  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u3 |
| libldap-2.4-2         |    CVE-2019-13565   |   LOW  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u3 |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-common         |    CVE-2022-29155   |   CRITICAL  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u9 |
| libldap-common         |    CVE-2020-12243   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u4 |
| libldap-common         |    CVE-2020-25692   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u5 |
| libldap-common         |    CVE-2020-25709   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u6 |
| libldap-common         |    CVE-2020-25710   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u6 |
| libldap-common         |    CVE-2020-36221   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36222   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36223   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36224   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36225   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36226   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36227   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36228   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36229   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2020-36230   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u7 |
| libldap-common         |    CVE-2021-27212   |   HIGH  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u8 |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| libldap-common         |    CVE-2019-13057   |   LOW  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u3 |
| libldap-common         |    CVE-2019-13565   |   LOW  |  2.4.44+dfsg-5+deb9u1 | 2.4.44+dfsg-5+deb9u3 |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.44+dfsg-5+deb9u1 |  |
| liblz4-1         |    CVE-2021-3520   |   CRITICAL  |  0.0~r131-2 | 0.0~r131-2+deb9u1 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  0.0~r131-2 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.2-1.2 | 5.2.2-1.2+deb9u1 |
| libmount1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| libmount1         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| libncursesw5         |    CVE-2017-16879   |   HIGH  |  6.0+20161126-1+deb9u1 | 6.0+20161126-1+deb9u2 |
| libncursesw5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u1 |  |
| libncursesw5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libncursesw5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libncursesw5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libncursesw5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.3-1 | 3.3-1+deb9u1 |
| libnettle6         |    CVE-2018-16869   |   MEDIUM  |  3.3-1 |  |
| libp11-kit0         |    CVE-2020-29361   |   HIGH  |  0.23.3-2 | 0.23.3-2+deb9u1 |
| libp11-kit0         |    CVE-2020-29362   |   MEDIUM  |  0.23.3-2 | 0.23.3-2+deb9u1 |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-3 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-3 |  |
| libsasl2-2         |    CVE-2019-19906   |   HIGH  |  2.1.27~101-g0780600+dfsg-3 | 2.1.27~101-g0780600+dfsg-3+deb9u1 |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27~101-g0780600+dfsg-3 | 2.1.27~101-g0780600+dfsg-3+deb9u2 |
| libsasl2-modules-db         |    CVE-2019-19906   |   HIGH  |  2.1.27~101-g0780600+dfsg-3 | 2.1.27~101-g0780600+dfsg-3+deb9u1 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27~101-g0780600+dfsg-3 | 2.1.27~101-g0780600+dfsg-3+deb9u2 |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.6-2 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.6-2 |  |
| libsmartcols1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| libsmartcols1         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
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
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u6 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2022-2274   |   CRITICAL  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2018-0732   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| libssl1.1         |    CVE-2019-1543   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0k-1~deb9u1 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u4 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2022-3358   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2022-3602   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2022-3786   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2022-3996   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2018-0734   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| libssl1.1         |    CVE-2018-0735   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| libssl1.1         |    CVE-2018-0737   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| libssl1.1         |    CVE-2018-0739   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| libssl1.1         |    CVE-2018-5407   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| libssl1.1         |    CVE-2019-1547   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u1 |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u5 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u2 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u3 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.0f-3+deb9u1 |  |
| libssl1.1         |    CVE-2017-3738   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| libssl1.1         |    CVE-2018-0733   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| libssl1.1         |    CVE-2019-1563   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u1 |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  6.3.0-18 |  |
| libstdc++6         |    DSA-4121-1   |   UNKNOWN  |  6.3.0-18 | 6.3.0-18+deb9u1 |
| libsystemd0         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2017-15908   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u2 |
| libsystemd0         |    CVE-2018-15686   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u10 |
| libsystemd0         |    CVE-2018-15688   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u6 |
| libsystemd0         |    CVE-2018-16864   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u7 |
| libsystemd0         |    CVE-2018-16865   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u7 |
| libsystemd0         |    CVE-2019-3842   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u11 |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u14 |
| libsystemd0         |    CVE-2018-1049   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u10 |
| libsystemd0         |    CVE-2019-6454   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u9 |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u13 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2017-18078   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2018-16866   |   LOW  |  232-25+deb9u1 | 232-25+deb9u7 |
| libsystemd0         |    CVE-2018-16888   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2018-6954   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2019-3815   |   LOW  |  232-25+deb9u1 | 232-25+deb9u8 |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    CVE-2020-13776   |   LOW  |  232-25+deb9u1 |  |
| libsystemd0         |    DSA-4367-2   |   UNKNOWN  |  232-25+deb9u1 | 232-25+deb9u8 |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.10-1.1 |  |
| libtasn1-6         |    CVE-2017-10790   |   HIGH  |  4.10-1.1 | 4.10-1.1+deb9u1 |
| libtasn1-6         |    CVE-2018-6003   |   HIGH  |  4.10-1.1 | 4.10-1.1+deb9u1 |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.10-1.1 |  |
| libtinfo5         |    CVE-2017-16879   |   HIGH  |  6.0+20161126-1+deb9u1 | 6.0+20161126-1+deb9u2 |
| libtinfo5         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u1 |  |
| libtinfo5         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libtinfo5         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libtinfo5         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libtinfo5         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| libudev1         |    CVE-2022-2526   |   CRITICAL  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2017-15908   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u2 |
| libudev1         |    CVE-2018-15686   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u10 |
| libudev1         |    CVE-2018-15688   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u6 |
| libudev1         |    CVE-2018-16864   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u7 |
| libudev1         |    CVE-2018-16865   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u7 |
| libudev1         |    CVE-2019-3842   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u11 |
| libudev1         |    CVE-2019-3843   |   HIGH  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2020-1712   |   HIGH  |  232-25+deb9u1 | 232-25+deb9u14 |
| libudev1         |    CVE-2018-1049   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u10 |
| libudev1         |    CVE-2019-6454   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u9 |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  232-25+deb9u1 | 232-25+deb9u13 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2022-45873   |   MEDIUM  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2017-1000082   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2017-18078   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2018-16866   |   LOW  |  232-25+deb9u1 | 232-25+deb9u7 |
| libudev1         |    CVE-2018-16888   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2018-6954   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2019-3815   |   LOW  |  232-25+deb9u1 | 232-25+deb9u8 |
| libudev1         |    CVE-2020-13529   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    CVE-2020-13776   |   LOW  |  232-25+deb9u1 |  |
| libudev1         |    DSA-4367-2   |   UNKNOWN  |  232-25+deb9u1 | 232-25+deb9u8 |
| libuuid1         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| libuuid1         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| login         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| mount         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| mount         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| mount         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| multiarch-support         |    CVE-2017-18269   |   CRITICAL  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2018-6485   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2018-6551   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-9169   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2021-33574   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2021-35942   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2022-23218   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2022-23219   |   CRITICAL  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2009-5155   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2017-1000408   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2017-1000409   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2017-16997   |   HIGH  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2018-1000001   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2020-1751   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2020-1752   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2021-3326   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2021-3999   |   HIGH  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2016-10739   |   MEDIUM  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2017-12132   |   MEDIUM  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2017-12133   |   MEDIUM  |  2.24-11+deb9u1 | 2.24-11+deb9u2 |
| multiarch-support         |    CVE-2019-25013   |   MEDIUM  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2020-10029   |   MEDIUM  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2020-27618   |   MEDIUM  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2010-4756   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2015-8985   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2016-10228   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2017-15670   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2017-15671   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2017-15804   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2018-11236   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2018-11237   |   LOW  |  2.24-11+deb9u1 | 2.24-11+deb9u4 |
| multiarch-support         |    CVE-2018-20796   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-1010022   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-1010023   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-1010024   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-1010025   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-19126   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-6488   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-7309   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2019-9192   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2020-6096   |   LOW  |  2.24-11+deb9u1 |  |
| multiarch-support         |    CVE-2021-27645   |   LOW  |  2.24-11+deb9u1 |  |
| ncurses-base         |    CVE-2017-16879   |   HIGH  |  6.0+20161126-1+deb9u1 | 6.0+20161126-1+deb9u2 |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u1 |  |
| ncurses-base         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-base         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-base         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-bin         |    CVE-2017-16879   |   HIGH  |  6.0+20161126-1+deb9u1 | 6.0+20161126-1+deb9u2 |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.0+20161126-1+deb9u1 |  |
| ncurses-bin         |    CVE-2018-19211   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-bin         |    CVE-2019-17594   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-bin         |    CVE-2019-17595   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.0+20161126-1+deb9u1 |  |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u6 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2022-2274   |   CRITICAL  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2018-0732   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| openssl         |    CVE-2019-1543   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0k-1~deb9u1 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u3 |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u4 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2022-3358   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2022-3602   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2022-3786   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2022-3996   |   HIGH  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2018-0734   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| openssl         |    CVE-2018-0735   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| openssl         |    CVE-2018-0737   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| openssl         |    CVE-2018-0739   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| openssl         |    CVE-2018-5407   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0j-1~deb9u1 |
| openssl         |    CVE-2019-1547   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u1 |
| openssl         |    CVE-2019-1551   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u5 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u2 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u3 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.0f-3+deb9u1 |  |
| openssl         |    CVE-2017-3738   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| openssl         |    CVE-2018-0733   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0f-3+deb9u2 |
| openssl         |    CVE-2019-1563   |   LOW  |  1.1.0f-3+deb9u1 | 1.1.0l-1~deb9u1 |
| passwd         |    CVE-2017-12424   |   CRITICAL  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2017-20002   |   HIGH  |  1:4.4-4.1 | 1:4.4-4.1+deb9u1 |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.4-4.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.4-4.1 |  |
| perl-base         |    CVE-2018-18311   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u5 |
| perl-base         |    CVE-2018-18312   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u5 |
| perl-base         |    CVE-2018-18313   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u5 |
| perl-base         |    CVE-2018-18314   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u5 |
| perl-base         |    CVE-2018-6797   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u3 |
| perl-base         |    CVE-2018-6913   |   CRITICAL  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u3 |
| perl-base         |    CVE-2018-12015   |   HIGH  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u4 |
| perl-base         |    CVE-2018-6798   |   HIGH  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u3 |
| perl-base         |    CVE-2020-10543   |   HIGH  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-10878   |   HIGH  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-12723   |   HIGH  |  5.24.1-3+deb9u2 | 5.24.1-3+deb9u7 |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.24.1-3+deb9u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.24.1-3+deb9u2 |  |
| sensible-utils         |    CVE-2017-17512   |   HIGH  |  0.0.9 | 0.0.9+deb9u1 |
| tar         |    CVE-2018-20482   |   MEDIUM  |  1.29b-1.1 | 1.29b-1.1+deb9u1 |
| tar         |    CVE-2005-2541   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.29b-1.1 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.29b-1.1 |  |
| tzdata         |    DLA-2424-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2020d-0+deb9u1 |
| tzdata         |    DLA-2509-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2020e-0+deb9u1 |
| tzdata         |    DLA-2542-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2021a-0+deb9u1 |
| tzdata         |    DLA-2797-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2021a-0+deb9u2 |
| tzdata         |    DLA-2963-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2021a-0+deb9u3 |
| tzdata         |    DLA-3051-1   |   UNKNOWN  |  2017c-0+deb9u1 | 2021a-0+deb9u4 |
| util-linux         |    CVE-2016-2779   |   HIGH  |  2.29.2-1 |  |
| util-linux         |    CVE-2018-7738   |   HIGH  |  2.29.2-1 | 2.29.2-1+deb9u1 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.29.2-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.29.2-1 |  |
| wget         |    CVE-2019-5953   |   CRITICAL  |  1.18-5+deb9u1 | 1.18-5+deb9u3 |
| wget         |    CVE-2018-0494   |   MEDIUM  |  1.18-5+deb9u1 | 1.18-5+deb9u2 |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.18-5+deb9u1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.8.dfsg-5 |  |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.8.dfsg-5 | 1:1.2.8.dfsg-5+deb9u1 |

