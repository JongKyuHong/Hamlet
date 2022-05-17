import React from 'react';
// import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/main';
import Login from './pages/LogIn/login';
import Signup from './pages/SignUp/signup';
import WaitingRoomPlayer from './pages/WaitingRoomPlayer/WaitingRoomPlayer';
import Game from './pages/Game/Game';
import Admin from './pages/Admin/Admin';
import { question } from './types';
import Quiz from './components/Problem/Quiz/Quiz';
import MainforPlayer from './pages/Main/MainforPlayer';
import Survey2 from './components/Problem/Survey/Survey2';
import Problem from './components/Problem/Problem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Main/>} />
        <Route path="/MainforPlayer" element={<MainforPlayer/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/WaitingRoomPlayer" element={<WaitingRoomPlayer/>} />
        <Route path="/Problem" element={<Problem />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/survey" element={<Survey2 />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
