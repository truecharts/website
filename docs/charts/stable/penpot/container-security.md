# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/penpot-frontend:1.16.2@sha256:c41349dcd43eccf1bf61809e9d46d54dcb22bfbd31c6fb199630e2fbec54d628
          tccr.io/truecharts/penpot-backend:1.16.2@sha256:99997f7640b27274f0b1570cd8c839266661e54a3314dd1f1caf4dd1220de752
          tccr.io/truecharts/penpot-exporter:1.16.2@sha256:8104c3dd90001ca94023b4e0f6a47bdd3868610a31f25fb2aa9e61d2f10130b3
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/penpot-backend:1.16.2@sha256:99997f7640b27274f0b1570cd8c839266661e54a3314dd1f1caf4dd1220de752**

#### Container: tccr.io/truecharts/penpot-backend:1.16.2@sha256:99997f7640b27274f0b1570cd8c839266661e54a3314dd1f1caf4dd1220de752 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| fontforge         |    CVE-2017-11570   |   LOW  |  1:20201107~dfsg-4build1 |  |
| fontforge         |    CVE-2017-11573   |   LOW  |  1:20201107~dfsg-4build1 |  |
| fontforge         |    CVE-2017-17521   |   LOW  |  1:20201107~dfsg-4build1 |  |
| fontforge-common         |    CVE-2017-11570   |   LOW  |  1:20201107~dfsg-4build1 |  |
| fontforge-common         |    CVE-2017-11573   |   LOW  |  1:20201107~dfsg-4build1 |  |
| fontforge-common         |    CVE-2017-17521   |   LOW  |  1:20201107~dfsg-4build1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| imagemagick         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libapparmor1         |    CVE-2016-1585   |   MEDIUM  |  3.0.4-2ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libfontforge4         |    CVE-2017-11570   |   LOW  |  1:20201107~dfsg-4build1 |  |
| libfontforge4         |    CVE-2017-11573   |   LOW  |  1:20201107~dfsg-4build1 |  |
| libfontforge4         |    CVE-2017-17521   |   LOW  |  1:20201107~dfsg-4build1 |  |
| libgif7         |    CVE-2020-23922   |   LOW  |  5.1.9-2build2 |  |
| libgif7         |    CVE-2021-40633   |   LOW  |  5.1.9-2build2 |  |
| libgif7         |    CVE-2022-28506   |   LOW  |  5.1.9-2build2 |  |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.1.2-0ubuntu1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-29338   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-3575   |   LOW  |  2.4.0-6 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libpython3.10         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| libpython3.10-minimal         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| libpython3.10-stdlib         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| locales         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.2.2 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.13.2.2 | 2.12.7.1, 2.13.4 |
| com.google.code.gson:gson         |    CVE-2022-25647   |   HIGH  |  2.7 | 2.8.9 |
| io.netty:netty-codec-http         |    CVE-2022-41915   |   LOW  |  4.1.77.Final | 4.1.86.Final |
| io.undertow:undertow-core         |    CVE-2022-1259   |   HIGH  |  2.2.17.Final |  |
| io.undertow:undertow-core         |    CVE-2022-2053   |   HIGH  |  2.2.17.Final | 2.2.19 |
| io.undertow:undertow-core         |    CVE-2022-2764   |   MEDIUM  |  2.2.17.Final |  |
| org.jsoup:jsoup         |    CVE-2022-36033   |   MEDIUM  |  1.15.1 | 1.15.3 |
| org.yaml:snakeyaml         |    CVE-2022-1471   |   HIGH  |  1.31 |  |
| org.yaml:snakeyaml         |    CVE-2022-38752   |   MEDIUM  |  1.31 | 1.32 |
| org.yaml:snakeyaml         |    CVE-2022-41854   |   MEDIUM  |  1.31 | 1.32 |

**Container: tccr.io/truecharts/penpot-exporter:1.16.2@sha256:8104c3dd90001ca94023b4e0f6a47bdd3868610a31f25fb2aa9e61d2f10130b3**

