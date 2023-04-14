import React, {useEffect, useState} from 'react';
import "./index.css"
import {useLocation, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import About from "./pages/About";

export default function App() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("animate-fadeIn");

  useEffect(() => {
    console.log(location)
    if (location !== displayLocation) setTransistionStage("animate-fadeOut");
  }, [location, displayLocation]);

  return (
    <div className={`bg-black text-white flex justify-center items-center min-h-screen ${transitionStage}`}
         onAnimationEnd={() => {
           if (transitionStage === "animate-fadeOut") {
             setTransistionStage("animate-fadeIn");
             console.log("transition")
             setDisplayLocation(location);
           }
         }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home/>} errorElement={<ErrorPage/>}/>
        <Route path="/me" element={<About/>} errorElement={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
