一、准备环境

1、安装确保以下系统相关库文件 gcc gcc-c++ autoconf automake zlib* libxml* ncurses-devel libmcrypt* libtool*(libtool-ltdl-devel*)

yum -y install gcc gcc-c++ autoconf automake zlib* libxml* ncurses-devel libmcrypt* libtool* bison*


2、建立mysql安装目录及数据存放目录（建议连接到版本目录）
mkdir /usr/local/mysql-5.6.28
ln -s /usr/local/mysql-5.6.28 /usr/local/mysql


3、创建用户和用户组（用户不可登录，如果要可登陆的，则useradd -r -g mysql mysql）
groupadd mysql
useradd -s /sbin/nologin mysql -g mysql


4、赋予数据存放目录权限
chown mysql:mysql -R /usr/local/mysql-5.6.28


5、安装cmake，先看看系统中是否存在

# yum install make

 or 

mysql5.5以后是通过cmake来编译的,可在http://www.cmake.org网站进行下载cmake-3.6.1.tar.gz

sudo wget https://github.com/Kitware/CMake/releases/download/v3.6.1/cmake-3.6.1.tar.gz
tar -zxf cmake-3.6.1.tar.gz
cd cmake-3.6.1
./configure
gmake && gmake install


二、安装MySQL 5.6.28

1、解压并进入源码目录：
sudo wget http://mysql.mirror.ac.za/Downloads/MySQL-5.6/mysql-5.6.38.tar.gz
tar -zxf mysql-5.6.28.tar.gz
cd mysql-5.6.28


2、编译mysql-5.6.28             //////////////#--with-federated-storage-engine


# cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_UNIX_ADDR=/usr/local/mysql/mysql.sock \
-DMYSQL_DATADIR=/usr/local/mysql/data \
-DSYSCONFDIR=/etc \
-DENABLE_DOWNLOADS=1 \
-DMYSQL_USER=mysql \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci \
-DWITH_EXTRA_CHARSETS=all \
-DWITH_INNOBASE_STORAGE_ENGINE=1 \
-DWITH_ARCHIVE_STORAGE_ENGINE=1 \
-DWITH_BLACKHOLE_STORAGE_ENGINE=1 \
-DWITH_FEDERATED_STORAGE_ENGINE=1 \
-DWITH_PARTITION_STORAGE_ENGINE=1 \
-DWITH_MYISAM_STORAGE_ENGINE=1 \
-DWITH_MEMORY_STORAGE_ENGINE=1 \
-DWITH_READLINE=1 \
-DENABLED_LOCAL_INFILE=1 \
-DMYSQL_USER=mysql \
-DMYSQL_TCP_PORT=3306 \
-DWITH_BIG_TABLES=1 \
-DENABLED_STATIC=1 \
-DENABLED_THREAD_SAFE_CLIENT=1 \
-DWITH_EXTRA_CHARSERS=gbk,gb2312,utf8


#-DWITH_CLIENT_LDFLAGS=-all-static \
#-DWITH_MYSQLD_LDFLAGS=-all-static \

=============================
CMake Warning:
  Manually-specified variables were not used by the project:

    ENABLED_STATIC
    ENABLED_THREAD_SAFE_CLIENT
    WITH_BIG_TABLES
    WITH_EXTRA_CHARSERS
    WITH_MEMORY_STORAGE_ENGINE
    WITH_READLINE
=================================

注：
编译出错时需要删除CMakeCache.txt：
make clean
rm -f CMakeCache.txt
排除错误因素重新编译


make && make install


3、复制配置文件，这步骤可忽略，但要修改配置（貌似装好已存在，并且tmd编译配置好像么生效！）

# cp support-files/my-default.cnf /etc/my.cnf

修改配置：
port = 3306
datadir = /usr/local/mysql/data
socket = /usr/local/mysql/mysql.sock
log-error = /usr/local/mysql/log/mysql.error.log
pid-file = /usr/local/mysql/run/mysql.pid
default-character-set = utf8
default-storage-engine = INNODB

创建目录：
mkdir -p /usr/local/mysql/log
mkdir -p /usr/local/mysql/run


4、初始化数据库

执行前需赋给scripts/mysql_install_db文件执行权限
chmod 755 scripts/mysql_install_db

scripts/mysql_install_db --user=mysql --defaults-file=/etc/my.cnf \
--basedir=/usr/local/mysql/ \
--datadir=/usr/local/mysql/data/

