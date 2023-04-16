import React, {useEffect, useState} from 'react';
import "./index.css"
import {useLocation, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
import UnderConstruction from "./pages/UnderConstruction";
import SmallHeaderButton from "./components/SmallHeaderButton/SmallHeaderButton";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("animate-fadeIn");

  useEffect(() => {
    setDisplayLocation(location)
  }, [location, displayLocation]);

  return (

    <>
      {
        location.pathname !== "/" &&
        <button className="fixed top-0 left-5 text-7xl z-10 text-white hover:scale-95 click:scale-95"
                onClick={() => navigate(-1)}>&lt;</button>
      }
      <div className={`bg-gradient-to-r from-black to-indigo-800 flex flex-row min-h-screen w-full`}>
        <div className=
               {
                 `text-white flex flex-grow justify-center items-center basis-10/12 md:basis-full`
               }
        >
          <Routes location={displayLocation}>
            <Route path="/" element={<Home/>} errorElement={<ErrorPage/>}/>
            <Route path="/me" element={<About/>} errorElement={<ErrorPage/>}/>
            <Route path="/experience" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
            <Route path="/you" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
            <Route path="/contact" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
          </Routes>
        </div>
        {location.pathname !== "/" && transitionStage === "animate-fadeIn" &&
          <nav className="basis-2/12 hidden md:flex flex-col justify-center items-end">
            <div className="">
              <SmallHeaderButton mainText={"About me"} to="/me"
                                 customCSS="outline-red-800 hover:bg-red-800/75 animate-homeSlideL7" index={0}/>
              <SmallHeaderButton mainText={"Experience"} to="/experience"
                                 customCSS="outline-green-800 hover:bg-green-800/75 animate-homeSlideL6" index={1}/>
              <SmallHeaderButton mainText={"About you"} to="/you"
                                 customCSS="outline-blue-700 hover:bg-blue-700/75 animate-homeSlideL5" index={2}/>
              <SmallHeaderButton mainText={"Contact"} to="/contact"
                                 customCSS="outline-yellow-500 hover:bg-yellow-500/75 animate-homeSlideL4" index={3}/>
            </div>
          </nav>
        }
      </div>
    </>
  );
}
