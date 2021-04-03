import React, {Component} from 'react'
import Map from './Map.jsx'
import Calendar from './Calendar.jsx'
import UserProfile from './UserProfile.jsx'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <div>
        <h1>Bike Around and Find Out</h1>
        <h3>New Orleans Interactive Community Bike Map</h3>
        <Map />
        <Calendar />
        <UserProfile />
      </div>
    )
  }
}

export default App