import React, {Component} from 'react';
import styled from 'styled-components';
import Map from './Map.jsx';
import Calendar from './Calendar.jsx';
import UserProfile from './UserProfile.jsx';
import { withScriptjs, withGoogleMap } from 'react-google-maps'; 
import { apiKey } from '../../../key.js';

const AppStyles = styled.div`
`;
class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
   
    const WrappedMap = withScriptjs(withGoogleMap(Map)); 

    return (
      <AppStyles>
        <div>
        <header>
            <h1>Bike Around and Find Out</h1>
            <h3>New Orleans Interactive Community Bike Map</h3>
          </header>
        <div style={{width: '100vw', height: '100vh'}}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
        <Calendar />
        <UserProfile />
      </div>
      </AppStyles>
 
    );
  }
}


export default App;

