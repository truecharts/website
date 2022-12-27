# Container Security

##### Detected Containers

          tccr.io/truecharts/universal-media-server:latest@sha256:e71230b1e2b6e330de0ca59c3b64c991a1788ca1c67df3e91ae3a8269e1c22ea
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/universal-media-server:latest@sha256:e71230b1e2b6e330de0ca59c3b64c991a1788ca1c67df3e91ae3a8269e1c22ea**

#### Container: tccr.io/truecharts/universal-media-server:latest@sha256:e71230b1e2b6e330de0ca59c3b64c991a1788ca1c67df3e91ae3a8269e1c22ea (alpine 3.17.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.86.0-r1 | 7.87.0-r0 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.86.0-r1 | 7.87.0-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.google.guava:guava         |    CVE-2018-10237   |   MEDIUM  |  12.0 | 24.1.1-jre, 24.1.1-android |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  12.0 | 30.0 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3171   |   HIGH  |  2.6.0 | 3.16.3, 3.19.6, 3.20.3, 3.21.7 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3509   |   HIGH  |  2.6.0 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3510   |   HIGH  |  2.6.0 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2021-22569   |   MEDIUM  |  2.6.0 | 3.16.1, 3.18.2, 3.19.2 |
| com.google.protobuf:protobuf-java         |    GHSA-h4h5-3hr4-j3g2   |   UNKNOWN  |  2.6.0 | 3.20.3, 3.21.7, 3.16.3, 3.19.6 |
| com.google.protobuf:protobuf-java         |    GHSA-wrvw-hg22-4m67   |   UNKNOWN  |  2.6.0 | 3.16.1, 3.18.2, 3.19.2 |
| io.netty:netty         |    CVE-2021-21290   |   MEDIUM  |  3.10.6.Final |  |
| io.netty:netty         |    CVE-2021-21409   |   MEDIUM  |  3.10.6.Final | 4.1.61 |
| io.netty:netty         |    CVE-2022-24823   |   MEDIUM  |  3.10.6.Final | 4.1.77.Final |

