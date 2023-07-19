import React from 'react';
import { useParams } from 'react-router-dom';

const ChatBody = ({ messages }) => {

  const {userName, roomId} = useParams()

//   console.log(messages,"mmm")
// socket.emit('join-room', roomId, messages);


  return (
    <>
           <header className="chat__mainHeader">
        <p>Hello {userName}</p>
      </header>

      <div className="message__container">
        {messages.filter(message => message.roomId==roomId).map((message) =>
          message.name === userName ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

      </div>
    </>
  );
};

export default ChatBody;