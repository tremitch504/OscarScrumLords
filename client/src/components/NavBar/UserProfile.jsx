import React from 'react';

const UserProfile = ({userObj}) => {
  console.log('userObj', userObj);
  return (
    <div>
      <h4>User:{JSON.stringify(userObj)}</h4>


    </div>
  );
};

export default UserProfile;
