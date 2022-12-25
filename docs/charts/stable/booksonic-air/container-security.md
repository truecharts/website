# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/booksonic-air:v2201.1.0@sha256:c28594cb11c5923232d9d0023127d9a43151f69efba0d43093cb55e5abe6209a
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/booksonic-air:v2201.1.0@sha256:c28594cb11c5923232d9d0023127d9a43151f69efba0d43093cb55e5abe6209a**

#### Container: tccr.io/truecharts/booksonic-air:v2201.1.0@sha256:c28594cb11c5923232d9d0023127d9a43151f69efba0d43093cb55e5abe6209a (alpine 3.15)
    

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
| ch.qos.logback:logback-core         |    CVE-2021-42550   |   MEDIUM  |  1.2.3 | 1.2.9 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.11.0 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.11.0 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.11.0 | 2.12.7.1, 2.13.4 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40151   |   HIGH  |  5.0.3 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40152   |   HIGH  |  5.0.3 | 5.4.0, 6.4.0 |
| mysql:mysql-connector-java         |    CVE-2022-21363   |   MEDIUM  |  8.0.27 | 8.0.28 |
| org.apache.commons:commons-configuration2         |    CVE-2022-33980   |   CRITICAL  |  2.7 | 2.8 |
| org.apache.commons:commons-text         |    CVE-2022-42889   |   CRITICAL  |  1.8 | 1.10.0 |
| org.apache.cxf:cxf-core         |    CVE-2022-46364   |   CRITICAL  |  3.3.12 | 3.5.5, 3.4.10 |
| org.apache.cxf:cxf-core         |    CVE-2022-46363   |   MEDIUM  |  3.3.12 | 3.5.5, 3.4.10 |
| org.apache.tomcat.embed:tomcat-embed-core         |    CVE-2021-43980   |   LOW  |  9.0.56 |  |
| org.apache.tomcat.embed:tomcat-embed-websocket         |    CVE-2021-43980   |   LOW  |  9.0.56 |  |
| org.fourthline.cling:cling-core         |    CVE-2020-23622   |   HIGH  |  2.0.1 |  |
| org.hsqldb:hsqldb         |    CVE-2022-41853   |   CRITICAL  |  2.5.0 | 2.7.1 |
| org.liquibase:liquibase-core         |    CVE-2022-0839   |   CRITICAL  |  3.8.9 | 4.8.0 |
| org.postgresql:postgresql         |    CVE-2022-21724   |   CRITICAL  |  42.2.12 | 42.2.25, 42.3.2 |
| org.postgresql:postgresql         |    CVE-2022-26520   |   CRITICAL  |  42.2.12 | 42.3.3 |
| org.postgresql:postgresql         |    CVE-2020-13692   |   HIGH  |  42.2.12 | 42.2.13 |
| org.postgresql:postgresql         |    CVE-2022-31197   |   HIGH  |  42.2.12 | 42.2.26, 42.3.7, 42.4.1 |
| org.postgresql:postgresql         |    CVE-2022-41946   |   MEDIUM  |  42.2.12 | 42.2.27, 42.3.8, 42.4.3, 42.5.1 |
| org.postgresql:postgresql         |    GHSA-673j-qm5f-xpv8   |   MEDIUM  |  42.2.12 | 42.3.3 |
| org.springframework.boot:spring-boot-starter-web         |    CVE-2022-22965   |   CRITICAL  |  2.2.13.RELEASE | 2.6.6, 2.5.12 |
| org.springframework.boot:spring-boot-starter-web         |    GHSA-36p3-wjmg-h94x   |   UNKNOWN  |  2.2.13.RELEASE | 2.5.12, 2.6.6 |
| org.springframework.security:spring-security-core         |    CVE-2022-22978   |   CRITICAL  |  5.2.8.RELEASE | 5.5.7, 5.6.4 |
| org.springframework.security:spring-security-core         |    CVE-2021-22112   |   HIGH  |  5.2.8.RELEASE | 5.2.9.RELEASE, 5.3.8.RELEASE, 5.4.4 |
| org.springframework.security:spring-security-core         |    CVE-2021-22119   |   HIGH  |  5.2.8.RELEASE | 5.2.11.RELEASE, 5.3.10.RELEASE, 5.4.7, 5.5.1 |
| org.springframework.security:spring-security-core         |    CVE-2022-22976   |   MEDIUM  |  5.2.8.RELEASE | 5.5.7, 5.6.4 |
| org.springframework.security:spring-security-web         |    CVE-2021-22112   |   HIGH  |  5.2.8.RELEASE | 5.2.9, 5.2.9, 5.4.4, 5.4.4 |
| org.springframework:spring-beans         |    CVE-2022-22965   |   CRITICAL  |  5.2.12.RELEASE | 5.2.20.RELEASE, 5.3.18 |
| org.springframework:spring-beans         |    GHSA-36p3-wjmg-h94x   |   UNKNOWN  |  5.2.12.RELEASE | 5.2.20, 5.3.18 |
| org.springframework:spring-core         |    CVE-2021-22118   |   HIGH  |  5.2.12.RELEASE | 5.2.15, 5.3.7 |
| org.springframework:spring-core         |    CVE-2021-22060   |   MEDIUM  |  5.2.12.RELEASE | 5.3.14, 5.3.14 |
| org.springframework:spring-core         |    CVE-2021-22096   |   MEDIUM  |  5.2.12.RELEASE | 5.2.18, 5.3.11 |
| org.springframework:spring-core         |    CVE-2022-22950   |   MEDIUM  |  5.2.12.RELEASE | 5.2.20.RELEASE, 5.3.17 |
| org.springframework:spring-core         |    CVE-2022-22968   |   MEDIUM  |  5.2.12.RELEASE | 5.2.21, 5.3.19 |
| org.springframework:spring-core         |    CVE-2022-22970   |   MEDIUM  |  5.2.12.RELEASE | 5.2.22.RELEASE, 5.3.20 |
| org.springframework:spring-core         |    CVE-2022-22971   |   MEDIUM  |  5.2.12.RELEASE | 5.2.22.RELEASE, 5.3.20 |
| org.springframework:spring-core         |    GHSA-36p3-wjmg-h94x   |   UNKNOWN  |  5.2.12.RELEASE | 5.2.20, 5.3.18 |
| org.springframework:spring-expression         |    CVE-2022-22950   |   MEDIUM  |  5.2.12.RELEASE | 5.2.20, 5.3.16 |
| org.springframework:spring-webmvc         |    CVE-2022-22965   |   CRITICAL  |  5.2.12.RELEASE | 5.2.20, 5.3.18 |
| org.springframework:spring-webmvc         |    CVE-2022-22950   |   MEDIUM  |  5.2.12.RELEASE | 5.2.20.RELEASE, 5.3.17 |
| org.yaml:snakeyaml         |    CVE-2017-18640   |   HIGH  |  1.25 | 1.26 |
| org.yaml:snakeyaml         |    CVE-2022-1471   |   HIGH  |  1.25 |  |
| org.yaml:snakeyaml         |    CVE-2022-25857   |   HIGH  |  1.25 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38749   |   MEDIUM  |  1.25 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38750   |   MEDIUM  |  1.25 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38751   |   MEDIUM  |  1.25 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38752   |   MEDIUM  |  1.25 | 1.32 |
| org.yaml:snakeyaml         |    CVE-2022-41854   |   MEDIUM  |  1.25 | 1.32 |

