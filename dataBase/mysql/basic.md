# 1. Database and Table Creation
mysql> CREATE DATABASE Students;

mysql> USE Students

mysql> CREATE TABLE Information (firstname VARCHAR(20),lastname VARCHAR(20),gender CHAR(1),grade INT(10), dob DATE);

mysql> SHOW TABLES;

# 2. Inserting Values in a Table
mysql> INSERT INTO Information VALUES ('Amanda','Williams','f','10','1999-03-30');

mysql> INSERT INTO Information VALUES ('Peter','Williams','m','10','1998-03-15');

mysql> INSERT INTO Information VALUES ('Cristie','Wills','f','10','1999-02-05');

# 3. Viewing the Table
mysql> SELECT * FROM Information;

# 4. Adding a Column to the Table
mysql> ALTER TABLE Information ADD COLUMN rollnumber INT(10);

mysql> ALTER TABLE Information ADD PRIMARY KEY(rollnumber)

# 5. Adding Values to the New Column
mysql> INSERT INTO Information rollnumber VALUE ('001');

mysql> INSERT INTO Information rollnumber VALUE ('002');

mysql> INSERT INTO Information rollnumber VALUE ('003');

# 6. Counting the Number of Rows
mysql> SELECT COUNT (*) FROM Information

# 7. Selecting Particular Records
mysql> SELECT * FROM Information WHERE lastname = 'Williams';

# 8. Updating Selected Records
mysql> UPDATE Information SET dob = '1999-02-02' WHERE lastname = Wills;

# 9. Deleting Records
mysql> DELETE FROM Information WHERE dob = 1999-03-30;