1,登录mysql
mysql -u root -p

2,show databases;

3,show tables
show tables;

4,Creating a database 
CREATE DATABASE [database_name];

5,DROP DATABASE [database_name];

6,USE [database_name];

show tables;

describe [table_name]

7,查看mysql相关信息
STATUS;

8， 导出数据
mysqldump -h IP -u 用户名 -p 数据库名 > 导出的文件名
mysqldump -h localhost -u csin -p csin > \scin.sql


创建远程ip可以访问的账户
	CREATE USER 'admin'@'localhost' IDENTIFIED BY 'MyNewPass4!';

	GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;

	CREATE USER 'admin'@'%' IDENTIFIED BY 'MyNewPass4!';

	GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;

	FLUSH PRIVILEGES;

## 如果mysql 版本过高导致 远程ip连接不上
	alter user 'admin'@'localhost' identified with mysql_native_password by 'MyNewPass4!';
	alter user 'admin'@'%' identified with mysql_native_password by 'MyNewPass4!';