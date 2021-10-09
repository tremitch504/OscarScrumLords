const express = require('express');
const CalendarId = express.Router();
const cId = require('dotenv').config();


CalendarId.get('/', async (req, res) => {
  
  try {
    
    res.status(201).send(cId);
  } catch (err) {
    console.log(err);
  }
});  


module.exports = {CalendarId};
