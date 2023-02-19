import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./routes/Login/login.component";
import ToDoListHome from "./routes/ToDoListHome/to-do-list-home.component";
import Home from "./routes/home.component";
import LevelOne from "./routes/level-one.component";
import LevelTwo from "./routes/level-two.component";
import LevelThree from "./routes/finish-game.component";
import PlayAgain from "./routes/play-again.component";

import "./App.css";

function App() {
  return (
    <div className="Root">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/game/levelone" element={<LevelOne />} />
            <Route exact path="/game/leveltwo" element={<LevelTwo />} />
            <Route exact path="/game/levelthree" element={<LevelThree />} />
            <Route exact path="/game/playagain" element={<PlayAgain />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
