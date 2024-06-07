import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { LuBadgeCheck } from "react-icons/lu"
import { FaDroplet } from "react-icons/fa6"
import { FaAffiliatetheme } from "react-icons/fa"

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

export const ProductContainer = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className='flex flex-col gap-[7.5vw] text-[3.8vw] md:text-[2.9vw] text-gray-500 tracking-[1pxwe] items-start justify-start'
            >
                {[
                    { icon: <FaDroplet />, label: "Droplist", link: "/" },
                    { icon: <LuBadgeCheck />, label: "Amazon Badge", link: "/" },
                    { icon: <FaAffiliatetheme />, label: "For Affiliates", link: "/" }
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
