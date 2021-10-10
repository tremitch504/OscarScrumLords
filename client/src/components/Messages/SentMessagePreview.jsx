import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';

const SentMessagePreview = ({messageObj, viewMessage}) => {
  const {sentTo, createdAt, subject} = messageObj;
  const [messageDetails, setMessageDetails] = useState({sentMessage: {}, createdAt: '', subject: ''});

  useEffect(() => setMessageDetails(messageObj), []);
  return (
    <div>
      <div onClick={() => viewMessage(messageObj) }>Subject: {messageDetails.subject} </div>
      <div>From: {messageDetails.sentTo.fullName} </div>
      <div>When: {messageDetails.createdAt}</div>
      
    </div>
  );
};

export default SentMessagePreview;
