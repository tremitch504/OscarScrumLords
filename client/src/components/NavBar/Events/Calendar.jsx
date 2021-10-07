import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import RenderEventTile from './RenderEventTile.jsx';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';

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

const datesToAddContentTo = ['tomorrow', 'in3Days', 'in5Days'];

// const isSameDay = (a, b) => {
//   return differenceInCalendarDays(a, b) === 0;
// };

const tileContent = ({ date, view }) => {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    // if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
    //   return 'My content';
    // }
  }
};

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
        <div>
        <h2>Check out bike events happening in New Orleans!</h2>
        <ReactEmbeddedGoogleCalendar publicUrl ="https://calendar.google.com/calendar/embed?src=qh60f8hs6tp1u65c517ldutc98%40group.calendar.google.com&ctz=America%2FChicago"/>
        </div>
        <Calendar
          onChange={onChange}
          value={selectedDate}
          tileContent={tileContent}
        />
        {<RenderEventTile events={eventsOnDate} date={selectedDate}/>}
      </Container>
    
     
    </Div>
    
  );
};

Events.propTypes = {
  events: PropTypes.array,
};

export default Events;







// import React from 'react';
// import FullCalendar, { formatDate } from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import './events.css';
// //import { INITIAL_EVENTS, createEventId } from './event-utils';

// export default class Events extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       weekendsVisible: true,
//       currentEvents: []
//     };
//     this.handleDateSelect = this.handleDateSelect.bind(this);
//     this.renderEventContent = this.renderEventContent.bind(this); // custom render function
//     this.handleEventClick = this.handleEventClick.bind(this);
//     this.handleEvents = this.handleEvents.bind(this);
//     this.renderSidebarEvent = this.renderSidebarEvent.bind(this);
//     this.renderSidebar = this.renderSidebar.bind(this);
    
//   }
 
//   render() {
//     const { weekendsVisible, currentEvents } = this.state;
//     return (
//       <div className='demo-app'>
//         <div className='demo-app-main'>
//           <FullCalendar
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             headerToolbar={{
//               left: 'prev,next today',
//               center: 'title',
//               right: 'dayGridMonth,timeGridWeek,timeGridDay'
//             }}
//             initialView='dayGridMonth'
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             weekends={this.weekendsVisible}
//             //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
//             select={this.handleDateSelect}
//             eventContent={this.renderEventContent} // custom render function
//             eventClick={this.handleEventClick}
//             eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
//             /* you can update a remote database when these fire:
//             eventAdd={function(){}}
//             eventChange={function(){}}
//             eventRemove={function(){}}
//             */
//           />
//         </div>
//       </div>
//     );
//   }



//   handleDateSelect(selectInfo) {
//     const title = prompt('Please enter a new title for your event');
//     const calendarApi = selectInfo.view.calendar;

//     calendarApi.unselect(); // clear date selection

//     if (title) {
//       calendarApi.addEvent({
//         id: createEventId(),
//         title,
//         start: selectInfo.startStr,
//         end: selectInfo.endStr,
//         allDay: selectInfo.allDay
//       });
//     }
//   }

//   handleEventClick(clickInfo) {
//     if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
//       clickInfo.event.remove();
//     }
//   }

//   handleEvents(events) {
//     this.setState({
//       currentEvents: events
//     });
//   }

//   renderEventContent(eventInfo) {
//     return (
//       <div>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </div>
//     );
//   }
  
  

// }


