const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const { app } = require('./app');

const PORT = 80;

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});

