import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <>
        <div className='md:min-h-screen min-h-96 hero max-w-screen text-white relative '>
    <Navbar/>

    <div>
        <button className='border  absolute top-[80%] left-[50%] cursor-pointer'  style={{padding:"7px"}}>Test Drive</button>
    </div>
    </div>
    </>
  )
}

export default HeroSection