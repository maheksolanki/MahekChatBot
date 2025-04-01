import { useContext } from "react";
import Chatsection from "./components/chatsection/Chatsection";
import Sepration from "./components/sepration/Sepration";
import Sidebar from "./components/sidebar/sidebar";
// import { dataContext } from "./context/UserContext";

export const App = () =>{
  
  return (
    <>
    <Sidebar/>
    <Sepration/>
    <Chatsection/>
    </>
  );
}
