import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import "./Sidebar.css";
import { dataContext } from '../../context/UserContext';
const Sidebar = () => {
    const[extend , setExtend] = useState(false);
    const {send,prevPrompt,newchat} = useContext(dataContext);

    async function loadPrevPrompt(prompt){
        
      await send(prompt);
    }
  return (
    <div className='sidebar'>
      <GiHamburgerMenu id='ham' onClick={
        ()=>{
            setExtend(prev=>!prev); 
        }
      }/>
      <div className="newchat" onClick={()=>{newchat()}}>
        <FaPlus />
        {extend ?<p>New Chat</p> : null}
      </div>

      {/* we use map method to show all prompt one by one in side bar */}

      {prevPrompt.map((item,index) => {
         return(
          <div key={index} className="recent" onClick={()=>{
            loadPrevPrompt(item);
          }}>
         <FaRegMessage />
         {extend ?<p>{item.slice(0,10)+"..."}</p> : null}
       </div>
         )
      })}
     
    </div>
  )
}

export default Sidebar
