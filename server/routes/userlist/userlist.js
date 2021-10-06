const express = require('express');
//const passport = require('passport');
const {Users} = require('../../db/sequelize');
const UserList = express.Router();

UserList.get('/allUsers', async(req, res) => {
  try {
    //get all users from the db
    const users = await Users.findAll(); //unsorted all users.  
    res.status(201).send(users);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = {UserList};
