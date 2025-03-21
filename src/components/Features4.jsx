import React from 'react';
import DesignImage from '../assets/DesignImg.png';
import PerformanceImg from '../assets/PerformanceImg.png'
import InteriorImg from '../assets/InteriorsImg.png'
import sustainable from '../assets/Sustainableimg.png'
import AirImage from '../assets/AirXimg.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import imageRight from '../assets/imgRightLarge.png'



function Features4() {
  return (
    <div className='w-full h-[2423px] max-h-[2423px]  bg-[#1A1A1A] text-white'>

        {/* section1 */}
        <div className=' h-[901px] max-w-[1182px] flex justify-between gap-y-14  flex-wrap  ' style={{margin:"auto"}}>
        <div className='max-w-[328.43px] h-[352.24px] max-h-[352.24px]  flex flex-col justify-between' >
            <img className='w-full h-[286px] object-contain object-top' src={DesignImage} alt="" />
        <span className='text-center block text-[24px] ' >Impeccable Design</span>
        </div>

        <div className='w-[328.43px] h-[352.24px] max-h-[352.24px] flex flex-col justify-between'>
            <img className='w-full h-[286px] object-contain object-top' src={PerformanceImg} alt="" />
        <span className='text-center block text-[24px]'>Elevated Performance</span>
        </div>


        <div className='w-[328.43px] h-[352.24px] max-h-[352.24px] flex flex-col justify-between'>
            <img className='w-full h-[286px] object-contain object-top' src={InteriorImg} alt="" />
        
        <span className='text-center block text-[24px]'>Great interiors</span>
        </div>


        <div className='max-w-[472px] max-h-[472px]  '>
            <img className=' object-contain ' src={sustainable} alt="" />
            </div>

        <div className='w-[589px]  flex flex-col gap-5'>
            <img className='w-full h-[270px] object-cover ' src={AirImage} alt="" />
            <div className='flex flex-col gap-5'>
                <h2 className='text-[27px] '>Drive to a sustainable future</h2>
                <span className='text-[18px] block ' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>

            </div>    
       
        </div>
            
        </div>

        {/* section-2 */}

        <section className='max-h-[550px] h-[550px] w-[1149px] max-w-[1149px]'style={{ margin:" 8rem auto", marginTop:" 10rem"}}>
            <div className=' grid grid-cols-3  h-full w-full justify-items-start gap-y-5 ' style={{margin:" auto" }}>
               <img className='col-span-1 h-[256px] w-[257px]' src={img1} alt="" />
               <img className='col-span-1 h-[256px] w-[257px]' src={img2} alt="" />
               <img className='h-[550px] w-[443px] row-span-2 object-cover' src={imageRight} alt="" />
               <img className=' h-[256px] w-[257px]' src={img3} alt="" />
               <img className=' h-[256px] w-[257px]' src={img4} alt="" />
                </div>
        </section>


        {/* section 3 */}
        
        <section className='h-[633px] w-full sec-air text-white relative'>
        
        <div className='h-full w-full absolute'>
            <div className=' absolute top-[250px]   left-[134px]'>
                <h2 className='text-[48px]' style={{margin:"2rem 0"}} >Air X</h2>
                <h3 className='text-[27px]' style={{margin:"2rem 0"}}>Accelerate into a New Era</h3>
                <div className='flex justify-start gap-10 items-center' style={{margin:"2rem 0"}}>
                    <button className='bg-white  text-black cursor-pointer text-[18px] h-[57px] w-[171px]'>Order Now</button>
                    <a href=""className='text-[18px]' >Learn More</a>
                </div>

            </div>

        </div>

        </section>

    </div>
  )
}

export default Features4