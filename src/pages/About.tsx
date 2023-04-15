import React from 'react';
import "../index.css"
import SmallHeaderButton from "../components/SmallHeaderButton/SmallHeaderButton";

function About() {
  return (
    <div className="flex flex-col">
      <header className="flex flex-row justify-center items-center max-w-2xl mx-auto">
        <SmallHeaderButton mainText={"About me"} to="/me" customCSS="bg-red-800 animate-homeSlideL7" index={0}/>
        <SmallHeaderButton mainText={"Experience"} to="/experience" customCSS="bg-green-800 animate-homeSlideL6" index={1}/>
        <SmallHeaderButton mainText={"About you"} to="/you" customCSS="bg-blue-800 animate-homeSlideL5" index={2}/>
        <SmallHeaderButton mainText={"Contact"} to="/contact" customCSS="bg-yellow-500 animate-homeSlideL4" index={3}/>
      </header>
      <main className="space-y-2">
        <div className="flex flex-row flex-wrap justify-center items-center max-w-2xl mx-auto">
          <div className="w-96 h-96 bg-white"/>

        </div>
      </main>
    </div>
  );
}

export default About;
