# Container Security

##### Detected Containers

          tccr.io/truecharts/truecommand:2.2@sha256:e1e97b3a75948def0616e8b6032c7bab50b805ff33f1383d0ad55cb88ef7dd88
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/truecommand:2.2@sha256:e1e97b3a75948def0616e8b6032c7bab50b805ff33f1383d0ad55cb88ef7dd88**

#### Container: tccr.io/truecharts/truecommand:2.2@sha256:e1e97b3a75948def0616e8b6032c7bab50b805ff33f1383d0ad55cb88ef7dd88 (debian 11.1)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apparmor         |    CVE-2016-1585   |   LOW  |  2.13.6-10 |  |
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2 |  |
| bind9-host         |    CVE-2022-2795   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-host         |    CVE-2022-2881   |   HIGH  |  1:9.16.27-1~deb11u1 |  |
| bind9-host         |    CVE-2022-3080   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-host         |    CVE-2022-38177   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-host         |    CVE-2022-38178   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-libs         |    CVE-2022-2795   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-libs         |    CVE-2022-2881   |   HIGH  |  1:9.16.27-1~deb11u1 |  |
| bind9-libs         |    CVE-2022-3080   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-libs         |    CVE-2022-38177   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bind9-libs         |    CVE-2022-38178   |   HIGH  |  1:9.16.27-1~deb11u1 | 1:9.16.33-1~deb11u1 |
| bsdutils         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| bsdutils         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| busybox         |    CVE-2021-42377   |   CRITICAL  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-28831   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42378   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42379   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42380   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42381   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42382   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42383   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42384   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42385   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42386   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2022-28391   |   HIGH  |  1:1.30.1-6 |  |
| busybox         |    CVE-2018-1000500   |   LOW  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42373   |   LOW  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42374   |   LOW  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42375   |   LOW  |  1:1.30.1-6 |  |
| busybox         |    CVE-2021-42376   |   LOW  |  1:1.30.1-6 |  |
| busybox         |    CVE-2022-30065   |   LOW  |  1:1.30.1-6 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| cpio         |    CVE-2021-38185   |   HIGH  |  2.13+dfsg-4 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u2 | 7.74.0-1.3+deb11u3 |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.20.9 | 1.20.10 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.10-4 | 1.10-4+deb11u1 |
| initramfs-tools         |    CVE-2008-4996   |   LOW  |  0.140 |  |
| initramfs-tools-core         |    CVE-2008-4996   |   LOW  |  0.140 |  |
| iptables         |    CVE-2012-2663   |   LOW  |  1.8.7-1 |  |
| krb5-user         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| krb5-user         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| krb5-user         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| ldap-utils         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| ldap-utils         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| ldap-utils         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| ldap-utils         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libblkid1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libblkid1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libbpf0         |    CVE-2022-3534   |   HIGH  |  0.3-2 |  |
| libbpf0         |    CVE-2021-45940   |   MEDIUM  |  0.3-2 |  |
| libbpf0         |    CVE-2021-45941   |   MEDIUM  |  0.3-2 |  |
| libbpf0         |    CVE-2022-3606   |   MEDIUM  |  0.3-2 |  |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u2 | 2.31-13+deb11u4 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2021-43396   |   LOW  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u2 | 2.31-13+deb11u4 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2021-43396   |   LOW  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u2 | 7.74.0-1.3+deb11u3 |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.10-2+deb11u3 | 2.2.10-2+deb11u4 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.10-2+deb11u3 | 2.2.10-2+deb11u5 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u3 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-data         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.2.1+dfsg-1 | 2:6.2.1+dfsg-1+deb11u1 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.7.1-5 | 3.7.1-5+deb11u2 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.7.1-5 | 3.7.1-5+deb11u1 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libgssrpc4         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libgssrpc4         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libgssrpc4         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.7.4-1 |  |
| libip4tc2         |    CVE-2012-2663   |   LOW  |  1.8.7-1 |  |
| libip6tc2         |    CVE-2012-2663   |   LOW  |  1.8.7-1 |  |
| libjansson4         |    CVE-2020-36325   |   LOW  |  2.13.1-1.1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkadm5clnt-mit12         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkadm5clnt-mit12         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkadm5clnt-mit12         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkadm5srv-mit12         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkadm5srv-mit12         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkadm5srv-mit12         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkdb5-10         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkdb5-10         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkdb5-10         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.5-2 | 5.2.5-2.1~deb11u1 |
| libmount1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libmount1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libnss3         |    CVE-2022-3479   |   HIGH  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11695   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11696   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11697   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3         |    CVE-2017-11698   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3-tools         |    CVE-2022-3479   |   HIGH  |  2:3.61-1+deb11u2 |  |
| libnss3-tools         |    CVE-2017-11695   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3-tools         |    CVE-2017-11696   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3-tools         |    CVE-2017-11697   |   LOW  |  2:3.61-1+deb11u2 |  |
| libnss3-tools         |    CVE-2017-11698   |   LOW  |  2:3.61-1+deb11u2 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpixman-1-0         |    CVE-2022-44638   |   HIGH  |  0.40.0-1 | 0.40.0-1.1~deb11u1 |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libprotobuf-c1         |    CVE-2022-33070   |   MEDIUM  |  1.3.3-1 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libsmartcols1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-1+deb11u1 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1k-1+deb11u1 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1k-1+deb11u1 |  |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  247.3-6 | 247.3-7 |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-6 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-6 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-6 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-6 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libtirpc-common         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libtirpc3         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7 |  |
| libuuid1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libuuid1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.10+dfsg-6.7+deb11u2 | 2.9.10+dfsg-6.7+deb11u3 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.10+dfsg-6.7+deb11u2 | 2.9.10+dfsg-6.7+deb11u3 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u2 |  |
| libxtables12         |    CVE-2012-2663   |   LOW  |  1.8.7-1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mount         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| mount         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
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
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| sqlite3         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| sqlite3         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| sqlite3         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| udev         |    CVE-2022-3821   |   MEDIUM  |  247.3-7 |  |
| udev         |    CVE-2022-4415   |   MEDIUM  |  247.3-7 |  |
| udev         |    CVE-2013-4392   |   LOW  |  247.3-7 |  |
| udev         |    CVE-2020-13529   |   LOW  |  247.3-7 |  |
| util-linux         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| util-linux         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| vim         |    CVE-2021-3872   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4019   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4173   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4187   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0261   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0351   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0359   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0361   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0392   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0417   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0572   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1616   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1785   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1897   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1942   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2000   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2129   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2304   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3099   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3134   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3324   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-4141   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2008-4677   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2017-1000382   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3903   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3928   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3973   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3974   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-3984   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4069   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4136   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4166   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4192   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2021-4193   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0156   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0158   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0213   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0318   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0319   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0368   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0393   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0407   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0408   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0413   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0443   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0554   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0685   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0696   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0714   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0729   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-0943   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1154   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1420   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1619   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1620   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1621   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1674   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1720   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1725   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1733   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1735   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1769   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1771   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1796   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1851   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1886   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1898   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-1968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2042   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2124   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2125   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2126   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2175   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2182   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2183   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2206   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2207   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2208   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2210   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2231   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2257   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2264   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2284   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2285   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2286   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2287   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2289   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2343   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2344   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2345   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2522   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2571   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2581   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2598   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2816   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2817   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2819   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2845   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2849   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2862   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2874   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2889   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2923   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2946   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2980   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-2982   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3016   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3037   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3153   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3234   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3235   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3256   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3278   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3296   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3297   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3352   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3491   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3520   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3591   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-3705   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-4292   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim         |    CVE-2022-4293   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3872   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4019   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4173   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4187   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0261   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0351   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0359   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0361   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0392   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0417   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0572   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1616   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1785   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1897   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1942   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2000   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2129   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2304   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3099   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3134   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3324   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-4141   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2008-4677   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2017-1000382   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3903   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3928   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3973   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3974   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-3984   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4069   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4136   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4166   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4192   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2021-4193   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0156   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0158   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0213   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0318   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0319   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0368   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0393   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0407   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0408   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0413   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0443   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0554   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0685   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0696   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0714   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0729   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-0943   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1154   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1420   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1619   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1620   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1621   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1674   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1720   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1725   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1733   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1735   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1769   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1771   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1796   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1851   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1886   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1898   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-1968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2042   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2124   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2125   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2126   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2175   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2182   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2183   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2206   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2207   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2208   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2210   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2231   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2257   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2264   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2284   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2285   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2286   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2287   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2289   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2343   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2344   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2345   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2522   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2571   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2581   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2598   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2816   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2817   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2819   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2845   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2849   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2862   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2874   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2889   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2923   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2946   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2980   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-2982   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3016   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3037   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3153   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3234   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3235   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3256   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3278   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3296   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3297   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3352   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3491   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3520   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3591   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-3705   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-4292   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-common         |    CVE-2022-4293   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3872   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4019   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4173   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4187   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0261   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0351   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0359   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0361   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0392   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0417   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0572   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1616   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1785   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1897   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1942   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2000   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2129   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2304   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3099   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3134   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3324   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-4141   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2008-4677   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2017-1000382   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3903   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3928   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3973   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3974   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-3984   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4069   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4136   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4166   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4192   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2021-4193   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0156   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0158   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0213   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0318   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0319   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0368   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0393   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0407   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0408   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0413   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0443   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0554   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0685   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0696   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0714   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0729   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-0943   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1154   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1420   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1619   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1620   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1621   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1674   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1720   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1725   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1733   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1735   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1769   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1771   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1796   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1851   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1886   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1898   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-1968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2042   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2124   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2125   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2126   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2175   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2182   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2183   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2206   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2207   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2208   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2210   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2231   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2257   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2264   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2284   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2285   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2286   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2287   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2289   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2343   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2344   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2345   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2522   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2571   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2581   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2598   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2816   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2817   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2819   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2845   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2849   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2862   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2874   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2889   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2923   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2946   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2980   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-2982   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3016   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3037   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3153   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3234   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3235   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3256   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3278   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3296   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3297   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3352   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3491   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3520   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3591   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-3705   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-4292   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| vim-runtime         |    CVE-2022-4293   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xdg-user-dirs         |    CVE-2017-15131   |   LOW  |  0.17-2 |  |
| xxd         |    CVE-2021-3872   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4019   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4173   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4187   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0261   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0351   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0359   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0361   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0392   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0417   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0572   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1616   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1785   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1897   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1942   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2000   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2129   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2304   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3099   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3134   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3324   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-4141   |   HIGH  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2008-4677   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2017-1000382   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3903   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3928   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3973   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3974   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-3984   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4069   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4136   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4166   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4192   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2021-4193   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0156   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0158   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0213   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0318   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0319   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0368   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0393   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0407   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0408   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0413   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0443   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0554   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0685   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0696   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0714   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0729   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-0943   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1154   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1420   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1619   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1620   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1621   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1629   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1674   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1720   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1725   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1733   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1735   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1769   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1771   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1796   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1851   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1886   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1898   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1927   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-1968   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2042   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2124   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2125   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2126   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2175   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2182   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2183   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2206   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2207   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2208   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2210   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2231   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2257   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2264   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2284   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2285   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2286   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2287   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2289   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2343   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2344   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2345   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2522   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2571   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2581   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2598   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2816   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2817   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2819   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2845   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2849   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2862   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2874   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2889   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2923   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2946   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2980   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-2982   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3016   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3037   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3153   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3234   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3235   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3256   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3278   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3296   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3297   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3352   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3491   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3520   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3591   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-3705   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-4292   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| xxd         |    CVE-2022-4293   |   LOW  |  2:8.2.2434-3+deb11u1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-2 | 1:1.2.11.dfsg-2+deb11u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-2 | 1:1.2.11.dfsg-2+deb11u1 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20220210151621-f4118a5b28e2 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220624214902-1bab6f366d9e | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220624214902-1bab6f366d9e | 0.4.0 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.8-0.20211004125949-5bd84dd9b33b | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/buger/jsonparser         |    CVE-2020-10675   |   HIGH  |  v0.0.0-20191004114745-ee4c978eae7e | 0.0.0-20200321185410-91ac96899e49 |
| github.com/buger/jsonparser         |    CVE-2020-35381   |   HIGH  |  v0.0.0-20191004114745-ee4c978eae7e | 1.1.1 |
| github.com/prometheus/client_golang         |    CVE-2022-21698   |   HIGH  |  v1.5.1 | 1.11.1 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210831042530-f4d43177bf5e | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.29.16 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.29.16 |  |
| github.com/aws/aws-sdk-go         |    CVE-2022-2582   |   UNKNOWN  |  v1.29.16 | 1.34.0 |
| github.com/buger/jsonparser         |    CVE-2020-10675   |   HIGH  |  v0.0.0-20191004114745-ee4c978eae7e | 0.0.0-20200321185410-91ac96899e49 |
| github.com/buger/jsonparser         |    CVE-2020-35381   |   HIGH  |  v0.0.0-20191004114745-ee4c978eae7e | 1.1.1 |
| github.com/prometheus/client_golang         |    CVE-2022-21698   |   HIGH  |  v1.5.1 | 1.11.1 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210831042530-f4d43177bf5e | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/crewjam/saml         |    CVE-2022-41912   |   CRITICAL  |  v0.4.6 | 0.4.9 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220615171555-694bf12d69de | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220615171555-694bf12d69de | 0.4.0 |

