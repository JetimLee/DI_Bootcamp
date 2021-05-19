-- SELECT * FROM customer
-- -- SELECT first_name, last_name AS full_name FROM customer
-- SELECT create_date FROM customer
-- SELECT * FROM customer 
-- ORDER BY first_name DESC
-- SELECT film_id, description, release_year, rental_rate FROM film
-- ORDER BY rental_rate  ASC

-- SELECT * FROM address WHERE district = 'Texas'
-- SELECT * FROM film WHERE film_id = 15 OR film_id = 150
-- SELECT * FROM film WHERE title = 'Star Wars'
-- SELECT * FROM film WHERE title LIKE 'St%'
-- SELECT * FROM film  ORDER BY rental_rate ASC LIMIT 10
-- SELECT * FROM payment
-- SELECT * FROM customer
-- SELECT * FROM payment FULL OUTER JOIN customer ON payment.payment_id=customer.customer_id ORDER BY customer.customer_id ASC
-- SELECT film.film_id FROM film 
-- WHERE film.film_id not in(
-- 	SELECT film.film_id FROM film
-- INNER JOIN inventory on film.film_id = inventory.film_id
-- )


-- SELECT * FROM city inner join country ON city.country_id = country.country_id
