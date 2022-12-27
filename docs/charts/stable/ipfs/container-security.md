# Container Security

##### Detected Containers

          tccr.io/truecharts/ipfs:0.17.0@sha256:294f79a60603063337af861821880668f1e51ecd0b1d926e774f4f34d2421241
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/ipfs:0.17.0@sha256:294f79a60603063337af861821880668f1e51ecd0b1d926e774f4f34d2421241**

#### Container: usr/local/bin/ipfs
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/ipfs/go-merkledag         |    CVE-2022-23495   |   HIGH  |  v0.6.0 | 0.8.1 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.1.0 | 0.4.0 |

