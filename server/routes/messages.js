const express = require('express');
const {Users, Message} = require('../db/sequelize');
const Messages = express.Router();

Messages.post('/sendMessage/:recipientId', async (req, res) => {
  try {
    const {subject, text} = req.body
    const {recipientId} = req.params
    const {id} = req.user //this is the user logged in 
    await Message.create({
      subject: subject,
      text: text,
      userFromId: id,
      userToId: recipientId
    })
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})


module.exports = Messages;