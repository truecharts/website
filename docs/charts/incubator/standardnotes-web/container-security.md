# Container Security

##### Detected Containers

          tccr.io/truecharts/standardnotes-web:vstable@sha256:e6fbb1f3d37da6bf63c861dd59307fc325c2704aa49ec7289f6fc0e96f064cbb
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/standardnotes-web:vstable@sha256:e6fbb1f3d37da6bf63c861dd59307fc325c2704aa49ec7289f6fc0e96f064cbb**

#### Container: tccr.io/truecharts/standardnotes-web:vstable@sha256:e6fbb1f3d37da6bf63c861dd59307fc325c2704aa49ec7289f6fc0e96f064cbb (alpine 3.14.3)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.33.1-r6 | 1.33.1-r7 |
| curl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r2 | 7.79.1-r4 |
| curl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r2 | 7.79.1-r4 |
| curl         |    CVE-2022-35252   |   LOW  |  7.79.1-r2 | 7.79.1-r3 |
| expat         |    CVE-2022-40674   |   CRITICAL  |  2.4.7-r0 | 2.4.9-r0 |
| expat         |    CVE-2022-43680   |   HIGH  |  2.4.7-r0 | 2.5.0-r0 |
| git         |    CVE-2022-39260   |   HIGH  |  2.32.3-r0 | 2.32.4-r0 |
| git         |    CVE-2022-39253   |   MEDIUM  |  2.32.3-r0 | 2.32.4-r0 |
| gmp         |    CVE-2021-43618   |   HIGH  |  6.2.1-r0 | 6.2.1-r1 |
| gmp-dev         |    CVE-2021-43618   |   HIGH  |  6.2.1-r0 | 6.2.1-r1 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libcrypto1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| libcurl         |    CVE-2022-43551   |   HIGH  |  7.79.1-r2 | 7.79.1-r4 |
| libcurl         |    CVE-2022-43552   |   MEDIUM  |  7.79.1-r2 | 7.79.1-r4 |
| libcurl         |    CVE-2022-35252   |   LOW  |  7.79.1-r2 | 7.79.1-r3 |
| libgmpxx         |    CVE-2021-43618   |   HIGH  |  6.2.1-r0 | 6.2.1-r1 |
| libretls         |    CVE-2022-0778   |   HIGH  |  3.3.3p1-r2 | 3.3.3p1-r3 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-2097   |   MEDIUM  |  1.1.1l-r0 | 1.1.1q-r0 |
| ncurses-libs         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| ncurses-terminfo-base         |    CVE-2022-29458   |   HIGH  |  6.2_p20210612-r0 | 6.2_p20210612-r1 |
| python3         |    CVE-2022-45061   |   HIGH  |  3.9.5-r2 | 3.9.16-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.33.1-r6 | 1.33.1-r7 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |
| zlib-dev         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib-dev         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**jar**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| com.google.code.gson:gson         |    CVE-2022-25647   |   HIGH  |  2.8.0 | 2.8.9 |
| org.jdom:jdom2         |    CVE-2021-33813   |   HIGH  |  2.0.6 | 2.0.6.1 |
| org.jetbrains.kotlin:kotlin-stdlib         |    CVE-2020-29582   |   MEDIUM  |  1.3.60 | 1.4.21 |
| org.jetbrains.kotlin:kotlin-stdlib         |    CVE-2022-24329   |   MEDIUM  |  1.3.60 | 1.6.0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| @braintree/sanitize-url         |    CVE-2021-23648   |   MEDIUM  |  3.1.0 | 6.0.0 |
| braces         |    CVE-2018-1109   |   LOW  |  1.8.5 | 2.3.1 |
| braces         |    GHSA-g95f-p29q-9xw4   |   LOW  |  1.8.5 | 2.3.1 |
| browserslist         |    CVE-2021-23364   |   MEDIUM  |  4.14.2 | 4.16.5 |
| d3-color         |    GHSA-36jr-mh4h-2g58   |   HIGH  |  1.4.1 | 3.1.0 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| ecstatic         |    CVE-2019-10775   |   MEDIUM  |  3.3.2 | 4.1.3 |
| electron         |    CVE-2022-29257   |   MEDIUM  |  11.5.0 | 18.0.0-beta.6, 17.2.0, 16.2.0, 15.5.0 |
| electron         |    CVE-2022-36077   |   MEDIUM  |  11.5.0 | 19.0.11, 20.0.1, 18.3.7 |
| electron         |    CVE-2022-21718   |   LOW  |  11.5.0 | 17.0.0-alpha.6, 16.0.6, 15.3.5, 14.2.4, 13.6.6 |
| electron         |    CVE-2022-29247   |   LOW  |  11.5.0 | 18.0.0-beta.6, 17.2.0, 16.2.6, 15.5.5 |
| electron         |    CVE-2022-36077   |   MEDIUM  |  17.4.2 | 19.0.11, 20.0.1, 18.3.7 |
| faker         |    GHSA-5w9c-rv96-fr7g   |   HIGH  |  6.6.6 |  |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  2.0.0 | 5.1.2 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  3.1.0 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| got         |    CVE-2022-33987   |   MEDIUM  |  9.6.0 | 11.8.5, 12.1.0 |
| hermes-engine         |    CVE-2021-24044   |   CRITICAL  |  0.9.0 | 0.10.0 |
| immer         |    CVE-2021-23436   |   CRITICAL  |  8.0.1 | 9.0.6 |
| immer         |    CVE-2021-3757   |   HIGH  |  8.0.1 | 9.0.6 |
| jsonwebtoken         |    CVE-2022-23529   |   HIGH  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23539   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23540   |   MEDIUM  |  8.5.1 | 9.0.0 |
| jsonwebtoken         |    CVE-2022-23541   |   MEDIUM  |  8.5.1 | 9.0.0 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  1.4.0 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  1.4.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  2.0.0 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  2.0.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  2.0.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37601   |   CRITICAL  |  2.0.2 | 1.4.1, 2.0.3 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  2.0.2 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  2.0.2 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37599   |   HIGH  |  3.2.0 | 3.2.1, 2.0.4, 1.4.2 |
| loader-utils         |    CVE-2022-37603   |   HIGH  |  3.2.0 | 3.2.1, 2.0.4, 1.4.2 |
| markdown-it         |    CVE-2022-21670   |   MEDIUM  |  10.0.0 | 12.3.2 |
| markdown-it         |    CVE-2022-21670   |   MEDIUM  |  11.0.1 | 12.3.2 |
| marked         |    CVE-2022-21680   |   HIGH  |  2.1.3 | 4.0.10 |
| marked         |    CVE-2022-21681   |   HIGH  |  2.1.3 | 4.0.10 |
| mermaid         |    CVE-2022-31108   |   MEDIUM  |  8.14.0 | 9.1.2 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| moment         |    CVE-2022-31129   |   HIGH  |  2.29.3 | 2.29.4 |
| node-forge         |    CVE-2022-24771   |   HIGH  |  0.10.0 | 1.3.0 |
| node-forge         |    CVE-2022-24772   |   HIGH  |  0.10.0 | 1.3.0 |
| node-forge         |    CVE-2022-0122   |   MEDIUM  |  0.10.0 | 1.0.0 |
| node-forge         |    CVE-2022-24773   |   MEDIUM  |  0.10.0 | 1.3.0 |
| node-forge         |    GHSA-5rrq-pxf6-6jx5   |   LOW  |  0.10.0 | 1.0.0 |
| node-forge         |    GHSA-gf8q-jrpm-jvxq   |   LOW  |  0.10.0 | 1.0.0 |
| node-sass         |    CVE-2020-24025   |   MEDIUM  |  6.0.1 | 7.0.0 |
| nth-check         |    CVE-2021-3803   |   HIGH  |  1.0.2 | 2.0.1 |
| open         |    GHSA-28xh-wpgr-7fm8   |   CRITICAL  |  0.0.5 | 6.0.0 |
| open         |    NSWG-ECO-433   |   CRITICAL  |  0.0.5 | &gt;=6.0.0 |
| parse-path         |    CVE-2022-0624   |   HIGH  |  4.0.4 | 5.0.0 |
| parse-url         |    CVE-2022-2900   |   CRITICAL  |  6.0.2 | 8.1.0 |
| parse-url         |    CVE-2022-3224   |   MEDIUM  |  6.0.2 | 8.1.0 |
| postcss         |    CVE-2021-23382   |   MEDIUM  |  6.0.23 | 7.0.36, 8.2.13 |
| react-native-reanimated         |    CVE-2022-24373   |   HIGH  |  2.9.1 | 2.10.0 |
| scss-tokenizer         |    CVE-2022-25758   |   HIGH  |  0.2.3 | 0.4.3 |
| scss-tokenizer         |    CVE-2022-25758   |   HIGH  |  0.3.0 | 0.4.3 |
| semver-regex         |    CVE-2021-3795   |   HIGH  |  1.0.0 | 4.0.1, 3.1.3 |
| semver-regex         |    CVE-2021-43307   |   LOW  |  1.0.0 | 4.0.3, 3.1.4 |
| serialize-javascript         |    CVE-2020-7660   |   HIGH  |  2.1.2 | 3.1.0 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.6.1 | 1.7.3 |
| shell-quote         |    CVE-2021-42740   |   CRITICAL  |  1.7.2 | 1.7.3 |
| terser         |    CVE-2022-25858   |   HIGH  |  4.8.0 | 5.14.2, 4.8.1 |
| terser         |    CVE-2022-25858   |   HIGH  |  5.14.1 | 5.14.2, 4.8.1 |
| trim         |    CVE-2020-7753   |   HIGH  |  0.0.1 | 0.0.3 |

