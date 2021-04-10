import React from 'react';
import PropTypes from 'prop-types';


const MapToolbar = ({activeLayers, setActiveLayers}) => {

  const onChange = ({target: {value}}) => {
    const returnObj = Object.assign({}, activeLayers);
    returnObj[value] = !activeLayers[value];
    setActiveLayers(returnObj);
  };

  return (
    <nav className="map-nav-container">
      <label className="map-nav">
      Show Bike Shops:
        <input
          name="Show Bike Shops"
          type="checkbox"
          value='shops'
          checked={activeLayers.shops}
          onChange={onChange}
        />
      </label>
      <label className="map-nav">
      Show Points of Interest:
        <input
          name="Show Points of Interest"
          type="checkbox"
          value="pois"
          checked={activeLayers.pois}
          onChange={onChange}
        />
      </label>
      <label className="map-nav">
        Show Hazards:
        <input
          name="Show Hazards"
          type="checkbox"
          value="hazards"
          checked={activeLayers.hazards}
          onChange={onChange}
        />
      </label>
      <label className="map-nav">
      Show Events:
        <input
          name="Show Events"
          type="checkbox"
          value='events'
          checked={activeLayers.events}
          onChange={onChange}
        />
      </label>
    </nav>
  );
};

MapToolbar.propTypes = {
  setActiveLayers: PropTypes.func,
  activeLayers: PropTypes.object,
};

export default MapToolbar;
