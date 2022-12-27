# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/photoprism:v221118@sha256:eed14e57bf198d5263bbd5e6631a77f78a3bb812556cfc1d3267e107e5b23baa
          tccr.io/truecharts/mariadb:10.10.2@sha256:ce108313bfb68b0677f76154fe74d04e4c9f0d19a4b52ee04159040b532ba642
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

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

**Container: tccr.io/truecharts/photoprism:v221118@sha256:eed14e57bf198d5263bbd5e6631a77f78a3bb812556cfc1d3267e107e5b23baa**

#### Container: tccr.io/truecharts/photoprism:v221118@sha256:eed14e57bf198d5263bbd5e6631a77f78a3bb812556cfc1d3267e107e5b23baa (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| ca-certificates         |    CVE-2022-23491   |   MEDIUM  |  20211016 | 20211016ubuntu0.22.04.1 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| darktable         |    CVE-2015-8366   |   LOW  |  4.0.1-1.1 |  |
| darktable         |    CVE-2017-16910   |   LOW  |  4.0.1-1.1 |  |
| ffmpeg         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| gpg         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgconf         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
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
| libavcodec-extra         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libavcodec-extra58         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libavdevice58         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libavfilter7         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libavformat58         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libavutil56         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5ubuntu2 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libexpat1         |    CVE-2022-43680   |   MEDIUM  |  2.4.7-1ubuntu0.1 | 2.4.7-1ubuntu0.2 |
| libflac8         |    CVE-2021-0561   |   LOW  |  1.3.3-2build2 | 1.3.3-2ubuntu0.1 |
| libgd3         |    CVE-2021-40812   |   LOW  |  2.3.0-2ubuntu2 |  |
| libgif7         |    CVE-2020-23922   |   LOW  |  5.1.9-2build2 |  |
| libgif7         |    CVE-2021-40633   |   LOW  |  5.1.9-2build2 |  |
| libgif7         |    CVE-2022-28506   |   LOW  |  5.1.9-2build2 |  |
| libgpac11         |    CVE-2018-1000100   |   MEDIUM  |  2.0.0+dfsg1-2 |  |
| libgpac11         |    CVE-2021-28300   |   MEDIUM  |  2.0.0+dfsg1-2 |  |
| libgraphicsmagick++-q16-12         |    CVE-2017-13736   |   LOW  |  1.4+really1.3.38-1 |  |
| libgraphicsmagick-q16-3         |    CVE-2017-13736   |   LOW  |  1.4+really1.3.38-1 |  |
| libhdf5-103-1         |    CVE-2017-17507   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2018-17432   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2018-17433   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2018-17434   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2018-17437   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2018-17438   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2019-8397   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2019-9151   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-103-1         |    CVE-2019-9152   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2017-17507   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2018-17432   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2018-17433   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2018-17434   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2018-17437   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2018-17438   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2019-8397   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2019-9151   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libhdf5-hl-100         |    CVE-2019-9152   |   MEDIUM  |  1.10.7+repack-4ubuntu2 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1build3 | 2.1-3.1ubuntu0.22.04.1 |
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
| libnetcdf19         |    CVE-2021-31348   |   MEDIUM  |  1:4.8.1-1 |  |
| libnetcdf19         |    CVE-2021-31598   |   MEDIUM  |  1:4.8.1-1 |  |
| libnetcdf19         |    CVE-2019-20199   |   LOW  |  1:4.8.1-1 |  |
| libopencv-core4.5d         |    CVE-2019-9423   |   MEDIUM  |  4.5.4+dfsg-9ubuntu4 |  |
| libopencv-imgcodecs4.5d         |    CVE-2019-9423   |   MEDIUM  |  4.5.4+dfsg-9ubuntu4 |  |
| libopencv-imgproc4.5d         |    CVE-2019-9423   |   MEDIUM  |  4.5.4+dfsg-9ubuntu4 |  |
| libopencv-videoio4.5d         |    CVE-2019-9423   |   MEDIUM  |  4.5.4+dfsg-9ubuntu4 |  |
| libopenexr25         |    CVE-2021-3933   |   MEDIUM  |  2.5.7-1 |  |
| libopenexr25         |    CVE-2021-3941   |   LOW  |  2.5.7-1 |  |
| libopenexr25         |    CVE-2021-45942   |   LOW  |  2.5.7-1 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-29338   |   LOW  |  2.4.0-6 |  |
| libopenjp2-7         |    CVE-2021-3575   |   LOW  |  2.4.0-6 |  |
| libopenmpt0         |    CVE-2019-17113   |   MEDIUM  |  0.6.1-1 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-3build5 |  |
| libpoppler118         |    CVE-2019-9543   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| libpoppler118         |    CVE-2019-9545   |   LOW  |  22.02.0-2ubuntu0.1 |  |
| libpostproc55         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libsndfile1         |    CVE-2021-4156   |   LOW  |  1.0.31-2build1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libswresample3         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libswscale5         |    CVE-2022-3964   |   MEDIUM  |  7:4.4.2-0ubuntu0.22.04.1 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtiff5         |    CVE-2022-3970   |   MEDIUM  |  4.3.0-6ubuntu0.2 | 4.3.0-6ubuntu0.3 |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.3.0-6ubuntu0.2 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.3.0-6ubuntu0.2 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libvo-amrwbenc0         |    CVE-2019-2128   |   MEDIUM  |  0.1.3-2 |  |
| libxerces-c3.2         |    CVE-2018-1311   |   MEDIUM  |  3.2.3+debian-3build1 |  |
| libxerces-c3.2         |    CVE-2012-0880   |   LOW  |  3.2.3+debian-3build1 |  |
| libxml2         |    CVE-2022-40303   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-40304   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-2309   |   LOW  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| rawtherapee         |    CVE-2013-1438   |   MEDIUM  |  5.8-3 |  |
| rawtherapee         |    CVE-2017-13735   |   MEDIUM  |  5.8-3 |  |
| rawtherapee         |    CVE-2015-8366   |   LOW  |  5.8-3 |  |
| rawtherapee         |    CVE-2015-8367   |   LOW  |  5.8-3 |  |
| rawtherapee         |    CVE-2017-16910   |   LOW  |  5.8-3 |  |
| rawtherapee-data         |    CVE-2013-1438   |   MEDIUM  |  5.8-3 |  |
| rawtherapee-data         |    CVE-2017-13735   |   MEDIUM  |  5.8-3 |  |
| rawtherapee-data         |    CVE-2015-8366   |   LOW  |  5.8-3 |  |
| rawtherapee-data         |    CVE-2015-8367   |   LOW  |  5.8-3 |  |
| rawtherapee-data         |    CVE-2017-16910   |   LOW  |  5.8-3 |  |
| sqlite3         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21.2-2ubuntu1 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

