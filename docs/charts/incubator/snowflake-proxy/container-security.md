# Container Security

##### Detected Containers

          tccr.io/truecharts/snowflake-proxy:2.4.1@sha256:aec084e33088c8a8192940aa61d3ff52df91816c4a9465eee6f13c3fdb2e31fd
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/snowflake-proxy:2.4.1@sha256:aec084e33088c8a8192940aa61d3ff52df91816c4a9465eee6f13c3fdb2e31fd**

#### Container: bin/proxy
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20211216021012-1d35b9e2eb4e | 0.0.0-20220412211240-33da011f77ad |

