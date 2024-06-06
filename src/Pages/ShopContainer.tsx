import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
export const ShopContainer = () => {
    return (
        <div>
            <div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1} }}
                    className='flex flex-col gap-[2vw] text-[4vw] text-gray-600 tracking-[1wqpx]'>
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/login">Store</Link></div>
                </motion.div>
            </div>
        </div>
    )
}
