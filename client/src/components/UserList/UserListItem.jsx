import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

//component to display an individual user in the userlist.  
//follow button follows a user
//visit user has on click event handler to vist a user by id which triggers a resetting of state in parent component UserList
const UserListItem = ({user, visitUser}) => {

  const follow = async () => {
    await axios.post(`/routes/userlist/userlist/followUser/${user.id}`);
  };

  return (
    <div>
      <span>{user.fullName}
        <button onClick={follow}>follow</button>
        <Link to={`/visitProfile/${user.id}`}>
          <button >visit profile</button>
        </Link> 
        
      </span>
      
    </div>
  );
};

export default UserListItem;

//onClick={() => visitUser(user.id)}



//<button onClick={()=>history.push(`/visitProfile/${user.id}`)}>visit profile</button>
