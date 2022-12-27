# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/immich-server:1.39.0_61@sha256:150bc50169418d4b6da875cc29a07a7dfa1194a41d48fb42b9e45a5d7676d850
          tccr.io/truecharts/immich-server:1.39.0_61@sha256:150bc50169418d4b6da875cc29a07a7dfa1194a41d48fb42b9e45a5d7676d850
          tccr.io/truecharts/immich-ml:1.39.0_61@sha256:b5609ed5e36b647ecdeab1c8e5297ed3920ad69c1da859b1f327be465c355927
          tccr.io/truecharts/immich-proxy:1.39.0_61@sha256:97994bf419d6cb1a318827896cc7927dfbab8e162153f4b1e61ae179095146cb
          tccr.io/truecharts/immich-web:1.39.0_61@sha256:213fbb0cd372d9e22141656605045d959a0888d51a8e95a772fcb4f1684354ff
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/immich-ml:1.39.0_61@sha256:b5609ed5e36b647ecdeab1c8e5297ed3920ad69c1da859b1f327be465c355927**

#### Container: tccr.io/truecharts/immich-ml:1.39.0_61@sha256:b5609ed5e36b647ecdeab1c8e5297ed3920ad69c1da859b1f327be465c355927 (debian 11.5)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| ffmpeg         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| ffmpeg         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libaom0         |    CVE-2021-30473   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30474   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2021-30475   |   CRITICAL  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-0478   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36131   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36133   |   HIGH  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36130   |   MEDIUM  |  1.0.0.errata1-3 |  |
| libaom0         |    CVE-2020-36135   |   MEDIUM  |  1.0.0.errata1-3 |  |
| libapparmor1         |    CVE-2016-1585   |   LOW  |  2.13.6-10 |  |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libavcodec58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavcodec58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavdevice58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavfilter7         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavformat58         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavresample4         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libavutil56         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libblas3         |    CVE-2021-4048   |   CRITICAL  |  3.9.0-3 |  |
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
| libcaca0         |    CVE-2021-30498   |   HIGH  |  0.99.beta19-2.2 |  |
| libcaca0         |    CVE-2021-30499   |   HIGH  |  0.99.beta19-2.2 |  |
| libcaca0         |    CVE-2022-0856   |   LOW  |  0.99.beta19-2.2 |  |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo-gobject2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-5 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-5 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2+deb11u5 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1+deb11u1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libglib2.0-data         |    CVE-2012-0039   |   LOW  |  2.66.8-1 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u2 |  |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.7.4-1 |  |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:2.0.6-4 |  |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| liblapack3         |    CVE-2021-4048   |   CRITICAL  |  3.9.0-3 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libmysofa1         |    CVE-2021-3756   |   CRITICAL  |  1.2~dfsg0-1 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libopenjp2-7         |    CVE-2021-3575   |   HIGH  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2021-29338   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2022-1122   |   MEDIUM  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10505   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-10506   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9113   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9114   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9115   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9116   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9117   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9580   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2016-9581   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2017-17479   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16375   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-16376   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2018-20846   |   LOW  |  2.4.0-3 |  |
| libopenjp2-7         |    CVE-2019-6988   |   LOW  |  2.4.0-3 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libpostproc55         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libpostproc55         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libsndfile1         |    CVE-2021-4156   |   HIGH  |  1.0.31-2 |  |
| libspeex1         |    CVE-2020-23903   |   MEDIUM  |  1.2~rc1.2-1.1 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u3 |  |
| libswresample3         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswresample3         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3109   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3964   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2022-3965   |   HIGH  |  7:4.3.5-0+deb11u1 |  |
| libswscale5         |    CVE-2020-22038   |   LOW  |  7:4.3.5-0+deb11u1 |  |
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
| libvpx6         |    CVE-2017-0641   |   LOW  |  1.9.0-1 |  |
| libwavpack1         |    CVE-2022-2476   |   MEDIUM  |  5.4.0-1 |  |
| libwavpack1         |    CVE-2021-44269   |   LOW  |  5.4.0-1 |  |
| libwayland-client0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-cursor0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-egl1         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwayland-server0         |    CVE-2021-3782   |   CRITICAL  |  1.18.0-2~exp1.1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libwebpmux3         |    CVE-2016-9085   |   LOW  |  0.6.1-2.1 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.10+dfsg-6.7+deb11u3 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| xdg-user-dirs         |    CVE-2017-15131   |   LOW  |  0.17-2 |  |

**Container: tccr.io/truecharts/immich-proxy:1.39.0_61@sha256:97994bf419d6cb1a318827896cc7927dfbab8e162153f4b1e61ae179095146cb**

#### Container: tccr.io/truecharts/immich-proxy:1.39.0_61@sha256:97994bf419d6cb1a318827896cc7927dfbab8e162153f4b1e61ae179095146cb (debian 11.5)
    

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
| nginx         |    CVE-2020-36309   |   MEDIUM  |  1.23.2-1~bullseye |  |
| nginx         |    CVE-2009-4487   |   LOW  |  1.23.2-1~bullseye |  |
| nginx         |    CVE-2013-0337   |   LOW  |  1.23.2-1~bullseye |  |
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

**Container: tccr.io/truecharts/immich-server:1.39.0_61@sha256:150bc50169418d4b6da875cc29a07a7dfa1194a41d48fb42b9e45a5d7676d850**

#### Container: tccr.io/truecharts/immich-server:1.39.0_61@sha256:150bc50169418d4b6da875cc29a07a7dfa1194a41d48fb42b9e45a5d7676d850 (alpine 3.14.6)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.12-r0 | 1.2.12-r2 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| engine.io         |    CVE-2022-41940   |   MEDIUM  |  6.2.0 | 6.2.1, 3.6.1 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| sharp         |    CVE-2022-29256   |   MEDIUM  |  0.28.3 | 0.30.5 |

**Container: tccr.io/truecharts/immich-web:1.39.0_61@sha256:213fbb0cd372d9e22141656605045d959a0888d51a8e95a772fcb4f1684354ff**

#### Container: tccr.io/truecharts/immich-web:1.39.0_61@sha256:213fbb0cd372d9e22141656605045d959a0888d51a8e95a772fcb4f1684354ff (alpine 3.14.6)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.12-r0 | 1.2.12-r2 |

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

