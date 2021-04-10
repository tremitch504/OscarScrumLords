DROP DATABASE IF EXISTS bike;

CREATE DATABASE bike;

USE bike;

CREATE TABLE users (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(40) NOT NULL,
  familyName varchar(40) NOT NULL,
  givenName varchar(40) NOT NULL,
  fullName varchar(40) NOT NULL
);

CREATE TABLE landmarks (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    kind varchar (40),
    details varchar(200),
    userId int,
    fullName varchar(40),
    FOREIGN KEY (userId) REFERENCES users(id),
    lat varchar(40),
    lng varchar(40),
    time_id TIME,
    date_id DATE
);

CREATE TABLE events (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  eventsName varchar(40),
  hostName varchar(40), 
  details varchar(200),
  date_id DATE,
  time_id TIME,
  lat varchar(40),
  lng varchar(40)
);

CREATE TABLE routes (
  route_name varchar(40) NOT NULL PRIMARY KEY,
  st_location VARCHAR(40),
  end_location VARCHAR(40),
  rating INT
);

CREATE TABLE rsvps (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId int,
  FOREIGN KEY (userId) REFERENCES users(id),
  eventId int,
  FOREIGN KEY (eventId) REFERENCES events(id)
);