const express = require('express');
const passport = require('passport');
const {Users} = require('../db/sequelize');
const Profile = express.Router();

Profile.get('/', async (req, res) => {
  console.log('req user', req.user);
  try {
    res.status(201).send(req.user);
  } catch (err) {
    console.log('get prof err');
    res.sendStatus(500);
  }
});

module.exports = {Profile};
