import React from 'react'

function Footer() {
    return (
        <>
            <div className='max-h-[569px] h-[569px] w-full text-white overflow-hidden' style={{ paddingLeft: "134px" }} >
                {/* subscribe */}
                <div className='w-[408px] h-[135px] flex flex-col gap-[33px]' >
                    <h2 className='text-[30px] text-white'>Subscribe to our newsletter</h2>
                    <div className='relative'>
                        <input className='w-[122px] h-23px text-[#808080] text-[15px] font-light ' type="email" name="email" placeholder='enter your email' />
                        <span className='text-[48px] absolute  right-10 bottom-[-30px]'>&rarr;</span>
                    </div>
                    <hr className='w-[394px] text-[#808080] border ' />

                </div>


                <div className='flex justify-between' style={{marginTop:"8rem"}}>
                    {/* Navigation */}
                    <div className='w-[376.5px] h-[158px] flex justify-between'>
                        <div className=' text-[21px] h-full w-full flex flex-col justify-between'>
                            <span className='block'>Air X</span>
                            <span className='block'>Lexo Z</span>
                            <span className='block '>Gravity 9</span>
                        </div>
                        <div className=' text-[18px] h-full w-full flex flex-col justify-between'>
                        <span className='block'>Fleet</span>
                            <span className='block'>Company</span>
                            <span className='block'>Stories</span>
                        </div>

                    </div>


                    {/* Features */}
                    <div className='w-[376.5px] h-[158px] flex justify-between'>
                        <div className=' text-[13.5px] h-full w-full flex flex-col justify-between'>
                            <span>Purchasing</span>
                            <span className='block'>Charging</span>
                            <span className='block'>Insurance</span>
                            <span className='block'>Service</span>
                        </div>
                        <div className=' text-[13.5px]h-full w-full flex flex-col justify-between'>
                        <span className='block'>Spaces</span>
                            <span className='block'>Investors</span>
                            <span className='block'>Career</span>
                            <span>Contact Us</span>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer