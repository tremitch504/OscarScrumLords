import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';

const SendMessage = () => {

  const {id} = useParams();

  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const sendMessage = async () => {
    await axios.post(`/routes/messages/sendMessage/${id}`, { message, subject});
  };

  const subjectChange = ({target: {value}}) => {
    setSubject(value);
  };

  const messageChange = ({target: {value}}) => {
    setMessage(value);
  };


  return (
    <div>
      subject
      <input type='text' onChange={subjectChange} value={subject}></input>
      message
      <input 
        type='text' 
        onChange={messageChange}
        value={message}
      ></input>
      <button onClick={sendMessage}>send</button>

    </div>
  );
};

export default SendMessage;
