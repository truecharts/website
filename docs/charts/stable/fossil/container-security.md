# Container Security

##### Detected Containers

          tccr.io/truecharts/fossil:v2.15.1-ls4@sha256:5894297e0c90a431a7e93382054ac120e10860c132fce1ac35467c74c900e330
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/fossil:v2.15.1-ls4@sha256:5894297e0c90a431a7e93382054ac120e10860c132fce1ac35467c74c900e330**

#### Container: tccr.io/truecharts/fossil:v2.15.1-ls4@sha256:5894297e0c90a431a7e93382054ac120e10860c132fce1ac35467c74c900e330 (alpine 3.13)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.12.5-r0 | 2.12.6-r0 |
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
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
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

