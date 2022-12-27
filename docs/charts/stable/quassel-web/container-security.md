# Container Security

##### Detected Containers

          tccr.io/truecharts/quassel-web:v2021.12.16@sha256:9f5a51c1c1f30fcf5806876dc9a3069def25a3d3aa51e839e5200d2c0c52c811
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/quassel-web:v2021.12.16@sha256:9f5a51c1c1f30fcf5806876dc9a3069def25a3d3aa51e839e5200d2c0c52c811**

#### Container: tccr.io/truecharts/quassel-web:v2021.12.16@sha256:9f5a51c1c1f30fcf5806876dc9a3069def25a3d3aa51e839e5200d2c0c52c811 (alpine 3.12)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| busybox         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| libcrypto1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| libssl1.1         |    CVE-2022-0778   |   HIGH  |  1.1.1l-r0 | 1.1.1n-r0 |
| nodejs         |    CVE-2021-44531   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2022-21824   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-22959   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-22960   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-44532   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| nodejs         |    CVE-2021-44533   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2021-44531   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2022-21824   |   HIGH  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2021-22959   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2021-22960   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2021-44532   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| npm         |    CVE-2021-44533   |   MEDIUM  |  12.22.6-r0 | 12.22.10-r0 |
| ssl_client         |    CVE-2022-28391   |   HIGH  |  1.31.1-r21 | 1.31.1-r22 |
| xz         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| xz-libs         |    CVE-2022-1271   |   HIGH  |  5.2.5-r0 | 5.2.5-r1 |
| zlib         |    CVE-2022-37434   |   CRITICAL  |  1.2.11-r3 | 1.2.12-r2 |
| zlib         |    CVE-2018-25032   |   HIGH  |  1.2.11-r3 | 1.2.12-r0 |

**node-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| ajv         |    CVE-2020-15366   |   MEDIUM  |  6.7.0 | 6.12.3 |
| ansi-regex         |    CVE-2021-3807   |   HIGH  |  3.0.0 | 3.0.1, 4.1.1, 5.0.1, 6.0.1 |
| decode-uri-component         |    CVE-2022-38900   |   LOW  |  0.2.0 | 0.2.1 |
| express         |    CVE-2022-24999   |   HIGH  |  4.16.4 | 4.17.3 |
| glob-parent         |    CVE-2020-28469   |   HIGH  |  3.1.0 | 5.1.2 |
| got         |    CVE-2022-33987   |   MEDIUM  |  6.7.1 | 11.8.5, 12.1.0 |
| json-schema         |    CVE-2021-3918   |   CRITICAL  |  0.2.3 | 0.4.0 |
| kind-of         |    CVE-2019-20149   |   HIGH  |  6.0.2 | 6.0.3 |
| minimatch         |    CVE-2022-3517   |   HIGH  |  3.0.4 | 3.0.5 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  0.0.8 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  0.0.8 | 1.2.3, 0.2.1 |
| minimist         |    CVE-2021-44906   |   CRITICAL  |  1.2.0 | 1.2.6 |
| minimist         |    CVE-2020-7598   |   MEDIUM  |  1.2.0 | 1.2.3, 0.2.1 |
| node-forge         |    CVE-2020-7720   |   HIGH  |  0.7.6 | 0.10.0 |
| node-forge         |    CVE-2022-24771   |   HIGH  |  0.7.6 | 1.3.0 |
| node-forge         |    CVE-2022-24772   |   HIGH  |  0.7.6 | 1.3.0 |
| node-forge         |    CVE-2022-0122   |   MEDIUM  |  0.7.6 | 1.0.0 |
| node-forge         |    CVE-2022-24773   |   MEDIUM  |  0.7.6 | 1.3.0 |
| node-forge         |    GHSA-5rrq-pxf6-6jx5   |   LOW  |  0.7.6 | 1.0.0 |
| node-forge         |    GHSA-gf8q-jrpm-jvxq   |   LOW  |  0.7.6 | 1.0.0 |
| node-forge         |    GHSA-wxgw-qj99-44c2   |   LOW  |  0.7.6 | 0.10.0 |
| pug         |    CVE-2021-21353   |   HIGH  |  2.0.3 | 3.0.1 |
| qs         |    CVE-2022-24999   |   HIGH  |  6.5.2 | 6.2.4, 6.3.3, 6.4.1, 6.5.3, 6.6.1, 6.7.3, 6.8.3, 6.9.7, 6.10.3 |
| set-value         |    CVE-2019-10747   |   CRITICAL  |  0.4.3 | 3.0.1, 2.0.1 |
| set-value         |    CVE-2021-23440   |   HIGH  |  0.4.3 | 2.0.1, 4.0.1 |
| set-value         |    CVE-2019-10747   |   CRITICAL  |  2.0.0 | 3.0.1, 2.0.1 |
| set-value         |    CVE-2021-23440   |   HIGH  |  2.0.0 | 2.0.1, 4.0.1 |
| undefsafe         |    CVE-2019-10795   |   MEDIUM  |  2.0.2 | 2.0.3 |
| ws         |    CVE-2021-32640   |   MEDIUM  |  6.1.2 | 5.2.3, 6.2.2, 7.4.6 |

