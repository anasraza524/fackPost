import Fbpost from './fbpost'
import React, { useState } from "react";
import "./App.css";

//☀︎ ☽
 function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <div className={darkMode ? "dark-mode" : "light-mode"} >
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <div> 
      </div>
      < Fbpost style={{ backgroundColor: darkMode ? "#c96dfd" : "grey" }}   />
  </div>
  
    </>
  );
}
export default App;