# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/etherpad:version-1.8.14@sha256:4900f0e787ca22cf93090ae44ecceb5689d4427c739e1eb637a6e3a913161bf8
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/postgresql:14.6.0@sha256:2237b01c47e58816542cf28b10aae909dd2f64540fcc2ee2ad3d6b5d9479b45c
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/etherpad:version-1.8.14@sha256:4900f0e787ca22cf93090ae44ecceb5689d4427c739e1eb637a6e3a913161bf8**

#### Container: tccr.io/truecharts/etherpad:version-1.8.14@sha256:4900f0e787ca22cf93090ae44ecceb5689d4427c739e1eb637a6e3a913161bf8 (alpine 3.14.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.12.5-r1 | 2.12.6-r0 |
| busybox         |    CVE-2021-42378   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42379   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42380   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42381   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42382   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42383   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42384   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42385   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2021-42386   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| busybox         |    CVE-2022-28391   |   HIGH  |  1.33.1-r2 | 1.33.1-r7 |
| busybox         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r4 |
| busybox         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r5 |
| c-ares         |    CVE-2021-3672   |   MEDIUM  |  1.17.1-r1 | 1.17.2-r0 |
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3-r0 | 3.3.3p1-r3 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| nodejs         |    CVE-2021-22930   |   CRITICAL  |  14.17.1-r0 | 14.17.4-r0 |
| nodejs         |    CVE-2021-22931   |   CRITICAL  |  14.17.1-r0 | 14.17.5-r0 |
| nodejs         |    CVE-2022-35256   |   CRITICAL  |  14.17.1-r0 | 14.20.1-r0 |
| nodejs         |    CVE-2021-37701   |   HIGH  |  14.17.1-r0 | 14.17.6-r0 |
| nodejs         |    CVE-2021-37712   |   HIGH  |  14.17.1-r0 | 14.17.6-r0 |
| nodejs         |    CVE-2021-37713   |   HIGH  |  14.17.1-r0 | 14.17.6-r0 |
| nodejs         |    CVE-2021-39134   |   HIGH  |  14.17.1-r0 | 14.17.6-r0 |
| nodejs         |    CVE-2021-39135   |   HIGH  |  14.17.1-r0 | 14.17.6-r0 |
| nodejs         |    CVE-2021-44531   |   HIGH  |  14.17.1-r0 | 14.19.0-r0 |
| nodejs         |    CVE-2022-21824   |   HIGH  |  14.17.1-r0 | 14.19.0-r0 |
| nodejs         |    CVE-2021-22918   |   MEDIUM  |  14.17.1-r0 | 14.17.3-r0 |
| nodejs         |    CVE-2021-22939   |   MEDIUM  |  14.17.1-r0 | 14.17.5-r0 |
| nodejs         |    CVE-2021-22959   |   MEDIUM  |  14.17.1-r0 | 14.18.1-r0 |
| nodejs         |    CVE-2021-22960   |   MEDIUM  |  14.17.1-r0 | 14.18.1-r0 |
| nodejs         |    CVE-2021-3672   |   MEDIUM  |  14.17.1-r0 | 14.17.5-r0 |
| nodejs         |    CVE-2021-44532   |   MEDIUM  |  14.17.1-r0 | 14.19.0-r0 |
| nodejs         |    CVE-2021-44533   |   MEDIUM  |  14.17.1-r0 | 14.19.0-r0 |
| nodejs         |    CVE-2022-32213   |   MEDIUM  |  14.17.1-r0 | 14.20.1-r0 |
| nodejs         |    CVE-2022-32214   |   MEDIUM  |  14.17.1-r0 | 14.20.1-r0 |
| nodejs         |    CVE-2022-32215   |   MEDIUM  |  14.17.1-r0 | 14.20.1-r0 |
| ssl_client         |    CVE-2021-42378   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42379   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42380   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42381   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42382   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42383   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42384   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42385   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2021-42386   |   HIGH  |  1.33.1-r2 | 1.33.1-r6 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.33.1-r2 | 1.33.1-r7 |
| ssl_client         |    CVE-2021-42374   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r4 |
| ssl_client         |    CVE-2021-42375   |   MEDIUM  |  1.33.1-r2 | 1.33.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| async         |    CVE-2021-43138   |   HIGH  |  2.6.3 | 2.6.4, 3.2.2 |
| async         |    CVE-2021-43138   |   HIGH  |  3.2.0 | 2.6.4, 3.2.2 |
| axios         |    CVE-2021-3749   |   HIGH  |  0.21.1 | 0.21.2 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| ejs         |    CVE-2022-29078   |   CRITICAL  |  3.1.6 | 3.1.7 |
| engine.io         |    CVE-2020-36048   |   HIGH  |  3.5.0 | 3.6.0 |
| engine.io         |    CVE-2022-41940   |   MEDIUM  |  3.5.0 | 6.2.1, 3.6.1 |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.14.1 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.14.1 | 1.14.8 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| log4js         |    CVE-2022-21704   |   MEDIUM  |  0.6.38 | 6.4.0 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| node-fetch         |    CVE-2022-0235   |   HIGH  |  2.6.1 | 2.6.7, 3.1.1 |
| nth-check         |    CVE-2021-3803   |   HIGH  |  1.0.2 | 2.0.1 |
| path-parse         |    CVE-2021-23343   |   MEDIUM  |  1.0.6 | 1.0.7 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.10.1 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| simple-git         |    CVE-2022-24066   |   HIGH  |  2.40.0 | 3.5.0 |
| simple-git         |    CVE-2022-24433   |   HIGH  |  2.40.0 | 3.3.0 |
| simple-git         |    CVE-2022-25912   |   HIGH  |  2.40.0 | 3.15.0 |
| socket.io-parser         |    CVE-2022-2421   |   CRITICAL  |  3.3.2 | 3.4.2, 3.3.3, 4.0.5, 4.2.1 |
| socket.io-parser         |    CVE-2022-2421   |   CRITICAL  |  3.4.1 | 3.4.2, 3.3.3, 4.0.5, 4.2.1 |
| tar         |    CVE-2021-32803   |   HIGH  |  4.4.13 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  4.4.13 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  4.4.13 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| terser         |    CVE-2022-25858   |   HIGH  |  4.8.0 | 5.14.2, 4.8.1 |
| xmldom         |    CVE-2022-39353   |   CRITICAL  |  0.6.0 |  |
| xmldom         |    CVE-2021-32796   |   MEDIUM  |  0.6.0 | 0.7.0 |

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

