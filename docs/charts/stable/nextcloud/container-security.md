# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          'tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f'
          tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550
          tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550
          h2non/imaginary:1.2.4@sha256:7facb4221047a5e79b9e902f380247f4e5bf4376400d0badbeb738d3e1c2f654
        - tccr.io/truecharts/nginx-unprivileged:1.23.3@sha256:7b2ac308e55c7fcb8cb6b0be9b0c0a517f25f89968d4d89a98bc82539a404d0d
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78
              'tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550'
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: 'tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550'**


**Container: 'tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f'**


**Container: h2non/imaginary:1.2.4@sha256:7facb4221047a5e79b9e902f380247f4e5bf4376400d0badbeb738d3e1c2f654**

#### Container: h2non/imaginary:1.2.4@sha256:7facb4221047a5e79b9e902f380247f4e5bf4376400d0badbeb738d3e1c2f654 (debian 10.4)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2020-27350   |   MEDIUM  |  1.8.2.1 | 1.8.2.2 |
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.1 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.9-3 | 1.9-3+deb10u1 |
| imagemagick-6-common         |    CVE-2020-19667   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27752   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27766   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-29599   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20309   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20312   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20313   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-1114   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-28463   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-32545   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-32546   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-32547   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25665   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25674   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25676   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27750   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27756   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27760   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27762   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27770   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20176   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20224   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-3596   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2005-0406   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2008-3134   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2016-8678   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2017-11754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2017-11755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2017-7275   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2018-15607   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2019-13310   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2019-16709   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25666   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-25675   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27560   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27751   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27753   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27757   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27758   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27759   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27761   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27763   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27764   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27765   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27767   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27768   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27769   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27771   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27772   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27773   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27774   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27775   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2020-27776   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-20311   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-3574   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| imagemagick-6-common         |    CVE-2021-39212   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libapt-pkg5.0         |    CVE-2020-27350   |   MEDIUM  |  1.8.2.1 | 1.8.2.2 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.1 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libbsd0         |    CVE-2019-20367   |   CRITICAL  |  0.9.1-2 | 0.9.1-2+deb10u1 |
| libbz2-1.0         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libcairo2         |    CVE-2020-35492   |   HIGH  |  1.16.0-4 | 1.16.0-4+deb10u1 |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-4 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-4 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-4 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-4 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcroco3         |    CVE-2017-8834   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2017-8871   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2020-12825   |   LOW  |  0.6.12-3 |  |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2020-8169   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2020-8177   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2020-8231   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2020-8285   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2020-8286   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2021-22876   |   MEDIUM  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2020-8284   |   LOW  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2021-22890   |   LOW  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u2 |
| libcurl3-gnutls         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u1 |  |
| libcurl3-gnutls         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u1 | 7.64.0-4+deb10u3 |
| libcurl3-gnutls         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u1 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libde265-0         |    CVE-2020-21598   |   HIGH  |  1.0.3-1 |  |
| libde265-0         |    CVE-2021-36409   |   HIGH  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2020-21594   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21595   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21596   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21597   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21599   |   MEDIUM  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2020-21600   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21601   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21602   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21603   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21604   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21605   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2020-21606   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2021-35452   |   MEDIUM  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2021-36408   |   MEDIUM  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2021-36410   |   MEDIUM  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2021-36411   |   MEDIUM  |  1.0.3-1 | 1.0.3-1+deb10u1 |
| libde265-0         |    CVE-2022-43235   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43236   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43237   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43238   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43239   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43240   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43241   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43242   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43243   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43244   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43245   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43248   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43249   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43250   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43252   |   MEDIUM  |  1.0.3-1 |  |
| libde265-0         |    CVE-2022-43253   |   MEDIUM  |  1.0.3-1 |  |
| libexif12         |    CVE-2020-0452   |   CRITICAL  |  0.6.21-5.1+deb10u4 | 0.6.21-5.1+deb10u5 |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u5 |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25314   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u6 |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u1 |  |
| libexpat1         |    DSA-5085-2   |   UNKNOWN  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u4 |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.9.1-3+deb10u1 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.9.1-3+deb10u1 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.9.1-3+deb10u1 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2020-15999   |   MEDIUM  |  2.9.1-3+deb10u1 | 2.9.1-3+deb10u2 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.9.1-3+deb10u1 |  |
| libfribidi0         |    CVE-2022-25308   |   HIGH  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25309   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25310   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.8.4-5 | 1.8.4-5+deb10u1 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5 |  |
| libgfortran5         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgfortran5         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgif7         |    CVE-2018-11490   |   HIGH  |  5.1.4-3 | 5.1.4-3+deb10u1 |
| libgif7         |    CVE-2019-15133   |   MEDIUM  |  5.1.4-3 | 5.1.4-3+deb10u1 |
| libgif7         |    CVE-2020-23922   |   LOW  |  5.1.4-3 |  |
| libgif7         |    CVE-2021-40633   |   LOW  |  5.1.4-3 |  |
| libgif7         |    CVE-2022-28506   |   LOW  |  5.1.4-3 |  |
| libglib2.0-0         |    CVE-2021-27218   |   HIGH  |  2.58.3-2+deb10u2 | 2.58.3-2+deb10u3 |
| libglib2.0-0         |    CVE-2021-27219   |   HIGH  |  2.58.3-2+deb10u2 | 2.58.3-2+deb10u3 |
| libglib2.0-0         |    CVE-2021-3800   |   HIGH  |  2.58.3-2+deb10u2 | 2.58.3-2+deb10u4 |
| libglib2.0-0         |    CVE-2021-28153   |   MEDIUM  |  2.58.3-2+deb10u2 | 2.58.3-2+deb10u3 |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u2 |  |
| libglib2.0-0         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u2 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-4 | 2:6.1.2+dfsg-4+deb10u1 |
| libgnutls30         |    CVE-2021-20231   |   CRITICAL  |  3.6.7-4+deb10u4 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2021-20232   |   CRITICAL  |  3.6.7-4+deb10u4 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2020-24659   |   HIGH  |  3.6.7-4+deb10u4 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u4 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u4 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u4 |  |
| libgomp1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgomp1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgssapi-krb5-2         |    CVE-2020-28196   |   HIGH  |  1.17-3 | 1.17-3+deb10u1 |
| libgssapi-krb5-2         |    CVE-2021-36222   |   HIGH  |  1.17-3 | 1.17-3+deb10u2 |
| libgssapi-krb5-2         |    CVE-2021-37750   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u3 |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.3.1-1 |  |
| libhdf5-103         |    CVE-2017-17507   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-14031   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-14033   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-14034   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-14035   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-14460   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-15671   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-16438   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17233   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17234   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17237   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17432   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17433   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17434   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17435   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17436   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17437   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17438   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2018-17439   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2019-8397   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2019-9151   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2019-9152   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2020-10809   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2020-10810   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2020-10811   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2020-10812   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-45829   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-45830   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-45832   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-45833   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-46242   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-46243   |   LOW  |  1.10.4+repack-10 |  |
| libhdf5-103         |    CVE-2021-46244   |   LOW  |  1.10.4+repack-10 |  |
| libheif1         |    CVE-2020-19498   |   HIGH  |  1.3.2-2~deb10u1 |  |
| libheif1         |    CVE-2020-19499   |   HIGH  |  1.3.2-2~deb10u1 |  |
| libheif1         |    CVE-2020-23109   |   HIGH  |  1.3.2-2~deb10u1 |  |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libicu63         |    CVE-2020-21913   |   MEDIUM  |  63.1-6+deb10u1 | 63.1-6+deb10u2 |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2020-13790   |   HIGH  |  1:1.5.2-2 | 1:1.5.2-2+deb10u1 |
| libjpeg62-turbo         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.2-2 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.2-2 |  |
| libjpeg62-turbo         |    CVE-2017-15232   |   LOW  |  1:1.5.2-2 |  |
| libjpeg62-turbo         |    CVE-2018-1152   |   LOW  |  1:1.5.2-2 | 1:1.5.2-2+deb10u1 |
| libjpeg62-turbo         |    CVE-2018-11813   |   LOW  |  1:1.5.2-2 |  |
| libjpeg62-turbo         |    CVE-2018-14498   |   LOW  |  1:1.5.2-2 | 1:1.5.2-2+deb10u1 |
| libjpeg62-turbo         |    CVE-2019-2201   |   LOW  |  1:1.5.2-2 | 1:1.5.2-2+deb10u1 |
| libjpeg62-turbo         |    CVE-2020-17541   |   LOW  |  1:1.5.2-2 |  |
| libk5crypto3         |    CVE-2020-28196   |   HIGH  |  1.17-3 | 1.17-3+deb10u1 |
| libk5crypto3         |    CVE-2021-36222   |   HIGH  |  1.17-3 | 1.17-3+deb10u2 |
| libk5crypto3         |    CVE-2021-37750   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u3 |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3 |  |
| libkrb5-3         |    CVE-2020-28196   |   HIGH  |  1.17-3 | 1.17-3+deb10u1 |
| libkrb5-3         |    CVE-2021-36222   |   HIGH  |  1.17-3 | 1.17-3+deb10u2 |
| libkrb5-3         |    CVE-2021-37750   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u3 |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3 |  |
| libkrb5support0         |    CVE-2020-28196   |   HIGH  |  1.17-3 | 1.17-3+deb10u1 |
| libkrb5support0         |    CVE-2021-36222   |   HIGH  |  1.17-3 | 1.17-3+deb10u2 |
| libkrb5support0         |    CVE-2021-37750   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u3 |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3 |  |
| libldap-2.4-2         |    CVE-2022-29155   |   CRITICAL  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u7 |
| libldap-2.4-2         |    CVE-2020-25692   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u3 |
| libldap-2.4-2         |    CVE-2020-25709   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u4 |
| libldap-2.4-2         |    CVE-2020-25710   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u4 |
| libldap-2.4-2         |    CVE-2020-36221   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36222   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36223   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36224   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36225   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36226   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36227   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36228   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36229   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2020-36230   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-2.4-2         |    CVE-2021-27212   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u6 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-common         |    CVE-2022-29155   |   CRITICAL  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u7 |
| libldap-common         |    CVE-2020-25692   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u3 |
| libldap-common         |    CVE-2020-25709   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u4 |
| libldap-common         |    CVE-2020-25710   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u4 |
| libldap-common         |    CVE-2020-36221   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36222   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36223   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36224   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36225   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36226   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36227   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36228   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36229   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2020-36230   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u5 |
| libldap-common         |    CVE-2021-27212   |   HIGH  |  2.4.47+dfsg-3+deb10u2 | 2.4.47+dfsg-3+deb10u6 |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u2 |  |
| liblz4-1         |    CVE-2021-3520   |   CRITICAL  |  1.8.3-1 | 1.8.3-1+deb10u1 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.4-1 | 5.2.4-1+deb10u1 |
| libmagickcore-6.q16-6         |    CVE-2020-19667   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27752   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27766   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-29599   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25665   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25674   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25676   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27750   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27756   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27760   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27762   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27770   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20176   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20224   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3596   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2019-13310   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2019-16709   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25666   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25675   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27560   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27751   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27753   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27757   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27758   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27759   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27761   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27763   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27764   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27765   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27767   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27768   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27769   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27771   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27772   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27773   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27774   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27775   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-27776   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickcore-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-19667   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27752   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27766   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-29599   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25665   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25674   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25676   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27750   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27756   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27760   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27762   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27770   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20176   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20224   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3596   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2019-13310   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2019-16709   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25666   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25675   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27560   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27751   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27753   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27754   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27755   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27757   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27758   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27759   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27761   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27763   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27764   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27765   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27767   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27768   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27769   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27771   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27772   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27773   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27774   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27775   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2020-27776   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmagickwand-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.10.23+dfsg-2.1+deb10u1 |  |
| libmatio4         |    CVE-2019-13107   |   CRITICAL  |  1.5.13-3 |  |
| libmatio4         |    CVE-2019-17533   |   HIGH  |  1.5.13-3 |  |
| libmatio4         |    CVE-2020-19497   |   HIGH  |  1.5.13-3 |  |
| libmatio4         |    CVE-2019-20017   |   MEDIUM  |  1.5.13-3 |  |
| libmatio4         |    CVE-2019-20018   |   MEDIUM  |  1.5.13-3 |  |
| libmatio4         |    CVE-2019-20020   |   MEDIUM  |  1.5.13-3 |  |
| libmatio4         |    CVE-2022-1515   |   MEDIUM  |  1.5.13-3 |  |
| libmatio4         |    CVE-2019-20019   |   LOW  |  1.5.13-3 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libnghttp2-14         |    CVE-2020-11080   |   HIGH  |  1.36.0-2+deb10u1 |  |
| libnss3         |    CVE-2020-12403   |   CRITICAL  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2021-43527   |   CRITICAL  |  2:3.42.1-1+deb10u3 | 2:3.42.1-1+deb10u4 |
| libnss3         |    CVE-2020-25648   |   HIGH  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2020-12400   |   MEDIUM  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2020-12401   |   MEDIUM  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2020-6829   |   MEDIUM  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2022-22747   |   MEDIUM  |  2:3.42.1-1+deb10u3 | 2:3.42.1-1+deb10u5 |
| libnss3         |    CVE-2017-11695   |   LOW  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2017-11696   |   LOW  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2017-11697   |   LOW  |  2:3.42.1-1+deb10u3 |  |
| libnss3         |    CVE-2017-11698   |   LOW  |  2:3.42.1-1+deb10u3 |  |
| libopenexr23         |    CVE-2017-9111   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2017-9113   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2017-9115   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2018-18444   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2021-20298   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-20299   |   HIGH  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2020-11758   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11759   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11760   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11761   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11762   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11763   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11764   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-11765   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-15305   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-15306   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u1 |
| libopenexr23         |    CVE-2020-16587   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2020-16588   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2020-16589   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-20296   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-20300   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-20302   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-20303   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-23215   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-26260   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3474   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3475   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3476   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3477   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3478   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3479   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3598   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3605   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3933   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-3941   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2021-45942   |   MEDIUM  |  2.2.1-4.1 | 2.2.1-4.1+deb10u2 |
| libopenexr23         |    CVE-2017-14988   |   LOW  |  2.2.1-4.1 |  |
| libopenexr23         |    CVE-2018-18443   |   LOW  |  2.2.1-4.1 |  |
| libopenexr23         |    CVE-2021-20304   |   LOW  |  2.2.1-4.1 |  |
| libopenexr23         |    CVE-2021-26945   |   LOW  |  2.2.1-4.1 |  |
| libopenjp2-7         |    CVE-2020-27814   |   HIGH  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27823   |   HIGH  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-6851   |   HIGH  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-8112   |   HIGH  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2021-3575   |   HIGH  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2019-12973   |   MEDIUM  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2020-15389   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27824   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27841   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27842   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27843   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2020-27845   |   MEDIUM  |  2.3.0-2+deb10u1 | 2.3.0-2+deb10u2 |
| libopenjp2-7         |    CVE-2021-29338   |   MEDIUM  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2022-1122   |   MEDIUM  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-10505   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-10506   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9113   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9114   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9115   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9116   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9117   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9580   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2016-9581   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2017-17479   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-16375   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-16376   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-20845   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-20846   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-5727   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2018-7648   |   LOW  |  2.3.0-2+deb10u1 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.3.0-2+deb10u1 |  |
| libp11-kit0         |    CVE-2020-29361   |   HIGH  |  0.23.15-2 | 0.23.15-2+deb10u1 |
| libp11-kit0         |    CVE-2020-29363   |   HIGH  |  0.23.15-2 | 0.23.15-2+deb10u1 |
| libp11-kit0         |    CVE-2020-29362   |   MEDIUM  |  0.23.15-2 | 0.23.15-2+deb10u1 |
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
| libpoppler-glib8         |    CVE-2019-14494   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2020-27778   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2022-38784   |   HIGH  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2018-18897   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2018-19058   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2018-20650   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2019-9903   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2019-9959   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2022-27337   |   MEDIUM  |  0.71.0-5 | 0.71.0-5+deb10u1 |
| libpoppler-glib8         |    CVE-2013-4472   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2017-2814   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2017-2818   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2017-2820   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2017-9083   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2018-19059   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2018-19060   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2019-10871   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2019-11026   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2019-9543   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2019-9545   |   LOW  |  0.71.0-5 |  |
| libpoppler-glib8         |    CVE-2022-24106   |   LOW  |  0.71.0-5 |  |
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
| libquadmath0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libquadmath0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| librsvg2-2         |    CVE-2019-20446   |   MEDIUM  |  2.44.10-2.1 | 2.44.10-2.1+deb10u1 |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libseccomp2         |    CVE-2019-9893   |   LOW  |  2.3.3-4 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.8-1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libsqlite3-0         |    CVE-2020-35527   |   CRITICAL  |  3.27.2-3 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19923   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19925   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19959   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-20218   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13630   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-35525   |   HIGH  |  3.27.2-3 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-16168   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-13434   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13435   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-13632   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2020-15358   |   MEDIUM  |  3.27.2-3 | 3.27.2-3+deb10u1 |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libssh2-1         |    CVE-2019-13115   |   HIGH  |  1.8.0-2.1 |  |
| libssh2-1         |    CVE-2019-17498   |   LOW  |  1.8.0-2.1 |  |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u3 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u4 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u5 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u6 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u3 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u3 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u4 | 241-7~deb10u8 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u4 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u4 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2020-35523   |   HIGH  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u2 |
| libtiff5         |    CVE-2020-35524   |   HIGH  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u2 |
| libtiff5         |    CVE-2022-0891   |   HIGH  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2020-19143   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u3 |
| libtiff5         |    CVE-2022-0561   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0562   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0865   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0907   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0908   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0909   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-0924   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-22844   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 | 4.1.0+git191117-2~deb10u4 |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2020-35521   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2020-35522   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.1.0+git191117-2~deb10u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u4 | 241-7~deb10u8 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u4 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u4 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libwebp6         |    CVE-2018-25009   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2018-25010   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2018-25011   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2018-25012   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2018-25013   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2018-25014   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2020-36328   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2020-36329   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2020-36330   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2020-36331   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2020-36332   |   HIGH  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2 |  |
| libwebpdemux2         |    CVE-2018-25009   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2018-25010   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2018-25011   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2018-25012   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2018-25013   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2018-25014   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2020-36328   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2020-36329   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2020-36330   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2020-36331   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2020-36332   |   HIGH  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpdemux2         |    CVE-2016-9085   |   LOW  |  0.6.1-2 |  |
| libwebpmux3         |    CVE-2018-25009   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2018-25010   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2018-25011   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2018-25012   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2018-25013   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2018-25014   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2020-36328   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2020-36329   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2020-36330   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2020-36331   |   CRITICAL  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2020-36332   |   HIGH  |  0.6.1-2 | 0.6.1-2+deb10u1 |
| libwebpmux3         |    CVE-2016-9085   |   LOW  |  0.6.1-2 |  |
| libx11-6         |    CVE-2021-31535   |   CRITICAL  |  2:1.6.7-1 | 2:1.6.7-1+deb10u2 |
| libx11-6         |    CVE-2020-14363   |   HIGH  |  2:1.6.7-1 | 2:1.6.7-1+deb10u1 |
| libx11-6         |    CVE-2020-14344   |   MEDIUM  |  2:1.6.7-1 | 2:1.6.7-1+deb10u1 |
| libx11-data         |    CVE-2021-31535   |   CRITICAL  |  2:1.6.7-1 | 2:1.6.7-1+deb10u2 |
| libx11-data         |    CVE-2020-14363   |   HIGH  |  2:1.6.7-1 | 2:1.6.7-1+deb10u1 |
| libx11-data         |    CVE-2020-14344   |   MEDIUM  |  2:1.6.7-1 | 2:1.6.7-1+deb10u1 |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7 |  |
| libxml2         |    CVE-2019-19956   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2019-20388   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2020-7595   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2021-3516   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u3 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7 |  |
| libxml2         |    CVE-2018-14567   |   MEDIUM  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3541   |   MEDIUM  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u4 |
| libxml2         |    CVE-2017-18258   |   LOW  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2018-14404   |   LOW  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u1 |
| libxml2         |    CVE-2020-24977   |   LOW  |  2.9.4+dfsg1-7 | 2.9.4+dfsg1-7+deb10u2 |
| libzstd1         |    CVE-2021-24031   |   MEDIUM  |  1.3.8+dfsg-3 | 1.3.8+dfsg-3+deb10u1 |
| libzstd1         |    CVE-2021-24032   |   MEDIUM  |  1.3.8+dfsg-3 | 1.3.8+dfsg-3+deb10u2 |
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
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-10543   |   HIGH  |  5.28.1-6 | 5.28.1-6+deb10u1 |
| perl-base         |    CVE-2020-10878   |   HIGH  |  5.28.1-6 | 5.28.1-6+deb10u1 |
| perl-base         |    CVE-2020-12723   |   HIGH  |  5.28.1-6 | 5.28.1-6+deb10u1 |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2020a-0+deb10u1 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2020a-0+deb10u1 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u1 |

