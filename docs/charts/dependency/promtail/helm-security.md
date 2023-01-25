# Helm Security

## Helm-Chart

##### Scan Results

#### Chart Object: app.yaml
    

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Rbac Security Check         |    KSV047   |   Do not allow privilege escalation from node proxy  |  HIGH | <details><summary>Expand...</summary> Check whether role permits privilege escalation from node proxy <br /> <hr /> <br /> Role permits privilege escalation from node proxy </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/rbac-good-practices/">https://kubernetes.io/docs/concepts/security/rbac-good-practices/</a><br /><a href="https://avd.aquasec.com/misconfig/ksv047">https://avd.aquasec.com/misconfig/ksv047</a><br /></details>  |
