const { db } = require('../db');

//USER CAN CREATE AND SAVE BIKE ROUTES
//post to ROUTES DB: route_name, st_location, end_locaiton, rating
const postRoutes = ({ routeName, start, end, rating }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO routes(route_Name, st_location, end_location, rating) \
    VALUES (?, ?, ?, ?)',
    [routeName, start, end, rating],
    (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};


//call to API search key, store in LANDMARKS DB: address_id, phone, services, bus_hours
const postLandmarks = ({ addressId, phone, services, busHours }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO landmarks(address_id, phone, services, bus_hours) \
    VALUES (?, ?, ?, ?)',
    [addressId, phone, services, busHours],
    (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
//PHOTO BANK TO DOCUMENT ROADS
//store image to LOCATIONS DB and pin location on map: coordinates, time_id, date_id, media
const photoBank = ({ coordinates, time, date, img }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO locations(coordinates, time_id, date_id, media) \
    VALUES (?, ?, ?, ?)',
    [coordinates, time, date, img],
    (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
  
//CREATE, FIND, AND CATEGORIZE BIKING EVENTS
//will need API to pin location of event, EVENTS DB: id, date_id, time_id, location_id
const bikeEvents = ({ id, date, time, location }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO events (id, date, time, location) VALUES (?)', [id, date, time, location], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
  
//ATTENDANCE TO BIKE EVENTS
//call to store in USER TABLE
const rsvp = ({ upcomingEvents }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO user (upcomingEvents) VALUES (?)', [upcomingEvents], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
module.exports = {
  postLandmarks,
  postRoutes,
  photoBank,
  rsvp,
  bikeEvents
};
