替换portal backend的image
1. kubectl get deployment -n sparklebao|grep rest
2. kubectl edit $deployment -n sparklebao
3. 找到image, 更换  [/image]
改动以后，k8s会自动重启pod
Portal gui的image如法炮制
如果不改动deployment 要重启pod 就
kubectl scale $deployment -n sparklebao –replicas=0
kubectl scale $deployment -n sparklebao –replicas=1


kubectl get pods -n sparklebao|grep portal

kubectl get pods -o wide -n sparklebao|grep portal
修改配置
kubectl edit deployment agw-sparklebao-eric-apigm-devportal-iot-portal -n sparklebao
获取访问端口号：
kubectl get svc -n sparklebao | grep prox

