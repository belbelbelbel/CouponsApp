import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

import '../Style/Style.css'
export const Header = () => {
    const navigate = useNavigate()
    const handlehome = () => {
        navigate('/')
    }
    return (
        <div className='bg-[#edf1fe] h-[84vh] w-screen   cont'>
            <div className='md:flex flex-col text-center  gap-[0rem] justify-center'>
                <div className='md:flex justify-between  cont1 items-center md:px-[2.3rem]  md:py-[1.8vw]'>
                    <div className=' text-[1rem] text-[#212121] cursor-pointer font-black'>CoUpOnS</div>
                    <p className='co'>
                        <Link to="/login" className=' text-[14px] font-mono underline font-normal outline-none border-none md:tracking-tight flex md:items-center'>Log <div className='  font-sans'>in</div></Link>
                    </p>
                </div>
                {/* text-[#212121]  */}
                <div className='flex flex-col mx-auto  cont2 items-center  md:gap-[5rem] relative md:-top-[6.1rem]'>
                    <div className=' text-center cont3 md:w-[43%] w-[90vw] md:leading-[3.3vw]  relative md:my-[1vw] md:top-[7rem]  md:scale-y-95 text-black font-medium    tracking-[0.px] md:text-[3vw]'>
                        Love deals? You came to the right place
                    </div>
                    <div className='flex cont4 items-center  gap-[8vw]'>
                        <div>
                            <img src="/vr-removebg-preview.png" alt="b,j" width="270px" className='relative -top-[5vw] -right-[1rem]' />
                        </div>
                        <div className='flex flex-col cont5 items-center  justify-center gap-[1rem] relative md:-top-[2vw] no-wrap'>
                            <div className='cont6'>
                                <div className=' text-center  relative text-[#524b4b] md:right-[1em] w-[70%] mx-auto  tracking-[0px] md:text-[1vw]    font-normal'>
                                    The Honey extension automatically searches for coupons on 30,000+ sites around the globe.
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[4px]'>
                                <div className='flex  items-center justify-center gap-[8px]'>
                                    <div className='flex gap-[4px]'>
                                        <FaStar color='#524b4b' size="12.5px" />
                                        <FaStar color='#524b4b' size="12.5px" />
                                        <FaStar color='#524b4b' size="12.5px" />
                                        <FaStar color='#524b4b' size="12.5px" />
                                        <FaStar color='#524b4b' size="12.5px" />
                                    </div>
                                    <div className=' flex flex-col items-center gap-[4px] font-bold'>
                                        <div className=' flex items-center gap-[4px] font-bold'>
                                            <div className='text-[0.8rem] text-[#524b4b]'>141,786 </div><div className='text-[0.8rem] font-light text-[#524b4b] '>Chrome Store reviews</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-[0.15rem] items-center'>
                                    <div className='text-[0.8rem] text-[#524b4b] font-bold'>17 million </div>
                                    <div className='text-[0.8rem] font-light text-[#524b4b] '>members and counting</div>
                                </div>
                            </div>
                        </div>
                        <div className='relative -rotate-6 -top-[6rem] left-[0rem]'>
                            <img src="/screen-removebg-preview.png" alt="mnbv" width="230px" />
                        </div>
                    </div>
                    <div className='flex relative -top-[7vw] justify-center items-center gap-[12rem] '>
                        <div>

                            <img src="/png3-removebg-preview.png" alt="3rqd" width="220px" className='relative -top-[7vw]  -rotatsdfe-45' />
                        </div>
                        <div className='md:relative md:-top-[8rem] items-center justify-center flex text-center left-[0rem]'>
                            <button className='bg-orange-700 text-white md:w-[20vw] py-[0.7rem] rounded-[5px] hover:bg-orange-600' >Add to Chrome - it's Free</button>
                        </div>
                        <div>
                            <img src="/shased-removebg-preview.png" alt="3rqd" width="200px" className='relative -top-[6vw]' />
                        </div>
                    </div>
                    <div className='flex relative -top-[14.5rem] justify-center text-center items-center gap-[0rem] '>
                        <div>
                            <img src="/set-removebg-preview.png" alt="wefwae" width="200px" className='relative -robntate-45 -top-[8vw] ' />
                        </div>
                        <div className='absolute -top-[10rem] items-center justify-center flex text-center '>
                            <img src="/intl-v2-hero-laptop@2x.png" alt="3rqd" width="400px" className='' />
                        </div>
                        <div className='text-[#484848] text-center flex items-center justify-center relative top-[1.5rem] left-[1rem] text-[01.2rem] font-normal'>
                            <p>Scroll for more ways to save. It’s kind of our thing.</p>
                        </div>
                        <div>
                            <img src="/mouse-removebg-preview.png" alt="wefwae" width="160px" className='relative  rotate-3  -top-[9vw]' />
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
