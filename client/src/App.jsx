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

  console.log(darkMode)

  return (
    <main className={`${darkMode.value ? "dark" : "light"}`}>
      <ThemeSwitcher darkMode={darkMode} />
      <h2 className="text-3xl font-bold center underline">
        Chat GPT Ascend
      </h2>
      <div className="grid grid-cols-4 gap-4 ">
      <ChatHistoryContainer darkMode={darkMode}/>
      <ChatbotContainer  darkMode={darkMode} />
      </div>

    </main>
  );
}