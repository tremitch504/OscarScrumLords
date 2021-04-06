DROP DATABASE IF EXISTS bike;

CREATE DATABASE bike;

USE bike;

CREATE TABLE locations (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    coordinates int,
    time_id TIME,
    date_id DATE,
    media MEDIUMBLOB NOT NULL
);


CREATE TABLE events (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  eventsName varchar(40),
  date_id DATE,
  time_id TIME,
  location_id varchar(40)
);


CREATE TABLE routes (
  route_name varchar(40) NOT NULL PRIMARY KEY,
  st_location VARCHAR(40),
  end_location VARCHAR(40),
  rating INT
);

CREATE TABLE users (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  email varchar(40) NOT NULL
);

CREATE TABLE rsvps (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId int,
  FOREIGN KEY (userId) REFERENCES users(id),
  eventId int,
  FOREIGN KEY (eventId) REFERENCES events(id)
);

CREATE TABLE landmarks (
    address_id varchar(60) NOT NULL PRIMARY KEY,
    phone varchar(20),
    services varchar(60),
    bus_hours varchar(100)
);