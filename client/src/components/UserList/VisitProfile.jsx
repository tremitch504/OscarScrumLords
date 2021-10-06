import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import axios from 'axios';
import { Route, useParams } from 'react-router-dom';

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

  const getParams = () => {
    const params = useParams();
    console.log(params)
  }

  return(
    <VisitProfileContainer>
      <VisitProfileStyles>
        <h3>Name: visit</h3>
        <p>email: </p>
        <button onClick={getParams}></button>
      </VisitProfileStyles>
    </VisitProfileContainer>
  )
}

export default VisitProfile;
