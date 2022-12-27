# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/appsmith:1.8.13@sha256:fa388b5e251a10770e37079eb94a6ffb6de438707cb98a87959f4c0fd99a0f82
          tccr.io/truecharts/redis:7.0.7@sha256:0c1289e3344b2c3e2268c2d02989350e97dcaeaac937a2a5d058c120e5192276
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/appsmith:1.8.13@sha256:fa388b5e251a10770e37079eb94a6ffb6de438707cb98a87959f4c0fd99a0f82**

#### Container: tccr.io/truecharts/appsmith:1.8.13@sha256:fa388b5e251a10770e37079eb94a6ffb6de438707cb98a87959f4c0fd99a0f82 (ubuntu 20.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| binutils         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-common         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-common         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-common         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-common         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-common         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-x86-64-linux-gnu         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-x86-64-linux-gnu         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-x86-64-linux-gnu         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| binutils-x86-64-linux-gnu         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3ubuntu2 |  |
| cpp         |    CVE-2020-13844   |   MEDIUM  |  1.185.1ubuntu2 |  |
| cpp-9         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| dirmngr         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| g++         |    CVE-2020-13844   |   MEDIUM  |  1.185.1ubuntu2 |  |
| g++-9         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| gcc         |    CVE-2020-13844   |   MEDIUM  |  1.185.1ubuntu2 |  |
| gcc-9         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| gcc-9-base         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.25.1-1ubuntu3.6 |  |
| gnupg         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gnupg-l10n         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gnupg-utils         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpg         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpg-agent         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpg-wks-client         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpg-wks-server         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpgconf         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpgsm         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.19-3ubuntu2.2 |  |
| libapparmor1         |    CVE-2016-1585   |   MEDIUM  |  2.13.3-7ubuntu5.1 |  |
| libasan5         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| libasn1-8-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libasn1-8-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libasn1-8-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libasn1-8-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libbinutils         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| libbinutils         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| libbinutils         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| libbinutils         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| libbinutils         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc-dev-bin         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libc6-dev         |    CVE-2016-20013   |   LOW  |  2.31-0ubuntu9.9 |  |
| libcroco3         |    CVE-2017-8834   |   LOW  |  0.6.13-1 |  |
| libcroco3         |    CVE-2017-8871   |   LOW  |  0.6.13-1 |  |
| libcroco3         |    CVE-2020-12825   |   LOW  |  0.6.13-1 |  |
| libctf-nobfd0         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf-nobfd0         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf-nobfd0         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf-nobfd0         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf-nobfd0         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf0         |    CVE-2017-13716   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf0         |    CVE-2018-20657   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf0         |    CVE-2019-1010204   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf0         |    CVE-2021-45078   |   LOW  |  2.34-6ubuntu1.4 |  |
| libctf0         |    CVE-2021-46195   |   LOW  |  2.34-6ubuntu1.4 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.68.0-1ubuntu2.14 |  |
| libgcc-9-dev         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| libgd3         |    CVE-2021-40812   |   LOW  |  2.2.5-5.2ubuntu2.1 |  |
| libgif7         |    CVE-2020-23922   |   LOW  |  5.1.9-1 |  |
| libgif7         |    CVE-2021-40633   |   LOW  |  5.1.9-1 |  |
| libgif7         |    CVE-2022-28506   |   LOW  |  5.1.9-1 |  |
| libgssapi-krb5-2         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libgssapi-krb5-2         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libgssapi3-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libgssapi3-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libgssapi3-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libgssapi3-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhcrypto4-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhcrypto4-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhcrypto4-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhcrypto4-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimbase1-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimbase1-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimbase1-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimbase1-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimntlm0-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimntlm0-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimntlm0-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libheimntlm0-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhx509-5-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhx509-5-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhx509-5-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libhx509-5-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libjpeg-turbo8         |    CVE-2022-32325   |   LOW  |  2.0.3-0ubuntu1.20.04.3 |  |
| libk5crypto3         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libk5crypto3         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5-26-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libkrb5-26-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libkrb5-26-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libkrb5-26-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libkrb5-3         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5-3         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5support0         |    CVE-2021-36222   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libkrb5support0         |    CVE-2021-37750   |   MEDIUM  |  1.17-6ubuntu4.1 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12ubuntu0.1 |  |
| libpng16-16         |    CVE-2022-3857   |   LOW  |  1.6.37-2 |  |
| libpolkit-agent-1-0         |    CVE-2016-2568   |   LOW  |  0.105-26ubuntu1.3 |  |
| libpolkit-gobject-1-0         |    CVE-2016-2568   |   LOW  |  0.105-26ubuntu1.3 |  |
| libpython2.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| libpython2.7-minimal         |    CVE-2022-0391   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| libpython2.7-stdlib         |    CVE-2021-4189   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| libpython2.7-stdlib         |    CVE-2022-0391   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| libpython3.8-minimal         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.6 |  |
| libpython3.8-stdlib         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.6 |  |
| libroken18-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libroken18-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libroken18-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libroken18-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libstdc++-9-dev         |    CVE-2020-13844   |   MEDIUM  |  9.4.0-1ubuntu1~20.04.1 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.7 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.1.0+git191117-2ubuntu0.20.04.7 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |
| libwind0-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libwind0-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libwind0-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| libwind0-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.7.0+dfsg-1ubuntu1.2 |  |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2013-7445   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2015-8553   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2016-8660   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-17977   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-12362   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-24504   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-36310   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-20320   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-3864   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-39800   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-4001   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-4148   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-4150   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-4218   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-0168   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-0382   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-0400   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-1263   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-1508   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-20148   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-2991   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-3545   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-3623   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-3640   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-3643   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-39189   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-4139   |   MEDIUM  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2017-0537   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2017-13165   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-12929   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-12930   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2018-12931   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2019-14899   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2019-15213   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2019-19378   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2019-19814   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-12363   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-12364   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-14304   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-34981   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-3669   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2021-39801   |   LOW  |  5.4.0-135.152 |  |
| linux-libc-dev         |    CVE-2022-0854   |   LOW  |  5.4.0-135.152 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1ubuntu5.20.04.4 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2-0ubuntu2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.2-0ubuntu2 |  |
| nodejs         |    CVE-2022-32212   |   MEDIUM  |  14.21.1-deb-1nodesource1 |  |
| openssh-client         |    CVE-2020-14145   |   LOW  |  1:8.2p1-4ubuntu0.5 |  |
| openssh-client         |    CVE-2021-41617   |   LOW  |  1:8.2p1-4ubuntu0.5 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1ubuntu5.20.04.4 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-6 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-6 |  |
| policykit-1         |    CVE-2016-2568   |   LOW  |  0.105-26ubuntu1.3 |  |
| python-pip-whl         |    CVE-2021-33503   |   LOW  |  20.0.2-5ubuntu1.6 |  |
| python2.7         |    CVE-2021-4189   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| python2.7         |    CVE-2022-0391   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| python2.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| python2.7-minimal         |    CVE-2022-0391   |   MEDIUM  |  2.7.18-1~20.04.3 |  |
| python3-urllib3         |    CVE-2021-33503   |   LOW  |  1.25.8-2ubuntu0.1 |  |
| python3.8         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.6 |  |
| python3.8-minimal         |    CVE-2021-28861   |   LOW  |  3.8.10-0ubuntu1~20.04.6 |  |
| redis         |    CVE-2020-14147   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32626   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32627   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32628   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32672   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32675   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-32687   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis         |    CVE-2021-41099   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2020-14147   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32626   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32627   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32628   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32672   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32675   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-32687   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-server         |    CVE-2021-41099   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2020-14147   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32626   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32627   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32628   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32672   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32675   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-32687   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| redis-tools         |    CVE-2021-41099   |   MEDIUM  |  5:5.0.7-2ubuntu0.1 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |
| systemd-timesyncd         |    CVE-2022-3821   |   MEDIUM  |  245.4-4ubuntu3.19 |  |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.amazonaws:aws-java-sdk-s3         |    CVE-2022-31159   |   MEDIUM  |  1.11.327 | 1.12.261 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.13.2 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.2 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.13.2 | 2.12.7.1, 2.13.4 |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  29.0-android | 30.0 |
| com.google.oauth-client:google-oauth-client         |    CVE-2021-22573   |   HIGH  |  1.31.5 | 1.33.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3171   |   HIGH  |  3.12.2 | 3.16.3, 3.19.6, 3.20.3, 3.21.7 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3509   |   HIGH  |  3.12.2 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2022-3510   |   HIGH  |  3.12.2 | 3.21.7, 3.20.3, 3.19.6, 3.16.3 |
| com.google.protobuf:protobuf-java         |    CVE-2021-22569   |   MEDIUM  |  3.12.2 | 3.16.1, 3.18.2, 3.19.2 |
| com.google.protobuf:protobuf-java         |    GHSA-h4h5-3hr4-j3g2   |   UNKNOWN  |  3.12.2 | 3.20.3, 3.21.7, 3.16.3, 3.19.6 |
| com.google.protobuf:protobuf-java         |    GHSA-wrvw-hg22-4m67   |   UNKNOWN  |  3.12.2 | 3.16.1, 3.18.2, 3.19.2 |
| com.h2database:h2         |    CVE-2022-45868   |   HIGH  |  2.1.210 |  |
| io.netty:netty-codec         |    CVE-2021-37136   |   HIGH  |  4.1.48.Final | 4.1.68.Final |
| io.netty:netty-codec         |    CVE-2021-37137   |   HIGH  |  4.1.48.Final | 4.1.68.Final |
| io.netty:netty-codec         |    CVE-2021-21290   |   MEDIUM  |  4.1.48.Final | 4.1.59.Final |
| io.netty:netty-codec         |    CVE-2021-21409   |   MEDIUM  |  4.1.48.Final | 4.1.61.Final |
| io.netty:netty-codec         |    CVE-2022-24823   |   MEDIUM  |  4.1.48.Final | 4.1.77.Final |
| io.netty:netty-codec         |    CVE-2022-24823   |   MEDIUM  |  4.1.75.Final | 4.1.77.Final |
| io.netty:netty-codec-http         |    CVE-2021-21290   |   MEDIUM  |  4.1.48.Final | 4.1.59.Final |
| io.netty:netty-codec-http         |    CVE-2021-21409   |   MEDIUM  |  4.1.48.Final | 4.1.61.Final |
| io.netty:netty-codec-http         |    CVE-2021-43797   |   MEDIUM  |  4.1.48.Final | 4.1.71.Final |
| io.netty:netty-codec-http         |    CVE-2022-24823   |   MEDIUM  |  4.1.48.Final | 4.1.77.Final |
| io.netty:netty-codec-http         |    CVE-2022-41915   |   LOW  |  4.1.48.Final | 4.1.86.Final |
| io.netty:netty-codec-http         |    CVE-2022-24823   |   MEDIUM  |  4.1.75.Final | 4.1.77.Final |
| io.netty:netty-codec-http         |    CVE-2022-41915   |   LOW  |  4.1.75.Final | 4.1.86.Final |
| io.netty:netty-codec-http2         |    CVE-2021-21290   |   MEDIUM  |  4.1.48.Final | 4.1.59.Final |
| io.netty:netty-codec-http2         |    CVE-2021-21295   |   MEDIUM  |  4.1.48.Final | 4.1.60.Final |
| io.netty:netty-codec-http2         |    CVE-2021-21409   |   MEDIUM  |  4.1.48.Final | 4.1.61.Final |
| io.netty:netty-codec-http2         |    CVE-2022-24823   |   MEDIUM  |  4.1.48.Final | 4.1.77.Final |
| io.netty:netty-codec-http2         |    CVE-2022-24823   |   MEDIUM  |  4.1.75.Final | 4.1.77.Final |
| io.netty:netty-handler         |    CVE-2021-21290   |   MEDIUM  |  4.1.48.Final | 4.1.59.Final |
| io.netty:netty-handler         |    CVE-2021-21409   |   MEDIUM  |  4.1.48.Final | 4.1.61.Final |
| io.netty:netty-handler         |    CVE-2022-24823   |   MEDIUM  |  4.1.48.Final | 4.1.77.Final |
| io.netty:netty-handler         |    CVE-2022-24823   |   MEDIUM  |  4.1.75.Final | 4.1.77.Final |
| io.projectreactor.netty:reactor-netty-http         |    CVE-2022-31684   |   MEDIUM  |  1.0.17 | 1.0.24 |
| org.apache.sshd:sshd-common         |    CVE-2022-45047   |   CRITICAL  |  2.7.0 | 2.9.2 |
| org.ff4j:ff4j-core         |    CVE-2022-44262   |   CRITICAL  |  1.8.11 | 1.9 |
| org.springframework.boot:spring-boot         |    CVE-2022-22965   |   CRITICAL  |  2.6.5 | 2.5.12, 2.6.6 |
| org.springframework.data:spring-data-mongodb         |    CVE-2022-22980   |   CRITICAL  |  3.3.3 | 3.3.5, 3.4.1 |
| org.springframework.security:spring-security-core         |    CVE-2022-22978   |   CRITICAL  |  5.6.2 | 5.5.7, 5.6.4 |
| org.springframework.security:spring-security-core         |    CVE-2022-31692   |   CRITICAL  |  5.6.2 | 5.6.9, 5.7.5 |
| org.springframework.security:spring-security-core         |    CVE-2022-31690   |   HIGH  |  5.6.2 | 5.6.9, 5.7.5 |
| org.springframework.security:spring-security-core         |    CVE-2022-22976   |   MEDIUM  |  5.6.2 | 5.5.7, 5.6.4 |
| org.springframework.security:spring-security-oauth2-client         |    CVE-2022-31690   |   HIGH  |  5.6.2 | 5.6.9, 5.7.5 |
| org.springframework:spring-beans         |    CVE-2022-22965   |   CRITICAL  |  5.3.17 | 5.2.20.RELEASE, 5.3.18 |
| org.springframework:spring-beans         |    GHSA-36p3-wjmg-h94x   |   UNKNOWN  |  5.3.17 | 5.2.20, 5.3.18 |
| org.springframework:spring-core         |    CVE-2022-22968   |   MEDIUM  |  5.3.17 | 5.2.21, 5.3.19 |
| org.springframework:spring-core         |    CVE-2022-22970   |   MEDIUM  |  5.3.17 | 5.2.22.RELEASE, 5.3.20 |
| org.springframework:spring-core         |    CVE-2022-22971   |   MEDIUM  |  5.3.17 | 5.2.22.RELEASE, 5.3.20 |
| org.springframework:spring-core         |    GHSA-36p3-wjmg-h94x   |   UNKNOWN  |  5.3.17 | 5.2.20, 5.3.18 |
| org.springframework:spring-webflux         |    CVE-2022-22965   |   CRITICAL  |  5.3.17 | 5.2.20, 5.3.18 |
| org.yaml:snakeyaml         |    CVE-2022-1471   |   HIGH  |  1.29 |  |
| org.yaml:snakeyaml         |    CVE-2022-25857   |   HIGH  |  1.29 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38749   |   MEDIUM  |  1.29 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38750   |   MEDIUM  |  1.29 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38751   |   MEDIUM  |  1.29 | 1.31 |
| org.yaml:snakeyaml         |    CVE-2022-38752   |   MEDIUM  |  1.29 | 1.32 |
| org.yaml:snakeyaml         |    CVE-2022-41854   |   MEDIUM  |  1.29 | 1.32 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| qs         |    CVE-2022-24999   |   HIGH  |  6.9.3 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |

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

