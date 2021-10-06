import React, {useState, useEffect} from 'react';

//component to display an individual user in the userlist.  
//follow button follows a user
//visit user has on click event handler to vist a user by id which triggers a resetting of state in parent component UserList
const UserListItem = ({user, visitUser}) => {
  return (
    <div>
      <span>{user.fullName}
        <button>follow</button>
        <button onClick={() => visitUser(user.id)}>visit profile</button>
      </span>
      
    </div>
  );
};

export default UserListItem;
