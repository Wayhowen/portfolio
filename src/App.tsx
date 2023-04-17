import React, {useEffect, useState} from 'react';
import "./index.css"
import {useLocation, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
import UnderConstruction from "./pages/UnderConstruction";
import SmallHeaderButton from "./components/SmallHeaderButton/SmallHeaderButton";
import { RxArrowLeft } from "react-icons/rx";
import {FaThumbsDown, GrContact, GrDocumentText, GrIteration, GrUserManager} from "react-icons/all";

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
        <RxArrowLeft className="fixed top-0 left-2 text-7xl z-10 text-white hover:scale-95 click:scale-95"
                onClick={() => navigate(-1)}>&lt;</RxArrowLeft>
      }
      <div className="bg-gradient-to-r from-black to-indigo-800 flex flex-row min-h-screen w-full">
        <div className="text-white flex flex-grow justify-center items-center basis-10/12 md:basis-full">
          <Routes location={displayLocation}>
            <Route path="/" element={<Home/>} errorElement={<ErrorPage/>}/>
            <Route path="/me" element={<About/>} errorElement={<ErrorPage/>}/>
            <Route path="/experience" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
            <Route path="/projects" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
            <Route path="/contact" element={<UnderConstruction/>} errorElement={<ErrorPage/>}/>
          </Routes>
        </div>
        {location.pathname !== "/" && transitionStage === "animate-fadeIn" &&
          <nav className="basis-2/12 hidden md:flex flex-col justify-center items-center border-l border-indigo-500/50 rounded-full gap-y-4">
              <SmallHeaderButton mainText={"About me"} to="/me"
                                 customCSS="outline-red-800 hover:bg-red-800/75 animate-homeSlideR4" index={0} icon={<GrUserManager size={40} className="icon"/>}/>
              <SmallHeaderButton mainText={"Experience"} to="/experience"
                                 customCSS="outline-green-800 hover:bg-green-800/75 animate-homeSlideR5" index={1} icon={<GrDocumentText size={40} className="icon"/>}/>
              <SmallHeaderButton mainText={"Projects"} to="/projects"
                                 customCSS="outline-blue-700 hover:bg-blue-700/75 animate-homeSlideR6" index={2} icon={<GrIteration size={40} className="icon"/>}/>
              <SmallHeaderButton mainText={"Contact"} to="/contact"
                                 customCSS="outline-yellow-500 hover:bg-yellow-500/75 animate-homeSlideR7" index={3} icon={<GrContact size={40} className="icon"/>}/>
          </nav>
        }
      </div>
    </>
  );
}
