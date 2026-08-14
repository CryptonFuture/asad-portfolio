import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Footers from "./components/Footers";
import Knowledge from "./components/Knowledge";

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Knowledge />
        <Education />
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footers />
      {/* <Footer /> */}
   </>
     
  )
}

export default App
