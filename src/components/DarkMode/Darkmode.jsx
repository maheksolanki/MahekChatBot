import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import "./DarkMode.css";
const Darkmode = () => {
    const[mode, setMode] = useState("dark-mode");
    // function toggle() {
    //     if(mode ==="darkMode"){
    //         setMode("lightMode");
    //     }
    //     else{
    //         setMode("darkMode");
    //     }
    // }

    useEffect(()=>{
        document.body.className = mode;
    },[mode])
    //dependency array ma mode apvathi jyare jyare mode ni value change thase tyare body ni class change thase
  return (
    <button className="mode-btn" onClick={()=>{
        mode === "dark-mode" ? setMode("light-mode") : setMode("dark-mode");
        // console.log(mode);
    }}>
        {mode === "dark-mode" ? <IoSunnyOutline/>: <IoMoonOutline />}
    </button>
  )
}

export default Darkmode
