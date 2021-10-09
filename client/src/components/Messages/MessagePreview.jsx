import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import moment from 'moment';


const StyledPreview = styled.div`
  
`;
const MessagePreview = ({messageObj, viewMessage}) => {
  const {receivedFrom, createdAt, subject} = messageObj;
  const [messageDetails, setMessageDetails] = useState({receivedMessage: {}, createdAt: '', subject: ''});

  useEffect(() => {
    setMessageDetails(messageObj);
  }, []);
  return (
    <StyledPreview>
      <div className='previewWrapper'>
        <div >Subject: {messageDetails.subject} </div>
        <div>From: {messageDetails.receivedFrom && messageDetails.receivedFrom.fullName} </div>
        <div>When: {moment(messageDetails.createdAt).fromNow()}</div>
      
      </div>
    </StyledPreview>
  );
};

export default MessagePreview;
