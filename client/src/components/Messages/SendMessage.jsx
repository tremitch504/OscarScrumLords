import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const SendMessageStyled = styled.div`

border: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 15px;
  padding: 5px;
  margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: white;
  font-family: 'Ubuntu', sans-serif; 

  .subject {
    width: 400px;
  }
  .message {
    height: 200px;
    width: 400px;
  }

`;

const SendMessage = () => {

  const {id} = useParams();

  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');

  //get info for person that we are sending a message to
  const getTarget = async () => {
    const {data} = await axios.get(`/routes/userlist/userlist/visitProfile/${id}`);
    console.log('data'. data);
    setRecipient(data.fullName);
  };

  const sendMessage = async () => {
    await axios.post(`/routes/messages/sendMessage/${id}`, { message, subject});
  };

  const subjectChange = ({target: {value}}) => {
    setSubject(value);
  };

  const messageChange = ({target: {value}}) => {
    setMessage(value);
  };

  useEffect(()=> getTarget(), []);


  return (
    <SendMessageStyled>
      <h3>send message to {recipient}</h3>
      <InputGroup className="mb-3 subject" >
        <InputGroup.Text>Subject</InputGroup.Text>
        <FormControl
          aria-label="subject"
          aria-describedby="inputGroup-sizing-default"
          onChange={subjectChange}
          value={subject}
        />
      </InputGroup>
      <Form>
        <Form.Group>
          <Form.Control 
            type="text" 
            placeholder="enter message!"
            onChange={messageChange}
            className='message'
          />

        </Form.Group>
      </Form>
      <Button className='fButton' onClick={sendMessage}>send</Button>

    </SendMessageStyled>
  );
};

export default SendMessage;
