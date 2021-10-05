const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const auth = require('./auth');
const {Router} = require('./routes/routes');
const {Profile} = require('./routes/profile');


const {
  getLandmarks,
  postLandmarks,
  postEvents,
  getEvents,
  postUser,
  toggleRSVP

} = require('./db/helpers.js');




const {Users, Landmarks, Events, Rsvps} = require('./db/sequelize.js');


const dotenv = require('dotenv');
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.use(express.static(CLIENT_PATH));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

//routes middleware goes here
app.use('/routes/routes', Router);
app.use('/routes/profile', Profile);

app.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}), (req, res) => {

});

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
  (req, res) => {
    console.log(req);
    res.redirect('/');
  });



app.use('/favicon.ico', express.static(path.resolve(__dirname, 'assets', 'stockcone.jpg')));

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

//this is just an endpt for the  test button fo requests to more easy work out any bugs in the sequelize vs mysql or any other bugs.  Rm this after more progress made and definitely before final PR
app.post('/test', async (req, res) => {
  try {
    //console.log('reqcookies', req.cookies);
    //console.log('reqsssss', req.session);
    await Rsvps.create({ userId: 1, eventId: 1, fullName: 'fullname' });
    res.sendStatus(201);
  } catch (err) {

    res.sendStatus(500);
  }
});


module.exports = {
  app,
};
