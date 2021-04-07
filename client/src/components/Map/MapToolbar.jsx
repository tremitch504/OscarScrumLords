import React from 'react';
import PropTypes from 'prop-types';


const MapToolbar = ({activeLayers, setActiveLayers}) => {

  const onChange = ({target: {value}}) => {
    const returnObj = Object.assign({}, activeLayers);
    returnObj[value] = !activeLayers[value];
    setActiveLayers(returnObj);
  };


  return (
    <nav>
      <label>
      Show Bike Shops:
        <input
          name="Show Bike Shops"
          type="checkbox"
          value='shops'
          checked={activeLayers.shops}
          onChange={onChange}
        />
      </label>
      <label>
      Show Points of Interest:
        <input
          name="Show Points of Interest"
          type="checkbox"
          value="poi"
          checked={activeLayers.poi}
          onChange={onChange}
        />
      </label>
      <label>
        Show Hazards:
        <input
          name="Show Hazards"
          type="checkbox"
          value="hazards"
          checked={activeLayers.hazards}
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
