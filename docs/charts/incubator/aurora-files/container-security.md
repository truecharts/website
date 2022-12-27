# Container Security

##### Detected Containers

          tccr.io/truecharts/aurora-files:latest@sha256:d948b8c2c24f9647351e930e17c6251eef4ff5d2cde39b4ec286f50da1b1aab9
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/aurora-files:latest@sha256:d948b8c2c24f9647351e930e17c6251eef4ff5d2cde39b4ec286f50da1b1aab9**

#### Container: tccr.io/truecharts/aurora-files:latest@sha256:d948b8c2c24f9647351e930e17c6251eef4ff5d2cde39b4ec286f50da1b1aab9 (alpine 3.16.2)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.83.1-r3 | 7.83.1-r4 |
| curl         |    CVE-2022-42915   |   CRITICAL  |  7.83.1-r3 | 7.83.1-r4 |
| curl         |    CVE-2022-42916   |   HIGH  |  7.83.1-r3 | 7.83.1-r4 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r3 | 7.83.1-r5 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r3 | 7.83.1-r5 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.8-r0 | 2.4.9-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.8-r0 | 2.5.0-r0 |
| libcurl         |    CVE-2022-32221   |   CRITICAL  |  7.83.1-r3 | 7.83.1-r4 |
| libcurl         |    CVE-2022-42915   |   CRITICAL  |  7.83.1-r3 | 7.83.1-r4 |
| libcurl         |    CVE-2022-42916   |   HIGH  |  7.83.1-r3 | 7.83.1-r4 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.83.1-r3 | 7.83.1-r5 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.83.1-r3 | 7.83.1-r5 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.14-r1 | 2.9.14-r2 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.14-r1 | 2.9.14-r2 |
| nginx         |    CVE-2022-41741   |   HIGH  |  1.22.0-r1 | 1.22.1-r0 |
| nginx         |    CVE-2022-41742   |   HIGH  |  1.22.0-r1 | 1.22.1-r0 |
| php81         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-common         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-common         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-common         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-common         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-curl         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-curl         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-curl         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-curl         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-dom         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-dom         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-dom         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-dom         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-fileinfo         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-fileinfo         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-fileinfo         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-fileinfo         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-fpm         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-fpm         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-fpm         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-fpm         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-gd         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-gd         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-gd         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-gd         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-iconv         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-iconv         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-iconv         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-iconv         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mbstring         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mbstring         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mbstring         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mbstring         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mysqli         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mysqli         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mysqli         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mysqli         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mysqlnd         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mysqlnd         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-mysqlnd         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-mysqlnd         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-openssl         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-openssl         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-openssl         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-openssl         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo_mysql         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo_mysql         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo_mysql         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo_mysql         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo_sqlite         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo_sqlite         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-pdo_sqlite         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-pdo_sqlite         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-xml         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-xml         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-xml         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-xml         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-zip         |    CVE-2022-37454   |   CRITICAL  |  8.1.9-r0 | 8.1.12-r0 |
| php81-zip         |    CVE-2022-31630   |   HIGH  |  8.1.9-r0 | 8.1.12-r0 |
| php81-zip         |    CVE-2022-31628   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| php81-zip         |    CVE-2022-31629   |   MEDIUM  |  8.1.9-r0 | 8.1.11-r0 |
| python3         |    CVE-2022-37454   |   CRITICAL  |  3.10.5-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-42919   |   HIGH  |  3.10.5-r0 | 3.10.9-r0 |
| python3         |    CVE-2022-45061   |   HIGH  |  3.10.5-r0 | 3.10.9-r0 |

