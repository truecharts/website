# Container Security

##### Detected Containers

          tccr.io/truecharts/novnc:version-1.2.0@sha256:aac782a823a7c34efce17d635a706cf967c6690784f0da9bd8efd4bb0bb598c1
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/novnc:version-1.2.0@sha256:aac782a823a7c34efce17d635a706cf967c6690784f0da9bd8efd4bb0bb598c1**

#### Container: tccr.io/truecharts/novnc:version-1.2.0@sha256:aac782a823a7c34efce17d635a706cf967c6690784f0da9bd8efd4bb0bb598c1 (alpine 3.14)
    

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
| libcrypto1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3-r0 | 3.3.3p1-r3 |
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1k-r0 | 1.1.1l-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-r0 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| python3         |    CVE-2022-45061   |   HIGH  |  3.9.5-r1 | 3.9.16-r0 |
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
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

