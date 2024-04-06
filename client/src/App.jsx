import React from "react";
import { Button } from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import './App.css'
import ThemeSwitcher from "./components/ThemeSwitcher";



export default function App() {

  const darkMode = useDarkMode(false, {
    classNameDark: "dark-mode",
    classNameLight: "light-mode",
    global: window, // Just pass this as a config option
  });

  return (
    <main className={`${darkMode ? darkMode.classNameDark : darkMode.classNameLight }`}>
      <ThemeSwitcher darkMode={darkMode} />
      <h2 className="text-3xl font-bold center underline">
        Chat GPT Ascend
      </h2>
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
       Test NextUI Component Button
      </Button>
    </main>
  );
}



