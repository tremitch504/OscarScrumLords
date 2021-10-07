import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';

const MessagePreview = ({messageObj, viewMessage}) => {
  const {receivedFrom, createdAt, subject} = messageObj;
  const [messageDetails, setMessageDetails] = useState({receivedMessage: {}, createdAt: '', subject: ''});

  useEffect(() => {
    setMessageDetails(messageObj);
    console.log('messobj', messageObj, messageObj.receivedFrom);
  }, []);
  return (
    <div onClick={() => viewMessage(messageObj) }>
      <div >Subject: {messageDetails.subject} </div>
      <div>From: {messageDetails.receivedFrom && messageDetails.receivedFrom.fullName} </div>
      <div>When: {messageDetails.createdAt}</div>
      
    </div>
  );
};

export default MessagePreview;
