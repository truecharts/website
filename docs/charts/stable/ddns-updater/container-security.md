# Container Security

##### Detected Containers

          tccr.io/truecharts/ddns-updater:v2.4.1@sha256:da6249fc9b5d1fbedfc4a4d7f0ed0bcff8c0742c54449c9f4b375fa55b7d98fe
          tccr.io/truecharts/kubectl:v1.26.0@sha256:6d6e0e50f28b961ed1c1c6a9c140553238641591fbdc9ac7c1a348636f78c552

##### Scan Results

**Container: tccr.io/truecharts/ddns-updater:v2.4.1@sha256:da6249fc9b5d1fbedfc4a4d7f0ed0bcff8c0742c54449c9f4b375fa55b7d98fe**

#### Container: updater/app
    

**gobinary**

      
| Package         |    Vulnerability   |   Severity  |  Installed Version | Fixed Version |
|:----------------|:------------------:|:-----------:|:------------------:|:-------------:|
| github.com/containrrr/shoutrrr         |    CVE-2022-25891   |   HIGH  |  v0.4.4 | 0.6.0 |
| golang.org/x/net         |    CVE-2021-33194   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20210520170846-37e1c6afe023 |
| golang.org/x/net         |    CVE-2021-44716   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20211209124913-491a49abca63 |
| golang.org/x/net         |    CVE-2022-27664   |   HIGH  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20220906165146-f3363e06e74c |
| golang.org/x/net         |    CVE-2021-31525   |   MEDIUM  |  v0.0.0-20210226172049-e18ecbb05110 | 0.0.0-20210428140749-89ef3d95e781 |
| golang.org/x/net         |    CVE-2022-41717   |   MEDIUM  |  v0.0.0-20210226172049-e18ecbb05110 | 0.4.0 |
| golang.org/x/sys         |    CVE-2022-29526   |   MEDIUM  |  v0.0.0-20210303074136-134d130e1a04 | 0.0.0-20220412211240-33da011f77ad |

