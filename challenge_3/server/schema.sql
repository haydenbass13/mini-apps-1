CREATE DATABASE POS;

USE POS;

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(200) UNIQUE,
  pass VARCHAR(64),
  salt VARCHAR(64),
  PRIMARY KEY (id)
);

CREATE TABLE shippingInfo (
  address VARCHAR(200) NOT NULL,
  aptUnit VARCHAR(450),
  city VARCHAR(100) NOT NULL,
  st VARCHAR(2) NOT NULL,
  zip VARCHAR(10) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE billingInfo (
  id INT NOT NULL,
  credit INT(19) NOT NULL,
  expy DATE,
  cvv INT(3) NOT NULL,
  billZip INT(5) NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);



