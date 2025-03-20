import React from 'react'

export default function NumericalSpecs() {
  return (
<>

  <div className='min-h-[525px] w-full flex justify-center items-center bg-[#1A1A1A] text-white'>
     <div className='container h-full w-full flex justify-around items-center'>

        {/* 1col */}
         <div>
            <span className='block text-xs font-extralight w-full text-center ' style={{margin:'2rem 0'}}>Max Power</span>
            <h2 className='text-7xl '>1200+</h2>
            <span className=' block w-full text-center text-4xl font-extralight' style={{margin:'2rem 0'}}>hp</span>
         </div>

           {/* 2col */}
           <div>
            <span className='block text-xs font-extralight w-full text-center ' style={{margin:'2rem 0'}}>EPA estimated range up to</span>
            <h2 className='text-7xl '>516</h2>
            <span className=' block w-full text-center text-4xl font-extralight' style={{margin:'2rem 0'}}>mi</span>
         </div>

           {/* 3col */}
           <div>
            <span className='block text-xs font-extralight w-full text-center ' style={{margin:'2rem 0'}}>minutes to charge 200 miles</span>
            <h2 className='text-7xl '>12</h2>
            <span className=' block w-full text-center text-4xl font-extralight' style={{margin:'2rem 0'}}>mins</span>
         </div>


           {/* 4col */}
           <div>
            <span className='block text-xs font-extralight w-full text-center ' style={{margin:'2rem 0'}}>0-60 mph</span>
            <h2 className='text-7xl '>&lt;2</h2>
            <span className=' block w-full text-center text-4xl font-extralight' style={{margin:'2rem 0'}}>sec</span>
         </div>
     </div>

 
  </div>
</>
  )
}
