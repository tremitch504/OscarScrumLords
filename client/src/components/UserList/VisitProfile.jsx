import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams, useHistory } from 'react-router-dom';

//component for visiting a profile
//recycling styling from ../UserProfile, but going to be different because views when visiting your own vs a friends profile should b different 

const VisitProfileContainer = styled.div`
margin: 20px 0px;

`;

const VisitProfileStyles = styled.div`
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

const VisitProfile = () => {

  const {id} = useParams(); 
  const history = useHistory();

  const [userObject, setUserObject] = useState({}); //state for the user object

  //retrieve info on the user whose profile we visit and set the state to it, has the info needed to build this out
  const getUserInfo = async () => {
    const user = await axios.get(`/routes/userlist/userlist/visitProfile/${id}`);
    setUserObject(user.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);


  return (
    <VisitProfileContainer>
      <VisitProfileStyles>
        <h3>Name: {userObject.fullName}</h3>
        <p> {userObject.email} </p>
        <span>
          <button onClick={() => history.push(`/sendMessage/${userObject.id}`)}>send message</button>
          <button>follow</button>
        </span>
      </VisitProfileStyles>
    </VisitProfileContainer>
  );
};

export default VisitProfile;
