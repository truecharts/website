# Container Security

##### Detected Containers

          tccr.io/truecharts/appdaemon:v4.2.1@sha256:e9c2639389084bd3ea7b272d5239cf6da7b5e3eb49069bbcafd002e551681dda
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/appdaemon:v4.2.1@sha256:e9c2639389084bd3ea7b272d5239cf6da7b5e3eb49069bbcafd002e551681dda**

#### Container: tccr.io/truecharts/appdaemon:v4.2.1@sha256:e9c2639389084bd3ea7b272d5239cf6da7b5e3eb49069bbcafd002e551681dda (alpine 3.15.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r4 |
| curl         |    CVE-2022-42915   |   CRITICAL  |  7.80.0-r0 | 7.80.0-r4 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.80.0-r0 | 7.80.0-r1 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.80.0-r0 | 7.80.0-r1 |
| curl         |    CVE-2022-27780   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-42916   |   HIGH  |  7.80.0-r0 | 7.80.0-r4 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.80.0-r0 | 7.80.0-r5 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r1 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r1 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r2 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.80.0-r0 | 7.80.0-r5 |
| curl         |    CVE-2022-35252   |   LOW  |  7.80.0-r0 | 7.80.0-r3 |
| expat         |    CVE-2022-22822   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22823   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22824   |   CRITICAL  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-23852   |   CRITICAL  |  2.4.1-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25235   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25236   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-25315   |   CRITICAL  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.1-r0 | 2.4.9-r0 |
| expat         |    CVE-2021-45960   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2021-46143   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22825   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22826   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-22827   |   HIGH  |  2.4.1-r0 | 2.4.3-r0 |
| expat         |    CVE-2022-23990   |   HIGH  |  2.4.1-r0 | 2.4.4-r0 |
| expat         |    CVE-2022-25314   |   HIGH  |  2.4.1-r0 | 2.4.5-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.1-r0 | 2.5.0-r0 |
| expat         |    CVE-2022-25313   |   MEDIUM  |  2.4.1-r0 | 2.4.5-r0 |
| gmp         |    CVE-2021-43618   |   HIGH  |  6.2.1-r0 | 6.2.1-r1 |
| krb5-libs         |    CVE-2021-37750   |   MEDIUM  |  1.19.2-r4 | 1.19.3-r0 |
| krb5-libs         |    CVE-2022-42898   |   MEDIUM  |  1.19.2-r4 | 1.19.4-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
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
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
| libtirpc         |    CVE-2021-46828   |   HIGH  |  1.3.2-r0 | 1.3.2-r1 |
| libtirpc-conf         |    CVE-2021-46828   |   HIGH  |  1.3.2-r0 | 1.3.2-r1 |
| libuuid         |    CVE-2021-3995   |   MEDIUM  |  2.37.2-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2021-3996   |   MEDIUM  |  2.37.2-r1 | 2.37.3-r0 |
| libuuid         |    CVE-2022-0563   |   MEDIUM  |  2.37.2-r1 | 2.37.4-r0 |
| libxml2         |    CVE-2022-2309   |   HIGH  |  2.9.12-r2 | 2.9.14-r1 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.12-r2 | 2.9.13-r0 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.12-r2 | 2.9.14-r2 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.12-r2 | 2.9.14-r2 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.12-r2 | 2.9.14-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.3_p20211120-r0 | 6.3_p20211120-r1 |
| openssl-dev         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| openssl-dev         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2021.10.8 | 2022.12.07 |
| oauthlib         |    CVE-2022-36087   |   MEDIUM  |  3.1.1 | 3.2.1 |
| pycares         |    GHSA-c58j-88f5-h53f   |   MEDIUM  |  4.1.2 | 4.2.0 |

**cargo**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ammonia         |    GHSA-p2g9-94wh-65c2   |   MEDIUM  |  3.1.0 | 3.1.3 |
| cargo         |    CVE-2022-36114   |   MEDIUM  |  0.57.0 | 0.65.0 |
| cargo         |    CVE-2022-36113   |   LOW  |  0.57.0 | 0.65.0 |
| crossbeam-utils         |    CVE-2022-23639   |   HIGH  |  0.7.2 | 0.8.7 |
| crossbeam-utils         |    CVE-2022-23639   |   HIGH  |  0.8.3 | 0.8.7 |
| lock_api         |    CVE-2020-35910   |   MEDIUM  |  0.4.1 | 0.4.2 |
| lock_api         |    CVE-2020-35911   |   MEDIUM  |  0.4.1 | 0.4.2 |
| lock_api         |    CVE-2020-35912   |   MEDIUM  |  0.4.1 | 0.4.2 |
| lock_api         |    CVE-2020-35913   |   MEDIUM  |  0.4.1 | 0.4.2 |
| lock_api         |    CVE-2020-35914   |   MEDIUM  |  0.4.1 | 0.4.2 |
| openssl-src         |    CVE-2022-0778   |   HIGH  |  111.16.0+1.1.1l | 111.18, 300.0.5 |
| openssl-src         |    CVE-2022-2097   |   HIGH  |  111.16.0+1.1.1l | 300.0.9, 111.22 |
| regex         |    CVE-2022-24713   |   HIGH  |  1.4.6 | 1.5.5 |
| thread_local         |    GHSA-9hpw-r23r-xgm5   |   HIGH  |  1.0.1 | 1.1.4 |
| time         |    CVE-2020-26235   |   MEDIUM  |  0.1.43 | 0.2.23 |
| tokio         |    CVE-2021-45710   |   HIGH  |  1.8.2 | 1.13.1, 1.8.4 |
| yaml-rust         |    CVE-2018-20993   |   HIGH  |  0.3.5 | 0.4.1 |

**cargo**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| cranelift-codegen         |    CVE-2022-31104   |   MEDIUM  |  0.75.0 | 0.85.1 |
| cranelift-codegen         |    CVE-2022-31169   |   MEDIUM  |  0.75.0 | 0.85.2 |

