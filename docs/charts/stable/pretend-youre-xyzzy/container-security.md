# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/pretend-youre-xyzzy:v4@sha256:91c45a58367416a93be646066bcec02fc7105721411eaea2d4f646249ed503f8
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/pretend-youre-xyzzy:v4@sha256:91c45a58367416a93be646066bcec02fc7105721411eaea2d4f646249ed503f8**

#### Container: tccr.io/truecharts/pretend-youre-xyzzy:v4@sha256:91c45a58367416a93be646066bcec02fc7105721411eaea2d4f646249ed503f8 (alpine 3.4.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcrypto1.0         |    CVE-2018-0732   |   HIGH  |  1.0.2n-r0 | 1.0.2o-r1 |
| libcrypto1.0         |    CVE-2018-0733   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r0 |
| libcrypto1.0         |    CVE-2018-0734   |   MEDIUM  |  1.0.2n-r0 | 1.0.2q-r0 |
| libcrypto1.0         |    CVE-2018-0737   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r2 |
| libcrypto1.0         |    CVE-2018-0739   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r0 |
| libcrypto1.0         |    CVE-2018-5407   |   MEDIUM  |  1.0.2n-r0 | 1.0.2q-r0 |
| libssl1.0         |    CVE-2018-0732   |   HIGH  |  1.0.2n-r0 | 1.0.2o-r1 |
| libssl1.0         |    CVE-2018-0733   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r0 |
| libssl1.0         |    CVE-2018-0734   |   MEDIUM  |  1.0.2n-r0 | 1.0.2q-r0 |
| libssl1.0         |    CVE-2018-0737   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r2 |
| libssl1.0         |    CVE-2018-0739   |   MEDIUM  |  1.0.2n-r0 | 1.0.2o-r0 |
| libssl1.0         |    CVE-2018-5407   |   MEDIUM  |  1.0.2n-r0 | 1.0.2q-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.google.guava:guava         |    CVE-2018-10237   |   MEDIUM  |  20.0 | 24.1.1-jre, 24.1.1-android |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  20.0 | 30.0 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.5 | 2.7 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.6 | 2.7 |
| org.apache.httpcomponents:httpclient         |    CVE-2020-13956   |   MEDIUM  |  4.5.5 | 4.5.13 |
| org.apache.maven.shared:maven-shared-utils         |    CVE-2022-29599   |   CRITICAL  |  3.2.1 | 3.3.3 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2016-5018   |   CRITICAL  |  7.0.69 | 8.5.5, 9.0.0.M10, 7.0.72, 8.0.37, 6.0.47 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2016-3092   |   HIGH  |  7.0.69 | 7.0.70, 8.0.36, 8.5.3, 9.0.0.M8 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2016-5388   |   HIGH  |  7.0.69 | 7.0.72, 8.5.5 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2016-6797   |   HIGH  |  7.0.69 | 8.5.5, 9.0.0.M10, 7.0.72, 8.0.37 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2016-8745   |   HIGH  |  7.0.69 | 8.5.9, 9.0.0.M14, 7.0.75, 8.0.41, 6.0.50 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2017-12615   |   HIGH  |  7.0.69 | 7.0.52, 7.0.78, 7.0.81 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2017-12616   |   HIGH  |  7.0.69 | 7.0.52, 7.0.78, 7.0.81 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2020-9484   |   HIGH  |  7.0.69 | 7.0.104, 8.5.55, 9.0.35 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2017-7674   |   MEDIUM  |  7.0.69 | 7.0.79, 8.5.16, 9.0.0.M22 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2021-24122   |   MEDIUM  |  7.0.69 | 10.0.0-M10, 9.0.40, 8.5.60, 7.0.107 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-1938   |   CRITICAL  |  7.0.69 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-13935   |   HIGH  |  7.0.69 | 7.0.105, 8.5.57, 9.0.37, 10.0.2 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2020-1935   |   MEDIUM  |  7.0.69 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2021-24122   |   MEDIUM  |  7.0.69 | 10.0.0-M10, 9.0.40, 8.5.60, 7.0.107 |
| org.apache.tomcat:tomcat-util         |    CVE-2018-1336   |   HIGH  |  7.0.69 | 7.0.88, 8.0.52, 8.5.31, 9.0.8 |
| org.apache.tomcat:tomcat-util         |    CVE-2019-0232   |   HIGH  |  7.0.69 | 7.0.94, 8.5.40, 9.0.19 |
| org.apache.tomcat:tomcat-util         |    CVE-2019-0221   |   MEDIUM  |  7.0.69 | 7.0.94, 8.5.40, 9.0.19 |
| org.apache.tomcat:tomcat-util         |    CVE-2020-1935   |   MEDIUM  |  7.0.69 | 7.0.100, 8.5.51, 9.0.31 |
| org.apache.tomcat:tomcat-util         |    CVE-2021-24122   |   MEDIUM  |  7.0.69 | 7.0.107, 8.5.60, 9.0.40, 10.0.2 |
| org.jsoup:jsoup         |    CVE-2021-37714   |   HIGH  |  1.11.2 | 1.14.2 |
| org.jsoup:jsoup         |    CVE-2022-36033   |   MEDIUM  |  1.11.2 | 1.15.3 |

