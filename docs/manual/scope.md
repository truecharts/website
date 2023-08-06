# Project Scope

Truecharts a comprehensive project that focuses on providing Helm charts for applications to run on Kubernetes based platforms. This documentation article aims to describe the project's scope, highlighting its key principles and areas of focus.

## Overview

Truecharts is committed to delivering high-quality Helm charts for Kubernetes-based applications. By leveraging the power of Helm, a popular package manager for Kubernetes, and adhering to native Kubernetes features, Truecharts ensures compatibility, maintainability, and ease of use for its users.

### Key Principles

1. Native Kubernetes Features: Truecharts places a strong emphasis on utilizing the native features and capabilities offered by Kubernetes. This approach ensures compatibility with the Kubernetes ecosystem and enables seamless integration with existing Helm-based kubernetes workflows. By focussing on the power of  Helm, Truecharts provides charts that are familiar to Helm users and adheres to Helm and Kubernetes best practices.
2. Avoidance of Platform-Specific Features: The project prefers not to rely on platform-specific feature sets that are unique to specific Kubernetes distributions or platforms such TrueNAS SCALE (i.e using cert-manager certificates instead of built-in certificates on TrueNAS SCALE). By avoiding these platform-specific features, Truecharts charts maintain a higher degree of portability and can be used across different Kubernetes environments without modifications. Users can expect a consistent experience regardless of their chosen Kubernetes platform.
3. Holistic packaging of Helm Charts: Our charts aim to view application holistically, packing all parts (frontends, databases, tools) into a single helm chart. We also aim to ensure all our charts fit well within a single “truecharts ecosystem”. This means each chart will integrate everything and all the containers needed to run (better than a simple docker-compose) and will be ready for TrueCharts features such as ingress and certificate management from the get-go.

### Focus Areas

1. Helm Chart Development: Truecharts focuses on developing high-quality Helm charts that encapsulate the deployment, configuration, and management of various Kubernetes applications. The charts are designed to simplify the deployment process and provide configurable options to meet the specific requirements of each application.
2. Standardized Tools: Truecharts focuses on using standardized tools for Kubernetes, such as cert-manager, Traefik and integrating them for easy use across all our charts. This is accomplished using the Common Helm chart, for which we have extensive documention on our website so others can add their own charts to the catalog or modify as they see fit. 
3. Compatibility and Community Engagement: Truecharts strives to maintain compatibility with the latest versions of Helm and Kubernetes, ensuring that users can seamlessly upgrade their environments without issues. The project actively engages with the Kubernetes and Helm communities, contributing bug fixes, enhancements, and documentation. Community feedback and collaboration are vital for improving the project and ensuring its alignment with industry standards.
4. Avoidance of Writing Custom Containers: Truecharts strives to minimize the creation of custom containers within its charts. Instead, it promotes the use of existing, well-maintained container images available from the official upstream sources or trusted community repositories. This approach ensures that users benefit from established image quality, security, and support. By leveraging existing containers, Truecharts reduces the maintenance burden and encourages the use of best practices within the Kubernetes ecosystem.

### Limitations

1. Opinitated Charts: Truecharts Helm Charts are carefully constructed to ensure the least amount of user-errors and often limit features to what we think our ecosystem really needs. Not every option each chart or application may have access to will be enable to the end-user.
2. Platform Support: Truecharts builds it’s charts with certain tools and may not be able to support every distribution of Kubernetes or deployment pipeline, please check our website and/or support channels for supported platforms.

## Conclusion

Truecharts is a project dedicated to delivering high-quality Helm charts for Kubernetes applications. By focusing on native Helm features, avoiding platform-specific functionality, and leveraging existing containers, Truecharts provides users with reliable, portable, and user-friendly solutions. The project's commitment to compatibility, maintainability, and engagement with the Kubernetes community ensures a robust and valuable resource for Kubernetes developers and operators.

For more information, please visit the Truecharts website at https://truecharts.org or engage with the community through the provided communication channels.