**Container: tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550**

#### Container: tccr.io/truecharts/nextcloud-fpm:25.0.2@sha256:2d1f5a45360a597fcc633ab361cc089f64354143e38a8b7a772801bbafd6d550 (debian 11.6)
    

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
| busybox-static         |    CVE-2021-42377   |   CRITICAL  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-28831   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42378   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42379   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42380   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42381   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42382   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42383   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42384   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42385   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42386   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2022-28391   |   HIGH  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2018-1000500   |   LOW  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42373   |   LOW  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42374   |   LOW  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42375   |   LOW  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2021-42376   |   LOW  |  1:1.30.1-6 |  |
| busybox-static         |    CVE-2022-30065   |   LOW  |  1:1.30.1-6 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| ffmpeg         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| heif-gdk-pixbuf         |    CVE-2020-23109   |   HIGH  |  1.11.0-1 |  |
| imagemagick-6-common         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-6-common         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| imagemagick-common         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libaom0         |    CVE-2021-30473   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30474   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30475   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-0478   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36131   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36133   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36130   |   MEDIUM  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36135   |   MEDIUM  |  1.0.0.errata1-3 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libarchive13         |    CVE-2022-36227   |   CRITICAL  |  3.4.3-2+deb11u1 |  |
| libarchive13         |    CVE-2021-36976   |   MEDIUM  |  3.4.3-2+deb11u1 |  |
| libarchive13         |    CVE-2022-26280   |   MEDIUM  |  3.4.3-2+deb11u1 |  |
| libavahi-client3         |    CVE-2021-3468   |   MEDIUM  |  0.8-5+deb11u1 |  |
| libavahi-common-data         |    CVE-2021-3468   |   MEDIUM  |  0.8-5+deb11u1 |  |
| libavahi-common3         |    CVE-2021-3468   |   MEDIUM  |  0.8-5+deb11u1 |  |
| libavcodec58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
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
| libblas3         |    CVE-2021-4048   |   CRITICAL  |  3.9.0-3 |  |
| libblkid-dev         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
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
| libcaca0         |    CVE-2021-30498   |   HIGH  |  0.99.beta19-2.2 |  |
| libcaca0         |    CVE-2021-30499   |   HIGH  |  0.99.beta19-2.2 |  |
| libcaca0         |    CVE-2022-0856   |   LOW  |  0.99.beta19-2.2 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcairo-script-interpreter2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo-script-interpreter2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo-script-interpreter2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo-script-interpreter2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcairo2-dev         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo2-dev         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo2-dev         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo2-dev         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
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
| libcups2         |    CVE-2014-8166   |   LOW  |  2.3.3op2-3+deb11u2 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libde265-0         |    CVE-2022-1253   |   CRITICAL  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21598   |   HIGH  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36409   |   HIGH  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21594   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21595   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21596   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21597   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21599   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21600   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21601   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21602   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21603   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21604   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21605   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2020-21606   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-35452   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36408   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36410   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2021-36411   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43235   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43236   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43237   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43238   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43239   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43240   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43241   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43242   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43243   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43244   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43245   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43248   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43249   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43250   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43252   |   MEDIUM  |  1.0.8-1 |  |
| libde265-0         |    CVE-2022-43253   |   MEDIUM  |  1.0.8-1 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libexpat1-dev         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype-dev         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libfreetype6-dev         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-bin         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-data         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-dev         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-dev-bin         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.7.4-1 |  |
| libheif1         |    CVE-2020-23109   |   HIGH  |  1.11.0-1 |  |
| libjansson4         |    CVE-2020-36325   |   LOW  |  2.13.1-1.1 |  |
| libjbig-dev         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg-dev         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libjpeg62-turbo-dev         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| liblapack3         |    CVE-2021-4048   |   CRITICAL  |  3.9.0-3 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-arch-config         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6-headers         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-6.q16-dev         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickcore-dev         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20309   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20312   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20313   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1114   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-28463   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32545   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32546   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32547   |   HIGH  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20241   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20243   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20244   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20245   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20246   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-4219   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1115   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2022-3213   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2005-0406   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2008-3134   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2016-8678   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11754   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-11755   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2017-7275   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2018-15607   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20311   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3574   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmagickwand-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3 |  |
| libmount-dev         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libmysofa1         |    CVE-2021-3756   |   CRITICAL  |  1.2~dfsg0-1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libopenexr-dev         |    CVE-2017-14988   |   LOW  |  2.5.4-2+deb11u1 |  |
| libopenexr-dev         |    CVE-2021-26945   |   LOW  |  2.5.4-2+deb11u1 |  |
| libopenexr25         |    CVE-2017-14988   |   LOW  |  2.5.4-2+deb11u1 |  |
| libopenexr25         |    CVE-2021-26945   |   LOW  |  2.5.4-2+deb11u1 |  |
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
| libopenjp2-7-dev         |    CVE-2021-3575   |   HIGH  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2021-29338   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2022-1122   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-10505   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-10506   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9113   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9114   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9115   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9116   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9117   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9580   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2016-9581   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2017-17479   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2018-16375   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2018-16376   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2018-20846   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7-dev         |    CVE-2019-6988   |   LOW  |  2.4.0-3 |  |
| libpcre16-3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre16-3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre16-3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre16-3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre16-3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpcre3-dev         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3-dev         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3-dev         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3-dev         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3-dev         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpcre32-3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre32-3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre32-3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre32-3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre32-3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpcrecpp0v5         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcrecpp0v5         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcrecpp0v5         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcrecpp0v5         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcrecpp0v5         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libperl5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| libperl5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| libpng-dev         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng-dev         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libpostproc55         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libpython3.9         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| libpython3.9         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsepol1-dev         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1-dev         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1-dev         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1-dev         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libsmbclient         |    CVE-2022-32743   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-37966   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-37967   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-38023   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-45141   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2021-20316   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2021-3670   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2021-44141   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-1615   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-3437   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-42898   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2022-44640   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2020-27840   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2021-20251   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsmbclient         |    CVE-2021-20277   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libsndfile1         |    CVE-2021-4156   |   HIGH  |  1.0.31-2 |  |
| libspeex1         |    CVE-2020-23903   |   MEDIUM  |  1.2~rc1.2-1.1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libswresample3         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff-dev         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
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
| libtiffxx5         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiffxx5         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libvpx6         |    CVE-2017-0641   |   LOW  |  1.9.0-1 |  |
| libwavpack1         |    CVE-2022-2476   |   MEDIUM  |  5.4.0-1 |  |
| libwavpack1         |    CVE-2021-44269   |   LOW  |  5.4.0-1 |  |
| libwayland-client0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-cursor0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-egl1         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-server0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwbclient0         |    CVE-2022-32743   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-37966   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-37967   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-38023   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-45141   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2021-20316   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2021-3670   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2021-44141   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-1615   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-3437   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-42898   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2022-44640   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2020-27840   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2021-20251   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwbclient0         |    CVE-2021-20277   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpdemux2         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpmux3         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwmf-dev         |    CVE-2007-3476   |   LOW  |  0.2.8.4-17 |  |
| libwmf-dev         |    CVE-2007-3477   |   LOW  |  0.2.8.4-17 |  |
| libwmf-dev         |    CVE-2007-3996   |   LOW  |  0.2.8.4-17 |  |
| libwmf-dev         |    CVE-2009-3546   |   LOW  |  0.2.8.4-17 |  |
| libwmf0.2-7         |    CVE-2007-3476   |   LOW  |  0.2.8.4-17 |  |
| libwmf0.2-7         |    CVE-2007-3477   |   LOW  |  0.2.8.4-17 |  |
| libwmf0.2-7         |    CVE-2007-3996   |   LOW  |  0.2.8.4-17 |  |
| libwmf0.2-7         |    CVE-2009-3546   |   LOW  |  0.2.8.4-17 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| libxml2-dev         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-39686   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-4204   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-0500   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3623   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-24504   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-4023   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-4149   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3114   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-38457   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-40133   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-2196   |   UNKNOWN  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-4379   |   UNKNOWN  |  5.10.158-2 |  |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  5.10.158-2 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| m4         |    CVE-2008-1687   |   LOW  |  1.4.18-5 |  |
| m4         |    CVE-2008-1688   |   LOW  |  1.4.18-5 |  |
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
| patch         |    CVE-2010-4651   |   LOW  |  2.7.6-7 |  |
| patch         |    CVE-2018-6951   |   LOW  |  2.7.6-7 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-7 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-7 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| python3.9         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| python3.9         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| re2c         |    CVE-2018-21232   |   LOW  |  2.0.3-1 |  |
| re2c         |    CVE-2022-23901   |   LOW  |  2.0.3-1 |  |
| rsync         |    CVE-2022-29154   |   HIGH  |  3.2.3-4+deb11u1 |  |
| samba-common         |    CVE-2022-32743   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-37966   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-37967   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-38023   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-45141   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2021-20316   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2021-3670   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2021-44141   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-1615   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-3437   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-42898   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2022-44640   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2020-27840   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2021-20251   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-common         |    CVE-2021-20277   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-32743   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-37966   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-37967   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-38023   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-45141   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2021-20316   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2021-3670   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2021-44141   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-1615   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-3437   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-42898   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2022-44640   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2020-27840   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2021-20251   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| samba-libs         |    CVE-2021-20277   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-32743   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-37966   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-37967   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-38023   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-45141   |   HIGH  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2021-20316   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2021-3670   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2021-44141   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-1615   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-3437   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-42898   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2022-44640   |   MEDIUM  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2020-27840   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2021-20251   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| smbclient         |    CVE-2021-20277   |   LOW  |  2:4.13.13+dfsg-1~deb11u5 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| uuid-dev         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |

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

**Container: tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78**

#### Container: tccr.io/truecharts/redis:7.0.7@sha256:8b7cc9e93f1ac4d8b71164512013746b1348d5409ebb32dd79bbe586d76e5f78 (debian 11.6)
    

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

**Container: -**


**Container: tccr.io/truecharts/nginx-unprivileged:1.23.3@sha256:7b2ac308e55c7fcb8cb6b0be9b0c0a517f25f89968d4d89a98bc82539a404d0d**

#### Container: tccr.io/truecharts/nginx-unprivileged:1.23.3@sha256:7b2ac308e55c7fcb8cb6b0be9b0c0a517f25f89968d4d89a98bc82539a404d0d (debian 11.6)
    

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

