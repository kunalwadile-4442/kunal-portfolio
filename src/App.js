import React from "react";
import NavPanel from "./Components/NavPanel";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import TechStack from "./Pages/techStack";
import Experience from "./Pages/experiance";
import ClickSpark from "./Components/ClickSpark";
import SplashCursor from "./Components/SplashColors";
// import Achievement from "./Pages/Achivement";

function App() {
  return (
    <>
    <SplashCursor/>
    <ClickSpark/>
      <Home />
      <NavPanel />
      <About />
      <TechStack />
      <Projects />
      {/* <Achievement /> */}
      <Experience />
      <Contact />
    </>
  );
}


export default App;
