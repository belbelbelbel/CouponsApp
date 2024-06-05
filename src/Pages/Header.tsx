import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import '../Style/Style.css';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { Sidebar } from './Sidebar';
import { Text } from './Text';
import { Text2 } from './Text2';
import { Text3 } from './Text3';
import { Navbar } from './Navbar';

export const Header = () => {
    const [show, setshow] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false

    );
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handleShow = () => {
        setshow(!show);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollViewElement = document.getElementById('scrollview');
            if (scrollViewElement) {
                const bounding = scrollViewElement.getBoundingClientRect();
                console.log(bounding)
                if (bounding.top >= 0) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='bg-[#edf1fe] mx-auto flex flex-col relative  xl:py-0 md:h-[120vw] xl:h-[78vh] w-screen cont'>
                {showNavbar && <Navbar />}
                <div className='xl:flex flex-col con text-center  justify-center'>
                    <div className='md:flex justify-between cont1 items-center xl:px-[2.3rem] xl:py-[1.8vw] md:py-[0.8vw] relative '>
                        <div className='xl:text-[1rem] md:text-[1.8rem] text-[#212121]  text-[4vw] cursor-pointer  font-black'>CoUpOnS</div>
                        <p className='co z-30 md:hidden xl:block'>
                            <Link to="/login" className='text-[14px] font-mono underline font-normal outline-none border-none xk:tracking-tight flex md:items-center'>Log <div className='font-sans'>in</div></Link>
                        </p>

                        <div className='xl:hidden   z-30  nav'>
                            {!show && (<div className='xl:hidden'><RxHamburgerMenu size="6vw" onClick={handleShow} /></div>)}
                             <Sidebar show={show} setshow={setshow}></Sidebar>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center xl:-left-[1rem] relative'>
                        <div className='flex flex-col mx-auto cont2 items-center top-[] md:gap-[7vw] xl:gap-[4.7rem]  relative md:-top-[9.7vw] xl:-top-[6.1rem]'>
                            <div className='text-center  cont3 xl:w-[43%] md:w-[100%] w-[90vw] text-[#212121] leading-[10vw] xl:leading-[3.3vw] md:leading-[9.5vw] flex relative md:my-[1vw] md:top-[8rem] xl:top-[7rem] md:scale-y-95 text-black font-medium tracking-[0.2px] xl:text-[3vw] md:text-[8vw]'>
                                Love deals? You came to the right place.
                            </div>
                            <div className='flex cont4 items-center xl:gap-[8vw] '>
                                <div className='xl:w-[270px] md:w-[200px] xl:block md:hidden '>
                                    <img src="/vr-removebg-preview.png" alt="b,j" className='relative -top-[5vw]  -right-[1rem]' />
                                </div>
                                <div className='flex flex-col cont5 items-center justify-center xl:gap-[1vw] gap-[1vw] relative top-[6vw] md:top-[8vw] xl:-top-[2vw] no-wrap'>
                                    <div className='cont6'>
                                        <div className='text-center relative text-[#524b4b] xl:right-[1em]  xl:w-[65%] w-[87%] mx-auto text-[3.92vw] md:w-[75%] tracking-[0px] md:text-[3.4vw] xl:text-[1vw] font-normal'>
                                            The Honey extension automatically searches for coupons on 30,000+ sites around the globe.
                                        </div>
                                    </div>
                                    <div className='flex flex-col relative xl:-left-[1rem] text-center  xl:text-[1vw] md:text-[4vw]  items-center justify-center xl:gap-[2px] gap-[2px] md:gap-[0.5rem]'>
                                        <div className='flex items-center text-center xl:text-[1vw] md:text-[4vw] justify-center gap-[8px]'>
                                            <div className='flex gap-[4px] xl:text-[1vw] md:text-[4vw]'>
                                                <FaStar color='#524b4b' size="19.5px" />
                                                <FaStar color='#524b4b' size="19.5px" />
                                                <FaStar color='#524b4b' size="19.5px" />
                                                <FaStar color='#524b4b' size="19.5px" />
                                                <FaStar color='#524b4b' size="19.5px" />
                                            </div>
                                            <div className='flex flex-col items-center gap-[5px] font-bold'>
                                                <div className='flex items-center gap-[4px] font-bold xl:text-[1vw] md:text-[5vw]'>
                                                    <div className='text-[0.8rem] text-[#524b4b] xl:text-[1vw] md:text-[2.5vw]'>141,786 </div><div className='text-[0.8rem] font-light text-[#524b4b] xl:text-[1vw] md:text-[3vw]'>Chrome Store reviews</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex gap-[0.15rem] items-center xl:text-[1vw] md:text-[5vw]'>
                                            <div className='text-[0.8rem] text-[#524b4b] font-bold xl:text-[1vw] md:text-[2.5vw]'>17 million </div>
                                            <div className='text-[0.8rem] font-light text-[#524b4b] xl:text-[1vw] md:text-[2.5vw]'>members and counting</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative -rotate-6 xl:-top-[5.5rem] -rotate-12 md:-top-[3.5rem] xl:block md:hidden xl:w-[230px] md:w-[160px] left-[0rem]'>
                                    <img src="/screen-removebg-preview.png" alt="mnbv" />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-[0vw]'>
                                <div className='flex relative md:-top-[6vw]  md:-left-[0.3rem] justify-center items-center md:gap-[8rem] xl:gap-[12.4rem]'>
                                    <div className='xl:w-[220px] md:w-[190px] xl:block md:hidden img2'>
                                        <img src="/png3-removebg-preview.png" alt="3rqd" className='relative -top-[7vw]' />
                                    </div>
                                    <div className='md:relative xl:-top-[8rem] md:top-[5rem] items-center justify-center text-center flex text-center xl:-left-[0.5rem]'>
                                        <button className='bg-orange-700 text-white md:w-[55vw] xl:w-[20vw] w-[56vw] py-[1.2vh] md:py-[2vw] xl:py-[0.7vw] md:rounded-[10px] md:text-[3vw] xl:text-[1vw] rounded-[5px] xl:rounded-[5px]  z-0 hover:bg-orange-600'>Add to Chrome - it's Free</button>
                                    </div>
                                    <div className='xl:w-[200px] md:w-[170px] xl:block md:hidden img2'>
                                        <img src="/shased-removebg-preview.png" alt="3rqd" className='relative -top-[7vw]' />
                                    </div>
                                </div>
                                <div className='flex md:relative xl:-top-[8.5rem] justify-center text-center items-center md:gap-[25rem] xl:gap-[30rem]'>
                                    <div className='relative xl:w-[180px] xl:block md:hidden md:w-[150px]'>
                                        <img src="/set-removebg-preview.png " alt="wefwae" className='relative -top-[7vw] -rotatdfve-45 img2 mb-[3rem]' />
                                    </div>
                                    <div className='absolute top-[72vw] xl:-top-[9.5rem] items-center justify-center flex text-center md:top-[1.3vw] xl:w-[400px] md:w-[80vw]'>
                                        <img src="/intl-v2-hero-laptop@2x.png" alt="3rqd" className='' />
                                    </div>
                                    <div className='absolute tracking-wider  md:hidden img2'>Scroll for more ways to save. It’s kind of our thing.</div>
                                    <div className='relative xl:w-[150px] xl:block md:hidden no-wrap md:w-[120px]'>
                                        <img src="/mouse-removebg-preview.png" alt="wefwae" className='relative img3 rotate-3 -top-[9vw]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='scrollview'>
                <Text />
                <Text2 />
                <Text3 />
            </div>
        </div>
    );
};
