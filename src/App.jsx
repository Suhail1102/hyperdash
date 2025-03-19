import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Features2 from './components/Features2'
import Features3 from './components/Features3'

function App() {

  return (
    <>
<HeroSection/>
<Features/>
<Features2/>
<Features3/>
    </>
  )
}

export default App
