# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/kutt:v2.7.4@sha256:abd3d365db5416e009f532c50456cacbd1f93c8a2eb9ef9da468e383dc4a49c6
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/kutt:v2.7.4@sha256:abd3d365db5416e009f532c50456cacbd1f93c8a2eb9ef9da468e383dc4a49c6**

#### Container: tccr.io/truecharts/kutt:v2.7.4@sha256:abd3d365db5416e009f532c50456cacbd1f93c8a2eb9ef9da468e383dc4a49c6 (alpine 3.15.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.4-r2 | 3.3.4-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ajv         |    CVE-2020-15366   |   MEDIUM  |  5.5.2 | 6.12.3 |
| ajv         |    CVE-2020-15366   |   MEDIUM  |  6.10.0 | 6.12.3 |
| ajv         |    CVE-2020-15366   |   MEDIUM  |  6.11.0 | 6.12.3 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  5.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| async         |    CVE-2021-43138   |   HIGH  |  2.6.3 | 2.6.4, 3.2.2 |
| async         |    CVE-2021-43138   |   HIGH  |  3.2.0 | 2.6.4, 3.2.2 |
| axios         |    CVE-2021-3749   |   HIGH  |  0.21.1 | 0.21.2 |
| braces         |    CVE-2018-1109   |   LOW  |  1.8.5 | 2.3.1 |
| braces         |    GHSA-g95f-p29q-9xw4   |   LOW  |  1.8.5 | 2.3.1 |
| browserslist         |    CVE-2021-23364   |   MEDIUM  |  4.12.0 | 4.16.5 |
| browserslist         |    CVE-2021-23364   |   MEDIUM  |  4.16.3 | 4.16.5 |
| browserslist         |    CVE-2021-23364   |   MEDIUM  |  4.8.3 | 4.16.5 |
| color-string         |    CVE-2021-29060   |   MEDIUM  |  1.5.3 | 1.5.5 |
| cross-fetch         |    CVE-2022-1365   |   MEDIUM  |  3.0.5 | 2.2.6, 3.1.5 |
| d3-color         |    GHSA-36jr-mh4h-2g58   |   HIGH  |  1.4.0 | 3.1.0 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| dompurify         |    CVE-2020-26870   |   MEDIUM  |  2.0.8 | 2.0.17 |
| dot-prop         |    CVE-2020-8116   |   HIGH  |  4.2.0 | 5.1.1, 4.2.1 |
| elliptic         |    CVE-2020-28498   |   MEDIUM  |  6.5.3 | 6.5.4 |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.13.3 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.13.3 | 1.14.8 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  2.0.0 | 5.1.2 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  3.1.0 | 5.1.2 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  5.1.1 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| hosted-git-info         |    CVE-2021-23362   |   MEDIUM  |  2.7.1 | 2.8.9, 3.0.8 |
| immer         |    CVE-2021-23436   |   CRITICAL  |  8.0.1 | 9.0.6 |
| immer         |    CVE-2021-3757   |   HIGH  |  8.0.1 | 9.0.6 |
| ini         |    CVE-2020-7788   |   HIGH  |  1.3.5 | 1.3.6 |
| is-svg         |    CVE-2021-28092   |   HIGH  |  3.0.0 | 4.2.2 |
| is-svg         |    CVE-2021-29059   |   HIGH  |  3.0.0 | 4.3.0 |
| js-yaml         |    GHSA-8j8c-7jfh-h6hx   |   HIGH  |  3.7.0 | 3.13.1 |
| js-yaml         |    GHSA-2pr6-76vf-7546   |   MEDIUM  |  3.7.0 | 3.13.0 |
| jsdom         |    CVE-2021-20066   |   MEDIUM  |  16.4.0 | 16.5.0 |
| json-pointer         |    CVE-2020-7709   |   MEDIUM  |  0.6.0 | 0.6.1 |
| json-pointer         |    CVE-2021-23820   |   MEDIUM  |  0.6.0 | 0.6.2 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| jsonpointer         |    CVE-2021-23807   |   MEDIUM  |  4.0.1 | 5.0.0 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| kind-of         |    CVE-2019-20149   |   HIGH  |  6.0.2 | 6.0.3 |
| knex         |    CVE-2016-20018   |   HIGH  |  0.21.1 |  |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  1.2.3 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  1.2.3 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  1.2.3 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  1.4.0 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  2.0.0 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  2.0.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  2.0.0 | 3.2.1, 2.0.4, 1.4.2 |
| lodash         |    CVE-2020-8203   |   HIGH  |  4.17.15 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.15 | 4.17.21 |
| lodash         |    NSWG-ECO-516   |   HIGH  |  4.17.15 | &gt;=4.17.19 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.15 | 4.17.21 |
| lodash         |    CVE-2020-8203   |   HIGH  |  4.17.19 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.19 | 4.17.21 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.19 | 4.17.21 |
| marked         |    CVE-2022-21680   |   HIGH  |  0.7.0 | 4.0.10 |
| marked         |    CVE-2022-21681   |   HIGH  |  0.7.0 | 4.0.10 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  0.0.8 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  0.0.8 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.0 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  1.2.0 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.24.0 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.24.0 | 2.29.4 |
| moment-timezone         |    GHSA-v78c-4p63-2j6c   |   MEDIUM  |  0.5.27 | 0.5.35 |
| moment-timezone         |    GHSA-56x4-j7p9-fcf9   |   LOW  |  0.5.27 | 0.5.35 |
| next         |    CVE-2021-43803   |   HIGH  |  9.4.4 | 11.1.3, 12.0.5 |
| next         |    CVE-2021-37699   |   MEDIUM  |  9.4.4 | 11.1.0 |
| node-fetch         |    CVE-2022-0235   |   HIGH  |  2.6.0 | 2.6.7, 3.1.1 |
| node-fetch         |    CVE-2020-15168   |   LOW  |  2.6.0 | 3.0.0-beta.9, 2.6.1 |
| nodemailer         |    CVE-2020-7769   |   CRITICAL  |  6.4.2 | 6.4.16 |
| nodemailer         |    CVE-2021-23400   |   MEDIUM  |  6.4.2 | 6.6.1 |
| nth-check         |    CVE-2021-3803   |   HIGH  |  1.0.2 | 2.0.1 |
| object-path         |    CVE-2020-15256   |   HIGH  |  0.11.4 | 0.11.5 |
| object-path         |    CVE-2021-3805   |   HIGH  |  0.11.4 | 0.11.8 |
| object-path         |    CVE-2021-23434   |   MEDIUM  |  0.11.4 | 0.11.6 |
| passport         |    CVE-2022-25896   |   MEDIUM  |  0.4.1 | 0.6.0 |
| path-parse         |    CVE-2021-23343   |   MEDIUM  |  1.0.6 | 1.0.7 |
| postcss         |    CVE-2021-23368   |   MEDIUM  |  7.0.21 | 8.2.10, 7.0.36 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  7.0.21 | 7.0.36, 8.2.13 |
| postcss         |    CVE-2021-23368   |   MEDIUM  |  7.0.29 | 8.2.10, 7.0.36 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  7.0.29 | 7.0.36, 8.2.13 |
| postcss         |    CVE-2021-23368   |   MEDIUM  |  7.0.32 | 8.2.10, 7.0.36 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  7.0.32 | 7.0.36, 8.2.13 |
| prismjs         |    CVE-2020-15138   |   HIGH  |  1.19.0 | 1.21.0 |
| prismjs         |    CVE-2021-23341   |   HIGH  |  1.19.0 | 1.23.0 |
| prismjs         |    CVE-2021-32723   |   HIGH  |  1.19.0 | 1.24.0 |
| prismjs         |    CVE-2022-23647   |   HIGH  |  1.19.0 | 1.27.0 |
| prismjs         |    CVE-2021-3801   |   MEDIUM  |  1.19.0 | 1.25.0 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| redis         |    CVE-2021-29469   |   HIGH  |  3.1.0 | 3.1.1 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.7.2 | 1.7.3 |
| ssri         |    CVE-2021-27290   |   HIGH  |  7.1.0 | 8.0.1, 7.1.1, 6.0.2 |
| terser         |    CVE-2022-25858   |   HIGH  |  4.6.13 | 5.14.2, 4.8.1 |
| tmpl         |    CVE-2021-3777   |   HIGH  |  1.0.4 | 1.0.5 |
| undefsafe         |    CVE-2019-10795   |   MEDIUM  |  2.0.2 | 2.0.3 |
| url-regex         |    CVE-2020-7661   |   HIGH  |  4.1.1 |  |
| validator         |    CVE-2021-3765   |   MEDIUM  |  11.1.0 | 13.7.0 |
| validator         |    GHSA-xx4c-jj58-r7x6   |   MEDIUM  |  11.1.0 | 13.7.0 |
| validator         |    CVE-2021-3765   |   MEDIUM  |  12.1.0 | 13.7.0 |
| validator         |    GHSA-xx4c-jj58-r7x6   |   MEDIUM  |  12.1.0 | 13.7.0 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  7.4.3 | 5.2.3, 6.2.2, 7.4.6 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  11.1.1 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  13.1.1 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |

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

