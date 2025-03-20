import React from 'react'
import leftarrow from '../assets/leftarrow.png'
import rightarrow from '../assets/rightarrow.png'
import story1 from '../assets/story 1 Img.png'
import story2 from '../assets/story 2 Img.png'
import story3 from '../assets/story 3 Img.png'
import story4 from '../assets/story 4 Img.png'

export default function OurStory() {
  return (
    <>
    <div className='min-h-screen  w-full bg-[#1A1A1A] text-[#FFFFFB]'>

          <div className='container w-full flex justify-between items-baseline' style={{margin:"auto", padding: "9rem 8rem 3rem 8rem"}}>
             <span className='text-[36px]'>Our Stories</span>
             <div className='flex gap-10 items-center'>
                <img className='h-full w-full' src={leftarrow} alt="" />
                <img className='h-full w-full' src={rightarrow} alt="" />
             </div>
          </div>

          <div className='h-full flex flex-nowrap overflow-x-hidden justify-between  w-full gap-x-32'style={{ padding: "2rem 0 2rem 10rem"}}>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-full w-full object-contain' src={story1} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-full w-full object-contain' src={story2} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className=' h-full w-full object-contain' src={story3} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-82 w-full object-contain object-left' src={story4} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
          </div>
    </div>
    </>
  )
}
