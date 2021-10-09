import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
//import '../styles/Yomogi-regular.ttf'

const StyledMessage = styled.div`
    .card {
      height: 600px;
      width: 900px;
      margin-top: 30px;
      flex: 1;
      padding: 50px;
      font-size: 30px;
    }
`;

// @font-face: {
//   font-family: 'Yomogi', cursive;
//   src: '../styles/Yomogi-regular.ttf'
// }
//https://fonts.google.com/share?selection.family=Yomogi


const MessageView = ({currentMessage}) => {

  return (
    <StyledMessage>
      <Card className='card'>
        {currentMessage && currentMessage.text}
      </Card>
    </StyledMessage>
  );
};

export default MessageView;

//style: put this on the right side to display the text, have the corresponding selected preview be highlighted.
