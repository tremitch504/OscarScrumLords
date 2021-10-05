
const { Sequelize } = require('sequelize');
const db = new Sequelize('bike', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING
  },
  familyName: {
    type: Sequelize.STRING,
  },
  givenName: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  },
});
 
const Landmarks = db.define('landmarks', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  kind: {
    type: Sequelize.STRING
    
  },
  details: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  },
  fullName: {
    type: Sequelize.STRING
  },
  lat: {
    type: Sequelize.STRING
  },
  lng: {
    type: Sequelize.STRING
  },
  date_id: {
    type: Sequelize.DATE
  }
});

const Events = db.define('events', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  googleId: {
    type: Sequelize.STRING, //point back to u googleid
  },
  eventId: {
    type: Sequelize.INTEGER
  },
  fullName: {
    type: Sequelize.STRING
  },
  userId: {   
    type: Sequelize.INTEGER //point back to user id. new
  }
});

const Rsvps = db.define('rsvps', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  googleId: {
    type: Sequelize.STRING //point back to user google id
  },
  eventId: {
    type: Sequelize.INTEGER //foreign key references event id
  },
  fullName: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER //point back to user id. new
  }


});

/**
 * the User.hasMany relationships here etc.  i dont think any functions are using the event/rsvp schema yet
 */

Users.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

Landmarks.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

Events.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

Rsvps.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

exports.Users = Users;
exports.Landmarks = Landmarks;
exports.Events = Events;
exports.Rsvps = Rsvps;
