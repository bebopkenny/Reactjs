import React, { useState } from 'react';
import './MessagePart2.css'; 

const MessagePart2 = () => {
  const [messages, setMessages] = useState(["a", "b", "c"]);

  function displayMessage() {
    if (messages.length === 0) {
      return <p className="message-text">You have no new messages</p>;
    } else if (messages.length === 1) {
      return <p className="message-text">You have 1 new message</p>;
    } else {
      return <p className="message-text">You have {messages.length} new messages</p>;
    }
  }

  return (
    <div className="container-part2">
      {displayMessage()}
    </div>
  );
};

export default MessagePart2;
