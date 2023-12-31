import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/chat/${userName}/${roomId}`);
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Lets Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="roomId">Room</label>
      <input
        type="text"
        name="roomId"
        id="roomId"
        className="username__input"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;