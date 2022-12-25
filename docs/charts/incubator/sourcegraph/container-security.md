# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/sourcegraph:4.3.0@sha256:ef41ec7c43ca1829a378cd78b7b72ebc2335d2490b4325f1878ee2924c77bd2d
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/sourcegraph:4.3.0@sha256:ef41ec7c43ca1829a378cd78b7b72ebc2335d2490b4325f1878ee2924c77bd2d**

#### Container: tccr.io/truecharts/sourcegraph:4.3.0@sha256:ef41ec7c43ca1829a378cd78b7b72ebc2335d2490b4325f1878ee2924c77bd2d (alpine 3.14.8)
    

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

