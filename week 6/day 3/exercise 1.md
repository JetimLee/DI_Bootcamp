-- SELECT * FROM language
-- SELECT * FROM film
-- SELECT  film.title, film.description film
-- FROM film
-- FULL OUTER JOIN language ON film.language_id = language.language_id

-- SELECT language.name 
-- FROM language
-- FULL OUTER JOIN film ON language.language_id = film.language_id

-- CREATE TABLE new_film(id serial, name varchar(255))
-- INSERT INTO new_film (name)
-- VALUES ('Star Wars I'),('Star Wars II'),('Star Wars III'),('Star Wars IV'),('Star Wars V')
-- CREATE TABLE customer_review
-- (review_id serial not null,film_id int,language_id int,title varchar,score int,review_text varchar, last_update date)
-- SELECT * FROM new_film
-- INSERT INTO customer_review(film_id,title,review_text)
-- VALUES(1,'Star Wars I', 'Wow, much doge'),(2,'Star Wars II', 'Wow, much lightsaber')
-- DELETE FROM new_film WHERE new_film.name = 'Star Wars II'
-- SELECT * FROM customer_review