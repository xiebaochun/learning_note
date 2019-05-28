# RabbitMQ3.7.4
1.	基础配置
mkdir -p /data/source
yum -y install lrzsz
yum -y install vim

2.	网络配置
hostnamectl set-hostname rabbitmq
echo "172.16.6.94 rabbitmq" >> /etc/hosts

3.	安装JDK
tar zxvf /data/source/jdk-* -C /usr/local/
mv /usr/local/jdk* /usr/local/jdk
vim /etc/profile
export JAVA_HOME=/usr/local/jdk
export PATH=$PATH:$JAVA_HOME/bin
source /etc/profile

4.	安装Erlang
yum -y install openssl openssl-devel unixODBC unixODBC-devel rsync zip ncurses-devel gcc gcc-c++ zlib zlib-devel xmlto fop
cd /data/source
tar zxvf otp_src_*.tar.gz
cd otp_src_*
./configure --prefix=/usr/local/erlang
make 
make install
vim /etc/profile
export ERLANG_HOME=/usr/local/erlang
export PATH=$PATH:$ERLANG_HOME/bin
source /etc/profile
erl

5.	安装RabbitMQ
cd /data/source
xz -d /data/source/rabbitmq-server-generic-unix-*.tar.xz
tar xvf /data/source/rabbitmq-server-generic-unix-*.tar -C /usr/local/
mv /usr/local/rabbitmq_server-* /usr/local/rabbitmq
vim /etc/profile
export RABBITMQ_HOME=/usr/local/rabbitmq
export PATH=$PATH:$RABBITMQ_HOME/sbin
source /etc/profile

6. 相关操作
## 后台运行 默认端口号:5672
rabbitmq-server start -detached
## 关闭
rabbitmqctl stop
## 开启web监控页面显示，默认端口15672，可通过localhost:15672查看web监控页面,guest:guest的用户名密码就能登录管理页面了
rabbitmq-plugins enable rabbitmq_management
## 检查rabbitmq 运行状态
rabbitmqctl status

Note:注意端口号被占用
netstat -tunlp | grep 5672

7.	防火墙设置
firewall-cmd --add-port=5672/tcp
firewall-cmd --add-port=15672/tcp
firewall-cmd --reload

8. 
rabbitmqctl add_user root root  //添加用户，后面两个参数分别是用户名和密码，我这都用superrd了。
rabbitmqctl set_permissions -p / root ".*" ".*" ".*"  //添加权限
rabbitmqctl set_user_tags root administrator  //修改用户角色
\
## centos 安装rabbitMQ
reference:
https://blog.csdn.net/super_rd/article/details/70241007?utm_source=itdadao&utm_medium=referral
\
