const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const auth = require('./auth');
const {Router} = require('./routes/routes');
const {Profile} = require('./routes/profile');
const {UserList} = require('./routes/userlist/userlist');
const {CalendarId} = require('./routes/calendar/calendarId');

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
app.use('/routes/userlist/userlist', UserList);
app.use('/routes/calendar/calendarId', CalendarId);

app.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

app.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
  (req, res) => {
    res.redirect('/');
  });

app.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(201);
});

app.use('/favicon.ico', express.static(path.resolve(__dirname, 'assets', 'stockcone.jpg')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(CLIENT_PATH, 'index.html'));
  
});



module.exports = {
  app,
};
