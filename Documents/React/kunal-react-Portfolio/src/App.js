import React from "react";
import NavPanel from "./Components/NavPanel";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import TechStack from "./Pages/techStack";
import Experience from "./Pages/experiance";
// import Achievement from "./Pages/Achivement";

function App() {
  return (
    <>
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
