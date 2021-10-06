import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import RenderEventTile from './RenderEventTile.jsx';


const Div = styled.div`

h2 {
  text-align: center;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  padding: 5px;
}

.react-calendar {
  width: 3000px;
  max-width: 100%;
  background: whitesmoke;
  border: 1px solid#a0a096;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  color: gainsboro;
  padding: 30px 20px 0;
}
`;

const style = {
  border: "solid 1px #777", width:"800", height:"600", frameborder:"0", scrolling:"no"};

const Events = ({events}) => {

  const [selectedDate, setDate] = useState(new Date());

  const onChange = selectedDate => {
    setDate(selectedDate);
  };

  const eventsOnDate = events.filter(event => {

    const formatDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

    // return event.date_id.slice(0, 10).replaceAll('-0', '-') === formatDate;
    /**
     * ^^the commmented out function is original.  throws an error after refactors.  right now just have a blank return to not throw an err
     * 
     */
    return; 
  });

  return (
    
    <Div>
      <Container>
        <h2>Check out bike events happening in New Orleans!</h2>
       
        {/* <Calendar
          onChange={onChange}
          value={selectedDate}
        />
        {<RenderEventTile events={eventsOnDate} date={selectedDate}/>} */}
      </Container>
      <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&title=bikeAround&src=cWg2MGY4aHM2dHAxdTY1YzUxN2xkdXRjOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=Y2hlZmpvaG5iZXNoLmNvbV9oZjMwcW9jbmJsdGRqYm5tbjIzcnV1Z3U2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23A79B8E&color=%237986CB&color=%23616161" />
     
    </Div>

  );
};

Events.propTypes = {
  events: PropTypes.array,
};

export default Events;
