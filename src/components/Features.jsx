import React from 'react'
import Features1 from '../assets/Features 2.1 video.png'

export default function Features() {
  return (
    <div className='min-h-screen text-white flex justify-center items-center ' style={{backgroundColor:"#1A1A1A"}}>
    
    <div className=' features1 relative ' >
        <img className='h-full w-fulll object-contain' src={Features1} alt="Features 2.1 video" />
    </div>
    
    </div>
  )
}
