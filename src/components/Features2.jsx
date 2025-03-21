import React from 'react'
import Feature2 from '../assets/f2.png'

function Features2() {
  return (
  <>
  <div className='max-h-[801px] w-full flex justify-between items-center text-white' style={{backgroundColor:"#1A1A1A",}}>
    {/* left column */}
    <div className='max-h-[475] max-w-[471px] ' style={{paddingLeft:"134px"}}>
      <h1  className='text-[48px]' style={{marginBottom:"3rem"}}>Lexo Z</h1>
      <h1  className='text-[30px]' style={{marginBottom:"3rem"}}>Accelerate into a New Era</h1>
      <p className='text-[13.5px] text-start max-w-[370px] h-[160px]' style={{marginBottom:"4rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /><br />

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  <br /><br />

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat </p>
<div className='flex gap-6 items-center'>
    <button className='w-[171.5px] h-[57px] bg-white text-black text-[18px]' style={{padding:"15px 30px"}}>Order Now</button>
    <a  href='' className=' text-[18px]' >Learn More</a>
</div>
    </div>

{/* right column */}
    <div className='max-h-[810px] max-w-[712.5px]'>
    <img className='h-full w-full ' src={Feature2} alt="Features2" />
  </div>
  </div>
  
  </>
  )
}

export default Features2