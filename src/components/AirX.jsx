import React from 'react'
import AirXimg from '../assets/AirX.png'

function AirX() {
    return (
        <>
            <div className='min-h-screen w-full flex justify-end items-center airx text-white'>

                {/* airx specification */}
                <div className='w-[40%] h-full ' >
                    <h2 className='text-3xl text-start' style={{ marginBottom: "3rem" }}>Model Air X Specifications</h2>


                    {/* 1row */}

                    <div className='w-full h-full flex justify-start gap-40 font-extralight'>

                        {/* col-1 */}
                        <div className='text-lg font-extralight'>

                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Range (EPA est.)</span>
                                <span>Up to 300 miles</span>
                            </div>

                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Peak Power</span>
                                <span>400 hp</span>
                            </div>

                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Towing</span>
                                <span>2000 pounds</span>
                            </div>

                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Drag Coefficient</span>
                                <span>0.28 cd</span>
                            </div>

                        </div>

                        {/* col2 */}

                        <div className='text-lg font-extralight'>
                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Acceleration</span>
                                <span>4.5s 0-60 mph</span>
                            </div>


                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Wheels</span>
                                <span>19’’ or 20’’</span>
                            </div>
                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Seating</span>
                                <span>Up to 5</span>
                            </div>

                            <div className='' style={{ margin: "2rem 0" }}>
                                <span className='flex flex-col'>Top Speed</span>
                                <span>130 mph</span>
                            </div>
                        </div>







                    </div>





                </div>



            </div>
        </>
    )
}

export default AirX