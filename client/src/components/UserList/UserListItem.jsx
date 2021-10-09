import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { ListGroupItem, Button } from 'react-bootstrap';

//component to display an individual user in the userlist.  
//follow button follows a user
//visit user has on click event handler to vist a user by id which triggers a resetting of state in parent component UserList
const UserListItem = ({user, getFollowing}) => {

  //add a user to the following list
  const follow = async () => {
    try {
      await axios.post(`/routes/userlist/userlist/followUser/${user.id}`, {req: 'body'});
      getFollowing();
    } catch (err) {
      console.log('err', err);
    }
  };

 

  return (
    <ListGroupItem className="listItem">
      <span>{user.fullName}
        <Button className='fButton' onClick={follow}>follow</Button>
        <Link to={`/visitProfile/${user.id}`}>
          <Button className='fButton'>visit profile</Button>
        </Link> 
        
      </span>
      
    </ListGroupItem>
  );
};

export default UserListItem;

//onClick={() => visitUser(user.id)}



//<button onClick={()=>history.push(`/visitProfile/${user.id}`)}>visit profile</button>
