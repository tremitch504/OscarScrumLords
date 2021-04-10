import React from 'react';
import PropTypes from 'prop-types';

const RenderInfo = ({selected, putEvent, attending, events, loggedIn}) => {
  const onClick = () => {
    loggedIn
      ? putEvent(selected.id)
      : alert('please login!');
  };

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
          <p>attendees: {events.filter(event => event.id === selected.id)[0].attendees.join(', ')}</p>
          <button type='button' onClick={onClick}>{
            attending && attending.includes(selected.id)
              ? 'unattend event'
              : 'attend event' 
          }</button>
        </div>
      );
    }
    case ('hazard') : {
      const {fullName, details, date_id: dateId} = selected;
      return (
        <div>
          <p>created by: {fullName}</p>
          <p>details: {details}</p>
          <p>date: {dateId.slice(0, 10)}</p>
        </div>
      );
    }
    case ('poi') : {
      const {fullName, details, date_id: dateId} = selected;
      return (
        <div>
          <p>created by: {fullName}</p>
          <p>details: {details}</p>
          <p>date: {dateId.slice(0, 10)}</p>
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
  putEvent: PropTypes.func,
};

export default RenderInfo;
