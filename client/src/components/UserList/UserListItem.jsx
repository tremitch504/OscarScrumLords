import React, {useState, useEffect} from 'react';

const UserListItem = ({user}) => {
  return (
    <div>{user.email}</div>
  );
};

export default UserListItem;
