import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map/Map.jsx';
import Calendar from './NavBar/Events/Calendar.jsx';
import UserProfile from './NavBar/UserProfile.jsx';
import Home from './NavBar/Home.jsx';
import SignInButton from './NavBar/SignInButton.jsx';
import SignOutButton from './NavBar/SignOutButton.jsx';
import axios from 'axios';
// import styled from 'styled-components';
// const AppStyles = styled.div``;

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [events, setEvents] = useState([]);


  const createEvent = (eventObj) => {
    const {name: hostName} = userObj;
    const postObj = {
      ...eventObj,
      hostName,
    };
    axios.post('/events', postObj)
      .then(getEvents);
  };

  const getEvents = () => {
    axios.get('/events')
      .then(({data}) => {
        data.forEach(event => {
          event.lat = Number(event.lat);
          event.lng = Number(event.lng);
          event.time = new Date();
          event.kind = 'event';
        });
        setEvents(data);
      });
  };


  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <header>
        <h1>Bike Around and Find Out</h1>
        <h3>New Orleans Interactive Community Bike Map</h3>
      </header>
      <Router>
        <nav>
          <ul className ='navbar' >
            <li><Link to='/home' >Home</Link></li>
            <li><Link to='/map' >Map</Link></li>
            <li><Link to='/calendar' >Events</Link></li>
            <li><Link to='/userProfile'>My Profile</Link></li>
            <li>{loggedIn ?
              `Hello ${userObj.givenName}` :
              'Please Sign in!'
            }</li>
            <li>
              {loggedIn ?
                <SignOutButton setLoggedIn={setLoggedIn} setUserObj={setUserObj}/> :
                <SignInButton setLoggedIn={setLoggedIn} setUserObj={setUserObj}/>
              }</li>
          </ul>
          <br/>
        </nav>
        <main>
          <Switch>
            <Route exact path='/'><Home />
            </Route>
            <Route path='/home'><Home />
            </Route>
            <Route path='/calendar'><Calendar events={events} setEvents={setEvents} createEvent={createEvent}/>
            </Route>
            <Route path='/userProfile'><UserProfile />
            </Route>
            <Route path='/map'>
              <Map
                events={events}
                setEvents={setEvents}
                createEvent={createEvent}
                loggedIn={loggedIn}/>
            </Route>
          </Switch>
        </main>
      </Router>
    </ div>
  );
};
export default App;
