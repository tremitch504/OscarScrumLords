import React from 'react';
import PropTypes from 'prop-types';

const RenderEventTile = ({events}) => {

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.eventsName}</h3>
          <p>created by: {event.hostName}</p>
          <p>details: {event.details}</p>
          <p>time: {event.timeId}</p>
          <p>attendees: tbd</p>
        </div>
      ))
      }
    </div>
  );

};


RenderEventTile.propTypes = {
  events: PropTypes.object,
};

export default RenderEventTile;
