### kubectl get svc

### kubectl get svc | grep eric-ei-postgresal

### kubectl get pods --all-namespaces

### kubectl get svc -n sparklechun

### kubectl get nodes

### 获取kafka命令
	kubectl get pods -n sparklebao|grep ka
	kubectl exec -it eric-trial-kafka-7c8f97697b-mt9hw -n sparklebao bash

### 获取端口号
	kubectl get svc -n sparklebao |grep proxy

### 获取分配的机器地址 及状态
	kubectl get pods -o wide -n sparklebao|grep portal


### Run deployment 
	kubectl apply -f nodejs-deployment.yaml

