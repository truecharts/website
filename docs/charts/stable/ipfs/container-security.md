# Container Security

##### Detected Containers

          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f
          tccr.io/truecharts/ipfs:0.17.0@sha256:294f79a60603063337af861821880668f1e51ecd0b1d926e774f4f34d2421241
          tccr.io/truecharts/ubuntu:jammy-20221101@sha256:4b9475e08c5180d4e7417dc6a18a26dcce7691e4311e5353dbb952645c5ff43f

##### Scan Results

**Container: tccr.io/truecharts/ipfs:0.17.0@sha256:294f79a60603063337af861821880668f1e51ecd0b1d926e774f4f34d2421241**

#### Container: usr/local/bin/ipfs
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/ipfs/go-merkledag         |    CVE-2022-23495   |   HIGH  |  v0.6.0 | 0.8.1 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.1.0 | 0.4.0 |

