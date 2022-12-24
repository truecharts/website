# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/sourcegraph:4.3.0
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/sourcegraph:4.3.0**

#### Container: tccr.io/truecharts/sourcegraph:4.3.0 (alpine 3.14.8)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| curl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r3 | 7.79.1-r4 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r3 | 7.79.1-r4 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r3 | 7.79.1-r4 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r3 | 7.79.1-r4 |
| postgresql         |    CVE-2021-23214   |   HIGH  |  12.10-r0 | 13.5-r0 |
| postgresql         |    CVE-2021-32027   |   HIGH  |  12.10-r0 | 13.3-r0 |
| postgresql         |    CVE-2022-1552   |   HIGH  |  12.10-r0 | 13.7-r0 |
| postgresql         |    CVE-2022-2625   |   HIGH  |  12.10-r0 | 13.8-r0 |
| postgresql         |    CVE-2021-20229   |   MEDIUM  |  12.10-r0 | 13.2-r0 |
| postgresql         |    CVE-2021-23222   |   MEDIUM  |  12.10-r0 | 13.5-r0 |
| postgresql         |    CVE-2021-32028   |   MEDIUM  |  12.10-r0 | 13.3-r0 |
| postgresql         |    CVE-2021-32029   |   MEDIUM  |  12.10-r0 | 13.3-r0 |
| postgresql         |    CVE-2021-3393   |   MEDIUM  |  12.10-r0 | 13.2-r0 |
| postgresql         |    CVE-2021-3677   |   MEDIUM  |  12.10-r0 | 13.4-r0 |
| postgresql-contrib         |    CVE-2021-23214   |   HIGH  |  12.10-r0 | 13.5-r0 |
| postgresql-contrib         |    CVE-2021-32027   |   HIGH  |  12.10-r0 | 13.3-r0 |
| postgresql-contrib         |    CVE-2022-1552   |   HIGH  |  12.10-r0 | 13.7-r0 |
| postgresql-contrib         |    CVE-2022-2625   |   HIGH  |  12.10-r0 | 13.8-r0 |
| postgresql-contrib         |    CVE-2021-20229   |   MEDIUM  |  12.10-r0 | 13.2-r0 |
| postgresql-contrib         |    CVE-2021-23222   |   MEDIUM  |  12.10-r0 | 13.5-r0 |
| postgresql-contrib         |    CVE-2021-32028   |   MEDIUM  |  12.10-r0 | 13.3-r0 |
| postgresql-contrib         |    CVE-2021-32029   |   MEDIUM  |  12.10-r0 | 13.3-r0 |
| postgresql-contrib         |    CVE-2021-3393   |   MEDIUM  |  12.10-r0 | 13.2-r0 |
| postgresql-contrib         |    CVE-2021-3677   |   MEDIUM  |  12.10-r0 | 13.4-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42003   |   HIGH  |  2.13.3 | 2.12.7.1, 2.13.4.1 |
| com.fasterxml.jackson.core:jackson-databind         |    CVE-2022-42004   |   HIGH  |  2.13.3 | 2.12.7.1, 2.13.4 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40151   |   HIGH  |  6.2.7 | 5.4.0, 6.4.0 |
| com.fasterxml.woodstox:woodstox-core         |    CVE-2022-40152   |   HIGH  |  6.2.7 | 5.4.0, 6.4.0 |
| com.google.guava:guava         |    CVE-2020-8908   |   LOW  |  27.1-jre | 30.0 |
| commons-io:commons-io         |    CVE-2021-29425   |   MEDIUM  |  2.2 | 2.7 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.43.11 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.43.11 |  |
| github.com/prometheus/exporter-toolkit         |    CVE-2022-46146   |   HIGH  |  v0.7.1 | 0.7.2, 0.8.2 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220225172249-27dd8689420f | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220225172249-27dd8689420f | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220114195835-da31bd327af9 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.72 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.72 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.128 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.128 |  |
| github.com/docker/distribution         |    GHSA-qq97-vm5h-rrhg   |   LOW  |  v2.7.1+incompatible | 2.8.0 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.1.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/prometheus/exporter-toolkit         |    CVE-2022-46146   |   HIGH  |  v0.7.1 | 0.7.2, 0.8.2 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20210616213533-5ff15b29337e | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220225172249-27dd8689420f | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220225172249-27dd8689420f | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20220114195835-da31bd327af9 | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/graphql-go/graphql         |    CVE-2022-37315   |   HIGH  |  v0.8.0 |  |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.2.0 | 0.4.0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.37.20 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.37.20 |  |
| github.com/prometheus/client_golang         |    CVE-2022-21698   |   HIGH  |  v1.9.0 | 1.11.1 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210124154548-22da62e12c0c | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.37.20 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.37.20 |  |
| github.com/cortexproject/cortex         |    CVE-2021-31232   |   MEDIUM  |  v1.4.1-0.20201022071705-85942c5703cf | v1.8.1 |
| github.com/cortexproject/cortex         |    CVE-2021-36157   |   MEDIUM  |  v1.4.1-0.20201022071705-85942c5703cf | v1.10.0-rc.0 |
| github.com/crewjam/saml         |    CVE-2022-41912   |   CRITICAL  |  v0.4.6-0.20201227203850-bca570abb2ce | 0.4.9 |
| github.com/grafana/loki         |    CVE-2021-36156   |   MEDIUM  |  v1.6.2-0.20201026154740-6978ee5d7387 | v2.3.0 |
| github.com/prometheus/client_golang         |    CVE-2022-21698   |   HIGH  |  v1.9.0 | 1.11.1 |
| github.com/prometheus/prometheus         |    CVE-2019-3826   |   MEDIUM  |  v1.8.2-0.20201105135750-00f16d1ac3a4 | v2.7.1 |
| github.com/russellhaering/goxmldsig         |    CVE-2020-7711   |   HIGH  |  v1.1.0 | 1.1.1 |
| github.com/russellhaering/goxmldsig         |    CVE-2020-7731   |   HIGH  |  v1.1.0 | 1.1.1 |
| golang.org/x/crypto         |    CVE-2021-43565   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20211202192323-5770296d904e |
| golang.org/x/crypto         |    CVE-2022-27191   |   HIGH  |  v0.0.0-20201221181555-eec23a3978ad | 0.0.0-20220314234659-1baeb1ce4c0b |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210119194325-5f4716e94777 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210124154548-22da62e12c0c | 0.0.0-20220412211240-33da011f77ad |
| golang.org/x/text         |    CVE-2021-38561   |   HIGH  |  v0.3.5 | 0.3.7 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.5 | 0.3.8 |

