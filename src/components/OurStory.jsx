import React from 'react'
import leftarrow from '../assets/leftarrow.png'
import rightarrow from '../assets/rightarrow.png'
import story1 from '../assets/Story1Img.png'
import story2 from '../assets/Story2Img.png'
import story3 from '../assets/Story3Img.png'
import story4 from '../assets/Story4Img.png'

export default function OurStory() {
  return (
    <>
    <div className='h-[8104px] max-h-[810px] overflow-hidden w-full bg-[#1A1A1A] text-[#FFFFFB]'>

          <div className='w-full flex justify-between items-baseline' style={{margin:"auto", padding: "0rem 0 3rem 8rem"}}>
             <span className='text-[36px]'>Our Stories</span>
             <div className='flex w-[138px] h-[38px] items-center gap-[43px] 'style={{marginRight:"3rem"}} >
                <img className='h-[48px] w-[48px]' src={leftarrow} alt="" />
                <img className='h-[48px] w-[48px]' src={rightarrow} alt="" />
             </div>
          </div>

          <div className='h-full w-full  flex flex-nowrap overflow-x-hidden justify-between   gap-x-[20px]' style={{paddingLeft:"134px"}}>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-[330px] w-full object-fill ' src={story1} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-[330px] w-full object-contain' src={story2} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className=' h-[330px] w-full object-contain' src={story3} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
             <div className='min-w-[318px] h-[457px] flex flex-col gap-[20px]'>
                <img className='h-[330px] w-full object-cover object-left-top' src={story4} alt="" />
                <span className='text-[18px]'>Lorem Ipsum</span>
                <p className='h-full w-full text-start text-[13.5px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
          </div>
    </div>
    </>
  )
}
