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
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";
import PersonalDetails from "./components/PersonalDetails";
import References from "./components/References";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <AwardAndAchievement />
        <Certifications />
        <PersonalDetails />
        <References />
      </main>
      <Footer />
    </>
  );
};

export default App;
