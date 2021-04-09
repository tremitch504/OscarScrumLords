import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';



const NewEvent = ({form: {lat, lng}, createEvent}) => {

  const [event, setEvent] = useState({
    name: '',
    details: '',
    date: new Date(),
    time: '18:00',
    lat: lat,
    lng: lng
  });

  const onChange = ({target: {name, value}}) => {
    setEvent({
      ...event,
      [name]: value
    });
  };

  const dateChange = (newDate) => {
    setEvent({
      ...event,
      date: newDate
    });
  };

  const timeChange = (newTime) => {
    setEvent({
      ...event,
      time: newTime
    });
  };

  const onSubmit = () => {
    const {date, time, ...rest} = event;
    const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const formatTime = `${time}:00`;
    createEvent({date: formatDate, time: formatTime, ...rest});
  };

  return (
    <form>
      <label>
    Event Name:
        <input type="text" name="name" onChange={onChange} />
      </label>
      <label>
    Details:
        <input type="text" name="details" onChange={onChange}/>
      </label>
      <label>
        Date:
        <Calendar
          onChange={dateChange}
        />
      </label>
      <label>
    Time:
        <TimePicker 
          disableClock={true}
          onChange={timeChange}
        />
      </label>
      <input type="button" value="Submit" onClick={onSubmit}/>
    </form>
  );

};

NewEvent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  form: PropTypes.object,
  createEvent: PropTypes.func
};
export default NewEvent;
