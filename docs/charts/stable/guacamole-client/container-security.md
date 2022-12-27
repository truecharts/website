# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          'tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee'
          'tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f'
          'tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee'
          'tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee'
          tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee
          tccr.io/truecharts/postgresql:14.6.0@sha256:5f33a63266313d2456b0e3517aa8d27e5a0cc24c7e34c46c7c85b336ca4c2d68
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: 'tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee'**


**Container: tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee**

#### Container: tccr.io/truecharts/guacamole-client:v1.4.0@sha256:ee47f0bfa10658683f46cd08316dac56dfb78a0a71a579db0efecd59466adfee (debian 11.2)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.1-2 |  |
| bsdutils         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| bsdutils         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.32-4 |  |
| curl         |    CVE-2021-22945   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-32207   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2021-22946   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-22576   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-27775   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-27781   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-27782   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2021-22947   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-27776   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-32205   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-32206   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-32208   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2021-22898   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| curl         |    CVE-2021-22924   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| curl         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u3 |
| dirmngr         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.20.9 | 1.20.10 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| git         |    CVE-2022-24765   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-29187   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-39260   |   HIGH  |  1:2.30.2-1 |  |
| git         |    CVE-2022-39253   |   MEDIUM  |  1:2.30.2-1 |  |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.30.2-1 |  |
| git         |    CVE-2022-24975   |   LOW  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-24765   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-29187   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-39260   |   HIGH  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-39253   |   MEDIUM  |  1:2.30.2-1 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.30.2-1 |  |
| git-man         |    CVE-2022-24975   |   LOW  |  1:2.30.2-1 |  |
| gnupg         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gnupg-l10n         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gnupg-utils         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpg         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpg-agent         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpg-wks-client         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpg-wks-server         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpgconf         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpgsm         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.27-2 | 2.2.27-2+deb11u2 |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.10-4 | 1.10-4+deb11u1 |
| libapt-pkg6.0         |    CVE-2011-3374   |   LOW  |  2.2.4 |  |
| libblkid1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libblkid1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u2 | 2.31-13+deb11u4 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u2 |  |
| libc-bin         |    CVE-2021-43396   |   LOW  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.31-13+deb11u2 | 2.31-13+deb11u4 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.31-13+deb11u2 |  |
| libc6         |    CVE-2021-43396   |   LOW  |  2.31-13+deb11u2 | 2.31-13+deb11u3 |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libcurl3-gnutls         |    CVE-2021-22945   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-32207   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2021-22946   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-22576   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-27775   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-27781   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-27782   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2021-22947   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-27774   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-27776   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-32205   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-32206   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-32208   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2021-22898   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| libcurl3-gnutls         |    CVE-2021-22924   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl3-gnutls         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u3 |
| libcurl4         |    CVE-2021-22945   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-32207   |   CRITICAL  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2021-22946   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-22576   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-27775   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-27781   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-27782   |   HIGH  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-42916   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2021-22947   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-27774   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-27776   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-32205   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-32206   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-32208   |   MEDIUM  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2021-22898   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.74.0-1.3+deb11u1 |  |
| libcurl4         |    CVE-2021-22924   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u2 |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.74.0-1.3+deb11u1 | 7.74.0-1.3+deb11u3 |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.8 |  |
| libexpat1         |    CVE-2022-22822   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-22823   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-22824   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-23852   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-25235   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u2 |
| libexpat1         |    CVE-2022-25236   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u2 |
| libexpat1         |    CVE-2022-25315   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u2 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.10-2 | 2.2.10-2+deb11u4 |
| libexpat1         |    CVE-2021-45960   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2021-46143   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-22825   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-22826   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-22827   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-23990   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u1 |
| libexpat1         |    CVE-2022-25314   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u2 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.10-2 | 2.2.10-2+deb11u5 |
| libexpat1         |    CVE-2022-25313   |   MEDIUM  |  2.2.10-2 | 2.2.10-2+deb11u2 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.10-2 |  |
| libexpat1         |    DSA-5085-2   |   UNKNOWN  |  2.2.10-2 | 2.2.10-2+deb11u3 |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.10.4+dfsg-1 | 2.10.4+dfsg-1+deb11u1 |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.10.4+dfsg-1 | 2.10.4+dfsg-1+deb11u1 |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.10.4+dfsg-1 | 2.10.4+dfsg-1+deb11u1 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.10.4+dfsg-1 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.7-6 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.7-6 |  |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.7.1-5 | 3.7.1-5+deb11u2 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.7.1-5 | 3.7.1-5+deb11u1 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.7.1-5 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.18.3-6+deb11u1 | 1.18.3-6+deb11u3 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.18.3-6+deb11u1 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.18.3-6+deb11u1 |  |
| libksba8         |    CVE-2022-3515   |   HIGH  |  1.5.0-3 | 1.5.0-3+deb11u1 |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.5.0-3 | 1.5.0-3+deb11u2 |
| libldap-2.4-2         |    CVE-2022-29155   |   CRITICAL  |  2.4.57+dfsg-3 | 2.4.57+dfsg-3+deb11u1 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-3 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-3 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-3 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-3 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.5-2 | 5.2.5-2.1~deb11u1 |
| libmount1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libmount1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.36-2 | 10.36-2+deb11u1 |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-13 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-13 |  |
| libperl5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| libperl5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.37-3 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.37-3 |  |
| libpython3.9-minimal         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| libpython3.9-minimal         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| libpython3.9-stdlib         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-2.1 | 2.1.27+dfsg-2.1+deb11u1 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-2.1 | 2.1.27+dfsg-2.1+deb11u1 |
| libsepol1         |    CVE-2021-36084   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  3.1-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  3.1-1 |  |
| libsmartcols1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libsmartcols1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.34.1-3 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.34.1-3 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-1+deb11u1 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1k-1+deb11u1 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1k-1+deb11u1 |  |
| libsvn1         |    CVE-2022-24070   |   HIGH  |  1.14.1-3 | 1.14.1-3+deb11u1 |
| libsvn1         |    CVE-2021-28544   |   MEDIUM  |  1.14.1-3 | 1.14.1-3+deb11u1 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  247.3-6 | 247.3-7 |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  247.3-6 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  247.3-6 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  247.3-6 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  247.3-6 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.16.0-2 | 4.16.0-2+deb11u1 |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| libtirpc-common         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libtirpc3         |    CVE-2021-46828   |   HIGH  |  1.3.1-1 | 1.3.1-1+deb11u1 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  247.3-6 | 247.3-7 |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  247.3-6 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  247.3-6 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  247.3-6 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  247.3-6 |  |
| libuuid1         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libuuid1         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| logsave         |    CVE-2022-1304   |   HIGH  |  1.46.2-2 |  |
| mount         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| mount         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| mount         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.2+20201114-2 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.2+20201114-2 |  |
| openssh-client         |    CVE-2021-41617   |   HIGH  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2007-2243   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2007-2768   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2008-3234   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2016-20012   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2018-15919   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2019-6110   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2020-14145   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2020-15778   |   LOW  |  1:8.4p1-5 |  |
| openssh-client         |    CVE-2021-36368   |   LOW  |  1:8.4p1-5 |  |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u2 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1k-1+deb11u1 | 1.1.1n-0+deb11u3 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.1k-1+deb11u1 | 1.1.1k-1+deb11u2 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1k-1+deb11u1 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1k-1+deb11u1 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1k-1+deb11u1 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.8.1-1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2020-16156   |   HIGH  |  5.32.1-4+deb11u2 |  |
| perl-modules-5.32         |    CVE-2011-4116   |   LOW  |  5.32.1-4+deb11u2 |  |
| python3.9         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| python3.9         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| python3.9         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| python3.9         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| python3.9         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-29921   |   CRITICAL  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2015-20107   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2020-10735   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3737   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-0391   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-42919   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-45061   |   HIGH  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2020-27619   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2021-28861   |   LOW  |  3.9.2-1 |  |
| python3.9-minimal         |    CVE-2022-37454   |   LOW  |  3.9.2-1 |  |
| subversion         |    CVE-2022-24070   |   HIGH  |  1.14.1-3 | 1.14.1-3+deb11u1 |
| subversion         |    CVE-2021-28544   |   MEDIUM  |  1.14.1-3 | 1.14.1-3+deb11u1 |
| tar         |    CVE-2005-2541   |   LOW  |  1.34+dfsg-1 |  |
| unzip         |    CVE-2022-0529   |   MEDIUM  |  6.0-26 | 6.0-26+deb11u1 |
| unzip         |    CVE-2022-0530   |   MEDIUM  |  6.0-26 | 6.0-26+deb11u1 |
| unzip         |    CVE-2021-4217   |   LOW  |  6.0-26 |  |
| util-linux         |    CVE-2021-3995   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| util-linux         |    CVE-2021-3996   |   MEDIUM  |  2.36.1-8 | 2.36.1-8+deb11u1 |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.36.1-8 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21-1+deb11u1 |  |
| xz-utils         |    CVE-2022-1271   |   HIGH  |  5.2.5-2 | 5.2.5-2.1~deb11u1 |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-2 | 1:1.2.11.dfsg-2+deb11u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-2 | 1:1.2.11.dfsg-2+deb11u1 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2020-36518   |   HIGH  |  2.13.1 | 2.12.6.1, 2.13.2.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.1 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.13.1 | 2.12.7.1, 2.13.4 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40151   |   HIGH  |  5.2.1 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40152   |   HIGH  |  5.2.1 | 5.4.0, 6.4.0 |
| mysql:mysql-connector-java         |    CVE-2018-3258   |   HIGH  |  5.1.46 | 8.0.13 |
| mysql:mysql-connector-java         |    CVE-2019-2692   |   MEDIUM  |  5.1.46 | 8.0.16 |
| mysql:mysql-connector-java         |    CVE-2020-2875   |   MEDIUM  |  5.1.46 | 5.1.49, 8.0.15 |
| mysql:mysql-connector-java         |    CVE-2020-2934   |   MEDIUM  |  5.1.46 | 5.1.49, 8.0.20 |
| mysql:mysql-connector-java         |    CVE-2022-21363   |   MEDIUM  |  5.1.46 | 8.0.28 |
| mysql:mysql-connector-java         |    CVE-2020-2933   |   LOW  |  5.1.46 | 5.1.49 |
| mysql:mysql-connector-java         |    CVE-2018-3258   |   HIGH  |  5.1.46-bin | 8.0.13 |
| mysql:mysql-connector-java         |    CVE-2019-2692   |   MEDIUM  |  5.1.46-bin | 8.0.16 |
| mysql:mysql-connector-java         |    CVE-2020-2875   |   MEDIUM  |  5.1.46-bin | 5.1.49, 8.0.15 |
| mysql:mysql-connector-java         |    CVE-2020-2934   |   MEDIUM  |  5.1.46-bin | 5.1.49, 8.0.20 |
| mysql:mysql-connector-java         |    CVE-2022-21363   |   MEDIUM  |  5.1.46-bin | 8.0.28 |
| mysql:mysql-connector-java         |    CVE-2020-2933   |   LOW  |  5.1.46-bin | 5.1.49 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2022-25762   |   HIGH  |  8.5.73 | 8.5.76, 9.0.21 |
| org.apache.tomcat:tomcat-catalina         |    CVE-2021-43980   |   LOW  |  8.5.73 |  |
| org.apache.tomcat:tomcat-coyote         |    CVE-2022-42252   |   HIGH  |  8.5.73 | 8.5.83, 9.0.68, 10.0.27, 10.1.1 |
| org.apache.tomcat:tomcat-coyote         |    CVE-2021-43980   |   LOW  |  8.5.73 |  |
| org.apache.tomcat:tomcat-util         |    CVE-2021-43980   |   LOW  |  8.5.73 |  |
| org.postgresql:postgresql         |    CVE-2020-13692   |   HIGH  |  9.4-1201-jdbc41 | 42.2.13 |

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

