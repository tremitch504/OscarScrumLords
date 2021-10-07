import React, {useState, useEffect} from 'react';

const MessageView = ({currentMessage}) => {

  return (
    <div>
      {currentMessage && currentMessage.text}
    </div>
  );
};

export default MessageView;

//style: put this on the right side to display the text, have the corresponding selected preview be highlighted.