**gemspec**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| actionpack         |    CVE-2020-8164   |   HIGH  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.3, &gt;= 6.0.3.1 |
| actionpack         |    CVE-2021-22885   |   HIGH  |  5.1.7 | ~&gt; 5.2.4.6, ~&gt; 5.2.6, ~&gt; 6.0.3, &gt;= 6.0.3.7, &gt;= 6.1.3.2 |
| actionpack         |    CVE-2021-22904   |   HIGH  |  5.1.7 | ~&gt; 5.2.4.6, ~&gt; 5.2.6, ~&gt; 6.0.3, &gt;= 6.0.3.7, &gt;= 6.1.3.2 |
| actionpack         |    CVE-2022-23633   |   HIGH  |  5.1.7 | ~&gt; 5.2.6, &gt;= 5.2.6.2, ~&gt; 6.0.4, &gt;= 6.0.4.6, ~&gt; 6.1.4, &gt;= 6.1.4.6, &gt;= 7.0.2.2 |
| actionpack         |    CVE-2020-8166   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.3, &gt;= 6.0.3.1 |
| actionpack         |    CVE-2022-3704   |   LOW  |  5.1.7 |  |
| actionview         |    CVE-2020-15169   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.4, &gt;= 6.0.3.3 |
| actionview         |    CVE-2020-5267   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.2, &gt;= 6.0.2.2 |
| actionview         |    CVE-2020-8167   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.3, &gt;= 6.0.3.1 |
| actionview         |    CVE-2022-27777   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.7, &gt;= 5.2.7.1, ~&gt; 6.0.4, &gt;= 6.0.4.8, ~&gt; 6.1.5, &gt;= 6.1.5.1, &gt;= 7.0.2.4 |
| activerecord         |    CVE-2022-32224   |   CRITICAL  |  5.1.7 | ~&gt; 5.2.8, &gt;= 5.2.8.1, ~&gt; 6.0.5, &gt;= 6.0.5.1, ~&gt; 6.1.6, &gt;= 6.1.6.1, &gt;= 7.0.3.1 |
| activerecord         |    CVE-2021-22880   |   MEDIUM  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.5, ~&gt; 6.0.3, &gt;= 6.0.3.5, &gt;= 6.1.2.1 |
| activesupport         |    CVE-2020-8165   |   CRITICAL  |  5.1.7 | ~&gt; 5.2.4, &gt;= 5.2.4.3, &gt;= 6.0.3.1 |
| bundler         |    CVE-2020-36327   |   HIGH  |  2.1.4 | &gt;= 2.2.18, 2.2.10 |
| bundler         |    CVE-2021-43809   |   MEDIUM  |  2.1.4 | &gt;= 2.2.33 |
| cgi         |    CVE-2021-33621   |   HIGH  |  0.1.0 | ~&gt; 0.1.0.2, ~&gt; 0.2.2, &gt;= 0.3.5 |
| cgi         |    CVE-2021-41816   |   HIGH  |  0.1.0 | ~&gt; 0.1.0.1, ~&gt; 0.1.1, ~&gt; 0.2.1, &gt;= 0.3.1 |
| cgi         |    CVE-2021-41819   |   HIGH  |  0.1.0 | ~&gt; 0.1.0.1, ~&gt; 0.1.1, ~&gt; 0.2.1, &gt;= 0.3.1 |
| date         |    CVE-2021-41817   |   HIGH  |  3.0.0 | ~&gt; 2.0.1, ~&gt; 3.0.2, ~&gt; 3.1.2, &gt;= 3.2.1 |
| loofah         |    CVE-2022-23514   |   HIGH  |  2.14.0 | &gt;= 2.19.1 |
| loofah         |    CVE-2022-23516   |   HIGH  |  2.14.0 | &gt;= 2.19.1 |
| loofah         |    CVE-2022-23515   |   MEDIUM  |  2.14.0 | &gt;= 2.19.1 |
| nokogiri         |    CVE-2018-25032   |   HIGH  |  1.13.1 | &gt;= 1.13.4 |
| nokogiri         |    CVE-2021-30560   |   HIGH  |  1.13.1 | &gt;= 1.13.2 |
| nokogiri         |    CVE-2022-24836   |   HIGH  |  1.13.1 | &gt;= 1.13.4 |
| nokogiri         |    CVE-2022-24839   |   HIGH  |  1.13.1 | &gt;= 1.13.4 |
| nokogiri         |    CVE-2022-29181   |   HIGH  |  1.13.1 | &gt;= 1.13.6 |
| nokogiri         |    GHSA-cgx6-hpwq-fhv5   |   HIGH  |  1.13.1 | &gt;= 1.13.5 |
| nokogiri         |    GHSA-fq42-c5rg-92c2   |   HIGH  |  1.13.1 | 1.13.2 |
| nokogiri         |    GHSA-gx8x-g87m-h5q6   |   HIGH  |  1.13.1 | 1.13.4 |
| nokogiri         |    GHSA-v6gp-9mmm-c6p5   |   HIGH  |  1.13.1 | 1.13.4 |
| nokogiri         |    CVE-2022-23437   |   MEDIUM  |  1.13.1 | &gt;= 1.13.4 |
| nokogiri         |    GHSA-2qc6-mcvw-92cw   |   MEDIUM  |  1.13.1 | &gt;= 1.13.9 |
| nokogiri         |    GHSA-xxx9-3xcr-gjj3   |   MEDIUM  |  1.13.1 | 1.13.4 |
| puma         |    CVE-2022-24790   |   CRITICAL  |  5.6.2 | ~&gt; 4.3.12, &gt;= 5.6.4 |
| rack         |    CVE-2022-30123   |   CRITICAL  |  2.2.3 | ~&gt; 2.0.9, &gt;= 2.0.9.1, ~&gt; 2.1.4, &gt;= 2.1.4.1, &gt;= 2.2.3.1 |
| rack         |    CVE-2022-30122   |   HIGH  |  2.2.3 | ~&gt; 2.0.9, &gt;= 2.0.9.1, ~&gt; 2.1.4, &gt;= 2.1.4.1, &gt;= 2.2.3.1 |
| rails-html-sanitizer         |    CVE-2022-23517   |   HIGH  |  1.4.2 | &gt;= 1.4.4 |
| rails-html-sanitizer         |    CVE-2022-23518   |   MEDIUM  |  1.4.2 | &gt;= 1.4.4 |
| rails-html-sanitizer         |    CVE-2022-23519   |   MEDIUM  |  1.4.2 | &gt;= 1.4.4 |
| rails-html-sanitizer         |    CVE-2022-23520   |   MEDIUM  |  1.4.2 | &gt;= 1.4.4 |
| rails-html-sanitizer         |    CVE-2022-32209   |   MEDIUM  |  1.4.2 | &gt;= 1.4.3 |
| tzinfo         |    CVE-2022-31163   |   HIGH  |  1.2.9 | ~&gt; 0.3.61, &gt;= 1.2.10 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210630005230-0f9fa26af87c | 0.0.0-20220412211240-33da011f77ad |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.40.32 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.40.32 |  |

**nuget**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Newtonsoft.Json         |    GHSA-5crp-9r3c-p9vr   |   HIGH  |  10.0.3 | 13.0.1 |

