import React from 'react'
import Feature3 from '../assets/Features 2.3 img.png'

function Features3() {
  return (
    <>
    <div className='max-h-[899px] overflow-hidden  w-full bg-white  '>
        <div className='w-[50rem] h-full  relative top-80 z-1 left-72'>
        <h2 className='text-6xl' style={{marginBottom:"2rem"}}>Air X</h2>

      <h3 className='text-4xl tracking-wider font-bold'style={{marginBottom:"3rem"}}> Accelerate into a New Era</h3>

      <p className='text-xl w-1/2'style={{marginBottom:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
      <div className='flex gap-6 items-center'style={{marginBottom:"2rem"}}>
    <button className='bg-black text-white text-lg' style={{padding:"1rem 3rem"}}>Order Now</button>
    <a  href='' className=' font-semi text-xl' style={{padding:"10px 8px"}}>Learn More</a>
</div>
        </div>

        <div className='h-[580px] w-full bg-black mx-auto  flex justify-center items-center'>
            <img className='w-full h-full object-cover' src={Feature3} alt="" />
        </div>

        
    </div>
    </>
  )
}

export default Features3