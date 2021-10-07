import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import MessagePreview from './MessagePreview.jsx';
import MessageView from './MessageView.jsx';
import SentMessagePreview from './SentMessagePreview.jsx'

const Inbox = () => {

  const [mail, setMail] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({}); //a state to an email that someone wants to view.  when clicked the email will display
  const [sentMail, setSentMail] = useState([]);

  const getInbox = async () => { //get request to get mail.  and then set it to the state
    const {data} = await axios.get('/routes/messages/getInbox');
    console.log('data', data);
    setMail(data)
  };

  const getOutbox = async () => { //get request to get mail.  and then set it to the state
    const {data} = await axios.get('/routes/messages/getOutbox');
    console.log('data', data);
    setSentMail(data)
  };

  

  const viewMessage = (message) => { //fn to fire off when clicked
    console.log('click', message)
    setCurrentMessage(message)
  };

  const messagePreviews = mail.map((messageObj, i) => <MessagePreview key={i} messageObj={messageObj} viewMessage={viewMessage} /> );

  useEffect(()=> getInbox(), []);

  //useEffect(()=>{}, currentMessage)

  


  return (
    <div>
     
      {messagePreviews}
      
     
      
    </div>
  )
}

export default Inbox; 
//{currentMessage.id ? <MessageView /> : <div>no messages selected </div>}