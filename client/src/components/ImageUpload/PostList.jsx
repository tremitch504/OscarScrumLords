import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { Avatar } from '@mui/material';
const PostList = ({userObj}) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');


  const getAllPost = () => {
    axios.get('/routes/imagepost/posts/imagePost')
      .then((results) => {
        const arr = [];
        for (let i = results.data.length - 1; i >= 0; i--) {
          arr.push(results.data[i]);
        }
        setPosts(arr);
        console.log('POSTS:', results.data);
      });
  };
  // console.log(userObj);

  const postComment = (e, id) => { 
    e.preventDefault();
    axios.post(`/routes/imagepost/comments/comments/${id}`, {
      text: comment,
      username: userObj.givenName,
      picture: userObj.picture
    })
      .then(() => {
        setComment('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getAllComments = () => {
    axios.get('/routes/imagepost/comments/comments')
      .then(results => {
        // console.log('POST COMMENTS', results);
        setComments(results.data);
      });
  };
  //useEffect: This runs a piece of code based on a specific condidtion
  useEffect(() => {
    // getAllPost();
    // getAllComments();
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
    backgroundColor: 'white'
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
  const commentStyle = {
    display: 'flex',
    marginTop: '10px',
  };
  const commentInput = {
    flex: '1',
    border: 'none',
    padding: '10px',
    borderTop: '1px solid lightgray'
  };
  const commentButton = {
    flex: '0',
    border: 'none', 
    borderTop: '1px solid lightgray',
    color: '#007bff',
    // backgroundColor: 'transparent'
    backgroundColor: '#EEEEEE'
  };
  const commentTextStyle = {
    padding: '20px'
  };
  const likeButton = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    border: '2px solid red',
    padding: '13px 16px',
    borderRadius: '5px',
    display: 'flex',
    cursor: 'pointer',
  };
  const heart = {
    height: '90px',
    width: '90px',
    backgroundColor: 'red',
    backgroundPoistion: 'left',
    backgroundSize: '2900%',
    // position: 'absolute',

  };
  const like = {
    fontSize: '21px',
    fontFamily: 'Montserrat, sans-serif',
    color: 'grey'
  };
  const number = {
    fontSize: '21px',
    fontWeight: '600',
    fontFamily: 'sans-serif',
    color: '#9C9496',
  };

  const mustSignin = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom: '10px',
    padding: '20px',
    fontSize: '30px',
    fontFamily: 'Montserrat sans-serif'
  }; 
  
  if (userObj.id) {
    return (
      <div style={{backgroundColor: '#007bff', height: '100%', margin: '0'}}>
        <div className="post-list-section" style={headerStyle}>
          <div className='post-list'>
           
            {getAllPost()}
            {
              posts.map(post => {
                return (
                  <div className='header-section' key={post.id}>
                    <div>
                  
                      <h3 style={profileStyle}><img className='avatar-sectio' src={post.user.picture} style={{marginRight: '10px', borderRadius: '50px'}}/> {post.user.givenName} </h3>
                    </div>
                    <div> 
                      <img src={post.urlImage} style={imgStyle} />
                    </div>
                    <h4 className='caption-section' style={textStyle}><strong>{post.user.givenName}</strong> {post.caption}</h4>
                    <br style={lineBreak}/>
                    {/* <button className='like-button' style={likeButton}>
                  <span className='heart'> </span>
                  <span className="like" style={like}>Like </span>
                  <span className="number" style={number}>12 </span>
                </button> */}
                    <div className='comments' style={commentTextStyle}>
                      {getAllComments()}
                      {
                        comments.map(comment => {
                          if (comment.postId === post.id) {
                            return (
                              <p key={comment.id}>
                                <img src={comment.picture} style={{marginRight: '10px', borderRadius: '50px', height: '30px'}}/> <strong>{comment.username}</strong> {comment.text}
                              </p>
                            );
                          }
                        })
                      }
                    </div>

                    <form className='comment-section' style={commentStyle}>

                      <input className="comment-input" type="text" placeholder="Add a comment..." style={commentInput} value={comment} onChange={(event) => setComment(event.target.value)}/>
                  
                      <button className="comment-button" disabled={!comment} type='submit' style={commentButton} onClick={ (e) => postComment(e, post.id)}> 
                    Post
                      </button>
                    </form>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h6 className='header' style={mustSignin}><strong>Welcome, Please Sign In!</strong></h6>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"> </link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin> </link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,600&display=swap" rel="stylesheet"></link> */}
      </div> );
      
  }

};

export default PostList;
