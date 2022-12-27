# Container Security

##### Detected Containers

          tccr.io/truecharts/songkong:latest@sha256:148d16bbabbc94ad33bf57a5e57781175a9c06111c663bfb70ce3438d1da550e
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/songkong:latest@sha256:148d16bbabbc94ad33bf57a5e57781175a9c06111c663bfb70ce3438d1da550e**

#### Container: tccr.io/truecharts/songkong:latest@sha256:148d16bbabbc94ad33bf57a5e57781175a9c06111c663bfb70ce3438d1da550e (alpine 3.11.13)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.11-r4 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.google.code.gson:gson         |    CVE-2022-25647   |   HIGH  |  2.8.5 | 2.8.9 |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  27.0.1-jre | 30.0 |
| com.h2database:h2         |    CVE-2021-23463   |   CRITICAL  |  1.4.199 | 2.0.202 |
| com.h2database:h2         |    CVE-2021-42392   |   CRITICAL  |  1.4.199 | 2.0.206 |
| com.h2database:h2         |    CVE-2022-23221   |   CRITICAL  |  1.4.199 | 2.1.210 |
| com.h2database:h2         |    CVE-2022-45868   |   HIGH  |  1.4.199 |  |
| com.h2database:h2         |    GHSA-h376-j262-vhq6   |   UNKNOWN  |  1.4.199 | 2.0.206 |
| com.mchange:c3p0         |    CVE-2018-20433   |   CRITICAL  |  0.9.2.1 | 0.9.5.3 |
| com.mchange:c3p0         |    CVE-2019-5427   |   HIGH  |  0.9.2.1 | 0.9.5.4 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.3 | 2.7 |
| log4j:log4j         |    CVE-2019-17571   |   CRITICAL  |  1.2.16 | 2.0-alpha1 |
| log4j:log4j         |    CVE-2022-23305   |   CRITICAL  |  1.2.16 |  |
| log4j:log4j         |    CVE-2022-23302   |   HIGH  |  1.2.16 |  |
| log4j:log4j         |    CVE-2022-23307   |   HIGH  |  1.2.16 |  |
| log4j:log4j         |    CVE-2020-9488   |   LOW  |  1.2.16 | 2.13.2 |
| org.apache.commons:commons-compress         |    CVE-2021-35515   |   HIGH  |  1.19 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-35516   |   HIGH  |  1.19 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-35517   |   HIGH  |  1.19 | 1.21 |
| org.apache.commons:commons-compress         |    CVE-2021-36090   |   HIGH  |  1.19 | 1.21 |
| org.apache.httpcomponents:httpclient         |    CVE-2020-13956   |   MEDIUM  |  4.5.11 | 4.5.13 |
| org.apache.poi:poi         |    CVE-2022-26336   |   MEDIUM  |  4.1.2 | 5.2.1 |
| org.apache.poi:poi-ooxml         |    CVE-2022-26336   |   MEDIUM  |  4.1.2 | 5.2.1 |
| org.eclipse.jetty:jetty-client         |    CVE-2017-7657   |   CRITICAL  |  9.4.8.v20171121 | 9.2.26.v20180806, 9.3.24.v20180605, 9.4.11.v20180605 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27216   |   HIGH  |  9.4.8.v20171121 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-client         |    CVE-2021-28165   |   HIGH  |  9.4.8.v20171121 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27223   |   MEDIUM  |  9.4.8.v20171121 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27216   |   HIGH  |  9.4.8.v20171121 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-http         |    CVE-2021-28165   |   HIGH  |  9.4.8.v20171121 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-http         |    CVE-2019-10241   |   MEDIUM  |  9.4.8.v20171121 | 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 |
| org.eclipse.jetty:jetty-http         |    CVE-2019-10247   |   MEDIUM  |  9.4.8.v20171121 | 9.2.28.v20190418, 9.3.27.v20190418, 9.4.17.v20190418 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27223   |   MEDIUM  |  9.4.8.v20171121 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2022-2047   |   LOW  |  9.4.8.v20171121 | 9.4.46.v20220331, 10.0.9, 11.0.10 |
| org.eclipse.jetty:jetty-io         |    CVE-2021-28165   |   HIGH  |  9.4.8.v20171121 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-server         |    CVE-2017-7658   |   CRITICAL  |  9.4.8.v20171121 | 9.2.26.v20180806, 9.3.24.v20180605, 9.4.11.v20180605 |
| org.eclipse.jetty:jetty-server         |    CVE-2017-7656   |   HIGH  |  9.4.8.v20171121 | 9.2.26.v20180806, 9.3.24.v20180605, 9.4.11.v20180605 |
| org.eclipse.jetty:jetty-server         |    CVE-2018-12538   |   HIGH  |  9.4.8.v20171121 | 9.4.8.v20180619 |
| org.eclipse.jetty:jetty-server         |    CVE-2018-12545   |   HIGH  |  9.4.8.v20171121 | 9.4.13.v20181111 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27216   |   HIGH  |  9.4.8.v20171121 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-server         |    CVE-2021-28165   |   HIGH  |  9.4.8.v20171121 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-server         |    CVE-2018-12536   |   MEDIUM  |  9.4.8.v20171121 | 9.2.27.v20190403, 9.3.24.v20180605, 9.4.11.v20180605 |
| org.eclipse.jetty:jetty-server         |    CVE-2019-10241   |   MEDIUM  |  9.4.8.v20171121 | 9.2.27.v20190403, 9.3.26.v20190403, 9.4.16.v20190411 |
| org.eclipse.jetty:jetty-server         |    CVE-2019-10247   |   MEDIUM  |  9.4.8.v20171121 | 9.2.28.v20190418, 9.3.27.v20190418, 9.4.17.v20190418 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27218   |   MEDIUM  |  9.4.8.v20171121 | 9.4.35.v20201120, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27223   |   MEDIUM  |  9.4.8.v20171121 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-server         |    CVE-2021-34428   |   LOW  |  9.4.8.v20171121 | 9.4.40.v20210413, 10.0.3, 11.0.3 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27216   |   HIGH  |  9.4.8.v20171121 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-util         |    CVE-2021-28165   |   HIGH  |  9.4.8.v20171121 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27223   |   MEDIUM  |  9.4.8.v20171121 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-webapp         |    CVE-2020-27216   |   HIGH  |  9.4.8.v20171121 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-webapp         |    CVE-2020-27218   |   MEDIUM  |  9.4.8.v20171121 | 9.4.35.v20201120, 11.0.0.beta3 |
| org.hibernate:hibernate-core         |    CVE-2020-25638   |   HIGH  |  4.3.11.Final | 5.3.20.Final, 5.4.24.Final |

