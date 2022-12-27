# Container Security

##### Detected Containers

          tccr.io/truecharts/cloudreve:latest@sha256:6ef6236f115cfb1c85a0d81fce5b6882934df9f86e535dd4c9b5451754e87fd8
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/cloudreve:latest@sha256:6ef6236f115cfb1c85a0d81fce5b6882934df9f86e535dd4c9b5451754e87fd8**

#### Container: tccr.io/truecharts/cloudreve:latest@sha256:6ef6236f115cfb1c85a0d81fce5b6882934df9f86e535dd4c9b5451754e87fd8 (alpine 3.13)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-30065   |   HIGH  |  1.32.1-r8 | 1.32.1-r9 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210109-r0 | 6.2_p20210109-r1 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.32.1-r8 | 1.32.1-r9 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.12-r0 | 1.2.12-r2 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.31.5 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.31.5 |  |
| github.com/aws/aws-sdk-go         |    CVE-2022-2582   |   UNKNOWN  |  v1.31.5 | 1.34.0 |
| github.com/dgrijalva/jwt-go         |    CVE-2020-26160   |   HIGH  |  v3.2.0+incompatible |  |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20210921155107-089bfa567519 | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20210921155107-089bfa567519 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20211020174200-9d6173849985 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

