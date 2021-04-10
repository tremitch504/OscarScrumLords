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


const getLandmarks = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM landmarks', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
//PHOTO BANK TO DOCUMENT ROADS
//store image to LOCATIONS DB and pin location on map: coordinates, time_id, date_id, media
const photoBank = ({ userId, lat, lng, media }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO landmarks(userId, lat, lng, media) \
    VALUES (?, ?, ?, ?)',
    [userId, lat, lng, media],
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
const postEvents = ({ name, hostName, details, date, time, lat, lng}) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO events (eventsName, hostName, details, date_id, time_id, lat, lng) VALUES (?, ?, ?, ?, ?, ?, ?)', 
      [name, hostName, details, date, time, lat, lng], (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
  });
};

const postLandmarks = ({ kind, details, fullName, lat, lng, date, time }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO landmarks (kind, details, fullName, lat, lng, time_id, date_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [kind, details, fullName, lat, lng, time, date],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
  });
};

const getEvents = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM events', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
  
//ATTENDANCE TO BIKE EVENTS
//call to store in USER TABLE
//INSERT user_Id from USERS and events_id from the EVENTS table
const rsvp = ({ userId, eventId }) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO rsvps (userId, eventId) VALUES (?, ?)', [userId, eventId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
  
module.exports = {
  getLandmarks,
  postLandmarks,
  postRoutes,
  photoBank,
  rsvp,
  postEvents,
  getEvents
};
