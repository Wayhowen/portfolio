import React from 'react';
import HeaderButton from "../components/HeaderButton/HeaderButton";
import ConsoleText from "../components/ConsoleText/ConsoleText";
import "../index.css"

function Home() {
  return (
    <div className={`flex flex-col`}>
      <main className="space-y-2">
        <div className="flex flex-row flex-wrap justify-center items-center max-w-2xl mx-auto">
          <HeaderButton mainText={"About me"} to="/me" customCSS="outline-red-800 hover:bg-red-800/75 animate-homeSlideL4" index={0}/>
          <HeaderButton mainText={"Experience"} to="/experience" customCSS="outline-green-800 hover:bg-green-800/75 animate-homeSlideR5" index={1}/>
          <HeaderButton mainText={"Projects"} to="/projects" customCSS="outline-blue-700 hover:bg-blue-700/75 animate-homeSlideL6" index={2}/>
          <HeaderButton mainText={"Contact"} to="/contact" customCSS="outline-yellow-500 hover:bg-yellow-500/75 animate-homeSlideR7" index={3}/>
        </div>
      </main>
    </div>
  );
}

export default Home;
