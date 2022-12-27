# Container Security

##### Detected Containers

          tccr.io/truecharts/ddns-route53:latest@sha256:7f4b69d0a3121d9d9bc859bfdc43eca1aa38c46ef5f99088c1f113c334607e19
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/ddns-route53:latest@sha256:7f4b69d0a3121d9d9bc859bfdc43eca1aa38c46ef5f99088c1f113c334607e19**

#### Container: tccr.io/truecharts/ddns-route53:latest@sha256:7f4b69d0a3121d9d9bc859bfdc43eca1aa38c46ef5f99088c1f113c334607e19 (alpine 3.15.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.4-r2 | 3.3.4-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r7 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r7 | 1.1.1q-r0 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r8 | 1.1.1n-r0 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r8 | 1.1.1q-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.34.1-r3 | 1.34.1-r5 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.42.41 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.42.41 |  |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20211215165025-cf75a172585e | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20211216021012-1d35b9e2eb4e | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.6 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.6 | 0.3.8 |

