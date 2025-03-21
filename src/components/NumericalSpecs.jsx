import React from 'react'

export default function NumericalSpecs() {
  return (
<>

  <div className='h-[525px] max-h-[525px] w-full flex justify-center items-center bg-[#1A1A1A] text-white'>
     <div className='container h-full w-full flex justify-around items-center'>

        {/* 1col */}
         <div className='h-[178] w-[137] flex flex-col items-center justify-between'>
            <span className='block text-[12px] w-full text-center ' style={{margin:'2rem 0'}}>Max Power</span>
            <h2 className='text-[48px] '>1200+</h2>
            <span className=' block w-full text-center  text-[36px]  font-extralight' style={{margin:'2rem 0'}}>hp</span>
         </div>

           {/* 2col */}
           <div className='h-[178] w-[137] flex flex-col items-center justify-between'>
            <span className='block text-[12px] w-full text-center ' style={{margin:'2rem 0'}}>EPA estimated range up to</span>
            <h2 className='text-[48px] '>516</h2>
            <span className=' block w-full text-center text-[36px] font-extralight' style={{margin:'2rem 0'}}>mi</span>
         </div>

           {/* 3col */}
           <div className='h-[178] w-[137] flex flex-col items-center justify-between'>
            <span className='block text-[12px] w-full text-center 'style={{margin:'2rem 0'}}>minutes to charge 200 miles</span>
            <h2 className='text-[48px] '>12</h2>
            <span className=' block w-full text-center text-[36px] font-extralight'style={{margin:'2rem 0'}}>mins</span>
         </div>


           {/* 4col */}
           <div className='h-[178] w-[137] flex flex-col items-center justify-between'>
            <span className='block text-[12px] w-full text-center ' style={{margin:'2rem 0'}}>0-60 mph</span>
            <h2 className='text-[48px] '>&lt;2</h2>
            <span className=' block w-full text-center text-[36px] font-extralight' style={{margin:'2rem 0'}}>sec</span>
         </div>
     </div>

 
  </div>
</>
  )
}
