import React from 'react'
import Feature3 from '../assets/f22.png'

function Features3() {
  return (
    <>
    <div className='h-[899px] max-h-[899px]  w-full bg-white  relative ' >
        <div className='max-w-[463px] max-h-[375.01px] absolute left-[134px] top-[173px] z-10' >
        <h2 className='text-[52.11px]' >Air X</h2>

      <h3 className='text-[36.32px] 'style={{margin:"9.8px 0"}}> Accelerate into a New Era</h3>

      <p className='text-[16.34px] max-w-[413px]'style={{marginBottom:"2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
      <div className='flex gap-6 items-center'style={{marginBottom:"2rem"}}>
    <button className='bg-black text-white h-[69.01px] w-[207.93] text-[21.79px]' style={{padding:"1rem 3rem"}}>Order Now</button>
    <a  href='' className=' text-[21.79px]' style={{marginLeft:"30px"}}>Learn More</a>
</div>
        </div>

        <div className='max-h-[579.21px] w-full absolute top-[256px] left-0 '>
            <img className='w-full h-full object-cover' src={Feature3} alt="" />
        </div>

        
    </div>
    </>
  )
}

export default Features3