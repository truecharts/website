# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/lemur-cfssl:latest@sha256:bc1186535bdf1d0bd9206133d1753c8844c7158c14f08b328a92af639c7e80f4
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/lemur-cfssl:latest@sha256:bc1186535bdf1d0bd9206133d1753c8844c7158c14f08b328a92af639c7e80f4**

#### Container: tccr.io/truecharts/lemur-cfssl:latest@sha256:bc1186535bdf1d0bd9206133d1753c8844c7158c14f08b328a92af639c7e80f4 (alpine 3.10)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.10.4-r2 | 2.10.7-r0 |
| apk-tools         |    CVE-2021-30139   |   HIGH  |  2.10.4-r2 | 2.10.6-r0 |
| busybox         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |
| libcrypto1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| libcrypto1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| libcrypto1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| libldap         |    CVE-2020-12243   |   HIGH  |  2.4.48-r0 | 2.4.48-r1 |
| libldap         |    CVE-2020-25692   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libldap         |    CVE-2020-25709   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libldap         |    CVE-2020-25710   |   HIGH  |  2.4.48-r0 | 2.4.48-r2 |
| libpq         |    CVE-2020-14349   |   HIGH  |  11.6-r0 | 11.9-r0 |
| libpq         |    CVE-2020-14350   |   HIGH  |  11.6-r0 | 11.9-r0 |
| libpq         |    CVE-2020-25694   |   HIGH  |  11.6-r0 | 11.10-r0 |
| libpq         |    CVE-2020-25695   |   HIGH  |  11.6-r0 | 11.10-r0 |
| libpq         |    CVE-2020-25696   |   HIGH  |  11.6-r0 | 11.10-r0 |
| libpq         |    CVE-2021-32027   |   HIGH  |  11.6-r0 | 11.12-r0 |
| libpq         |    CVE-2020-1720   |   MEDIUM  |  11.6-r0 | 11.7-r0 |
| libpq         |    CVE-2021-32028   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| libpq         |    CVE-2021-32029   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| libpq         |    CVE-2021-3393   |   MEDIUM  |  11.6-r0 | 11.11-r0 |
| libssl1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.9-r3 | 2.9.9-r5 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.9-r3 | 2.9.9-r5 |
| libxml2         |    CVE-2020-24977   |   MEDIUM  |  2.9.9-r3 | 2.9.9-r4 |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r3 | 2.9.9-r5 |
| musl         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| musl-utils         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| nginx         |    CVE-2021-23017   |   HIGH  |  1.16.1-r2 | 1.16.1-r3 |
| openssl         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r2 | 1.1.1g-r0 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r2 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r2 | 1.1.1k-r0 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r2 | 1.1.1i-r0 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r2 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r2 | 1.1.1k-r0 |
| openssl         |    CVE-2021-23839   |   LOW  |  1.1.1d-r2 | 1.1.1j-r0 |
| pcre         |    CVE-2020-14155   |   MEDIUM  |  8.43-r0 | 8.43-r1 |
| postgresql         |    CVE-2020-14349   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql         |    CVE-2020-14350   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql         |    CVE-2020-25694   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql         |    CVE-2020-25695   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql         |    CVE-2020-25696   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql         |    CVE-2021-32027   |   HIGH  |  11.6-r0 | 11.12-r0 |
| postgresql         |    CVE-2020-1720   |   MEDIUM  |  11.6-r0 | 11.7-r0 |
| postgresql         |    CVE-2021-32028   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql         |    CVE-2021-32029   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql         |    CVE-2021-3393   |   MEDIUM  |  11.6-r0 | 11.11-r0 |
| postgresql-client         |    CVE-2020-14349   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql-client         |    CVE-2020-14350   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql-client         |    CVE-2020-25694   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-client         |    CVE-2020-25695   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-client         |    CVE-2020-25696   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-client         |    CVE-2021-32027   |   HIGH  |  11.6-r0 | 11.12-r0 |
| postgresql-client         |    CVE-2020-1720   |   MEDIUM  |  11.6-r0 | 11.7-r0 |
| postgresql-client         |    CVE-2021-32028   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql-client         |    CVE-2021-32029   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql-client         |    CVE-2021-3393   |   MEDIUM  |  11.6-r0 | 11.11-r0 |
| postgresql-contrib         |    CVE-2020-14349   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql-contrib         |    CVE-2020-14350   |   HIGH  |  11.6-r0 | 11.9-r0 |
| postgresql-contrib         |    CVE-2020-25694   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-contrib         |    CVE-2020-25695   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-contrib         |    CVE-2020-25696   |   HIGH  |  11.6-r0 | 11.10-r0 |
| postgresql-contrib         |    CVE-2021-32027   |   HIGH  |  11.6-r0 | 11.12-r0 |
| postgresql-contrib         |    CVE-2020-1720   |   MEDIUM  |  11.6-r0 | 11.7-r0 |
| postgresql-contrib         |    CVE-2021-32028   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql-contrib         |    CVE-2021-32029   |   MEDIUM  |  11.6-r0 | 11.12-r0 |
| postgresql-contrib         |    CVE-2021-3393   |   MEDIUM  |  11.6-r0 | 11.11-r0 |
| python3         |    CVE-2021-3177   |   CRITICAL  |  3.7.5-r1 | 3.7.7-r2 |
| python3         |    CVE-2020-14422   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r1 |
| python3         |    CVE-2020-8315   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| python3         |    CVE-2020-8492   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| sqlite-libs         |    CVE-2020-11655   |   HIGH  |  3.28.0-r2 | 3.28.0-r3 |
| ssl_client         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| angular         |    CVE-2019-10768   |   HIGH  |  1.3.15 | 1.7.9 |
| angular         |    CVE-2019-14863   |   MEDIUM  |  1.3.15 | 1.5.0-beta.1 |
| angular         |    CVE-2020-7676   |   MEDIUM  |  1.3.15 | 1.8.0 |
| angular         |    CVE-2022-25869   |   MEDIUM  |  1.3.15 |  |
| angular         |    GHSA-28hp-fgcr-2r4h   |   MEDIUM  |  1.3.15 | 1.6.0 |
| angular         |    GHSA-5cp4-xmrw-59wf   |   MEDIUM  |  1.3.15 | 1.8.0 |
| angular         |    CVE-2019-10768   |   HIGH  |  1.4.14 | 1.7.9 |
| angular         |    CVE-2019-14863   |   MEDIUM  |  1.4.14 | 1.5.0-beta.1 |
| angular         |    CVE-2020-7676   |   MEDIUM  |  1.4.14 | 1.8.0 |
| angular         |    CVE-2022-25869   |   MEDIUM  |  1.4.14 |  |
| angular         |    GHSA-28hp-fgcr-2r4h   |   MEDIUM  |  1.4.14 | 1.6.0 |
| angular         |    GHSA-5cp4-xmrw-59wf   |   MEDIUM  |  1.4.14 | 1.8.0 |
| angular         |    CVE-2019-10768   |   HIGH  |  1.4.9 | 1.7.9 |
| angular         |    CVE-2019-14863   |   MEDIUM  |  1.4.9 | 1.5.0-beta.1 |
| angular         |    CVE-2020-7676   |   MEDIUM  |  1.4.9 | 1.8.0 |
| angular         |    CVE-2022-25869   |   MEDIUM  |  1.4.9 |  |
| angular         |    GHSA-28hp-fgcr-2r4h   |   MEDIUM  |  1.4.9 | 1.6.0 |
| angular         |    GHSA-5cp4-xmrw-59wf   |   MEDIUM  |  1.4.9 | 1.8.0 |
| angular         |    CVE-2019-10768   |   HIGH  |  1.5.11 | 1.7.9 |
| angular         |    CVE-2020-7676   |   MEDIUM  |  1.5.11 | 1.8.0 |
| angular         |    CVE-2022-25869   |   MEDIUM  |  1.5.11 |  |
| angular         |    GHSA-28hp-fgcr-2r4h   |   MEDIUM  |  1.5.11 | 1.6.0 |
| angular         |    GHSA-5cp4-xmrw-59wf   |   MEDIUM  |  1.5.11 | 1.8.0 |
| bootstrap         |    CVE-2016-10735   |   MEDIUM  |  3.3.7 | 3.4.0 |
| bootstrap         |    CVE-2018-14041   |   MEDIUM  |  3.3.7 | 4.1.2, 3.4.0 |
| bootstrap         |    CVE-2018-20676   |   MEDIUM  |  3.3.7 | 3.4.0 |
| bootstrap         |    CVE-2018-20677   |   MEDIUM  |  3.3.7 | 3.4.0 |
| bootstrap         |    CVE-2019-8331   |   MEDIUM  |  3.3.7 | 3.4.1, 4.3.1 |
| chart.js         |    CVE-2020-7746   |   HIGH  |  1.0.2 | 2.9.4 |
| lodash         |    CVE-2019-10744   |   CRITICAL  |  4.0.1 | 4.17.12 |
| lodash         |    CVE-2018-16487   |   HIGH  |  4.0.1 | &gt;=4.17.11 |
| lodash         |    CVE-2020-8203   |   HIGH  |  4.0.1 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.0.1 | 4.17.21 |
| lodash         |    CVE-2019-1010266   |   MEDIUM  |  4.0.1 | 4.17.11 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.0.1 | 4.17.21 |
| lodash         |    CVE-2018-3721   |   LOW  |  4.0.1 | &gt;=4.17.5 |
| lodash         |    CVE-2020-8203   |   HIGH  |  4.17.15 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.15 | 4.17.21 |
| lodash         |    NSWG-ECO-516   |   HIGH  |  4.17.15 | &gt;=4.17.19 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.15 | 4.17.21 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Flask-Cors         |    CVE-2020-25032   |   HIGH  |  3.0.8 | 3.0.9 |
| GitPython         |    CVE-2022-24439   |   HIGH  |  3.0.5 |  |
| Jinja2         |    CVE-2020-28493   |   MEDIUM  |  2.10.3 | 2.11.3 |
| Mako         |    CVE-2022-40023   |   HIGH  |  1.1.0 | 1.2.2 |
| PyJWT         |    CVE-2022-29217   |   HIGH  |  1.7.1 | 2.4.0 |
| PyYAML         |    CVE-2020-14343   |   CRITICAL  |  5.2 | 5.4 |
| PyYAML         |    CVE-2020-1747   |   CRITICAL  |  5.2 | 5.3.1 |
| Pygments         |    CVE-2021-20270   |   HIGH  |  2.5.2 | 2.7.4 |
| Pygments         |    CVE-2021-27291   |   HIGH  |  2.5.2 | 2.7.4 |
| Werkzeug         |    CVE-2022-29361   |   CRITICAL  |  0.16.0 | 2.1.1 |
| bleach         |    CVE-2020-6802   |   MEDIUM  |  3.1.0 | 3.1.1 |
| bleach         |    CVE-2020-6816   |   MEDIUM  |  3.1.0 | 3.1.2 |
| bleach         |    CVE-2020-6817   |   MEDIUM  |  3.1.0 | 3.1.4 |
| bleach         |    CVE-2021-23980   |   MEDIUM  |  3.1.0 | 3.3.0 |
| celery         |    CVE-2021-23727   |   HIGH  |  4.4.0 | 5.2.2 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2019.11.28 | 2022.12.07 |
| cryptography         |    CVE-2020-25659   |   MEDIUM  |  2.8 | 3.2.1 |
| jsonpickle         |    CVE-2020-22083   |   CRITICAL  |  1.2 | 1.4.2 |
| paramiko         |    CVE-2022-24302   |   MEDIUM  |  2.7.1 | 2.9.3, 2.10.1 |
| pip         |    CVE-2021-3572   |   MEDIUM  |  20.0.2 | 21.1 |
| py         |    CVE-2020-29651   |   HIGH  |  1.8.1 | 1.10.0 |
| py         |    CVE-2022-42969   |   HIGH  |  1.8.1 |  |
| python-ldap         |    CVE-2021-46823   |   MEDIUM  |  3.2.0 | 3.4.0 |
| python-ldap         |    GHSA-r8wq-qrxc-hmcm   |   MEDIUM  |  3.2.0 | 3.4.0 |
| rsa         |    CVE-2020-13757   |   HIGH  |  4.0 | 4.1 |
| rsa         |    CVE-2020-25658   |   MEDIUM  |  4.0 | 4.7 |
| urllib3         |    CVE-2020-7212   |   HIGH  |  1.25.7 | 1.25.8 |
| urllib3         |    CVE-2021-33503   |   HIGH  |  1.25.7 | 1.26.5 |
| urllib3         |    CVE-2020-26137   |   MEDIUM  |  1.25.7 | 1.25.9 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2020-7919   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200124225646-8b5121be2f68 |
| golang.org/x/crypto         |    CVE-2020-9283   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20200220183623-bac4c82f6975 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20190701094942-4def268fd1a4 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2019-9512   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2019-9514   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20190813141303-74dc4d7220e7 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20190404232315-eb5bcb51f2a3 | 0.4.0 |
| golang.org/x/text         |    CVE-2020-14040   |   HIGH  |  v0.3.2 | 0.3.3 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.2 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.2 | 0.3.8 |

