const path = require('path');
const express = require('express');
const { 
  getLandmarks,
  postLandmarks,
  postEvents,
  getEvents,
  postUser,
  toggleRSVP

} = require('./db/helpers.js');

const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static(CLIENT_PATH));
app.use('/favicon.ico', express.static(path.resolve(__dirname, 'assets', 'stockcone.jpg')));



//middleware
//set API FOLDER to api/ googleMaps (or change if named something else)
// app.use('/api/googleMaps', Maps); 

//call to API search key, store in LANDMARKS DB: address_id, phone, services, bus_hours

app.get('/landmarks', (req, res) => {
  return getLandmarks()
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

//DATE FORMAT: yyyy-mm-dd
app.post('/landmarks', (req, res) => {
  return postLandmarks(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});


//CREATE, FIND, AND CATEGORIZE BIKING EVENTS
//will need API to pin location of event, EVENTS DB: id, date_id, time_id, location_id
app.post('/events', (req, res) => {
  return postEvents(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

app.get('/events', (req, res) => {
  return getEvents()
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

app.put('/events', (req, res) => {
  return toggleRSVP(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});


app.post('/users', (req, res) => {
  return postUser(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});



module.exports = {
  app,
};
