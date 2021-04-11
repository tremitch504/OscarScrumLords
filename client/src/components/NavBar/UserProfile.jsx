import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 

const EventsContainer = styled.div`
margin: 20px 0px;

`;

const UserInfo = styled.div`
  border: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 15px;
  padding: 5px;
  
  margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: white;
  font-family: 'Ubuntu', sans-serif; 

`;

const EventInfo = styled.div`
font-family: 'Ubuntu', sans-serif; 
  border: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 15px;
  background-color: white;
    margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15),
        0 10px 0 -5px #eee,
        0 10px 1px -4px rgba(0,0,0,0.15),
        0 20px 0 -10px #eee,
        0 20px 1px -9px rgba(0,0,0,0.15);

    padding: 30px;
`;


const UserProfile = ({ userObj, events }) => {
  return (
    <EventsContainer>
      <UserInfo className="events">
        <h3>Name: {userObj.name}</h3>
        <p>email: {userObj.email}</p>
      </UserInfo>
      {events.filter(event => event.attendees.includes(userObj.name))
        .map(event => (
          <EventInfo key={event.id}>
            <h3>{event.eventsName}</h3>
            <p>created by: {event.hostName}</p>
            <p>details: {event.details}</p>
            <p>when: {event.time_id}</p>
            <p>attendees: {event.attendees.join(', ')}</p>
          </EventInfo>
        ))
      }
    </EventsContainer>
  );

};


UserProfile.propTypes = {
  events: PropTypes.array,
  userObj: PropTypes.object
};

export default UserProfile;
