CREATE DATABASE FoodWasteDb;

CREATE TABLE LT_USER_ROLES(
    id INT NOT NULL,
    description VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE User (
id int auto_increment,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
is_partner BOOLEAN,
user_type VARCHAR(30) NOT NULL,
user_name VARCHAR(30) NOT NULL,
password VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (id),

);


CREATE TABLE LT_REQUEST_STATUS (
    id INT PRIMARY KEY,
    description VARCHAR(30) NOT NULL);

CREATE TABLE Request (
   id int auto_increment,
    request_type VARCHAR(20) NOT NULL,
    user_id INT(6) NOT NULL,
    location VARCHAR(50) NOT NULL,
    quantity FLOAT NOT NULL,
    status_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES  User(id),
   
);
