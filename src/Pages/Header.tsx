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
        <div className='bg-[#edf1fe] h-[84vh] w-screen cont'>
            <div className='flex flex-col text-center gap-[0rem] justify-center'>
                <div className='flex justify-between items-center px-[2.3vw] py-[1.8vw]'>
                    <div className=' text-[1rem] tracki  text-[#212121]  font-black'>CoUpOnS</div>
                    <div>
                        <Link to="/login"  className=' text-[14px] font-mono underline gap-[2.3px]  font-normal outline-none border-none tracking-tight flex items-center'>Log <div className=' tracking-w font-sans'>in</div></Link>
                    </div>
                </div>
                {/* text-[#212121]  */}
                <div className='flex flex-col   mx-auto  items-center gap-[4.5rem] relative -top-[6.1rem]'>
                    <div className=' text-center relative my-[1vw] top-[7rem]  scale-y-95 text-black font-medium  tracking-tight text-[3vw]'>
                        Love deals? You came to <div className='relative flex items-center text-center justify-center -top-[1.2rem] tracking-tight scale-y-100'>the right place<div className='font-sans'>.</div></div>
                    </div>
                    <div className='flex items-center gap-[15rem]'>
                        <div>
                            <img src="/vr-removebg-preview.png" alt="b,j" width="250px" className='relative -top-[5rem] -right-[1rem]' />
                        </div>
                        <div className='flex flex-col gap-[1rem] relative -top-[3rem] '>
                            <div className=' text-center -top-[rem]  fo relative text-[#524b4b] scale-y-90 tracking-[0px] text-[18px]  font-normal'>
                                The Honey extension automatically searches for coupons <div>on 30,000+ sites around the globe.</div>
                                {/* <div><img src="/stock-vector-five-stars-rating-icon-vector-illustration-732417010-removebg-preview.png" alt="rgv" width="70px" /></div> */}
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[4px]'>
                                {/* <img src="/stock-vector-five-stars-rating-icon-vector-illustration-732417010-removebg-preview.png" alt="rgv" width="90px" className='relative top-[0.1rem]' /> */}
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
                        <div className='relative rotate-12 -top-[5rem] left-[1rem]'>
                            <img src="/screen-removebg-preview.png" alt="mnbv" width="220px" />
                        </div>
                    </div>
                    <div className='flex relative -top-[6vw] justify-center items-center gap-[11rem] '>
                        <div>

                            <img src="/png3-removebg-preview.png" alt="3rqd" width="220px" className='relative -top-[7rem]  -rotate-45' />
                        </div>
                        <div className='relative -top-[8rem] items-center justify-center flex text-center left-[1.5rem]'>
                            <button className='bg-orange-700 text-white w-[20vw] py-[0.7rem] rounded-[5px] hover:bg-orange-600' >Add to Chrome - it's Free</button>
                        </div>
                        <div>
                            <img src="/shased-removebg-preview.png" alt="3rqd" width="200px" className='relative -top-[6rem]' />
                        </div>
                    </div>
                    <div className='flex relative -top-[12.5rem] justify-center text-center items-center gap-[30rem] '>
                        <div>
                            <img src="/headset-removebg-preview.png" alt="wefwae" width="180px" className='relative rotate-90 -top-[7rem] ' />
                        </div>
                        <div className='absolute -top-[12rem] items-center justify-center flex text-center '>
                            <img src="/intl-v2-hero-laptop@2x.png" alt="3rqd" width="500px" className='' />
                        </div>
                        <div>
                            <img src="/mouse-removebg-preview.png" alt="wefwae" width="160px" className='relative  rotate-90  -top-[8rem]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
