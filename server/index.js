const path = require('path');
const { app } = require('./app');
const { apiKey } = require('../key.js');
const axios = require('axios');
const mysql = require('mysql2');

const { db } = require('./db');

const PORT = 3001;

const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

//GET REQUEST FOR GOOGLE PLACES API
const googlePlaces = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

//BIKESHOP/ RESOURCES AVAILABLE IN AREA
const bikeResources = app.get('/bike', async (req, res, next) => {
  try {
    const city = 'new+orleans';
    const type = 'bicycle_store';
    const {data} = await axios.get(
        
      `${googlePlaces}?query=
        ${type}+
        ${city}+
        &type=${type}&key=
        ${apiKey}`

    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

//USER CAN CREATE AND SAVE BIKE ROUTES
//post to ROUTES DB: route_name, st_location, end_locaiton, rating
const postRoutes = ({ routeName, start, end, rating }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO routes(routeName, start, end, rating) \
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
    db.query('INSERT INTO locations(coordinates, time, date, img) \
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
  
  


app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

module.exports = {
  postLandmarks,
  postRoutes,
  photoBank,
  rsvp,
  bikeEvents,
  bikeResources,
};

