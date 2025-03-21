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
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className=' max-w-[1440px]   max-h-[8629px] ' style={{margin:"auto"}}>
<HeroSection/>
<Features/>
<Features2/>
<Features3/>
<AirX/>
<NumericalSpecs/>
<Features4/>
<OurStory/>
<Footer/>
</div>

    </>
  )
}

export default App
