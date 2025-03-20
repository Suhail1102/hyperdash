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
        <div className=' min-h-screen container w-[80vw] flex justify-between gap-y-7 items-center flex-wrap overflow-hidden ' style={{margin:"auto" ,marginBottom:"10rem"}}>
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

        <section className='h-full container  w-full 'style={{margin:"10rem auto"}}>
            <div className=' grid grid-cols-3  h-full md:w-[80vw] gap-x-1 gap-y-5' style={{margin:" auto" , paddingRight:"5rem"}}>
               <img className='col-span-1 w-3/4' src={img1} alt="" />
               <img className='col-span-1 w-3/4' src={img2} alt="" />
               <img className='h-full w-full row-span-2  object-cover' src={imageRight} alt="" />
               <img className=' w-3/4' src={img3} alt="" />
               <img className='w-3/4 ' src={img4} alt="" />
                </div>
        </section>


        {/* section 3 */}
        
        <section className='h-[100vh] w-full sec-air relative text-white '>
        
        <div className='  container flex h-[100vh] items-end justify-start ' style={{margin:"auto"}}>
            <div className=' 'style={{paddingLeft:"8rem" , paddingBottom:"5rem"}}  >
                <h2 className='text-6xl' style={{margin:"2rem 0"}} >Air X</h2>
                <h3 className='text-3xl' style={{margin:"2rem 0"}}>Accelerate into a New Era</h3>
                <div className='flex justify-start gap-10 items-center' style={{margin:"2rem 0"}}>
                    <button className='bg-white text-xl text-black' style={{padding:"1rem 2rem"}}>Order Now</button>
                    <a href=""className='text-xl' >Learn More</a>
                </div>

            </div>

        </div>

        </section>


        
    </div>
  )
}

export default Features4