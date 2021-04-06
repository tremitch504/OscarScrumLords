const path = require('path');
const { app } = require('./app');
const { apiKey } = require('../key.js');
const axios = require('axios');


const PORT = 3001;

const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

//GET REQUEST FOR GOOGLE PLACES API

const googlePlaces = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

app.get('/bike', async (req, res, next) => {
  try {
    const city = 'new+orleans';
    const type = 'bicycle_store';
    const {data} = await axios.get(
      
      `${googlePlaces}?query=
      ${type}+
      ${city}+
      &type=${type}&key=
      ${apiKey}`
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});
  
//REQUESTS FOR USER INTERACTION
  
//USER SHOULD BE ABLE TO INTERACT WITH GOOGLE MAP
  
  
//USER CAN CREATE AND SAVE BIKE ROUTES
//post to ROUTES DB: route_name, st_location, end_locaiton, rating
  
  
//BIKESHOP/ RESOURCES AVAILABLE IN AREA
//call to API search key, store in LANDMARKS DB: address_id, phone, services, bus_hours
  
  
//PHOTO BANK TO DOCUMENT ROADS
//store image to LOCATIONS DB and pin location on map: coordinates, time_id, date_id, media
  
  
//CREATE, FIND, AND CATEGORIZE BIKING EVENTS
//will need API to pin location of event, EVENTS DB: id, date_id, time_id, location_id
  
  
//ATTENDANCE TO BIKE EVENTS
//call to store in USER TABLE
  
  


app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

