CREATE DATABASE IF NOT EXISTS transacdb

USE transacdb;

CREATE TABLE IF NOT EXISTS trans(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    valor INT NOT NULL,
    fecha DATE NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO trans (title,valor,fecha) VALUES 
('Fibertel',1750,'2021-08-12'),
('Cerdo Voladores',1100,'2021-08-12')