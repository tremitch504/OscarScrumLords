const express = require('express');
const Post = express.Router();
const { Posts, Users } = require('../../db/sequelize');

Post.get('/imagePost', (req, res) => {
  Posts.findAll({include: [{
    model: Users,
  
  }]}).then(results => {
    console.log('POSTS:', results);
    res.status(201).send(results);
  })
    .catch(err => {
      console.log('ERRO:', err);
    });
});

Post.post('/imagePost/:id', (req, res) => {
  const { id } = req.params; //params: what is coming back from the route endpoint
  const { urlImage, caption, likes, public_id } = req.body; //body: what is coming back into the body of the axios request
  // console.log(urlImage);
  
  Users.findAll({ where: { id: id}})
    .then(user => {
      
      Posts.create({urlImage: urlImage, caption: caption, likes: likes, public_id: public_id, userId: id })
        .then(post => {
          res.sendStatus(201);
          // console.log('Hello', post);
        });
    })
    .catch(err => {
      console.log('ERROR:', err);
    });
  // Posts.create()
 
})
;

module.exports = { Post };
