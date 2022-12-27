# Container Security

##### Detected Containers

          ghcr.io/jens-maus/raspberrymatic:latest@sha256:df90ba2875bc310c4f7b11bce22da28e36a89c86c4311f23596d7afd085209a3
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: ghcr.io/jens-maus/raspberrymatic:latest@sha256:df90ba2875bc310c4f7b11bce22da28e36a89c86c4311f23596d7afd085209a3**

#### Container: Java
    

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.11.4 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.11.4 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.11.4 | 2.12.7.1, 2.13.4 |
| com.fasterxml.jackson.dataformat:jackson-dataformat-xml         |    CVE-2016-7051   |   HIGH  |  2.7.4 | 2.7.8, 2.8.4 |
| com.fasterxml.jackson.dataformat:jackson-dataformat-xml         |    CVE-2020-24616   |   HIGH  |  2.7.4 | 2.10.0 |
| com.google.guava:guava         |    CVE-2018-10237   |   MEDIUM  |  19.0 | 24.1.1-jre, 24.1.1-android |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  19.0 | 30.0 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.4 | 2.7 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.5 | 2.7 |
| commons-net:commons-net         |    CVE-2021-37533   |   MEDIUM  |  3.3 | 3.9.0 |
| io.netty:netty-codec         |    CVE-2021-37136   |   HIGH  |  4.1.67.Final | 4.1.68.Final |
| io.netty:netty-codec         |    CVE-2021-37137   |   HIGH  |  4.1.67.Final | 4.1.68.Final |
| io.netty:netty-codec         |    CVE-2022-24823   |   MEDIUM  |  4.1.67.Final | 4.1.77.Final |
| io.netty:netty-codec-http         |    CVE-2021-43797   |   MEDIUM  |  4.1.67.Final | 4.1.71.Final |
| io.netty:netty-codec-http         |    CVE-2022-24823   |   MEDIUM  |  4.1.67.Final | 4.1.77.Final |
| io.netty:netty-codec-http         |    CVE-2022-41915   |   LOW  |  4.1.67.Final | 4.1.86.Final |
| io.netty:netty-codec-http2         |    CVE-2022-24823   |   MEDIUM  |  4.1.67.Final | 4.1.77.Final |
| io.netty:netty-handler         |    CVE-2022-24823   |   MEDIUM  |  4.1.67.Final | 4.1.77.Final |
| org.apache.httpcomponents:httpclient         |    CVE-2020-13956   |   MEDIUM  |  4.5.2 | 4.5.13 |
| org.eclipse.jetty:jetty-client         |    CVE-2017-7657   |   CRITICAL  |  9.4.7.v20170914 | 9.2.26.v20180806, 9.3.24.v20180605, 9.4.11.v20180605 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27216   |   HIGH  |  9.4.7.v20170914 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-client         |    CVE-2021-28165   |   HIGH  |  9.4.7.v20170914 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27223   |   MEDIUM  |  9.4.7.v20170914 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27216   |   HIGH  |  9.4.7.v20170914 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-http         |    CVE-2021-28165   |   HIGH  |  9.4.7.v20170914 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-http         |    CVE-2019-10241   |   MEDIUM  |  9.4.7.v20170914 | 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 |
| org.eclipse.jetty:jetty-http         |    CVE-2019-10247   |   MEDIUM  |  9.4.7.v20170914 | 9.2.28.v20190418, 9.3.27.v20190418, 9.4.17.v20190418 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27223   |   MEDIUM  |  9.4.7.v20170914 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2022-2047   |   LOW  |  9.4.7.v20170914 | 9.4.46.v20220331, 10.0.9, 11.0.10 |
| org.eclipse.jetty:jetty-io         |    CVE-2021-28165   |   HIGH  |  9.4.7.v20170914 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27216   |   HIGH  |  9.4.7.v20170914 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-util         |    CVE-2021-28165   |   HIGH  |  9.4.7.v20170914 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27223   |   MEDIUM  |  9.4.7.v20170914 | 9.4.37.v20210219, 10.0.1, 11.0.1 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.1.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/u-root/u-root         |    CVE-2020-7665   |   HIGH  |  v0.9.1-0.20221111022710-6e9699743f5d |  |
| github.com/u-root/u-root         |    CVE-2020-7666   |   HIGH  |  v0.9.1-0.20221111022710-6e9699743f5d |  |
| github.com/u-root/u-root         |    CVE-2020-7669   |   HIGH  |  v0.9.1-0.20221111022710-6e9699743f5d |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.1.0 | 0.4.0 |

