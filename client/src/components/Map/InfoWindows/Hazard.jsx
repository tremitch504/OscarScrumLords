import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns'; // marking time and date on potholes



const Hazard = ({selected: {name, time}}) => {
  return (
    <div>
      <h2>uh oh!</h2>
      <h3>Pothole here!</h3>

      <p>Reported {formatRelative(time, new Date())}</p> 
    </div>
  );
  
};


export default Hazard;
