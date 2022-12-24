# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/snowflake-proxy:2.4.1@sha256:aec084e33088c8a8192940aa61d3ff52df91816c4a9465eee6f13c3fdb2e31fd
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/snowflake-proxy:2.4.1@sha256:aec084e33088c8a8192940aa61d3ff52df91816c4a9465eee6f13c3fdb2e31fd**

#### Container: bin/proxy
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20211216021012-1d35b9e2eb4e | 0.0.0-20220412211240-33da011f77ad |

