// import { useState } from 'react';
import { BsSunFill  } from "react-icons/bs";
import { BsFillMoonFill  } from "react-icons/bs";

const navBar = (props) => {return (
    <div className="siderbar"  >
        <button type="button"
        className="toogleButton"
         onClick={props.toggleThemeMode}>
            {(props.mode === "light")
             ? <BsFillMoonFill/>  : 
             <BsSunFill/>}</button>




       

    </div>
);
}

export default navBar;