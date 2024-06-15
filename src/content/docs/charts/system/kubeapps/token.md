---
title: Getting a Login Token for KubeApps
---

Currently KubeApps, by default, requires a kubernetes token to login. To acquire a temporary(!) token, enter the command given in the "notes" section (bottom right corner in SCALE WebUI) and copy the token given to the WebGUI of KubeApps.

For non-SCALE distrubtions, use the following command
kubectl create token <kubeapps-helm-install-name> -n <namespace>
eg. kubectl create token kubeapps -n media
