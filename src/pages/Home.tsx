import React from 'react';
import HeaderButton from "../components/HeaderButton/HeaderButton";
import ConsoleText from "../components/ConsoleText/ConsoleText";
import "../index.css"

function Home() {
  return (
    <div className="bg-black text-white flex justify-center items-center min-h-screen">

      <div className="flex flex-col">
        <header className="flex flex-row p-4 sm:pt-16">
            <ConsoleText mainText="Jakub Sowa - Fullstack Developer"/>
        </header>
        <main className="space-y-2">
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"About me"} to="/me" customCSS="bg-red-800"/>
            <HeaderButton mainText={"Experience"} to="/experience" customCSS="bg-green-800"/>
          </div>
          <div className="flex flex-row justify-center flex-wrap">
            <HeaderButton mainText={"About you"} to="/you" customCSS="bg-blue-800"/>
            <HeaderButton mainText={"Contact"} to="/contact" customCSS="bg-yellow-500"/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
