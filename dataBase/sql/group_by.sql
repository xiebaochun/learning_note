SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name

e.g. 
SELECT Customer,SUM(OrderPrice) FROM Orders GROUP BY Customer



SELECT  m.*,vote.VoteCount FROM cn_match m  LEFT JOIN 
 (SELECT COUNT(tid)AS VoteCount FROM cn_matchvote GROUP BY tid) AS    vote
ON vote.tid=m.id WHERE m.type=1 AND m.pass=0



CREATE TABLE IF NOT EXISTS user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;


INSERT INTO `table_name`(column_1,column_2,...) VALUES (value_1,value_2,...);

INSERT INTO `user`(username,age,description) VALUES ('xiaoming',18,'he is a boy');


SELECT * FROM table_name;