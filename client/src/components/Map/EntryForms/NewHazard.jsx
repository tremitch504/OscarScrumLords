import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';



const NewHazard = ({form: {lat, lng}, createLandmark}) => {

  const [hazard, setHazard] = useState({
    details: '',
    date: new Date(),
    time: '18:00',
    lat: lat,
    lng: lng,
    kind: 'hazard'
  });

  const onChange = ({target: {name, value}}) => {
    setHazard({
      ...hazard,
      [name]: value
    });
  };

  const dateChange = (newDate) => {
    setHazard({
      ...hazard,
      date: newDate
    });
  };

  const onSubmit = () => {
    const {date, ...rest} = hazard;
    const formatDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    createLandmark({date: formatDate, ...rest});
  };

  return (
    <form>
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
      <input type="button" value="Submit" onClick={onSubmit}/>
    </form>
  );

};

NewHazard.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  form: PropTypes.object,
  createHazard: PropTypes.func
};
export default NewHazard;