**Container: tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f**

#### Container: tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f (ubuntu 22.04)
    

**ubuntu**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| bash         |    CVE-2022-3715   |   LOW  |  5.1-6ubuntu1 |  |
| ca-certificates         |    CVE-2022-23491   |   MEDIUM  |  20211016 | 20211016ubuntu0.22.04.1 |
| coreutils         |    CVE-2016-2781   |   LOW  |  8.32-4.1ubuntu1 |  |
| curl         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| dirmngr         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| git         |    CVE-2018-1000021   |   LOW  |  1:2.34.1-1ubuntu1.5 |  |
| git-man         |    CVE-2018-1000021   |   LOW  |  1:2.34.1-1ubuntu1.5 |  |
| gnupg         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gnupg-l10n         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gnupg-utils         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-agent         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-wks-client         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpg-wks-server         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgconf         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgsm         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| gpgv         |    CVE-2022-3219   |   LOW  |  2.2.27-3ubuntu2.1 |  |
| libc-bin         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libc6         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| libcurl3-gnutls         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl3-gnutls         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43551   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libcurl4         |    CVE-2022-43552   |   MEDIUM  |  7.81.0-1ubuntu1.6 |  |
| libexpat1         |    CVE-2022-40674   |   MEDIUM  |  2.4.7-1 | 2.4.7-1ubuntu0.1 |
| libexpat1         |    CVE-2022-43680   |   MEDIUM  |  2.4.7-1 | 2.4.7-1ubuntu0.2 |
| libmariadb3         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libmariadb3         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| libncurses6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libncursesw6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libpcre3         |    CVE-2017-11164   |   LOW  |  2:8.39-13ubuntu0.22.04.1 |  |
| libsqlite3-0         |    CVE-2022-46908   |   MEDIUM  |  3.37.2-2ubuntu0.1 |  |
| libssl3         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| libsystemd0         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libtinfo6         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| libudev1         |    CVE-2022-3821   |   MEDIUM  |  249.11-0ubuntu3.6 |  |
| libxml2         |    CVE-2022-40303   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-40304   |   MEDIUM  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| libxml2         |    CVE-2022-2309   |   LOW  |  2.9.13+dfsg-1ubuntu0.1 | 2.9.13+dfsg-1ubuntu0.2 |
| locales         |    CVE-2016-20013   |   LOW  |  2.35-0ubuntu3.1 |  |
| login         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| mariadb-client         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-10.6         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-client-core-10.6         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2018-25032   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-21427   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27376   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27377   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27378   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27379   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27380   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27381   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27382   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27383   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27384   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27386   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27387   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27444   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27445   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27446   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27447   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27448   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27449   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27451   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27452   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27455   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27456   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27457   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-27458   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32081   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32082   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32083   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32084   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32085   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32086   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32087   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32088   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32089   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2022-32091   |   MEDIUM  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| mariadb-common         |    CVE-2021-46669   |   LOW  |  1:10.6.7-2ubuntu1.1 | 1:10.6.11-0ubuntu0.22.04.1 |
| ncurses-base         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| ncurses-bin         |    CVE-2022-29458   |   LOW  |  6.3-2 |  |
| openssl         |    CVE-2022-3996   |   LOW  |  3.0.2-0ubuntu1.7 |  |
| passwd         |    CVE-2013-4235   |   LOW  |  1:4.8.1-2ubuntu2 | 1:4.8.1-2ubuntu2.1 |
| unrar         |    CVE-2022-30333   |   MEDIUM  |  1:6.1.5-1 |  |
| vim-common         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-common         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| vim-tiny         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| wget         |    CVE-2021-31879   |   MEDIUM  |  1.21.2-2ubuntu1 |  |
| xxd         |    CVE-2022-0128   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0156   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0158   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0213   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0261   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0318   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0319   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0351   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0359   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0361   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0368   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0392   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0393   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0407   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0408   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0413   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0417   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0554   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0572   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0685   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0714   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1629   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1674   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1720   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1851   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1927   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1942   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1968   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2175   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2182   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2183   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2304   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2343   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2344   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2345   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2571   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2862   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2889   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2923   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2946   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2980   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2982   |   MEDIUM  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0443   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0696   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-0729   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1733   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1735   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1785   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1796   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1886   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-1898   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2124   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2125   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2126   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2129   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2206   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2581   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2845   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |
| xxd         |    CVE-2022-2849   |   LOW  |  2:8.2.3995-1ubuntu2.1 |  |

