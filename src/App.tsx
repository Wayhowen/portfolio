import React from 'react';
import HeaderButton from "./components/HeaderButton/HeaderButton";
import ConsoleText from "./components/ConsoleText/ConsoleText";
import "./index.css"

function App() {
  return (
    <div className="bg-black text-white flex justify-center items-center min-h-screen">

      <div className="flex flex-col">
        <header className="flex flex-row p-4 sm:pt-16">
            <ConsoleText mainText="Jakub Sowa - Fullstack Developer"/>
        </header>
        <main className="space-y-2">
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"About me"} customCSS="bg-red-800"/>
            <HeaderButton mainText={"Projects"} customCSS="bg-green-800"/>
          </div>
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"Contact me"} customCSS="bg-blue-800"/>
            <HeaderButton mainText={"4"} customCSS="bg-yellow-400"/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
