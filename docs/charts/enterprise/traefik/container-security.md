# Container Security

##### Detected Containers

          tccr.io/truecharts/traefik:2.9.6@sha256:908a3dd69479f9430c0b55a97bbdbebd3055b6c99c7fc222e96a5edf663c9312
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/traefik:2.9.6@sha256:908a3dd69479f9430c0b55a97bbdbebd3055b6c99c7fc222e96a5edf663c9312**

#### Container: tccr.io/truecharts/traefik:2.9.6@sha256:908a3dd69479f9430c0b55a97bbdbebd3055b6c99c7fc222e96a5edf663c9312 (alpine 3.15.6)
    

**alpine**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| libcrypto1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1q-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2022-4450   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |
| libcrypto1.1         |    CVE-2023-0215   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0286   |   HIGH  |  1.1.1q-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-4304   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2022-4450   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |
| libssl1.1         |    CVE-2023-0215   |   MEDIUM  |  1.1.1q-r0 | 1.1.1t-r0 |

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.47 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.47 |  |
| github.com/containerd/containerd         |    CVE-2022-23648   |   HIGH  |  v1.5.9 | 1.4.13, 1.5.10, 1.6.1 |
| github.com/containerd/containerd         |    CVE-2022-23471   |   MEDIUM  |  v1.5.9 | 1.5.16, 1.6.12 |
| github.com/containerd/containerd         |    CVE-2022-31030   |   MEDIUM  |  v1.5.9 | 1.5.13, 1.6.6 |
| github.com/containerd/containerd         |    GHSA-5ffw-gxpp-mxpf   |   UNKNOWN  |  v1.5.9 | v1.5.13, v1.6.6 |
| github.com/docker/distribution         |    GHSA-qq97-vm5h-rrhg   |   LOW  |  v2.7.1+incompatible | 2.8.0 |
| github.com/hashicorp/consul         |    CVE-2021-41803   |   HIGH  |  v1.10.4 | 1.11.9 |
| github.com/hashicorp/consul         |    CVE-2022-29153   |   HIGH  |  v1.10.4 | 1.9.17, 1.10.10, 1.11.5 |
| github.com/hashicorp/consul         |    CVE-2022-24687   |   MEDIUM  |  v1.10.4 | 1.9.15, 1.10.8, 1.11.3 |
| github.com/hashicorp/consul         |    CVE-2022-40716   |   MEDIUM  |  v1.10.4 | 1.11.9, 1.12.5, 1.13.2 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.3.1-0.20221206200815-1e63c2f08a10 | 0.4.0 |

