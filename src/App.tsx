import React, {useEffect, useState} from 'react';
import "./index.css"
import {useLocation, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
import UnderConstruction from "./pages/UnderConstruction";

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

    <>
      {
        location.pathname !== "/" &&
        <button className="fixed top-0 left-5 text-7xl z-10 text-white hover:scale-95 click:scale-95"
                onClick={() => navigate(-1)}>&lt;</button>
      }
      <div className=
             {
        `bg-gradient-to-r from-black to-indigo-800
        text-white flex justify-center items-center min-h-screen ${transitionStage}`
      }
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
          <Route path="/experience" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
          <Route path="/you" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
          <Route path="/contact" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
        </Routes>
      </div>
    </>
  );
}
