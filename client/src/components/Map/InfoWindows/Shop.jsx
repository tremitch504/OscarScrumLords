import React from 'react';
import PropTypes from 'prop-types';


const Shop = ({selected: {name}}) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
  
};

Shop.propTypes = {
  selected: PropTypes.object,
  name: PropTypes.string,
};

export default Shop;
