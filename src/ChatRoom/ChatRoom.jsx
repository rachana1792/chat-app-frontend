import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState();

const {roomId} = useParams()


  useEffect(() => {
    socket.on('messageResponse', (data) =>{setMessages([...messages, data])} );
    // socket.emit('join-room', roomId, messages);

    console.log("mesDat", messages)

  }, [socket, messages,roomId]);

  return (
    <div className="chat">
      <div className="chat__main">
        <ChatBody messages={messages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;