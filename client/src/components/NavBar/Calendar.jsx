import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Div = styled.div`

.react-calendar {
  width: 3000px;
  max-width: 100%;
  background: whitesmoke;
  border: 1px solid #a0a096;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  color: gainsboro;
  padding: 30px 20px 0;
} 
`;
//commit
/*
function tileContent({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
      return 'My content';
    }
  }
}
*/


const Events = () => {
  const [value, onChange, tileContent] = useState(new Date());

  return (
    <Div>
      <Container>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={tileContent} //allows to render custom content within a given calendar item (day)
        />
      </Container>
    </Div>
  );
};

export default Events;
