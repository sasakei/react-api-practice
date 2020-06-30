import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./components/Basic1";
import Fetch from "./components/Fetch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Basic1 name="佐々木だよ" />
        <Fetch />
      </header>
    </div>
  );
}

export default App;
