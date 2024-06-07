import { motion } from 'framer-motion'
import React from 'react'
import { HiOutlineHome } from 'react-icons/hi'
import { LuStore } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { MdNearbyError, MdHelpOutline, MdWork } from 'react-icons/md'
import { FaRegNewspaper } from 'react-icons/fa'
import { RiBloggerLine } from 'react-icons/ri'
import { TiMediaPause } from 'react-icons/ti'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
            
            ease: 'linear'
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 }
};

export const CompanyContainer = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className='flex flex-col gap-[3.5vw] text-[3.4vw] md:text-[2.9vw] text-gray-500 items-start justify-start'
            >
                {[
                    { icon: <MdNearbyError />, label: "About", link: "/" },
                    { icon: <MdHelpOutline />, label: "Help", link: "/" },
                    { icon: <MdWork />, label: "Careers", link: "/" },
                    { icon: <FaRegNewspaper />, label: "News", link: "/" },
                    { icon: <RiBloggerLine />, label: "Blog", link: "/" },
                    { icon: <TiMediaPause />, label: "Media", link: "/" }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className='flex items-center justify-center gap-[2.5vw]'
                    >
                        <div className='text-[#212121]'>{item.icon}</div>
                        <Link to={item.link}>{item.label}</Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
