# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/docspell-server:0.39.0@sha256:6be2d908859d94942f835c22a0e88b729cdbe82a5e7a819fb54c82644861c161
          tccr.io/truecharts/docspell-joex:0.39.0@sha256:5cec5e248a4a099fbf01145275fa993a163763509af148aa321fe933917549a9
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/solr:9.1.0@sha256:c9516604a63bb4da219077abf05e6f2f6e2e140db95c073b722cb1e2276492e3
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/docspell-joex:0.39.0@sha256:5cec5e248a4a099fbf01145275fa993a163763509af148aa321fe933917549a9**

#### Container: tccr.io/truecharts/docspell-joex:0.39.0@sha256:5cec5e248a4a099fbf01145275fa993a163763509af148aa321fe933917549a9 (alpine 3.16.3)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libksba         |    CVE-2022-3515   |   HIGH  |  1.6.0-r0 | 1.6.3-r0 |
| libksba         |    CVE-2022-47629   |   UNKNOWN  |  1.6.0-r0 | 1.6.3-r0 |
| libtasn1         |    CVE-2021-46848   |   CRITICAL  |  4.18.0-r0 | 4.18.0-r1 |
| python3         |    CVE-2022-37454   |   CRITICAL  |  3.10.8-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-42919   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-45061   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |
| python3-dev         |    CVE-2022-37454   |   CRITICAL  |  3.10.8-r0 | 3.10.9-r0 |
| python3-dev         |    CVE-2022-42919   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |
| python3-dev         |    CVE-2022-45061   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.4 | 2.12.7.1, 2.13.4.1 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3171   |   HIGH  |  3.19.2 | 3.16.3, 3.19.6, 3.20.3, 3.21.7 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3509   |   HIGH  |  3.19.2 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3510   |   HIGH  |  3.19.2 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    GHSA-h4h5-3hr4-j3g2   |   UNKNOWN  |  3.19.2 | 3.20.3, 3.21.7, 3.16.3, 3.19.6 |
| com.h2database:h2         |    CVE-2022-45868   |   HIGH  |  2.1.214 |  |
| org.apache.poi:poi         |    CVE-2022-26336   |   MEDIUM  |  4.1.2 | 5.2.1 |
| org.apache.poi:poi-ooxml         |    CVE-2022-26336   |   MEDIUM  |  4.1.2 | 5.2.1 |
| org.apache.poi:poi-scratchpad         |    CVE-2022-26336   |   MEDIUM  |  4.1.2 | 5.2.1 |
| org.postgresql:postgresql         |    CVE-2022-41946   |   MEDIUM  |  42.5.0 | 42.2.27, 42.3.8, 42.4.3, 42.5.1 |
| org.yaml:snakeyaml         |    CVE-2022-1471   |   HIGH  |  1.33 |  |
| xalan:xalan         |    CVE-2022-34169   |   HIGH  |  2.7.2 |  |
| xerces:xercesImpl         |    CVE-2012-0881   |   HIGH  |  2.8.0 | 2.12.0 |
| xerces:xercesImpl         |    CVE-2013-4002   |   HIGH  |  2.8.0 | 2.12.0 |
| xerces:xercesImpl         |    CVE-2009-2625   |   MEDIUM  |  2.8.0 | 2.10.0 |
| xerces:xercesImpl         |    CVE-2020-14338   |   MEDIUM  |  2.8.0 | 2.12.0.sp3 |
| xerces:xercesImpl         |    CVE-2022-23437   |   MEDIUM  |  2.8.0 | 2.12.2 |

**Container: tccr.io/truecharts/docspell-server:0.39.0@sha256:6be2d908859d94942f835c22a0e88b729cdbe82a5e7a819fb54c82644861c161**

#### Container: tccr.io/truecharts/docspell-server:0.39.0@sha256:6be2d908859d94942f835c22a0e88b729cdbe82a5e7a819fb54c82644861c161 (alpine 3.16.3)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libtasn1         |    CVE-2021-46848   |   CRITICAL  |  4.18.0-r0 | 4.18.0-r1 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.4 | 2.12.7.1, 2.13.4.1 |
| com.h2database:h2         |    CVE-2022-45868   |   HIGH  |  2.1.214 |  |
| org.postgresql:postgresql         |    CVE-2022-41946   |   MEDIUM  |  42.5.0 | 42.2.27, 42.3.8, 42.4.3, 42.5.1 |
| org.yaml:snakeyaml         |    CVE-2022-1471   |   HIGH  |  1.33 |  |

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

**Container: tccr.io/truecharts/solr:9.1.0@sha256:c9516604a63bb4da219077abf05e6f2f6e2e140db95c073b722cb1e2276492e3**

#### Container: tccr.io/truecharts/solr:9.1.0@sha256:c9516604a63bb4da219077abf05e6f2f6e2e140db95c073b722cb1e2276492e3 (debian 11.5)
    

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

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.12.7 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.12.7 | 2.12.7.1, 2.13.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.3 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.13.3 | 2.12.7.1, 2.13.4 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40151   |   HIGH  |  5.3.0 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40152   |   HIGH  |  5.3.0 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40151   |   HIGH  |  6.2.8 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40152   |   HIGH  |  6.2.8 | 5.4.0, 6.4.0 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3171   |   HIGH  |  3.21.4 | 3.16.3, 3.19.6, 3.20.3, 3.21.7 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3509   |   HIGH  |  3.21.4 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3510   |   HIGH  |  3.21.4 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    GHSA-h4h5-3hr4-j3g2   |   UNKNOWN  |  3.21.4 | 3.20.3, 3.21.7, 3.16.3, 3.19.6 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3171   |   HIGH  |  3.7.1 | 3.16.3, 3.19.6, 3.20.3, 3.21.7 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3509   |   HIGH  |  3.7.1 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3510   |   HIGH  |  3.7.1 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2021-22569   |   MEDIUM  |  3.7.1 | 3.16.1, 3.18.2, 3.19.2 |
| com.google.protobuf:protobuf-java         |    GHSA-h4h5-3hr4-j3g2   |   UNKNOWN  |  3.7.1 | 3.20.3, 3.21.7, 3.16.3, 3.19.6 |
| com.google.protobuf:protobuf-java         |    GHSA-wrvw-hg22-4m67   |   UNKNOWN  |  3.7.1 | 3.16.1, 3.18.2, 3.19.2 |
| commons-net:commons-net         |    CVE-2021-37533   |   MEDIUM  |  3.6 | 3.9.0 |
| org.eclipse.jetty:jetty-http         |    CVE-2022-2047   |   LOW  |  9.4.43.v20210629 | 9.4.46.v20220331, 10.0.9, 11.0.10 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.0.1 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2021-43784   |   MEDIUM  |  v1.0.1 | 1.1.0 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.0.1 | v1.1.2 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210817142637-7d9622a276b7 | 0.0.0-20220412211240-33da011f77ad |

