# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/inventree:0.8.4@sha256:57888f289eb9b2f03c141842eec5ae3946df1176ddcde4810c70307df8429edd
          tccr.io/truecharts/inventree:0.8.4@sha256:57888f289eb9b2f03c141842eec5ae3946df1176ddcde4810c70307df8429edd
        - tccr.io/truecharts/nginx:1.23.3@sha256:89b30f1b0eecd4bd51a8b449503846c63cd85792bd3a14a7666a43c4dd8c0c82
          tccr.io/truecharts/inventree:0.8.4@sha256:57888f289eb9b2f03c141842eec5ae3946df1176ddcde4810c70307df8429edd
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/inventree:0.8.4@sha256:57888f289eb9b2f03c141842eec5ae3946df1176ddcde4810c70307df8429edd**

#### Container: tccr.io/truecharts/inventree:0.8.4@sha256:57888f289eb9b2f03c141842eec5ae3946df1176ddcde4810c70307df8429edd (debian 11.5)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| binutils         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| binutils         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| binutils-common         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| git         |    CVE-2022-24765   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-29187   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-39260   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-39253   |   MEDIUM  |  1:2.30.2-1 |  |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.30.2-1 |  |
| git         |    CVE-2022-24975   |   LOW  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-24765   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-29187   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-39260   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-39253   |   MEDIUM  |  1:2.30.2-1 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-24975   |   LOW  |  1:2.30.2-1 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libbinutils         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| libbinutils         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libctf-nobfd0         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| libctf-nobfd0         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2017-13716   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-12934   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-18483   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-20623   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-20673   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-20712   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2018-9996   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2019-1010204   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2020-35448   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-20197   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-20284   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-3487   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-3530   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-3549   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-3826   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-45078   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2021-46195   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2022-38533   |   LOW  |  2.35.2-2 |  |
| libctf0         |    CVE-2022-4285   |   LOW  |  2.35.2-2 |  |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl3-gnutls         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.10-2+deb11u4 | 2.2.10-2+deb11u5 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u4 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgif7         |    CVE-2020-23922   |   LOW  |  5.1.9-2 |  |
| libgif7         |    CVE-2021-40633   |   LOW  |  5.1.9-2 |  |
| libgif7         |    CVE-2022-28506   |   LOW  |  5.1.9-2 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.7.4-1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg-dev         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libjpeg62-turbo-dev         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.5.0-3+deb11u1 | 1.5.0-3+deb11u2 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libmariadb-dev         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| libmariadb-dev         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| libmariadb-dev-compat         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb-dev-compat         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| libmariadb3         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmariadb3         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libnss3         |    CVE-2022-3479   |   HIGH  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11695   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11696   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11697   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11698   |   LOW  |  2:3.61-1+deb11u2 |  |
| libopenjp2-7         |    CVE-2021-3575   |   HIGH  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2021-29338   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2022-1122   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10505   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10506   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9113   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9114   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9115   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9116   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9117   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9580   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9581   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2017-17479   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16375   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16376   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-20846   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libperl5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| libperl5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| libpixman-1-0         |    CVE-2022-44638   |   HIGH  |  0.40.0-1 | 0.40.0-1.1~deb11u1 |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libpoppler102         |    CVE-2013-4472   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2017-2814   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2017-2818   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2017-2820   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2017-9083   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2019-9543   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2019-9545   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libpoppler102         |    CVE-2022-24106   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl-dev         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl-dev         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl-dev         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpdemux2         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpmux3         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.10+dfsg-6.7+deb11u2 | 2.9.10+dfsg-6.7+deb11u3 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.10+dfsg-6.7+deb11u2 | 2.9.10+dfsg-6.7+deb11u3 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u2 |  |
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-39686   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-4204   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-0500   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3623   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-4139   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-24504   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2021-4023   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-4149   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3114   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3435   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-38457   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-40133   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  5.10.149-2 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-2196   |   UNKNOWN  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-4379   |   UNKNOWN  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  5.10.149-2 |  |
| linux-libc-dev         |    CVE-2022-47946   |   UNKNOWN  |  5.10.149-2 | 5.10.158-1 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mariadb-client         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| mariadb-client         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| mariadb-client-10.5         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-10.5         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| mariadb-client-core-10.5         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-client-core-10.5         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2021-46669   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27376   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27377   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27378   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27379   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27380   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27381   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27382   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27383   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27384   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27385   |   HIGH  |  1:10.5.15-0+deb11u1 |  |
| mariadb-common         |    CVE-2022-27386   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27387   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27444   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27445   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27446   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27447   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27448   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27449   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27451   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27452   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27455   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27456   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27457   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-27458   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32081   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32082   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32083   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32084   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32085   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32086   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32087   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32088   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32089   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-32091   |   HIGH  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mariadb-common         |    CVE-2022-38791   |   MEDIUM  |  1:10.5.15-0+deb11u1 | 1:10.5.18-0+deb11u1 |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| poppler-utils         |    CVE-2013-4472   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2017-2814   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2017-2818   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2017-2820   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2017-9083   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2019-9543   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2019-9545   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| poppler-utils         |    CVE-2022-24106   |   LOW  |  20.09.0-3.1+deb11u1 |  |
| sqlite3         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| sqlite3         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| sqlite3         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| webp         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| jquery-ui         |    CVE-2022-31160   |   MEDIUM  |  1.13.0 | 1.13.2 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Django         |    CVE-2022-41323   |   HIGH  |  3.2.15 | 3.2.16, 4.0.8, 4.1.2 |
| Pillow         |    CVE-2022-45199   |   HIGH  |  9.2.0 | 9.3.0 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2022.6.15 | 2022.12.07 |
| oauthlib         |    CVE-2022-36087   |   MEDIUM  |  3.2.0 | 3.2.1 |

**Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68**

#### Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68 (debian 11.6)
    

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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.1.0 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.1.0 | v1.1.2 |

**Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276**

#### Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276 (debian 11.6)
    

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
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.1.0 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.1.0 | v1.1.2 |

**Container: -**


**Container: tccr.io/truecharts/nginx:1.23.3@sha256:89b30f1b0eecd4bd51a8b449503846c63cd85792bd3a14a7666a43c4dd8c0c82**

#### Container: tccr.io/truecharts/nginx:1.23.3@sha256:89b30f1b0eecd4bd51a8b449503846c63cd85792bd3a14a7666a43c4dd8c0c82 (debian 11.6)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
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
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgd3         |    CVE-2021-38115   |   MEDIUM  |  2.3.0-2 |  |
| libgd3         |    CVE-2021-40812   |   MEDIUM  |  2.3.0-2 |  |
| libgd3         |    CVE-2021-40145   |   LOW  |  2.3.0-2 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
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
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.34-4+deb11u1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| nginx         |    CVE-2020-36309   |   MEDIUM  |  1.23.3-1~bullseye |  |
| nginx         |    CVE-2009-4487   |   LOW  |  1.23.3-1~bullseye |  |
| nginx         |    CVE-2013-0337   |   LOW  |  1.23.3-1~bullseye |  |
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

