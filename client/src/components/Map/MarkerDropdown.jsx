import React from 'react';

const MarkerDropdown = ({dropdown, setDropdown, loggedIn}) => {

  const onChange = ({target: {value}}) => {
    console.log('value of loggedin', loggedIn);
    if (loggedIn) {
      setDropdown(value);
    } else {
      // console.log('else condition hit');
      setDropdown(false);
      alert('Please Sign In');
    }
  };

  return (
    <div className='map-nav-dropdown'>
      <nav>

        <select value={dropdown} onChange={onChange} >
          <option value={null}>Add to the Map!</option>
          <option value='poi'>Cool Thing</option>
          <option value='hazard'>Hazard</option>
          <option value='event'>Event</option>
        </select>
        {dropdown && <h3>click the map to add feature</h3>}
      </nav>
    </div>
  );
};


export default MarkerDropdown;
