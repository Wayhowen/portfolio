import React from 'react';
import HeaderButton from "./components/HeaderButton/HeaderButton";
import ConsoleText from "./components/ConsoleText/ConsoleText";
import "./index.css"

function App() {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col border-2 w-full h-screen m-3">
        <header className="h-1/2 mx-auto">
          <ConsoleText mainText="Jakub Sowa - Fullstack Developer"/>
        </header>
        <main className="w-1/2 h-1/2 mx-auto">
          <HeaderButton mainText={"1"}/>
          <HeaderButton mainText={"2"}/>
          <HeaderButton mainText={"3"}/>
          <HeaderButton mainText={"4"}/>
        </main>
      </div>
    </div>
  );
}

export default App;
