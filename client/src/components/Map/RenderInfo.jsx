import React from 'react';
import PropTypes from 'prop-types';

const RenderInfo = ({selected}) => {

  const formSwitch = () => {
    switch (selected.kind) {
    case ('shop') : {
      const {name, formatted_address: formattedAddress, opening_hours: openingHours, rating} = selected;
      return (
        <div>
          <h3>{name}</h3>
          <p>address: {formattedAddress}</p>
          <p>currently open: {
            openingHours && openingHours.open_now || false
              ? 'yes!'
              : 'no'
          }</p>
          <p>rating: {rating}</p>
        </div>
      );
    }
    case ('event') : {
      const {eventsName, hostName, details, date_id: dateId, time_id: timeId} = selected;
      return (
        <div>
          <h3>{eventsName}</h3>
          <p>created by: {hostName}</p>
          <p>details: {details}</p>
          <p>date: {dateId.slice(0, 10)}</p>
          <p>time: {timeId}</p>
          <p>attendees: tbd</p>
        </div>
      );
    }
    }
  };
  return (
    <div>
      {formSwitch()}
    </div>
  );
};


RenderInfo.propTypes = {
  selected: PropTypes.object,
  name: PropTypes.string,
};

export default RenderInfo;
