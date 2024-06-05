import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
export const Navbar = () => {
    const [show, setshow] = useState(false);
    const handleShow = () => {
        setshow(!show);
    };
    return (
        <div className='bg-white w-screen fixed z-20 py-[1rem]'>
            <div>
                <div className='flex items-center justify-between px-[1rem] xl:px-[4rem] md:px-[2rem]'>
                    <div className=' xl:text-[1rem] text-[1rem] md:text-[1.5rem] text-[#212121] cursor-pointer font-black'>CoUpOnS</div>
                    <div className='flex items-center gap-[1rem] xl:gap-[4rem] md:gap-[2rem]'>
                        <button className='bg-orange-700 text-white xl:w-[15vw] md:w-[40vw] w-[54vw] py-[1.2vh] md:py-[2.5vw]  xl:py-[0.7vw] rounded-[5px] hover:bg-orange-600'>Add to Chrome - it's Free</button>
                        <div className=''>
                            <div className='log xl:block md:hidden'>
                                <Link to="/login" className=' text-[14px] font-mono underline font-normal outline-none border-none md:tracking-tight flex md:items-center'>Log <div className='  font-sans'>in</div></Link>
                            </div>
                            <div className='xl:hidden  nav'>
                                {!show  ?  (<div><RxHamburgerMenu size="6vw" onClick={handleShow} /></div>):(<div><RxHamburgerMenu size="6vw" onClick={handleShow} /></div>)}
                                <Sidebar show={show} setshow={setshow}></Sidebar>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
