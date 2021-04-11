const { db } = require('../db');


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
    db.query('SELECT * FROM events', (err, events) => {
      if (err) {
        return reject(err);
      }
      db.query('SELECT * FROM rsvps', (err, rsvps) => {
        events.forEach(event => {
          event.attendees = rsvps.filter(rsvp => {
            return event.id === rsvp.eventId;
          }).map(rsvp => rsvp.fullName);
        });
        resolve(events);
      });

    });
  });
};

const postUser = ({ email, familyName, fullName, givenName, googleId }) => {

  return new Promise((resolve, reject) => {
    db.query('SELECT EXISTS(SELECT * FROM users WHERE googleId = ?)', googleId, (err, results) => {
      if (err) {
        return reject(err);
      }
      if (Object.values(results[0])[0]) {
        resolve(results);
      } else {
        db.query('INSERT INTO users (email, familyName, fullName, givenName, googleId) VALUES (?, ?, ?, ?, ?)',
          [email, familyName, fullName, givenName, googleId],
          (err, results) => {
            if (err) {
              return reject(err);
            }
            resolve(results);
          });
      }
    });
  });
};
  
  
//ATTENDANCE TO BIKE EVENTS
//call to store in USER TABLE
//INSERT user_Id from USERS and events_id from the EVENTS table
const toggleRSVP = ({ googleId, eventId, fullName }) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT id FROM rsvps WHERE googleId = ? AND eventId = ?', [googleId, eventId], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results[0]) {
        db.query('DELETE FROM rsvps WHERE id = ?', results[0].id, (err, results) => {
          if (err) {
            return reject (err);
          }
          return resolve(results);
        });
      } else {
        db.query('INSERT INTO rsvps (googleId, eventId, fullName) VALUES (?, ?, ?)', [googleId, eventId, fullName], (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
      }
    });
  });
};

  
module.exports = {
  getLandmarks,
  postUser,
  postLandmarks,
  photoBank,
  postEvents,
  getEvents,
  toggleRSVP
};
