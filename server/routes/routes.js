//these are the requests that came with the repo, i moved them in here so Router.js was less cluttered

const express = require('express');
const passport = require('passport');
const {Users} = require('../db/sequelize');
const Router = express.Router();


//call to API search key, store in LANDMARKS DB: address_id, phone, services, bus_hours
Router.get('/landmarks', (req, res) => {
  return getLandmarks()
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

//DATE FORMAT: yyyy-mm-dd
Router.post('/landmarks', (req, res) => {
  return postLandmarks(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});


//CREATE, FIND, AND CATEGORIZE BIKING EVENTS
//will need API to pin location of event, EVENTS DB: id, date_id, time_id, location_id
Router.post('/events', (req, res) => {
  return postEvents(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

Router.get('/events', (req, res) => {
  return getEvents()
    .then(data => res.status(201).send(data))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

Router.put('/events', (req, res) => {
  return toggleRSVP(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

Router.post('/users', (req, res) => {

  return postUser(req.body)
    .then(() => res.sendStatus(201))
    .catch(err => {
      console.warn('ERROR', err);
      res.sendStatus(500);
    });
});

//this is just an endpt for the  test button fo requests to more easy work out any bugs in the sequelize vs mysql or any other bugs.  Rm this after more progress made and definitely before final PR
Router.post('/test', async (req, res) => {
  try {
    //console.log('reqcookies', req.cookies);
    //console.log('reqsssss', req.session);
    await Rsvps.create({ userId: 1, eventId: 1, fullName: 'fullname' });
    res.sendStatus(201);
  } catch (err) {

    res.sendStatus(500);
  }
});

module.exports = {Router};
