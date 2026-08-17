import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Design from './components/design'

function App() {
  return (
    <div className="relative min-h-screen">

      <Design />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}

export default App