import { gapi } from 'gapi-script';
import React, {Component} from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
import Search from './Search.jsx'; 
import Calendar from './Calendar.jsx';
import UserProfile from './UserProfile.jsx';
const AppStyles = styled.div`
`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: null
    };
    this.initializeGoogleSignin = this.initializeGoogleSignin.bind(this)
  }
  initializeGoogleSignin() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '636707500167-jl0be6d4pi4e96ttgqkvt1v0758a3r9p.apps.googleusercontent.com'
      }); 
      console.log('api init successful')
      gapi.load('signin2', () => {
        const params = {
          onSuccess: () => {
            console.log('User has finished signing in!')
          }
        }
        gapi.signin2.render('loginButton', params)
      })
    })
  }
  componentDidMount() {
    console.log('Loading')
    this.initializeGoogleSignin();
  }
  render() {
   

    return (
      <AppStyles>
        <div>
          <header>
            <h1>Bike Around and Find Out</h1>
            <h3>New Orleans Interactive Community Bike Map</h3>
          </header>
          <Map />
        </div>
        <Calendar />
        <UserProfile />
        
      </AppStyles>
    );
  }
}
export default App;