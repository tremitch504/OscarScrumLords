import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Map from './Map.jsx';
import Search from './Search.jsx';
import Calendar from './Calendar.jsx';
import UserProfile from './UserProfile.jsx';
import Home from './Home.jsx';
import SignInButton from './SignInButton.jsx'
const AppStyles = styled.div``;

const App = () => {

  useEffect(() => {
    console.log('Loading');
    SignInButton();
  }, [])

    return (
      <div>
        <header>
          <h1>Bike Around and Find Out</h1>
          <h3>New Orleans Interactive Community Bike Map</h3>
        </header>
        <Router>
          <div>
            <nav>
              <ul className ='navbar' >
                <li style={{float: 'left'}}>
                  <div id="loginButton" >Sign in with Google</div>
                </li>
                <li style={{float: 'left'}}>
                  <Link to='/home' >Home</Link>
                </li>
                <li style={{float: 'left'}}>
                  <Link to='/map' >Map</Link>
                </li>
                <li style={{float: 'left'}}>
                  <Link to='/calendar' >Events</Link>
                </li>
                <li>
                  <Link to='/userProfile'>My Profile</Link>
                </li>
              </ul>
              <hr />
            </nav>
          </div>
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
        </Router>
      </div>
    );
}
export default App;
