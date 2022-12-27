# Container Security

##### Detected Containers

          tccr.io/truecharts/mailpile:latest@sha256:cdffabe895839b7bb3b50d5e66ddb58d2927ca4044590b25cfbf786658b9b99b
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/mailpile:latest@sha256:cdffabe895839b7bb3b50d5e66ddb58d2927ca4044590b25cfbf786658b9b99b**

#### Container: tccr.io/truecharts/mailpile:latest@sha256:cdffabe895839b7bb3b50d5e66ddb58d2927ca4044590b25cfbf786658b9b99b (alpine 3.10.5)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apk-tools         |    CVE-2021-36159   |   CRITICAL  |  2.10.4-r2 | 2.10.7-r0 |
| apk-tools         |    CVE-2021-30139   |   HIGH  |  2.10.4-r2 | 2.10.6-r0 |
| busybox         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |
| git         |    CVE-2021-21300   |   HIGH  |  2.22.4-r0 | 2.22.5-r0 |
| libcrypto1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1g-r0 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1g-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1g-r0 | 1.1.1i-r0 |
| libcrypto1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1g-r0 | 1.1.1j-r0 |
| libcrypto1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1g-r0 | 1.1.1k-r0 |
| libcrypto1.1         |    CVE-2021-23839   |   LOW  |  1.1.1g-r0 | 1.1.1j-r0 |
| libcurl         |    CVE-2020-8285   |   HIGH  |  7.66.0-r2 | 7.66.0-r3 |
| libcurl         |    CVE-2020-8286   |   HIGH  |  7.66.0-r2 | 7.66.0-r3 |
| libcurl         |    CVE-2021-22898   |   LOW  |  7.66.0-r2 | 7.66.0-r4 |
| libssl1.1         |    CVE-2021-23840   |   HIGH  |  1.1.1g-r0 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3450   |   HIGH  |  1.1.1g-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2020-1971   |   MEDIUM  |  1.1.1g-r0 | 1.1.1i-r0 |
| libssl1.1         |    CVE-2021-23841   |   MEDIUM  |  1.1.1g-r0 | 1.1.1j-r0 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1g-r0 | 1.1.1k-r0 |
| libssl1.1         |    CVE-2021-23839   |   LOW  |  1.1.1g-r0 | 1.1.1j-r0 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r4 | 2.9.9-r5 |
| musl         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| musl-utils         |    CVE-2020-28928   |   MEDIUM  |  1.1.22-r3 | 1.1.22-r4 |
| openssl         |    CVE-2021-23840   |   HIGH  |  1.1.1g-r0 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3450   |   HIGH  |  1.1.1g-r0 | 1.1.1k-r0 |
| openssl         |    CVE-2020-1971   |   MEDIUM  |  1.1.1g-r0 | 1.1.1i-r0 |
| openssl         |    CVE-2021-23841   |   MEDIUM  |  1.1.1g-r0 | 1.1.1j-r0 |
| openssl         |    CVE-2021-3449   |   MEDIUM  |  1.1.1g-r0 | 1.1.1k-r0 |
| openssl         |    CVE-2021-23839   |   LOW  |  1.1.1g-r0 | 1.1.1j-r0 |
| py-libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| py-libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| py-libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r4 | 2.9.9-r5 |
| py2-libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| py2-libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.9-r4 | 2.9.9-r5 |
| py2-libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.9-r4 | 2.9.9-r5 |
| ssl_client         |    CVE-2021-28831   |   HIGH  |  1.30.1-r3 | 1.30.1-r5 |
| tor         |    CVE-2021-28089   |   HIGH  |  0.3.5.12-r0 | 0.3.5.14-r0 |
| tor         |    CVE-2021-28090   |   MEDIUM  |  0.3.5.12-r0 | 0.3.5.14-r0 |

