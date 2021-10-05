import React, {useState, useEffect} from 'react';


//this component is going to display all of the users.  those users will be so if you click it brings up that users profile.

const UserList = (props) => {

  const getUsers = async () => {
    //console.log('get users')
    try {
      const {data} = await axios.get('/routes/userlist');
      // console.log('get users data', data);


    } catch (err) {

    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>user list
      <button onClick={getUsers}>test</button>
    </div>
  );
};

export default UserList;
