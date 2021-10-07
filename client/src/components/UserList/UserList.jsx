import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserListItem from './UserListItem.jsx';


//this component is going to display all of the users.  those users will be so if you click it brings up that users profile.

const UserList = (props) => {

  //inital array is empty
  const [userList, setUserList] = useState([]);



  const getUsers = async () => {

    try {
      const {data} = await axios.get('/routes/userlist/userlist/allUsers');
      setUserList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userListItemCreator = () => {
    return userList.map((user, i) => <UserListItem key={i} user={user} />);
  };


  return (
    <div>user list
      {userListItemCreator()}
      
      <button onClick={getUsers}>test</button>
    </div>
  );
};

export default UserList;
