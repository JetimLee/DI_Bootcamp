-- CREATE TABLE myTable1 (
-- iD int NOT NULL,
-- lastname varchar,
-- firstname varchar,
-- PRIMARY KEY(id))
-- CREATE TABLE myTable2 (
-- iD int NOT NULL,
-- lastname varchar,
-- firstname varchar,
-- PRIMARY KEY(id))
-- CREATE TABLE myTable3 (
-- iD int NOT NULL,
-- lastname varchar,
-- firstname varchar,
-- PRIMARY KEY(id))
SELECT * FROM myTable3
INNER JOIN myTable1 ON myTable3.id = myTable1.id
INNER join myTable2 ON myTable3.id=myTable2.id
SELECT * FROM myTable3
FULL OUTER JOIN myTable1 ON myTable3.id = myTable1.id
FULL OUTER join myTable2 ON myTable3.id=myTable2.id
SELECT * FROM myTable3
LEFT JOIN myTable1 ON myTable3.id = myTable1.id
LEFT join myTable2 ON myTable3.id=myTable2.id
SELECT * FROM myTable3
RIGHT JOIN myTable1 ON myTable3.id = myTable1.id
RIGHT join myTable2 ON myTable3.id=myTable2.id