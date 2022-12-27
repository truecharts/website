# Container Security

##### Detected Containers

          tccr.io/truecharts/hyperion.ng:v2.0.13@sha256:3f19687b6735e9f5ba148bf97cfe68888f07c73d6350a8e04ad0e8ecb0364c7b
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/hyperion.ng:v2.0.13@sha256:3f19687b6735e9f5ba148bf97cfe68888f07c73d6350a8e04ad0e8ecb0364c7b**

#### Container: tccr.io/truecharts/hyperion.ng:v2.0.13@sha256:3f19687b6735e9f5ba148bf97cfe68888f07c73d6350a8e04ad0e8ecb0364c7b (debian 10.12)
    

**debian**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| apt         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| avahi-daemon         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| avahi-daemon         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| bash         |    CVE-2022-3715   |   MEDIUM  |  5.0-4 |  |
| bash         |    CVE-2019-18276   |   LOW  |  5.0-4 |  |
| bind9-host         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| bind9-host         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| bind9-host         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| bsdutils         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| bsdutils         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| bzip2         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.30-3 |  |
| coreutils         |    CVE-2017-18018   |   LOW  |  8.30-3 |  |
| dbus         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dbus-user-session         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| dirmngr         |    CVE-2022-34903   |   MEDIUM  |  2.2.12-1+deb10u1 | 2.2.12-1+deb10u2 |
| dirmngr         |    CVE-2019-14855   |   LOW  |  2.2.12-1+deb10u1 |  |
| distro-info-data         |    DLA-3171-1   |   UNKNOWN  |  0.41+deb10u4 | 0.41+deb10u6 |
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
| krb5-locales         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| krb5-locales         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| krb5-locales         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libapparmor1         |    CVE-2016-1585   |   LOW  |  2.13.2-10 |  |
| libapt-pkg5.0         |    CVE-2011-3374   |   LOW  |  1.8.2.3 |  |
| libavahi-client3         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-client3         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-common-data         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-common-data         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-common3         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-common3         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-compat-libdnssd1         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-compat-libdnssd1         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libavahi-core7         |    CVE-2021-3468   |   MEDIUM  |  0.7-4+deb10u1 |  |
| libavahi-core7         |    CVE-2017-6519   |   LOW  |  0.7-4+deb10u1 |  |
| libbind9-161         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libbind9-161         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libbind9-161         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libblkid1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libblkid1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libbz2-1.0         |    DLA-3112-1   |   UNKNOWN  |  1.0.6-9.2~deb10u1 | 1.0.6-9.2~deb10u2 |
| libc-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc-bin         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc-dev-bin         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc-dev-bin         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc6         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-33574   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-35942   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2022-23218   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2022-23219   |   CRITICAL  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-1751   |   HIGH  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2020-1752   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-6096   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-3326   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2021-3999   |   HIGH  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2016-10228   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2019-25013   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-10029   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2020-27618   |   MEDIUM  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2010-4756   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2018-20796   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2019-1010022   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2019-1010023   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2019-1010024   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2019-1010025   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2019-19126   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libc6-dev         |    CVE-2019-9192   |   LOW  |  2.28-10+deb10u1 |  |
| libc6-dev         |    CVE-2021-27645   |   LOW  |  2.28-10+deb10u1 | 2.28-10+deb10u2 |
| libcairo-gobject2         |    CVE-2017-7475   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2018-18064   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2019-6461   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo-gobject2         |    CVE-2019-6462   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2017-7475   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2018-18064   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6461   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcairo2         |    CVE-2019-6462   |   LOW  |  1.16.0-4+deb10u1 |  |
| libcolord2         |    CVE-2021-42523   |   LOW  |  1.4.3-4 |  |
| libcom-err2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libcroco3         |    CVE-2017-8834   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2017-8871   |   LOW  |  0.6.12-3 |  |
| libcroco3         |    CVE-2020-12825   |   LOW  |  0.6.12-3 |  |
| libcups2         |    CVE-2022-26691   |   MEDIUM  |  2.2.10-6+deb10u5 | 2.2.10-6+deb10u6 |
| libcups2         |    CVE-2014-8166   |   LOW  |  2.2.10-6+deb10u5 |  |
| libdb5.3         |    CVE-2019-8457   |   CRITICAL  |  5.3.28+dfsg1-0.5 |  |
| libdbus-1-3         |    CVE-2022-42010   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| libdbus-1-3         |    CVE-2022-42011   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| libdbus-1-3         |    CVE-2022-42012   |   MEDIUM  |  1.12.20-0+deb10u1 | 1.12.24-0+deb10u1 |
| libdns1104         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libdns1104         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libdns1104         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libexpat1         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u5 |
| libexpat1         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u6 |
| libexpat1         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u4 |  |
| libexpat1-dev         |    CVE-2022-40674   |   CRITICAL  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u5 |
| libexpat1-dev         |    CVE-2022-43680   |   HIGH  |  2.2.6-2+deb10u4 | 2.2.6-2+deb10u6 |
| libexpat1-dev         |    CVE-2013-0340   |   LOW  |  2.2.6-2+deb10u4 |  |
| libext2fs2         |    CVE-2022-1304   |   HIGH  |  1.44.5-1+deb10u3 |  |
| libfdisk1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libfdisk1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libfreetype6         |    CVE-2022-27404   |   CRITICAL  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27405   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-27406   |   HIGH  |  2.9.1-3+deb10u2 | 2.9.1-3+deb10u3 |
| libfreetype6         |    CVE-2022-31782   |   LOW  |  2.9.1-3+deb10u2 |  |
| libfribidi0         |    CVE-2022-25308   |   HIGH  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25309   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libfribidi0         |    CVE-2022-25310   |   MEDIUM  |  1.0.5-3.1+deb10u1 | 1.0.5-3.1+deb10u2 |
| libgcc1         |    CVE-2018-12886   |   HIGH  |  8.3.0-6 |  |
| libgcc1         |    CVE-2019-15847   |   HIGH  |  8.3.0-6 |  |
| libgcrypt20         |    CVE-2021-33560   |   HIGH  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2019-13627   |   MEDIUM  |  1.8.4-5+deb10u1 |  |
| libgcrypt20         |    CVE-2018-6829   |   LOW  |  1.8.4-5+deb10u1 |  |
| libglib2.0-0         |    CVE-2021-3800   |   HIGH  |  2.58.3-2+deb10u3 | 2.58.3-2+deb10u4 |
| libglib2.0-0         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u3 |  |
| libglib2.0-0         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u3 |  |
| libglib2.0-data         |    CVE-2021-3800   |   HIGH  |  2.58.3-2+deb10u3 | 2.58.3-2+deb10u4 |
| libglib2.0-data         |    CVE-2012-0039   |   LOW  |  2.58.3-2+deb10u3 |  |
| libglib2.0-data         |    CVE-2020-35457   |   LOW  |  2.58.3-2+deb10u3 |  |
| libgnutls30         |    CVE-2022-2509   |   HIGH  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2021-4209   |   MEDIUM  |  3.6.7-4+deb10u7 | 3.6.7-4+deb10u9 |
| libgnutls30         |    CVE-2011-3389   |   LOW  |  3.6.7-4+deb10u7 |  |
| libgssapi-krb5-2         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libgssapi-krb5-2         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libgssapi-krb5-2         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libharfbuzz0b         |    CVE-2022-33068   |   MEDIUM  |  2.3.1-1 |  |
| libidn2-0         |    CVE-2019-12290   |   HIGH  |  2.0.5-1+deb10u1 |  |
| libinput-bin         |    CVE-2022-1215   |   HIGH  |  1.12.6-2+deb10u1 |  |
| libinput10         |    CVE-2022-1215   |   HIGH  |  1.12.6-2+deb10u1 |  |
| libip4tc0         |    CVE-2012-2663   |   LOW  |  1.8.2-4 |  |
| libip4tc0         |    CVE-2019-11360   |   LOW  |  1.8.2-4 |  |
| libisc1100         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisc1100         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisc1100         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccc161         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccc161         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccc161         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccfg163         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccfg163         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libisccfg163         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| libjbig0         |    CVE-2017-9937   |   LOW  |  2.1-3.1 |  |
| libjpeg62-turbo         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2017-15232   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2018-11813   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libjpeg62-turbo         |    CVE-2020-17541   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libk5crypto3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libk5crypto3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libk5crypto3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5-3         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5-3         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2022-42898   |   MEDIUM  |  1.17-3+deb10u3 | 1.17-3+deb10u5 |
| libkrb5support0         |    CVE-2004-0971   |   LOW  |  1.17-3+deb10u3 |  |
| libkrb5support0         |    CVE-2018-5709   |   LOW  |  1.17-3+deb10u3 |  |
| libksba8         |    CVE-2022-3515   |   HIGH  |  1.3.5-2 | 1.3.5-2+deb10u1 |
| libksba8         |    CVE-2022-47629   |   UNKNOWN  |  1.3.5-2 | 1.3.5-2+deb10u2 |
| libldap-2.4-2         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-2.4-2         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2015-3276   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-14159   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2017-17740   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| libldap-common         |    CVE-2020-15719   |   LOW  |  2.4.47+dfsg-3+deb10u7 |  |
| liblwres161         |    CVE-2022-2795   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| liblwres161         |    CVE-2022-38177   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| liblwres161         |    CVE-2022-38178   |   HIGH  |  1:9.11.5.P4+dfsg-5.1+deb10u7 | 1:9.11.5.P4+dfsg-5.1+deb10u8 |
| liblz4-1         |    CVE-2019-17543   |   LOW  |  1.8.3-1+deb10u1 |  |
| libmbedcrypto3         |    CVE-2021-44732   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2022-35409   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36423   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36426   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36475   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36476   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36478   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2021-43666   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2019-16910   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2019-18222   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-10932   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-10941   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-16150   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36421   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36422   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36424   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2020-36425   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2021-24119   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedcrypto3         |    CVE-2022-46392   |   MEDIUM  |  2.16.0-1 |  |
| libmbedcrypto3         |    CVE-2018-1000520   |   LOW  |  2.16.0-1 |  |
| libmbedtls12         |    CVE-2021-44732   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2022-35409   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36423   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36426   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36475   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36476   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36478   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2021-43666   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2019-16910   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2019-18222   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-10932   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-10941   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-16150   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36421   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36422   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36424   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2020-36425   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2021-24119   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedtls12         |    CVE-2022-46392   |   MEDIUM  |  2.16.0-1 |  |
| libmbedtls12         |    CVE-2018-1000520   |   LOW  |  2.16.0-1 |  |
| libmbedx509-0         |    CVE-2021-44732   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2022-35409   |   CRITICAL  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36423   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36426   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36475   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36476   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36478   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2021-43666   |   HIGH  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2019-16910   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2019-18222   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-10932   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-10941   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-16150   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36421   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36422   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36424   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2020-36425   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2021-24119   |   MEDIUM  |  2.16.0-1 | 2.16.9-0~deb10u1 |
| libmbedx509-0         |    CVE-2022-46392   |   MEDIUM  |  2.16.0-1 |  |
| libmbedx509-0         |    CVE-2018-1000520   |   LOW  |  2.16.0-1 |  |
| libmount1         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| libmount1         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| libncursesw6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libncursesw6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libnss-systemd         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libnss-systemd         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| libpam-systemd         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| libpcre2-16-0         |    CVE-2022-1586   |   CRITICAL  |  10.32-5 |  |
| libpcre2-16-0         |    CVE-2022-1587   |   CRITICAL  |  10.32-5 |  |
| libpcre2-16-0         |    CVE-2019-20454   |   HIGH  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2022-1586   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2022-1587   |   CRITICAL  |  10.32-5 |  |
| libpcre2-8-0         |    CVE-2019-20454   |   HIGH  |  10.32-5 |  |
| libpcre3         |    CVE-2020-14155   |   MEDIUM  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-16231   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7245   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2017-7246   |   LOW  |  2:8.39-12 |  |
| libpcre3         |    CVE-2019-20838   |   LOW  |  2:8.39-12 |  |
| libpixman-1-0         |    CVE-2022-44638   |   HIGH  |  0.36.0-1 | 0.36.0-1+deb10u1 |
| libpng16-16         |    CVE-2018-14048   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2018-14550   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2019-6129   |   LOW  |  1.6.36-6 |  |
| libpng16-16         |    CVE-2021-4214   |   LOW  |  1.6.36-6 |  |
| libprotobuf-c1         |    CVE-2022-33070   |   MEDIUM  |  1.3.1-1 |  |
| libpython3.7         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| libpython3.7         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| libpython3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| libpython3.7-stdlib         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| libpython3.7-stdlib         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| libqt5core5a         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5core5a         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5dbus5         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5dbus5         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5gui5         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5gui5         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5network5         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5network5         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5sql5         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5sql5         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5sql5-sqlite         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5sql5-sqlite         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| libqt5svg5         |    CVE-2021-3481   |   HIGH  |  5.11.3-2 |  |
| libqt5svg5         |    CVE-2021-45930   |   MEDIUM  |  5.11.3-2 |  |
| libqt5widgets5         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| libqt5widgets5         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| librsvg2-2         |    CVE-2019-20446   |   MEDIUM  |  2.44.10-2.1 | 2.44.10-2.1+deb10u1 |
| librsvg2-common         |    CVE-2019-20446   |   MEDIUM  |  2.44.10-2.1 | 2.44.10-2.1+deb10u1 |
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
| libssl1.1         |    CVE-2022-2068   |   CRITICAL  |  1.1.1n-0+deb10u2 | 1.1.1n-0+deb10u3 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u2 |  |
| libssl1.1         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u2 |  |
| libssl1.1         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u2 |  |
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
| libtiff5         |    CVE-2022-3970   |   CRITICAL  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1354   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1355   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1622   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1623   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2056   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2057   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2058   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2867   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2868   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2869   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-34526   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3570   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3597   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3598   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3599   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3626   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-3627   |   MEDIUM  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2014-8130   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-16232   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-17973   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-5563   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2017-9117   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2018-10126   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2020-35521   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2020-35522   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1056   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-1210   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2519   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2520   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2521   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtiff5         |    CVE-2022-2953   |   LOW  |  4.1.0+git191117-2~deb10u4 |  |
| libtinfo6         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| libtinfo6         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| libturbojpeg0         |    CVE-2020-35538   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libturbojpeg0         |    CVE-2021-46822   |   MEDIUM  |  1:1.5.2-2+deb10u1 |  |
| libturbojpeg0         |    CVE-2017-15232   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libturbojpeg0         |    CVE-2018-11813   |   LOW  |  1:1.5.2-2+deb10u1 |  |
| libturbojpeg0         |    CVE-2020-17541   |   LOW  |  1:1.5.2-2+deb10u1 |  |
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
| libwayland-client0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-cursor0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-egl1         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwayland-server0         |    CVE-2021-3782   |   CRITICAL  |  1.16.0-1 |  |
| libwebp6         |    CVE-2016-9085   |   LOW  |  0.6.1-2+deb10u1 |  |
| libxml2         |    CVE-2017-16932   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2022-40303   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2022-40304   |   HIGH  |  2.9.4+dfsg1-7+deb10u4 | 2.9.4+dfsg1-7+deb10u5 |
| libxml2         |    CVE-2016-3709   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
| libxml2         |    CVE-2016-9318   |   MEDIUM  |  2.9.4+dfsg1-7+deb10u4 |  |
| linux-libc-dev         |    CVE-2022-3643   |   CRITICAL  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3649   |   CRITICAL  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2013-7445   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19378   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19449   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19814   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-12362   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-36385   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-3493   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-3714   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-38207   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-3847   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-3864   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-4037   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-4197   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-0400   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-1011   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1012   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1048   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1199   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1247   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-1353   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1419   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1652   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1679   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-1729   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1734   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-20368   |   HIGH  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-20421   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-20422   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-20566   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2588   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-26365   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2639   |   HIGH  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-26490   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-27666   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28388   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28389   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-28390   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-29581   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-2961   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-2977   |   HIGH  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-2978   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3028   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-30594   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3176   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3202   |   HIGH  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-32250   |   HIGH  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3239   |   HIGH  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-33740   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-33741   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-33742   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3424   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3524   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3545   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3564   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3565   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3566   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3567   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3594   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3621   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3635   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3640   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36946   |   HIGH  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-39189   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-42896   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43750   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4378   |   HIGH  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-43945   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45884   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45885   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45886   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45919   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45934   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-47518   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-47519   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-47520   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-47521   |   HIGH  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-15213   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-15794   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16089   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-20794   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-12363   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-12364   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-14304   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-15802   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-16120   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-26141   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-26145   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-26541   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-26555   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-27835   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-36310   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-36516   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-33061   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-33655   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-33656   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-3669   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-3759   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-4159   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2021-44879   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-0480   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-0494   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-0812   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-0854   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1016   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1184   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-1195   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1198   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1204   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1205   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1280   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-1462   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-1516   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1974   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-1975   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-20369   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-20423   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-20572   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-21123   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21125   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21166   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-21499   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-2153   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2318   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2380   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-23816   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-23825   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-23960   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-2503   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-2586   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-26373   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-2663   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-28356   |   MEDIUM  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-2873   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-29900   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-29901   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3061   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3107   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-3108   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3111   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-3115   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3169   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3303   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3344   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-33744   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3523   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3586   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3628   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36280   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3646   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-36879   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-3707   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-38096   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-3903   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-39188   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-39842   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-40307   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-40768   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4095   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-41218   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-4129   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-41848   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-41849   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41850   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-41858   |   MEDIUM  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-42328   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-42329   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-4269   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-42703   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-42895   |   MEDIUM  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-44032   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-44033   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-44034   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-4543   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-45887   |   MEDIUM  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-4662   |   MEDIUM  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2004-0230   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2005-3660   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2007-3719   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2008-2544   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2008-4609   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2010-4563   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2010-5321   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2011-4915   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2011-4916   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2011-4917   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2012-4542   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2014-9892   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2014-9900   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2015-2877   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2016-10723   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2016-8660   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2017-0630   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2017-13693   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2017-13694   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2018-1121   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2018-12928   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2018-17977   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-11191   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12378   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12379   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12380   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12381   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12382   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12455   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12456   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-12615   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16229   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16230   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16231   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16232   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16233   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-16234   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19064   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19070   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2019-19083   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-11725   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-27820   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2020-35501   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-0929   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-26934   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2021-32078   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-25265   |   LOW  |  4.19.235-1 |  |
| linux-libc-dev         |    CVE-2022-2991   |   LOW  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-32296   |   LOW  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-32981   |   LOW  |  4.19.235-1 | 4.19.249-1 |
| linux-libc-dev         |    CVE-2022-33981   |   LOW  |  4.19.235-1 | 4.19.249-2 |
| linux-libc-dev         |    CVE-2022-3521   |   LOW  |  4.19.235-1 | 4.19.269-1 |
| linux-libc-dev         |    CVE-2022-3629   |   LOW  |  4.19.235-1 | 4.19.260-1 |
| linux-libc-dev         |    CVE-2022-4382   |   UNKNOWN  |  4.19.235-1 |  |
| login         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| login         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| mount         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| mount         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| ncurses-base         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-base         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| ncurses-bin         |    CVE-2022-29458   |   HIGH  |  6.1+20181013-2+deb10u2 | 6.1+20181013-2+deb10u3 |
| ncurses-bin         |    CVE-2021-39537   |   LOW  |  6.1+20181013-2+deb10u2 |  |
| openssl         |    CVE-2022-2068   |   CRITICAL  |  1.1.1n-0+deb10u2 | 1.1.1n-0+deb10u3 |
| openssl         |    CVE-2022-2097   |   MEDIUM  |  1.1.1n-0+deb10u2 |  |
| openssl         |    CVE-2007-6755   |   LOW  |  1.1.1n-0+deb10u2 |  |
| openssl         |    CVE-2010-0928   |   LOW  |  1.1.1n-0+deb10u2 |  |
| passwd         |    CVE-2007-5686   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2018-7169   |   LOW  |  1:4.5-1.1 |  |
| passwd         |    CVE-2019-19882   |   LOW  |  1:4.5-1.1 |  |
| perl-base         |    CVE-2020-16156   |   HIGH  |  5.28.1-6+deb10u1 |  |
| perl-base         |    CVE-2011-4116   |   LOW  |  5.28.1-6+deb10u1 |  |
| python3.7         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| python3.7         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-37454   |   CRITICAL  |  3.7.3-2+deb10u3 | 3.7.3-2+deb10u4 |
| python3.7-minimal         |    CVE-2015-20107   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2020-10735   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3737   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-0391   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2022-45061   |   HIGH  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-23336   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3426   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-3733   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-4189   |   MEDIUM  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2017-17522   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2019-18348   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2019-9674   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2020-27619   |   LOW  |  3.7.3-2+deb10u3 |  |
| python3.7-minimal         |    CVE-2021-28861   |   LOW  |  3.7.3-2+deb10u3 |  |
| qt5-gtk-platformtheme         |    CVE-2022-25255   |   HIGH  |  5.11.3+dfsg1-1+deb10u4 |  |
| qt5-gtk-platformtheme         |    CVE-2015-9541   |   LOW  |  5.11.3+dfsg1-1+deb10u4 | 5.11.3+dfsg1-1+deb10u5 |
| systemd         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| systemd         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| systemd         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| systemd         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| systemd         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-3843   |   HIGH  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-3844   |   HIGH  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2021-3997   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2022-3821   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2022-4415   |   MEDIUM  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2013-4392   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2019-20386   |   LOW  |  241-7~deb10u8 |  |
| systemd-sysv         |    CVE-2020-13529   |   LOW  |  241-7~deb10u8 |  |
| tar         |    CVE-2005-2541   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2019-9923   |   LOW  |  1.30+dfsg-6 |  |
| tar         |    CVE-2021-20193   |   LOW  |  1.30+dfsg-6 |  |
| tzdata         |    DLA-3134-1   |   UNKNOWN  |  2021a-0+deb10u4 | 2021a-0+deb10u7 |
| tzdata         |    DLA-3161-1   |   UNKNOWN  |  2021a-0+deb10u4 | 2021a-0+deb10u8 |
| util-linux         |    CVE-2021-37600   |   LOW  |  2.33.1-0.1 |  |
| util-linux         |    CVE-2022-0563   |   LOW  |  2.33.1-0.1 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.20.1-1.1 |  |
| xdg-user-dirs         |    CVE-2017-15131   |   LOW  |  0.17-2 |  |
| zlib1g         |    CVE-2022-37434   |   CRITICAL  |  1:1.2.11.dfsg-1+deb10u1 | 1:1.2.11.dfsg-1+deb10u2 |

