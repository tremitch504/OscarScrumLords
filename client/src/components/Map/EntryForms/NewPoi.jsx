import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';



const NewPoi = ({form: {lat, lng}, createLandmark}) => {

  const [poi, setPoi] = useState({
    details: '',
    date: new Date(),
    time: '18:00',
    lat: lat,
    lng: lng,
    kind: 'poi'
  });

  const onChange = ({target: {name, value}}) => {
    setPoi({
      ...poi,
      [name]: value
    });
  };

  const dateChange = (newDate) => {
    setPoi({
      ...poi,
      date: newDate
    });
  };

  const onSubmit = () => {
    const {date, ...rest} = poi;
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

NewPoi.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  form: PropTypes.object,
  createLandmark: PropTypes.func
};
export default NewPoi;
