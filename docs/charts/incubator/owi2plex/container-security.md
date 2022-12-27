# Container Security

##### Detected Containers

          tccr.io/truecharts/owi2plex:latest@sha256:e20dc6855b85a8fc8f265901f544ea92404d29daa3f0da0aac2620f0fa2daded
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/owi2plex:latest@sha256:e20dc6855b85a8fc8f265901f544ea92404d29daa3f0da0aac2620f0fa2daded**

#### Container: tccr.io/truecharts/owi2plex:latest@sha256:e20dc6855b85a8fc8f265901f544ea92404d29daa3f0da0aac2620f0fa2daded (alpine 3.10.3)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.10.4-r2 | 2.10.7-r0 |
| apk-tools         |    CVE-2021-30139   |   HIGH  |  2.10.4-r2 | 2.10.6-r0 |
| binutils         |    CVE-2021-3487   |   MEDIUM  |  2.32-r0 | 2.33.1-r1 |
| busybox         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |
| busybox-suid         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |
| curl         |    CVE-2020-8169   |   HIGH  |  7.66.0-r0 | 7.66.0-r1 |
| curl         |    CVE-2020-8177   |   HIGH  |  7.66.0-r0 | 7.66.0-r1 |
| curl         |    CVE-2020-8231   |   HIGH  |  7.66.0-r0 | 7.66.0-r2 |
| curl         |    CVE-2020-8285   |   HIGH  |  7.66.0-r0 | 7.66.0-r3 |
| curl         |    CVE-2020-8286   |   HIGH  |  7.66.0-r0 | 7.66.0-r3 |
| curl         |    CVE-2021-22898   |   LOW  |  7.66.0-r0 | 7.66.0-r4 |
| libcrypto1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r0 | 1.1.1g-r0 |
| libcrypto1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r0 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.1d-r0 | 1.1.1d-r2 |
| libcrypto1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r0 | 1.1.1i-r0 |
| libcrypto1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r0 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r0 | 1.1.1j-r0 |
| libcurl         |    CVE-2020-8169   |   HIGH  |  7.66.0-r0 | 7.66.0-r1 |
| libcurl         |    CVE-2020-8177   |   HIGH  |  7.66.0-r0 | 7.66.0-r1 |
| libcurl         |    CVE-2020-8231   |   HIGH  |  7.66.0-r0 | 7.66.0-r2 |
| libcurl         |    CVE-2020-8285   |   HIGH  |  7.66.0-r0 | 7.66.0-r3 |
| libcurl         |    CVE-2020-8286   |   HIGH  |  7.66.0-r0 | 7.66.0-r3 |
| libcurl         |    CVE-2021-22898   |   LOW  |  7.66.0-r0 | 7.66.0-r4 |
| libssl1.1         |    CVE-2020-1967   |   HIGH  |  1.1.1d-r0 | 1.1.1g-r0 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1d-r0 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1d-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2019-1551   |   MEDIUM  |  1.1.1d-r0 | 1.1.1d-r2 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1d-r0 | 1.1.1i-r0 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1d-r0 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2021-23839   |   LOW  |  1.1.1d-r0 | 1.1.1j-r0 |
| libxml2         |    CVE-2019-19956   |   HIGH  |  2.9.9-r2 | 2.9.9-r3 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.9-r2 | 2.9.9-r5 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.9-r2 | 2.9.9-r5 |
| libxml2         |    CVE-2020-24977   |   MEDIUM  |  2.9.9-r2 | 2.9.9-r4 |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r2 | 2.9.9-r5 |
| libxml2-dev         |    CVE-2019-19956   |   HIGH  |  2.9.9-r2 | 2.9.9-r3 |
| libxml2-dev         |    CVE-2021-3517   |   HIGH  |  2.9.9-r2 | 2.9.9-r5 |
| libxml2-dev         |    CVE-2021-3518   |   HIGH  |  2.9.9-r2 | 2.9.9-r5 |
| libxml2-dev         |    CVE-2020-24977   |   MEDIUM  |  2.9.9-r2 | 2.9.9-r4 |
| libxml2-dev         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r2 | 2.9.9-r5 |
| libxslt         |    CVE-2019-13117   |   HIGH  |  1.1.33-r2 | 1.1.33-r3 |
| libxslt         |    CVE-2019-13118   |   HIGH  |  1.1.33-r2 | 1.1.33-r3 |
| libxslt-dev         |    CVE-2019-13117   |   HIGH  |  1.1.33-r2 | 1.1.33-r3 |
| libxslt-dev         |    CVE-2019-13118   |   HIGH  |  1.1.33-r2 | 1.1.33-r3 |
| musl         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| musl-dev         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| musl-utils         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| nghttp2-libs         |    CVE-2020-11080   |   HIGH  |  1.39.2-r0 | 1.39.2-r1 |
| python3         |    CVE-2021-3177   |   CRITICAL  |  3.7.5-r1 | 3.7.7-r2 |
| python3         |    CVE-2020-14422   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r1 |
| python3         |    CVE-2020-8315   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| python3         |    CVE-2020-8492   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| python3-dev         |    CVE-2021-3177   |   CRITICAL  |  3.7.5-r1 | 3.7.7-r2 |
| python3-dev         |    CVE-2020-14422   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r1 |
| python3-dev         |    CVE-2020-8315   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| python3-dev         |    CVE-2020-8492   |   MEDIUM  |  3.7.5-r1 | 3.7.7-r0 |
| sqlite-libs         |    CVE-2019-19244   |   HIGH  |  3.28.0-r1 | 3.28.0-r2 |
| sqlite-libs         |    CVE-2020-11655   |   HIGH  |  3.28.0-r1 | 3.28.0-r3 |
| sqlite-libs         |    CVE-2019-19242   |   MEDIUM  |  3.28.0-r1 | 3.28.0-r2 |
| ssl_client         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| PyYAML         |    CVE-2019-20477   |   CRITICAL  |  5.1.2 | 5.2b1 |
| PyYAML         |    CVE-2020-14343   |   CRITICAL  |  5.1.2 | 5.4 |
| PyYAML         |    CVE-2020-1747   |   CRITICAL  |  5.1.2 | 5.3.1 |
| certifi         |    CVE-2022-23491   |   MEDIUM  |  2019.11.28 | 2022.12.07 |
| lxml         |    CVE-2021-43818   |   HIGH  |  4.3.2 | 4.6.5 |
| lxml         |    CVE-2022-2309   |   HIGH  |  4.3.2 | 4.9.1 |
| lxml         |    CVE-2020-27783   |   MEDIUM  |  4.3.2 | 4.6.2 |
| lxml         |    CVE-2021-28957   |   MEDIUM  |  4.3.2 | 4.6.3 |
| urllib3         |    CVE-2021-33503   |   HIGH  |  1.24.3 | 1.26.5 |
| urllib3         |    CVE-2020-26137   |   MEDIUM  |  1.24.3 | 1.25.9 |

