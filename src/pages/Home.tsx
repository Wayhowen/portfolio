import React from 'react';
import HeaderButton from "../components/HeaderButton/HeaderButton";
import ConsoleText from "../components/ConsoleText/ConsoleText";
import "../index.css"

function Home() {
  return (
    <div className={`flex flex-col`}>
      <header className="flex flex-row p-4 justify-center sm:pt-8">
        <ConsoleText mainText="Jakub Sowa - Fullstack Developer"/>
      </header>
      <main className="space-y-2">
        <div className="flex flex-row flex-wrap justify-center items-center max-w-2xl mx-auto">
          <HeaderButton mainText={"About me"} to="/me" customCSS="bg-red-800 animate-homeSlideL4" index={0}/>
          <HeaderButton mainText={"Experience"} to="/experience" customCSS="bg-green-800 animate-homeSlideR5" index={1}/>
          <HeaderButton mainText={"About you"} to="/you" customCSS="bg-blue-800 animate-homeSlideL6" index={2}/>
          <HeaderButton mainText={"Contact"} to="/contact" customCSS="bg-yellow-500 animate-homeSlideR7" index={3}/>
        </div>
      </main>
    </div>
  );
}

export default Home;
