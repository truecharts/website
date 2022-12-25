# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          'tccr.io/truecharts/netdata:1.37.1@sha256:b81174344e62e74b626d2a259586d7543937483776d5a23de70699d8467460e3'
          tccr.io/truecharts/netdata:1.37.1@sha256:b81174344e62e74b626d2a259586d7543937483776d5a23de70699d8467460e3
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: 'tccr.io/truecharts/netdata:1.37.1@sha256:b81174344e62e74b626d2a259586d7543937483776d5a23de70699d8467460e3'**


**Container: tccr.io/truecharts/netdata:1.37.1@sha256:b81174344e62e74b626d2a259586d7543937483776d5a23de70699d8467460e3**

#### Container: tccr.io/truecharts/netdata:1.37.1@sha256:b81174344e62e74b626d2a259586d7543937483776d5a23de70699d8467460e3 (alpine 3.16.3)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r4 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r4 | 7.83.1-r5 |
| libtasn1         |    CVE-2021-46848   |   CRITICAL  |  4.18.0-r0 | 4.18.0-r1 |
| python3         |    CVE-2022-37454   |   CRITICAL  |  3.10.8-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-42919   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-45061   |   HIGH  |  3.10.8-r0 | 3.10.9-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/docker/distribution         |    GHSA-qq97-vm5h-rrhg   |   LOW  |  v2.7.1+incompatible | 2.8.0 |
| github.com/prometheus/prometheus         |    CVE-2019-3826   |   MEDIUM  |  v0.36.2 | v2.7.1 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

