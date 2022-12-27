# Container Security

##### Detected Containers

          tccr.io/truecharts/poste:latest@sha256:f1e8a2444d00a16d452ed34d35d18a545d0f3fa9b419f007dec860a525f42914
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/poste:latest@sha256:f1e8a2444d00a16d452ed34d35d18a545d0f3fa9b419f007dec860a525f42914**

#### Container: tccr.io/truecharts/poste:latest@sha256:f1e8a2444d00a16d452ed34d35d18a545d0f3fa9b419f007dec860a525f42914 (debian 10.13)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| apt-transport-https         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| bsdtar         |    CVE-2022-36227   |   CRITICAL  |  3.3.3-4+deb10u1 |  |
| bsdtar         |    CVE-2021-23177   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| bsdtar         |    CVE-2021-31566   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| bsdtar         |    CVE-2019-19221   |   MEDIUM  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| clamav-base         |    DLA-3220-1   |   UNKNOWN  |  0.103.6+dfsg-0+deb10u1 | 0.103.7+dfsg-0+deb10u1 |
| clamav-daemon         |    DLA-3220-1   |   UNKNOWN  |  0.103.6+dfsg-0+deb10u1 | 0.103.7+dfsg-0+deb10u1 |
| clamav-freshclam         |    DLA-3220-1   |   UNKNOWN  |  0.103.6+dfsg-0+deb10u1 | 0.103.7+dfsg-0+deb10u1 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| curl         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| curl         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| dovecot-core         |    CVE-2020-28200   |   MEDIUM  |  2:2.3.19.1-2+debian10 |  |
| dovecot-core         |    CVE-2008-4870   |   LOW  |  2:2.3.19.1-2+debian10 |  |
| dovecot-imapd         |    CVE-2020-28200   |   MEDIUM  |  2:2.3.19.1-2+debian10 |  |
| dovecot-imapd         |    CVE-2008-4870   |   LOW  |  2:2.3.19.1-2+debian10 |  |
| dovecot-lmtpd         |    CVE-2020-28200   |   MEDIUM  |  2:2.3.19.1-2+debian10 |  |
| dovecot-lmtpd         |    CVE-2008-4870   |   LOW  |  2:2.3.19.1-2+debian10 |  |
| dovecot-pop3d         |    CVE-2020-28200   |   MEDIUM  |  2:2.3.19.1-2+debian10 |  |
| dovecot-pop3d         |    CVE-2008-4870   |   LOW  |  2:2.3.19.1-2+debian10 |  |
| dovecot-sqlite         |    CVE-2020-28200   |   MEDIUM  |  2:2.3.19.1-2+debian10 |  |
| dovecot-sqlite         |    CVE-2008-4870   |   LOW  |  2:2.3.19.1-2+debian10 |  |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gnupg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gnupg-l10n         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gnupg-utils         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-agent         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-wks-client         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpg-wks-server         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgconf         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgsm         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u2 |  |
| iproute2         |    CVE-2019-20795   |   MEDIUM  |  4.20.0-2+deb10u1 |  |
| libapparmor1         |    CVE-2016-1585   |   LOW  |  2.13.2-10 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libarchive-tools         |    CVE-2022-36227   |   CRITICAL  |  3.3.3-4+deb10u1 |  |
| libarchive-tools         |    CVE-2021-23177   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libarchive-tools         |    CVE-2021-31566   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libarchive-tools         |    CVE-2019-19221   |   MEDIUM  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libarchive13         |    CVE-2022-36227   |   CRITICAL  |  3.3.3-4+deb10u1 |  |
| libarchive13         |    CVE-2021-23177   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libarchive13         |    CVE-2021-31566   |   HIGH  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libarchive13         |    CVE-2019-19221   |   MEDIUM  |  3.3.3-4+deb10u1 | 3.3.3-4+deb10u2 |
| libatomic1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libatomic1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc-l10n         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| libclamav9         |    DLA-3220-1   |   UNKNOWN  |  0.103.6+dfsg-0+deb10u1 | 0.103.7+dfsg-0+deb10u1 |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcurl4         |    CVE-2022-32221   |   CRITICAL  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-43551   |   HIGH  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-27774   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2021-22922   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2021-22923   |   LOW  |  7.64.0-4+deb10u3 |  |
| libcurl4         |    CVE-2022-35252   |   LOW  |  7.64.0-4+deb10u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u6 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u4 |  |
| libglib2.0-0         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u4 |  |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u9 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libhiredis0.14         |    CVE-2020-7105   |   HIGH  |  0.14.0-3 |  |
| libhiredis0.14         |    CVE-2021-32765   |   LOW  |  0.14.0-3 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u4 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u4 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u4 |  |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2+deb10u1 | 1.3.5-2+deb10u2 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| liblua5.1-0         |    CVE-2021-43519   |   MEDIUM  |  5.1.5-8.1 |  |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| libnghttp2-14         |    CVE-2020-11080   |   HIGH  |  1.36.0-2+deb10u1 |  |
| libnginx-mod-http-echo         |    CVE-2021-3618   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| libnginx-mod-http-echo         |    CVE-2022-41741   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| libnginx-mod-http-echo         |    CVE-2022-41742   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| libnginx-mod-http-echo         |    CVE-2020-36309   |   MEDIUM  |  1.14.2-2+deb10u4 |  |
| libnginx-mod-http-echo         |    CVE-2009-4487   |   LOW  |  1.14.2-2+deb10u4 |  |
| libnginx-mod-http-echo         |    CVE-2013-0337   |   LOW  |  1.14.2-2+deb10u4 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2019-20454   |   HIGH  |  10.32-5 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libprotobuf-c1         |    CVE-2022-33070   |   MEDIUM  |  1.3.1-1 |  |
| libseccomp2         |    CVE-2019-9893   |   LOW  |  2.3.3-4 |  |
| libsepol1         |    CVE-2021-36084   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36085   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36086   |   LOW  |  2.8-1 |  |
| libsepol1         |    CVE-2021-36087   |   LOW  |  2.8-1 |  |
| libsmartcols1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libsmartcols1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libsqlite3-0         |    CVE-2019-19603   |   HIGH  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2019-19244   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2020-11656   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2021-36690   |   LOW  |  3.27.2-3+deb10u2 |  |
| libsqlite3-0         |    CVE-2022-35737   |   LOW  |  3.27.2-3+deb10u2 |  |
| libss2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libssh2-1         |    CVE-2019-13115   |   HIGH  |  1.8.0-2.1 |  |
| libssh2-1         |    CVE-2019-17498   |   LOW  |  1.8.0-2.1 |  |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
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
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
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
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u5 |  |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u5 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u5 |  |
| libxslt1.1         |    CVE-2015-9019   |   LOW  |  1.1.32-2.2~deb10u2 |  |
| libxtables12         |    CVE-2012-2663   |   LOW  |  1.8.2-4 |  |
| libxtables12         |    CVE-2019-11360   |   LOW  |  1.8.2-4 |  |
| locales         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u2 |  |
| locales         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u2 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u3 |  |
| net-tools         |    CVE-2002-1976   |   LOW  |  1.60+git20180626.aebd88e-1 |  |
| nginx-common         |    CVE-2021-3618   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-common         |    CVE-2022-41741   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-common         |    CVE-2022-41742   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-common         |    CVE-2020-36309   |   MEDIUM  |  1.14.2-2+deb10u4 |  |
| nginx-common         |    CVE-2009-4487   |   LOW  |  1.14.2-2+deb10u4 |  |
| nginx-common         |    CVE-2013-0337   |   LOW  |  1.14.2-2+deb10u4 |  |
| nginx-light         |    CVE-2021-3618   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-light         |    CVE-2022-41741   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-light         |    CVE-2022-41742   |   HIGH  |  1.14.2-2+deb10u4 | 1.14.2-2+deb10u5 |
| nginx-light         |    CVE-2020-36309   |   MEDIUM  |  1.14.2-2+deb10u4 |  |
| nginx-light         |    CVE-2009-4487   |   LOW  |  1.14.2-2+deb10u4 |  |
| nginx-light         |    CVE-2013-0337   |   LOW  |  1.14.2-2+deb10u4 |  |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u3 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u3 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| patch         |    CVE-2010-4651   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6951   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2018-6952   |   LOW  |  2.7.6-3+deb10u1 |  |
| patch         |    CVE-2021-45261   |   LOW  |  2.7.6-3+deb10u1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| php7.3-bcmath         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-bcmath         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-bcmath         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-bcmath         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-bcmath         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-bcmath         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-bcmath         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-bcmath         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-cli         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-cli         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-cli         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-common         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-common         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-common         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-curl         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-curl         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-curl         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-fpm         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-fpm         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-fpm         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-imap         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-imap         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-imap         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-intl         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-intl         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-intl         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-json         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-json         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-json         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-mbstring         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-mbstring         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-mbstring         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-opcache         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-opcache         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-opcache         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-readline         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-readline         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-readline         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-soap         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-soap         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-soap         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-sqlite3         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-sqlite3         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-sqlite3         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-xml         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-xml         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xml         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-xmlrpc         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-xmlrpc         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-xmlrpc         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2022-37454   |   CRITICAL  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2017-7189   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-zip         |    CVE-2017-7272   |   HIGH  |  7.3.31-1~deb10u1 |  |
| php7.3-zip         |    CVE-2022-31625   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2022-31626   |   HIGH  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2021-21707   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2022-31628   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| php7.3-zip         |    CVE-2022-31629   |   MEDIUM  |  7.3.31-1~deb10u1 | 7.3.31-1~deb10u2 |
| redis-server         |    CVE-2022-24735   |   HIGH  |  5:5.0.14-1+deb10u2 |  |
| redis-server         |    CVE-2022-24736   |   MEDIUM  |  5:5.0.14-1+deb10u2 |  |
| redis-server         |    CVE-2020-21468   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| redis-server         |    CVE-2021-3470   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| redis-server         |    CVE-2022-3647   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| redis-tools         |    CVE-2022-24735   |   HIGH  |  5:5.0.14-1+deb10u2 |  |
| redis-tools         |    CVE-2022-24736   |   MEDIUM  |  5:5.0.14-1+deb10u2 |  |
| redis-tools         |    CVE-2020-21468   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| redis-tools         |    CVE-2021-3470   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| redis-tools         |    CVE-2022-3647   |   LOW  |  5:5.0.14-1+deb10u2 |  |
| rsyslog         |    CVE-2015-3243   |   LOW  |  8.1901.0-1+deb10u2 |  |
| sqlite3         |    CVE-2019-19603   |   HIGH  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2019-19645   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2019-19924   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2020-13631   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2021-45346   |   MEDIUM  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2019-19244   |   LOW  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2020-11656   |   LOW  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2021-36690   |   LOW  |  3.27.2-3+deb10u2 |  |
| sqlite3         |    CVE-2022-35737   |   LOW  |  3.27.2-3+deb10u2 |  |
| sudo         |    CVE-2005-1119   |   LOW  |  1.8.27-1+deb10u4 |  |
| sudo         |    CVE-2019-19232   |   LOW  |  1.8.27-1+deb10u4 |  |
| sudo         |    CVE-2019-19234   |   LOW  |  1.8.27-1+deb10u4 |  |
| sudo         |    CVE-2021-23240   |   LOW  |  1.8.27-1+deb10u4 |  |
| sudo         |    CVE-2022-43995   |   LOW  |  1.8.27-1+deb10u4 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| unzip         |    CVE-2021-4217   |   LOW  |  6.0-23+deb10u3 |  |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.20.1-1.1 |  |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bootstrap         |    CVE-2016-10735   |   MEDIUM  |  3.3.1 | 3.4.0 |
| bootstrap         |    CVE-2018-14041   |   MEDIUM  |  3.3.1 | 4.1.2, 3.4.0 |
| bootstrap         |    CVE-2018-20676   |   MEDIUM  |  3.3.1 | 3.4.0 |
| bootstrap         |    CVE-2018-20677   |   MEDIUM  |  3.3.1 | 3.4.0 |
| bootstrap         |    CVE-2019-8331   |   MEDIUM  |  3.3.1 | 3.4.1, 4.3.1 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.5 | 1.2.6 |

**composer**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| guzzlehttp/guzzle         |    CVE-2022-29248   |   HIGH  |  6.5.5 | 7.4.3, 6.5.6 |
| guzzlehttp/guzzle         |    CVE-2022-31042   |   HIGH  |  6.5.5 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31043   |   HIGH  |  6.5.5 | 7.4.4, 6.5.7 |
| guzzlehttp/guzzle         |    CVE-2022-31090   |   HIGH  |  6.5.5 | 6.5.8, 7.4.5 |
| guzzlehttp/guzzle         |    CVE-2022-31091   |   HIGH  |  6.5.5 | 7.4.5, 6.5.8 |
| guzzlehttp/psr7         |    CVE-2022-24775   |   HIGH  |  1.8.3 | 2.1.1, 1.8.4 |
| pear/crypt_gpg         |    CVE-2022-24953   |   MEDIUM  |  v1.6.6 | 1.6.7 |

