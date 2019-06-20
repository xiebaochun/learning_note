Please follow the below steps.

step1. stop mysql

step2. sudo mysqld_safe --skip-grant-tables

step3.mysql -u root

step4.use mysql;

step5.show tables;

step6.describe user;

step7.update user set authentication_string=password('1111') where user='root';

login with password 1111