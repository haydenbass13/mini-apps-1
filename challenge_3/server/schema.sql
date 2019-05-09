CREATE DATABASE POS;

USE POS;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE,
  pass VARCHAR(64),
  salt VARCHAR(64),
  address VARCHAR(200) DEFAULT '',
  aptUnit VARCHAR(450) DEFAULT '',
  city VARCHAR(100)  DEFAULT '',
  st VARCHAR(2)  DEFAULT '',
  zip VARCHAR(10)  DEFAULT '',
  phone VARCHAR(10)  DEFAULT '',
  credit INT(19) NOT NULL DEFAULT 0,
  expy DATE NOT NULL DEFAULT '1000-01-01',
  cvv INT(3) NOT NULL DEFAULT 0,
  billZip INT(5) NOT NULL DEFAULT 0,
  PRIMARY KEY (id)
);

-- CREATE TABLE shippingInfo (
--   
  
--   userId INT NOT NULL,
--   FOREIGN KEY (userId) REFERENCES users(id)
-- );

-- CREATE TABLE billingInfo (
--   id INT NOT NULL,
--   credit INT(19) NOT NULL,
--   expy DATE,
--   cvv INT(3) NOT NULL,
--   billZip INT(5) NOT NULL,
--   userId INT NOT NULL,
--   FOREIGN KEY (userId) REFERENCES users(id)
-- );



