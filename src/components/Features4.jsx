import React from 'react'
import DesignImage from '../assets/Design img.png'
import PerformanceImg from '../assets/Performance img.png'
import InteriorImg from '../assets/Interiors img.png'
import sustainable from '../assets/Sustainable img.png'
import AirImage from '../assets/Air X img.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import imageRight from '../assets/imgRightLarge.png'
import AirImg2 from '../assets/Air X Img2.png'


function Features4() {
  return (
    <div className='w-full h-full bg-[#1A1A1A] text-white'>

        {/* section1 */}
        <div className='container min-h-screen w-[68vw] flex justify-between gap-y-5 items-center flex-wrap ' style={{margin:"auto"}}>
        <div ><img className='w-full h-full' src={DesignImage} alt="" />
        <span className='text-center block text-xl' style={{paddingTop:"2rem"}}>Impeccable Design</span>
        </div>

        <div><img src={PerformanceImg} alt="" />
        <span className='text-center block text-xl' style={{paddingTop:"2rem"}}>Elevated Performance</span>
        </div>
        <div><img src={InteriorImg} alt="" />
        
        <span className='text-center block text-xl' style={{paddingTop:"2rem"}}>Great interiors</span>
        </div>
        <div><img src={sustainable} alt="" /></div>
        <div>
            <img src={AirImage} alt="" />
            <div style={{marginTop:"2rem"}}>
                <h2 className='text-2xl'>Drive to a sustainable future</h2>
                <span className='font-extralight text-base block w-3/4' style={{marginTop:"2rem" , paddingBottom:"3rem"}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </span>

            </div>    
       
        </div>
            
        </div>

        {/* section-2 */}

        <section className='h-full w-full'style={{marginTop:" 10rem"}}>
            <div className='container grid grid-cols-3  h-full w-[68vw] gap-y-10 ' style={{margin:" auto" , paddingRight:"5rem"}}>
               <img className='col-span-1 ' src={img1} alt="" />
               <img className='col-span-1 ' src={img2} alt="" />
               <img className='h-full w-full row-span-2 object-cover' src={imageRight} alt="" />
               <img className=' ' src={img3} alt="" />
               <img className=' ' src={img4} alt="" />
                </div>
        </section>


        {/* section 3 */}
        
        <section className='min-h-screen w-full sec-air text-white relative'>
        
        <div className='container h-full w-full absolute'>
            <div className=' container  absolute bottom-48   left-72'>
                <h2 className='text-6xl' style={{margin:"2rem 0"}} >Air X</h2>
                <h3 className='text-3xl' style={{margin:"2rem 0"}}>Accelerate into a New Era</h3>
                <div className='flex justify-start gap-10 items-center' style={{margin:"2rem 0"}}>
                    <button className='bg-white text-xl text-black' style={{padding:"1rem 2rem"}}>Order Now</button>
                    <a href=""className='text-xl' >Learn More</a>
                </div>

            </div>

        </div>

        </section>

        <section className='min-h-screen w-full'>
          
        </section>

    </div>
  )
}

export default Features4