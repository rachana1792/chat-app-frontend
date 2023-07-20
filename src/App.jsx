import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ChatRoom from './ChatRoom/ChatRoom';
import {io} from 'socket.io-client';

const SOCKET_SERVER_URL = "http://localhost:3001"

const socket = io.connect(SOCKET_SERVER_URL);

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat/:userName/:roomId" element={<ChatRoom socket={socket} url={SOCKET_SERVER_URL} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;