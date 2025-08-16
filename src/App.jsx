import { useState } from 'react'
import './style.css'

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from './sections/Features';
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  )
}

export default App
