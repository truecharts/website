# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/dailynotes:latest@sha256:2fb4e6f3e031c83420f3d87ea174550495c348cc8bd08672da5658dd3e38df05
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/dailynotes:latest@sha256:2fb4e6f3e031c83420f3d87ea174550495c348cc8bd08672da5658dd3e38df05**

#### Container: tccr.io/truecharts/dailynotes:latest@sha256:2fb4e6f3e031c83420f3d87ea174550495c348cc8bd08672da5658dd3e38df05 (alpine 3.15.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.4.3-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.4.3-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.4.3-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.4.3-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.3-r0 | 2.4.9-r0 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.4.3-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.4.3-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.3-r0 | 2.5.0-r0 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.4.3-r0 | 2.4.5-r0 |
| krb5-libs         |    CVE-2021-37750   |   MEDIUM  |  1.19.2-r4 | 1.19.3-r0 |
| krb5-libs         |    CVE-2022-42898   |   MEDIUM  |  1.19.2-r4 | 1.19.4-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.4-r2 | 3.3.4-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
| libtirpc         |    CVE-2021-46828   |   HIGH  |  1.3.2-r0 | 1.3.2-r1 |
| libtirpc-conf         |    CVE-2021-46828   |   HIGH  |  1.3.2-r0 | 1.3.2-r1 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.37.2-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.37.2-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.37.2-r1 | 2.37.4-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| @hapi/hoek         |    CVE-2020-36604   |   HIGH  |  8.5.0 | 9.0.3, 8.5.1 |
| @hapi/hoek         |    GHSA-22h7-7wwg-qmgg   |   LOW  |  8.5.0 | 9.0.3, 8.5.1 |
| acorn         |    GHSA-6chw-6frg-f759   |   HIGH  |  5.7.3 | 5.7.4, 7.1.1, 6.4.1 |
| acorn         |    GHSA-6chw-6frg-f759   |   HIGH  |  6.4.0 | 5.7.4, 7.1.1, 6.4.1 |
| acorn         |    GHSA-6chw-6frg-f759   |   HIGH  |  7.1.0 | 5.7.4, 7.1.1, 6.4.1 |
| ajv         |    CVE-2020-15366   |   MEDIUM  |  6.10.2 | 6.12.3 |
| ansi-html         |    CVE-2021-23424   |   HIGH  |  0.0.7 | 0.0.8 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  4.1.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  5.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| async         |    CVE-2021-43138   |   HIGH  |  2.6.3 | 2.6.4, 3.2.2 |
| axios         |    CVE-2021-3749   |   HIGH  |  0.21.1 | 0.21.2 |
| browserslist         |    CVE-2021-23364   |   MEDIUM  |  4.8.2 | 4.16.5 |
| codemirror         |    CVE-2020-7760   |   MEDIUM  |  5.50.2 | 5.58.2 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| dns-packet         |    CVE-2021-23386   |   HIGH  |  1.3.1 | 1.3.2, 5.2.2 |
| dot-prop         |    CVE-2020-8116   |   HIGH  |  4.2.0 | 5.1.1, 4.2.1 |
| ejs         |    CVE-2022-29078   |   CRITICAL  |  2.7.4 | 3.1.7 |
| elliptic         |    CVE-2020-13822   |   HIGH  |  6.5.2 | 6.5.3 |
| elliptic         |    CVE-2020-28498   |   MEDIUM  |  6.5.2 | 6.5.4 |
| eventsource         |    CVE-2022-1650   |   CRITICAL  |  1.0.7 | 2.0.2, 1.1.1 |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.13.1 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.13.1 | 1.14.8 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.9.0 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.9.0 | 1.14.8 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  3.1.0 | 5.1.2 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  5.1.0 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| handlebars         |    CVE-2021-23369   |   CRITICAL  |  4.5.3 | 4.7.7 |
| handlebars         |    CVE-2021-23383   |   CRITICAL  |  4.5.3 | 4.7.7 |
| handlebars         |    NSWG-ECO-519   |   MEDIUM  |  4.5.3 | &gt;=4.6.0 |
| highlight.js         |    CVE-2020-26237   |   MEDIUM  |  9.17.1 | 10.1.2, 9.18.2 |
| highlight.js         |    GHSA-7wwv-vh3v-89cq   |   MEDIUM  |  9.17.1 | 10.4.1 |
| hosted-git-info         |    CVE-2021-23362   |   MEDIUM  |  2.8.5 | 2.8.9, 3.0.8 |
| http-proxy         |    GHSA-6x33-pw7p-hmpq   |   HIGH  |  1.18.0 | 1.18.1 |
| ini         |    CVE-2020-7788   |   HIGH  |  1.3.5 | 1.3.6 |
| is-svg         |    CVE-2021-28092   |   HIGH  |  3.0.0 | 4.2.2 |
| is-svg         |    CVE-2021-29059   |   HIGH  |  3.0.0 | 4.3.0 |
| jsdom         |    CVE-2021-20066   |   MEDIUM  |  11.12.0 | 16.5.0 |
| jsdom         |    CVE-2021-20066   |   MEDIUM  |  15.2.1 | 16.5.0 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| kind-of         |    CVE-2019-20149   |   HIGH  |  6.0.2 | 6.0.3 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  0.2.17 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  1.2.3 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  1.2.3 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  1.2.3 | 3.2.1, 2.0.4, 1.4.2 |
| lodash         |    CVE-2020-8203   |   HIGH  |  4.17.15 | 4.17.20 |
| lodash         |    CVE-2021-23337   |   HIGH  |  4.17.15 | 4.17.21 |
| lodash         |    NSWG-ECO-516   |   HIGH  |  4.17.15 | &gt;=4.17.19 |
| lodash         |    CVE-2020-28500   |   MEDIUM  |  4.17.15 | 4.17.21 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  0.0.8 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  0.0.8 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.0 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  1.2.0 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| node-forge         |    CVE-2020-7720   |   HIGH  |  0.9.0 | 0.10.0 |
| node-forge         |    CVE-2022-24771   |   HIGH  |  0.9.0 | 1.3.0 |
| node-forge         |    CVE-2022-24772   |   HIGH  |  0.9.0 | 1.3.0 |
| node-forge         |    CVE-2022-0122   |   MEDIUM  |  0.9.0 | 1.0.0 |
| node-forge         |    CVE-2022-24773   |   MEDIUM  |  0.9.0 | 1.3.0 |
| node-forge         |    GHSA-5rrq-pxf6-6jx5   |   LOW  |  0.9.0 | 1.0.0 |
| node-forge         |    GHSA-gf8q-jrpm-jvxq   |   LOW  |  0.9.0 | 1.0.0 |
| node-forge         |    GHSA-wxgw-qj99-44c2   |   LOW  |  0.9.0 | 0.10.0 |
| node-notifier         |    CVE-2020-7789   |   MEDIUM  |  5.4.3 | 8.0.1 |
| node-sass         |    CVE-2020-24025   |   MEDIUM  |  4.13.0 | 7.0.0 |
| node-sass         |    GHSA-9v62-24cr-58cx   |   MEDIUM  |  4.13.0 | 4.13.1 |
| nth-check         |    CVE-2021-3803   |   HIGH  |  1.0.2 | 2.0.1 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| scss-tokenizer         |    CVE-2022-25758   |   HIGH  |  0.2.3 | 0.4.3 |
| serialize-javascript         |    CVE-2020-7660   |   HIGH  |  2.1.2 | 3.1.0 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.7.2 | 1.7.3 |
| sockjs         |    CVE-2020-7693   |   MEDIUM  |  0.3.19 | 0.3.20 |
| ssri         |    CVE-2021-27290   |   HIGH  |  6.0.1 | 8.0.1, 7.1.1, 6.0.2 |
| ssri         |    CVE-2021-27290   |   HIGH  |  7.1.0 | 8.0.1, 7.1.1, 6.0.2 |
| tar         |    CVE-2021-32803   |   HIGH  |  2.2.2 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  2.2.2 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  2.2.2 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-32803   |   HIGH  |  4.4.13 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  4.4.13 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  4.4.13 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  4.4.13 | 6.1.9, 5.0.10, 4.4.18 |
| terser         |    CVE-2022-25858   |   HIGH  |  4.5.1 | 5.14.2, 4.8.1 |
| thenify         |    CVE-2020-7677   |   CRITICAL  |  3.3.0 | 3.3.1 |
| trim-newlines         |    CVE-2021-33623   |   HIGH  |  1.0.0 | 4.0.1, 3.0.1 |
| url-parse         |    CVE-2022-0686   |   CRITICAL  |  1.5.3 | 1.5.8 |
| url-parse         |    CVE-2022-0512   |   MEDIUM  |  1.5.3 | 1.5.6 |
| url-parse         |    CVE-2022-0639   |   MEDIUM  |  1.5.3 | 1.5.7 |
| url-parse         |    CVE-2022-0691   |   MEDIUM  |  1.5.3 | 1.5.9 |
| websocket-extensions         |    CVE-2020-7662   |   HIGH  |  0.1.3 | 0.1.4 |
| y18n         |    CVE-2020-7774   |   HIGH  |  3.2.1 | 5.0.5, 4.0.1, 3.2.2 |
| y18n         |    CVE-2020-7774   |   HIGH  |  4.0.0 | 5.0.5, 4.0.1, 3.2.2 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  10.1.0 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  11.1.1 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  13.1.1 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  16.1.0 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |
| yargs-parser         |    CVE-2020-7608   |   MEDIUM  |  5.0.0 | 18.1.1, 5.0.1, 13.1.2, 15.0.1 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Mako         |    CVE-2022-40023   |   HIGH  |  1.1.6 | 1.2.2 |
| PyJWT         |    CVE-2022-29217   |   HIGH  |  2.3.0 | 2.4.0 |
| Werkzeug         |    CVE-2022-29361   |   CRITICAL  |  2.0.3 | 2.1.1 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2021.10.8 | 2022.12.07 |
| cleo         |    CVE-2022-42966   |   MEDIUM  |  0.8.1 | 1.0.0 |
| pycrypto         |    CVE-2013-7459   |   CRITICAL  |  2.6.1 |  |
| pycrypto         |    CVE-2018-6594   |   HIGH  |  2.6.1 |  |

