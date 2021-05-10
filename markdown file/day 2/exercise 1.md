
-- INSERT INTO purchases (customer_id)
-- VALUES (6)

-- SELECT * FROM purchases
-- SELECT * FROM customers
-- ALTER TABLE customers
-- ADD id serial
-- SELECT * FROM purchases
-- INSERT INTO purchases (customer_id, item_ID)
-- VALUES (6,3),(5,2)
-- INSERT INTO purchases (customer_id)
-- VALUES (4)
-- INSERT INTO purchases (customer_id, item_id)
-- VALUES (2,1),(4,3),(1,3)
--  SELECT * FROM customers
--  SELECT * FROM purchases 
--   JOIN customers ON customers.id = purchases.item_id;
-- SELECT * FROM purchases
-- WHERE customer_id = 4
--  SELECT * FROM purchases
-- SELECT * FROM item
-- SELECT * FROM customers JOIN purchases ON customers.id = purchases.customer_id
-- SELECT * FROM item JOIN purchases on item.id = purchases.item_id
SELECT * FROM purchases
SELECT * FROM customers
SELECT * FROM item
INSERT INTO item (item_name, price)
VALUES ('hard drive', 90)
INSERT INTO purchases (customer_id,item_id)
VALUES(4,4)