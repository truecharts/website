# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/xbackbone:v3.3.3@sha256:14175767c6a35206fd2447ee6c1b8a1e4c1bcacc57b8a79335b144c2f1996229
          tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642**

#### Container: tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642 (debian 11.6)
    

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
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
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

**Container: tccr.io/truecharts/xbackbone:v3.3.3@sha256:14175767c6a35206fd2447ee6c1b8a1e4c1bcacc57b8a79335b144c2f1996229**

#### Container: tccr.io/truecharts/xbackbone:v3.3.3@sha256:14175767c6a35206fd2447ee6c1b8a1e4c1bcacc57b8a79335b144c2f1996229 (alpine 3.9.5)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| cups-libs         |    CVE-2020-3898   |   HIGH  |  2.2.12-r0 | 2.2.12-r1 |
| cups-libs         |    CVE-2019-8842   |   LOW  |  2.2.12-r0 | 2.2.12-r1 |
| curl         |    CVE-2020-8169   |   HIGH  |  7.64.0-r3 | 7.64.0-r4 |
| curl         |    CVE-2020-8177   |   HIGH  |  7.64.0-r3 | 7.64.0-r4 |
| curl         |    CVE-2020-8231   |   HIGH  |  7.64.0-r3 | 7.66.0-r5 |
| dbus-libs         |    CVE-2020-12049   |   MEDIUM  |  1.10.28-r0 | 1.12.28-r1 |
| freetype         |    CVE-2020-15999   |   MEDIUM  |  2.9.1-r2 | 2.9.1-r3 |
| git         |    CVE-2020-11008   |   HIGH  |  2.20.2-r0 | 2.20.4-r0 |
| git         |    CVE-2020-5260   |   HIGH  |  2.20.2-r0 | 2.20.3-r0 |
| gnutls         |    CVE-2020-13777   |   HIGH  |  3.6.7-r1 | 3.6.14-r0 |
| gnutls         |    CVE-2020-24659   |   HIGH  |  3.6.7-r1 | 3.6.15-r0 |
| jbig2dec         |    CVE-2020-12268   |   CRITICAL  |  0.15-r0 | 0.15-r1 |
| libcrypto1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| libcrypto1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| libcrypto1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| libcurl         |    CVE-2020-8169   |   HIGH  |  7.64.0-r3 | 7.64.0-r4 |
| libcurl         |    CVE-2020-8177   |   HIGH  |  7.64.0-r3 | 7.64.0-r4 |
| libcurl         |    CVE-2020-8231   |   HIGH  |  7.64.0-r3 | 7.66.0-r5 |
| libldap         |    CVE-2020-12243   |   HIGH  |  2.4.48-r0 | 2.4.48-r1 |
| libldap         |    CVE-2020-25692   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libldap         |    CVE-2020-25709   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libldap         |    CVE-2020-25710   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libpq         |    CVE-2020-14349   |   HIGH  |  11.7-r0 | 11.9-r0 |
| libpq         |    CVE-2020-14350   |   HIGH  |  11.7-r0 | 11.9-r0 |
| libpq         |    CVE-2020-25694   |   HIGH  |  11.7-r0 | 11.10-r0 |
| libpq         |    CVE-2020-25695   |   HIGH  |  11.7-r0 | 11.10-r0 |
| libpq         |    CVE-2020-25696   |   HIGH  |  11.7-r0 | 11.10-r0 |
| libpq         |    CVE-2021-3393   |   MEDIUM  |  11.7-r0 | 11.11-r0 |
| libssl1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| libx11         |    CVE-2020-14363   |   HIGH  |  1.6.7-r0 | 1.6.12-r0 |
| libx11         |    CVE-2020-14344   |   MEDIUM  |  1.6.7-r0 | 1.6.10-r0 |
| libxml2         |    CVE-2020-24977   |   MEDIUM  |  2.9.9-r2 | 2.9.9-r3 |
| musl         |    CVE-2020-28928   |   MEDIUM  |  1.1.20-r5 | 1.1.20-r6 |
| musl-utils         |    CVE-2020-28928   |   MEDIUM  |  1.1.20-r5 | 1.1.20-r6 |
| nghttp2-libs         |    CVE-2020-11080   |   HIGH  |  1.35.1-r1 | 1.35.1-r2 |
| openssl         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| openssl         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| pcre         |    CVE-2020-14155   |   MEDIUM  |  8.42-r1 | 8.42-r2 |
| php7         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-bcmath         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bcmath         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bcmath         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bcmath         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bcmath         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bcmath         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-bz2         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bz2         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bz2         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bz2         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bz2         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-bz2         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-calendar         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-calendar         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-calendar         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-calendar         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-calendar         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-calendar         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-common         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-common         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-common         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-common         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-common         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-common         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-ctype         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ctype         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ctype         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ctype         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ctype         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ctype         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-curl         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-curl         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-curl         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-curl         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-curl         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-curl         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-dom         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-dom         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-dom         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-dom         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-dom         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-dom         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-exif         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-exif         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-exif         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-exif         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-exif         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-exif         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-fileinfo         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fileinfo         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fileinfo         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fileinfo         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fileinfo         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fileinfo         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-fpm         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fpm         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fpm         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fpm         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fpm         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-fpm         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-ftp         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ftp         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ftp         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ftp         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ftp         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ftp         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-gd         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gd         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gd         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gd         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gd         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gd         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-gettext         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gettext         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gettext         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gettext         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gettext         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-gettext         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-iconv         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-iconv         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-iconv         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-iconv         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-iconv         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-iconv         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-imap         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-imap         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-imap         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-imap         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-imap         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-imap         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-intl         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-intl         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-intl         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-intl         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-intl         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-intl         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-json         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-json         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-json         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-json         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-json         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-json         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-ldap         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ldap         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ldap         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ldap         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ldap         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-ldap         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-mbstring         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mbstring         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mbstring         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mbstring         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mbstring         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mbstring         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-mysqli         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqli         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqli         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqli         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqli         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqli         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-mysqlnd         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqlnd         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqlnd         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqlnd         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqlnd         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-mysqlnd         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-opcache         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-opcache         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-opcache         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-opcache         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-opcache         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-opcache         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-openssl         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-openssl         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-openssl         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-openssl         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-openssl         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-openssl         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pcntl         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pcntl         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pcntl         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pcntl         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pcntl         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pcntl         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pdo         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pdo_mysql         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_mysql         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_mysql         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_mysql         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_mysql         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_mysql         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pdo_pgsql         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_pgsql         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_pgsql         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_pgsql         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_pgsql         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_pgsql         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pdo_sqlite         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_sqlite         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_sqlite         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_sqlite         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_sqlite         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pdo_sqlite         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pear         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pear         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pear         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pear         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pear         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pear         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-pgsql         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pgsql         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pgsql         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pgsql         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pgsql         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-pgsql         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-phar         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-phar         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-phar         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-phar         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-phar         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-phar         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-posix         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-posix         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-posix         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-posix         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-posix         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-posix         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-session         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-session         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-session         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-session         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-session         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-session         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-shmop         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-shmop         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-shmop         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-shmop         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-shmop         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-shmop         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-simplexml         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-simplexml         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-simplexml         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-simplexml         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-simplexml         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-simplexml         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-soap         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-soap         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-soap         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-soap         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-soap         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-soap         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-sockets         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sockets         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sockets         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sockets         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sockets         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sockets         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-sqlite3         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sqlite3         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sqlite3         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sqlite3         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sqlite3         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sqlite3         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-sysvmsg         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvmsg         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvmsg         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvmsg         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvmsg         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvmsg         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-sysvsem         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvsem         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvsem         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvsem         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvsem         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvsem         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-sysvshm         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvshm         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvshm         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvshm         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvshm         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-sysvshm         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-tokenizer         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-tokenizer         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-tokenizer         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-tokenizer         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-tokenizer         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-tokenizer         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-wddx         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-wddx         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-wddx         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-wddx         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-wddx         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-wddx         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-xml         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xml         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xml         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xml         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xml         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xml         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-xmlreader         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlreader         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlreader         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlreader         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlreader         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlreader         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-xmlrpc         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlrpc         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlrpc         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlrpc         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlrpc         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlrpc         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-xmlwriter         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlwriter         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlwriter         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlwriter         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlwriter         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xmlwriter         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-xsl         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xsl         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xsl         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xsl         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xsl         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-xsl         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| php7-zip         |    CVE-2020-7062   |   HIGH  |  7.2.27-r0 | 7.2.31-r0 |
| php7-zip         |    CVE-2019-11048   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-zip         |    CVE-2020-7063   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-zip         |    CVE-2020-7064   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-zip         |    CVE-2020-7066   |   MEDIUM  |  7.2.27-r0 | 7.2.31-r0 |
| php7-zip         |    CVE-2020-7068   |   LOW  |  7.2.27-r0 | 7.2.33-r0 |
| python2         |    CVE-2019-15903   |   HIGH  |  2.7.16-r2 | 2.7.17-r0 |
| python2         |    CVE-2019-18348   |   MEDIUM  |  2.7.16-r2 | 2.7.18-r0 |
| sqlite         |    CVE-2020-11655   |   HIGH  |  3.28.0-r2 | 3.28.0-r3 |
| sqlite-libs         |    CVE-2020-11655   |   HIGH  |  3.28.0-r2 | 3.28.0-r3 |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| guzzlehttp/guzzle         |    CVE-2022-29248   |   HIGH  |  6.5.5 | 7.4.3, 6.5.6 |
| guzzlehttp/guzzle         |    CVE-2022-31042   |   HIGH  |  6.5.5 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31043   |   HIGH  |  6.5.5 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31090   |   HIGH  |  6.5.5 | 6.5.8, 7.4.5 |
| guzzlehttp/guzzle         |    CVE-2022-31091   |   HIGH  |  6.5.5 | 7.4.5, 6.5.8 |
| guzzlehttp/psr7         |    CVE-2022-24775   |   HIGH  |  1.7.0 | 2.1.1, 1.8.4 |
| league/flysystem         |    CVE-2021-32708   |   HIGH  |  1.0.70 | 1.1.4, 2.1.1 |
| twig/twig         |    CVE-2022-23614   |   CRITICAL  |  v2.13.1 | 2.14.11, 3.3.8 |
| twig/twig         |    CVE-2022-39261   |   HIGH  |  v2.13.1 | 1.44.7, 2.15.3, 3.4.3 |

