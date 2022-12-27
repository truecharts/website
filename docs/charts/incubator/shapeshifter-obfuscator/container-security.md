# Container Security

##### Detected Containers

          tccr.io/truecharts/shapeshifter-obfuscator:latest@sha256:46a9873c9e1e36a4d43deb16fe3dc4425630d1dab9b3caf49de3d122133e87f9
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/shapeshifter-obfuscator:latest@sha256:46a9873c9e1e36a4d43deb16fe3dc4425630d1dab9b3caf49de3d122133e87f9**

#### Container: tccr.io/truecharts/shapeshifter-obfuscator:latest@sha256:46a9873c9e1e36a4d43deb16fe3dc4425630d1dab9b3caf49de3d122133e87f9 (alpine 3.15.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.6-r0 | 2.4.9-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.6-r0 | 2.5.0-r0 |
| git         |    CVE-2022-24765   |   HIGH  |  2.34.1-r0 | 2.34.2-r0 |
| git         |    CVE-2022-29187   |   HIGH  |  2.34.1-r0 | 2.34.4-r0 |
| git         |    CVE-2022-39260   |   HIGH  |  2.34.1-r0 | 2.34.5-r0 |
| git         |    CVE-2022-39253   |   MEDIUM  |  2.34.1-r0 | 2.34.5-r0 |
| go         |    CVE-2022-23806   |   CRITICAL  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2021-28327   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2021-44716   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2022-23772   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2022-23773   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2022-24675   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2022-24921   |   HIGH  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2021-44717   |   MEDIUM  |  1.17.4-r0 | 1.17.9-r0 |
| go         |    CVE-2021-27536   |   UNKNOWN  |  1.17.4-r0 | 1.17.9-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| libcurl         |    CVE-2022-32207   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-32221   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r4 |
| libcurl         |    CVE-2022-42915   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r4 |
| libcurl         |    CVE-2022-22576   |   HIGH  |  7.80.0-r0 | 7.80.0-r1 |
| libcurl         |    CVE-2022-27775   |   HIGH  |  7.80.0-r0 | 7.80.0-r1 |
| libcurl         |    CVE-2022-27780   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-27781   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-27782   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-42916   |   HIGH  |  7.80.0-r0 | 7.80.0-r4 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.80.0-r0 | 7.80.0-r5 |
| libcurl         |    CVE-2022-27774   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r1 |
| libcurl         |    CVE-2022-27776   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r1 |
| libcurl         |    CVE-2022-32205   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-32206   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-32208   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r5 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.80.0-r0 | 7.80.0-r3 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.4-r2 | 3.3.4-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| pcre2         |    CVE-2022-1586   |   CRITICAL  |  10.39-r0 | 10.40-r0 |
| pcre2         |    CVE-2022-1587   |   CRITICAL  |  10.39-r0 | 10.40-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210614182718-04defd469f4e | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210614182718-04defd469f4e | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210614182718-04defd469f4e | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.6 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.6 | 0.3.8 |

