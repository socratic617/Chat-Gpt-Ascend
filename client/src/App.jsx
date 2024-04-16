import React from "react";
import { Button } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import './App.css'
import ThemeSwitcher from "./components/ThemeSwitcher";
import ChatbotContainer from "./components/ChatbotContainer";
import { ChatHistoryContainer } from "./components/ChatHistoryContainer";



export default function App() {

  const darkMode = useDarkMode(false, {
    global: window // Just pass this as a config option
  });

  return (
    <div className={`${darkMode.value ? "dark" : "light"}`}>
       <h2 className="text-3xl font-bold center p-7" style={{fontFamily: "League Gothic", letterSpacing: ".05rem", color: "#ed1c24"}}>
        ResilentGPT
      </h2>
      <ThemeSwitcher darkMode={darkMode} />
      <div className="grid grid-cols-4 gap-4 ">
      <ChatHistoryContainer darkMode={darkMode}/>
      <ChatbotContainer  darkMode={darkMode} />
    
      </div>

    </div>
  );
}