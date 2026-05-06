import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonals from "./sections/Testimonals";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";
import React from "react";
import IntroAnimation from "./components/IntroAnimation";
import Contribution from "./sections/Contribution";

export default function App() {

    const[introDone, setIntroDone] = React.useState(false);

  return (

    <>
    {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
    <div className="relative gradient text-white">
      <CustomCursor />
      {/* <ParticleBackground /> */}
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contribution />
      <Testimonals />
      <Contacts />
      <Footer />

    </div>
    )}
    </>
  )
}


