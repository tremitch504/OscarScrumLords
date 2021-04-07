const axios = require('axios');
const { apiKey } = require('../key.js');
const { app } = require('./app.js');


const googlePlaces = 'https://maps.googleapis.com/maps/api/place/textsearch/json';


const bikeResources = app.get('/bike', async (req, res, next) => {
  try {
    const city = 'new+orleans';
    const type = 'bicycle_store';
    const {data} = await axios.get(
          
      `${googlePlaces}?query=
          ${type}+
          ${city}+
          &type=${type}&key=
          AIzaSyCb4Z934x5lXv3VKao-57wzaSSxqdNglXs`
  
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = {
  app
};

