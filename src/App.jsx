import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import MyExperience from "./components/MyExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Education from "./components/Education";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <ToastContainer/>
   
      <Header/>

      <Hero />
      <About />
      <Education/>
      <Skills />
      <MyExperience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
