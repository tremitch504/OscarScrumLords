const path = require('path');
const express = require('express');
const { 
  postLandmarks,
  postRoutes,
  photoBank,
  rsvp,
  bikeEvents,

} = require('./db/helpers.js');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(CLIENT_PATH));

//middleware
//set API FOLDER to api/ googleMaps (or change if named something else)
// app.use('/api/googleMaps', Maps); 

//call to API search key, store in LANDMARKS DB: address_id, phone, services, bus_hours
app.post('/landmarks', (req, res) => {
  const { addressId, phone, services, busHours } = req.body;

  return postLandmarks({ addressId, phone, services, busHours })
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.log('ERROR');
      res.sendStatus(500);
    });

});

//USER CAN CREATE AND SAVE BIKE ROUTES
//post to ROUTES DB: route_name, st_location, end_locaiton, rating
app.post('/routes', (req, res) => {

  const { routeName, start, end, rating } = req.body;

  return postRoutes({ routeName, start, end, rating })
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.log('ERROR');
      res.sendStatus(500);
    });
});

//PHOTO BANK TO DOCUMENT ROADS
//store image to LOCATIONS DB and pin location on map: coordinates, time_id, date_id, media
//DATE FORMAT: yyyy-mm-dd
app.post('/locations', (req, res) => {

  const { coordinates, time, date, img } = req.body;

  return photoBank({ coordinates, time, date, img })
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.log('ERROR', err);
      res.sendStatus(500);
    });
});
  




module.exports = {
  app,
};
