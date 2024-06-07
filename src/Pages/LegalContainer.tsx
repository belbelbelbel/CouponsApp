import { motion } from 'framer-motion'
import { MdOutlinePrivacyTip } from "react-icons/md"
import { FaRegCopyright } from "react-icons/fa"
import { MdPermIdentity } from "react-icons/md"
import { GiTeePipe } from "react-icons/gi"
import { LuStore } from "react-icons/lu"
import { TbAccessible } from "react-icons/tb"
import { Link } from 'react-router-dom'

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

export const LegalContainer = () => {
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
                    { icon: <MdOutlinePrivacyTip />, label: "Privacy", link: "/" },
                    { icon: <FaRegCopyright />, label: "Copyright", link: "/" },
                    { icon: <MdPermIdentity />, label: "Patents", link: "/" },
                    { icon: <GiTeePipe />, label: "Terms", link: "/" },
                    { icon: <LuStore />, label: "Ad Disclosure", link: "/" },
                    { icon: <TbAccessible />, label: "Accessibility", link: "/" }
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