#### Container: tccr.io/truecharts/penpot-exporter:1.16.2@sha256:8104c3dd90001ca94023b4e0f6a47bdd3868610a31f25fb2aa9e61d2f10130b3 (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| imagemagick         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6-common         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| imagemagick-6.q16         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libapparmor1         |    CVE-2016-1585   |   MEDIUM  |  3.0.4-2ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libjbig2dec0         |    CVE-2017-9216   |   LOW  |  0.19-3build2 |  |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.1.2-0ubuntu1 |  |
| libmagickcore-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickcore-6.q16-6-extra         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2020-25664   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-3574   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-1114   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-28463   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32545   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32546   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2022-32547   |   MEDIUM  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20241   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20243   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20244   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20245   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20246   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20309   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20312   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-20313   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-39212   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libmagickwand-6.q16-6         |    CVE-2021-4219   |   LOW  |  8:6.9.11.60+dfsg-1.3build2 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libnss-systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libopenexr25         |    CVE-2021-3933   |   MEDIUM  |  2.5.7-1 |  |
| libopenexr25         |    CVE-2021-3941   |   LOW  |  2.5.7-1 |  |
| libopenexr25         |    CVE-2021-45942   |   LOW  |  2.5.7-1 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-29338   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-3575   |   LOW  |  2.4.0-6 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libpoppler118         |    CVE-2019-9543   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| libpoppler118         |    CVE-2019-9545   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| libpython3.10-minimal         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| libpython3.10-stdlib         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.3.0-6ubuntu0.3 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| locales         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| poppler-utils         |    CVE-2019-9543   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| poppler-utils         |    CVE-2019-9545   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| python3.10         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| python3.10-minimal         |    CVE-2021-28861   |   LOW  |  3.10.6-1~22.04.2 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| systemd-timesyncd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.amazonaws:aws-java-sdk-s3         |    CVE-2022-31159   |   MEDIUM  |  1.11.580 | 1.12.261 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2019-20330   |   CRITICAL  |  2.9.10.1 | 2.8.11.5, 2.9.10.2 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-8840   |   CRITICAL  |  2.9.10.1 | 2.7.9.7, 2.8.11.5, 2.9.10.3 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9546   |   CRITICAL  |  2.9.10.1 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9547   |   CRITICAL  |  2.9.10.1 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-9548   |   CRITICAL  |  2.9.10.1 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10650   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10672   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10673   |   HIGH  |  2.9.10.1 | 2.6.7.4, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10968   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-10969   |   HIGH  |  2.9.10.1 | 2.7.9.7, 2.8.11.6, 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11111   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11112   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11113   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11619   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-11620   |   HIGH  |  2.9.10.1 | 2.9.10.4 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14060   |   HIGH  |  2.9.10.1 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14061   |   HIGH  |  2.9.10.1 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14062   |   HIGH  |  2.9.10.1 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-14195   |   HIGH  |  2.9.10.1 | 2.9.10.5 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-24616   |   HIGH  |  2.9.10.1 | 2.9.10.6 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-24750   |   HIGH  |  2.9.10.1 | 2.9.10.6 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-25649   |   HIGH  |  2.9.10.1 | 2.6.7.4, 2.9.10.7, 2.10.5.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35490   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35491   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-35728   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36179   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36180   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36181   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36182   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36183   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36184   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36185   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36186   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36187   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36188   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36189   |   HIGH  |  2.9.10.1 | 2.9.10.8 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.9.10.1 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2021-20190   |   HIGH  |  2.9.10.1 | 2.9.10.7 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.9.10.1 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.9.10.1 | 2.12.7.1, 2.13.4 |
| com.fasterxml.jackson.core:jackson-databind         |    GHSA-rpr3-cw39-3pxh   |   UNKNOWN  |  2.9.10.1 | 2.9.10.4 |
| com.google.guava:guava         |    CVE-2018-10237   |   MEDIUM  |  20.0 | 24.1.1-jre, 24.1.1-android |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  20.0 | 30.0 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.5 | 2.7 |
| org.apache.httpcomponents:httpclient         |    CVE-2020-13956   |   MEDIUM  |  4.5.3 | 4.5.13 |
| org.jsoup:jsoup         |    CVE-2021-37714   |   HIGH  |  1.7.2 | 1.14.2 |
| org.jsoup:jsoup         |    CVE-2015-6748   |   MEDIUM  |  1.7.2 | 1.8.3 |
| org.jsoup:jsoup         |    CVE-2022-36033   |   MEDIUM  |  1.7.2 | 1.15.3 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |

**Container: tccr.io/truecharts/penpot-frontend:1.16.2@sha256:c41349dcd43eccf1bf61809e9d46d54dcb22bfbd31c6fb199630e2fbec54d628**

#### Container: tccr.io/truecharts/penpot-frontend:1.16.2@sha256:c41349dcd43eccf1bf61809e9d46d54dcb22bfbd31c6fb199630e2fbec54d628 (debian 11.5)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
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
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgd3         |    CVE-2021-38115   |   MEDIUM  |  2.3.0-2 |  |
| libgd3         |    CVE-2021-40812   |   MEDIUM  |  2.3.0-2 |  |
| libgd3         |    CVE-2021-40145   |   LOW  |  2.3.0-2 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.2.0-1+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.34-4+deb11u1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| nginx         |    CVE-2020-36309   |   MEDIUM  |  1.23.3-1~bullseye |  |
| nginx         |    CVE-2009-4487   |   LOW  |  1.23.3-1~bullseye |  |
| nginx         |    CVE-2013-0337   |   LOW  |  1.23.3-1~bullseye |  |
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

**Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68**

#### Container: tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68 (debian 11.6)
    

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
| libc-l10n         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| libc-l10n         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
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
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3+deb11u1 |  |
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
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
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
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.34-4+deb11u1 |  |
| locales         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u5 |  |
| locales         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u5 |  |
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

**Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276**

#### Container: tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276 (debian 11.6)
    

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

