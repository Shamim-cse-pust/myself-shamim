import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import AwardAndAchievement from "./components/AwardAndAchievement";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <AwardAndAchievement />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
