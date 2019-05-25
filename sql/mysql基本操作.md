1,登录mysql
mysql -u root -p

2,show databases;

3,show tables
show tables;

4,Creating a database 
CREATE DATABASE database name;

5,DROP DATABASE database name;

6,USE events;


7,查看mysql相关信息
STATUS;

8， 导出数据
mysqldump -h IP -u 用户名 -p 数据库名 > 导出的文件名
mysqldump -h localhost -u csin -p csin > \scin.sql