import React from 'react'
import Feature2 from '../assets/Features 2.2 image.png'

function Features2() {
  return (
  <>
  <div className='min-h-screen w-full flex justify-center items-center text-white' style={{backgroundColor:"#1A1A1A"}}>
    {/* left column */}
    <div className='h-full w-full ' style={{marginLeft:"8rem"}}>
      <h1  className='text-6xl' style={{marginBottom:"4rem"}}>Lexo Z</h1>
      <p className='text-lg w-1/2 text-start' style={{marginBottom:"4rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /><br />

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  <br /><br />

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
<div className='flex gap-6 items-center'>
    <button className='bg-white text-black text-lg' style={{padding:"1rem 3rem"}}>Order Now</button>
    <a  href='' className='  text-lg' style={{padding:"10px 8px"}}>Learn More</a>
</div>
    </div>

{/* right column */}
    <div className='h-full w-full'>
    <img className='h-full w-full object-cover' src={Feature2} alt="" />
  </div>
  </div>
  
  </>
  )
}

export default Features2