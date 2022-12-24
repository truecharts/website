# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/vaultwarden:1.26.0@sha256:c96156c6788a4e6104456a57c48767719147dba3dde1f0a76dfaa7bc98d62581
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/vaultwarden:1.26.0@sha256:c96156c6788a4e6104456a57c48767719147dba3dde1f0a76dfaa7bc98d62581**

#### Container: tccr.io/truecharts/vaultwarden:1.26.0@sha256:c96156c6788a4e6104456a57c48767719147dba3dde1f0a76dfaa7bc98d62581 (debian 11.5)
    

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
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u4 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u4 |  |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u4 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u4 |  |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u4 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u2 | 1.18.3-6+deb11u3 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u2 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u2 |  |
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
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3649   |   CRITICAL  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-39686   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-4037   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2021-4204   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-0500   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-20421   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-2602   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-2978   |   HIGH  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-3176   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3621   |   HIGH  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-3623   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4139   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-41674   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-42719   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-42720   |   HIGH  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-43750   |   HIGH  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-24504   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2021-4023   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-4149   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-0171   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-1184   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-2663   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3061   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3114   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3303   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3435   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3586   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3646   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-38457   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3903   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-39188   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-39842   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-40133   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-40307   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-4095   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-42721   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-42722   |   MEDIUM  |  5.10.140-1 | 5.10.149-1 |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4662   |   MEDIUM  |  5.10.140-1 | 5.10.148-1 |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  5.10.140-1 | 5.10.158-1 |
| linux-libc-dev         |    CVE-2022-2196   |   UNKNOWN  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4379   |   UNKNOWN  |  5.10.140-1 |  |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  5.10.140-1 |  |
| linux-libc-dev         |    DSA-5257-2   |   UNKNOWN  |  5.10.140-1 | 5.10.149-2 |
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

