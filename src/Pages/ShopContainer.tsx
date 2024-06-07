import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi"
import { LuStore } from "react-icons/lu"

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.2,
            ease: 'linear'
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 }
};

export const ShopContainer = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className='flex flex-col gap-[7.5vw] text-[3.8vw] md:text-[2.9vw] text-gray-500  items-start justify-start'
            >
                {[
                    { icon: <HiOutlineHome />, label: "Home", link: "/" },
                    { icon: <LuStore />, label: "Store", link: "/" }
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
