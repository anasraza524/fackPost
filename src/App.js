import NavBar from './navbar'
import Fbpost from './fbpost'
import React, { useState } from "react";
import "./App.css";

//☀︎ ☽
 function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const toggleThemeMode = () => {
    if (themeMode === "dark") {
    setThemeMode("light")
    }
    else{
    setThemeMode("dark")
    }
    // console.log(themeMode)
  }
  return (
   
   

      <div className={`App ${themeMode==="dark"?"dark":"light"}`}  >
      <NavBar toggleThemeMode={toggleThemeMode} mode={themeMode}/>
      <Fbpost />
      
    </div>
  
  
   
  );
}
export default App;