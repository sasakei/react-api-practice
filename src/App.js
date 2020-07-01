import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Basic1 from "./components/Basic1";
import Fetch from "./components/Fetch";
import AppContext from "./contexts/AppContexts";
import B from "./components/B";
import BasicReducer from "./components/BasicReducer";

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Basic1 name="佐々木だよ" />
          <Fetch />
          <B />
          <BasicReducer />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
