import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserListItem from './UserListItem.jsx';
import VisitProfile from './VisitProfile.jsx';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



//this component is going to display all of the users.  those users will be so if you click it brings up that users profile.

const UserList = (props) => {

  //inital array is empty
  const [userList, setUserList] = useState([]);
  const [nextUser, setNextUser] = useState(''); //when a user is clicked on to see their profile, a click handler will set this state so the next user is the user clickedo n.  this will trigger a redirect to their profile page
  const [followers, setFollowers] = useState([]); //state of those following user
  const [following, setFOllowiing] = useState([]); //state of those who user follows

  //this is the fn that will b triggered when selecting a prof page to visit
  const visitUser = async (userId) => {
    //get the userinfo from the db
    const {data: id} = await axios.get(`/routes/userlist/userlist/user/${userId}`);
    setNextUser(id);

  };

  const getFollowers = async () => { //function to retrieve who is following
    await axios.get()
    
  }

  const findFollowing = async () => {

  }


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
    return userList.map((user, i) => <UserListItem key={i} user={user} visitUser={visitUser} />);    
  };


  return (
    <div>user list
      {userListItemCreator()}
      
      <button onClick={getUsers}>test</button>
    </div>
  );
};

export default UserList;

//      <Route key={i} path={`userList/visitProfile/${user.id}`}></Route>
