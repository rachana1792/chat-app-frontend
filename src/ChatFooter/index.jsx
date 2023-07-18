import React, { useState } from 'react';
import {io} from 'socket.io-client';
import { useParams } from 'react-router-dom';

const socket1 = io.connect('http://localhost:3001');

const ChatFooter = (socket) => {

    const [message, setMessage] = useState('');

    const {userName} = useParams()


    const handleSendMessage = (e) => {
      e.preventDefault();
      if (message.trim() && userName) {
        socket?.socket?.emit('message', {
          text: message,
          name: userName,
          id: `${socket?.socket?.id}${Math.random()}`,
          socketID: socket?.socket?.id,
        });
      }
      setMessage('');
    };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;