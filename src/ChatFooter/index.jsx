import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const ChatFooter = (socket) => {

    const [message, setMessage] = useState('');

    const {userName, roomId} = useParams()


    const handleSendMessage = (e) => {
      e.preventDefault();
      if (message.trim() && userName) {
        socket?.socket?.emit('message', {
          text: message,
          name: userName,
          id: `${socket?.socket?.id}${Math.random()}`,
          socketID: socket?.socket?.id,
          roomId: roomId
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