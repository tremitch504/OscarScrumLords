import React from 'react';
import axios from 'axios';
import Calendar from '@ericz1803/react-google-calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY;

const calendars = [
  {calendarId: process.env.CALENDAR_ID, color: '#B241D1'},

];

const tool = {

  position: 'relative',
  display: 'inline-block',
  borderBottom: '1px dotted black' /* If you want dots under the hoverable text */
};


// --> in case persmissions are different for deployment
axios.get('/routes/calendar/calendarId')
  .then(data => {
    console.log(data.data);
    const {CALENDAR_ID} = data.data.parsed;
  })
  .catch(err => {
    console.error(err);
  });

class Events extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={tool}/>
      </div>
    );
  }
}

export default Events;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container } from 'react-bootstrap';
// import styled from 'styled-components';
// import RenderEventTile from './RenderEventTile.jsx';
// import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

// const Div = styled.div`

// h2 {
//   text-align: center;
//   font-family: 'Ubuntu', sans-serif;
//   font-weight: bold;
//   padding: 5px;
// }

// .react-calendar {
//   width: 3000px;
//   max-width: 100%;
//   background: whitesmoke;
//   border: 1px solid#a0a096;
//   font-family: Arial, Helvetica, sans-serif;
//   line-height: 1.125em;
//   color: gainsboro;
//   padding: 30px 20px 0;
// }
// `;

// const datesToAddContentTo = ['tomorrow', 'in3Days', 'in5Days'];

// // const isSameDay = (a, b) => {
// //   return differenceInCalendarDays(a, b) === 0;
// // };

// const tileContent = ({ date, view }) => {
//   // Add class to tiles in month view only
//   if (view === 'month') {
//     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//     // if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
//     //   return 'My content';
//     // }
//   }
// };

// const Events = ({events}) => {

//   const [selectedDate, setDate] = useState(new Date());

//   const onChange = selectedDate => {
//     setDate(selectedDate);
//   };

//   const eventsOnDate = events.filter(event => {

//     const formatDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

//     // return event.date_id.slice(0, 10).replaceAll('-0', '-') === formatDate;
//     /**
//      * ^^the commmented out function is original.  throws an error after refactors.  right now just have a blank return to not throw an err
//      * 
//      */
//     return; 
//   });

//   return (
    
//     <Div>
//       <Container>
//         <div>
//         <h2>Check out bike events happening in New Orleans!</h2>
//         <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=qh60f8hs6tp1u65c517ldutc98%40group.calendar.google.com&ctz=America%2FChicago"/>
//         </div>
//         <Calendar
//           onChange={onChange}
//           value={selectedDate}
//           tileContent={tileContent}
//         />
//         {<RenderEventTile events={eventsOnDate} date={selectedDate}/>}
//       </Container>
    
     
//     </Div>
    
//   );
// };

// Events.propTypes = {
//   events: PropTypes.array,
// };

// export default Events;





