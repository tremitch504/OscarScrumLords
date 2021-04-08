import React, {useState} from 'react';
import PropTypes from 'prop-types';

const NewEvent = ({form: {lat, lng}, createEvent}) => {

  const [event, setEvent] = useState({
    name: '',
    details: '',
    date: '',
    time: '',
    lat: lat,
    lng: lng
  });

  const onChange = ({target: {name, value}}) => {
    setEvent({
      ...event,
      [name]: value
    });
  };

  const onSubmit = () => {
    createEvent(event);
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
        <input type="text" name="date" onChange={onChange}/>
      </label>
      <label>
    Time:
        <input type="text" name="time" onChange={onChange}/>
      </label>
      <input type="button" value="Submit" onClick={onSubmit}/>
    </form>
  );

};

NewEvent.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  form: PropTypes.object,
  createEvent: PropTypes.function
};
export default NewEvent;
