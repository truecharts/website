# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/blocky:v0.19@sha256:77a474542f12f480deca33ff0a6375846918b86988c13f858620839d8818ca84
          tccr.io/truecharts/blocky-frontend:v0.0.3@sha256:81058f20520dcdb80c9883b6f21b338446fefc333e3ca8bd7d17336a24a5d842
          tccr.io/truecharts/redis:7.0.8@sha256:13e0bbf5369ed2f219b96c0e7136b531eb1fdca1db7b7e2c72e13133adf26288
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/blocky-frontend:v0.0.3@sha256:81058f20520dcdb80c9883b6f21b338446fefc333e3ca8bd7d17336a24a5d842**

#### Container: tccr.io/truecharts/blocky-frontend:v0.0.3@sha256:81058f20520dcdb80c9883b6f21b338446fefc333e3ca8bd7d17336a24a5d842 (alpine 3.15.4)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcrypto1.1         |    CVE-2022-4450   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2023-0215   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libcrypto1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1n-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-4450   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0215   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1n-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1n-r0 | 1.1.1t-r0 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.12-r0 | 1.2.12-r2 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20220210151621-f4118a5b28e2 | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220127200216-cd36cc0744dd | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220127200216-cd36cc0744dd | 0.4.0 |
| golang.org/x/net         |    CVE-2022-41723   |   LOW  |  v0.0.0-20220127200216-cd36cc0744dd | 0.7.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220209214540-3681064d5158 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.8-0.20211004125949-5bd84dd9b33b | 0.3.8 |

**Container: tccr.io/truecharts/blocky:v0.19@sha256:77a474542f12f480deca33ff0a6375846918b86988c13f858620839d8818ca84**

#### Container: tccr.io/truecharts/blocky:v0.19@sha256:77a474542f12f480deca33ff0a6375846918b86988c13f858620839d8818ca84 (alpine 3.16.0)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bind-libs         |    CVE-2022-2795   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-2881   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-2906   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-3080   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-3094   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| bind-libs         |    CVE-2022-3736   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| bind-libs         |    CVE-2022-38177   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-38178   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-libs         |    CVE-2022-3924   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| bind-tools         |    CVE-2022-2795   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-2881   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-2906   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-3080   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-3094   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| bind-tools         |    CVE-2022-3736   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| bind-tools         |    CVE-2022-38177   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-38178   |   HIGH  |  9.16.29-r0 | 9.16.33-r0 |
| bind-tools         |    CVE-2022-3924   |   HIGH  |  9.16.29-r0 | 9.16.37-r0 |
| busybox         |    CVE-2022-30065   |   HIGH  |  1.35.0-r13 | 1.35.0-r15 |
| krb5-libs         |    CVE-2022-42898   |   HIGH  |  1.19.3-r0 | 1.19.4-r0 |
| libcrypto1.1         |    CVE-2022-4450   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2023-0215   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1o-r0 | 1.1.1q-r0 |
| libcrypto1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1o-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-4450   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0215   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1o-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1o-r0 | 1.1.1q-r0 |
| libssl1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1o-r0 | 1.1.1t-r0 |
| libxml2         |    CVE-2022-2309   |   HIGH  |  2.9.14-r0 | 2.9.14-r1 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.14-r0 | 2.9.14-r2 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.14-r0 | 2.9.14-r2 |
| ssl_client         |    CVE-2022-30065   |   HIGH  |  1.35.0-r13 | 1.35.0-r15 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.12-r1 | 1.2.12-r2 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20211209193657-4570a0811e8b | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.4.0 |
| golang.org/x/net         |    CVE-2022-41723   |   LOW  |  v0.0.0-20220425223048-2871e0cb64e4 | 0.7.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220319134239-a9b59b0215f8 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

**Container: tccr.io/truecharts/redis:7.0.8@sha256:13e0bbf5369ed2f219b96c0e7136b531eb1fdca1db7b7e2c72e13133adf26288**

#### Container: tccr.io/truecharts/redis:7.0.8@sha256:13e0bbf5369ed2f219b96c0e7136b531eb1fdca1db7b7e2c72e13133adf26288 (debian 11.6)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   HIGH  |  5.1-2+deb11u1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-2+deb11u2 |  |
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
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5+deb11u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u3 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
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
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u4 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u4 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-7+deb11u1 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-7+deb11u1 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
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
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb11u4 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb11u4 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| tar         |    CVE-2022-48303   |   LOW  |  1.34+dfsg-1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8+deb11u1 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/opencontainers/runc         |    CVE-2022-29162   |   HIGH  |  v1.1.0 | v1.1.2 |
| github.com/opencontainers/runc         |    CVE-2022-24769   |   MEDIUM  |  v1.1.0 | v1.1.2 |

