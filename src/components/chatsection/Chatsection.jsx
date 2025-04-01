import React, { useContext } from 'react'
import "./Chatsection.css"
import Darkmode from '../DarkMode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from '../../context/UserContext';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"
const Chatsection = () => {
let {send,input,setInput,showResult,resultData,recentPrompt,loading} = useContext(dataContext);

  return (
    <div className='chatsection'>
     <div className="topSection">

      {!showResult ? <div className="hadings">
        <span>Hello MAHEK</span>
        <span>I'm Your Own Assistant!</span>
        <span>What can I help you...?</span>
      </div> : <div className='resultbox'>
        <div className="userbox">
          <img src={user} alt="" width="45px" />
          <p>{recentPrompt}</p>
        </div>
        <div className="aibox">
          <img src={ai} alt=""  width="45px"/>

          {loading ? <div className='loader'>
            <hr />
            <hr />
            <hr />
          </div> : <p>{resultData}</p> }
          
        </div>
        </div>}
      
     </div>
     <div className="bottomSection">
      <input onChange={(e)=>{setInput(e.target.value)}} type="text" placeholder='Enter Your Prompt Here...' value={input}/>
      {input ? <button id='send-btn' onClick={()=>send(input)}>
        <LuSendHorizontal />
      </button> : null}
     
     <Darkmode/>
     </div>
    </div>
  )
}

export default Chatsection
