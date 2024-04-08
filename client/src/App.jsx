import React from "react";
import { Button } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import './App.css'
import ThemeSwitcher from "./components/ThemeSwitcher";
import ChatbotContainer from "./components/ChatbotContainer";
import UserCard  from "./components/UserCard";





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
      <ChatbotContainer darkMode={darkMode} />
      <UserCard darkMode={darkMode}/>
    </main>
  );
}