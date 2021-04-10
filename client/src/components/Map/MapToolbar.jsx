import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import MarkerDropdown from './MarkerDropdown.jsx';


const MapToolbar = ({activeLayers, setActiveLayers}) => {

  const onChange = ({target: {value}}) => {
    const returnObj = Object.assign({}, activeLayers);
    returnObj[value] = !activeLayers[value];
    setActiveLayers(returnObj);
  };

  return (
    <nav className="map-nav-container">
      <ul>
        <li className="map-nav">
        Bike Shops
          <input
            name="Show Bike Shops"
            type="checkbox"
            value='shops'
            checked={activeLayers.shops}
            onChange={onChange}
          />
        </li>
        <li className="map-nav">
        Points of Interest
          <input
            name="Show Points of Interest"
            type="checkbox"
            value="pois"
            checked={activeLayers.pois}
            onChange={onChange}
          />
        </li>
        <li className="map-nav">
          Hazards
          <input
            name="Show Hazards"
            type="checkbox"
            value="hazards"
            checked={activeLayers.hazards}
            onChange={onChange}
          />
        </li>
        <li className="map-nav">
        Events
          <input
            name="Show Events"
            type="checkbox"
            value='events'
            checked={activeLayers.events}
            onChange={onChange}
          />
        </li>
      </ul>
    </nav>
  );
};

MapToolbar.propTypes = {
  setActiveLayers: PropTypes.func,
  activeLayers: PropTypes.object,
};

export default MapToolbar;
