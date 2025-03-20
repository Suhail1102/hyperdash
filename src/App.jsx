import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Features2 from './components/Features2'
import Features3 from './components/Features3'
import AirX from './components/AirX'
import NumericalSpecs from './components/NumericalSpecs'
import Features4 from './components/Features4'
import OurStory from './components/OurStory'

function App() {

  return (
    <>
<HeroSection/>
<Features/>
<Features2/>
<Features3/>
<AirX/>
<NumericalSpecs/>
<Features4/>
<OurStory/>

    </>
  )
}

export default App
