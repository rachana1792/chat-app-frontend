import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatBody from '../ChatBody';
import ChatFooter from '../ChatFooter';
import axios from 'axios';

const ChatPage = ({ socket, url }) => {
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState();

const {roomId} = useParams()


  useEffect(() => {

    socket.on('messageResponse', (data) =>{console.log({data});setMessages([...messages, data])} );

  }, [socket, messages,roomId]);

  useEffect(() => {

    console.log("here room")
     socket.emit('join-room', roomId);

     console.log(url)
    const fetchMessages = async () => {
      const response = await axios.get(
        `${url}/rooms/${roomId}/messages`
      );
      const result = response.data.messages;
      console.log(result,"result")
      setMessages(result);
    };

    fetchMessages();


  }, [roomId]);

 

  

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