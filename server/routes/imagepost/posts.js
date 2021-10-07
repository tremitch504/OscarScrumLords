const express = require('express');
const Post = express.Router();
const { Posts, Users } = require('../../db/sequelize');

Post.post('/imagePost/:id', (req, res) => {
  const { id } = req.params; //params: what is coming back from the route endpoint
  const { urlImage, caption, likes, public_id } = req.body; //body: what is coming back into the body of the axios request
  // console.log(urlImage);
  
  Users.findAll({ where: { id: id}})
    .then(user => {
      
      Posts.create({urlImage: urlImage, caption: caption, likes: likes, public_id: public_id })
        .then(post => {
          console.log(post);
          return user.addPosts(post);
          // console.log('Hello', user);
        });
    });
  // Posts.create()
 
})
;

module.exports = { Post };
