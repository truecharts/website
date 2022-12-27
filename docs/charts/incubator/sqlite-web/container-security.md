# Container Security

##### Detected Containers

          tccr.io/truecharts/sqlite-web:latest@sha256:ff2f70ca861c4d25d93f6486507c8de89a966fb001c2f1161db5f0bf4bee905d
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/sqlite-web:latest@sha256:ff2f70ca861c4d25d93f6486507c8de89a966fb001c2f1161db5f0bf4bee905d**

#### Container: tccr.io/truecharts/sqlite-web:latest@sha256:ff2f70ca861c4d25d93f6486507c8de89a966fb001c2f1161db5f0bf4bee905d (alpine 3.7.1)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| expat         |    CVE-2018-20843   |   HIGH  |  2.2.5-r0 | 2.2.7-r0 |
| expat         |    CVE-2019-15903   |   HIGH  |  2.2.5-r0 | 2.2.7-r1 |
| libbz2         |    CVE-2019-12900   |   CRITICAL  |  1.0.6-r6 | 1.0.6-r7 |
| libcom_err         |    CVE-2019-5094   |   MEDIUM  |  1.43.7-r0 | 1.43.7-r1 |
| libcrypto1.0         |    CVE-2019-1547   |   MEDIUM  |  1.0.2q-r0 | 1.0.2t-r0 |
| libcrypto1.0         |    CVE-2019-1559   |   MEDIUM  |  1.0.2q-r0 | 1.0.2r-r0 |
| libcrypto1.0         |    CVE-2019-1563   |   LOW  |  1.0.2q-r0 | 1.0.2t-r0 |
| libssl1.0         |    CVE-2019-1547   |   MEDIUM  |  1.0.2q-r0 | 1.0.2t-r0 |
| libssl1.0         |    CVE-2019-1559   |   MEDIUM  |  1.0.2q-r0 | 1.0.2r-r0 |
| libssl1.0         |    CVE-2019-1563   |   LOW  |  1.0.2q-r0 | 1.0.2t-r0 |
| sqlite-libs         |    CVE-2019-8457   |   CRITICAL  |  3.25.3-r0 | 3.25.3-r1 |

**python-pkg**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| Jinja2         |    CVE-2020-28493   |   MEDIUM  |  2.11.2 | 2.11.3 |
| Pygments         |    CVE-2021-20270   |   HIGH  |  2.6.1 | 2.7.4 |
| Pygments         |    CVE-2021-27291   |   HIGH  |  2.6.1 | 2.7.4 |
| Werkzeug         |    CVE-2022-29361   |   CRITICAL  |  1.0.1 | 2.1.1 |
| pip         |    CVE-2019-20916   |   HIGH  |  19.0.1 | 19.2 |
| pip         |    CVE-2021-3572   |   MEDIUM  |  19.0.1 | 21.1 |
| sqlite-web         |    CVE-2021-23404   |   HIGH  |  0.3.7 |  |

