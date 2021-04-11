import React from 'react';
import PropTypes from 'prop-types';

const MarkerDropdown = ({dropdown, setDropdown, loggedIn}) => {

  const onChange = ({target: {value}}) => {
    if (loggedIn) {
      setDropdown(value);
    } else {
      setDropdown(false);
      alert('Please Sign In');
    }
  };

  return (
    <div className="map-nav-dropdown">
      <select value={dropdown} onChange={onChange} >
        <option value={null}>Add to the Map!</option>
        <option value='poi'>Cool Thing</option>
        <option value='hazard'>Hazard</option>
        <option value='event'>Event</option>
      </select>
      {dropdown && <h3>click the map to add feature</h3>}
    </div>
  );
};

MarkerDropdown.propTypes = {
  loggedIn: PropTypes.bool,
  dropdown: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  setDropdown: PropTypes.func
};

export default MarkerDropdown;
