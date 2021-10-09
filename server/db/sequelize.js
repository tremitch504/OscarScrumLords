
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
  eventsName: {
    type: Sequelize.STRING, //point back to u googleid
  },
  hostName: {
    type: Sequelize.STRING
  },
  details: {
    type: Sequelize.STRING
  },
  date_id: {
    type: Sequelize.DATE,
    
  },
  time_id: {
    type: Sequelize.TIME,
    
  },
  lat: {
    type: Sequelize.STRING
  },
  lng: {
    type: Sequelize.STRING
  }
 
});

const Rsvps = db.define('rsvps', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: Sequelize.INTEGER //point back to user id
  },
  eventId: {
    type: Sequelize.INTEGER //foreign key references event id
  },
  fullName: {
    type: Sequelize.STRING
  },



});

const Posts = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  urlImage: {
    type: Sequelize.STRING(255)
  },
  caption: {
    type: Sequelize.STRING(255)
  },
  likes: {
    type: Sequelize.INTEGER
  },
  public_id: {
    type: Sequelize.STRING(255)
  }
});
const Following = db.define('following', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: { //user who is making the add
    type: Sequelize.INTEGER //foreign key for User.id
  },
  targetId: { //user who is being followed
    type: Sequelize.INTEGER //foreign key for User.id
  } 
}, {timestamps: false});

const Comments = db.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.STRING(255)
  },
  username: {
    type: Sequelize.STRING(255)
  }
});

/**
 * the User.hasMany relationships here etc.  i dont think any functions are using the event/rsvp schema yet
 */
Users.hasMany(Posts);
Posts.belongsTo(Users);

Users.hasMany(Rsvps);
Events.hasMany(Rsvps); 
Following.belongsTo(Users);
//Users.belongsToMany(Users, {as: 'Children', through: 'Following'})

//Post can have multiple comments
Posts.hasMany(Comments);
Comments.belongsTo(Posts);

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

Posts.sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

Comments.sync()
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
exports.Posts = Posts;
exports.Comments = Comments;
exports.db = db;
// Following.sync()
// .then(() => {
//   console.log('Connection has been established successfully.');
// })
// .catch((err) => {
//   console.error('Unable to connect to the database:', err);
// });


module.exports = {Users, Landmarks, Events, Rsvps, Posts, Following, Comments, db};

/** right now these match the db schema, so sequelized can be used in the fture but the original functionscan use the helpers queries in raw mysql syntax.  However, if errors happen--- Sequelize.STRING type is varchar(255) -- the varchar(40) should be updated in the schema and i do not know yet if the dats will be compatible.
 * 
 * I had to add columns in the mysql schema for updatedAt and createdAt to be compatible with sequelize.
 * 
 * I also adjuusted the primary key because I think it is a better choice to have the primary key be what is generated in the db and not referencing the googleId.  
 */
