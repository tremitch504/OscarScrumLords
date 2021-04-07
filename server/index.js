const path = require('path');
const { app } = require('./helper');
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});
