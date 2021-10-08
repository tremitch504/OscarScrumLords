import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { Avatar } from '@mui/material';
const PostList = () => {
  const [posts, setPosts] = useState([]);
  
  const getAllPost = () => {
    axios.get('/routes/imagepost/posts/imagePost')
      .then((results) => {
        setPosts(results.data);
        console.log(results);
      });
  };
  // console.log(posts);

  //useEffect: This runs a piece of code based on a specific condidtion
  useEffect(() => {
    getAllPost();
  }, []);


  //****STYLE SECTION***
  const imgStyle = {
    // height: '500px',
    width: '500px',
    objectFit: 'contain',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
  };

  const textStyle = {
    fontWeight: 'normal',
    padding: '20px'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '500px',
    border: '1px solid lightgray',
    marginBottom: '45px',
    // height: '100vh'
    //backgorundColor: 'white'
  };
  const profileStyle = {
    position: 'relative',
    right: '0px',
    top: '10px',
    padding: '20px'
    // display: 'flex',
    // alignItems: 'center', marginRight: '10px'
  };
  const lineBreak = {
    padding: '20px',
    
  };
  return (
    <div className="post-list-section" style={headerStyle}>
      <div className='post-list'>
        
        {
          posts.map(post => {
            return (
              <div className='header-section' key={post.id}>
                <div>
                  
                  <h3 style={profileStyle}><img className='avatar-sectio' src='https://lh3.google.com/u/0/ogw/ADea4I5y0hQjW97Eqo99APrXlIJAeoiF-LCITVsc5h2m=s83-c-mo' style={{marginRight: '10px'}}/> {post.user.givenName} </h3>
                </div>
                <div>
                  <img src={post.urlImage} style={imgStyle} />
                </div>
                <h4 className='caption-section' style={textStyle}><strong>{post.user.givenName}</strong> {post.caption}</h4>
                <br style={lineBreak}/>
              </div>
            );
          })
        }
      </div>
    </div>
  );

};

export default PostList;
