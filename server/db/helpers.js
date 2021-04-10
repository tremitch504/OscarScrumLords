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

// const getEvents = () => {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT * FROM events', (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };


const getEvents = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT \
    events.id, \
    events.eventsName, \
    events.hostName, \
    events.details, \
    events.time_id, \
    events.date_id, \
    events.lat, \
    events.lng, \
    users.fullName attendee \
    FROM \
    events \
    LEFT JOIN rsvps \
      ON rsvps.eventId = events.id \
    LEFT JOIN users \
      ON users.googleId = rsvps.googleId;', (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

//query needs to also look through rsvp table.
//needs to lookup users using googleId who are attending each event

/*
// SELECT 
//     e.id, 
//     e.hostName host, 
//     r.eventId, 
//     r.name committee



SELECT
rsvps.googleId
FROM
    events
LEFT JOIN rsvps
	ON events.id = rsvps.eventId;

SELECT
events.id,
events.eventsName,
events.hostName,
events.details,
events.time_id,
events.date_id,
events.lat,
events.lng,
users.fullName attendee
FROM
events
LEFT JOIN rsvps
  ON rsvps.eventId = events.id
LEFT JOIN users
  ON users.googleId = rsvps.googleId;
*/



//EACH EVENT has to be looked up in rsvp based on its eventId in rsvpe
//each corresponding userId has to be looked up in user. and select fullName


// const postUser = ({ email, familyName, fullName, givenName, googleId }) => {

//   db.query('SELECT EXISTS(SELECT * FROM users WHERE googleId = ?)', googleId, ;
//   return new Promise((resolve, reject) => {
//     db.query('INSERT INTO users (email, familyName, fullName, givenName, googleId) VALUES (?, ?, ?, ?, ?)',
//       [email, familyName, fullName, givenName, googleId],
//       (err, results) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(results);
//       });
//   });
// };

/*

INSERT INTO users (email, familyName, givenName, fullName, googleId) VALUES ('fakeemail@gmail.com', 'User', 'Fake', 'Fake User', '12345678')
*/




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
const toggleRSVP = ({ googleId, eventId }) => {
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
        db.query('INSERT INTO rsvps (googleId, eventId) VALUES (?, ?)', [googleId, eventId], (err, results) => {
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
  postRoutes,
  photoBank,
  postEvents,
  getEvents,
  toggleRSVP
};
