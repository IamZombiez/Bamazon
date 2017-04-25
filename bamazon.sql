CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
ID int auto_increment NOT NULL,
product_name VARCHAR (100) NOT NULL,
dpt_name VARCHAR (100) NOT NULL,
price DECIMAL (10,2) NOT NULL,
stock INT (10) NOT NULL,
PRIMARY KEY (id)
); 

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Dog Food", "Pet Products", 42, 10);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Headphones", "Electronics", 15, 8);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Nintendo Switch", "Electronics", 300, 0);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Cookie Crisp", "Food", 5, 137);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Cinnamon Toast Crunch", "Food", 5, 145);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Headphones", "Electronics", 50, 7);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Reeses Pieces", "Food", 3, 8430);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Jolly Ranchers", "Food", 6, 2455);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Jump Rope", "Outdoor", 12, 21);

INSERT INTO bamazon_db.products(product_name, dpt_name, price, stock)
VALUE ("Running Shoes", "Outdoor", 100, 10);