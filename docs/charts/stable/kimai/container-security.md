# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/kimai:v1.20@sha256:f13b70aa746b3d8a754bcf1f78dbdfde95b94f443ee17b9e3474ab0ebf6068e3
          tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/kimai:v1.20@sha256:f13b70aa746b3d8a754bcf1f78dbdfde95b94f443ee17b9e3474ab0ebf6068e3**

#### Container: tccr.io/truecharts/kimai:v1.20@sha256:f13b70aa746b3d8a754bcf1f78dbdfde95b94f443ee17b9e3474ab0ebf6068e3 (debian 10.11)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apache2         |    CVE-2021-44790   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2         |    CVE-2022-22720   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-22721   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-23943   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-28615   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-31813   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2021-33193   |   HIGH  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2021-44224   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2         |    CVE-2022-22719   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-26377   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-29404   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-30522   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2022-30556   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2019-17567   |   MEDIUM  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2022-28614   |   MEDIUM  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2         |    CVE-2001-1534   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2003-1307   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2003-1580   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2003-1581   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2007-0086   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2007-1743   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2007-3303   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2         |    CVE-2008-0456   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2021-44790   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-bin         |    CVE-2022-22720   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-22721   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-23943   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-28615   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-31813   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2021-33193   |   HIGH  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2021-44224   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-bin         |    CVE-2022-22719   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-26377   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-29404   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-30522   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2022-30556   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2019-17567   |   MEDIUM  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2022-28614   |   MEDIUM  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-bin         |    CVE-2001-1534   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2003-1307   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2003-1580   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2003-1581   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2007-0086   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2007-1743   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2007-3303   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-bin         |    CVE-2008-0456   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2021-44790   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-data         |    CVE-2022-22720   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-22721   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-23943   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-28615   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-31813   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2021-33193   |   HIGH  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2021-44224   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-data         |    CVE-2022-22719   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-26377   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-29404   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-30522   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2022-30556   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2019-17567   |   MEDIUM  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2022-28614   |   MEDIUM  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-data         |    CVE-2001-1534   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2003-1307   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2003-1580   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2003-1581   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2007-0086   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2007-1743   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2007-3303   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-data         |    CVE-2008-0456   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2021-44790   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-utils         |    CVE-2022-22720   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-22721   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-23943   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-28615   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-31813   |   CRITICAL  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2021-33193   |   HIGH  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2021-44224   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u7 |
| apache2-utils         |    CVE-2022-22719   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-26377   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-29404   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-30522   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2022-30556   |   HIGH  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2019-17567   |   MEDIUM  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2022-28614   |   MEDIUM  |  2.4.38-3+deb10u6 | 2.4.38-3+deb10u8 |
| apache2-utils         |    CVE-2001-1534   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2003-1307   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2003-1580   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2003-1581   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2007-0086   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2007-1743   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2007-3303   |   LOW  |  2.4.38-3+deb10u6 |  |
| apache2-utils         |    CVE-2008-0456   |   LOW  |  2.4.38-3+deb10u6 |  |
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| binutils         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils-common         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| binutils-x86-64-linux-gnu         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| bzip2         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| cpp-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| cpp-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u2 |  |
| curl         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| curl         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u2 |  |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| dpkg-dev         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| g++-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| g++-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gcc-8         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.9-3 | 1.9-3+deb10u1 |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libasan5         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libasan5         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libatomic1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libatomic1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libbinutils         |    CVE-2017-13716   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-1000876   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12697   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12698   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12699   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-12934   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17358   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17359   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17360   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17794   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-17985   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18309   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18483   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18484   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18605   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18606   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18607   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18700   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-18701   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-19931   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-19932   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20002   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20623   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20651   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20671   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20673   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-20712   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-9138   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2018-9996   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-1010180   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-1010204   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-12972   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-14250   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-14444   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-17450   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-17451   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9070   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9071   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9073   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9074   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9075   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2019-9077   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16590   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16591   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16592   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16593   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-16599   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35448   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35493   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35494   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35495   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35496   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2020-35507   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20197   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20284   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-20294   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3487   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3530   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3549   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-3826   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-45078   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2021-46195   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2022-38533   |   LOW  |  2.31.1-16 |  |
| libbinutils         |    CVE-2022-4285   |   LOW  |  2.31.1-16 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libbz2-1.0         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc-dev-bin         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc6-dev         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc6-dev         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libcc1-0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libcc1-0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22946   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-22576   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27781   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27782   |   HIGH  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22947   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2022-27776   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-32206   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-32208   |   MEDIUM  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22898   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u2 |  |
| libcurl4         |    CVE-2021-22924   |   LOW  |  7.64.0-4+deb10u2 | 7.64.0-4+deb10u3 |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libdpkg-perl         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u5 |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u2 |
| libexpat1         |    CVE-2022-25314   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u6 |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u3 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u1 |  |
| libexpat1         |    DSA-5085-2   |   UNKNOWN  |  2.2.6-2+deb10u1 | 2.2.6-2+deb10u4 |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.9.1-3+deb10u2 |  |
| libgcc-8-dev         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc-8-dev         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libglib2.0-0         |    CVE-2021-3800   |   HIGH  |  2.58.3-2+deb10u3 | 2.58.3-2+deb10u4 |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u3 |  |
| libglib2.0-0         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u3 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-4 | 2:6.1.2+dfsg-4+deb10u1 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u7 |  |
| libgomp1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgomp1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libitm1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libitm1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libjansson4         |    CVE-2020-36325   |   LOW  |  2.12-1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libldap-2.4-2         |    CVE-2022-29155   |   CRITICAL  |  2.4.47+dfsg-3+deb10u6 | 2.4.47+dfsg-3+deb10u7 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-common         |    CVE-2022-29155   |   CRITICAL  |  2.4.47+dfsg-3+deb10u6 | 2.4.47+dfsg-3+deb10u7 |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u6 |  |
| liblsan0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| liblsan0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| liblua5.2-0         |    CVE-2021-43519   |   MEDIUM  |  5.2.4-1.1 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.4-1 | 5.2.4-1+deb10u1 |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libmpx2         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libmpx2         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnghttp2-14         |    CVE-2020-11080   |   HIGH  |  1.36.0-2+deb10u1 |  |
| libonig5         |    CVE-2019-13224   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-13225   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-16163   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19012   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19203   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19204   |   LOW  |  6.9.1-1 |  |
| libonig5         |    CVE-2019-19246   |   LOW  |  6.9.1-1 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libperl5.28         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| libperl5.28         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| libpng16-16         |    CVE-2018-14048   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2018-14550   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.36-6 |  |
| libquadmath0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libquadmath0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libseccomp2         |    CVE-2019-9893   |   LOW  |  2.3.3-4 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.8-1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libsqlite3-0         |    CVE-2020-35527   |   CRITICAL  |  3.27.2-3+deb10u1 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-35525   |   HIGH  |  3.27.2-3+deb10u1 | 3.27.2-3+deb10u2 |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3+deb10u1 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3+deb10u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libssh2-1         |    CVE-2019-13115   |   HIGH  |  1.8.0-2.1 |  |
| libssh2-1         |    CVE-2019-17498   |   LOW  |  1.8.0-2.1 |  |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u7 | 1.1.1n-0+deb10u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u7 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u7 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u7 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u7 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u7 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u7 |  |
| libstdc++-8-dev         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++-8-dev         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libtsan0         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libtsan0         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libubsan1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libubsan1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u2 |  |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.4+dfsg1-7+deb10u2 | 2.9.4+dfsg1-7+deb10u3 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7+deb10u2 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7+deb10u2 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u2 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u2 |  |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u2 | 2.9.4+dfsg1-7+deb10u4 |
| libxslt1.1         |    CVE-2019-5815   |   HIGH  |  1.1.32-2.2~deb10u1 | 1.1.32-2.2~deb10u2 |
| libxslt1.1         |    CVE-2021-30560   |   HIGH  |  1.1.32-2.2~deb10u1 | 1.1.32-2.2~deb10u2 |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.32-2.2~deb10u1 |  |
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3649   |   CRITICAL  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-36385   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-20322   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-22600   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3493   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-3640   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-3752   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3760   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-38207   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-38300   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-39685   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-39686   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-39698   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-39713   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-4037   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-4083   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-41864   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-4197   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2021-4202   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-44733   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-45469   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0330   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-0435   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0492   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-1011   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1012   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1048   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1199   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-1353   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1419   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1652   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1678   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-1679   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-1729   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1734   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-20368   |   HIGH  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-20421   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-20422   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-20566   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-22942   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-23036   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23037   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23038   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23039   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23040   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23041   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-23042   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-24958   |   HIGH  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2022-2588   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-26365   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2639   |   HIGH  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-26490   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-27223   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-27666   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28388   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28389   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28390   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-29581   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-2964   |   HIGH  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-2977   |   HIGH  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-2978   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3028   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-30594   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3176   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3202   |   HIGH  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-32250   |   HIGH  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3239   |   HIGH  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-33740   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-33741   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-33742   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3621   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3635   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36946   |   HIGH  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43750   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-16120   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-26141   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-26145   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-26541   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-36310   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-36322   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-20317   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-20321   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-26401   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28711   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28712   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28713   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28714   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28715   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-28950   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-33655   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-33656   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-3744   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-3764   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-3772   |   MEDIUM  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2021-4002   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-4135   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-4149   |   MEDIUM  |  4.19.208-1 | 4.19.235-1 |
| linux-libc-dev         |    CVE-2021-4155   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-4159   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-4203   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-42739   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-43389   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-43975   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-43976   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-45095   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-45480   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2021-45868   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0001   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0002   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0322   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-0487   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0494   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-0617   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-0812   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-0854   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1016   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1184   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-1195   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1198   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1204   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1205   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-1462   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-1516   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1974   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1975   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-20008   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-20132   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-20154   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-20369   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-20423   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-20572   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-21123   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21125   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21166   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21499   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-2153   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2318   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2380   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-23816   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-23960   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-24959   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-2503   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-25258   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-25375   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-2586   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-26373   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2663   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-26966   |   MEDIUM  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-28356   |   MEDIUM  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-29901   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3061   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3107   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3111   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-3115   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3303   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-33744   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3586   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3646   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36879   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-3903   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-39188   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-39842   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-40307   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4095   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41858   |   MEDIUM  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-42703   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-4662   |   MEDIUM  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-12615   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19064   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2019-19083   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-27820   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2020-29374   |   LOW  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-0929   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-24448   |   LOW  |  4.19.208-1 | 4.19.232-1 |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  4.19.208-1 |  |
| linux-libc-dev         |    CVE-2022-2991   |   LOW  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-32296   |   LOW  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-32981   |   LOW  |  4.19.208-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-33981   |   LOW  |  4.19.208-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  4.19.208-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3629   |   LOW  |  4.19.208-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  4.19.208-1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| m4         |    CVE-2008-1687   |   LOW  |  1.4.18-2 |  |
| m4         |    CVE-2008-1688   |   LOW  |  1.4.18-2 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u7 | 1.1.1n-0+deb10u2 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u7 | 1.1.1n-0+deb10u3 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u7 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u7 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u7 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u7 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u7 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| patch         |    CVE-2010-4651   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6951   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-3+deb10u1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| re2c         |    CVE-2018-21232   |   LOW  |  1.1.1-1 |  |
| re2c         |    CVE-2022-23901   |   LOW  |  1.1.1-1 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u3 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u3 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| xz-utils         |    CVE-2022-1271   |   HIGH  |  5.2.4-1 | 5.2.4-1+deb10u1 |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u1 |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| twig/twig         |    CVE-2022-39261   |   HIGH  |  v3.3.10 | 1.44.7, 2.15.3, 3.4.3 |

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

