import React, {useEffect, useState} from 'react';
import "./index.css"
import {useLocation, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import About from "./pages/About";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

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
      {
        location.pathname !== "/" &&
        <button className="fixed top-0 left-10 text-7xl text-white z-10 hover:scale-95 click:scale-95" onClick={() => navigate(-1)}>&lt;</button>
      }
      <Routes location={displayLocation}>
        <Route path="/" element={<Home/>} errorElement={<ErrorPage/>}/>
        <Route path="/me" element={<About/>} errorElement={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}
