import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ChatRoom from './ChatRoom/ChatRoom';
import {io} from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat/:userName" element={<ChatRoom socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;