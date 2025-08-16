import { useState } from 'react'
import './style.css'

import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import Features from './sections/features';
import About from "./sections/about";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

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
