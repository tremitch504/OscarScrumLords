import React from 'react';
import PropTypes from 'prop-types';

const RenderEventTile = ({events, date}) => {
  // console.log('events RET', events)

  return (
    <div className="events-container">
      {events.map(event => (
        <div className="events" key={event.id}>
          <h3>{event.eventsName}</h3>
          <p>created by: {event.hostName}</p>
          <p>details: {event.details}</p>
          <p>when: {event.time_id}</p>
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
