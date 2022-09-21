import NavBar from './navbar'
import Fbpost from './fbpost'
import LeftBar from './leftBar'
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
      <div >
      <LeftBar />
     <div className='fbpost'> <Fbpost /></div>
      </div>
    </div>
  
  
   
  );
}
export default App;