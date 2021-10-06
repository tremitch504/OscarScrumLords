import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

//component to display an individual user in the userlist.  
//follow button follows a user
//visit user has on click event handler to vist a user by id which triggers a resetting of state in parent component UserList
const UserListItem = ({user, visitUser}) => {
  return (
    <div>
      <span>{user.fullName}
        <button>follow</button>
        <Link to={`/visitProfile/${user.id}`}>
          <button >visit profile</button>
        </Link>
        
      </span>
      
    </div>
  );
};

export default UserListItem;

//onClick={() => visitUser(user.id)}