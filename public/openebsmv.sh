#!/bin/bash

# List all resources in the openebs namespace
resources=$(k3s kubectl get all --namespace=openebs -o custom-columns=':metadata.name,:metadata.namespace,:kind' --no-headers)

# Loop through each resource and change its namespace
while IFS= read -r line; do
    name=$(echo "$line" | awk '{print $1}')
    namespace=$(echo "$line" | awk '{print $2}')
    kind=$(echo "$line" | awk '{print $3}')
    
    # Change the namespace for each resource
    k3s kubectl get "$kind" "$name" --namespace="$namespace" -o yaml | sed "s/namespace: $namespace/namespace: ix-openebs/g" | k3s kubectl apply -f -
done <<< "$resources"
