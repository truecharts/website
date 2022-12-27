# Container Security

##### Detected Containers

          tccr.io/truecharts/k8s_gateway:0.3.2@sha256:594fd6990eb2e0af1df7df8ba76cb3ca66232f46c5df5ebf786a45dd19777ae5
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/k8s_gateway:0.3.2@sha256:594fd6990eb2e0af1df7df8ba76cb3ca66232f46c5df5ebf786a45dd19777ae5**

#### Container: coredns
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/aws/aws-sdk-go         |    CVE-2020-8911   |   MEDIUM  |  v1.44.22 |  |
| github.com/aws/aws-sdk-go         |    CVE-2020-8912   |   LOW  |  v1.44.22 |  |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20220722155237-a158d28d115b | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20220722155237-a158d28d115b | 0.4.0 |
| golang.org/x/text         |    CVE-2022-32149   |   HIGH  |  v0.3.7 | 0.3.8 |

