-- CREATE TABLE students(
-- 	id SERIAL, last_name varchar(255) NOT NULL, first_name varchar(255), birth_date DATE)

--  SELECT * FROM students
-- DELETE FROM students
-- WHERE last_name = 'checking'
-- INSERT INTO students(last_name, first_name, birth_date)
-- VALUES ('Benichou','Marc',date '1998-11-02'),('Cohen','Yoan',date '2010-12-03'),('Benichou','Lea',date '1987-07-27'),('Dux','Amelia',date '1996-04-07'),('Grez','David',date '2003-06-14'),('Simpson','Omer',date '1980-10-03')
-- SELECT * FROM students
-- SELECT first_name, last_name FROM students
-- SELECT id FROM students WHERE id = 4
-- SELECT first_name, last_name FROM students WHERE first_name = 'Marc' AND last_name = 'Benichou'
-- SELECT first_name, last_name FROM students WHERE first_name ='Marc' OR last_name = 'Benichou'
-- SELECT first_name FROM students WHERE first_name ~ 'a'
-- SELECT first_name FROM students WHERE first_name LIKE 'A%'
-- SELECT * FROM Students WHERE id = 4 OR id = 5
-- SELECT first_name FROM students WHERE right(first_name,1) = 'a'
-- SELECT first_name FROM students WHERE right(first_name, 6) = 'a'
-- INSERT INTO students(first_name, last_name)
-- VALUES ('Leah','Testing')
-- SELECT first_name FROM students WHERE RIGHT(first_name,1)='2'
-- SELECT * FROM students WHERE birth_date>=date '2000-01-01'