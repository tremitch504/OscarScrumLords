const axios = require('axios');
const { app } = require('./app.js');



const googlePlaces = 'https://maps.googleapis.com/maps/api/place/textsearch/json';


app.get('/shops', async (req, res, next) => {
  try {
    const city = 'new+orleans';
    const type = 'bicycle_store';
    const {data} = await axios.get(
          
      `${googlePlaces}?query=
          ${type}+
          ${city}+
          &type=${type}&key=
          ${process.env.REACT_APP_MAPS_API_KEY}`
  
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = {
  app
};

