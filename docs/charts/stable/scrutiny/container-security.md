# Container Security

##### Detected Containers

          tccr.io/truecharts/scrutiny:0.5.0@sha256:b423a47896e4c20d125880dc2504248fe78d9de5b1d711747bb25c94949b15bf
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/scrutiny:0.5.0@sha256:b423a47896e4c20d125880dc2504248fe78d9de5b1d711747bb25c94949b15bf**

#### Container: tccr.io/truecharts/scrutiny:0.5.0@sha256:b423a47896e4c20d125880dc2504248fe78d9de5b1d711747bb25c94949b15bf (debian 11.4)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u2 |  |
| curl         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u2 | 7.74.0-1.3+deb11u3 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| exim4-base         |    CVE-2021-38371   |   HIGH  |  4.94.2-7 |  |
| exim4-base         |    CVE-2022-3559   |   HIGH  |  4.94.2-7 |  |
| exim4-config         |    CVE-2021-38371   |   HIGH  |  4.94.2-7 |  |
| exim4-config         |    CVE-2022-3559   |   HIGH  |  4.94.2-7 |  |
| exim4-daemon-light         |    CVE-2021-38371   |   HIGH  |  4.94.2-7 |  |
| exim4-daemon-light         |    CVE-2022-3559   |   HIGH  |  4.94.2-7 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u3 | 2.31-13+deb11u4 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u3 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u3 | 2.31-13+deb11u4 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u3 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u3 |  |
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
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgnutls-dane0         |    CVE-2022-2509   |   HIGH  |  3.7.1-5+deb11u1 | 3.7.1-5+deb11u2 |
| libgnutls-dane0         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u1 |  |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.7.1-5+deb11u1 | 3.7.1-5+deb11u2 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u1 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
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
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
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
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libtirpc-common         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libtirpc3         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7 |  |
| libunbound8         |    CVE-2022-3204   |   HIGH  |  1.13.1-1 |  |
| libunbound8         |    CVE-2022-30698   |   MEDIUM  |  1.13.1-1 |  |
| libunbound8         |    CVE-2022-30699   |   MEDIUM  |  1.13.1-1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
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
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-2+deb11u1 | 1:1.2.11.dfsg-2+deb11u2 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/containrrr/shoutrrr         |    CVE-2022-25891   |   HIGH  |  v0.4.4 | 0.6.0 |
| github.com/gin-gonic/gin         |    CVE-2020-28483   |   HIGH  |  v1.6.3 | 1.7.7 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220405052023-b1e9470b6e64 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220405052023-b1e9470b6e64 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

