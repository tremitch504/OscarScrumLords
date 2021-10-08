import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';


const StyledPreview = styled.div`
  
`;
const MessagePreview = ({messageObj, viewMessage}) => {
  const {receivedFrom, createdAt, subject} = messageObj;
  const [messageDetails, setMessageDetails] = useState({receivedMessage: {}, createdAt: '', subject: ''});

  useEffect(() => {
    setMessageDetails(messageObj);
    console.log('messobj', messageObj, messageObj.receivedFrom);
  }, []);
  return (
    <StyledPreview>
      <div className='previewWrapper'>
        <div >Subject: {messageDetails.subject} </div>
        <div>From: {messageDetails.receivedFrom && messageDetails.receivedFrom.fullName} </div>
        <div>When: {messageDetails.createdAt}</div>
      
      </div>
    </StyledPreview>
  );
};

export default MessagePreview;
