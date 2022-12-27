# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/fleet:2.3.3@sha256:21c24046afc09223e222efedf59764d8b312ccb2609ff8be0818e5df5806bd84
          tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/fleet:2.3.3@sha256:21c24046afc09223e222efedf59764d8b312ccb2609ff8be0818e5df5806bd84**

#### Container: tccr.io/truecharts/fleet:2.3.3@sha256:21c24046afc09223e222efedf59764d8b312ccb2609ff8be0818e5df5806bd84 (alpine 3.15)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-43551   |   HIGH  |  7.80.0-r4 | 7.80.0-r5 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.80.0-r4 | 7.80.0-r5 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.80.0-r4 | 7.80.0-r5 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.80.0-r4 | 7.80.0-r5 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-14718   |   CRITICAL  |  2.9.6 | 2.6.7.2, 2.9.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-14719   |   CRITICAL  |  2.9.6 | 2.6.7.2, 2.9.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-14720   |   CRITICAL  |  2.9.6 | 2.6.7.2, 2.9.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-14721   |   CRITICAL  |  2.9.6 | 2.6.7.2, 2.9.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-19360   |   CRITICAL  |  2.9.6 | 2.6.7.3, 2.7.9.5, 2.8.11.3, 2.9.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-19361   |   CRITICAL  |  2.9.6 | 2.6.7.3, 2.7.9.5, 2.8.11.3, 2.9.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-19362   |   CRITICAL  |  2.9.6 | 2.6.7.3, 2.7.9.5, 2.8.11.3, 2.9.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-14379   |   CRITICAL  |  2.9.6 | 2.7.9.6, 2.8.11.4, 2.9.9.2 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-14540   |   CRITICAL  |  2.9.6 | 2.9.10 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-14892   |   CRITICAL  |  2.9.6 | 2.6.7.3, 2.8.11.5, 2.9.10 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-14893   |   CRITICAL  |  2.9.6 | 2.8.11.5, 2.9.10 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-16335   |   CRITICAL  |  2.9.6 | 2.9.10 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-16942   |   CRITICAL  |  2.9.6 | 2.9.10.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-16943   |   CRITICAL  |  2.9.6 | 2.9.10.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-17267   |   CRITICAL  |  2.9.6 | 2.9.10 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-17531   |   CRITICAL  |  2.9.6 | 2.9.10.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-20330   |   CRITICAL  |  2.9.6 | 2.8.11.5, 2.9.10.2 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-8840   |   CRITICAL  |  2.9.6 | 2.7.9.7, 2.8.11.5, 2.9.10.3 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9546   |   CRITICAL  |  2.9.6 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9547   |   CRITICAL  |  2.9.6 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9548   |   CRITICAL  |  2.9.6 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-12086   |   HIGH  |  2.9.6 | 2.7.9.6, 2.8.11.4, 2.9.9 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-14439   |   HIGH  |  2.9.6 | 2.7.9.6, 2.8.11.4, 2.9.9.2 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10650   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10672   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10673   |   HIGH  |  2.9.6 | 2.6.7.4, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10968   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10969   |   HIGH  |  2.9.6 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11111   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11112   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11113   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11619   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11620   |   HIGH  |  2.9.6 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14060   |   HIGH  |  2.9.6 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14061   |   HIGH  |  2.9.6 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14062   |   HIGH  |  2.9.6 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14195   |   HIGH  |  2.9.6 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-24616   |   HIGH  |  2.9.6 | 2.9.10.6 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-24750   |   HIGH  |  2.9.6 | 2.9.10.6 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-25649   |   HIGH  |  2.9.6 | 2.6.7.4, 2.9.10.7, 2.10.5.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35490   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35491   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35728   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36179   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36180   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36181   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36182   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36183   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36184   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36185   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36186   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36187   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36188   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36189   |   HIGH  |  2.9.6 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.9.6 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2021-20190   |   HIGH  |  2.9.6 | 2.9.10.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.9.6 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.9.6 | 2.12.7.1, 2.13.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2018-1000873   |   MEDIUM  |  2.9.6 | 2.9.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-12384   |   MEDIUM  |  2.9.6 | 2.7.9.6, 2.8.11.4, 2.9.9.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-12814   |   MEDIUM  |  2.9.6 | 2.7.9.6, 2.8.11.4, 2.9.9.1 |
| com.fasterxml.jackson.core:jackson-databind         |    GHSA-rpr3-cw39-3pxh   |   UNKNOWN  |  2.9.6 | 2.9.10.4 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27216   |   HIGH  |  9.4.20.v20190813 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-client         |    CVE-2021-28165   |   HIGH  |  9.4.20.v20190813 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-client         |    CVE-2020-27223   |   MEDIUM  |  9.4.20.v20190813 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27216   |   HIGH  |  9.4.20.v20190813 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-http         |    CVE-2021-28165   |   HIGH  |  9.4.20.v20190813 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-http         |    CVE-2020-27223   |   MEDIUM  |  9.4.20.v20190813 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-http         |    CVE-2022-2047   |   LOW  |  9.4.20.v20190813 | 9.4.46.v20220331, 10.0.9, 11.0.10 |
| org.eclipse.jetty:jetty-io         |    CVE-2021-28165   |   HIGH  |  9.4.20.v20190813 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27216   |   HIGH  |  9.4.20.v20190813 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-server         |    CVE-2021-28165   |   HIGH  |  9.4.20.v20190813 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27218   |   MEDIUM  |  9.4.20.v20190813 | 9.4.35.v20201120, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-server         |    CVE-2020-27223   |   MEDIUM  |  9.4.20.v20190813 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-server         |    CVE-2021-34428   |   LOW  |  9.4.20.v20190813 | 9.4.40.v20210413, 10.0.3, 11.0.3 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27216   |   HIGH  |  9.4.20.v20190813 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-util         |    CVE-2021-28165   |   HIGH  |  9.4.20.v20190813 | 9.4.39.v20210325, 10.0.2, 11.0.2 |
| org.eclipse.jetty:jetty-util         |    CVE-2020-27223   |   MEDIUM  |  9.4.20.v20190813 | 9.4.37.v20210219, 10.0.1, 11.0.1 |
| org.eclipse.jetty:jetty-webapp         |    CVE-2020-27216   |   HIGH  |  9.4.20.v20190813 | 9.4.33.v20201020, 10.0.0.beta3, 11.0.0.beta3 |
| org.eclipse.jetty:jetty-webapp         |    CVE-2020-27218   |   MEDIUM  |  9.4.20.v20190813 | 9.4.35.v20201120, 11.0.0.beta3 |

**Container: tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642**

#### Container: tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642 (debian 11.6)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.1.0 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.1.0 | v1.1.2 |

