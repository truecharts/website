# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/dsmr-reader:v2021.09.02@sha256:1d3b33ea11703b14aa276dab2f2056323cc74a90e5f6c474aa82efc57c90ac9e
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/dsmr-reader:v2021.09.02@sha256:1d3b33ea11703b14aa276dab2f2056323cc74a90e5f6c474aa82efc57c90ac9e**

#### Container: tccr.io/truecharts/dsmr-reader:v2021.09.02@sha256:1d3b33ea11703b14aa276dab2f2056323cc74a90e5f6c474aa82efc57c90ac9e (alpine 3.13.6)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2021-42378   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.32.1-r6 | 1.32.1-r8 |
| busybox         |    CVE-2022-30065   |   HIGH  |  1.32.1-r6 | 1.32.1-r9 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.32.1-r6 | 1.32.1-r7 |
| busybox         |    CVE-2021-42375   |   MEDIUM  |  1.32.1-r6 | 1.32.1-r7 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| curl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.20.6-r0 | 1.20.10-r0 |
| expat         |    CVE-2022-22822   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-22823   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-22824   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r3 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r4 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r4 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r4 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.2.10-r1 | 2.2.10-r7 |
| expat         |    CVE-2021-45960   |   HIGH  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2021-46143   |   HIGH  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-22825   |   HIGH  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-22826   |   HIGH  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-22827   |   HIGH  |  2.2.10-r1 | 2.2.10-r2 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.2.10-r1 | 2.2.10-r3 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.2.10-r1 | 2.2.10-r4 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.2.10-r1 | 2.2.10-r8 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.2.10-r1 | 2.2.10-r4 |
| krb5-libs         |    CVE-2021-37750   |   MEDIUM  |  1.18.4-r0 | 1.18.5-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.79.1-r0 | 7.79.1-r2 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.79.1-r0 | 7.79.1-r3 |
| libpq         |    CVE-2021-23214   |   HIGH  |  13.4-r0 | 13.5-r0 |
| libpq         |    CVE-2022-1552   |   HIGH  |  13.4-r0 | 13.7-r0 |
| libpq         |    CVE-2022-2625   |   HIGH  |  13.4-r0 | 13.8-r0 |
| libpq         |    CVE-2021-23222   |   MEDIUM  |  13.4-r0 | 13.5-r0 |
| libsasl         |    CVE-2022-24407   |   HIGH  |  2.1.27-r10 | 2.1.28-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libtirpc         |    CVE-2021-46828   |   HIGH  |  1.3.1-r0 | 1.3.1-r1 |
| libtirpc-conf         |    CVE-2021-46828   |   HIGH  |  1.3.1-r0 | 1.3.1-r1 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.36.1-r1 | 2.37.4-r0 |
| mariadb-client         |    CVE-2018-25032   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2022-24048   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2022-24050   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2022-24051   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2022-24052   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2022-27376   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27377   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27378   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27379   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27380   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27381   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27382   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27383   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27384   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27386   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27387   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27444   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27445   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27446   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27447   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27448   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27449   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27451   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27452   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27455   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27456   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27457   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-27458   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-client         |    CVE-2022-32081   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2022-32082   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2022-32084   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2022-32089   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2022-32091   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-client         |    CVE-2021-35604   |   MEDIUM  |  10.5.12-r0 | 10.5.13-r0 |
| mariadb-client         |    CVE-2021-46659   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2021-46661   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2021-46663   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2021-46664   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2021-46665   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-client         |    CVE-2021-46668   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2018-25032   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2022-24048   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2022-24050   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2022-24051   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2022-24052   |   HIGH  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2022-27376   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27377   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27378   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27379   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27380   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27381   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27382   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27383   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27384   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27386   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27387   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27444   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27445   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27446   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27447   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27448   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27449   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27451   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27452   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27455   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27456   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27457   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-27458   |   HIGH  |  10.5.12-r0 | 10.5.16-r0 |
| mariadb-common         |    CVE-2022-32081   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2022-32082   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2022-32084   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2022-32089   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2022-32091   |   HIGH  |  10.5.12-r0 | 10.5.17-r0 |
| mariadb-common         |    CVE-2021-35604   |   MEDIUM  |  10.5.12-r0 | 10.5.13-r0 |
| mariadb-common         |    CVE-2021-46659   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2021-46661   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2021-46663   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2021-46664   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2021-46665   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| mariadb-common         |    CVE-2021-46668   |   MEDIUM  |  10.5.12-r0 | 10.5.15-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| openssl-dev         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| openssl-dev         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| postgresql-client         |    CVE-2021-23214   |   HIGH  |  13.4-r0 | 13.5-r0 |
| postgresql-client         |    CVE-2022-1552   |   HIGH  |  13.4-r0 | 13.7-r0 |
| postgresql-client         |    CVE-2022-2625   |   HIGH  |  13.4-r0 | 13.8-r0 |
| postgresql-client         |    CVE-2021-23222   |   MEDIUM  |  13.4-r0 | 13.5-r0 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.32.1-r6 | 1.32.1-r8 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.32.1-r6 | 1.32.1-r9 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.32.1-r6 | 1.32.1-r7 |
| ssl_client         |    CVE-2021-42375   |   MEDIUM  |  1.32.1-r6 | 1.32.1-r7 |
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |
| zlib-dev         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib-dev         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Django         |    CVE-2021-44420   |   HIGH  |  3.1.13 | 2.2.25, 3.1.14, 3.2.10 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2021.5.30 | 2022.12.07 |

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

