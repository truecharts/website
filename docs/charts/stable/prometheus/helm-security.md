# Helm Security

## Helm-Chart

##### Scan Results

#### Chart Object: prometheus/charts/kube-state-metrics/templates/clusterrole.yaml
    

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Rbac Security Check         |    KSV041   |   Do not allow management of secrets  |  CRITICAL | <details><summary>Expand...</summary> Check whether role permits managing secrets <br> <hr> <br> Role permits management of secret(s) </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/rbac-good-practices/">https://kubernetes.io/docs/concepts/security/rbac-good-practices/</a><br><a href="https://avd.aquasec.com/misconfig/ksv041">https://avd.aquasec.com/misconfig/ksv041</a><br></details>  |

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Kubernetes Security Check         |    KSV001   |   Process can elevate its own privileges  |  MEDIUM | <details><summary>Expand...</summary> A program inside the container can elevate its own privileges and run as root, which might give the program control over the container and node. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;securityContext.allowPrivilegeEscalation&#39; to false </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv001">https://avd.aquasec.com/misconfig/ksv001</a><br></details>  |
| Kubernetes Security Check         |    KSV003   |   Default capabilities not dropped  |  LOW | <details><summary>Expand...</summary> The container should drop all default capabilities and add only those that are needed for its execution. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should add &#39;ALL&#39; to &#39;securityContext.capabilities.drop&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-capabilities-drop-index-all/">https://kubesec.io/basics/containers-securitycontext-capabilities-drop-index-all/</a><br><a href="https://avd.aquasec.com/misconfig/ksv003">https://avd.aquasec.com/misconfig/ksv003</a><br></details>  |
| Kubernetes Security Check         |    KSV011   |   CPU not limited  |  LOW | <details><summary>Expand...</summary> Enforcing CPU limits prevents DoS via resource exhaustion. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;resources.limits.cpu&#39; </details>| <details><summary>Expand...</summary><a href="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits">https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits</a><br><a href="https://avd.aquasec.com/misconfig/ksv011">https://avd.aquasec.com/misconfig/ksv011</a><br></details>  |
| Kubernetes Security Check         |    KSV014   |   Root file system is not read-only  |  LOW | <details><summary>Expand...</summary> An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;securityContext.readOnlyRootFilesystem&#39; to true </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-readonlyrootfilesystem-true/">https://kubesec.io/basics/containers-securitycontext-readonlyrootfilesystem-true/</a><br><a href="https://avd.aquasec.com/misconfig/ksv014">https://avd.aquasec.com/misconfig/ksv014</a><br></details>  |
| Kubernetes Security Check         |    KSV015   |   CPU requests not specified  |  LOW | <details><summary>Expand...</summary> When containers have resource requests specified, the scheduler can make better decisions about which nodes to place pods on, and how to deal with resource contention. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;resources.requests.cpu&#39; </details>| <details><summary>Expand...</summary><a href="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits">https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits</a><br><a href="https://avd.aquasec.com/misconfig/ksv015">https://avd.aquasec.com/misconfig/ksv015</a><br></details>  |
| Kubernetes Security Check         |    KSV016   |   Memory requests not specified  |  LOW | <details><summary>Expand...</summary> When containers have memory requests specified, the scheduler can make better decisions about which nodes to place pods on, and how to deal with resource contention. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;resources.requests.memory&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-resources-limits-memory/">https://kubesec.io/basics/containers-resources-limits-memory/</a><br><a href="https://avd.aquasec.com/misconfig/ksv016">https://avd.aquasec.com/misconfig/ksv016</a><br></details>  |
| Kubernetes Security Check         |    KSV018   |   Memory not limited  |  LOW | <details><summary>Expand...</summary> Enforcing memory limits prevents DoS via resource exhaustion. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;resources.limits.memory&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-resources-limits-memory/">https://kubesec.io/basics/containers-resources-limits-memory/</a><br><a href="https://avd.aquasec.com/misconfig/ksv018">https://avd.aquasec.com/misconfig/ksv018</a><br></details>  |
| Kubernetes Security Check         |    KSV020   |   Runs with low user ID  |  LOW | <details><summary>Expand...</summary> Force the container to run with user ID &gt; 10000 to avoid conflicts with the host’s user table. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;securityContext.runAsUser&#39; &gt; 10000 </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-runasuser/">https://kubesec.io/basics/containers-securitycontext-runasuser/</a><br><a href="https://avd.aquasec.com/misconfig/ksv020">https://avd.aquasec.com/misconfig/ksv020</a><br></details>  |
| Kubernetes Security Check         |    KSV021   |   Runs with low group ID  |  LOW | <details><summary>Expand...</summary> Force the container to run with group ID &gt; 10000 to avoid conflicts with the host’s user table. <br> <hr> <br> Container &#39;kube-state-metrics&#39; of Deployment &#39;RELEASE-NAME-kube-state-metrics&#39; should set &#39;securityContext.runAsGroup&#39; &gt; 10000 </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-runasuser/">https://kubesec.io/basics/containers-securitycontext-runasuser/</a><br><a href="https://avd.aquasec.com/misconfig/ksv021">https://avd.aquasec.com/misconfig/ksv021</a><br></details>  |
| Kubernetes Security Check         |    KSV030   |   Default Seccomp profile not set  |  LOW | <details><summary>Expand...</summary> The RuntimeDefault/Localhost seccomp profile must be required, or allow specific additional profiles. <br> <hr> <br> Either Pod or Container should set &#39;securityContext.seccompProfile.type&#39; to &#39;RuntimeDefault&#39; </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv030">https://avd.aquasec.com/misconfig/ksv030</a><br></details>  |
| Kubernetes Security Check         |    KSV106   |   Container capabilities must only include NET_BIND_SERVICE  |  LOW | <details><summary>Expand...</summary> Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability. <br> <hr> <br> container should drop all </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv106">https://avd.aquasec.com/misconfig/ksv106</a><br></details>  |

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Kubernetes Security Check         |    KSV001   |   Process can elevate its own privileges  |  MEDIUM | <details><summary>Expand...</summary> A program inside the container can elevate its own privileges and run as root, which might give the program control over the container and node. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;securityContext.allowPrivilegeEscalation&#39; to false </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv001">https://avd.aquasec.com/misconfig/ksv001</a><br></details>  |
| Kubernetes Security Check         |    KSV003   |   Default capabilities not dropped  |  LOW | <details><summary>Expand...</summary> The container should drop all default capabilities and add only those that are needed for its execution. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should add &#39;ALL&#39; to &#39;securityContext.capabilities.drop&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-capabilities-drop-index-all/">https://kubesec.io/basics/containers-securitycontext-capabilities-drop-index-all/</a><br><a href="https://avd.aquasec.com/misconfig/ksv003">https://avd.aquasec.com/misconfig/ksv003</a><br></details>  |
| Kubernetes Security Check         |    KSV009   |   Access to host network  |  HIGH | <details><summary>Expand...</summary> Sharing the host’s network namespace permits processes in the pod to communicate with processes bound to the host’s loopback adapter. <br> <hr> <br> DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should not set &#39;spec.template.spec.hostNetwork&#39; to true </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline">https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline</a><br><a href="https://avd.aquasec.com/misconfig/ksv009">https://avd.aquasec.com/misconfig/ksv009</a><br></details>  |
| Kubernetes Security Check         |    KSV010   |   Access to host PID  |  HIGH | <details><summary>Expand...</summary> Sharing the host’s PID namespace allows visibility on host processes, potentially leaking information such as environment variables and configuration. <br> <hr> <br> DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should not set &#39;spec.template.spec.hostPID&#39; to true </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline">https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline</a><br><a href="https://avd.aquasec.com/misconfig/ksv010">https://avd.aquasec.com/misconfig/ksv010</a><br></details>  |
| Kubernetes Security Check         |    KSV011   |   CPU not limited  |  LOW | <details><summary>Expand...</summary> Enforcing CPU limits prevents DoS via resource exhaustion. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;resources.limits.cpu&#39; </details>| <details><summary>Expand...</summary><a href="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits">https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits</a><br><a href="https://avd.aquasec.com/misconfig/ksv011">https://avd.aquasec.com/misconfig/ksv011</a><br></details>  |
| Kubernetes Security Check         |    KSV014   |   Root file system is not read-only  |  LOW | <details><summary>Expand...</summary> An immutable root file system prevents applications from writing to their local disk. This can limit intrusions, as attackers will not be able to tamper with the file system or write foreign executables to disk. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;securityContext.readOnlyRootFilesystem&#39; to true </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-readonlyrootfilesystem-true/">https://kubesec.io/basics/containers-securitycontext-readonlyrootfilesystem-true/</a><br><a href="https://avd.aquasec.com/misconfig/ksv014">https://avd.aquasec.com/misconfig/ksv014</a><br></details>  |
| Kubernetes Security Check         |    KSV015   |   CPU requests not specified  |  LOW | <details><summary>Expand...</summary> When containers have resource requests specified, the scheduler can make better decisions about which nodes to place pods on, and how to deal with resource contention. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;resources.requests.cpu&#39; </details>| <details><summary>Expand...</summary><a href="https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits">https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits</a><br><a href="https://avd.aquasec.com/misconfig/ksv015">https://avd.aquasec.com/misconfig/ksv015</a><br></details>  |
| Kubernetes Security Check         |    KSV016   |   Memory requests not specified  |  LOW | <details><summary>Expand...</summary> When containers have memory requests specified, the scheduler can make better decisions about which nodes to place pods on, and how to deal with resource contention. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;resources.requests.memory&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-resources-limits-memory/">https://kubesec.io/basics/containers-resources-limits-memory/</a><br><a href="https://avd.aquasec.com/misconfig/ksv016">https://avd.aquasec.com/misconfig/ksv016</a><br></details>  |
| Kubernetes Security Check         |    KSV018   |   Memory not limited  |  LOW | <details><summary>Expand...</summary> Enforcing memory limits prevents DoS via resource exhaustion. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;resources.limits.memory&#39; </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-resources-limits-memory/">https://kubesec.io/basics/containers-resources-limits-memory/</a><br><a href="https://avd.aquasec.com/misconfig/ksv018">https://avd.aquasec.com/misconfig/ksv018</a><br></details>  |
| Kubernetes Security Check         |    KSV020   |   Runs with low user ID  |  LOW | <details><summary>Expand...</summary> Force the container to run with user ID &gt; 10000 to avoid conflicts with the host’s user table. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;securityContext.runAsUser&#39; &gt; 10000 </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-runasuser/">https://kubesec.io/basics/containers-securitycontext-runasuser/</a><br><a href="https://avd.aquasec.com/misconfig/ksv020">https://avd.aquasec.com/misconfig/ksv020</a><br></details>  |
| Kubernetes Security Check         |    KSV021   |   Runs with low group ID  |  LOW | <details><summary>Expand...</summary> Force the container to run with group ID &gt; 10000 to avoid conflicts with the host’s user table. <br> <hr> <br> Container &#39;node-exporter&#39; of DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should set &#39;securityContext.runAsGroup&#39; &gt; 10000 </details>| <details><summary>Expand...</summary><a href="https://kubesec.io/basics/containers-securitycontext-runasuser/">https://kubesec.io/basics/containers-securitycontext-runasuser/</a><br><a href="https://avd.aquasec.com/misconfig/ksv021">https://avd.aquasec.com/misconfig/ksv021</a><br></details>  |
| Kubernetes Security Check         |    KSV023   |   hostPath volumes mounted  |  MEDIUM | <details><summary>Expand...</summary> HostPath volumes must be forbidden. <br> <hr> <br> DaemonSet &#39;RELEASE-NAME-node-exporter&#39; should not set &#39;spec.template.volumes.hostPath&#39; </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline">https://kubernetes.io/docs/concepts/security/pod-security-standards/#baseline</a><br><a href="https://avd.aquasec.com/misconfig/ksv023">https://avd.aquasec.com/misconfig/ksv023</a><br></details>  |
| Kubernetes Security Check         |    KSV030   |   Default Seccomp profile not set  |  LOW | <details><summary>Expand...</summary> The RuntimeDefault/Localhost seccomp profile must be required, or allow specific additional profiles. <br> <hr> <br> Either Pod or Container should set &#39;securityContext.seccompProfile.type&#39; to &#39;RuntimeDefault&#39; </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv030">https://avd.aquasec.com/misconfig/ksv030</a><br></details>  |
| Kubernetes Security Check         |    KSV106   |   Container capabilities must only include NET_BIND_SERVICE  |  LOW | <details><summary>Expand...</summary> Containers must drop ALL capabilities, and are only permitted to add back the NET_BIND_SERVICE capability. <br> <hr> <br> container should drop all </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted">https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted</a><br><a href="https://avd.aquasec.com/misconfig/ksv106">https://avd.aquasec.com/misconfig/ksv106</a><br></details>  |

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Rbac Security Check         |    KSV044   |   No wildcard verb and resource roles  |  CRITICAL | <details><summary>Expand...</summary> Check whether role permits wildcard verb on wildcard resource <br> <hr> <br> Role permits wildcard verb on wildcard resource </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/rbac-good-practices/">https://kubernetes.io/docs/concepts/security/rbac-good-practices/</a><br><a href="https://avd.aquasec.com/misconfig/ksv044">https://avd.aquasec.com/misconfig/ksv044</a><br></details>  |
| Rbac Security Check         |    KSV046   |   No wildcard resource roles  |  CRITICAL | <details><summary>Expand...</summary> Check whether role permits specific verb on wildcard resources <br> <hr> <br> Role permits specific verb on wildcard resource </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/rbac-good-practices/">https://kubernetes.io/docs/concepts/security/rbac-good-practices/</a><br><a href="https://avd.aquasec.com/misconfig/ksv046">https://avd.aquasec.com/misconfig/ksv046</a><br></details>  |

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Kubernetes Security Check         |    KSV037   |   User Pods should not be placed in kube-system namespace  |  MEDIUM | <details><summary>Expand...</summary> ensure that User pods are not placed in kube-system namespace <br> <hr> <br> Service &#39;RELEASE-NAME-prometheus-coredns&#39; should not be set with &#39;kube-system&#39; namespace </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/reference/setup-tools/kubeadm/implementation-details/">https://kubernetes.io/docs/reference/setup-tools/kubeadm/implementation-details/</a><br><a href="https://avd.aquasec.com/misconfig/ksv037">https://avd.aquasec.com/misconfig/ksv037</a><br></details>  |

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| Type         |    Misconfiguration ID   |   Check  |  Severity |                   Explaination                   | Links  |
|:----------------|:------------------:|:-----------:|:------------------:|-----------------------------------------|-----------------------------------------|
| Rbac Security Check         |    KSV047   |   Do not allow privilege escalation from node proxy  |  HIGH | <details><summary>Expand...</summary> Check whether role permits privilege escalation from node proxy <br> <hr> <br> Role permits privilege escalation from node proxy </details>| <details><summary>Expand...</summary><a href="https://kubernetes.io/docs/concepts/security/rbac-good-practices/">https://kubernetes.io/docs/concepts/security/rbac-good-practices/</a><br><a href="https://avd.aquasec.com/misconfig/ksv047">https://avd.aquasec.com/misconfig/ksv047</a><br></details>  |

      
| No Misconfigurations found         |
|:---------------------------------|

      

      
| No Misconfigurations found         |
|:---------------------------------|

      
