import React from 'react'; 
import { GoogleMap } from 'react-google-maps'; 

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 29.951065, lng: -90.071533 }}
    />
  );
};



export default Map;
