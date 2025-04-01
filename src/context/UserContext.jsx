import React, { createContext, useState } from 'react'
import run from '../gemini';
export const dataContext = createContext();

const UserContext = ({children}) => {

    const [input, setInput] = useState("");

    const [showResult , setShowResult] = useState(false);
    const [loading , setLoading] = useState(false);
    const[resultData,setResultData] = useState("");
    const [recentPrompt , setRecentPromt] = useState("");
    const [prevPrompt ,setPrevPrompt] = useState([]);

    function newchat(){
        setShowResult(false);
        setLoading(false);
    }
   async function send(input){
        setResultData("");
        setShowResult(true);
        setRecentPromt(input);
        setLoading(true);
        setPrevPrompt(prev=>[...prev,input]); // this is use for slider in which previous prompts are shows , so for that perpose we use array and store previous result
        let response = await run(input);
        setResultData(response.split("**")&&response.split("*"));
        setInput("");
        setLoading(false);
    }
    // Without () → We pass the function reference (so it can be called later).
    // With () → We execute the function immediately (which we don’t want).
    const data = {
        input,
        setInput,   
        send,
        loading,
        setLoading,
        showResult,
        setShowResult,
        resultData,
        setResultData,
        recentPrompt,
        prevPrompt,
        newchat,
    }
  return (
   <>
   <dataContext.Provider value={data}>
   {children}
   </dataContext.Provider>
   </>
  )
}

export default UserContext;
