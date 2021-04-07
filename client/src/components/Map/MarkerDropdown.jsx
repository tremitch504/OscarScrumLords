import React from 'react';

const MarkerDropdown = ({dropdown, setDropdown}) => {

  const onChange = ({target: {value}}) => {
    setDropdown(value);
  };

  return (
    <div className='txn-data'>
      <nav>

        <select value={dropdown} onChange={onChange} >
          <option value=''>Add to the Map!</option>
          <option value='poi'>Cool Thing</option>
          <option value='hazard'>Hazard</option>
          <option value='event'>Event</option>
        </select>
        {dropdown !== '' && <h3>click the map to add feature</h3>}
      </nav>
    </div>
  );
};


export default MarkerDropdown;
