yum -y install vsftpd
vi /etc/vsftpd/vsftpd.conf
listen_port=8880
pasv_enable=YES
pasv_min_port=8881
pasv_max_port=8887
local_root=/data/ftp
anonymous_enable=NO
anon_upload_enable=NO
anon_mkdir_write_enable=NO
chroot_local_user=YES
allow_writeable_chroot=YES
systemctl start vsftpd

groupadd admin
useradd -g admin admin
passwd admin
这里输入密码，这个账号用于登录ftp
mkdir -p /data/ftp
chown -R admin:admin /data/ftp
chmod -R 777 /data/ftp

新建用户

useradd Marry -s /sbin/nologin -d /var/ftp  

passwd Marry  #给Marry用户设置密码

/* useradd 使用到3个参数：用户名，-s，-d，三个参数位置可以变动

   Marry是用户名 

  -d 后面跟的是我们要给予Marry的家目录

*/

此时 /etc/vsftpd/vsftpd.conf 里设置如下
chroot_local_user=NO

chroot_list_enable=YES

chroot_list_file=/etc/vsftpd/chroot_list

userlist_enable=YES

userlist_deny=NO

在 /etc/vsftpd/ 下的 chroot_list、user_list 里加上 Marry 的名字


service vsftpd status只是检查当前的系统里的vsftpd进程。不管是否是谁启的。
chkconfig --list |grep vsftpd这里通常显示的部分关闭，部分开启的。