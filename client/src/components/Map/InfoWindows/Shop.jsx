import React from 'react';
import PropTypes from 'prop-types';


const Shop = ({selected: {name, formatted_address, opening_hours, rating}}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>address: {formatted_address}</p>
      <p>currently open: {
        opening_hours.open_now
          ? 'yes!'
          : 'no'
      }</p>
      <p>rating: {rating}</p>


    </div>
  );
  
};

Shop.propTypes = {
  selected: PropTypes.object,
  name: PropTypes.string,
};

export default Shop;
