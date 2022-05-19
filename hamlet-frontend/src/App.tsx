import React from "react";
// import logo from './logo.png';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/main";
import Login from "./pages/LogIn/login";
import Signup from "./pages/SignUp/signup";
import WaitingRoomPlayer from "./pages/WaitingRoomPlayer/WaitingRoomPlayer";
import Game from "./pages/Game/Game";
import Quiz from "./components/Problem/Quiz/Quiz";
import MainforPlayer from "./pages/Main/MainforPlayer";
import Hamlet from "./pages/hamlet/Hamlet";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/MainforPlayer" element={<MainforPlayer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/WaitingRoomPlayer" element={<WaitingRoomPlayer />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/admin" element={<Hamlet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
