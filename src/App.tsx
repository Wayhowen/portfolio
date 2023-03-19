import React from 'react';
import HeaderButton from "./components/HeaderButton/HeaderButton";
import ConsoleText from "./components/ConsoleText/ConsoleText";
import "./index.css"

function App() {
  return (
    <div className="bg-black text-white flex justify-center items-center h-screen">

      <div className="flex-col">
        <header className="flex-row">
            <ConsoleText mainText="Jakub Sowa - Fullstack Developer"/>
        </header>
        <main>
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"1"}/>
            <HeaderButton mainText={"2"}/>
          </div>
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"3"}/>
            <HeaderButton mainText={"4"}/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
