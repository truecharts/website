# Container Security

##### Detected Containers

          tccr.io/truecharts/drone-runner-kube:v1.0.0@sha256:d3e206ce5a124ab363b408d131594e9b5be88ae14a9f3ba8206e26cd7f3b30f2
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/drone-runner-kube:v1.0.0@sha256:d3e206ce5a124ab363b408d131594e9b5be88ae14a9f3ba8206e26cd7f3b30f2**

#### Container: tccr.io/truecharts/drone-runner-kube:v1.0.0@sha256:d3e206ce5a124ab363b408d131594e9b5be88ae14a9f3ba8206e26cd7f3b30f2 (alpine 3.13.7)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.32.1-r7 | 1.32.1-r8 |
| busybox         |    CVE-2022-30065   |   HIGH  |  1.32.1-r7 | 1.32.1-r9 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.32.1-r7 | 1.32.1-r8 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.32.1-r7 | 1.32.1-r9 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/docker/distribution         |    GHSA-qq97-vm5h-rrhg   |   LOW  |  v2.7.1+incompatible | 2.8.0 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20210220033148-5ea612d1eb83 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20210220033148-5ea612d1eb83 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20211209124913-491a49abca63 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20211209124913-491a49abca63 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210426230700-d19ff857e887 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.6 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.6 | 0.3.8 |

