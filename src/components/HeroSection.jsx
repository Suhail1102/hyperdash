import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <>
        <div className='md:min-h-screen min-h-96 hero w-full text-white relative '>
    <Navbar/>

    <div className='absolute top-[650px] left-[50%] '>
        <button className='w-[90px] h-[32px] border  cursor-pointer'>Test Drive</button>
    </div>
    </div>
    </>
  )
}

export default HeroSection