# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/openldap:v1.5.0@sha256:e0e2103decf985c6d908ac7d021032f53f3f0827397bbda106f55ed0b844b68b
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/openldap:v1.5.0@sha256:e0e2103decf985c6d908ac7d021032f53f3f0827397bbda106f55ed0b844b68b**

#### Container: tccr.io/truecharts/openldap:v1.5.0@sha256:e0e2103decf985c6d908ac7d021032f53f3f0827397bbda106f55ed0b844b68b (debian 10.8)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.2 |  |
| apt-transport-https         |    CVE-2011-3374   |   LOW  |  1.8.2.2 |  |
| apt-utils         |    CVE-2011-3374   |   LOW  |  1.8.2.2 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| dirmngr         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| dpkg         |    CVE-2022-1664   |   CRITICAL  |  1.19.7 | 1.19.8 |
| e2fsprogs         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| fdisk         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| fdisk         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| gcc-8-base         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| gcc-8-base         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| gnupg         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gnupg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gnupg-l10n         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gnupg-l10n         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gnupg-utils         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gnupg-utils         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpg         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpg         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpg-agent         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpg-agent         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpg-wks-client         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpg-wks-client         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpg-wks-server         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpg-wks-server         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpgconf         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgconf         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpgsm         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgsm         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gpgv         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| gpgv         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| gzip         |    CVE-2022-1271   |   HIGH  |  1.9-3 | 1.9-3+deb10u1 |
| iproute2         |    CVE-2019-20795   |   MEDIUM  |  4.20.0-2+deb10u1 |  |
| krb5-kdc         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| krb5-kdc         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| krb5-kdc         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| krb5-kdc         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| krb5-kdc         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| krb5-kdc-ldap         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| krb5-kdc-ldap         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| krb5-kdc-ldap         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| krb5-kdc-ldap         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| krb5-kdc-ldap         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| krb5-user         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| krb5-user         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| krb5-user         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| krb5-user         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| krb5-user         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| ldap-utils         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| ldap-utils         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| ldap-utils         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| ldap-utils         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| libapt-inst2.0         |    CVE-2011-3374   |   LOW  |  1.8.2.2 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.2 |  |
| libasn1-8-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libasn1-8-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
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
| libc-l10n         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| libc-l10n         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| libc-l10n         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| libc-l10n         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
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
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
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
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5 |  |
| libgcrypt20         |    CVE-2021-40528   |   MEDIUM  |  1.8.4-5 | 1.8.4-5+deb10u1 |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5 |  |
| libgmp10         |    CVE-2021-43618   |   HIGH  |  2:6.1.2+dfsg-4 | 2:6.1.2+dfsg-4+deb10u1 |
| libgnutls30         |    CVE-2021-20231   |   CRITICAL  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2021-20232   |   CRITICAL  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2020-24659   |   HIGH  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u7 |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u6 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u6 |  |
| libgssapi-krb5-2         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libgssapi-krb5-2         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libgssrpc4         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libgssrpc4         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libgssrpc4         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libgssrpc4         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libgssrpc4         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libhcrypto4-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhcrypto4-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhdb9-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libheimbase1-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhogweed4         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libhogweed4         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libhx509-5-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libhx509-5-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libicu63         |    CVE-2020-21913   |   MEDIUM  |  63.1-6+deb10u1 | 63.1-6+deb10u2 |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libk5crypto3         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libk5crypto3         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libkadm5clnt-mit11         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libkadm5clnt-mit11         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libkadm5clnt-mit11         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libkadm5clnt-mit11         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libkadm5clnt-mit11         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libkadm5srv-mit11         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libkadm5srv-mit11         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libkadm5srv-mit11         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libkadm5srv-mit11         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libkadm5srv-mit11         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libkadm5srv8-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkadm5srv8-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkdb5-9         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libkdb5-9         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libkdb5-9         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libkdb5-9         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libkdb5-9         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libkrb5-26-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-26-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libkrb5-3         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libkrb5-3         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libkrb5support0         |    CVE-2021-36222   |   HIGH  |  1.17-3+deb10u1 | 1.17-3+deb10u2 |
| libkrb5support0         |    CVE-2021-37750   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u3 |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u1 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u1 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u1 |  |
| libksba8         |    CVE-2022-3515   |   HIGH  |  1.3.5-2 | 1.3.5-2+deb10u1 |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2 |  |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| libldap-common         |    CVE-2022-29155   |   CRITICAL  |  2.4.47+dfsg-3+deb10u5 | 2.4.47+dfsg-3+deb10u7 |
| libldap-common         |    CVE-2021-27212   |   HIGH  |  2.4.47+dfsg-3+deb10u5 | 2.4.47+dfsg-3+deb10u6 |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u5 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u5 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u5 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u5 |  |
| liblz4-1         |    CVE-2021-3520   |   CRITICAL  |  1.8.3-1 | 1.8.3-1+deb10u1 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1 |  |
| liblzma5         |    CVE-2022-1271   |   HIGH  |  5.2.4-1 | 5.2.4-1+deb10u1 |
| libmariadb3         |    CVE-2021-27928   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| libmariadb3         |    CVE-2021-46669   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-24048   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-24050   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-24051   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-24052   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-27376   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27377   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27378   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27379   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27380   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27381   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27383   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27384   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27386   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27387   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27445   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27447   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27448   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27449   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27452   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27456   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-27458   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32083   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32084   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32085   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32087   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32088   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-32091   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2021-2154   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| libmariadb3         |    CVE-2021-2166   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| libmariadb3         |    CVE-2021-2372   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| libmariadb3         |    CVE-2021-2389   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| libmariadb3         |    CVE-2021-35604   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46657   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| libmariadb3         |    CVE-2021-46658   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| libmariadb3         |    CVE-2021-46659   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46661   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46662   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46663   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46664   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46665   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46666   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| libmariadb3         |    CVE-2021-46667   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2021-46668   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-21427   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    CVE-2022-31621   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-31622   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-31623   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-31624   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| libmariadb3         |    CVE-2022-38791   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| libmariadb3         |    DLA-3114-2   |   UNKNOWN  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u2 |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncurses6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncurses6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnettle6         |    CVE-2021-20305   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
| libnettle6         |    CVE-2021-3580   |   HIGH  |  3.4.1-1 | 3.4.1-1+deb10u1 |
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
| libpq5         |    CVE-2021-23214   |   HIGH  |  11.10-0+deb10u1 | 11.14-0+deb10u1 |
| libpq5         |    CVE-2021-32027   |   HIGH  |  11.10-0+deb10u1 | 11.12-0+deb10u1 |
| libpq5         |    CVE-2022-1552   |   HIGH  |  11.10-0+deb10u1 | 11.16-0+deb10u1 |
| libpq5         |    CVE-2022-2625   |   HIGH  |  11.10-0+deb10u1 | 11.17-0+deb10u1 |
| libpq5         |    CVE-2021-23222   |   MEDIUM  |  11.10-0+deb10u1 | 11.14-0+deb10u1 |
| libpq5         |    CVE-2021-32028   |   MEDIUM  |  11.10-0+deb10u1 | 11.12-0+deb10u1 |
| libpq5         |    CVE-2021-32029   |   MEDIUM  |  11.10-0+deb10u1 | 11.12-0+deb10u1 |
| libpq5         |    CVE-2021-3393   |   MEDIUM  |  11.10-0+deb10u1 | 11.11-0+deb10u1 |
| libpq5         |    CVE-2021-3677   |   MEDIUM  |  11.10-0+deb10u1 | 11.13-0+deb10u1 |
| libpq5         |    CVE-2019-9193   |   LOW  |  11.10-0+deb10u1 |  |
| libpq5         |    DLA-3189-1   |   UNKNOWN  |  11.10-0+deb10u1 | 11.18-0+deb10u1 |
| libprotobuf-c1         |    CVE-2022-33070   |   MEDIUM  |  1.3.1-1 |  |
| libpython3.7-minimal         |    CVE-2021-3177   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| libpython3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u4 |
| libpython3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2020-26116   |   HIGH  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| libpython3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-3177   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| libpython3.7-stdlib         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u4 |
| libpython3.7-stdlib         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2020-26116   |   HIGH  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| libpython3.7-stdlib         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u2 |  |
| libpython3.7-stdlib         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u2 |  |
| libroken18-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libroken18-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libsasl2-2         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-db         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-gssapi-mit         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-ldap         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-otp         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
| libsasl2-modules-sql         |    CVE-2022-24407   |   HIGH  |  2.1.27+dfsg-1+deb10u1 | 2.1.27+dfsg-1+deb10u2 |
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
| libssl1.1         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1n-0+deb10u2 |
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u7 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u6 |
| libssl1.1         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u8 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u5 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u5 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u5 |  |
| libstdc++6         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libstdc++6         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libsystemd0         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u6 | 241-7~deb10u8 |
| libsystemd0         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2013-4392   |   LOW  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2019-20386   |   LOW  |  241-7~deb10u6 |  |
| libsystemd0         |    CVE-2020-13529   |   LOW  |  241-7~deb10u6 |  |
| libtasn1-6         |    CVE-2021-46848   |   CRITICAL  |  4.13-3 |  |
| libtasn1-6         |    CVE-2018-1000654   |   LOW  |  4.13-3 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libudev1         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2021-33910   |   MEDIUM  |  241-7~deb10u6 | 241-7~deb10u8 |
| libudev1         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2013-4392   |   LOW  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2019-20386   |   LOW  |  241-7~deb10u6 |  |
| libudev1         |    CVE-2020-13529   |   LOW  |  241-7~deb10u6 |  |
| libuuid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libuuid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libuv1         |    CVE-2021-22918   |   MEDIUM  |  1.24.1-1 | 1.24.1-1+deb10u1 |
| libuv1         |    CVE-2020-8252   |   LOW  |  1.24.1-1 |  |
| libwind0-heimdal         |    CVE-2022-41916   |   HIGH  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2019-14870   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2021-3671   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2021-44758   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2022-3437   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2022-42898   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libwind0-heimdal         |    CVE-2022-44640   |   MEDIUM  |  7.5.0+dfsg-3 | 7.5.0+dfsg-3+deb10u1 |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 |  |
| libxml2         |    CVE-2021-3516   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3517   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3518   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2022-23308   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u3 |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u1 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u1 |  |
| libxml2         |    CVE-2021-3537   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2021-3541   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxml2         |    CVE-2022-29824   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u4 |
| libxml2         |    CVE-2020-24977   |   LOW  |  2.9.4+dfsg1-7+deb10u1 | 2.9.4+dfsg1-7+deb10u2 |
| libxtables12         |    CVE-2012-2663   |   LOW  |  1.8.2-4 |  |
| libxtables12         |    CVE-2019-11360   |   LOW  |  1.8.2-4 |  |
| libzstd1         |    CVE-2021-24032   |   MEDIUM  |  1.3.8+dfsg-3+deb10u1 | 1.3.8+dfsg-3+deb10u2 |
| locales         |    CVE-2021-33574   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2021-35942   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2022-23218   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2022-23219   |   CRITICAL  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2020-1751   |   HIGH  |  2.28-10 |  |
| locales         |    CVE-2020-1752   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2020-6096   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2021-3326   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2021-3999   |   HIGH  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2016-10228   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2019-25013   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2020-10029   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2020-27618   |   MEDIUM  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2010-4756   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2018-20796   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2019-1010022   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2019-1010023   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2019-1010024   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2019-1010025   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2019-19126   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| locales         |    CVE-2019-9192   |   LOW  |  2.28-10 |  |
| locales         |    CVE-2021-27645   |   LOW  |  2.28-10 | 2.28-10+deb10u2 |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mariadb-common         |    CVE-2021-27928   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| mariadb-common         |    CVE-2021-46669   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-24048   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-24050   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-24051   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-24052   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-27376   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27377   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27378   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27379   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27380   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27381   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27383   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27384   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27386   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27387   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27445   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27447   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27448   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27449   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27452   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27456   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-27458   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32083   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32084   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32085   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32087   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32088   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-32091   |   HIGH  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2021-2154   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| mariadb-common         |    CVE-2021-2166   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.29-0+deb10u1 |
| mariadb-common         |    CVE-2021-2372   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| mariadb-common         |    CVE-2021-2389   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| mariadb-common         |    CVE-2021-35604   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46657   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| mariadb-common         |    CVE-2021-46658   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| mariadb-common         |    CVE-2021-46659   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46661   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46662   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46663   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46664   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46665   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46666   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.31-0+deb10u1 |
| mariadb-common         |    CVE-2021-46667   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2021-46668   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-21427   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    CVE-2022-31621   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-31622   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-31623   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-31624   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.34-0+deb10u1 |
| mariadb-common         |    CVE-2022-38791   |   MEDIUM  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u1 |
| mariadb-common         |    DLA-3114-2   |   UNKNOWN  |  1:10.3.27-0+deb10u1 | 1:10.3.36-0+deb10u2 |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| openssl         |    CVE-2021-3711   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-1292   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1n-0+deb10u2 |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1d-0+deb10u5 | 1.1.1n-0+deb10u3 |
| openssl         |    CVE-2021-3712   |   HIGH  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u7 |
| openssl         |    CVE-2022-0778   |   HIGH  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2021-3449   |   MEDIUM  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u6 |
| openssl         |    CVE-2021-4160   |   MEDIUM  |  1.1.1d-0+deb10u5 | 1.1.1d-0+deb10u8 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1d-0+deb10u5 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1d-0+deb10u5 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1d-0+deb10u5 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-modules-5.28         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| python3-yaml         |    CVE-2017-18342   |   LOW  |  3.13-2 |  |
| python3.7         |    CVE-2021-3177   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| python3.7         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u4 |
| python3.7         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2020-26116   |   HIGH  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| python3.7         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-3177   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| python3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u4 |
| python3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2020-26116   |   HIGH  |  3.7.3-2+deb10u2 | 3.7.3-2+deb10u3 |
| python3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u2 |  |
| python3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u2 |  |
| slapd         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd-contrib         |    CVE-2015-3276   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd-contrib         |    CVE-2017-14159   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd-contrib         |    CVE-2017-17740   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| slapd-contrib         |    CVE-2020-15719   |   LOW  |  2.4.57+dfsg-1~bpo10+1 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u1 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u1 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u2 |
| zlib1g         |    CVE-2018-25032   |   HIGH  |  1:1.2.11.dfsg-1 | 1:1.2.11.dfsg-1+deb10u1 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20201010224723-4f7140c49acb | 0.4.0 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.3 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.3 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/crypto         |    CVE-2020-29652   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20201216223049-8b5274cf687f |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201012173705-84dcc777aaee | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20201010224723-4f7140c49acb | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20201010224723-4f7140c49acb | 0.4.0 |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.3 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.3 | 0.3.8 |

