

CREATE DATABASE burgers_db;

USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN
);