import React, {useState, useEffect} from 'react';

const UserListItem = ({user}) => {
  return (
    <div>
      <span>{user.fullName}
        <button>follow</button>
      </span>
      
    </div>
  );
};

export default UserListItem;
