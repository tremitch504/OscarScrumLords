import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ userObj, events }) => {
  return (
    <div className="events-container">
      <div className="events">
        <h3>Name: {userObj.name}</h3>
        <p>email: {userObj.email}</p>
      </div>
      {events.filter(event => event.attendees.includes(userObj.name))
        .map(event => (
          <div className="events" key={event.id}>
            <h3>{event.eventsName}</h3>
            <p>created by: {event.hostName}</p>
            <p>details: {event.details}</p>
            <p>when: {event.time_id}</p>
            <p>attendees: {event.attendees.join(', ')}</p>
          </div>
        ))
      }
    </div>
  );

};


UserProfile.propTypes = {
  events: PropTypes.array,
  userObj: PropTypes.object
};

export default UserProfile;
