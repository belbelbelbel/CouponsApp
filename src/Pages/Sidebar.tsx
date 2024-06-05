import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SidebarProps {
    show: boolean;
    setshow: (value: boolean) => void;
}

const itemVariants = {
    hidden: { opacity: 0,x:-5  },
    visible: { opacity: 1,x:15 }
};

export const Sidebar = ({ show, setshow }: SidebarProps) => {
    const stopPropagation = (e: { stopPropagation: () => void }) => {
        e.stopPropagation();
    };

    return (
        <div className='z-50 relative'>
            <div onClick={() => setshow(false)}>
                <motion.ul
                    id="navbar"
                    className={`${show ? '#navbar active' : '#navbar'}`}
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
                    <div className='flex justify-between items-center w-full px-[1rem] flex-row'>
                        {show && <div className='text-[1rem] text-[#212121] cursor-pointer font-black'>CoUpOnS</div>}
                        {show && <RxCross1 size="6vw" onClick={() => setshow(false)} />}
                    </div>
                    <div className='w-[27%] font-sans' onClick={stopPropagation}>
                        <motion.li variants={itemVariants}><a href="index.html">Join</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Shop</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Blog</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">About</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                        <motion.li variants={itemVariants}><a href="index.html">Contact</a></motion.li>
                    </div>
                </motion.ul>
            </div>
        </div>
    );
};
