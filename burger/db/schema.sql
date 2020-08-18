
DROP DATABASE IF EXISTS eat_da_burgers_db;
CREATE DATABASE eat_da_burgers_db;
USE eat_da_burgers_db;

CREATE TABLE burgers(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);