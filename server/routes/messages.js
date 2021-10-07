const express = require('express');
const {Users, Message} = require('../db/sequelize');
const Messages = express.Router();

Messages.post('/sendMessage/:recipientId', async (req, res) => {
  try {
    console.log('send messages post');
    console.log('reqbod', req.body);
    const {subject, message} = req.body;
    const {recipientId} = req.params;
    const {id} = req.user || {id: 1}; //this is the user logged in  //HARD CODED FIX THIS AFTER TESTING MORE
    console.log('id', id);
    await Message.create({
      subject: subject,
      text: message,
      userFromId: id,
      userToId: recipientId
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

Messages.get('/getInbox', async (req, res) => {
  try {
    const {id} = req.user;
    const messages = await Message.findAll({
      where: {userToId: id}, //fix this
      //need to have it grab the foreign key related to the prson sending it
      include: [{model: Users, as: 'receivedFrom', attributes: ['fullName']}]

    });
    
    res.status(201).send(messages);
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

Messages.get('/getOutbox', async (req, res) => {
  try {
    const {id} = req.user;
    const messages = await Message.findAll({
      where: {userToId: id}, //fix this
      //need to have it grab the foreign key related to the prson sending it
      include: [{model: Users, as: 'sentTo', attributes: ['fullName']}]

    });
    
    res.status(201).send(messages);
    
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});


module.exports = {Messages};
