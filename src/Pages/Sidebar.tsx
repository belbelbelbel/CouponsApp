import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiJamesBondAperture } from "react-icons/gi";
import { MdNearbyError } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FaStore } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdHelpOutline } from "react-icons/md";
import { BsHouseDashFill } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";
import { RiPassValidFill } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";
import { ShopContainer } from './ShopContainer';
interface SidebarProps {
    show: boolean;
    setshow: (value: boolean) => void;
}

const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 15 }
};

export const Sidebar = ({ show, setshow }: SidebarProps) => {
    const [showcontent, setshowcontent] = useState(false)
    const [showlegal, setshowlegal] = useState(false)
    const [showcompany, setshowcompany] = useState(false)
    const [showproduct, setshowproduct] = useState(false)
    const [showfollow, setshowfollow] = useState(false)
    const stopPropagation = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    };
    const handleshowcontent = () => {
        setshowcontent(!showcontent)
    }
    const handleshowcompany = () => {
        setshowcompany(!showcompany)
    }
    const handlelegal = () => {
        setshowlegal(!showlegal)
    }
    const handleshowproduct = () => {
        setshowproduct(!showproduct)
    }
    const handleshowfollow = () => {
        setshowfollow(!showfollow)
    }
    return (
        <div className='z-50   '>
            <div onClick={() => setshow(false)}>
                <motion.ul
                    id="navbar"
                    className={`${show ? '#navbar active' : '#navbar'} overflow-x-hidden overflow-y-auto`}
                    initial="hidden"
                    animate={show ? 'visible' : 'hidden'}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.14,
                                delayChildren: 0.2,
                                // staggerDirection: -1,
                                easeIn: 'linear'
                            }
                        }
                    }}
                >
                    {/* #7a4a3a */}
                    <div className='flex justify-between items-center w-full px-[4vw] flex-row'>
                        {show && <div className='text-[3.6vw] text-[#212121] cursor-pointer font-black'>CoUpOnS</div>}
                        {show && <RxCross1 size="5vw" onClick={() => setshow(false)} />}
                    </div>
                    <ul className='w-[100%] font-sans flex  flex-col md:gap-[5vw] gap-[6vw] max-w-[90%] md:w-[88%] mx-auto  items-start  justify-cneter' onClick={stopPropagation}>
                        <motion.li variants={itemVariants} className='text-[3.4vw] '><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <GiJamesBondAperture className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Join</div>
                            </div>
                        </Link></motion.li>
                        <motion.li variants={itemVariants} className='text-[3.4vw] '><Link to="/login">
                            <div className='flex items-center gap-[2.5vw]'>
                                <BiLogInCircle className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Log in</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='flex justify-between  gap-[65vw] items-center'>
                                <motion.li variants={itemVariants} className='text-[3.4vw]'><div>
                                    <div className='flex items-center gap-[2.5vw]'>
                                        <FaShopify className='text-[#212121]' size="4vw" />
                                        <div className='text-[#212121]'>Shop</div>
                                    </div>
                                </div></motion.li>
                                {
                                    !showcontent ? <FaAngleUp className='text-[#212121] text-[3vw]' onClick={handleshowcontent} /> : <div><FaAngleDown className='text-[#212121] text-[3vw]' onClick={handleshowcontent} /></div>
                                }

                            </div>
                            {
                                showcontent && <div className='w-[70%] my-[0.7rem] mx-auto flex items-center justify-start'>
                                    <div className=''><ShopContainer /></div>
                                </div>
                            }
                        </div>

                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex gap-[2.5vw] items-center'>
                                <MdNearbyError className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>About</div>
                            </div>
                        </Link></motion.li>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <IoIosContacts className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Contact</div>
                            </div>
                        </Link></motion.li>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2vw]'>
                                <FaStore className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Store</div>
                            </div>
                        </Link></motion.li>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <SlEnvolopeLetter className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Invite friends</div>
                            </div>
                        </Link></motion.li>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <MdHelpOutline className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Help</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <BsHouseDashFill className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Company</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <RiProductHuntLine className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Products</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <RiPassValidFill className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Legal</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">
                            <div className='flex items-center gap-[2.5vw]'>
                                <RiUserFollowFill className='text-[#212121]' size="4vw" />
                                <div className='text-[#212121]'>Follow us</div>
                            </div>
                        </Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/">Get the App</Link></motion.li>
                        <motion.div variants={itemVariants}
                            className='bg-gray-300 w-[94%] md:w-[100%] h-[1px]'></motion.div>
                        <motion.li variants={itemVariants} className='text-[3.4vw]'><Link to="/"></Link></motion.li>
                    </ul>
                </motion.ul>
            </div>
        </div>
    );
};
