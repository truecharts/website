# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/flame:v2.3.0@sha256:1e4cfbb4a7cd8039b8a80106d84c6239852d497556c1c6883f16940234d7e55d
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/flame:v2.3.0@sha256:1e4cfbb4a7cd8039b8a80106d84c6239852d497556c1c6883f16940234d7e55d**

#### Container: tccr.io/truecharts/flame:v2.3.0@sha256:1e4cfbb4a7cd8039b8a80106d84c6239852d497556c1c6883f16940234d7e55d (alpine 3.15.2)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r4 | 1.34.1-r5 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r4 | 1.34.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  5.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| dicer         |    CVE-2022-24434   |   HIGH  |  0.2.5 |  |
| express         |    CVE-2022-24999   |   HIGH  |  4.17.1 | 4.17.3 |
| follow-redirects         |    CVE-2022-0155   |   HIGH  |  1.14.5 | 1.14.7 |
| follow-redirects         |    CVE-2022-0536   |   MEDIUM  |  1.14.5 | 1.14.8 |
| got         |    CVE-2022-33987   |   MEDIUM  |  11.8.2 | 11.8.5, 12.1.0 |
| jose         |    CVE-2022-36083   |   MEDIUM  |  2.0.5 | 4.9.2, 3.20.4, 2.0.6, 1.28.2 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |
| moment         |    CVE-2022-24785   |   HIGH  |  2.29.1 | 2.29.2 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.1 | 2.29.4 |
| moment-timezone         |    GHSA-v78c-4p63-2j6c   |   MEDIUM  |  0.5.33 | 0.5.35 |
| moment-timezone         |    GHSA-56x4-j7p9-fcf9   |   LOW  |  0.5.33 | 0.5.35 |
| npm         |    CVE-2022-29244   |   HIGH  |  8.5.0 | 8.11.0 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.7.0 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| shelljs         |    CVE-2022-0144   |   HIGH  |  0.8.4 | 0.8.5 |
| shelljs         |    GHSA-64g7-mvw6-v9qj   |   MEDIUM  |  0.8.4 | 0.8.5 |
| sqlite3         |    CVE-2022-21227   |   HIGH  |  5.0.2 | 5.0.3 |
| tar         |    CVE-2021-32803   |   HIGH  |  2.2.2 | 6.1.2, 5.0.7, 4.4.15, 3.2.3 |
| tar         |    CVE-2021-32804   |   HIGH  |  2.2.2 | 6.1.1, 5.0.6, 4.4.14, 3.2.2 |
| tar         |    CVE-2021-37701   |   HIGH  |  2.2.2 | 6.1.7, 5.0.8, 4.4.16 |
| tar         |    CVE-2021-37712   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |
| tar         |    CVE-2021-37713   |   HIGH  |  2.2.2 | 6.1.9, 5.0.10, 4.4.18 |

