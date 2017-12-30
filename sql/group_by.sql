SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name

e.g. 
SELECT Customer,SUM(OrderPrice) FROM Orders GROUP BY Customer



SELECT  m.*,vote.VoteCount FROM cn_match m  LEFT JOIN 
 (SELECT COUNT(tid)AS VoteCount FROM cn_matchvote GROUP BY tid) AS    vote
ON vote.tid=m.id WHERE m.type=1 AND m.pass=0