import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; 
import axios from 'axios';

//component for visiting a profile
//recycling styling from ../UserProfile, but going to be different because views when visiting your own vs a friends profile should b different 

const VisitProfileContainer = styled.div`
margin: 20px 0px;

`;

const VisitProfile = styled.div`
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

  return(
    <div>
      profile here
    </div>
  )
}

export default VisitProfile;
