import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Avatar } from '@mui/material';
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const getAllPost = () => {
    axios.get('/routes/imagepost/posts/imagePost')
      .then((results) => {
        setPosts(results.data);
        // console.log(results);
      });
  };
  // console.log(posts);
  useEffect(() => {
    getAllPost();
  }, []);


  //****STYLE SECTION***
  const imgStyle = {
    // height: '500px',
    width: '500px',
    objectFit: 'contain'
  };

  const textStyle = {
    fontWeight: 'normal',

  };

  const headerStyle = {
    display: 'flex',
  };

  return (
    <div className="post-list-section">
      <div className='post-list'>
        <div className='header-section' style={headerStyle}>
          <Avatar className="post-avatar"
            alt='Trevon'
            src='https://lh3.google.com/u/0/ogw/ADea4I5y0hQjW97Eqo99APrXlIJAeoiF-LCITVsc5h2m=s83-c-mo'
          />
          <h3>Username</h3>
        </div>
        {
          posts.map(post => {
            return (
              <div key={post.id}>
                <img src={post.urlImage} style={imgStyle} />
              </div>
            );
          })
        }
        <h4 className='caption-section' style={textStyle}><strong>Tre'von</strong>This is from a Pixar Film</h4>
      </div>
    </div>
  );

};

export default PostList;