注：basedir：mysql安装路径   datadir：数据库文件储存路径


5、设置mysqld的开机启动
cp support-files/mysql.server /etc/init.d/mysqld
chmod 755 /etc/init.d/mysqld

chkconfig mysqld on


6、为MySQL配置环境变量

将mysql的bin目录加到PATH中，有利于以后管理和维护，在/etc/profile中加入mysql/bin，同时增加两个别名方便操作：

MYSQL_HOME=/usr/local/mysql
PATH=$PATH:$MYSQL_HOME/bin
export MYSQL_HOME PATH

alias mysql_start="mysqld_safe &"
alias mysql_stop="mysqladmin -u root shutdown"
#alias mysql_stop="mysqladmin -u root -p shutdown"


使环境变量生效：
source /etc/profile


7、启动mysql服务
service mysqld start		或	/etc/init.d/mysqld start

启动完成之后用ps -ef |grep mysql 命令查看是否启动
****注意：如果将mysql.sock位置放到安装目录下，还需重新赋予数据存放目录权限

chown mysql:mysql -R /usr/local/mysql/*
本mac启动方法：mysql.server start

8、设置密码（貌似直接登录对user表赋值比较好）
mysqladmin -u root password

OR

/usr/local/mysql/bin/mysql_secure_installation


9、登陆mysql
mysql -uroot -p


10、设置连接账号，根据情况设置（事实上这个时候已经可以使用了，root不能远程登录，但可以通过mysql客户端以ssh的方式连接）

# use mysql;
# select user,host,password from user; 

 
 
 
 
 
 
 
 
 
 
 （下面内容可忽略）
 
 
 
 


三、MySQL标准设置

1、为root帐户设置初始密码

# /usr/local/mysql/bin/mysqladmin -u root password 'new-password'

或者限制只能通过本机登陆

# /usr/local/mysql/bin/mysqladmin -u root -h ‘hostname’ password 'new-password'

2、删除本机匿名连接的空密码帐号

本机登录mysql

mysql>use mysql; //选择默认数据库mysql

mysql>update user set password=’root123’ where user = '127.0.0.1';

mysql>delete from user where password="";//不允许root密码为空

mysql>flush privileges;

mysql>quit


容许root用户是远程登录

对于root账号，如果考虑安全应该新建其他账号用于远程登录，root账号可以不必开启远程登录。不过对于一般使用，没有太多安全需求，允许root用户远程登录可以方便管理，毕竟使用专用管理软件的图形界面在操作方面要方便的多。

















=================================================================  End



 

3、设置MySQL远程连接

1)         mysql 数据库端设置

# ./mysql -u root -p  //进入数据库

mysql>use mysql

mysql>select user,password,host from user;

mysql>update user set host = '192.168.%' where user = '127.0.0.1';

mysql>grant all privileges on *.* to root@'%' identified by "root123";//给以root@ip登录的远程连接赋予权限，能够连接数据库。远程无法连接的常见问题原因。并把远程登录用户的密码设置为root

mysql>flush privileges;

mysql>quit


2)         Windows下MySQL客户端

MySQL官方GUI客户端：http://www.mysql.com/downloads/workbench/



收藏到网摘:  
本篇文章来源于 Linux公社网站(www.linuxidc.com)  原文链接：http://www.linuxidc.com/Linux/2011-06/37059.htm







To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

  /usr/local/mysql/bin/mysqladmin -u root password 'new-password'
  /usr/local/mysql/bin/mysqladmin -u root -h iZ23x3ykyv6Z password 'new-password'

Alternatively you can run:

  /usr/local/mysql/bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the manual for more instructions.

You can start the MySQL daemon with:

  cd . ; /usr/local/mysql//bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl

  cd mysql-test ; perl mysql-test-run.pl

Please report any problems at http://bugs.mysql.com/

The latest information about MySQL is available on the web at

  http://www.mysql.com

Support MySQL by buying support/licenses at http://shop.mysql.com

New default config file was created as /usr/local/mysql//my.cnf and
will be used by default by the server when you start it.
You may edit this file to change server settings

WARNING: Default config file /etc/my.cnf exists on the system
This file will be read by default by the MySQL server
If you do not want to use this, either remove it, or use the
--defaults-file argument to mysqld_safe when starting the server


# Mac系统中mysql的启动 关闭 重启 以及kill进程不断重启的解决方案
reference: https://blog.csdn.net/zhangjq520/article/details/79718874