import React, {useState} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Map from './Map.jsx';
import Calendar from './Calendar.jsx';
import UserProfile from './UserProfile.jsx';
import Home from './Home.jsx';
import SignInButton from './SignInButton.jsx';
import SignOutButton from './SignOutButton.jsx';
// import styled from 'styled-components';
// const AppStyles = styled.div``;

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({welp: 'welllllp'});


  return (
    <div>
      <header>
        <h1>Bike Around and Find Out</h1>
        <h3>New Orleans Interactive Community Bike Map</h3>
      </header>
      <Router>
        <nav>
          <ul className ='navbar' >
            <li style={{float: 'left'}}>
              <Link to='/home' >Home</Link>
            </li>
            <li style={{float: 'left'}}>
              <Link to='/map' >Map</Link>
            </li>
            <li style={{float: 'left'}}>
              <Link to='/calendar' >Events</Link>
            </li>
            <li style={{float: 'left'}}>
              <Link to='/userProfile'>My Profile</Link>
            </li>
            <li style={{float: 'left'}}>
              {loggedIn ?
                <SignOutButton setLoggedIn={setLoggedIn} setUserObj={setUserObj} userObj={userObj}/> :
                <SignInButton setLoggedIn={setLoggedIn} setUserObj={setUserObj} userObj={userObj}/>
              }
            </li>
            <li>
              {loggedIn ? 
                `Hello ${userObj.givenName}` :
                'Please Sign in!'
              }              
            </li>
          </ul>
          <br/>
        </nav>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/calendar'>
              <Calendar />
            </Route>
            <Route path='/userProfile'>
              <UserProfile />
            </Route>
            <Route path='/map'>
              <Map />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
