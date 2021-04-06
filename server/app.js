const path = require('path');
const express = require('express');

// const { Maps } = require('./api/googleMaps');

const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
const app = express();

app.use(express.static(CLIENT_PATH));
app.use('/favicon.ico', express.static(path.resolve(__dirname, 'assets', 'stockcone.jpg')));


//middleware
// app.use(express.join());
//set API FOLDER to api/ googleMaps (or change if named something else)
// app.use('/api/googleMaps', Maps); 

module.exports = {
  app,
};
