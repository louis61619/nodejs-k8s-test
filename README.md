
use docker and minikube deploying a nodejs app

## Deployment

clone repo and use this command and load this local image to minikube
```
docker build --tag node-docker .
minikube image load node-docker
```

or build image in minikube

```
# Set docker env
eval $(minikube docker-env)             # unix shells
minikube docker-env | Invoke-Expression # PowerShell

# Build image
docker build -t node-docker .
```

## Env
```
kubectl apply -f envs.yaml
```

## Service

create service and connect to the pods
```
kubectl apply -f sw-deployment.yaml
kubectl apply -f sw-service.yaml
```
start service
```
minikube service node-service 
```
or set port
```
kubectl port-forward service/node-service 3002:3000
```