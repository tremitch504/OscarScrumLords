import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserListItem from './UserListItem.jsx';
import VisitProfile from './VisitProfile.jsx';
import styled from 'styled-components';


import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const UserListStyles = styled.div`

`;



//this component is going to display all of the users.  those users will be so if you click it brings up that users profile.

const UserList = (props) => {

  //inital array is empty
  const [userList, setUserList] = useState([]);
  const [nextUser, setNextUser] = useState(''); //when a user is clicked on to see their profile, a click handler will set this state so the next user is the user clickedo n.  this will trigger a redirect to their profile page
  const [followers, setFollowers] = useState([]); //state of those following user
  const [following, setFollowing] = useState([]); //state of those who user follows




  //this is the fn that will b triggered when selecting a prof page to visit
  const visitUser = async (userId) => {
    //get the userinfo from the db
    const {data: id} = await axios.get(`/routes/userlist/userlist/user/${userId}`);
    setNextUser(id);

  };

  const getFollowing = async () => { //function to retrieve who is following
    const {data} = await axios.get('/routes/userlist/userlist/following');
    console.log('getFollowing data', data);
    setFollowing(data);
    
  };

  const getFollowers = async () => { //function to retrieve who is following
    const {data} = await axios.get('/routes/userlist/userlist/followers');
    console.log('followers data', data);
    setFollowers(data);
    
  };


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
    getFollowing();
    getFollowers();
  }, []);



  //create components for following
  const followingList = () => {
    console.log('followinglist fn');
    return following.map((person, i) => (
      <div 
        key={i}>{person.followingTarget && person.followingTarget.fullName} 
        <button
          onClick={()=>{ /*in here do axios delete req to unfollow on b/e and pass down targe t id as param */ }}>unfollow</button>
      </div>
    ));
  };

  //create components for followers
  const followersList = () => {
    console.log('followers list fn', following.length);
    return followers.map((person, i) => <div key={i}>{person.followerAdder && person.followerAdder.fullName}</div>);
  };

  const followPerson = (person) => { //this is a fn to add a person following to the state. to be used in conjunction with the post fn in the child component
    console.log('follow person fn', person);
    setFollowing(following.concat(person));

  };

  const userListItemCreator = () => {
    return userList.map((user, i) => <UserListItem key={i} user={user} visitUser={visitUser} followPerson={followPerson} getFollowing={getFollowing} />);    
  };

  return (
    <UserListStyles>
      <div>user list
        {userListItemCreator()}
        <div><h3>Following</h3>
          {followingList()}
        </div>
        <div><h3>followers</h3>
          {followersList()}
        </div>
        <button onClick={getFollowing}>getFollowing</button>
    
        <button onClick={getFollowers}>getFollowers</button>
     
      </div>
    </UserListStyles>
  );
};

export default UserList;

//      <Route key={i} path={`userList/visitProfile/${user.id}`}></Route>
